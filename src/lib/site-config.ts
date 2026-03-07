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
    whatsapp: "https://wa.me/3212394237",
    address: {
      street: "", // To be confirmed
      city: "Riemst",
      postalCode: "3770",
      region: "Limburg",
      country: "BE",
    },
  },
  social: {
    google: "", // Google Business Profile URL
    facebook: "", // To be added
  },
  stats: {
    installations: 487,
    yearsExperience: 12,
    satisfactionScore: 4.8,
    reviewCount: 67,
    paybackYears: "5-7",
  },
} as const;
