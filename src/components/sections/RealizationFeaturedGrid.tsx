import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ArrowRightIcon, CheckIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { cities } from "@/data/cities";
import type { Realization } from "@/lib/types";

interface RealizationFeaturedGridProps {
  realizations: Realization[];
  /** Slugs of the realisations to feature, in display order. */
  featuredSlugs: string[];
}

// Human-readable service labels - keep card chips clean (no raw slugs).
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

function getProvince(citySlug: string): string | undefined {
  return cities.find((c) => c.slug === citySlug)?.province;
}

function buildPrimaryLabel(r: Realization, serviceLabel: string): string {
  const province = getProvince(r.city);
  if (r.kwc) {
    const head = `Installation ${r.kwc} kWc`;
    return province ? `${head} · ${province}` : head;
  }
  if (province) return `${serviceLabel} · ${province}`;
  return serviceLabel || formatCity(r.city);
}

// Pull a short "problem solved" line from the case study challenge.
// We take the first sentence and truncate to ~140 chars to keep cards tidy.
function buildProblemSolved(r: Realization): string | null {
  const challenge = r.caseStudy?.challenge;
  if (!challenge) return null;
  const firstSentence = challenge.split(/(?<=[.!?])\s+/)[0] ?? challenge;
  const trimmed = firstSentence.trim();
  if (trimmed.length <= 140) return trimmed;
  return trimmed.slice(0, 137).trimEnd() + "…";
}

export function RealizationFeaturedGrid({
  realizations,
  featuredSlugs,
}: RealizationFeaturedGridProps) {
  // Resolve each slug, keeping the brief-defined order. Silently skip any
  // slug that no longer exists in the dataset so the page never breaks.
  const featured = featuredSlugs
    .map((slug) => realizations.find((r) => r.slug === slug))
    .filter((r): r is Realization => Boolean(r));

  if (featured.length === 0) return null;

  return (
    <section className="bg-warm-gradient py-14 md:py-20 border-t-[3px] border-t-amber/40 border-b border-cloud">
      <div className="container-be">
        <div className="max-w-2xl mb-10">
          <SectionLabel>Projets en vedette</SectionLabel>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
            Trois chantiers qui résument notre approche
          </h2>
          <p className="mt-4 text-charcoal/85 text-[15.5px] leading-relaxed">
            Une correction de chantier raté par un autre installateur, une
            installation premium dimensionnée au plus juste, et une PME
            équipée pour absorber sa consommation diurne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featured.map((r, idx) => {
            const categoryBadge = r.category ? CATEGORY_BADGE[r.category] : null;
            const problem = buildProblemSolved(r);
            const serviceLabel = SERVICE_LABEL[r.service] ?? r.service;
            return (
              <Link
                key={r.slug}
                href={`/realisations/${r.slug}/`}
                className={`group card reveal reveal-${idx + 1} overflow-hidden flex flex-col`}
              >
                <div className="aspect-[16/10] bg-ivory relative overflow-hidden">
                  <Image
                    src={r.images[0] ?? "/img/misc/realisation-hero.jpg"}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/45 via-midnight/5 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-start gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/95 text-midnight tracking-wider uppercase backdrop-blur-sm">
                      {serviceLabel}
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

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-[12.5px] md:text-[13px] text-amber-dark font-bold uppercase tracking-[0.1em] mb-2.5 font-[family-name:var(--font-mono)]">
                    <MapPinIcon size={13} />
                    {buildPrimaryLabel(r, serviceLabel)}
                  </div>
                  <h3 className="text-lg md:text-xl font-[family-name:var(--font-heading)] text-midnight group-hover:text-amber-dark transition-colors leading-snug text-balance">
                    {r.title}
                  </h3>

                  {problem && (
                    <p className="mt-3 text-sm text-charcoal leading-relaxed line-clamp-3">
                      {problem}
                    </p>
                  )}

                  {r.keyResult && (
                    <p className="mt-4 inline-flex items-start gap-2 text-[13.5px] font-semibold text-[#047857] bg-success/12 border border-success/35 rounded-xl px-3 py-2">
                      <CheckIcon size={14} className="shrink-0 mt-0.5" />
                      <span>{r.keyResult}</span>
                    </p>
                  )}

                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-dark group-hover:gap-2.5 transition-all">
                    Voir le projet
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
