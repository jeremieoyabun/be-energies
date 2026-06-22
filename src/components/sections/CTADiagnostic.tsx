import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";

interface CTADiagnosticProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "default" | "dark";
  locale?: "fr" | "nl";
}

const DEFAULTS = {
  fr: {
    title: "Diagnostic énergétique gratuit",
    description:
      "Benoît analyse votre consommation, votre toiture, et votre réseau électrique. Vous recevez un calcul de rentabilité réel basé sur les tarifs 2026.",
    ctaLabel: "Demander mon diagnostic gratuit",
    ctaHref: "/contact/",
    badge: "Gratuit · Sans engagement",
    micro1: "Réponse sous 24 h",
    micro2: "Visite gratuite",
    micro3: "Devis sous 48 h",
  },
  nl: {
    title: "Gratis energiediagnose",
    description:
      "Benoît analyseert uw verbruik, uw dak en uw elektrische installatie. U ontvangt een realistische rendabiliteitsberekening op basis van de tarieven 2026.",
    ctaLabel: "Vraag mijn gratis diagnose aan",
    ctaHref: "/nl/contact/",
    badge: "Gratis · Vrijblijvend",
    micro1: "Antwoord binnen 24 u",
    micro2: "Gratis bezoek",
    micro3: "Offerte binnen 48 u",
  },
} as const;

export function CTADiagnostic({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "default",
  locale = "fr",
}: CTADiagnosticProps) {
  const d = DEFAULTS[locale];
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
              {d.badge}
            </span>
          </div>
        )}
        <h2
          className={`${isDark ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-[family-name:var(--font-heading)] text-balance ${
            isDark ? "text-white" : "text-midnight"
          }`}
        >
          {title ?? d.title}
        </h2>
        <p
          className={`mt-4 leading-relaxed text-[15px] ${
            isDark ? "text-white/90" : "text-charcoal"
          }`}
        >
          {description ?? d.description}
        </p>
        <Link
          href={ctaHref ?? d.ctaHref}
          className={`cta-glow mt-8 inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-10 py-4 rounded-xl transition-colors ${isDark ? "text-lg" : ""}`}
        >
          {ctaLabel ?? d.ctaLabel}
          <ArrowRightIcon size={18} />
        </Link>
        <div className={`mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm ${isDark ? "text-white/75" : "text-steel"}`}>
          <span>{d.micro1}</span>
          <span>{d.micro2}</span>
          <span>{d.micro3}</span>
        </div>
      </div>
    </section>
  );
}
