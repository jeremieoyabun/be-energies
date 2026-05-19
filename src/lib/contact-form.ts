/**
 * Shared contact form contract between client and server.
 * Keeping this in one place avoids drift between the form UI and the route handler.
 */

export const PROJECT_TYPES = [
  "panneaux-photovoltaiques",
  "batteries-domestiques",
  "bornes-de-recharge",
  "pompes-a-chaleur",
  "conformite-electrique",
  "nettoyage-toiture",
  "devis-analyse",
  "autre",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const BUILDING_TYPES = [
  "maison",
  "appartement",
  "commerce",
  "pme",
] as const;

export type BuildingType = (typeof BUILDING_TYPES)[number];

export const TIMELINES = ["asap", "3-months", "6-months", "info"] as const;
export type Timeline = (typeof TIMELINES)[number];

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  postal: string;
  projectType: ProjectType;
  buildingType?: BuildingType;
  timeline?: Timeline;
  existingQuote: boolean;
  message?: string;
  // Honeypot field — must remain empty for real users.
  company?: string;
  // GDPR consent
  gdpr: boolean;
}

export interface FieldErrors {
  [field: string]: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// Belgian-friendly: accepts +32..., 0032..., 0..., spaces, dots, dashes, parentheses.
const PHONE_RE = /^[+0][\d\s().-]{7,20}$/;

export function validateContact(input: unknown): {
  ok: boolean;
  errors: FieldErrors;
  data?: ContactPayload;
} {
  const errors: FieldErrors = {};
  if (typeof input !== "object" || input === null) {
    return { ok: false, errors: { _form: "Requête invalide." } };
  }
  const raw = input as Record<string, unknown>;

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(raw.name);
  const email = str(raw.email);
  const phone = str(raw.phone);
  const postal = str(raw.postal);
  const projectType = str(raw.projectType);
  const buildingType = str(raw.buildingType);
  const timeline = str(raw.timeline);
  const message = str(raw.message);
  const company = str(raw.company); // honeypot
  const existingQuote = raw.existingQuote === true || raw.existingQuote === "yes";
  const gdpr = raw.gdpr === true || raw.gdpr === "on" || raw.gdpr === "yes";

  if (name.length < 2 || name.length > 120) {
    errors.name = "Indiquez votre nom complet.";
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    errors.email = "Email invalide.";
  }
  if (!PHONE_RE.test(phone)) {
    errors.phone = "Numéro de téléphone invalide.";
  }
  if (postal.length < 2 || postal.length > 80) {
    errors.postal = "Indiquez votre code postal ou ville.";
  }
  if (!PROJECT_TYPES.includes(projectType as ProjectType)) {
    errors.projectType = "Sélectionnez un type de projet.";
  }
  if (buildingType && !BUILDING_TYPES.includes(buildingType as BuildingType)) {
    errors.buildingType = "Choix invalide.";
  }
  if (timeline && !TIMELINES.includes(timeline as Timeline)) {
    errors.timeline = "Choix invalide.";
  }
  if (message.length > 4000) {
    errors.message = "Message trop long (4000 caractères max).";
  }
  if (!gdpr) {
    errors.gdpr = "Vous devez accepter le traitement de vos données.";
  }
  // Honeypot: silently reject when filled. We expose a generic error to the
  // user so the bot can't iterate, but never throw.
  if (company.length > 0) {
    return { ok: false, errors: { _form: "Requête invalide." } };
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    data: {
      name,
      email,
      phone,
      postal,
      projectType: projectType as ProjectType,
      buildingType: (buildingType as BuildingType) || undefined,
      timeline: (timeline as Timeline) || undefined,
      existingQuote,
      message: message || undefined,
      gdpr: true,
    },
  };
}

export const PROJECT_LABELS: Record<ProjectType, string> = {
  "panneaux-photovoltaiques": "Panneaux photovoltaïques",
  "batteries-domestiques": "Batterie domestique",
  "bornes-de-recharge": "Borne de recharge",
  "pompes-a-chaleur": "Pompe à chaleur / climatisation",
  "conformite-electrique": "Conformité électrique",
  "nettoyage-toiture": "Nettoyage / peinture toiture",
  "devis-analyse": "Analyse d'un devis existant",
  autre: "Autre",
};

export const BUILDING_LABELS: Record<BuildingType, string> = {
  maison: "Maison",
  appartement: "Appartement",
  commerce: "Commerce",
  pme: "PME / bâtiment professionnel",
};

export const TIMELINE_LABELS: Record<Timeline, string> = {
  asap: "Dès que possible",
  "3-months": "Dans les 3 mois",
  "6-months": "Dans les 6 mois",
  info: "Simple prise d'information",
};
