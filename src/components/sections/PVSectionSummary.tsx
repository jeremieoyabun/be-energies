import { CheckIcon } from "@/lib/icons";

/**
 * Server-side "En 30 secondes" recap module.
 *
 * Renders a compact 3-bullet summary at the top of a long-form PV section
 * so visitors can skim the key takeaways before reading the dense body.
 *
 * Pure server component, no JS shipped.
 */

interface PVSectionSummaryProps {
  bullets: string[];
}

export function PVSectionSummary({ bullets }: PVSectionSummaryProps) {
  return (
    <aside
      className="not-prose mb-8 rounded-2xl border border-cloud bg-ivory/70 p-5 md:p-6"
      aria-label="En 30 secondes"
    >
      <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
        En 30 secondes
      </p>
      <ul className="space-y-2.5">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-charcoal"
          >
            <CheckIcon size={15} className="text-success shrink-0 mt-1" />
            <span dangerouslySetInnerHTML={{ __html: bullet }} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
