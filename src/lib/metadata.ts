import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const BASE_URL = siteConfig.url;

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  locale?: "fr-BE" | "nl-BE";
  alternates?: { fr?: string; nl?: string };
  noIndex?: boolean;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale = "fr-BE",
  alternates,
  noIndex,
  ogImage,
}: PageMetadata): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === "/" ? `${siteConfig.name} -- ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  const languages: Record<string, string> = {};
  if (alternates?.fr) {
    languages["fr-BE"] = `${BASE_URL}${alternates.fr}`;
    languages["x-default"] = `${BASE_URL}${alternates.fr}`;
  }
  if (alternates?.nl) {
    languages["nl-BE"] = `${BASE_URL}${alternates.nl}`;
  }
  // Self-referencing
  if (!alternates) {
    languages[locale] = url;
    languages["x-default"] = url;
  }

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: Object.keys(languages).length > 0 ? languages : undefined,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "nl-BE" ? "nl_BE" : "fr_BE",
      type: "website",
      images: ogImage
        ? [{ url: `${BASE_URL}${ogImage}`, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

export function generateServiceMetadata(
  service: { title: string; shortDescription: string; slug: string; slugNl: string },
  overrides?: { seoTitle?: string; metaDescription?: string }
): Metadata {
  return generatePageMetadata({
    title: overrides?.seoTitle ?? `${service.title} -- Installation en Belgique`,
    description: overrides?.metaDescription ?? service.shortDescription,
    path: `/services/${service.slug}/`,
    alternates: {
      fr: `/services/${service.slug}/`,
      nl: `/nl/diensten/${service.slugNl}/`,
    },
  });
}

export function generateLocalPageMetadata(
  service: { title: string; slug: string; slugNl: string },
  city: { name: string; slug: string; province: string; language: string },
  locale: "fr-BE" | "nl-BE" = "fr-BE",
  overrides?: { titleOverride?: string; descriptionOverride?: string }
): Metadata {
  const isFr = locale === "fr-BE";
  const title = overrides?.titleOverride ?? (isFr
    ? `${service.title} à ${city.name} -- Installateur certifié`
    : `${service.title} in ${city.name} -- Gecertificeerd installateur`);
  const description = overrides?.descriptionOverride ?? (isFr
    ? `Installation de ${service.title.toLowerCase()} à ${city.name} (${city.province}) par Be'energies. Benoît Dezso, ancien inspecteur, certifié RESCERT. Diagnostic gratuit.`
    : `Installatie van ${service.title.toLowerCase()} in ${city.name} (${city.province}) door Be'energies. Benoit Dezso, voormalig inspecteur, RESCERT-gecertificeerd. Gratis diagnose.`);

  const frPath = `/${service.slug}/${city.slug}/`;
  const nlPath = `/nl/${service.slugNl}/${city.slug}/`;

  // Only set alternates for Limburg cities that have both FR and NL pages
  const hasAlternate = city.language === "nl";

  return generatePageMetadata({
    title,
    description,
    path: isFr ? frPath : nlPath,
    locale,
    alternates: hasAlternate ? { fr: frPath, nl: nlPath } : undefined,
  });
}
