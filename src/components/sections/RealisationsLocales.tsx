import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, CheckIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { realizations } from "@/data/realizations";
import { cities } from "@/data/cities";
import type { Realization } from "@/lib/types";

interface RealisationsLocalesProps {
  citySlug: string;
  provinceName: string;
  serviceSlug?: string;
  maxItems?: number;
  locale?: "fr" | "nl";
}

// Human-readable service labels (FR + NL) - keep cards clean (no raw slugs).
const SERVICE_LABEL_FR: Record<string, string> = {
  "panneaux-photovoltaiques": "Panneaux solaires",
  "batteries-domestiques": "Batterie",
  "bornes-de-recharge": "Borne de recharge",
  "conformite-electrique": "Conformité",
  "pompes-a-chaleur": "Pompe à chaleur",
};

const SERVICE_LABEL_NL: Record<string, string> = {
  "panneaux-photovoltaiques": "Zonnepanelen",
  "batteries-domestiques": "Thuisbatterij",
  "bornes-de-recharge": "Laadpaal",
  "conformite-electrique": "Conformiteit",
  "pompes-a-chaleur": "Warmtepomp",
};

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function pickLocalRealizations(
  citySlug: string,
  provinceName: string,
  serviceSlug: string | undefined,
  maxItems: number,
): Realization[] {
  const picked: Realization[] = [];
  const seen = new Set<string>();

  const add = (list: Realization[]) => {
    for (const r of list) {
      if (picked.length >= maxItems) return;
      if (seen.has(r.slug)) continue;
      seen.add(r.slug);
      picked.push(r);
    }
  };

  // Pass 1 - same city + same service (if provided).
  if (serviceSlug) {
    add(
      realizations.filter(
        (r) => r.city === citySlug && r.service === serviceSlug,
      ),
    );
  }

  // Pass 2 - same city, any service.
  if (picked.length < maxItems) {
    add(realizations.filter((r) => r.city === citySlug));
  }

  // Pass 3 - same province (resolve via cities), any service.
  if (picked.length < maxItems) {
    const provinceCitySlugs = new Set(
      cities.filter((c) => c.province === provinceName).map((c) => c.slug),
    );
    add(realizations.filter((r) => provinceCitySlugs.has(r.city)));
  }

  return picked;
}

export function RealisationsLocales({
  citySlug,
  provinceName,
  serviceSlug,
  maxItems = 4,
  locale = "fr",
}: RealisationsLocalesProps) {
  const items = pickLocalRealizations(
    citySlug,
    provinceName,
    serviceSlug,
    maxItems,
  );

  if (items.length === 0) return null;

  const isNl = locale === "nl";
  const eyebrow = isNl
    ? "Realisaties in uw buurt"
    : "Réalisations près de chez vous";
  const heading = isNl
    ? `Wat we deden in ${provinceName}`
    : `Ce qu'on a fait dans ${provinceName}`;
  const serviceLabelMap = isNl ? SERVICE_LABEL_NL : SERVICE_LABEL_FR;

  // Tighter responsive grid: 2 cols on mobile breakpoint and up,
  // expanding to maxItems columns on large screens (capped at 4).
  const lgCols = Math.min(items.length, 4);
  const lgColClass =
    lgCols === 4
      ? "lg:grid-cols-4"
      : lgCols === 3
        ? "lg:grid-cols-3"
        : lgCols === 2
          ? "lg:grid-cols-2"
          : "lg:grid-cols-1";

  return (
    <section className="section-padding">
      <div className="container-be">
        <div className="mb-8">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-balance">
            {heading}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${lgColClass} gap-4`}
        >
          {items.map((r) => (
            <Link
              key={r.slug}
              href={`/realisations/${r.slug}/`}
              className="group rounded-2xl border border-cloud bg-white overflow-hidden flex flex-col hover:border-amber/40 hover:shadow-sm transition-all"
            >
              <div className="aspect-[4/3] bg-ivory relative overflow-hidden">
                <Image
                  src={r.images[0] ?? "/img/misc/realisation-hero.jpg"}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center flex-wrap gap-x-1.5 gap-y-1 text-[10.5px] text-steel font-medium uppercase tracking-wider mb-1.5">
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon size={10} />
                    {formatCity(r.city)}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{serviceLabelMap[r.service] ?? r.service}</span>
                </div>
                <h3 className="text-sm font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-snug">
                  {r.title}
                </h3>
                {r.keyResult && (
                  <p className="mt-auto pt-3 text-[11.5px] font-semibold text-success flex items-start gap-1.5">
                    <CheckIcon size={11} className="shrink-0 mt-0.5" />
                    {r.keyResult}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
