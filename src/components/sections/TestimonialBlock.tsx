import { StarIcon, MapPinIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { JsonLd, reviewListSchema } from "@/lib/schema";
import { testimonials as ALL_TESTIMONIALS } from "@/data/testimonials";
import { cities } from "@/data/cities";
import type { Testimonial } from "@/lib/types";

interface TestimonialBlockFallbackContext {
  /** City slug currently being rendered (used only to filter the fallback
   *  pool - we don't try to re-derive city-level testimonials from it). */
  citySlug?: string;
  /** Province name as stored on the City record (e.g. "Liege", "Hainaut",
   *  "Bruxelles-Capitale"). Used for the first fallback tier. */
  provinceName?: string;
  /** Service slug for the second fallback tier. */
  serviceSlug?: string;
}

interface TestimonialBlockProps {
  testimonials: Testimonial[];
  title?: string;
  /** Optional context the block uses when `testimonials` is empty, so a
   *  local/service page can fall back to province- or service-level proof
   *  instead of rendering nothing. Old callers can omit this. */
  fallbackContext?: TestimonialBlockFallbackContext;
}

// Human-readable label per service slug.
const SERVICE_LABEL: Record<string, string> = {
  "panneaux-photovoltaiques": "Panneaux solaires",
  "batteries-domestiques": "Batterie domestique",
  "bornes-de-recharge": "Borne de recharge",
  "conformite-electrique": "Conformité électrique",
  "pompes-a-chaleur": "Pompe à chaleur",
  "nettoyage-toiture": "Nettoyage toiture",
};

/** Normalize a city display name (potentially accented) to the slug shape
 *  used by `City.slug` - lower-case, accent-stripped, space → dash. */
function normalizeCityToSlug(cityName: string): string {
  return cityName
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

/** Resolve the province for a testimonial by matching its `city` field
 *  against the cities dataset. Returns undefined when no city row matches. */
function provinceForTestimonial(t: Testimonial): string | undefined {
  const slug = normalizeCityToSlug(t.city);
  return cities.find((c) => c.slug === slug)?.province;
}

/** Build a graceful fallback pool when the caller's testimonials array is
 *  empty. Tries province first, then service. Returns an empty array (not
 *  undefined) when nothing relevant exists, so the caller can decide to
 *  render null. */
function resolveFallbackTestimonials(
  ctx: TestimonialBlockFallbackContext,
): { items: Testimonial[]; reason: "province" | "service" | null } {
  const { provinceName, serviceSlug, citySlug } = ctx;

  // Tier 1 - same province (excluding the current city to avoid pretending
  // a different-city testimonial actually belongs here).
  if (provinceName) {
    const provinceItems = ALL_TESTIMONIALS.filter((t) => {
      if (citySlug && normalizeCityToSlug(t.city) === citySlug) return false;
      return provinceForTestimonial(t) === provinceName;
    }).slice(0, 2);
    if (provinceItems.length > 0) {
      return { items: provinceItems, reason: "province" };
    }
  }

  // Tier 2 - same service, any location.
  if (serviceSlug) {
    const serviceItems = ALL_TESTIMONIALS.filter(
      (t) => t.service === serviceSlug,
    ).slice(0, 2);
    if (serviceItems.length > 0) {
      return { items: serviceItems, reason: "service" };
    }
  }

  return { items: [], reason: null };
}

export function TestimonialBlock({
  testimonials,
  title = "Ce que nos clients disent",
  fallbackContext,
}: TestimonialBlockProps) {
  // Fallback pipeline: when the caller didn't find any directly-relevant
  // testimonial, try province → service → nothing. When nothing is found,
  // render null so we don't leave a headed-but-empty section on the page.
  let displayedTestimonials = testimonials;
  let fallbackLabel: string | null = null;

  if (testimonials.length === 0) {
    if (!fallbackContext) {
      return null;
    }
    const { items, reason } = resolveFallbackTestimonials(fallbackContext);
    if (items.length === 0) {
      return null;
    }
    displayedTestimonials = items;
    if (reason === "province" && fallbackContext.provinceName) {
      fallbackLabel = `Témoignage en ${fallbackContext.provinceName}`;
    } else if (reason === "service" && fallbackContext.serviceSlug) {
      const svcLabel =
        SERVICE_LABEL[fallbackContext.serviceSlug] ??
        fallbackContext.serviceSlug;
      fallbackLabel = `Témoignage ${svcLabel}`;
    }
  }
  // Nothing to show after fallback either - hide the section entirely
  // rather than rendering a title with an empty grid below it.
  if (displayedTestimonials.length === 0) return null;

  // Schema: emit a Review object per testimonial so Google can surface
  // rich snippets alongside the aggregate rating. We use the actually
  // displayed list so fallback reviews are exposed to crawlers too.
  const schemaData = reviewListSchema(
    displayedTestimonials.map((t) => ({
      author: t.name,
      rating: t.rating,
      body: t.quote,
      locality: t.city,
    })),
  );

  return (
    <section className="section-padding bg-warm-gradient">
      <JsonLd data={schemaData} />

      <div className="container-be">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Témoignages vérifiés</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-balance max-w-2xl">
              {title}
            </h2>
            {fallbackLabel && (
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-steel">
                {fallbackLabel}
              </p>
            )}
          </div>
          {/* Surface the live Google rating alongside the testimonials */}
          <GoogleReviewsBadge variant="card" className="shrink-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((t, index) => (
            <blockquote key={index} className="card p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} size={14} className="text-amber" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal leading-relaxed text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Outcome badge - when a measurable result was reported */}
              {t.outcome && (
                <div className="mt-4 inline-flex self-start items-center gap-1.5 bg-success/12 text-[#047857] text-[12.5px] font-bold px-3 py-1.5 rounded-full border border-success/35">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t.outcome}
                </div>
              )}

              {/* Attribution */}
              <div className="mt-5 pt-4 border-t border-cloud flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-midnight text-amber flex items-center justify-center text-xs font-bold ring-2 ring-amber/15">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-midnight">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-steel flex items-center gap-1">
                      <MapPinIcon size={10} />
                      {t.city}
                    </p>
                  </div>
                </div>
                {t.service && (
                  <span className="text-[11px] font-bold text-amber-dark bg-amber/15 border border-amber/35 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {SERVICE_LABEL[t.service] ?? t.service}
                  </span>
                )}
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
