import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ArrowRightIcon, CheckIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Realization } from "@/lib/types";

interface RealizationGridProps {
  realizations: Realization[];
  maxItems?: number;
  showViewAll?: boolean;
  featured?: boolean;
}

// Human-readable service labels — keep card chips clean (no raw slugs).
const SERVICE_LABEL: Record<string, string> = {
  "panneaux-photovoltaiques": "Panneaux solaires",
  "batteries-domestiques": "Batterie",
  "bornes-de-recharge": "Borne de recharge",
  "conformite-electrique": "Conformité",
  "pompes-a-chaleur": "Pompe à chaleur",
};

const CATEGORY_BADGE: Record<
  NonNullable<Realization["category"]>,
  { label: string; classes: string } | null
> = {
  standard: null,
  premium: {
    label: "Installation premium",
    classes: "bg-amber/15 text-amber-dark border border-amber/25",
  },
  correction: {
    // Most strategic badge per the brief: signals Be'energies is the team
    // that gets called in when another installer has failed.
    label: "Correction d'installation",
    classes: "bg-danger/10 text-danger border border-danger/25",
  },
  renovation: {
    label: "Rénovation",
    classes: "bg-cyan/10 text-cyan-dark border border-cyan/25",
  },
};

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

export function RealizationGrid({
  realizations,
  maxItems,
  showViewAll = false,
  featured = false,
}: RealizationGridProps) {
  const items = maxItems ? realizations.slice(0, maxItems) : realizations;
  const featuredItem = featured && items.length > 0 ? items[0] : null;
  const gridItems = featured && items.length > 1 ? items.slice(1) : items;

  return (
    <section className="section-padding">
      <div className="container-be">
        <div className="flex items-end justify-between mb-10">
          <div>
            <SectionLabel>Réalisations</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-balance">
              Projets vérifiés, documentés
            </h2>
            <p className="mt-2 text-steel text-sm">
              Chaque chantier est conçu pour passer le contrôle du premier coup.
            </p>
          </div>
          {showViewAll && (
            <Link
              href="/realisations/"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-amber-dark hover:text-amber transition-colors whitespace-nowrap"
            >
              Voir tout
              <ArrowRightIcon size={14} />
            </Link>
          )}
        </div>

        {/* Featured project */}
        {featuredItem && (
          <Link
            href={`/realisations/${featuredItem.slug}/`}
            className="group card overflow-hidden mb-6 grid md:grid-cols-2"
          >
            <div className="aspect-[16/10] md:aspect-auto relative overflow-hidden">
              <Image
                src={featuredItem.images[0] ?? "/img/misc/realisation-hero.jpg"}
                alt={featuredItem.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber/10 text-amber-dark tracking-wider uppercase">
                  {SERVICE_LABEL[featuredItem.service] ?? featuredItem.service}
                </span>
                {featuredItem.category &&
                  CATEGORY_BADGE[featuredItem.category] && (
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${CATEGORY_BADGE[featuredItem.category]!.classes}`}
                    >
                      {CATEGORY_BADGE[featuredItem.category]!.label}
                    </span>
                  )}
              </div>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight group-hover:text-amber-dark transition-colors">
                {featuredItem.title}
              </h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-steel">
                <MapPinIcon size={12} />
                {formatCity(featuredItem.city)}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                {featuredItem.kwc && (
                  <span className="stat-value font-bold text-midnight">
                    {featuredItem.kwc}{" "}
                    <span className="text-steel font-normal">kWc</span>
                  </span>
                )}
                {featuredItem.panelCount && (
                  <span className="stat-value font-bold text-midnight">
                    {featuredItem.panelCount}{" "}
                    <span className="text-steel font-normal">panneaux</span>
                  </span>
                )}
              </div>
              {featuredItem.keyResult && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-success bg-success/8 border border-success/15 rounded-full px-3 py-1.5 self-start">
                  <CheckIcon size={13} className="shrink-0" />
                  {featuredItem.keyResult}
                </p>
              )}
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridItems.map((r) => {
            const categoryBadge = r.category ? CATEGORY_BADGE[r.category] : null;
            return (
              <Link
                key={r.slug}
                href={`/realisations/${r.slug}/`}
                className="group card overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-ivory relative overflow-hidden">
                  <Image
                    src={r.images[0] ?? "/img/misc/realisation-hero.jpg"}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-start gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/95 text-midnight tracking-wider uppercase backdrop-blur-sm">
                      {SERVICE_LABEL[r.service] ?? r.service}
                    </span>
                    {categoryBadge && (
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm ${categoryBadge.classes}`}
                      >
                        {categoryBadge.label}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-steel font-medium uppercase tracking-wider mb-1.5">
                    <MapPinIcon size={11} />
                    {formatCity(r.city)}
                  </div>
                  <h3 className="text-base font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-snug">
                    {r.title}
                  </h3>
                  {(r.kwc || r.panelCount) && (
                    <div className="mt-2 flex items-center gap-3 text-xs text-steel">
                      {r.kwc && (
                        <span className="stat-value font-semibold text-charcoal">
                          {r.kwc} kWc
                        </span>
                      )}
                      {r.panelCount && (
                        <span className="stat-value font-semibold text-charcoal">
                          {r.panelCount} panneaux
                        </span>
                      )}
                    </div>
                  )}
                  {r.keyResult && (
                    <p className="mt-auto pt-4 text-[12.5px] font-semibold text-success flex items-start gap-1.5">
                      <CheckIcon size={12} className="shrink-0 mt-0.5" />
                      {r.keyResult}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/realisations/"
              className="inline-flex items-center gap-2 text-amber-dark hover:text-amber font-semibold transition-colors"
            >
              Voir toutes nos réalisations
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
