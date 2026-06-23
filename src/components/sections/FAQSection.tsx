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
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-10">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={index}
              name={groupName}
              className="group border border-cloud rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between w-full text-left p-5 hover:bg-ivory transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-midnight pr-4">
                  {item.question}
                </span>
                <ChevronDownIcon
                  size={18}
                  className="shrink-0 text-steel transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed border-t border-cloud pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
