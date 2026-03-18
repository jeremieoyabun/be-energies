import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Realization } from "@/lib/types";

interface RealizationGridProps {
  realizations: Realization[];
  maxItems?: number;
  showViewAll?: boolean;
  featured?: boolean;
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
              <div className="inline-flex self-start px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber/10 text-amber-dark tracking-wider uppercase mb-3">
                {featuredItem.service}
              </div>
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight group-hover:text-amber-dark transition-colors">
                {featuredItem.title}
              </h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-steel">
                <MapPinIcon size={12} />
                {featuredItem.city}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                {featuredItem.kwc && (
                  <span className="stat-value font-bold text-midnight">{featuredItem.kwc} <span className="text-steel font-normal">kWc</span></span>
                )}
                {featuredItem.panelCount && (
                  <span className="stat-value font-bold text-midnight">{featuredItem.panelCount} <span className="text-steel font-normal">panneaux</span></span>
                )}
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridItems.map((r) => (
            <Link
              key={r.slug}
              href={`/realisations/${r.slug}/`}
              className="group card overflow-hidden"
            >
              <div className="aspect-[4/3] bg-ivory relative overflow-hidden">
                <Image
                  src={r.images[0] ?? "/img/misc/realisation-hero.jpg"}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-midnight tracking-wider uppercase backdrop-blur-sm">
                  {r.service}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[11px] text-steel font-medium uppercase tracking-wider mb-1.5">
                  <MapPinIcon size={11} />
                  {r.city}
                </div>
                <h3 className="text-base font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-snug">
                  {r.title}
                </h3>
                {(r.kwc || r.panelCount) && (
                  <div className="mt-2 flex items-center gap-3 text-xs text-steel">
                    {r.kwc && <span className="stat-value font-semibold text-charcoal">{r.kwc} kWc</span>}
                    {r.panelCount && <span className="stat-value font-semibold text-charcoal">{r.panelCount} panneaux</span>}
                  </div>
                )}
              </div>
            </Link>
          ))}
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
