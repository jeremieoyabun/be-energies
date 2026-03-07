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
  critique: "bg-danger text-white",
  important: "bg-warning text-white",
  attention: "bg-electric text-white",
};

export function PiegesCarousel({
  pieges,
  maxItems = 3,
  showLink = true,
}: PiegesCarouselProps) {
  const items = pieges.slice(0, maxItems);

  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 hatch-pattern" />
      <div className="container-be relative z-10">
        <SectionLabel>Pieges a eviter</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white">
          Ce que Benoit a constate sur le terrain
        </h2>
        <p className="mt-3 text-silver max-w-xl mb-10">
          Les erreurs les plus frequentes identifiees pendant ses inspections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((piege) => (
            <div
              key={piege.slug}
              className="bg-slate rounded-xl p-6 border border-charcoal hover:border-amber/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangleIcon size={18} className="text-amber shrink-0" />
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${severityColors[piege.severity]}`}
                >
                  {piege.severity}
                </span>
                <span className="text-[10px] font-[family-name:var(--font-data)] text-steel tracking-wider">
                  #{String(piege.number).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {piege.title}
              </h3>
              <p className="text-sm text-silver leading-relaxed">
                {piege.problem}
              </p>
              <p className="mt-3 text-sm text-amber-light leading-relaxed">
                {piege.solution.slice(0, 120)}...
              </p>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="mt-8 text-center">
            <Link
              href="/pieges-a-eviter/"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-light font-medium transition-colors"
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
