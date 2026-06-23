/**
 * Long-form, neighborhood-grade deep-dive for local landing pages.
 *
 * Surfaces 4 editorial blocks (urban typology / regulatory context / typical
 * projects / common challenges) plus a city-specific FAQ. The whole section
 * is a pure server component - no JS shipped, no client hydration.
 *
 * Visual rhythm follows LocalContextBlock: amber-left-border editorial blocks
 * with eyebrow + heading + body paragraph. The FAQ uses native <details> /
 * <summary> with a shared `name` attribute for HTML 2024 exclusive accordion
 * behavior, mirroring the FAQSection refactor.
 *
 * Used after LocalContextBlock and before RealisationsLocales so the
 * editorial flow reads: local proof -> quick context -> deep dive ->
 * realisations -> traps -> FAQ.
 */

import type { CityDeepDive } from "@/data/city-deep-dive";

type LocalCityDeepDiveProps = {
  /** Human-readable city name, e.g. "Liège". */
  cityName: string;
  /** Pre-built deep-dive payload for the city. */
  cityDeepDive: CityDeepDive;
  /** Locale for labels. Defaults to "fr". */
  locale?: "fr" | "nl";
};

const LABELS = {
  fr: {
    eyebrow: (city: string) => `Tout savoir sur l'énergie à ${city}`,
    heading: (city: string) => `Notre lecture approfondie du terrain ${city}`,
    faqTitle: (city: string) =>
      `Questions fréquentes - spécifiquement ${city}`,
  },
  nl: {
    eyebrow: (city: string) => `Alles weten over energie in ${city}`,
    heading: (city: string) => `Onze diepgaande lezing van het terrein ${city}`,
    faqTitle: (city: string) =>
      `Veelgestelde vragen - specifiek ${city}`,
  },
} as const;

export function LocalCityDeepDive({
  cityName,
  cityDeepDive,
  locale = "fr",
}: LocalCityDeepDiveProps) {
  const labels = LABELS[locale];
  const sectionId = `local-deep-dive-${cityName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
  // Shared group name so all <details> in this FAQ act as one exclusive
  // accordion natively (HTML 2024 `name` attribute on <details>).
  const faqGroupName = `${sectionId}-faq`;

  const sections = [
    cityDeepDive.urbanTypology,
    cityDeepDive.regulatoryContext,
    cityDeepDive.typicalProjects,
    cityDeepDive.commonChallenges,
  ];

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby={sectionId}
    >
      <div className="container-be max-w-4xl">
        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
          {labels.eyebrow(cityName)}
        </p>
        <h2
          id={sectionId}
          className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance max-w-3xl"
        >
          {labels.heading(cityName)}
        </h2>

        {/* Four stacked editorial blocks - same rhythm as LocalContextBlock */}
        <div className="mt-10 grid gap-8 md:gap-10">
          {sections.map((section, idx) => (
            <article
              key={section.eyebrow}
              className={
                idx > 0
                  ? "border-l-2 border-amber/50 pl-5 md:pl-6 pt-2 border-t border-t-cloud/60"
                  : "border-l-2 border-amber/50 pl-5 md:pl-6"
              }
            >
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-2 mt-2">
                {section.eyebrow}
              </p>
              <h3 className="text-lg md:text-xl font-[family-name:var(--font-heading)] text-midnight leading-snug mb-3 max-w-3xl">
                {section.heading}
              </h3>
              <p className="text-[15.5px] md:text-base text-charcoal leading-relaxed max-w-3xl">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        {/* City-specific FAQ - native exclusive accordion via shared name */}
        {cityDeepDive.faq.length > 0 && (
          <div className="mt-14 md:mt-16 pt-10 border-t border-cloud">
            <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
              {labels.faqTitle(cityName)}
            </h3>
            <div className="space-y-3">
              {cityDeepDive.faq.map((item, index) => (
                <details
                  key={index}
                  name={faqGroupName}
                  className="group border border-cloud rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between w-full text-left p-5 hover:bg-ivory transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-medium text-midnight pr-4">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-amber-dark text-lg leading-none transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed border-t border-cloud pt-4">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
