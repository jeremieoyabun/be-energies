import { ArrowRightIcon } from "@/lib/icons";
import { LeadMagnetButton } from "./LeadMagnetButton";

type Variant = "compact" | "card" | "inline";
type Locale = "fr" | "nl";

interface PDFLeadMagnetCardProps {
  /**
   * Visual treatment.
   * - `card`    : full-width section card with eyebrow + heading + CTA
   * - `compact` : tighter sidebar / inline widget (no outer section padding)
   * - `inline`  : a self-contained narrow card that sits inside a parent
   *               section (no full section-padding wrapper).
   */
  variant?: Variant;
  locale?: Locale;
  className?: string;
  /** Optional path of the page rendering this card, for analytics. */
  sourcePage?: string;
}

const COPY = {
  fr: {
    eyebrow: "CHECKLIST GRATUITE",
    title: "Les 7 pièges à éviter avant de signer",
    subline: "Pour vérifier votre devis solaire en 5 minutes",
    cta: "Recevoir le guide PDF",
    micro: "PDF · 12 pages · Gratuit",
  },
  nl: {
    eyebrow: "GRATIS CHECKLIST",
    title: "De 10 valkuilen om te vermijden vóór u tekent",
    subline: "Om uw zonneoffert te controleren in 5 minuten",
    cta: "Ontvang de PDF",
    micro: "PDF · 12 pagina's · Gratis",
  },
} as const;

function DownloadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </svg>
  );
}

export function PDFLeadMagnetCard({
  variant = "card",
  locale = "fr",
  className = "",
  sourcePage,
}: PDFLeadMagnetCardProps) {
  const c = COPY[locale];

  // Inner card markup is shared. Only the outer wrapper changes per variant.
  const innerCard = (
    <div
      className={`relative overflow-hidden rounded-2xl border border-amber/25 bg-ivory p-6 md:p-7 ${
        variant === "compact" ? "md:p-6" : ""
      }`}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-2 w-2 rounded-full bg-amber"
            aria-hidden="true"
          />
          <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark">
            {c.eyebrow}
          </span>
        </div>

        <div>
          <h3
            className={`font-[family-name:var(--font-heading)] text-midnight leading-[1.15] text-balance ${
              variant === "compact"
                ? "text-[19px] md:text-xl"
                : "text-xl md:text-2xl"
            }`}
          >
            {c.title}
          </h3>
          <p
            className={`mt-2 text-charcoal leading-relaxed ${
              variant === "compact" ? "text-[13.5px]" : "text-sm md:text-[15px]"
            }`}
          >
            {c.subline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <LeadMagnetButton
            leadMagnetSlug="pieges-a-eviter"
            sourcePage={sourcePage}
            className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-5 py-3 rounded-xl transition-colors text-sm"
            ariaLabel={c.cta}
          >
            <DownloadIcon size={16} />
            <span>{c.cta}</span>
            <ArrowRightIcon size={14} className="hidden sm:inline" />
          </LeadMagnetButton>
          <span className="text-[12px] text-steel font-[family-name:var(--font-data)] tracking-wide">
            {c.micro}
          </span>
        </div>
      </div>
    </div>
  );

  if (variant === "compact" || variant === "inline") {
    return (
      <div
        className={`${variant === "inline" ? "max-w-2xl mx-auto" : ""} ${className}`}
      >
        {innerCard}
      </div>
    );
  }

  return (
    <section className={`section-padding bg-warm-gradient ${className}`}>
      <div className="container-be max-w-3xl">{innerCard}</div>
    </section>
  );
}
