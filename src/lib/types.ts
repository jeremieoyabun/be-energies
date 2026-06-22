export interface Service {
  slug: string;
  slugNl: string;
  title: string;
  titleNl: string;
  shortDescription: string;
  shortDescriptionNl: string;
  icon: string;
  heroImage: string;
  pieges: string[]; // piege slugs
  relatedServices: string[]; // service slugs
  /** When true, the service is hidden from all discovery surfaces (nav,
   *  grids, footer, related services, sitemap, city pages). The detail
   *  page itself stays accessible (200) so existing bookmarks don't 404 —
   *  set the route to notFound() manually if you want a hard hide. */
  hidden?: boolean;
}

export interface City {
  slug: string;
  name: string;
  nameNl?: string;
  province: string;
  region: "wallonie" | "bruxelles" | "flandre";
  language: "fr" | "nl";
  tier: 1 | 2 | 3;
  population: number;
  postalCodes: string[];
  coordinates: { lat: number; lng: number };
  grd: string;
  nearbyCities: string[]; // city slugs
}

export interface Piege {
  slug: string;
  title: string;
  number: number;
  service: string; // service slug or "all"
  severity: "critique" | "important" | "attention";
  problem: string;
  consequence: string;
  solution: string;
  founderInsight?: string;
}

export interface Testimonial {
  name: string;
  city: string;
  service: string; // service slug
  quote: string;
  outcome?: string;
  rating: number;
}

export interface RealizationCaseStudy {
  challenge: string;
  solution: string;
  result: string;
  technicalDetails?: string[];
}

export interface Realization {
  slug: string;
  title: string;
  city: string;
  service: string;
  panelCount?: number;
  kwc?: number;
  brands?: string[];
  date: string;
  description: string;
  images: string[];
  caseStudy?: RealizationCaseStudy;
  clientType?: "residential" | "professional";
  category?: "standard" | "correction" | "renovation" | "premium";
  /** Optional short, measurable outcome surfaced on the card
   *  (e.g. "+12 % production récupérée", "Conformité passée au 1er coup"). */
  keyResult?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: number;
  tags: string[];
  relatedServices: string[];
  body?: string;
  /** Hero image. Falls back to a generic photo when absent. */
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export type Locale = "fr" | "nl";
