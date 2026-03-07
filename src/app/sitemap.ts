import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { getFrenchCities, getDutchCities } from "@/data/cities";
import { realizations } from "@/data/realizations";
import { blogArticles } from "@/data/blog";

const BASE = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const frCities = getFrenchCities();
  const nlCities = getDutchCities();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pieges-a-eviter/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/a-propos/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/realisations/`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pro/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/guide-pieges-a-eviter/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/mentions-legales/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/politique-de-confidentialite/`, changeFrequency: "yearly", priority: 0.2 },
    // NL
    { url: `${BASE}/nl/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/nl/diensten/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/nl/contact/`, changeFrequency: "monthly", priority: 0.7 },
  ];

  // FR service pages
  const servicePages: MetadataRoute.Sitemap = services.flatMap((s) => [
    { url: `${BASE}/services/${s.slug}/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/nl/diensten/${s.slugNl}/`, changeFrequency: "monthly" as const, priority: 0.8 },
  ]);

  // FR local pages
  const frLocalPages: MetadataRoute.Sitemap = services.flatMap((s) =>
    frCities.map((c) => ({
      url: `${BASE}/${s.slug}/${c.slug}/`,
      changeFrequency: "monthly" as const,
      priority: c.tier === 1 ? 0.8 : 0.7,
    }))
  );

  // NL local pages
  const nlLocalPages: MetadataRoute.Sitemap = services.flatMap((s) =>
    nlCities.map((c) => ({
      url: `${BASE}/nl/${s.slugNl}/${c.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Realizations
  const realizationPages: MetadataRoute.Sitemap = realizations.map((r) => ({
    url: `${BASE}/realisations/${r.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog
  const blogPages: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${BASE}/blog/${a.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...frLocalPages,
    ...nlLocalPages,
    ...realizationPages,
    ...blogPages,
  ];
}
