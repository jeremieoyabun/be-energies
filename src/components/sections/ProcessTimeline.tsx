import { SectionLabel } from "@/components/sections/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Visite technique sur site. Analyse de votre consommation, toiture, et réseau électrique.",
  },
  {
    number: "02",
    title: "Proposition",
    description:
      "Devis détaillé avec calcul de rentabilité basé sur les tarifs 2026 réels de votre GRD.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Installation professionnelle par notre équipe. Chaque étape conçue pour passer le contrôle.",
  },
  {
    number: "04",
    title: "Suivi",
    description:
      "Vérification de conformité, mise en service, et suivi post-installation inclus.",
  },
];

interface ProcessTimelineProps {
  customSteps?: typeof steps;
}

export function ProcessTimeline({ customSteps }: ProcessTimelineProps) {
  const displaySteps = customSteps ?? steps;

  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Notre processus</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
          Notre approche en 4 étapes
        </h2>
        <p className="mt-3 text-steel max-w-xl mb-12">
          On commence toujours par une visite. Pas par un devis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySteps.map((step, index) => (
            <div key={step.number} className={`relative animate-fade-in-up stagger-${index + 1}`}>
              {/* Connector line */}
              {index < displaySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0 border-t border-dashed border-cloud -translate-x-4" />
              )}
              <div className="text-5xl font-bold text-amber/15 data-figure">
                {step.number}
              </div>
              <div className="border-t-2 border-amber/30 pt-6">
                <h3 className="text-lg font-semibold text-midnight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
