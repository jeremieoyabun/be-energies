import { SectionLabel } from "@/components/sections/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Visite technique sur site. Analyse de votre consommation, toiture, et reseau electrique.",
  },
  {
    number: "02",
    title: "Proposition",
    description:
      "Devis detaille avec calcul de rentabilite base sur les tarifs 2026 reels de votre GRD.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Installation professionnelle par notre equipe. Chaque etape concue pour passer le controle.",
  },
  {
    number: "04",
    title: "Suivi",
    description:
      "Verification de conformite, mise en service, et suivi post-installation inclus.",
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
          Notre approche en 4 etapes
        </h2>
        <p className="mt-3 text-steel max-w-xl mb-12">
          On commence toujours par une visite. Pas par un devis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySteps.map((step, index) => (
            <div key={step.number} className={`relative animate-fade-in-up stagger-${index + 1}`}>
              {/* Connector line */}
              {index < displaySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-cloud -translate-x-4" />
              )}
              <div className="text-4xl font-bold text-amber/20 data-figure">
                {step.number}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-midnight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
