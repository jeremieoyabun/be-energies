import { describe, it, expect } from "vitest";
import {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  articleSchema,
  reviewListSchema,
  webSiteSchema,
  personSchema,
  howToSchema,
} from "./schema";
import { siteConfig } from "./site-config";
import type { City, Service, FAQItem, BreadcrumbItem } from "./types";

const BASE_URL = siteConfig.url;

const sampleCity: City = {
  slug: "riemst",
  name: "Riemst",
  nameNl: "Riemst",
  province: "Limburg",
  region: "flandre",
  language: "nl",
  tier: 1,
  population: 16500,
  postalCodes: ["3770"],
  coordinates: { lat: 50.7965, lng: 5.6045 },
  grd: "Fluvius",
  nearbyCities: ["tongeren", "bilzen"],
};

const sampleService: Service = {
  slug: "panneaux-solaires",
  slugNl: "zonnepanelen",
  title: "Panneaux solaires photovoltaïques",
  titleNl: "Zonnepanelen",
  shortDescription:
    "Installation de panneaux solaires en Wallonie et à Bruxelles avec garantie de qualité.",
  shortDescriptionNl: "Installatie van zonnepanelen in Belgïe.",
  icon: "solar",
  heroImage: "/img/services/pv.webp",
  pieges: ["sous-dimensionnement"],
  relatedServices: ["batteries-domestiques"],
};

const sampleFAQs: FAQItem[] = [
  {
    question: "Les panneaux solaires sont-ils encore rentables en Wallonie ?",
    answer:
      "Oui, avec un retour sur investissement actuel de 5 à 7 ans selon votre profil de consommation.",
  },
  {
    question: "Qu'est-ce que le tarif prosumer ?",
    answer:
      "C'est une redevance pour l'utilisation du réseau électrique par les producteurs résidentiels.",
  },
];

const sampleBreadcrumbs: BreadcrumbItem[] = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Panneaux solaires" }, // current page, no href
];

/* ────────────────────────────────────────────────────────────── */

