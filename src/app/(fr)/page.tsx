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
import { QuoteCheckCTA } from "@/components/sections/QuoteCheckCTA";
import { PDFLeadMagnetCard } from "@/components/sections/PDFLeadMagnetCard";
import { pieges } from "@/data/pieges";
import { testimonials } from "@/data/testimonials";
import { realizations } from "@/data/realizations";
import { homepageFaq } from "@/data/faq";
import { siteConfig } from "@/lib/site-config";
import { MapPinIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Installateur photovoltaïque en Belgique | Ancien inspecteur RESCERT",
  description:
    "Panneaux solaires, batteries, bornes de recharge, pompes à chaleur et conformité électrique en Belgique et au Luxembourg. Diagnostic gratuit, devis clair sous 48 h, conformité pensée dès la conception par Benoît Dezso, ancien inspecteur certifié RESCERT.",
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
      <JsonLd data={personSchema()} />

      {/* 1. HERO */}
      <HeroSection
        headline="Votre installation énergétique, conçue comme si elle devait passer le contrôle demain."
        subheadline="Panneaux solaires, batteries, bornes de recharge, pompes à chaleur et conformité électrique en Belgique et au Luxembourg. Diagnostic gratuit par Benoît Dezso, ancien inspecteur certifié RESCERT."
        ctaLabel="Demander mon diagnostic gratuit"
        ctaHref="/contact/"
        secondaryCta={{ label: "Voir les pièges à éviter", href: "/pieges-a-eviter/" }}
        badge="Certifié RESCERT · Ancien inspecteur en électricité"
        reassurances={["Devis clair sous 48 h", "Visite technique réelle", "Un seul interlocuteur"]}
        video="/vds/Be-energies_video_header.optimized.webm"
      />

      {/* 2. TRUST BAR - verified social proof + RESCERT immediately after the hero */}
      <TrustBar />

      {/* 3. PHOTOVOLTAIC REALITY 2026 - the honest profitability angle */}
      <RentabilityProof />

      {/* 4. SERVICES - what we do */}
      <ServiceCardGrid />

      {/* 5. FOUNDER CREDIBILITY - Benoît's inspector story */}
      <FounderCredibility variant="full" />

      {/* 6. METHOD - how Benoît works (sits with founder, builds the trust block) */}
      <ProcessTimeline />

      {/* 7. DECISION HELP - comparison + quote-check + pièges form a tight
              "before you sign anything" block; QuoteCheckCTA is intentionally
              dark to bridge the ivory ComparisonTable and the midnight
              PiegesCarousel, framing all three as one visual unit. */}
      <ComparisonTable />
      <QuoteCheckCTA variant="dark" />
      <PiegesCarousel pieges={pieges.slice(0, 3)} />
      {/* PDF lead magnet - converts homepage piège teaser viewers in one
          click instead of bouncing them to /pieges-a-eviter/. */}
      <section className="bg-midnight pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 texture-dots opacity-60" aria-hidden="true" />
        <div className="container-be relative z-10">
          <PDFLeadMagnetCard variant="inline" />
        </div>
      </section>

      {/* 8. PROOF - real realizations */}
      <RealizationGrid
        realizations={realizations}
        maxItems={4}
        showViewAll
        featured
      />

      {/* 9. REVIEWS - what clients say + Google rating badge */}
      <TestimonialBlock
        testimonials={heroTestimonials}
        title="Ils nous ont fait confiance"
      />

      {/* 9. LOCAL COVERAGE */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <div className="section-label">
            <span>Zone d&apos;intervention</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-8 text-balance">
            Wallonie, Flandre, Bruxelles &amp; Luxembourg
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                region: "Wallonie",
                cities: "Liège, Namur, Mons, Charleroi, Waremme, Ans, Nivelles",
              },
              {
                region: "Flandre",
                cities: "Riemst, Tongeren, Hasselt, Bilzen, Lanaken",
              },
              { region: "Bruxelles", cities: "Toutes les communes" },
              {
                region: "Luxembourg",
                cities: "Projets professionnels sur étude, Grand-Duché",
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
            {siteConfig.contact.address.addressLocality}. Déplacements dans toute la Belgique
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
        title="Un avis honnête avant de signer"
        description="Visite technique sur site, dimensionnement basé sur votre consommation réelle, devis clair sous 48 h avec les tarifs 2026 de votre gestionnaire de réseau. Pas d'estimation générique, pas de pression."
        ctaLabel="Demander mon diagnostic gratuit"
        ctaHref="/contact/"
        variant="dark"
      />
    </>
  );
}
