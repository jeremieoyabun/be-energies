import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Realization } from "@/lib/types";

interface RealizationGridProps {
  realizations: Realization[];
  maxItems?: number;
  showViewAll?: boolean;
}

export function RealizationGrid({
  realizations,
  maxItems,
  showViewAll = false,
}: RealizationGridProps) {
  const items = maxItems ? realizations.slice(0, maxItems) : realizations;

  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Realisations</SectionLabel>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
            Projets verifies, documentes
          </h2>
          {showViewAll && (
            <Link
              href="/realisations/"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              Voir tout
              <ArrowRightIcon size={14} />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r) => (
            <Link
              key={r.slug}
              href={`/realisations/${r.slug}/`}
              className="group bg-white border border-cloud rounded-xl overflow-hidden card-lift hover:border-amber/30"
            >
              <div className="aspect-[16/10] bg-ivory relative overflow-hidden">
                <Image
                  src={r.images[0] ?? "/images/placeholder.webp"}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-[family-name:var(--font-data)] bg-white/90 text-midnight backdrop-blur tracking-wider">
                  {r.service}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-steel mb-1">
                  <MapPinIcon size={12} />
                  {r.city}
                </div>
                <h3 className="font-semibold text-midnight group-hover:text-amber-dark transition-colors">
                  {r.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-steel">
                  {r.kwc && <span className="data-figure">{r.kwc} kWc</span>}
                  {r.panelCount && <span className="data-figure">{r.panelCount} panneaux</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/realisations/"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-medium transition-colors"
            >
              Voir toutes nos realisations
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
