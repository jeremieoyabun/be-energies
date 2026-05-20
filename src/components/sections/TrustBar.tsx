import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

interface TrustBarProps {
  citySpecificStat?: string;
}

interface BarStat {
  value: string;
  label: string;
  isHighlight: boolean;
}

/**
 * Only emit a quantified stat when explicitly verified in siteConfig.
 * Otherwise fall back to a qualitative claim that doesn't expose us to a
 * false-advertising risk.
 */
export function TrustBar({ citySpecificStat }: TrustBarProps) {
  const { installations, yearsExperience, paybackYears } = siteConfig.stats;

  const stats: BarStat[] = [];

  if (installations.verified) {
    stats.push({
      value: `${installations.value}+`,
      label: "installations résidentielles & PME",
      isHighlight: true,
    });
  } else {
    stats.push({
      value: "Wallonie, Flandre & Luxembourg",
      label: "installations résidentielles & PME",
      isHighlight: true,
    });
  }

  if (yearsExperience.verified) {
    stats.push({
      value: `${yearsExperience.value} ans`,
      label: "d'expérience terrain",
      isHighlight: false,
    });
  } else {
    stats.push({
      value: "Inspection",
      label: "expérience d'ancien inspecteur",
      isHighlight: false,
    });
  }

  if (paybackYears.verified) {
    stats.push({
      value: `${paybackYears.value} ans`,
      label: "retour photovoltaïque estimé",
      isHighlight: false,
    });
  }

  return (
    <section className="relative bg-midnight border-b border-charcoal">
      <div className="container-be py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          {/* RESCERT certification — large and prominent */}
          <div className="flex items-center gap-5 shrink-0">
            <Image
              src="/img/branding/certificat-rescert.png"
              alt="Certification RESCERT — Renewable Energy Systems — Numéro 07717"
              width={360}
              height={180}
              className="h-auto w-[200px] object-contain"
            />
            <div className="hidden sm:block text-sm border-l border-charcoal pl-5">
              <span className="text-white font-semibold">{siteConfig.founder.name}</span>
              <p className="text-silver/80 text-[13px]">Ancien inspecteur · Installateur agréé</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`stat-value text-lg font-bold ${
                    stat.isHighlight ? "text-amber" : "text-white"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] text-silver/70 tracking-wide uppercase">
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
