import Link from "next/link";
import { visibleServices, services } from "@/data/services";
import { ServiceIcon, ArrowRightIcon, CheckIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Locale } from "@/lib/types";

interface ServiceCardGridProps {
  locale?: Locale;
}

const FEATURE_SLUG = "panneaux-photovoltaiques";

const FEATURE_BENEFITS: Record<Locale, string[]> = {
  fr: [
    "Dimensionnement basé sur votre consommation réelle",
    "Tarifs 2026 du GRD vérifiés ligne par ligne",
    "Retour estimé en 5 à 7 ans",
    "Conformité pensée dès la conception",
  ],
  nl: [
    "Dimensionering op basis van uw werkelijke verbruik",
    "Tarieven 2026 van de netbeheerder, lijn per lijn",
    "Geschatte terugverdientijd: 5 tot 7 jaar",
    "Conformiteit van bij het ontwerp",
  ],
};

export function ServiceCardGrid({ locale = "fr" }: ServiceCardGridProps) {
  const feature = services.find((s) => s.slug === FEATURE_SLUG);
  const others = visibleServices.filter((s) => s.slug !== FEATURE_SLUG);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <SectionLabel>
          {locale === "fr" ? "Nos expertises" : "Onze expertises"}
        </SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
          {locale === "fr"
            ? "Un interlocuteur, six expertises"
            : "Eén aanspreekpunt, zes expertises"}
        </h2>
        <p className="mt-3 text-steel max-w-xl mb-10">
          {locale === "fr"
            ? "Chaque installation est conçue pour la conformité, la performance et la durée. Le photovoltaïque reste notre cœur de métier — les autres services s'y greffent quand c'est pertinent."
            : "Elke installatie is ontworpen voor conformiteit, prestaties en duurzaamheid. Zonnepanelen blijven onze kernactiviteit; andere diensten worden toegevoegd wanneer dat zinvol is."}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured card — Panneaux photovoltaïques */}
          {feature && (
            <FeatureCard
              service={feature}
              locale={locale}
              benefits={FEATURE_BENEFITS[locale]}
            />
          )}

          {/* Other services in a tighter 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            {others.map((service, index) => (
              <CompactCard
                key={service.slug}
                service={service}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  service: (typeof services)[number];
  locale: Locale;
}

function FeatureCard({
  service,
  locale,
  benefits,
}: CardProps & { benefits: string[] }) {
  const href =
    locale === "fr"
      ? `/services/${service.slug}/`
      : `/nl/diensten/${service.slugNl}/`;
  const title = locale === "fr" ? service.title : service.titleNl;

  return (
    <Link
      href={href}
      className="group relative card p-7 md:p-8 flex flex-col bg-midnight text-white overflow-hidden hover:bg-deep transition-colors animate-fade-in-up"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 -right-20 w-80 h-80 -translate-y-1/2 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, var(--brand-amber) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex items-center gap-3 mb-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber text-midnight shrink-0">
          <ServiceIcon name={service.icon} size={24} />
        </div>
        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-light">
          {locale === "fr" ? "Cœur de métier" : "Kernactiviteit"}
        </span>
      </div>

      <h3 className="relative text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white leading-tight">
        {title}
      </h3>

      <p className="relative mt-3 text-[15px] text-white/90 leading-relaxed">
        {locale === "fr"
          ? "Conception, dimensionnement et installation par un ancien inspecteur certifié RESCERT. Le calcul de rentabilité est basé sur votre consommation réelle, pas sur un modèle générique."
          : "Ontwerp, dimensionering en installatie door een voormalig inspecteur, RESCERT-gecertificeerd. De rendabiliteitsberekening is gebaseerd op uw werkelijke verbruik, niet op een generiek model."}
      </p>

      <ul className="relative mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-1.5 text-[13px] text-white/90">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-1.5">
            <CheckIcon size={13} className="text-amber-light shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber group-hover:gap-3 transition-all">
        {locale === "fr" ? "Voir le service complet" : "Bekijk de volledige dienst"}
        <ArrowRightIcon size={16} />
      </span>
    </Link>
  );
}

function CompactCard({
  service,
  locale,
  index,
}: CardProps & { index: number }) {
  const href =
    locale === "fr"
      ? `/services/${service.slug}/`
      : `/nl/diensten/${service.slugNl}/`;
  const title = locale === "fr" ? service.title : service.titleNl;
  const description =
    locale === "fr" ? service.shortDescription : service.shortDescriptionNl;

  return (
    <Link
      href={href}
      className={`group card p-5 flex flex-col animate-fade-in-up stagger-${
        index + 1
      } hover:border-amber/40`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-midnight text-amber">
          <ServiceIcon name={service.icon} size={20} />
        </div>
        <ArrowRightIcon
          size={15}
          className="text-cloud group-hover:text-amber transition-colors group-hover:translate-x-1 transform duration-300"
        />
      </div>
      <h3 className="text-[15px] font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-[13px] text-steel leading-snug line-clamp-3 flex-1">
        {description}
      </p>
    </Link>
  );
}
