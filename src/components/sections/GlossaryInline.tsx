import { glossary } from "@/lib/glossary";

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
 * bottom of long pages. Pure server component, no JS shipped.
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
    <aside className="mt-10 rounded-2xl border border-cloud bg-ivory p-6 md:p-7">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark">
          Jargon expliqué
        </span>
        <h3 className="text-base font-[family-name:var(--font-heading)] text-midnight">
          {title}
        </h3>
      </div>
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
    </aside>
  );
}
