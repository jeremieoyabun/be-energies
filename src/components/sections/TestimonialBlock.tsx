import { StarIcon, MapPinIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { Testimonial } from "@/lib/types";

interface TestimonialBlockProps {
  testimonials: Testimonial[];
  title?: string;
}

export function TestimonialBlock({
  testimonials,
  title = "Ce que nos clients disent",
}: TestimonialBlockProps) {
  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-be">
        <SectionLabel>Témoignages vérifiés</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-10 text-balance">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <blockquote
              key={index}
              className="card p-6 flex flex-col"
            >
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

              {/* Outcome badge */}
              {t.outcome && (
                <div className="mt-4 inline-flex self-start items-center gap-1.5 bg-success/8 text-success text-xs font-semibold px-3 py-1.5 rounded-full border border-success/15">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t.outcome}
                </div>
              )}

              {/* Attribution */}
              <div className="mt-5 pt-4 border-t border-cloud flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-midnight text-amber flex items-center justify-center text-xs font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-midnight">{t.name}</p>
                    <p className="text-xs text-steel flex items-center gap-1">
                      <MapPinIcon size={10} />
                      {t.city}
                    </p>
                  </div>
                </div>
                {t.service && (
                  <span className="text-[10px] font-[family-name:var(--font-data)] text-steel/70 tracking-wider uppercase">
                    {t.service}
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
