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

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Format de requête invalide." },
      { status: 400 },
    );
  }

  const result = validateContact(body);
  if (!result.ok || !result.data) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }
  const data = result.data;

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
