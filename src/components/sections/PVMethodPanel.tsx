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
    <section className="section-padding bg-white">
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
                className="group flex items-start gap-3 bg-white border border-cloud rounded-xl p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-elevated hover:border-amber/40"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex items-center justify-center min-w-[2rem] h-7 px-1.5 rounded-md bg-midnight text-ivory text-[11px] font-semibold tracking-[0.08em] font-[family-name:var(--font-mono)]"
                >
                  {number}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber/15 text-amber-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M5 12l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[14px] text-charcoal leading-snug">
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
