import { siteConfig } from "@/lib/site-config";

interface DataSourcesProps {
  /**
   * Customise the source line on a per-page basis. Default lists CWaPE,
   * Wallonia GRDs and energy suppliers - the institutional reference for any
   * tariff / prosumer / injection claim.
   */
  sources?: string;
  /**
   * "Dernière mise à jour" override. Defaults to siteConfig.dataAsOf so we
   * can bump every chiffrée block at once.
   */
  updatedAt?: string;
  className?: string;
  variant?: "light" | "dark";
  locale?: "fr" | "nl";
}

const COPY = {
  fr: {
    defaultSources: "CWaPE, GRD wallons, fournisseurs d'énergie",
    sourcesLabel: "Sources :",
    disclaimer:
      "Données à vérifier selon votre commune, votre GRD et votre profil de consommation.",
    updatedLabel: "Dernière mise à jour :",
    trigger: "Sources et méthode",
  },
  nl: {
    defaultSources: "CWaPE, Waalse netbeheerders, energieleveranciers",
    sourcesLabel: "Bronnen:",
    disclaimer:
      "Gegevens te verifiëren naargelang uw gemeente, uw netbeheerder en uw verbruiksprofiel.",
    updatedLabel: "Laatst bijgewerkt:",
    trigger: "Bronnen en methode",
  },
} as const;

export function DataSources({
  sources,
  updatedAt = siteConfig.dataAsOf,
  className = "",
  variant = "light",
  locale = "fr",
}: DataSourcesProps) {
  const isDark = variant === "dark";
  const t = COPY[locale];
  const sourcesLine = sources ?? t.defaultSources;

  const summaryColor = isDark
    ? "text-white/70 hover:text-white"
    : "text-steel hover:text-charcoal";
  const bodyColor = isDark ? "text-white/85" : "text-steel/85";
  const strongColor = isDark ? "text-white" : "text-midnight";
  const updatedColor = isDark ? "text-white/60" : "text-steel/70";

  return (
    <details className={`group mt-6 text-left ${className}`}>
      <summary
        className={`inline-flex items-center gap-1.5 text-xs cursor-pointer list-none select-none transition-colors ${summaryColor}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="6.5" />
          <line x1="8" y1="7" x2="8" y2="11" />
          <circle cx="8" cy="4.75" r="0.5" fill="currentColor" stroke="none" />
        </svg>
        <span>{t.trigger}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          width="10"
          height="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-open:rotate-180"
        >
          <polyline points="3,4.5 6,7.5 9,4.5" />
        </svg>
      </summary>
      <div className={`mt-3 text-xs leading-relaxed ${bodyColor}`}>
        <p className="m-0">
          <strong className={`font-semibold ${strongColor}`}>
            {t.sourcesLabel}
          </strong>{" "}
          {sourcesLine}. {t.disclaimer}
        </p>
        <p
          className={`m-0 mt-1 text-[11px] uppercase tracking-[0.08em] ${updatedColor}`}
        >
          {t.updatedLabel} {updatedAt}
        </p>
      </div>
    </details>
  );
}
