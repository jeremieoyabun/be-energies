"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPinIcon } from "@/lib/icons";
import { cities } from "@/data/cities";
import type { Realization } from "@/lib/types";

const serviceFilters = [
  { slug: "all", label: "Tous les projets" },
  { slug: "panneaux-photovoltaiques", label: "Panneaux solaires" },
  { slug: "batteries-domestiques", label: "Batteries" },
  { slug: "bornes-de-recharge", label: "Bornes de recharge" },
  { slug: "conformite-electrique", label: "Conformité" },
  { slug: "pompes-a-chaleur", label: "Pompes à chaleur" },
];

// Human-readable service labels - keep card chips clean (no raw slugs).
const SERVICE_LABEL: Record<string, string> = {
  "panneaux-photovoltaiques": "Panneaux solaires",
  "batteries-domestiques": "Batterie",
  "bornes-de-recharge": "Borne de recharge",
  "conformite-electrique": "Conformité",
  "pompes-a-chaleur": "Pompe à chaleur",
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

// Primary technical label: "Installation {kwc} kWc · {province}" when possible,
// with graceful fallbacks so the card never breaks.
function buildPrimaryLabel(r: Realization, serviceLabel: string): string {
  const province = getProvince(r.city);
  if (r.kwc) {
    const head = `Installation ${r.kwc} kWc`;
    return province ? `${head} · ${province}` : head;
  }
  if (province) return `${serviceLabel} · ${province}`;
  return serviceLabel || formatCity(r.city);
}

interface RealizationsClientProps {
  realizations: Realization[];
}

export function RealizationsClient({ realizations }: RealizationsClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? realizations
    : realizations.filter((r) => r.service === activeFilter);

  const correctionCount = realizations.filter(
    (r) => r.category === "correction"
  ).length;

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {serviceFilters.map((filter) => {
          const count = filter.slug === "all"
            ? realizations.length
            : realizations.filter((r) => r.service === filter.slug).length;
          if (count === 0 && filter.slug !== "all") return null;
          const isActive = activeFilter === filter.slug;
          return (
            <button
              key={filter.slug}
              onClick={() => setActiveFilter(filter.slug)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-midnight text-white shadow-[0_4px_12px_-4px_rgba(12,18,32,0.3)]"
                  : "bg-white text-midnight border-[1.5px] border-midnight/15 hover:border-amber hover:bg-amber/5"
              }`}
            >
              {filter.label} ({count})
            </button>
          );
        })}
      </div>

      {correctionCount > 0 && activeFilter === "all" && (
        <div className="mb-8 bg-midnight text-white p-5 md:p-6 rounded-2xl border-l-4 border-amber shadow-[0_8px_24px_-12px_rgba(12,18,32,0.4)]">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-2xl md:text-3xl font-bold text-amber tabular-nums font-[family-name:var(--font-heading)]">
              {correctionCount}
            </span>
            <span className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber-light">
              Corrections
            </span>
          </div>
          <p className="mt-2 text-[14.5px] text-white/90 leading-relaxed">
            Installations défaillantes réalisées par d&apos;autres
            entreprises et reprises par Be&apos;energies — un travail que
            seul un ancien contrôleur sait diagnostiquer avec précision.
          </p>
        </div>
      )}

      {/* Featured project */}
      {filtered.length > 0 && (
        <Link
          href={`/realisations/${filtered[0].slug}/`}
          className="group card overflow-hidden mb-6 grid md:grid-cols-2"
        >
          <div className="aspect-[16/10] md:aspect-auto relative overflow-hidden">
            <Image
              src={filtered[0].images[0] ?? "/img/misc/realisation-hero.jpg"}
              alt={filtered[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="inline-flex self-start px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber/10 text-amber-dark tracking-wider uppercase mb-3">
              {SERVICE_LABEL[filtered[0].service] ?? filtered[0].service}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-steel font-semibold uppercase tracking-wider mb-2">
              <MapPinIcon size={12} />
              {buildPrimaryLabel(
                filtered[0],
                SERVICE_LABEL[filtered[0].service] ?? filtered[0].service,
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight group-hover:text-amber-dark transition-colors">
              {filtered[0].title}
            </h2>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-steel">
              <MapPinIcon size={12} />
              {formatCity(filtered[0].city)}
            </div>
            {filtered[0].panelCount && (
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="stat-value font-bold text-midnight">{filtered[0].panelCount} <span className="text-steel font-normal">panneaux</span></span>
              </div>
            )}
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.slice(1).map((r) => (
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
                {SERVICE_LABEL[r.service] ?? r.service}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1.5 text-[11px] text-steel font-semibold uppercase tracking-wider mb-1.5">
                <MapPinIcon size={11} />
                {buildPrimaryLabel(r, SERVICE_LABEL[r.service] ?? r.service)}
              </div>
              <h3 className="text-base font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-snug">
                {r.title}
              </h3>
              <div className="mt-2 flex items-center gap-3 text-xs text-steel">
                <span>{formatCity(r.city)}</span>
                {r.panelCount && <span className="stat-value font-semibold text-charcoal">{r.panelCount} panneaux</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-steel py-12">
          Aucun projet pour ce filtre.
        </p>
      )}
    </>
  );
}
