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
  title = "Ce que d'autres font vs. ce que Be'energies fait",
}: ComparisonTableProps) {
  return (
    <section className="section-padding">
      <div className="container-be max-w-4xl">
        <SectionLabel>Comparaison</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-10">
          {title}
        </h2>
        <div className="overflow-x-auto rounded-xl border border-cloud">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cloud bg-ivory">
                <th className="text-left py-3 px-4 text-steel font-medium w-1/4">
                  Aspect
                </th>
                <th className="text-left py-3 px-4 text-steel font-medium w-[37.5%] border-l border-cloud">
                  Pratique courante
                </th>
                <th className="text-left py-3 px-4 font-semibold text-midnight w-[37.5%] border-l border-cloud">
                  Be&apos;energies
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-cloud last:border-0 hover:bg-ivory/50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-midnight">
                    {row.aspect}
                  </td>
                  <td className="py-4 px-4 text-steel border-l border-cloud">
                    <span className="flex items-start gap-2">
                      <CloseIcon
                        size={14}
                        className="text-danger shrink-0 mt-0.5"
                      />
                      {row.others}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-midnight border-l border-cloud">
                    <span className="flex items-start gap-2">
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
