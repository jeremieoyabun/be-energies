import { glossary } from "@/lib/glossary";
import { Collapsible } from "@/components/Collapsible";

interface GlossaryInlineProps {
  /** Glossary keys to display, in order. */
  keys: string[];
  title?: string;
}

const LABELS: Record<string, string> = {
  rescert: "RESCERT",
  grd: "GRD",
  prosumer: "Tarif prosumer",
  rgie: "RGIE",
  impact: "Tarif IMPACT",
  cwape: "CWaPE",
  kwc: "kWc",
  kwh: "kWh",
  onduleur: "Onduleur",
  autoconsommation: "Autoconsommation",
};

/**
 * Lexique block — surfaces the technical terms from /lib/glossary at the
 * bottom of long pages. Native <details> so it doesn't ship JS and stays
 * print/SEO-friendly (the content is still in the DOM).
 */
export function GlossaryInline({
  keys,
  title = "Lexique rapide",
}: GlossaryInlineProps) {
  const items = keys
    .map((k) => k.toLowerCase())
    .filter((k) => k in glossary);
  if (items.length === 0) return null;

  return (
    <Collapsible
      eyebrow="Jargon expliqué"
      summary={`${title} (${items.length} termes)`}
      className="mt-10"
    >
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {items.map((k) => {
          const entry = glossary[k];
          return (
            <div key={k}>
              <dt className="text-sm font-semibold text-midnight">
                {LABELS[k] ?? k}
              </dt>
              <dd className="mt-1 text-[13px] text-charcoal leading-relaxed">
                {entry.full}
              </dd>
            </div>
          );
        })}
      </dl>
    </Collapsible>
  );
}
