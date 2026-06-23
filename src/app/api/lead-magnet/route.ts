import { NextResponse } from "next/server";
import { validateLeadMagnet, LEAD_MAGNETS } from "@/lib/lead-magnet";
import { signLeadToken } from "@/lib/lead-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BREVO_BASE = "https://api.brevo.com";

const DAY_MS = 24 * 60 * 60 * 1000;
const EMAIL_TOKEN_TTL_MS = 7 * DAY_MS;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function tryReadJson(res: Response): Promise<string> {
  try {
    return JSON.stringify(await res.json());
  } catch {
    return "(no json body)";
  }
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

  const result = validateLeadMagnet(body);
  if (!result.ok || !result.data) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }
  const data = result.data;
  const magnet = LEAD_MAGNETS[data.leadMagnetSlug];

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LEAD_MAGNET_LIST_ID;
  const senderEmail =
    process.env.BREVO_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL;
  const senderName = process.env.BREVO_FROM_NAME ?? "Be'energies";
  const tokenSecret = process.env.LEAD_MAGNET_TOKEN_SECRET;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.be-energies.be";

  if (!apiKey || !listId || !senderEmail || !tokenSecret) {
    console.error(
      "[lead-magnet] missing env: BREVO_API_KEY / BREVO_LEAD_MAGNET_LIST_ID / BREVO__OR_CONTACT_FROM_EMAIL / LEAD_MAGNET_TOKEN_SECRET",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Service de téléchargement temporairement indisponible. Merci d'écrire à info@be-energies.be ou de réessayer dans quelques minutes.",
      },
      { status: 503 },
    );
  }

  // 1. Create or update the contact in the Brevo lead-magnet list.
  //    We treat any non-2xx as a hard failure so we never silently lose
  //    a lead — the user can retry.
  try {
    const brevoContactRes = await fetch(`${BREVO_BASE}/v3/contacts`, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.firstName ?? "",
          LAST_LEAD_MAGNET: data.leadMagnetSlug,
          LAST_LEAD_MAGNET_AT: new Date().toISOString(),
          SOURCE_PAGE: data.sourcePage ?? "",
          OPTIN_MARKETING: data.consentMarketing,
        },
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });

    if (!brevoContactRes.ok) {
      const detail = await tryReadJson(brevoContactRes);
      console.error(
        "[lead-magnet] brevo contact failed:",
        brevoContactRes.status,
        detail,
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            "Impossible d'enregistrer votre demande pour le moment. Merci de réessayer ou de nous écrire directement.",
        },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error(
      "[lead-magnet] brevo contact error:",
      err instanceof Error ? err.message : "unknown",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Impossible d'enregistrer votre demande pour le moment. Merci de réessayer ou de nous écrire directement.",
      },
      { status: 502 },
    );
  }

  // 2. Mint two tokens:
  //    - one short (30 min) for the modal's immediate "Télécharger" button,
  //    - one long (7 days) for the confirmation email, so the user can
  //      still open the link from their inbox days later.
  const modalToken = signLeadToken(data.leadMagnetSlug);
  const modalDownloadUrl = `${magnet.pdfPath}?exp=${modalToken.exp}&sig=${encodeURIComponent(modalToken.sig)}`;

  const emailToken = signLeadToken(data.leadMagnetSlug, {
    ttlMs: EMAIL_TOKEN_TTL_MS,
  });
  const emailDownloadUrl = `${siteUrl}${magnet.pdfPath}?exp=${emailToken.exp}&sig=${encodeURIComponent(emailToken.sig)}`;

  // 3. Send the transactional confirmation email via Brevo.
  //    A failure here does NOT fail the user flow — they already got the
  //    download URL in the modal. We just log it for ops.
  try {
    const greeting = data.firstName
      ? `Bonjour ${escapeHtml(data.firstName)},`
      : "Bonjour,";
    const htmlBody = `<!doctype html><html lang="fr"><body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f7f4ee; padding:24px; margin:0;">
  <div style="max-width:560px; margin:0 auto; background:#ffffff; border:1px solid #e6e1d6; border-radius:12px; padding:24px;">
    <p style="font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:#a3640d; margin:0 0 8px;">Guide gratuit</p>
    <h2 style="margin:0 0 16px; color:#0c1220; font-size:20px;">${escapeHtml(magnet.title)}</h2>
    <p style="font-size:15px; color:#1f2430; line-height:1.6; margin:0 0 12px;">${greeting}</p>
    <p style="font-size:15px; color:#1f2430; line-height:1.6; margin:0 0 12px;">Voici votre guide en téléchargement direct ci-dessous. Pensez à le partager avec votre conjoint·e si vous décidez ensemble.</p>
    <p style="margin:24px 0;">
      <a href="${emailDownloadUrl}" style="display:inline-block; background:#f59e0b; color:#0c1220; font-weight:700; padding:12px 22px; border-radius:8px; text-decoration:none;">Télécharger le guide</a>
    </p>
    <p style="font-size:13px; color:#7a7f8a; line-height:1.6; margin:0 0 8px;">Vous n'êtes pas inscrit·e à une newsletter. Vous ne recevrez pas d'emails commerciaux sans avoir explicitement coché l'option dans le formulaire.</p>
    <p style="font-size:13px; color:#7a7f8a; line-height:1.6; margin:0;">Une question ? Répondez à ce mail, c'est Benoît qui le lit.</p>
  </div>
</body></html>`;

    const textBody = [
      data.firstName ? `Bonjour ${data.firstName},` : "Bonjour,",
      "",
      `Voici votre guide en téléchargement : ${emailDownloadUrl}`,
      "",
      "Vous n'êtes pas inscrit(e) à une newsletter sans votre accord explicite.",
      "Une question ? Répondez à ce mail, c'est Benoît qui le lit.",
      "",
      "Be'energies",
    ].join("\n");

    const brevoEmailRes = await fetch(`${BREVO_BASE}/v3/smtp/email`, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [
          {
            email: data.email,
            name: data.firstName ?? data.email.split("@")[0],
          },
        ],
        subject: magnet.emailSubject,
        htmlContent: htmlBody,
        textContent: textBody,
      }),
    });

    if (!brevoEmailRes.ok) {
      const detail = await tryReadJson(brevoEmailRes);
      console.error(
        "[lead-magnet] brevo email failed:",
        brevoEmailRes.status,
        detail,
      );
    }
  } catch (err) {
    console.error(
      "[lead-magnet] brevo email error:",
      err instanceof Error ? err.message : "unknown",
    );
  }

  return NextResponse.json({
    ok: true,
    downloadUrl: modalDownloadUrl,
    title: magnet.title,
    filename: magnet.downloadFilename,
  });
}
