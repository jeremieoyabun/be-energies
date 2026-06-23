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
import { ProofSystem } from "@/components/sections/ProofSystem";
import { testimonials } from "@/data/testimonials";
import { ArrowRightIcon } from "@/lib/icons";
import { ComplianceBadge } from "@/components/sections/ComplianceBadge";

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
        subheadline="Avant d'installer, on vient voir. Diagnostic gratuit, devis clair sous 48 h, sans pression commerciale."
        ctaLabel="Demander un diagnostic gratuit"
        ctaHref="/contact/"
        secondaryCta={{ label: "Voir les pièges à éviter", href: "/pieges-a-eviter/" }}
        badge="Ancien inspecteur en électricité · Certifié RESCERT"
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

      {/* 5. PROOF — unified proof block. Single H2, three internal sub-bands
              (strip of recent chantiers, 3 featured projects, 2 Google reviews).
              Replaces the previous TerrainStrip + RealizationGrid + TestimonialBlock
              stack so the home reads as one proof chapter instead of three. */}
      <ProofSystem testimonials={proofTestimonials} />

      {/* 6. FINAL CONVERSION SPLIT - dual ladder: starting a project vs.
              already holding a quote. Single H2, 2 cards, one reassurance line.
              Dark "decision moment" close. */}
      <section className="section-padding bg-midnight text-white">
        <div className="container-be max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="section-label justify-center">
              <span>Prochaine étape</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white text-balance">
              Vous êtes à quel moment ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* LEFT - start a project */}
            <div className="p-7 md:p-9 flex flex-col rounded-2xl bg-white/[0.06] border-[1.5px] border-amber/30 border-l-[3px] border-l-amber shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-amber mb-3 font-[family-name:var(--font-mono)]">
                Étape 1
              </div>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                Je démarre un projet
              </h3>
              <p className="text-white/85 leading-relaxed mb-7 flex-1">
                Vous démarrez un projet et vous voulez des chiffres défendables. On vient voir, on mesure, on chiffre. Sans pression commerciale.
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
            <div className="p-7 md:p-9 flex flex-col rounded-2xl bg-white/[0.06] border-[1.5px] border-white/20 border-l-[3px] border-l-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-white/90 mb-3 font-[family-name:var(--font-mono)]">
                Deuxième avis
              </div>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                J&apos;ai déjà un devis à vérifier
              </h3>
              <p className="text-white/85 leading-relaxed mb-7 flex-1">
                Vous avez un devis et quelque chose vous chiffonne. Benoît le lit comme un inspecteur et vous renvoie ses points d&apos;attention écrits.
              </p>
              <Link
                href="/devis-analyse/"
                className="inline-flex items-center justify-center gap-2 border-[1.5px] border-white text-white font-semibold px-6 py-3 rounded-md hover:border-amber hover:text-amber hover:bg-white/5 transition-colors"
              >
                Faire vérifier mon devis
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <ComplianceBadge
              tone="white"
              icon="clock"
              label="Réponse de Benoît sous 24 h ouvrées"
            />
            <p className="text-center text-sm text-white/70">
              Pas de call center, pas de pression commerciale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
