import { siteConfig } from "@/lib/site-config";

interface DataSourcesProps {
  /**
   * Customise the source line on a per-page basis. Default lists CWaPE,
   * Wallonia GRDs and energy suppliers — the institutional reference for any
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
}

export function DataSources({
  sources = "CWaPE, GRD wallons, fournisseurs d'énergie",
  updatedAt = siteConfig.dataAsOf,
  className = "",
  variant = "light",
}: DataSourcesProps) {
  const isDark = variant === "dark";
  return (
    <aside
      className={`mt-8 text-[12px] leading-relaxed rounded-lg border px-4 py-3 text-left ${
        isDark
          ? "bg-white/[0.04] border-white/10 text-silver/80"
          : "bg-ivory border-cloud text-steel"
      } ${className}`}
    >
      <p className="m-0 text-left">
        <strong
          className={`font-semibold ${isDark ? "text-white" : "text-midnight"}`}
        >
          Sources :
        </strong>{" "}
        {sources}. Données à vérifier selon votre commune, votre GRD et votre
        profil de consommation.
      </p>
      <p
        className={`m-0 mt-1 text-[11px] uppercase tracking-[0.08em] text-left ${
          isDark ? "text-silver/60" : "text-steel/80"
        }`}
      >
        Dernière mise à jour : {updatedAt}
      </p>
    </aside>
  );
}
