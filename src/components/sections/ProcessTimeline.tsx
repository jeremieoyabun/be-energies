const STEPS = {
  fr: [
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
  ],
  nl: [
    {
      number: "01",
      title: "Diagnose",
      description:
        "Technisch bezoek ter plaatse. Analyse van uw verbruik, dak en elektrische installatie.",
      detail: "Gratis, vrijblijvend",
    },
    {
      number: "02",
      title: "Voorstel",
      description:
        "Gedetailleerde offerte met rendabiliteitsberekening op basis van de werkelijke tarieven 2026 van uw netbeheerder.",
      detail: "Binnen 48 u",
    },
    {
      number: "03",
      title: "Installatie",
      description:
        "Professionele installatie door ons team. Elke stap is ontworpen om de keuring de eerste keer te doorstaan.",
      detail: "Intern team",
    },
    {
      number: "04",
      title: "Opvolging",
      description:
        "Conformiteitscontrole, ingebruikname en opvolging na installatie zijn inbegrepen.",
      detail: "Inbegrepen",
    },
  ],
} as const;

const HEADINGS = {
  fr: {
    eyebrow: "Notre processus",
    title: "On commence par une visite. Pas par un devis.",
    subtitle:
      "Un processus rigoureux : visite technique réelle, devis détaillé, conformité pensée dès la conception.",
  },
  nl: {
    eyebrow: "Ons proces",
    title: "Wij beginnen met een bezoek. Niet met een offerte.",
    subtitle:
      "Een rigoureus proces: echt technisch bezoek, gedetailleerde offerte, conformiteit van bij het ontwerp.",
  },
} as const;

interface ProcessTimelineProps {
  customSteps?: (typeof STEPS)["fr"] | readonly (typeof STEPS)["fr"][number][];
  locale?: "fr" | "nl";
}

export function ProcessTimeline({
  customSteps,
  locale = "fr",
}: ProcessTimelineProps) {
  const displaySteps = customSteps ?? STEPS[locale];
  const h = HEADINGS[locale];

  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 texture-dots" aria-hidden="true" />
      <div className="container-be relative z-10">
        <div className="section-label section-label-dark">
          <span>{h.eyebrow}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-balance">
          {h.title}
        </h2>
        <p className="mt-3 text-silver max-w-xl mb-12">{h.subtitle}</p>

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
