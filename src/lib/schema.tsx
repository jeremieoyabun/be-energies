import { siteConfig } from "./site-config";
import type { City, Service, FAQItem, BreadcrumbItem } from "./types";

const BASE_URL = siteConfig.url;

/**
 * Removes undefined / null / empty array values so we don't pollute the
 * emitted JSON-LD with empty fields (and avoid Google "structured data" warnings).
 */
function compact<T extends Record<string, unknown>>(obj: T): T {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v) && v.length === 0) continue;
    out[k] = v;
  }
  return out as T;
}

function sameAs(): string[] {
  return [
    siteConfig.social.googleBusinessProfileUrl,
    siteConfig.social.facebookUrl,
    siteConfig.social.linkedinUrl,
    siteConfig.reviews.googleBusinessProfileUrl,
  ].filter((v): v is string => Boolean(v));
}

export function organizationSchema() {
  return compact({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legal.companyName,
    legalName: siteConfig.legal.companyName,
    url: BASE_URL,
    logo: `${BASE_URL}/img/Logo_Be-energies-02.png`,
    vatID: siteConfig.legal.vatNumber,
    taxID: siteConfig.legal.vatNumber,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    contactPoint: siteConfig.contact.phones.map((p, i) => ({
      "@type": "ContactPoint",
      telephone: p.label.replace(/\s|\(|\)/g, ""),
      contactType: i === 0 ? "customer service" : "sales",
      availableLanguage: ["French", "Dutch"],
      areaServed: ["BE-WAL", "BE-BRU", "BE-VLG", "LU"],
    })),
    sameAs: sameAs(),
  });
}

export function localBusinessSchema(city?: City) {
  const reviews = siteConfig.reviews;
  const hasVerifiedReviews =
    Boolean(reviews.googleBusinessProfileUrl) &&
    typeof reviews.rating === "number" &&
    typeof reviews.count === "number" &&
    reviews.count > 0;

  const address = compact({
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.streetAddress ?? undefined,
    addressLocality:
      city?.name ?? siteConfig.contact.address.addressLocality,
    postalCode:
      city?.postalCodes[0] ?? siteConfig.contact.address.postalCode,
    addressRegion:
      city?.province ?? siteConfig.contact.address.addressRegion,
    addressCountry: siteConfig.contact.address.addressCountry,
  });

  return compact({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "@id": `${BASE_URL}/#localbusiness`,
    name: siteConfig.name,
    url: BASE_URL,
    image: `${BASE_URL}/img/Logo_Be-energies-02.png`,
    telephone: siteConfig.contact.phones[0].label.replace(/\s|\(|\)/g, ""),
    email: siteConfig.contact.email,
    address,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Wallonie" },
      { "@type": "AdministrativeArea", name: "Bruxelles" },
      { "@type": "AdministrativeArea", name: "Limburg" },
    ],
    geo: city
      ? {
          "@type": "GeoCoordinates",
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng,
        }
      : undefined,
    openingHours:
      siteConfig.contact.openingHours.length > 0
        ? siteConfig.contact.openingHours
        : undefined,
    ...(hasVerifiedReviews && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: reviews.rating,
        reviewCount: reviews.count,
        bestRating: 5,
      },
    }),
    sameAs: sameAs(),
    priceRange: "EUR",
  });
}

export function serviceSchema(service: Service) {
  return compact({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Wallonie" },
      { "@type": "AdministrativeArea", name: "Bruxelles" },
      { "@type": "AdministrativeArea", name: "Limburg" },
    ],
    url: `${BASE_URL}/services/${service.slug}/`,
  });
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `${BASE_URL}${item.href}` : undefined,
    })),
  };
}

export function howToSchema(
  name: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: article.author ?? siteConfig.founder.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/img/Logo_Be-energies-02.png`,
      },
    },
    image: article.image ? `${BASE_URL}${article.image}` : undefined,
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: BASE_URL,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    image: `${BASE_URL}/img/misc/worker.webp`,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "RESCERT",
      recognizedBy: {
        "@type": "Organization",
        name: "Région wallonne",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: BASE_URL,
    },
  };
}

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
