import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, MapPinIcon, CheckIcon, StarIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { JsonLd, reviewListSchema } from "@/lib/schema";
import { cities } from "@/data/cities";
import { realizations } from "@/data/realizations";
import type { Realization, Testimonial } from "@/lib/types";

/**
 * ProofSystem — a single, unified proof section for the homepage.
 *
 * Replaces the previous three stacked sections (TerrainStrip,
 * RealizationGrid, TestimonialBlock) with a single editorial block
 * carrying one H2, one section padding wrapper, one background colour,
 * and three sub-bands of internal hierarchy:
 *
 *   1. Strip — silent visual proof (6 chantier photos with city overlay)
 *   2. Featured — 3 hand-picked projects with key metrics
 *   3. Reviews — Google rating badge + 2 inline testimonials
 *
 * The component pulls realizations from the dataset and accepts a small
 * testimonials slice from the caller (so the homepage stays in control
 * of which voices it surfaces).
 */

interface ProofSystemProps {
  testimonials: Testimonial[];
  /** Slugs of the 3 featured projects, in display order. */
  featuredSlugs?: string[];
  /** Optional override of the H2 / intro. */
  title?: string;
  intro?: string;
}

const DEFAULT_FEATURED: string[] = [
  "tournai-correction-installation-defaillante",
  "wavre-pv-premium-28-panneaux",
  "nivelles-pv-pme",
];

function formatCity(slug: string): string {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function getProvince(citySlug: string): string | undefined {
  return cities.find((c) => c.slug === citySlug)?.province;
}

function buildPrimaryLabel(r: Realization): string {
  const province = getProvince(r.city);
  if (r.kwc) {
    const head = `Installation ${r.kwc} kWc`;
    return province ? `${head} · ${province}` : head;
  }
  return province ? `${formatCity(r.city)} · ${province}` : formatCity(r.city);
}

function shortProblem(r: Realization): string | undefined {
  const text = r.caseStudy?.challenge;
  if (!text) return undefined;
  // Keep the first ~110 chars so each card sits at the same height.
  if (text.length <= 110) return text;
  const cut = text.slice(0, 110);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 60 ? lastSpace : 110)}…`;
}

export function ProofSystem({
  testimonials,
  featuredSlugs = DEFAULT_FEATURED,
  title = "La preuve, sur le terrain",
  intro = "Chantiers récents, projets phares, avis vérifiés. Trois échelles de preuve, regroupées au même endroit pour éviter d'avoir à chercher.",
}: ProofSystemProps) {
  // Strip: 6 most recent realizations with at least one image.
  const stripItems = realizations
    .filter((r) => r.images.length > 0)
    .slice(0, 6);

  // Featured: pull the requested slugs in order, drop any missing.
  const featured = featuredSlugs
    .map((slug) => realizations.find((r) => r.slug === slug))
    .filter((r): r is Realization => Boolean(r));

  // Reviews: keep 2 voices for the inline strip.
  const reviewItems = testimonials.slice(0, 2);

  const reviewSchema = reviewItems.length > 0
    ? reviewListSchema(
        reviewItems.map((t) => ({
          author: t.name,
          rating: t.rating,
          body: t.quote,
          locality: t.city,
        })),
      )
    : null;

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="proof-system-heading"
    >
      {reviewSchema && <JsonLd data={reviewSchema} />}
      <div className="container-be">
        {/* Single header for the whole proof block */}
        <SectionLabel>Preuve terrain</SectionLabel>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end">
          <h2
            id="proof-system-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]"
          >
            {title}
          </h2>
          <p className="text-charcoal/85 text-[15px] leading-relaxed max-w-prose">
            {intro}
          </p>
        </div>

        {/* SUB-BAND 1 — Strip of recent chantiers (no h2 — small eyebrow only) */}
        {stripItems.length > 0 && (
          <div className="mt-12 md:mt-14">
            <div className="flex items-end justify-between gap-4 mb-4 md:mb-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-amber-dark">
                Chantiers récents
              </p>
              <Link
                href="/realisations/"
                className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-semibold text-midnight/80 hover:text-midnight transition-colors"
              >
                Toutes les réalisations
                <ArrowRightIcon size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {stripItems.map((r) => (
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
                    sizes="(max-width: 768px) 33vw, 16vw"
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
          </div>
        )}

        {/* SUB-BAND 2 — 3 featured projects with key metrics */}
        {featured.length > 0 && (
          <div className="mt-14 md:mt-16">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-4 md:mb-6">
              Projets phares
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((r) => {
                const isCorrection = r.category === "correction";
                const problem = shortProblem(r);
                return (
                  <Link
                    key={r.slug}
                    href={`/realisations/${r.slug}/`}
                    className="group relative bg-ivory border border-cloud rounded-2xl overflow-hidden flex flex-col hover:border-amber/40 hover:shadow-md transition-all"
                  >
                    <div className="relative aspect-[16/10] bg-midnight/5 overflow-hidden">
                      {r.images[0] ? (
                        <Image
                          src={r.images[0]}
                          alt={r.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <Image
                          src="/img/misc/realisation-hero.jpg"
                          alt="Chantier Be'energies"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      {isCorrection && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-danger text-white text-[10.5px] font-semibold tracking-[0.08em] uppercase px-2 py-1 shadow-sm">
                          Correction
                        </span>
                      )}
                    </div>
                    <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark">
                        {buildPrimaryLabel(r)}
                      </p>
                      <h3 className="text-[15.5px] md:text-base font-semibold text-midnight leading-snug">
                        {r.title}
                      </h3>
                      {problem && (
                        <p className="text-[13px] text-charcoal/80 leading-relaxed">
                          {problem}
                        </p>
                      )}
                      {r.keyResult && (
                        <p className="mt-auto inline-flex items-start gap-1.5 text-[13px] font-semibold text-success">
                          <CheckIcon
                            size={13}
                            className="shrink-0 mt-0.5"
                          />
                          {r.keyResult}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* SUB-BAND 3 — Google + 2 inline reviews */}
        {reviewItems.length > 0 && (
          <div className="mt-14 md:mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4 md:mb-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-amber-dark">
                Avis vérifiés
              </p>
              <GoogleReviewsBadge variant="inline" className="shrink-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {reviewItems.map((t, idx) => (
                <figure
                  key={`${t.name}-${idx}`}
                  className="bg-ivory border border-cloud rounded-2xl p-5 md:p-6"
                >
                  <div className="flex items-center gap-0.5 mb-3" aria-label={`Note ${t.rating} sur 5`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <StarIcon key={i} size={14} className="text-amber" />
                    ))}
                  </div>
                  <blockquote className="text-[14px] text-charcoal leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2 text-[12.5px] text-steel">
                    <span className="font-semibold text-midnight">{t.name}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon size={11} />
                      {t.city}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
