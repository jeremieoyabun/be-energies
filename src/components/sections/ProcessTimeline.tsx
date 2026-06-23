import Image from "next/image";

const STEPS = {
  fr: [
    {
      number: "01",
      title: "Diagnostic",
      description: "Visite technique sur site, gratuite et sans engagement.",
      detail: "Gratuit, sans engagement",
      image: "/img/services/benoit-inspection-tableau.png",
      alt: "Benoit en train d'inspecter un tableau electrique",
    },
    {
      number: "02",
      title: "Proposition",
      description: "Devis detaille et rentabilite calculee sous 48 h.",
      detail: "Sous 48h",
      image: "/img/services/electricite.jpg",
      alt: "Travail technique d'electricite chez Be'energies",
    },
    {
      number: "03",
      title: "Installation",
      description: "Pose par notre equipe interne, conformite anticipee.",
      detail: "Equipe interne",
      image: "/img/realisations/riemst.webp",
      alt: "Installation realisee a Riemst par Be'energies",
    },
    {
      number: "04",
      title: "Suivi",
      description: "Mise en service, controle et suivi post-installation.",
      detail: "Inclus",
      image: "/img/realisations/engis-02.webp",
      alt: "Onduleur photovoltaique installe a Engis",
    },
  ],
  nl: [
    {
      number: "01",
      title: "Diagnose",
      description: "Technisch bezoek ter plaatse, gratis en vrijblijvend.",
      detail: "Gratis, vrijblijvend",
      image: "/img/services/benoit-inspection-tableau.png",
      alt: "Benoit inspecteert een elektrisch bord",
    },
    {
      number: "02",
      title: "Voorstel",
      description: "Gedetailleerde offerte en rendabiliteit binnen 48 u.",
      detail: "Binnen 48 u",
      image: "/img/services/electricite.jpg",
      alt: "Technisch elektriciteitswerk bij Be'energies",
    },
    {
      number: "03",
      title: "Installatie",
      description: "Plaatsing door ons intern team, conformiteit vooraf gepland.",
      detail: "Intern team",
      image: "/img/realisations/riemst.webp",
      alt: "Installatie door Be'energies in Riemst",
    },
    {
      number: "04",
      title: "Opvolging",
      description: "Ingebruikname, keuring en opvolging na installatie.",
      detail: "Inbegrepen",
      image: "/img/realisations/engis-02.webp",
      alt: "Fotovoltaische omvormer geinstalleerd in Engis",
    },
  ],
} as const;

const HEADINGS = {
  fr: {
    eyebrow: "Notre processus",
    title: "On commence par une visite. Pas par un devis.",
    subtitle:
      "Visite technique réelle, devis détaillé, conformité pensée dès la conception.",
    linkLabel: "Voir la méthode complète",
    linkHref: "/a-propos/",
  },
  nl: {
    eyebrow: "Ons proces",
    title: "Wij beginnen met een bezoek. Niet met een offerte.",
    subtitle:
      "Echt technisch bezoek, gedetailleerde offerte, conformiteit van bij het ontwerp.",
    linkLabel: "Bekijk de volledige methode",
    linkHref: "/nl/over-ons/",
  },
} as const;

type Step = {
  number: string;
  title: string;
  description: string;
  detail?: string;
  image?: string;
  alt?: string;
};

interface ProcessTimelineProps {
  customSteps?: readonly Step[];
  locale?: "fr" | "nl";
}

const FALLBACK_IMAGE = "/img/services/services-hero.jpg";

export function ProcessTimeline({
  customSteps,
  locale = "fr",
}: ProcessTimelineProps) {
  const displaySteps: readonly Step[] = customSteps ?? STEPS[locale];
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
          {displaySteps.map((step, index) => {
            const imageSrc = step.image ?? FALLBACK_IMAGE;
            const imageAlt = step.alt ?? `${step.title} — Be'energies`;
            return (
              <div
                key={step.number}
                className={`group relative rounded-xl border border-charcoal bg-slate/50 overflow-hidden animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-charcoal">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute top-3 left-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-midnight font-bold text-sm shadow-lg ring-2 ring-midnight/40"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  {step.detail && (
                    <span className="absolute top-3 right-3 text-[10px] font-medium text-cyan tracking-wider uppercase bg-midnight/70 backdrop-blur px-2 py-1 rounded">
                      {step.detail}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < displaySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[22%] -right-3 w-6 h-px bg-charcoal" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href={h.linkHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-amber transition-colors"
          >
            {h.linkLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
