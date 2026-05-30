import type { ReactNode } from "react";

interface CollapsibleProps {
  summary: string | ReactNode;
  /** Open by default? Default false. */
  defaultOpen?: boolean;
  /** Subtle eyebrow shown to the left of the summary. */
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Server-side native disclosure built on <details>/<summary>.
 * No JS, accessible by default, search-indexable (the content is in the
 * DOM even when collapsed), print-friendly (browsers force-open during
 * print). Use for optional / deep-dive content blocks.
 */
export function Collapsible({
  summary,
  defaultOpen = false,
  eyebrow,
  children,
  className = "",
}: CollapsibleProps) {
  return (
    <details
      className={`group rounded-2xl border border-cloud bg-white open:bg-ivory transition-colors ${className}`}
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="list-none cursor-pointer select-none flex items-start gap-3 p-5 md:p-6 hover:bg-ivory/60 transition-colors rounded-2xl">
        <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-amber/15 text-amber-dark inline-flex items-center justify-center transition-transform group-open:rotate-45">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
        <span className="flex-1">
          {eyebrow && (
            <span className="block text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-1">
              {eyebrow}
            </span>
          )}
          <span className="block font-semibold text-midnight text-[15px] leading-snug">
            {summary}
          </span>
        </span>
      </summary>
      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[3.25rem] md:pl-[3.75rem] -mt-1 text-[14.5px] text-charcoal leading-relaxed">
        {children}
      </div>
    </details>
  );
}
