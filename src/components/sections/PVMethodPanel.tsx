import Link from "next/link";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRightIcon } from "@/lib/icons";

const ITEMS: string[] = [
  "Lecture de votre consommation réelle sur 12 mois — pas une moyenne nationale",
  "Orientation et inclinaison de la toiture, mesurées au degré près",
  "Étude d'ombrage saisonnière (cheminée, arbre, voisin)",
  "État du coffret électrique avant toute extension solaire",
  "Type de compteur et régime GRD : avant 2024 ou après 2024",
  "Conformité anticipée : câblage, terre, parafoudre prêts pour le contrôle",
];

/**
 * PVMethodPanel — what Benoît checks before quoting a PV installation.
 *
 * Items are rendered directly here (not through InspectionPanel) because
 * the section already has its own SectionLabel + H2 + intro. Re-using
 * InspectionPanel here used to stack a second eyebrow ("Visite technique
 * sur site") plus a second title ("Ce que je vérifie, point par point")
 * on top of the panel — the eyebrow looked detached and floating above
 * a header it didn't visually belong to.
 */
export function PVMethodPanel() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <SectionLabel>Méthode Be&apos;energies</SectionLabel>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
            Six contrôles avant le moindre devis
          </h2>
          <p className="text-charcoal/85 text-[15.5px] leading-relaxed max-w-prose">
            Pas de simulateur générique, pas de chiffres copiés d&apos;un
            autre dossier. Ce que je vérifie sur votre toiture, votre
            coffret et vos factures avant de proposer une seule ligne de
            chiffrage.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 gap-3">
          {ITEMS.map((item, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <li
                key={item}
                className="card flex items-start gap-3.5 p-4 md:p-5"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-md bg-midnight text-ivory text-[12.5px] font-bold tracking-[0.1em] font-[family-name:var(--font-mono)] ring-1 ring-amber/30"
                >
                  {number}
                </span>
                <span className="text-[15px] font-medium text-midnight leading-relaxed pt-0.5">
                  {item}
                </span>
              </li>
            );
          })}
        </ol>

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
