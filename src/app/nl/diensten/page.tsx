import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";

export const metadata = generatePageMetadata({
  title: "Onze diensten",
  description:
    "Zonnepanelen, thuisbatterijen, laadpalen, warmtepompen, elektrische conformiteit, dakreiniging. Een aanspreekpunt voor uw energiesysteem.",
  path: "/nl/diensten/",
  locale: "nl-BE",
  alternates: { fr: "/services/", nl: "/nl/diensten/" },
});

export default function NlServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Diensten" },
        ]}
      />
      <HeroSection
        headline="Al onze diensten"
        subheadline="Een aanspreekpunt voor uw volledige energiesysteem."
        ctaLabel="Gratis diagnose"
        ctaHref="/nl/contact/"
        variant="compact"
      />
      <ServiceCardGrid locale="nl" />
      <CTADiagnostic
        title="Gratis energiediagnose"
        ctaLabel="Vraag uw diagnose aan"
        ctaHref="/nl/contact/"
      />
    </>
  );
}
