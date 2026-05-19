/**
 * Single source of truth for verifiable business data.
 *
 * Important: do not invent values for `verified.*` or `business.*`.
 * Optional fields stay `null` until the client confirms the real data.
 * The site falls back to neutral, non-quantified copy when a stat is null.
 */
export const siteConfig = {
  name: "Be'energies",
  url: "https://be-energies.be",
  locale: "fr-BE",
  localeNl: "nl-BE",
  tagline: "L'installateur qui a d'abord été l'inspecteur.",
  description:
    "Be'energies : panneaux solaires, batteries, bornes de recharge, pompes à chaleur, conformité électrique et nettoyage toiture en Belgique. Fondé par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT.",
  founder: {
    name: "Benoît Dezso",
    role: "Fondateur, ancien inspecteur en installation électrique",
    roleNl: "Oprichter, voormalig inspecteur elektrotechnische installaties",
    credential: "certifié RESCERT",
    credentialShort: "RESCERT",
  },
  contact: {
    phone: "+32 12 39 42 37",
    phoneRaw: "+3212394237",
    email: "info@be-energies.be",
    secondaryEmail: "benoit.dezso@be-energies.be",
    whatsapp: "https://wa.me/3212394237",
    address: {
      streetAddress: "Komveld 35" as string | null,
      addressLocality: "Riemst",
      postalCode: "3770",
      addressRegion: "Limburg",
      addressCountry: "BE",
    },
    // schema.org dayOfWeek format. Saturday & Sunday omitted = closed.
    openingHours: ["Mo-Fr 08:00-17:00"] as string[],
  },
  social: {
    googleBusinessProfileUrl:
      "https://share.google/zUbqPHdsKhXJ2Q4CM" as string | null,
    facebookUrl: "https://www.facebook.com/Be.energies" as string | null,
    linkedinUrl: null as string | null,
  },
  /**
   * Verified against Google Business Profile (mai 2026).
   * Bump after each review refresh.
   */
  reviews: {
    googleBusinessProfileUrl:
      "https://share.google/zUbqPHdsKhXJ2Q4CM" as string | null,
    rating: 4.9 as number | null,
    count: 54 as number | null,
  },
  /**
   * Only display a stat when explicitly verified. `verified === false` means
   * we still want the project to track an internal estimate but never show
   * the figure to visitors. The UI falls back to neutral copy.
   */
  stats: {
    installations: { value: 487, verified: false },
    yearsExperience: { value: 12, verified: false },
    inspectionsCount: { value: 500, verified: false },
    paybackYears: { value: "5-7", verified: true }, // CWaPE-defensible range
  },
  /**
   * Used as the "Dernière mise à jour" stamp on chiffrée pages.
   * Update whenever tariff data is reviewed.
   */
  dataAsOf: "mai 2026",
} as const;

export type SiteConfig = typeof siteConfig;
