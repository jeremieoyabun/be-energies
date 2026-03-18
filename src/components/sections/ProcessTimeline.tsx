import { SectionLabel } from "@/components/sections/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Visite technique sur site. Analyse de votre consommation, toiture, et réseau électrique.",
    detail: "Gratuit, sans engagement",
  },
  {
    number: "02",
    title: "Proposition",
    description:
      "Devis détaillé avec calcul de rentabilité basé sur les tarifs 2026 réels de votre GRD.",
    detail: "Sous 48h",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Installation professionnelle par notre équipe. Chaque étape conçue pour passer le contrôle.",
    detail: "Équipe interne",
  },
  {
    number: "04",
    title: "Suivi",
    description:
      "Vérification de conformité, mise en service, et suivi post-installation inclus.",
    detail: "Inclus",
  },
];

interface ProcessTimelineProps {
  customSteps?: typeof steps;
}

export function ProcessTimeline({ customSteps }: ProcessTimelineProps) {
  const displaySteps = customSteps ?? steps;

  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 texture-dots" aria-hidden="true" />
      <div className="container-be relative z-10">
        <div className="section-label section-label-dark">
          <span>Notre processus</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-balance">
          On commence par une visite. Pas par un devis.
        </h2>
        <p className="mt-3 text-silver max-w-xl mb-12">
          Un processus rigoureux, conçu par un ancien inspecteur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displaySteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative p-6 rounded-xl border border-charcoal bg-slate/50 animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="stat-value text-3xl font-bold text-amber/30">
                  {step.number}
                </span>
                {step.detail && (
                  <span className="text-[10px] font-medium text-cyan tracking-wider uppercase">
                    {step.detail}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-silver/80 leading-relaxed">
                {step.description}
              </p>
              {/* Connector */}
              {index < displaySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-charcoal" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
