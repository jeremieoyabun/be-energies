import { siteConfig } from "./site-config";
import type { City, Service, FAQItem, BreadcrumbItem } from "./types";

const BASE_URL = siteConfig.url;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: BASE_URL,
    logo: `${BASE_URL}/img/Logo_Be-energies-02.png`,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      availableLanguage: ["French", "Dutch"],
    },
    sameAs: [siteConfig.social.google, siteConfig.social.facebook].filter(Boolean),
  };
}

export function localBusinessSchema(city?: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: siteConfig.name,
    url: BASE_URL,
    image: `${BASE_URL}/img/Logo_Be-energies-02.png`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: city?.name ?? siteConfig.contact.address.city,
      postalCode: city?.postalCodes[0] ?? siteConfig.contact.address.postalCode,
      addressRegion: city?.province ?? siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: city
      ? {
          "@type": "GeoCoordinates",
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng,
        }
      : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.satisfactionScore,
      reviewCount: siteConfig.stats.reviewCount,
      bestRating: 5,
    },
    priceRange: "$$",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
    url: `${BASE_URL}/services/${service.slug}/`,
  };
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
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
