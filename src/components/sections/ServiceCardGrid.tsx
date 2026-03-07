import Link from "next/link";
import { services } from "@/data/services";
import { getServiceIcon, ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Locale } from "@/lib/types";

interface ServiceCardGridProps {
  locale?: Locale;
}

export function ServiceCardGrid({ locale = "fr" }: ServiceCardGridProps) {
  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>
          {locale === "fr" ? "Nos expertises" : "Onze expertises"}
        </SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
          {locale === "fr" ? "Nos services" : "Onze diensten"}
        </h2>
        <p className="mt-3 text-steel max-w-xl mb-10">
          {locale === "fr"
            ? "Un seul interlocuteur pour l'ensemble de votre systeme energetique."
            : "Een aanspreekpunt voor uw volledige energiesysteem."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            const href =
              locale === "fr"
                ? `/services/${service.slug}/`
                : `/nl/diensten/${service.slugNl}/`;
            const title = locale === "fr" ? service.title : service.titleNl;
            const description =
              locale === "fr"
                ? service.shortDescription
                : service.shortDescriptionNl;

            return (
              <Link
                key={service.slug}
                href={href}
                className={`group relative bg-white border border-cloud rounded-xl p-6 card-lift hover:border-amber/30 animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-midnight text-amber">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-[family-name:var(--font-data)] text-steel tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-midnight group-hover:text-amber-dark transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  {locale === "fr" ? "En savoir plus" : "Meer info"}
                  <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
