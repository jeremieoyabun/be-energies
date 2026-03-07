import { generatePageMetadata } from "@/lib/metadata";
import {
  JsonLd,
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from "@/lib/schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { RentabilityProof } from "@/components/sections/RentabilityProof";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { PiegesCarousel } from "@/components/sections/PiegesCarousel";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RealizationGrid } from "@/components/sections/RealizationGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { pieges } from "@/data/pieges";
import { testimonials } from "@/data/testimonials";
import { realizations } from "@/data/realizations";
import { homepageFaq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";
import { MapPinIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Be'energies -- Panneaux solaires, batteries, bornes de recharge en Belgique",
  description:
    "Installation de panneaux solaires, batteries domestiques, bornes de recharge, pompes a chaleur et conformite electrique en Belgique. Fonde par Benoit Dezso, ancien inspecteur RESCERT. Retour en 5-7 ans. Diagnostic gratuit.",
  path: "/",
  alternates: { fr: "/", nl: "/nl/" },
});

export default function HomePage() {
  const heroTestimonials = [
    testimonials[0],
    testimonials[4],
    testimonials[5],
  ];

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={webSiteSchema()} />

      {/* 1. HERO -- Identity-led with real photography */}
      <HeroSection
        headline="J'ai inspecte des centaines d'installations. Aujourd'hui, je les construis."
        subheadline="Benoit Dezso, ancien inspecteur certifie RESCERT. Panneaux solaires, batteries, bornes de recharge, pompes a chaleur, conformite electrique. Un seul interlocuteur pour votre systeme energetique."
        ctaLabel="Diagnostic energetique gratuit"
        ctaHref="/contact/"
        secondaryCta={{ label: "Nos services", href: "/services/" }}
        badge="Ancien inspecteur RESCERT"
        image="/img/Be-energies_video_header.png"
      />

      {/* 2. TRUST BAR -- Compressed social proof */}
      <TrustBar />

      {/* 3. RENTABILITY PROOF -- Kill fear #1 */}
      <RentabilityProof />

      {/* 4. SERVICES GRID -- 6 services, one partner */}
      <ServiceCardGrid />

      {/* 5. FOUNDER CREDIBILITY -- Full bio with Inspector Insight */}
      <FounderCredibility variant="full" />

      {/* 6. PIEGES PREVIEW -- 3 traps, drives pillar page traffic */}
      <PiegesCarousel pieges={pieges.slice(0, 3)} />

      {/* 7. COMPARISON TABLE -- Us vs market practices */}
      <ComparisonTable />

      {/* 8. TESTIMONIALS -- Outcome-based social proof */}
      <TestimonialBlock
        testimonials={heroTestimonials}
        title="Ils nous ont fait confiance"
      />

      {/* 9. PROCESS TIMELINE -- 4 steps to de-risk the journey */}
      <ProcessTimeline />

      {/* 10. REALIZATIONS -- Real projects, real numbers */}
      <RealizationGrid
        realizations={realizations}
        maxItems={4}
        showViewAll
      />

      {/* 11. LOCAL COVERAGE */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <SectionLabel>Zone d&apos;intervention</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-8">
            Wallonie, Bruxelles, Limbourg
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                region: "Wallonie",
                cities: "Liege, Namur, Mons, Charleroi, Waremme, Ans, Nivelles",
              },
              { region: "Bruxelles", cities: "Toutes les communes" },
              {
                region: "Limbourg flamand",
                cities: "Riemst, Tongeren, Hasselt, Bilzen, Lanaken",
              },
            ].map((zone) => (
              <div
                key={zone.region}
                className="rounded-xl border border-cloud bg-white p-6 card-lift"
              >
                <h3 className="font-semibold text-midnight mb-2 flex items-center gap-2">
                  <MapPinIcon size={16} className="text-amber" />
                  {zone.region}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {zone.cities}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-steel">
            <span className="data-figure">{siteConfig.contact.address.postalCode}</span>{" "}
            {siteConfig.contact.address.city} &mdash; Deplacements dans toute la Belgique
          </p>
        </div>
      </section>

      {/* 12. FAQ + FAQPage schema */}
      <FAQSection
        items={homepageFaq}
        title="Questions frequentes"
      />

      {/* 13. BLOG PREVIEW -- Fresh content + internal links */}
      <BlogPreview />

      {/* 14. FINAL CTA -- Dark full-width closer */}
      <CTADiagnostic
        title="Votre diagnostic energetique, par un ancien inspecteur"
        description="Benoit se deplace chez vous, analyse votre installation, et vous remet un rapport personnalise. Devis detaille sous 48h. Pas une estimation generique — les vrais tarifs 2026 de votre gestionnaire de reseau."
        ctaLabel="Demander mon diagnostic gratuit"
        ctaHref="/contact/"
        variant="dark"
      />
    </>
  );
}
