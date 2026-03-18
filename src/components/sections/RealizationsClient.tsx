"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPinIcon } from "@/lib/icons";
import type { Realization } from "@/lib/types";

const serviceFilters = [
  { slug: "all", label: "Tous les projets" },
  { slug: "panneaux-photovoltaiques", label: "Panneaux solaires" },
  { slug: "batteries-domestiques", label: "Batteries" },
  { slug: "bornes-de-recharge", label: "Bornes de recharge" },
  { slug: "conformite-electrique", label: "Conformite" },
  { slug: "pompes-a-chaleur", label: "Pompes a chaleur" },
  { slug: "nettoyage-toiture", label: "Nettoyage toiture" },
];

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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-midnight text-white"
                  : "bg-ivory text-steel hover:bg-cloud hover:text-midnight border border-cloud"
              }`}
            >
              {filter.label} ({count})
            </button>
          );
        })}
      </div>

      {correctionCount > 0 && activeFilter === "all" && (
        <p className="mb-8 text-sm text-steel bg-ivory rounded-xl p-4 border border-cloud">
          Dont <strong className="text-midnight">{correctionCount} corrections</strong> d&apos;installations
          defaillantes realisees par d&apos;autres entreprises -- un travail
          que seul un ancien controleur sait diagnostiquer avec precision.
        </p>
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
              {filtered[0].service}
            </div>
            <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight group-hover:text-amber-dark transition-colors">
              {filtered[0].title}
            </h2>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-steel">
              <MapPinIcon size={12} />
              {filtered[0].city}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              {filtered[0].kwc && (
                <span className="stat-value font-bold text-midnight">{filtered[0].kwc} <span className="text-steel font-normal">kWc</span></span>
              )}
              {filtered[0].panelCount && (
                <span className="stat-value font-bold text-midnight">{filtered[0].panelCount} <span className="text-steel font-normal">panneaux</span></span>
              )}
            </div>
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

      {filtered.length === 0 && (
        <p className="text-center text-steel py-12">
          Aucun projet pour ce filtre.
        </p>
      )}
    </>
  );
}
