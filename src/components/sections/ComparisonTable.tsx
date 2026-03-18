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
    aspect: "Visite technique",
    others: "Devis par téléphone ou en ligne",
    beEnergies: "Visite sur site obligatoire",
  },
  {
    aspect: "Calcul de rentabilité",
    others: "Estimations génériques, ROI gonflé",
    beEnergies: "Tarifs 2026 réels de votre GRD",
  },
  {
    aspect: "Dimensionnement",
    others: "Maximum de panneaux pour maximiser la facture",
    beEnergies: "Optimisé pour l'autoconsommation",
  },
  {
    aspect: "Conformité",
    others: "Pas toujours vérifiée avant le contrôle",
    beEnergies: "Conçue par un ancien inspecteur, certifié RESCERT",
  },
  {
    aspect: "Suivi post-installation",
    others: "Support limité après la vente",
    beEnergies: "Suivi et maintenance inclus",
  },
  {
    aspect: "Conseil batterie",
    others: "Toujours recommandée (marge plus élevée)",
    beEnergies: "Recommandée seulement si rentable",
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

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
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
                <th className="text-left py-4 px-5 text-silver/80 font-medium text-xs uppercase tracking-wider w-[22%]">
                  Critère
                </th>
                <th className="text-left py-4 px-5 font-medium text-silver/80 text-xs uppercase tracking-wider w-[39%] border-l border-white/10">
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
      </div>
    </section>
  );
}