describe("organizationSchema", () => {
  const schema = organizationSchema();

  it("returns valid JSON-LD shape", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Organization");
  });

  it("includes required organization fields", () => {
    expect(schema.name).toBe(siteConfig.legal.companyName);
    expect(schema.legalName).toBe(siteConfig.legal.companyName);
    expect(schema.url).toBe(BASE_URL);
    expect(schema.logo).toBe(`${BASE_URL}/img/Logo_Be-energies-02.png`);
  });

  it("emits a founder Person object", () => {
    const founder = schema.founder as { "@type": string; name: string };
    expect(founder["@type"]).toBe("Person");
    expect(founder.name).toBe(siteConfig.founder.name);
  });

  it("emits one ContactPoint per phone, with stripped telephone digits", () => {
    const contactPoints = schema.contactPoint as Array<{
      "@type": string;
      telephone: string;
      contactType: string;
      availableLanguage: string[];
    }>;
    expect(contactPoints).toHaveLength(siteConfig.contact.phones.length);
    expect(contactPoints[0]["@type"]).toBe("ContactPoint");
    expect(contactPoints[0].contactType).toBe("customer service");
    expect(contactPoints[0].telephone).not.toMatch(/[()\s]/);
    expect(contactPoints[0].availableLanguage).toEqual(["French", "Dutch"]);
  });

  it("stringifies without throwing", () => {
    expect(() => JSON.stringify(schema)).not.toThrow();
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("localBusinessSchema", () => {
  describe("global variant (no city)", () => {
    const schema = localBusinessSchema();

    it("returns valid JSON-LD shape with dual @type", () => {
      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toEqual(["LocalBusiness", "Electrician"]);
      expect(schema["@id"]).toBe(`${BASE_URL}/#localbusiness`);
    });

    it("uses the global business address", () => {
      const address = schema.address as { addressLocality: string; postalCode: string };
      expect(address.addressLocality).toBe(
        siteConfig.contact.address.addressLocality,
      );
      expect(address.postalCode).toBe(siteConfig.contact.address.postalCode);
    });

    it("omits geo when no city is supplied (compact strips undefined)", () => {
      expect(schema).not.toHaveProperty("geo");
    });

    it("emits areaServed with three administrative areas", () => {
      const areaServed = schema.areaServed as Array<{ name: string }>;
      expect(areaServed).toHaveLength(3);
      expect(areaServed.map((a) => a.name)).toEqual([
        "Wallonie",
        "Bruxelles",
        "Limburg",
      ]);
    });

    it("includes aggregateRating because reviews are verified in site-config", () => {
      // site-config currently ships verified review counts; this guards against
      // a regression where the conditional block stops emitting them.
      const rating = schema.aggregateRating as { ratingValue: number; reviewCount: number };
      expect(rating).toBeDefined();
      expect(rating.ratingValue).toBe(siteConfig.reviews.rating);
      expect(rating.reviewCount).toBe(siteConfig.reviews.count);
    });

    it("stringifies without throwing", () => {
      expect(() => JSON.stringify(schema)).not.toThrow();
    });
  });

  describe("city variant", () => {
    const schema = localBusinessSchema(sampleCity);

    it("overrides addressLocality and postalCode with the city values", () => {
      const address = schema.address as { addressLocality: string; postalCode: string; addressRegion: string };
      expect(address.addressLocality).toBe(sampleCity.name);
      expect(address.postalCode).toBe(sampleCity.postalCodes[0]);
      expect(address.addressRegion).toBe(sampleCity.province);
    });

    it("includes geo coordinates for the city", () => {
      const geo = schema.geo as { "@type": string; latitude: number; longitude: number };
      expect(geo["@type"]).toBe("GeoCoordinates");
      expect(geo.latitude).toBe(sampleCity.coordinates.lat);
      expect(geo.longitude).toBe(sampleCity.coordinates.lng);
    });

    it("still emits the three administrative areas (national service)", () => {
      const areaServed = schema.areaServed as Array<{ name: string }>;
      expect(areaServed).toHaveLength(3);
    });
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("serviceSchema", () => {
  const schema = serviceSchema(sampleService);

  it("returns valid JSON-LD shape", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Service");
  });

  it("populates name and description from the service input", () => {
    expect(schema.name).toBe(sampleService.title);
    expect(schema.description).toBe(sampleService.shortDescription);
  });

  it("emits the LocalBusiness provider (provider mobility)", () => {
    const provider = schema.provider as { "@type": string; name: string; url: string };
    expect(provider["@type"]).toBe("LocalBusiness");
    expect(provider.name).toBe(siteConfig.name);
    expect(provider.url).toBe(BASE_URL);
  });

  it("populates areaServed with the three administrative areas", () => {
    const areaServed = schema.areaServed as Array<{ "@type": string; name: string }>;
    expect(areaServed).toHaveLength(3);
    expect(areaServed[0]["@type"]).toBe("AdministrativeArea");
  });

  it("builds the canonical service URL with trailing slash", () => {
    expect(schema.url).toBe(`${BASE_URL}/services/${sampleService.slug}/`);
  });

  it("stringifies without throwing", () => {
    expect(() => JSON.stringify(schema)).not.toThrow();
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("faqSchema", () => {
  const schema = faqSchema(sampleFAQs);

  it("returns valid FAQPage shape", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("FAQPage");
  });

  it("emits one mainEntity entry per FAQ", () => {
    expect(schema.mainEntity).toHaveLength(sampleFAQs.length);
  });

  it("wraps each entry as a Question with acceptedAnswer", () => {
    schema.mainEntity.forEach((entry, i) => {
      expect(entry["@type"]).toBe("Question");
      expect(entry.name).toBe(sampleFAQs[i].question);
      expect(entry.acceptedAnswer["@type"]).toBe("Answer");
      expect(entry.acceptedAnswer.text).toBe(sampleFAQs[i].answer);
    });
  });

  it("returns an empty mainEntity array when given an empty list", () => {
    const empty = faqSchema([]);
    expect(empty.mainEntity).toEqual([]);
  });

  it("stringifies without throwing", () => {
    expect(() => JSON.stringify(schema)).not.toThrow();
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("breadcrumbSchema", () => {
  const schema = breadcrumbSchema(sampleBreadcrumbs);

  it("returns valid BreadcrumbList shape", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("BreadcrumbList");
  });

  it("emits an itemListElement entry per breadcrumb with 1-based position", () => {
    expect(schema.itemListElement).toHaveLength(sampleBreadcrumbs.length);
    schema.itemListElement.forEach((entry, i) => {
      expect(entry["@type"]).toBe("ListItem");
      expect(entry.position).toBe(i + 1);
      expect(entry.name).toBe(sampleBreadcrumbs[i].name);
    });
  });

  it("prefixes hrefs with the base URL when present", () => {
    expect(schema.itemListElement[0].item).toBe(`${BASE_URL}/`);
    expect(schema.itemListElement[1].item).toBe(`${BASE_URL}/services`);
  });

  it("leaves item undefined for the current-page breadcrumb (no href)", () => {
    expect(schema.itemListElement[2].item).toBeUndefined();
  });

  it("handles an empty breadcrumb list", () => {
    const empty = breadcrumbSchema([]);
    expect(empty.itemListElement).toEqual([]);
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("articleSchema", () => {
  const baseArticle = {
    title: "Le tarif prosumer expliqué",
    description: "Décryptage du tarif prosumer en Wallonie en 2026.",
    url: "/blog/tarif-prosumer",
    datePublished: "2026-05-01",
  };

  it("returns valid Article shape", () => {
    const schema = articleSchema(baseArticle);
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Article");
    expect(schema.headline).toBe(baseArticle.title);
    expect(schema.url).toBe(`${BASE_URL}${baseArticle.url}`);
  });

  it("falls back dateModified to datePublished when omitted", () => {
    const schema = articleSchema(baseArticle);
    expect(schema.dateModified).toBe(baseArticle.datePublished);
  });

  it("falls back author to the founder when omitted", () => {
    const schema = articleSchema(baseArticle);
    expect(schema.author.name).toBe(siteConfig.founder.name);
  });

  it("uses the provided author and dateModified when supplied", () => {
    const schema = articleSchema({
      ...baseArticle,
      author: "Jeanne Auteure",
      dateModified: "2026-06-01",
    });
    expect(schema.author.name).toBe("Jeanne Auteure");
    expect(schema.dateModified).toBe("2026-06-01");
  });

  it("prefixes image with base URL when supplied, leaves undefined otherwise", () => {
    const withImage = articleSchema({ ...baseArticle, image: "/img/hero.webp" });
    expect(withImage.image).toBe(`${BASE_URL}/img/hero.webp`);

    const withoutImage = articleSchema(baseArticle);
    expect(withoutImage.image).toBeUndefined();
  });

  it("stringifies without throwing", () => {
    expect(() => JSON.stringify(articleSchema(baseArticle))).not.toThrow();
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("reviewListSchema", () => {
  it("returns an empty array when given no reviews", () => {
    expect(reviewListSchema([])).toEqual([]);
  });

  it("emits one Review object per input with valid JSON-LD shape", () => {
    const reviews = reviewListSchema([
      { author: "Marie D.", rating: 5, body: "Travail impeccable." },
      { author: "Luc V.", rating: 4, body: "Très bon suivi.", locality: "Riemst" },
    ]);
    expect(reviews).toHaveLength(2);
    reviews.forEach((r) => {
      expect(r["@context"]).toBe("https://schema.org");
      expect(r["@type"]).toBe("Review");
      expect(r.itemReviewed["@type"]).toBe("LocalBusiness");
      expect(r.reviewRating["@type"]).toBe("Rating");
      expect(r.reviewRating.bestRating).toBe(5);
      expect(r.reviewRating.worstRating).toBe(1);
    });
  });

  it("attaches a PostalAddress when locality is provided, omits it otherwise", () => {
    const reviews = reviewListSchema([
      { author: "Marie D.", rating: 5, body: "Travail impeccable." },
      { author: "Luc V.", rating: 4, body: "Très bon suivi.", locality: "Riemst" },
    ]);
    expect(reviews[0].author).not.toHaveProperty("address");
    expect(reviews[1].author.address).toEqual({
      "@type": "PostalAddress",
      addressLocality: "Riemst",
      addressCountry: "BE",
    });
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("webSiteSchema", () => {
  it("returns valid WebSite JSON-LD", () => {
    const schema = webSiteSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("WebSite");
    expect(schema.name).toBe(siteConfig.name);
    expect(schema.url).toBe(BASE_URL);
    expect(() => JSON.stringify(schema)).not.toThrow();
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("personSchema", () => {
  const schema = personSchema();

  it("returns valid Person JSON-LD", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Person");
    expect(schema.name).toBe(siteConfig.founder.name);
    expect(schema.jobTitle).toBe(siteConfig.founder.role);
  });

  it("declares the RESCERT credential and recognising organization", () => {
    expect(schema.hasCredential["@type"]).toBe(
      "EducationalOccupationalCredential",
    );
    expect(schema.hasCredential.name).toBe("RESCERT");
    expect(schema.hasCredential.recognizedBy.name).toBe("Région wallonne");
  });

  it("links the founder to the Be'energies organization", () => {
    expect(schema.worksFor.name).toBe(siteConfig.name);
    expect(schema.worksFor.url).toBe(BASE_URL);
  });
});

/* ────────────────────────────────────────────────────────────── */

describe("howToSchema", () => {
  const steps = [
    { name: "Étude", text: "Analyse du toit et de la consommation." },
    { name: "Devis", text: "Proposition technique et financière." },
    { name: "Pose", text: "Installation par notre équipe certifiée." },
  ];
  const schema = howToSchema("Installer des panneaux solaires", steps);

  it("returns valid HowTo JSON-LD", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("HowTo");
    expect(schema.name).toBe("Installer des panneaux solaires");
  });

  it("emits a HowToStep per input with 1-based position", () => {
    expect(schema.step).toHaveLength(steps.length);
    schema.step.forEach((s, i) => {
      expect(s["@type"]).toBe("HowToStep");
      expect(s.position).toBe(i + 1);
      expect(s.name).toBe(steps[i].name);
      expect(s.text).toBe(steps[i].text);
    });
  });

  it("handles an empty steps list", () => {
    const empty = howToSchema("Vide", []);
    expect(empty.step).toEqual([]);
  });
});
