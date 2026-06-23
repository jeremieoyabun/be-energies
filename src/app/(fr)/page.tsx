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
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { RentabilityObjection2026 } from "@/components/sections/RentabilityObjection2026";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { RealizationGrid } from "@/components/sections/RealizationGrid";
import { TerrainStrip } from "@/components/sections/TerrainStrip";
import { testimonials } from "@/data/testimonials";
import { realizations } from "@/data/realizations";
import { ArrowRightIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Installateur photovoltaïque en Belgique | Ancien inspecteur RESCERT",
  description:
    "Panneaux solaires, batteries, bornes de recharge, pompes à chaleur et conformité électrique en Belgique et au Luxembourg. Diagnostic gratuit, devis clair sous 48 h, conformité pensée dès la conception par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT.",
  path: "/",
  alternates: { fr: "/", nl: "/nl/" },
});

export default function HomePage() {
  const proofTestimonials = [testimonials[0], testimonials[4]];

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
        reassurances={["Devis clair sous 48 h", "Visite technique réelle", "Un seul interlocuteur"]}
        video="/vds/Be-energies_video_header.optimized.webm"
      />

      {/* 2. PV 2026 DECISION CARDS - name and resolve the #1 Walloon objection
              (prosumer + smart meter) head-on, right after the hero. */}
      <RentabilityObjection2026 />

      {/* 3. SERVICES - 4 core services */}
      <ServiceCardGrid />

      {/* 4. FOUNDER CREDIBILITY - Benoît's inspector story + "ce que je vérifie"
              checklist (handled inside the variant="full") */}
      <FounderCredibility variant="full" />

      {/* 5. PROOF - one continuous block: TerrainStrip (silent field photos)
              → RealizationGrid (curated projects) → TestimonialBlock (2 voices) */}
      <TerrainStrip />
      <RealizationGrid
        realizations={realizations}
        maxItems={4}
        showViewAll
        featured
      />
      <TestimonialBlock
        testimonials={proofTestimonials}
        title="Ils nous ont fait confiance"
      />

      {/* 6. FINAL CONVERSION SPLIT - dual ladder: starting a project vs.
              already holding a quote. Single H2, 2 cards, one reassurance line. */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="section-label justify-center">
              <span>Prochaine étape</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
              Vous êtes à quel moment ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* LEFT - start a project */}
            <div className="card p-7 md:p-9 flex flex-col bg-white">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-dark mb-3">
                Étape 1
              </div>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-4">
                Je démarre un projet
              </h3>
              <p className="text-steel leading-relaxed mb-7 flex-1">
                Vous réfléchissez à des panneaux, une batterie, une borne ou une pompe à chaleur, et vous voulez savoir ce qui tient debout chez vous. On vient voir, on mesure, on chiffre.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-amber text-midnight font-semibold px-6 py-3 rounded-md hover:bg-amber-light transition-colors"
              >
                Demander un diagnostic gratuit
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            {/* RIGHT - already have a quote */}
            <div className="card p-7 md:p-9 flex flex-col bg-white">
              <div className="text-xs font-semibold tracking-[0.18em] uppercase text-steel mb-3">
                Deuxième avis
              </div>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-4">
                J&apos;ai déjà un devis à vérifier
              </h3>
              <p className="text-steel leading-relaxed mb-7 flex-1">
                Un installateur vous a déjà remis une offre et quelque chose vous chiffonne. Envoyez-la, Benoît la lit avec son œil d&apos;ancien inspecteur et vous dit ce qui mérite d&apos;être challengé.
              </p>
              <Link
                href="/devis-analyse/"
                className="inline-flex items-center justify-center gap-2 border-2 border-midnight text-midnight font-semibold px-6 py-3 rounded-md hover:bg-midnight hover:text-white transition-colors"
              >
                Faire vérifier mon devis
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-steel">
            Réponse de Benoît sous 24 h ouvrées. Pas de call center, pas de pression.
          </p>
        </div>
      </section>
    </>
  );
}
