import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { BlogPreview } from "@/components/sections/BlogPreview";

export const metadata = generatePageMetadata({
  title: "Blog -- Actualites energie en Belgique",
  description:
    "Articles sur le photovoltaique, les batteries, les bornes de recharge, et la reglementation energetique en Belgique. Par Benoit Dezso.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog" },
        ]}
      />
      <HeroSection
        headline="Blog"
        subheadline="Les vrais chiffres, les vraies analyses. Articles sur l'energie en Belgique par un ancien inspecteur."
        ctaLabel="Diagnostic gratuit"
        ctaHref="/contact/"
        variant="compact"
      />
      <BlogPreview maxItems={20} />
    </>
  );
}
