import { glossary } from "@/lib/glossary";
import { Collapsible } from "@/components/Collapsible";

interface GlossaryInlineProps {
  /** Glossary keys to display, in order. */
  keys: string[];
  title?: string;
  locale?: "fr" | "nl";
}

const LABELS: Record<string, { fr: string; nl: string }> = {
  rescert: { fr: "RESCERT", nl: "RESCERT" },
  grd: { fr: "GRD", nl: "Netbeheerder (GRD)" },
  prosumer: { fr: "Tarif prosumer", nl: "Prosumertarief" },
  rgie: { fr: "RGIE", nl: "AREI" },
  impact: { fr: "Tarif IMPACT", nl: "IMPACT-tarief" },
  cwape: { fr: "CWaPE", nl: "CWaPE" },
  kwc: { fr: "kWc", nl: "kWp" },
  kwh: { fr: "kWh", nl: "kWh" },
  onduleur: { fr: "Onduleur", nl: "Omvormer" },
  autoconsommation: { fr: "Autoconsommation", nl: "Zelfverbruik" },
};

const COPY = {
  fr: {
    defaultTitle: "Lexique rapide",
    eyebrow: "Jargon expliqué",
    suffix: "termes",
  },
  nl: {
    defaultTitle: "Snel woordenboek",
    eyebrow: "Jargon uitgelegd",
    suffix: "termen",
  },
} as const;

/**
 * Lexique block — surfaces the technical terms from /lib/glossary at the
 * bottom of long pages. Native <details> so it doesn't ship JS and stays
 * print/SEO-friendly (the content is still in the DOM).
 */
export function GlossaryInline({
  keys,
  title,
  locale = "fr",
}: GlossaryInlineProps) {
  const items = keys
    .map((k) => k.toLowerCase())
    .filter((k) => k in glossary);
  if (items.length === 0) return null;
  const t = COPY[locale];

  return (
    <Collapsible
      eyebrow={t.eyebrow}
      summary={`${title ?? t.defaultTitle} (${items.length} ${t.suffix})`}
      className="mt-10"
    >
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {items.map((k) => {
          const entry = glossary[k];
          const def = locale === "nl" ? (entry.fullNl ?? entry.full) : entry.full;
          const label = LABELS[k]?.[locale] ?? k;
          return (
            <div key={k}>
              <dt className="text-sm font-semibold text-midnight">{label}</dt>
              <dd className="mt-1 text-[13px] text-charcoal leading-relaxed">
                {def}
              </dd>
            </div>
          );
        })}
      </dl>
    </Collapsible>
  );
}
