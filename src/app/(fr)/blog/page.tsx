import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { BlogPreview } from "@/components/sections/BlogPreview";

const baseMeta = generatePageMetadata({
  title: "Blog -- Actualités énergie en Belgique",
  description:
    "Articles sur le photovoltaïque, les batteries, les bornes de recharge, et la réglementation énergétique en Belgique. Par Benoît Dezso.",
  path: "/blog/",
});

// Declare the RSS feed for feed readers (Feedly, NetNewsWire, etc.) and
// for SEO crawlers that pick up <link rel="alternate" type="application/rss+xml">.
export const metadata = {
  ...baseMeta,
  alternates: {
    ...baseMeta.alternates,
    types: {
      "application/rss+xml": [
        { url: "/blog/rss.xml", title: "Be'energies - Blog" },
      ],
    },
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog" },
        ]}
      />
      <HeroSection
        headline="Blog"
        subheadline="Les vrais chiffres, les vraies analyses. Articles sur l'énergie en Belgique par un ancien inspecteur."
        ctaLabel="Demander un diagnostic gratuit"
        ctaHref="/contact/"
        variant="compact"
      />
      <BlogPreview maxItems={100} showFooterLink={false} tightTop />
    </>
  );
}
