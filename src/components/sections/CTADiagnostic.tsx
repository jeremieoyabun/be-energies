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
  title = "Diagnostic énergétique gratuit",
  description = "Benoît analyse votre consommation, votre toiture, et votre réseau électrique. Vous recevez un calcul de rentabilité réel basé sur les tarifs 2026.",
  ctaLabel = "Demander mon diagnostic gratuit",
  ctaHref = "/contact/",
  variant = "default",
}: CTADiagnosticProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding-lg relative overflow-hidden ${
        isDark ? "bg-deep" : "bg-warm-gradient"
      }`}
    >
      {isDark && <div className="absolute inset-0 texture-dots" aria-hidden="true" />}
      <div className="relative z-10 container-be text-center max-w-2xl mx-auto">
        {isDark && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-6">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-amber-light uppercase">
              Gratuit · Sans engagement
            </span>
          </div>
        )}
        <h2
          className={`${isDark ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-[family-name:var(--font-heading)] text-balance ${
            isDark ? "text-white" : "text-midnight"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 leading-relaxed text-[15px] ${
            isDark ? "text-silver/90" : "text-charcoal"
          }`}
        >
          {description}
        </p>
        <Link
          href={ctaHref}
          className={`cta-glow mt-8 inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-10 py-4 rounded-xl transition-colors ${isDark ? "text-lg" : ""}`}
        >
          {ctaLabel}
          <ArrowRightIcon size={18} />
        </Link>
        <div className={`mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm ${isDark ? "text-silver/60" : "text-steel"}`}>
          <span>Réponse sous 24h</span>
          <span>Visite gratuite</span>
          <span>Devis sous 48h</span>
        </div>
      </div>
    </section>
  );
}
