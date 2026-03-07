import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, organizationSchema, localBusinessSchema } from "@/lib/schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { testimonials } from "@/data/testimonials";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";

export const metadata = generatePageMetadata({
  title: "Be'energies -- Uw gecertificeerde installateur",
  description:
    "Zonnepanelen, thuisbatterijen, laadpalen, warmtepompen en elektrische conformiteit in Limburg. Benoit Dezso, voormalig RESCERT inspecteur.",
  path: "/nl/",
  locale: "nl-BE",
  alternates: { fr: "/", nl: "/nl/" },
});

export default function NlHomePage() {
  const nlTestimonials = testimonials.filter(
    (t) => t.city === "Riemst" || t.city === "Tongeren" || t.city === "Bilzen" || t.city === "Hasselt"
  );

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />

      <HeroSection
        headline="Ik heb honderden installaties geinspecteerd. Vandaag bouw ik ze."
        subheadline="Benoit Dezso, voormalig RESCERT-gecertificeerd inspecteur. Zonnepanelen, thuisbatterijen, laadpalen, warmtepompen, elektrische conformiteit."
        ctaLabel="Gratis energiediagnose"
        ctaHref="/nl/contact/"
        secondaryCta={{ label: "Onze diensten", href: "/nl/diensten/" }}
      />

      <TrustBar />
      <ServiceCardGrid locale="nl" />

      {nlTestimonials.length > 0 && (
        <TestimonialBlock testimonials={nlTestimonials} title="Wat onze klanten zeggen" />
      )}

      <CTADiagnostic
        title="Gratis energiediagnose"
        description="Benoit analyseert uw verbruik, uw dak en uw elektrisch netwerk. U ontvangt een realistische berekening op basis van de tarieven van 2026."
        ctaLabel="Vraag uw gratis diagnose aan"
        ctaHref="/nl/contact/"
        variant="dark"
      />
    </>
  );
}
