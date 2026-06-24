import Link from "next/link";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRightIcon } from "@/lib/icons";

interface WarrantyRow {
  label: string;
  value: string;
  detail: string;
}

const ROWS: WarrantyRow[] = [
  {
    label: "Panneaux",
    value: "25 à 30 ans",
    detail: "Performance + produit, Tier 1 uniquement",
  },
  {
    label: "Onduleurs",
    value: "10 à 12 ans",
    detail: "Extensibles à 20-25 ans selon le constructeur",
  },
  {
    label: "Installation",
    value: "10 ans",
    detail: "Main d'œuvre et étanchéité du calepinage",
  },
];

/**
 * PVWarrantyTeaser — three-line synthesis of the panel/inverter warranty
 * landscape, with a link to the dedicated guide that hosts the full
 * datasheet-sourced tables.
 *
 * Replaces the inline WarrantyLadder on the photovoltaic service page,
 * which was visually heavy and broke the page rhythm. The deep tables now
 * live at /guides/garanties-panneaux-solaires-onduleurs/.
 */
export function PVWarrantyTeaser() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <SectionLabel>Matériel et garanties</SectionLabel>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
            Du matériel choisi pour durer, pas pour vendre vite
          </h2>
          <p className="text-charcoal/85 text-[15px] leading-relaxed max-w-prose">
            Panneaux Tier 1, onduleurs européens ou asiatiques solides,
            garanties extraites ligne par ligne des fiches techniques
            constructeur. Pas de fiches marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {ROWS.map((row, idx) => (
            <div
              key={row.label}
              className={`card reveal reveal-${idx + 1} relative p-6 md:p-7 flex flex-col before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-amber before:rounded-t-[1rem]`}
            >
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-amber-dark font-[family-name:var(--font-mono)]">
                {row.label}
              </p>
              <p className="mt-3 text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight tabular-nums">
                {row.value}
              </p>
              <p className="mt-3 text-[14px] text-charcoal leading-relaxed">
                {row.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <p className="text-[13.5px] text-steel max-w-prose">
            Les durées exactes dépendent du modèle exact que vous recevez.
            Chiffres ci-dessus à titre indicatif — les tableaux complets,
            constructeur par constructeur, sont dans le guide dédié.
          </p>
          <Link
            href="/guides/garanties-panneaux-solaires-onduleurs/"
            className="inline-flex items-center gap-2 font-semibold text-midnight hover:text-amber-dark transition-colors text-[14.5px] shrink-0"
          >
            Voir les tableaux de garanties détaillés
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
