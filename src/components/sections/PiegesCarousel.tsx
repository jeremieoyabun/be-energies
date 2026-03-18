import Link from "next/link";
import { AlertTriangleIcon, ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Piege } from "@/lib/types";

interface PiegesCarouselProps {
  pieges: Piege[];
  maxItems?: number;
  showLink?: boolean;
}

const severityColors = {
  critique: "bg-danger/90 text-white",
  important: "bg-warning/90 text-white",
  attention: "bg-electric/90 text-white",
};

export function PiegesCarousel({
  pieges,
  maxItems = 3,
  showLink = true,
}: PiegesCarouselProps) {
  const items = pieges.slice(0, maxItems);

  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 texture-dots" aria-hidden="true" />
      <div className="container-be relative z-10">
        <div className="section-label section-label-dark">
          <span>Pieges a eviter</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-balance">
          Ce que Benoit a constate sur le terrain
        </h2>
        <p className="mt-3 text-silver max-w-xl mb-10">
          Les erreurs les plus frequentes identifiees pendant ses inspections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((piege) => (
            <div
              key={piege.slug}
              className="card-dark rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangleIcon size={16} className="text-amber shrink-0" />
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${severityColors[piege.severity]}`}
                >
                  {piege.severity}
                </span>
                <span className="text-[10px] font-[family-name:var(--font-data)] text-steel tracking-wider ml-auto">
                  #{String(piege.number).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold text-white mb-3 leading-snug">
                {piege.title}
              </h3>
              <p className="text-sm text-silver/80 leading-relaxed">
                {piege.problem}
              </p>
              <p className="mt-3 text-sm text-amber-light/80 leading-relaxed">
                {piege.solution.slice(0, 120)}...
              </p>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="mt-8 text-center">
            <Link
              href="/pieges-a-eviter/"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-light font-semibold transition-colors"
            >
              Voir tous les pieges a eviter
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
