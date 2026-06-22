import { generatePageMetadata } from "@/lib/metadata";
import {
  JsonLd,
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  personSchema,
} from "@/lib/schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { FAQSection } from "@/components/sections/FAQSection";
import { testimonials } from "@/data/testimonials";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { homepageFaqNl } from "@/data/faq.nl";

export const metadata = generatePageMetadata({
  title: "Be'energies -- Uw gecertificeerde installateur",
  description:
    "Zonnepanelen, thuisbatterijen, laadpalen, warmtepompen en elektrische conformiteit in Limburg. Benoît Dezso, voormalig inspecteur, RESCERT-gecertificeerd.",
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
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={personSchema()} />

      <HeroSection
        headline="Ik heb honderden installaties geinspecteerd. Vandaag bouw ik ze."
        subheadline="Benoît Dezso, voormalig inspecteur elektrotechnische installaties, RESCERT-gecertificeerd. Zonnepanelen, thuisbatterijen, laadpalen, warmtepompen, elektrische conformiteit."
        ctaLabel="Gratis energiediagnose"
        ctaHref="/nl/contact/"
        secondaryCta={{ label: "Onze diensten", href: "/nl/diensten/" }}
      />

      <TrustBar locale="nl" />
      <ServiceCardGrid locale="nl" />

      {nlTestimonials.length > 0 && (
        <TestimonialBlock
          testimonials={nlTestimonials}
          title="Wat onze klanten zeggen"
        />
      )}

      <FAQSection items={homepageFaqNl} title="Veelgestelde vragen" />

      <CTADiagnostic locale="nl" variant="dark" />
    </>
  );
}
