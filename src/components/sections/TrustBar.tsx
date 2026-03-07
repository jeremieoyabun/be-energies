import { siteConfig } from "@/lib/site-config";
import { CheckIcon, StarIcon } from "@/lib/icons";

interface TrustBarProps {
  citySpecificStat?: string;
}

export function TrustBar({ citySpecificStat }: TrustBarProps) {
  const stats = [
    {
      value: siteConfig.founder.credential,
      icon: <CheckIcon size={14} className="text-amber" />,
      isData: false,
    },
    {
      value: `${siteConfig.stats.installations}+ installations`,
      icon: <CheckIcon size={14} className="text-amber" />,
      isData: true,
    },
    {
      value: `${siteConfig.stats.yearsExperience} ans d'experience`,
      icon: <CheckIcon size={14} className="text-amber" />,
      isData: true,
    },
    {
      value: `Retour en ${siteConfig.stats.paybackYears} ans`,
      icon: <CheckIcon size={14} className="text-amber" />,
      isData: true,
    },
  ];

  if (citySpecificStat) {
    stats.push({
      value: citySpecificStat,
      icon: <StarIcon size={14} className="text-amber" />,
      isData: false,
    });
  }

  return (
    <section className="bg-ivory border-y border-cloud">
      <div className="container-be py-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex items-center gap-2 text-sm font-medium text-charcoal"
            >
              {stat.icon}
              <span className={stat.isData ? "data-figure" : ""}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
