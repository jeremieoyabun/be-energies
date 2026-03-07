import Link from "next/link";
import { getServiceIcon, ArrowRightIcon } from "@/lib/icons";
import type { Service, Locale } from "@/lib/types";

interface RelatedServicesProps {
  services: Service[];
  locale?: Locale;
  title?: string;
}

export function RelatedServices({
  services,
  locale = "fr",
  title = "Services complementaires",
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            const href =
              locale === "fr"
                ? `/services/${service.slug}/`
                : `/nl/diensten/${service.slugNl}/`;
            return (
              <Link
                key={service.slug}
                href={href}
                className="group flex items-center gap-4 bg-white border border-cloud rounded-xl p-4 hover:border-amber hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber/10 text-amber shrink-0">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-midnight group-hover:text-amber-dark transition-colors truncate">
                    {locale === "fr" ? service.title : service.titleNl}
                  </h3>
                </div>
                <ArrowRightIcon
                  size={16}
                  className="text-steel group-hover:text-amber transition-colors shrink-0"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
