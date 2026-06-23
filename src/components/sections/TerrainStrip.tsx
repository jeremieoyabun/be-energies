import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { realizations } from "@/data/realizations";

// Pretty-print a city slug. Kept local so this component stays independent
// of RealizationGrid's internal helpers.
function formatCity(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

// Server component: a quiet visual strip that sits ABOVE the RealizationGrid
// on the homepage. No text inside the photos beyond a city overlay -- the
// strip exists to give the visitor instant proof of field activity at a
// glance, before they read the curated featured project below.
export function TerrainStrip() {
  // First 6 realizations that actually carry at least one image. We skip
  // the ones with an empty images array so we never render placeholders.
  const items = realizations
    .filter((r) => r.images.length > 0)
    .slice(0, 6);

  if (items.length === 0) return null;

  return (
    <section className="section-padding-sm bg-ivory">
      <div className="container-be">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <SectionLabel>Sur le terrain</SectionLabel>
            <p className="mt-2 text-sm md:text-base text-steel">
              Quelques chantiers récents
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((r) => (
            <Link
              key={r.slug}
              href={`/realisations/${r.slug}/`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-midnight/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              aria-label={`Voir la réalisation : ${r.title}`}
            >
              <Image
                src={r.images[0]}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-midnight/75 via-midnight/25 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <span className="absolute bottom-2 left-2 text-[11px] md:text-xs font-semibold text-white/95 tracking-wide drop-shadow-sm">
                {formatCity(r.city)}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 md:mt-6 flex justify-end">
          <Link
            href="/realisations/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-dark hover:text-amber transition-colors"
          >
            Voir toutes les réalisations
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
