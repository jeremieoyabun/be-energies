import Link from "next/link";
import { InspectionPanel } from "@/components/sections/InspectionPanel";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRightIcon } from "@/lib/icons";

/**
 * PVMethodPanel — what Benoît checks before quoting a PV installation.
 *
 * Sits on the photovoltaic service page between the 2026 decision block
 * and the warranty teaser. Replaces the previous standalone TrustBar +
 * RESCERT credibility bar duplicates, and translates Benoît's inspector
 * positioning into six concrete pre-quote checks. Reuses InspectionPanel
 * so the visual language stays consistent with the founder block on the
 * homepage.
 */
export function PVMethodPanel() {
  return (
    <section className="section-padding bg-white">
      <div className="container-be">
        <SectionLabel>Méthode Be&apos;energies</SectionLabel>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
            Six contrôles avant le moindre devis
          </h2>
          <p className="text-charcoal/85 text-[15px] leading-relaxed max-w-prose">
            Pas de simulateur générique, pas de chiffres copiés d&apos;un autre
            dossier. Ce que je vérifie sur votre toiture, votre coffret et
            vos factures avant de proposer une seule ligne de chiffrage.
          </p>
        </div>

        <InspectionPanel
          eyebrow="Visite technique sur site"
          title="Ce que je vérifie, point par point"
          subtitle="Aucun calcul de rentabilité ne tient debout sans ces six vérifications."
          items={[
            "Lecture de votre consommation réelle sur 12 mois — pas une moyenne nationale",
            "Orientation et inclinaison de la toiture, mesurées au degré près",
            "Étude d'ombrage saisonnière (cheminée, arbre, voisin)",
            "État du coffret électrique avant toute extension solaire",
            "Type de compteur et régime GRD : avant 2024 ou après 2024",
            "Conformité anticipée : câblage, terre, parafoudre prêts pour le contrôle",
          ]}
        />

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 text-[14px] text-charcoal">
          <span className="inline-flex items-center gap-2 text-amber-dark font-semibold">
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-amber"
            />
            La visite est gratuite et sans engagement.
          </span>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-1.5 font-semibold text-midnight hover:text-amber-dark transition-colors"
          >
            Réserver la mienne
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
