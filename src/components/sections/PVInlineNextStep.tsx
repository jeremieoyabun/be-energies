import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";

/**
 * Server-side inline "next step" CTA, sized to slip in between two paragraphs
 * right after a natural decision point in the body (e.g. "vous avez déjà un
 * devis ?"). Not a big section CTA, just a single-row nudge.
 *
 * Pure server component, no JS shipped.
 */

interface PVInlineNextStepProps {
  prompt: string;
  label: string;
  href: string;
}

export function PVInlineNextStep({ prompt, label, href }: PVInlineNextStepProps) {
  return (
    <div className="not-prose mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-xl border border-cloud bg-white px-5 py-4">
      <p className="flex-1 text-[14px] leading-relaxed text-charcoal">
        {prompt}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 font-semibold text-[13.5px] text-midnight border-b border-amber/60 hover:border-amber pb-0.5 transition-colors whitespace-nowrap shrink-0"
      >
        {label}
        <ArrowRightIcon size={14} />
      </Link>
    </div>
  );
}
