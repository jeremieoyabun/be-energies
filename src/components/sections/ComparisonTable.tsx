import Link from "next/link";
import { CheckIcon, CloseIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";

interface ComparisonRow {
  aspect: string;
  others: string;
  beEnergies: string;
}

interface ComparisonTableProps {
  rows?: ComparisonRow[];
  title?: string;
}

const defaultRows: ComparisonRow[] = [
  {
    aspect: "Diagnostic énergétique",
    others: "Estimation générique sur base d'une facture",
    beEnergies: "Courbe de charge réelle et tarifs 2026 de votre GRD",
  },
  {
    aspect: "Devis",
    others: "« Panneaux 400 Wc », onduleur non précisé",
    beEnergies: "Marque, modèle et datasheet pour chaque composant",
  },
  {
    aspect: "Conformité électrique",
    others: "Contre-visite fréquente, corrections à votre charge",
    beEnergies: "Pensée dès la conception, passage du premier coup",
  },
  {
    aspect: "Garantie long terme",
    others: "« Garantie 25 ans » sans précision de rendement",
    beEnergies: "Rendement garanti chiffré à 25 ans (% contractuel)",
  },
  {
    aspect: "Interlocuteur",
    others: "Commercial, puis sous-traitants, puis SAV externe",
    beEnergies: "Un seul interlocuteur du diagnostic au contrôle final",
  },
];

export function ComparisonTable({
  rows = defaultRows,
  title = "Pourquoi Be'energies fait la différence",
}: ComparisonTableProps) {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-be max-w-4xl">
        <SectionLabel>Comparaison</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-3 text-balance">
          {title}
        </h2>
        <p className="text-steel mb-10 max-w-xl">
          Ce que la plupart des installateurs font, et ce que nous faisons différemment.
        </p>

        {/* Mobile: stacked cards. aria-hidden because the desktop <table>
            below carries the canonical semantics; this view is purely
            visual reflow for narrow viewports. Crawlers see one source. */}
        <div className="md:hidden space-y-4" aria-hidden="true">
          {rows.map((row, index) => (
            <div key={index} className="card p-5">
              <p className="font-semibold text-midnight text-sm mb-3">{row.aspect}</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <CloseIcon size={14} className="text-danger shrink-0 mt-0.5" />
                  <span className="text-steel">{row.others}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                  <span className="text-midnight font-medium">{row.beEnergies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-cloud shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-midnight">
                <th className="text-left py-4 px-5 text-white/85 font-medium text-xs uppercase tracking-wider w-[22%]">
                  Critère
                </th>
                <th className="text-left py-4 px-5 font-medium text-white/85 text-xs uppercase tracking-wider w-[39%] border-l border-white/10">
                  Pratique courante
                </th>
                <th className="text-left py-4 px-5 font-bold text-amber text-xs uppercase tracking-wider w-[39%] border-l border-white/10">
                  Be&apos;energies
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-cloud/60 last:border-0 group"
                >
                  <td className="py-4 px-5 font-semibold text-midnight text-[13px]">
                    {row.aspect}
                  </td>
                  <td className="py-4 px-5 text-steel border-l border-cloud/60">
                    <span className="flex items-start gap-2.5">
                      <CloseIcon
                        size={14}
                        className="text-danger/70 shrink-0 mt-0.5"
                      />
                      {row.others}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-midnight font-medium bg-amber/[0.03] border-l border-cloud/60">
                    <span className="flex items-start gap-2.5">
                      <CheckIcon
                        size={14}
                        className="text-success shrink-0 mt-0.5"
                      />
                      {row.beEnergies}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pieges-a-eviter/"
            className="inline-flex items-center gap-2 text-sm font-medium text-midnight underline underline-offset-4 decoration-amber/60 hover:decoration-amber transition-colors"
          >
            Voir la grille complète, chapitre par chapitre
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
