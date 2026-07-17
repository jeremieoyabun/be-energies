/**
 * Shared lead-magnet contract between the modal client, the capture API
 * route, and the token-gated PDF route.
 *
 * Adding a new lead magnet later is a single entry in LEAD_MAGNETS plus
 * a matching PDF route that consumes verifyLeadToken() — nothing else
 * needs to change.
 */

export const LEAD_MAGNET_SLUGS = ["pieges-a-eviter"] as const;
export type LeadMagnetSlug = (typeof LEAD_MAGNET_SLUGS)[number];

export interface LeadMagnetDefinition {
  slug: LeadMagnetSlug;
  title: string;
  /** Server-side PDF endpoint (token-gated). */
  pdfPath: string;
  /** Default filename suggested to the browser when saving. */
  downloadFilename: string;
  /** Subject line used by the Brevo transactional confirmation email. */
  emailSubject: string;
  /** Short one-line description shown in the modal hero. */
  description: string;
}

export const LEAD_MAGNETS: Record<LeadMagnetSlug, LeadMagnetDefinition> = {
  "pieges-a-eviter": {
    slug: "pieges-a-eviter",
    title: "Les 7 pièges à éviter avant de signer",
    pdfPath: "/api/guide/pieges/",
    downloadFilename: "be-energies-7-pieges-a-eviter.pdf",
    emailSubject: "Votre guide : 7 pièges à éviter avant de signer",
    description:
      "Checklist gratuite par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT.",
  },
};

export function isLeadMagnetSlug(value: unknown): value is LeadMagnetSlug {
  return (
    typeof value === "string" &&
    (LEAD_MAGNET_SLUGS as readonly string[]).includes(value)
  );
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

export type FieldErrors = Record<string, string>;

export interface LeadMagnetPayload {
  email: string;
  firstName?: string;
  leadMagnetSlug: LeadMagnetSlug;
  sourcePage?: string;
  consentMarketing: boolean;
}

interface ValidateOk {
  ok: true;
  data: LeadMagnetPayload;
  errors: FieldErrors;
}

interface ValidateErr {
  ok: false;
  data?: undefined;
  errors: FieldErrors;
}

// Simple but strict-enough email shape. Mirrors the validator used in
// contact-form.ts so behaviour is consistent across forms.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function asBool(v: unknown): boolean {
  if (v === true || v === "on" || v === "true" || v === "yes") return true;
  return false;
}

export function validateLeadMagnet(
  raw: unknown,
): ValidateOk | ValidateErr {
  const errors: FieldErrors = {};
  if (!raw || typeof raw !== "object") {
    return { ok: false, errors: { _form: "Requête invalide." } };
  }
  const r = raw as Record<string, unknown>;

  // Honeypot: any non-empty value means a bot — fail silently with a
  // generic "ok-looking" error so we don't tip them off.
  if (asString(r.company)) {
    return { ok: false, errors: { _form: "Requête invalide." } };
  }

  const email = asString(r.email).toLowerCase();
  if (!email) errors.email = "Votre email est requis.";
  else if (email.length > 200) errors.email = "Email trop long.";
  else if (!EMAIL_RE.test(email)) errors.email = "Email invalide.";

  const firstNameRaw = asString(r.firstName);
  const firstName = firstNameRaw.length > 60
    ? firstNameRaw.slice(0, 60)
    : firstNameRaw;

  const leadMagnetSlug = asString(r.leadMagnetSlug);
  if (!isLeadMagnetSlug(leadMagnetSlug)) {
    errors.leadMagnetSlug = "Guide inconnu.";
  }

  // sourcePage is a soft field — sanitise but never reject on it.
  const sourcePageRaw = asString(r.sourcePage);
  const sourcePage = sourcePageRaw.length > 200
    ? sourcePageRaw.slice(0, 200)
    : sourcePageRaw;

  const consentMarketing = asBool(r.consentMarketing);

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    data: {
      email,
      firstName: firstName || undefined,
      leadMagnetSlug: leadMagnetSlug as LeadMagnetSlug,
      sourcePage: sourcePage || undefined,
      consentMarketing,
    },
  };
}
