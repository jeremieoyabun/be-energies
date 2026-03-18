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
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { pieges } from "@/data/pieges";
import { testimonials } from "@/data/testimonials";
import { realizations } from "@/data/realizations";
import { homepageFaq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";
import { MapPinIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Be'energies — Panneaux solaires, batteries, bornes de recharge en Belgique",
  description:
    "Installation de panneaux solaires, batteries domestiques, bornes de recharge, pompes à chaleur et conformité électrique en Belgique. Fondé par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT. Retour en 5-7 ans. Diagnostic gratuit.",
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

      {/* 1. HERO */}
      <HeroSection
        headline="J'ai inspecté des centaines d'installations. Aujourd'hui, je les construis."
        subheadline="Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT. Un seul interlocuteur pour vos panneaux solaires, batteries, bornes et mise en conformité."
        ctaLabel="Diagnostic énergétique gratuit"
        ctaHref="/contact/"
        secondaryCta={{ label: "Nos services", href: "/services/" }}
        badge="Ancien inspecteur | Certifié RESCERT"
        video="/vds/Be-energies_video_header.webm"
      />

      {/* 2. TRUST BAR */}
      <TrustBar />

      {/* 3. RENTABILITY PROOF */}
      <RentabilityProof />

      {/* 4. SERVICES */}
      <ServiceCardGrid />

      {/* 5. FOUNDER */}
      <FounderCredibility variant="full" />

      {/* 6. COMPARISON + PIEGES */}
      <ComparisonTable />
      <PiegesCarousel pieges={pieges.slice(0, 3)} />

      {/* 7. PROCESS */}
      <ProcessTimeline />

      {/* 8. TESTIMONIALS + REALIZATIONS */}
      <TestimonialBlock
        testimonials={heroTestimonials}
        title="Ils nous ont fait confiance"
      />

      <RealizationGrid
        realizations={realizations}
        maxItems={4}
        showViewAll
        featured
      />

      {/* 9. LOCAL COVERAGE */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <div className="section-label">
            <span>Zone d&apos;intervention</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-8 text-balance">
            Wallonie, Bruxelles, Limbourg flamand
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                region: "Wallonie",
                cities: "Liège, Namur, Mons, Charleroi, Waremme, Ans, Nivelles",
              },
              { region: "Bruxelles", cities: "Toutes les communes" },
              {
                region: "Limbourg flamand",
                cities: "Riemst, Tongeren, Hasselt, Bilzen, Lanaken",
              },
            ].map((zone) => (
              <div
                key={zone.region}
                className="card p-5"
              >
                <h3 className="font-semibold text-midnight mb-2 flex items-center gap-2">
                  <MapPinIcon size={15} className="text-amber" />
                  {zone.region}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {zone.cities}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-steel">
            <span className="data-figure font-semibold text-charcoal">{siteConfig.contact.address.postalCode}</span>{" "}
            {siteConfig.contact.address.city} — Déplacements dans toute la Belgique
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQSection
        items={homepageFaq}
        title="Questions fréquentes"
      />

      {/* 11. FINAL CTA */}
      <CTADiagnostic
        title="Votre diagnostic énergétique, par un ancien inspecteur certifié RESCERT"
        description="Benoît se déplace chez vous, analyse votre installation, et vous remet un rapport personnalisé. Devis détaillé sous 48h. Pas une estimation générique — les vrais tarifs 2026 de votre gestionnaire de réseau."
        ctaLabel="Demander mon diagnostic gratuit"
        ctaHref="/contact/"
        variant="dark"
      />
    </>
  );
}
