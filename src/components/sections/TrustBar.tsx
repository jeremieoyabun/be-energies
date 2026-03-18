import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

interface TrustBarProps {
  citySpecificStat?: string;
}

export function TrustBar({ citySpecificStat }: TrustBarProps) {
  const stats = [
    {
      value: siteConfig.stats.installations + "+",
      label: "installations",
      isHighlight: true,
    },
    {
      value: siteConfig.stats.yearsExperience + " ans",
      label: "d'experience terrain",
      isHighlight: false,
    },
    {
      value: siteConfig.stats.paybackYears + " ans",
      label: "retour moyen",
      isHighlight: false,
    },
  ];

  return (
    <section className="relative bg-midnight border-b border-charcoal">
      <div className="container-be py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Credential */}
          <div className="flex items-center gap-3">
            <Image
              src="/RESCERT.png"
              alt="Certification RESCERT"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div className="text-sm">
              <span className="text-white font-medium">{siteConfig.founder.name}</span>
              <span className="text-silver"> · </span>
              <span className="text-silver text-[13px]">{siteConfig.founder.credential}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`stat-value text-lg font-bold ${stat.isHighlight ? "text-amber" : "text-white"}`}>
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
