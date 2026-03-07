"use client";

import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <JsonLd data={faqSchema(items)} />
      <div className="container-be max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-10">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-cloud rounded-xl overflow-hidden"
              >
                <button
                  className="flex items-center justify-between w-full text-left p-5 hover:bg-ivory transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-midnight pr-4">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    size={18}
                    className={`shrink-0 text-steel transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed border-t border-cloud pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
