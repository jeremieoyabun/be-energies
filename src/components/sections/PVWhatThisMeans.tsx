/**
 * Server-side "Pour vous, concrètement" callout.
 *
 * Amber-bordered translation of the technical content above into a
 * personal implication for the reader. Use sparingly: 1 per major
 * decision-relevant section.
 *
 * Pure server component, no JS shipped.
 */

interface PVWhatThisMeansProps {
  title?: string;
  children: React.ReactNode;
}

export function PVWhatThisMeans({
  title = "Pour vous, concrètement",
  children,
}: PVWhatThisMeansProps) {
  return (
    <aside
      className="not-prose mt-8 rounded-r-2xl border border-cloud border-l-4 border-l-amber bg-amber/[0.06] p-5 md:p-6"
      aria-label={title}
    >
      <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-2">
        {title}
      </p>
      <div className="text-[14.5px] leading-relaxed text-charcoal [&_strong]:text-midnight [&_strong]:font-semibold">
        {children}
      </div>
    </aside>
  );
}
