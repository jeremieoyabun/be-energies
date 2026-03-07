import { siteConfig } from "@/lib/site-config";
import { CheckIcon, StarIcon } from "@/lib/icons";

interface TrustBarProps {
  citySpecificStat?: string;
}

export function TrustBar({ citySpecificStat }: TrustBarProps) {
  const stats = [
    {
      value: siteConfig.founder.credential,
      icon: <CheckIcon size={14} className="text-cyan" />,
      isData: false,
    },
    {
      value: `${siteConfig.stats.installations}+ installations`,
      icon: <CheckIcon size={14} className="text-cyan" />,
      isData: true,
    },
    {
      value: `${siteConfig.stats.yearsExperience} ans d'experience`,
      icon: <CheckIcon size={14} className="text-cyan" />,
      isData: true,
    },
    {
      value: `Retour en ${siteConfig.stats.paybackYears} ans`,
      icon: <CheckIcon size={14} className="text-cyan" />,
      isData: true,
    },
  ];

  if (citySpecificStat) {
    stats.push({
      value: citySpecificStat,
      icon: <StarIcon size={14} className="text-cyan" />,
      isData: false,
    });
  }

  return (
    <section className="bg-midnight">
      <div className="container-be py-5">
        <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-3 md:divide-x md:divide-charcoal">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex items-center gap-2 text-sm font-medium text-silver md:px-6 first:md:pl-0 last:md:pr-0"
            >
              {stat.icon}
              <span className={stat.isData ? "data-figure text-white" : ""}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
