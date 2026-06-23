import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

interface TrustBarProps {
  citySpecificStat?: string;
  locale?: "fr" | "nl";
}

interface BarStat {
  value: string;
  label: string;
  isHighlight: boolean;
}

const COPY = {
  fr: {
    installationsVerified: "installations résidentielles & PME",
    installationsCoverage: "Wallonie, Flandre & Luxembourg",
    installationsLabel: "installations résidentielles & PME",
    yearsLabelVerified: "d'expérience terrain",
    inspectionTitle: "Inspection",
    inspectionLabel: "expérience d'ancien inspecteur",
    paybackUnit: "ans",
    paybackLabel: "retour photovoltaïque estimé",
    roleLine: "Ancien inspecteur · Installateur agréé",
  },
  nl: {
    installationsVerified: "residentiële installaties & KMO",
    installationsCoverage: "Wallonië, Vlaanderen & Luxemburg",
    installationsLabel: "residentiële installaties & KMO",
    yearsLabelVerified: "praktijkervaring",
    inspectionTitle: "Inspectie",
    inspectionLabel: "ervaring als voormalig inspecteur",
    paybackUnit: "jaar",
    paybackLabel: "geschatte terugverdientijd zonnepanelen",
    roleLine: "Voormalig inspecteur · Erkend installateur",
  },
} as const;

/**
 * Only emit a quantified stat when explicitly verified in siteConfig.
 * Otherwise fall back to a qualitative claim that doesn't expose us to a
 * false-advertising risk.
 */
export function TrustBar({ citySpecificStat, locale = "fr" }: TrustBarProps) {
  const { installations, yearsExperience, paybackYears } = siteConfig.stats;
  const t = COPY[locale];

  const stats: BarStat[] = [];

  if (installations.verified) {
    stats.push({
      value: `${installations.value}+`,
      label: t.installationsVerified,
      isHighlight: true,
    });
  } else {
    stats.push({
      value: t.installationsCoverage,
      label: t.installationsLabel,
      isHighlight: true,
    });
  }

  if (yearsExperience.verified) {
    stats.push({
      value: `${yearsExperience.value} ${locale === "nl" ? "jaar" : "ans"}`,
      label: t.yearsLabelVerified,
      isHighlight: false,
    });
  } else {
    stats.push({
      value: t.inspectionTitle,
      label: t.inspectionLabel,
      isHighlight: false,
    });
  }

  if (paybackYears.verified) {
    stats.push({
      value: `${paybackYears.value} ${t.paybackUnit}`,
      label: t.paybackLabel,
      isHighlight: false,
    });
  }

  return (
    <section className="relative bg-midnight border-b border-charcoal">
      <div className="container-be py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          {/* RESCERT certification - large and prominent */}
          <div className="flex items-center gap-5 shrink-0">
            <Image
              src="/img/branding/certificat-rescert.png"
              alt="Certification RESCERT, Renewable Energy Systems, Numéro 07717"
              width={360}
              height={180}
              className="h-auto w-[200px] object-contain"
            />
            <div className="hidden sm:block text-sm border-l border-charcoal pl-5">
              <span className="text-white font-semibold">{siteConfig.founder.name}</span>
              <p className="text-white/85 text-[13px]">{t.roleLine}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center max-w-[180px]">
                <div
                  className={`stat-value text-base md:text-lg font-bold leading-tight ${
                    stat.isHighlight ? "text-amber" : "text-white"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[10.5px] text-white/80 tracking-wide uppercase leading-[1.35]">
                  {stat.label}
                </div>
              </div>
            ))}
            {citySpecificStat && (
              <div className="text-center">
                <div className="text-[11px] text-amber tracking-wide uppercase font-medium">
                  {citySpecificStat}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
