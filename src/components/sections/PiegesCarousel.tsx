import Link from "next/link";
import { AlertTriangleIcon, ArrowRightIcon } from "@/lib/icons";
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
          <span>Pièges à éviter</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-balance">
          Ce que Benoît a constaté sur le terrain
        </h2>
        <p className="mt-3 text-silver max-w-xl mb-10">
          Les erreurs les plus fréquentes identifiées pendant ses inspections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((piege) => (
            <div
              key={piege.slug}
              className="card-dark rounded-2xl p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangleIcon size={16} className="text-amber shrink-0" />
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-[0.12em] ${severityColors[piege.severity]}`}
                >
                  {piege.severity.toUpperCase()}
                </span>
                <span className="ml-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber/15 text-amber ring-1 ring-amber/40 font-bold text-[13px] tabular-nums font-[family-name:var(--font-data)]">
                  {String(piege.number).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-3 leading-snug">
                {piege.title}
              </h3>
              <p className="text-[14px] text-white/90 leading-relaxed">
                {piege.problem}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-amber/80 mb-1.5">
                  La parade
                </p>
                <p className="text-[14px] text-amber-light leading-relaxed">
                  {piege.solution.slice(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {showLink && (
          <div className="mt-8 text-center">
            <Link
              href="/pieges-a-eviter/"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-light font-semibold transition-colors"
            >
              Voir tous les pièges à éviter
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
