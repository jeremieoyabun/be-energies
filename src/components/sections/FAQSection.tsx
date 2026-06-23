import { useId } from "react";
import { ChevronDownIcon } from "@/lib/icons";
import { JsonLd, faqSchema } from "@/lib/schema";
import type { FAQItem } from "@/lib/types";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQSection({
  items,
  title = "Questions fréquentes",
}: FAQSectionProps) {
  // Stable group name so all <details> in this instance form one exclusive
  // accordion group natively (HTML 2024 `name` attribute on <details>).
  // Modern Chromium, Safari and Firefox 2024+ support it; in older browsers
  // the attribute is simply ignored and the FAQ falls back to multi-open,
  // which is still a perfectly fine UX for an FAQ.
  const groupName = `faq-${useId()}`;

  return (
    <section className="section-padding">
      <JsonLd data={faqSchema(items)} />
      <div className="container-be max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span
            aria-hidden="true"
            className="inline-block h-px w-6 bg-amber/60"
          />
          <span className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber-dark">
            FAQ
          </span>
          <span
            aria-hidden="true"
            className="inline-block h-px w-6 bg-amber/60"
          />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-center mb-10 leading-[1.1] text-balance">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={index}
              name={groupName}
              className="group bg-white border-[1.5px] border-midnight/10 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04)] open:border-amber/40 open:shadow-[0_6px_16px_-8px_rgba(245,158,11,0.25)] transition-all duration-200"
            >
              <summary className="flex items-center gap-4 w-full text-left p-5 md:p-6 hover:bg-ivory/60 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-amber/12 text-amber-dark text-[11.5px] font-bold tabular-nums ring-1 ring-amber/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-semibold text-midnight pr-4 text-[15px] md:text-[15.5px]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-ivory group-open:bg-amber/15 transition-colors"
                >
                  <ChevronDownIcon
                    size={18}
                    className="text-midnight/70 group-open:text-amber-dark transition-transform duration-200 group-open:rotate-180"
                  />
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-[14.5px] text-charcoal leading-relaxed border-t border-midnight/8 pt-5">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
