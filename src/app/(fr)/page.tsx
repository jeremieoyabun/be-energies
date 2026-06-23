import Link from "next/link";
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
import { RentabilityObjection2026 } from "@/components/sections/RentabilityObjection2026";
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
import { MapPinIcon, ArrowRightIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Installateur photovoltaïque en Belgique | Ancien inspecteur RESCERT",
  description:
    "Panneaux solaires, batteries, bornes de recharge, pompes à chaleur et conformité électrique en Belgique et au Luxembourg. Diagnostic gratuit, devis clair sous 48 h, conformité pensée dès la conception par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT.",
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
        subheadline="Avant d'installer, on vient voir. Diagnostic gratuit, devis clair sous 48 h. Sans pression commerciale."
        ctaLabel="Demander un diagnostic gratuit"
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

      {/* 4b. RENTABILITY OBJECTION 2026 - name the #1 Walloon objection
              (prosumer + smart meter killing solar profitability) on the
              homepage instead of burying it in the FAQ. Pattern: 1KOMMA5° +
              Octopus Energy — H2 the objection, resolve in 3 sourced
              sub-blocks, CTA to deeper pages. */}
      <RentabilityObjection2026 />

      {/* 5. FOUNDER CREDIBILITY - Benoît's inspector story (white bg breaks
              the warm-gradient → midnight rhythm cleanly) */}
      <FounderCredibility variant="full" />

      {/* 6. METHOD - how Benoît works (midnight, visual rhythm break after
              the editorial founder block) */}
      <ProcessTimeline />

      {/* 7. DECISION HELP - comparison + pièges form a tight "before you sign
              anything" editorial+visual pair. ComparisonTable (ivory editorial)
              → PiegesCarousel (midnight visual) → PDFLeadMagnet (midnight soft
              conversion tied to pièges). QuoteCheckCTA was moved DOWN out of
              this stack to avoid 4 conversion pitches in a row. */}
      <ComparisonTable />
      <PiegesCarousel pieges={pieges.slice(0, 3)} />
      {/* PDF lead magnet - converts homepage piège teaser viewers in one
          click instead of bouncing them to /pieges-a-eviter/. */}
      <section className="bg-midnight pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 texture-dots opacity-60" aria-hidden="true" />
        <div className="container-be relative z-10">
          <PDFLeadMagnetCard variant="inline" />
        </div>
      </section>

      {/* 8. PROOF - real realizations (white bg, visual) */}
      <RealizationGrid
        realizations={realizations}
        maxItems={4}
        showViewAll
        featured
      />

      {/* 9. QUOTE-CHECK CTA - placed AFTER realizations: the visitor has now
              seen the founder, the method, the pièges, and real projects.
              Asking "and your devis, who has checked it?" lands harder here
              than buried inside the decision-help stack. Dark variant bridges
              the white RealizationGrid and the warm-gradient TestimonialBlock. */}
      <QuoteCheckCTA variant="dark" />

      {/* 10. REVIEWS - what clients say + Google rating badge */}
      <TestimonialBlock
        testimonials={heroTestimonials}
        title="Ils nous ont fait confiance"
      />

      {/* 11. LOCAL COVERAGE - ivory keeps the alternation with the white
              FAQ that follows */}
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

      {/* 12. FAQ - teaser: only the 4 most strategic questions on home
              (rentabilité 2026, prosumer, inspecteur RESCERT, services).
              Full list lives on /contact/#faq. */}
      <FAQSection
        items={homepageFaq.slice(0, 4)}
        title="Questions fréquentes"
      />
      <div className="container-be max-w-3xl -mt-10 mb-16 md:-mt-12 md:mb-20 text-center">
        <Link
          href="/contact/#faq"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-dark hover:text-amber transition-colors"
        >
          Voir toutes les questions
          <ArrowRightIcon size={15} />
        </Link>
      </div>

      {/* 13. FINAL CTA - direct address + dual ladder (diagnostic vs devis
              check) so the visitor can self-route based on whether they
              already have a quote in hand. */}
      <CTADiagnostic
        title="Vous avez un projet en tête ? Voici comment on commence."
        description="Deux portes d'entrée selon votre situation. Vous démarrez de zéro : on cale un diagnostic sur site, on dimensionne sur votre consommation réelle, on chiffre sous 48 h. Vous avez déjà un devis : Benoît le lit en détail et vous renvoie un avis écrit, sans pression."
        ctaLabel="Demander un diagnostic gratuit"
        ctaHref="/contact/"
        secondaryCta={{ label: "Faire vérifier mon devis", href: "/devis-analyse/" }}
        reassurance="Réponse de Benoît sous 24 h ouvrées · Pas de pression commerciale"
        variant="dark"
      />
    </>
  );
}
