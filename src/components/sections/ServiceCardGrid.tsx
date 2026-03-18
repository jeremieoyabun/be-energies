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
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <SectionLabel>
          {locale === "fr" ? "Nos expertises" : "Onze expertises"}
        </SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
          {locale === "fr" ? "Un interlocuteur, six expertises" : "Eén aanspreekpunt, zes expertises"}
        </h2>
        <p className="mt-3 text-steel max-w-xl mb-10">
          {locale === "fr"
            ? "Chaque installation est conçue pour la conformité, la performance et la durée."
            : "Elke installatie is ontworpen voor conformiteit, prestaties en duurzaamheid."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className={`group card p-6 flex flex-col animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-midnight text-amber">
                    <Icon size={22} />
                  </div>
                  <ArrowRightIcon size={16} className="text-cloud group-hover:text-amber transition-colors group-hover:translate-x-1 transform duration-300" />
                </div>
                <h3 className="text-[17px] font-semibold text-midnight group-hover:text-amber-dark transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed flex-1">
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
