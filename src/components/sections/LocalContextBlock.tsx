/**
 * Server-side editorial context block for local landing pages.
 *
 * Surfaces a 3-paragraph "context note" that differentiates each city page,
 * lifting it above the "thin programmatic content" perception by Google.
 *
 * The block reads as editorial commentary - not a marketing card. It pairs
 * three short, fact-based paragraphs covering:
 *   1. Housing / roof character typical of the area
 *   2. Local photovoltaic / energy context (distance, project shape, regulation)
 *   3. Optional positioning note in Benoît's voice (founder credibility)
 *
 * Bilingual: locale prop drives FR / NL labels. The actual paragraph copy is
 * passed in by the caller (already localized).
 *
 * Pure server component - no JS shipped.
 */

type LocalContextBlockProps = {
  /** Human-readable city name, e.g. "Liège", "Riemst". */
  cityName: string;
  /** Province name, e.g. "Liège", "Hainaut", "Limburg". */
  province: string;
  /** 1-2 sentences about typical housing / roof character in the area. */
  housingNote: string;
  /** 2-3 sentences about local PV context, distance, project shape. */
  contextNote: string;
  /** Optional 1-2 sentences in Benoît's voice - founder positioning. */
  positioningNote?: string;
  /** Locale for labels. Defaults to "fr". */
  locale?: "fr" | "nl";
};

const LABELS = {
  fr: {
    eyebrowPrefix: "Pourquoi",
    heading: (city: string) => `Notre lecture du terrain à ${city}`,
    housing: "Habitat & toitures",
    context: "Contexte énergétique local",
    positioning: "Le mot de Benoît",
    provinceLabel: "Province de",
  },
  nl: {
    eyebrowPrefix: "Waarom",
    heading: (city: string) => `Onze lezing van het terrein in ${city}`,
    housing: "Woningen & daken",
    context: "Lokale energiecontext",
    positioning: "Het woord van Benoît",
    provinceLabel: "Provincie",
  },
} as const;

export function LocalContextBlock({
  cityName,
  province,
  housingNote,
  contextNote,
  positioningNote,
  locale = "fr",
}: LocalContextBlockProps) {
  const labels = LABELS[locale];
  const headingId = `local-context-${cityName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section
      className="section-padding bg-ivory"
      aria-labelledby={headingId}
    >
      <div className="container-be max-w-5xl">
        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
          {labels.eyebrowPrefix} {cityName}
        </p>
        <h2
          id={headingId}
          className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance max-w-2xl"
        >
          {labels.heading(cityName)}
        </h2>
        <p className="mt-3 text-[13px] text-steel tracking-wide">
          {labels.provinceLabel} {province}
        </p>

        {/* Three stacked editorial paragraphs */}
        <div className="mt-10 grid gap-6 md:gap-7">
          <article className="border-l-2 border-amber/50 pl-5 md:pl-6">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-2">
              {labels.housing}
            </p>
            <p className="text-[15.5px] md:text-base text-charcoal leading-relaxed max-w-3xl">
              {housingNote}
            </p>
          </article>

          <article className="border-l-2 border-amber/50 pl-5 md:pl-6">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-2">
              {labels.context}
            </p>
            <p className="text-[15.5px] md:text-base text-charcoal leading-relaxed max-w-3xl">
              {contextNote}
            </p>
          </article>

          {positioningNote ? (
            <article className="border-l-2 border-midnight/70 pl-5 md:pl-6">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-midnight mb-2">
                {labels.positioning}
              </p>
              <p className="text-[15.5px] md:text-base text-charcoal leading-relaxed max-w-3xl italic">
                {positioningNote}
              </p>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
