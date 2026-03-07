import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";

interface CTADiagnosticProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "dark";
}

export function CTADiagnostic({
  title = "Diagnostic energetique gratuit",
  description = "Benoit analyse votre consommation, votre toiture, et votre reseau electrique. Vous recevez un calcul de rentabilite reel base sur les tarifs 2026.",
  ctaLabel = "Demander mon diagnostic gratuit",
  ctaHref = "/contact/",
  variant = "default",
}: CTADiagnosticProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding relative overflow-hidden ${
        isDark ? "bg-midnight" : "bg-amber/5 border-y border-amber/20"
      }`}
    >
      {isDark && <div className="absolute inset-0 hatch-pattern" />}
      <div className="relative z-10 container-be text-center max-w-2xl mx-auto">
        {isDark && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-amber/30 bg-amber/5 mb-6">
            <span className="text-[10px] font-[family-name:var(--font-data)] tracking-[0.2em] text-amber uppercase">
              Gratuit &middot; Sans engagement
            </span>
          </div>
        )}
        <h2
          className={`text-2xl md:text-3xl font-[family-name:var(--font-heading)] ${
            isDark ? "text-white" : "text-midnight"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 leading-relaxed ${
            isDark ? "text-silver" : "text-charcoal"
          }`}
        >
          {description}
        </p>
        <Link
          href={ctaHref}
          className="cta-glow mt-8 inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          {ctaLabel}
          <ArrowRightIcon size={18} />
        </Link>
      </div>
    </section>
  );
}
