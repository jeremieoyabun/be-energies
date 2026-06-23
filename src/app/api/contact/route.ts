import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  validateContact,
  PROJECT_LABELS,
  BUILDING_LABELS,
  TIMELINE_LABELS,
} from "@/lib/contact-form";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function parseRecipients(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

// Keep in sync with the client-side limits in ContactForm.tsx.
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 3 * 1024 * 1024; // 3 MB total raw
const ACCEPTED_MIME = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
]);
const ACCEPTED_EXT = new Set(["pdf", "jpg", "jpeg", "png", "webp"]);

// Strip path separators and quotes so the filename can't break our HTML
// email or be used to suggest a path that confuses the recipient's client.
function safeFilename(name: string): string {
  const cleaned = name
    .replace(/[\\/]/g, "_")
    .replace(/[\r\n"]/g, "")
    .trim();
  return cleaned.length === 0 ? "fichier" : cleaned.slice(0, 200);
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

export async function POST(request: Request) {
  let fd: FormData;
  try {
    fd = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Format de requête invalide." },
      { status: 400 },
    );
  }

  const payload = {
    name: fd.get("name"),
    email: fd.get("email"),
    phone: fd.get("phone"),
    postal: fd.get("postal"),
    projectType: fd.get("projectType"),
    buildingType: fd.get("buildingType"),
    timeline: fd.get("timeline"),
    existingQuote: fd.get("existingQuote") === "yes",
    message: fd.get("message"),
    gdpr: fd.get("gdpr") === "on",
    company: fd.get("company"), // honeypot
  };

  const result = validateContact(payload);
  if (!result.ok || !result.data) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }
  const data = result.data;

  // Extract + validate attachments. Empty file entries (Safari sometimes
  // emits a zero-byte File for unset inputs) are silently dropped.
  const rawFiles = fd.getAll("attachments");
  const files: File[] = [];
  for (const entry of rawFiles) {
    if (entry instanceof File && entry.size > 0) files.push(entry);
  }

  if (files.length > MAX_FILES) {
    return NextResponse.json(
      { ok: false, error: `Trop de fichiers (max ${MAX_FILES}).` },
      { status: 422 },
    );
  }
  const totalBytes = files.reduce((s, f) => s + f.size, 0);
  if (totalBytes > MAX_TOTAL_BYTES) {
    return NextResponse.json(
      {
        ok: false,
        error: `Pièces jointes trop volumineuses (max ${formatBytes(MAX_TOTAL_BYTES)} au total).`,
      },
      { status: 422 },
    );
  }
  for (const f of files) {
    const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ACCEPTED_MIME.has(f.type) && !ACCEPTED_EXT.has(ext)) {
      return NextResponse.json(
        {
          ok: false,
          error: `Format non supporté : ${safeFilename(f.name)}. PDF, JPG, PNG, WebP uniquement.`,
        },
        { status: 422 },
      );
    }
  }

  const recipients = parseRecipients(process.env.CONTACT_TO_EMAIL);
  const fromAddress = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  // Hard fail visibly if mail isn't configured so we never silently lose leads.
  if (recipients.length === 0 || !fromAddress || !apiKey) {
    console.error(
      "[contact] missing env: CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL / RESEND_API_KEY",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Le service de contact est temporairement indisponible. Merci de nous écrire à info@be-energies.be ou d'appeler.",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safePostal = escapeHtml(data.postal);
  const safeMessage = data.message ? escapeHtml(data.message) : "";
  const projectLabel = PROJECT_LABELS[data.projectType];
  const buildingLabel = data.buildingType
    ? BUILDING_LABELS[data.buildingType]
    : "-";
  const timelineLabel = data.timeline ? TIMELINE_LABELS[data.timeline] : "-";

  const subject = `Nouvelle demande - ${projectLabel} - ${data.name}`;

  // Convert files to Resend attachment shape. Reading the buffers here
  // (rather than streaming) is fine since we already capped total size.
  const attachments = await Promise.all(
    files.map(async (f) => ({
      filename: safeFilename(f.name),
      content: Buffer.from(await f.arrayBuffer()),
    })),
  );

  const attachmentRows = attachments
    .map(
      (a, i) =>
        `<li style="padding:2px 0; font-size:13px; color:#1f2430;">${escapeHtml(a.filename)} <span style="color:#7a7f8a;">(${formatBytes(files[i].size)})</span></li>`,
    )
    .join("");

  const html = `
<!doctype html>
<html lang="fr">
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f7f4ee; padding:24px;">
    <div style="max-width:560px; margin:0 auto; background:#ffffff; border:1px solid #e6e1d6; border-radius:12px; padding:24px;">
      <p style="font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#a3640d; margin:0 0 8px;">Nouveau lead Be'energies</p>
      <h2 style="margin:0 0 16px; color:#0c1220; font-size:20px;">${escapeHtml(subject)}</h2>
      <table cellpadding="0" cellspacing="0" style="width:100%; font-size:14px; color:#3a3f4b; border-collapse:collapse;">
        <tr><td style="padding:6px 0; width:140px; color:#7a7f8a;">Nom</td><td><strong>${safeName}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Email</td><td><a href="mailto:${safeEmail}" style="color:#0c1220;">${safeEmail}</a></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Téléphone</td><td><a href="tel:${safePhone.replace(/\s+/g, "")}" style="color:#0c1220;">${safePhone}</a></td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Code postal / ville</td><td>${safePostal}</td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Type de projet</td><td>${escapeHtml(projectLabel)}</td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Type de bâtiment</td><td>${escapeHtml(buildingLabel)}</td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Délai</td><td>${escapeHtml(timelineLabel)}</td></tr>
        <tr><td style="padding:6px 0; color:#7a7f8a;">Devis existant ?</td><td><strong>${data.existingQuote ? "Oui, à faire analyser" : "Non"}</strong></td></tr>
      </table>
      ${
        attachments.length > 0
          ? `<div style="margin-top:18px; padding:14px 16px; background:#fff8eb; border-left:3px solid #b45309; border-radius:6px;"><p style="margin:0 0 8px; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#7a7f8a;">Pièces jointes (${attachments.length})</p><ul style="margin:0; padding-left:18px;">${attachmentRows}</ul></div>`
          : ""
      }
      ${
        safeMessage
          ? `<div style="margin-top:18px; padding:14px 16px; background:#f7f4ee; border-left:3px solid #f59e0b; border-radius:6px;"><p style="margin:0 0 6px; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#7a7f8a;">Message</p><div style="font-size:14px; color:#1f2430; white-space:pre-wrap;">${safeMessage}</div></div>`
          : ""
      }
      <p style="margin-top:24px; font-size:12px; color:#7a7f8a;">Reçu via le formulaire be-energies.be, ${new Date().toLocaleString("fr-BE")}</p>
    </div>
  </body>
</html>`;

  const textLines = [
    `Nouveau lead Be'energies`,
    `Projet: ${projectLabel}`,
    `Nom: ${data.name}`,
    `Email: ${data.email}`,
    `Téléphone: ${data.phone}`,
    `Code postal / ville: ${data.postal}`,
    `Bâtiment: ${buildingLabel}`,
    `Délai: ${timelineLabel}`,
    `Devis existant: ${data.existingQuote ? "OUI" : "non"}`,
    attachments.length > 0
      ? `\nPièces jointes (${attachments.length}):\n${attachments.map((a, i) => `- ${a.filename} (${formatBytes(files[i].size)})`).join("\n")}`
      : "",
    data.message ? `\nMessage:\n${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      replyTo: data.email,
      subject,
      html,
      text: textLines,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("[contact] resend error:", error.message);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Impossible d'envoyer votre message pour le moment. Merci de réessayer ou de nous appeler.",
        },
        { status: 502 },
      );
    }
  } catch (err) {
    // Never log raw user input - only the failure shape.
    console.error(
      "[contact] unexpected error:",
      err instanceof Error ? err.message : "unknown",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Impossible d'envoyer votre message pour le moment. Merci de réessayer ou de nous appeler.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
