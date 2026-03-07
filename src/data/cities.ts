import type { City } from "@/lib/types";

export const cities: City[] = [
  // T1 -- Launch (FR)
  {
    slug: "liege",
    name: "Liege",
    province: "Liege",
    region: "wallonie",
    language: "fr",
    tier: 1,
    population: 197013,
    postalCodes: ["4000", "4020", "4030", "4031", "4032"],
    coordinates: { lat: 50.6326, lng: 5.5797 },
    grd: "RESA",
    nearbyCities: ["verviers", "namur", "wavre"],
  },
  {
    slug: "namur",
    name: "Namur",
    province: "Namur",
    region: "wallonie",
    language: "fr",
    tier: 1,
    population: 112518,
    postalCodes: ["5000", "5001", "5002", "5003", "5004"],
    coordinates: { lat: 50.4674, lng: 4.8712 },
    grd: "ORES",
    nearbyCities: ["liege", "charleroi", "wavre", "nivelles"],
  },
  {
    slug: "bruxelles",
    name: "Bruxelles",
    province: "Bruxelles-Capitale",
    region: "bruxelles",
    language: "fr",
    tier: 1,
    population: 185103,
    postalCodes: ["1000", "1050", "1060", "1070", "1080"],
    coordinates: { lat: 50.8503, lng: 4.3517 },
    grd: "Sibelga",
    nearbyCities: ["wavre", "nivelles", "mons"],
  },
  {
    slug: "charleroi",
    name: "Charleroi",
    province: "Hainaut",
    region: "wallonie",
    language: "fr",
    tier: 1,
    population: 201300,
    postalCodes: ["6000", "6001", "6010", "6020", "6030"],
    coordinates: { lat: 50.4108, lng: 4.4446 },
    grd: "ORES",
    nearbyCities: ["mons", "namur", "nivelles"],
  },
  {
    slug: "mons",
    name: "Mons",
    province: "Hainaut",
    region: "wallonie",
    language: "fr",
    tier: 1,
    population: 95299,
    postalCodes: ["7000", "7010", "7011", "7012"],
    coordinates: { lat: 50.4542, lng: 3.9523 },
    grd: "ORES",
    nearbyCities: ["charleroi", "tournai", "la-louviere"],
  },
  {
    slug: "wavre",
    name: "Wavre",
    province: "Brabant wallon",
    region: "wallonie",
    language: "fr",
    tier: 1,
    population: 34618,
    postalCodes: ["1300", "1301"],
    coordinates: { lat: 50.7161, lng: 4.6111 },
    grd: "ORES",
    nearbyCities: ["bruxelles", "namur", "nivelles"],
  },

  // T2 -- Post-Launch (FR)
  {
    slug: "nivelles",
    name: "Nivelles",
    province: "Brabant wallon",
    region: "wallonie",
    language: "fr",
    tier: 2,
    population: 28684,
    postalCodes: ["1400", "1401"],
    coordinates: { lat: 50.5988, lng: 4.3292 },
    grd: "ORES",
    nearbyCities: ["wavre", "charleroi", "bruxelles"],
  },
  {
    slug: "verviers",
    name: "Verviers",
    province: "Liege",
    region: "wallonie",
    language: "fr",
    tier: 2,
    population: 55614,
    postalCodes: ["4800", "4801", "4802"],
    coordinates: { lat: 50.5891, lng: 5.8631 },
    grd: "RESA",
    nearbyCities: ["liege", "namur"],
  },
  {
    slug: "arlon",
    name: "Arlon",
    province: "Luxembourg",
    region: "wallonie",
    language: "fr",
    tier: 2,
    population: 30543,
    postalCodes: ["6700", "6704", "6706"],
    coordinates: { lat: 49.6835, lng: 5.8167 },
    grd: "AIEG",
    nearbyCities: ["namur", "liege"],
  },
  {
    slug: "tournai",
    name: "Tournai",
    province: "Hainaut",
    region: "wallonie",
    language: "fr",
    tier: 2,
    population: 69554,
    postalCodes: ["7500", "7501", "7502"],
    coordinates: { lat: 50.6058, lng: 3.3883 },
    grd: "ORES",
    nearbyCities: ["mons", "la-louviere"],
  },
  {
    slug: "la-louviere",
    name: "La Louviere",
    province: "Hainaut",
    region: "wallonie",
    language: "fr",
    tier: 2,
    population: 80986,
    postalCodes: ["7100", "7110"],
    coordinates: { lat: 50.4801, lng: 4.1858 },
    grd: "ORES",
    nearbyCities: ["charleroi", "mons", "tournai"],
  },

  // T3 -- Limburg NL
  {
    slug: "riemst",
    name: "Riemst",
    province: "Limburg",
    region: "flandre",
    language: "nl",
    tier: 3,
    population: 16800,
    postalCodes: ["3770"],
    coordinates: { lat: 50.8116, lng: 5.5983 },
    grd: "Fluvius",
    nearbyCities: ["tongeren", "bilzen", "hasselt"],
  },
  {
    slug: "tongeren",
    name: "Tongeren",
    province: "Limburg",
    region: "flandre",
    language: "nl",
    tier: 3,
    population: 31630,
    postalCodes: ["3700"],
    coordinates: { lat: 50.7808, lng: 5.4647 },
    grd: "Fluvius",
    nearbyCities: ["riemst", "bilzen", "hasselt"],
  },
  {
    slug: "bilzen",
    name: "Bilzen",
    province: "Limburg",
    region: "flandre",
    language: "nl",
    tier: 3,
    population: 33129,
    postalCodes: ["3740"],
    coordinates: { lat: 50.8714, lng: 5.5186 },
    grd: "Fluvius",
    nearbyCities: ["riemst", "tongeren", "hasselt"],
  },
  {
    slug: "hasselt",
    name: "Hasselt",
    province: "Limburg",
    region: "flandre",
    language: "nl",
    tier: 3,
    population: 77622,
    postalCodes: ["3500"],
    coordinates: { lat: 50.9311, lng: 5.3378 },
    grd: "Fluvius",
    nearbyCities: ["bilzen", "tongeren", "riemst"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByTier(tier: 1 | 2 | 3): City[] {
  return cities.filter((c) => c.tier === tier);
}

export function getCitiesByLanguage(language: "fr" | "nl"): City[] {
  return cities.filter((c) => c.language === language);
}

export function getFrenchCities(): City[] {
  return getCitiesByLanguage("fr");
}

export function getDutchCities(): City[] {
  return getCitiesByLanguage("nl");
}

export function getNearbyCities(city: City): City[] {
  return city.nearbyCities
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean) as City[];
}
