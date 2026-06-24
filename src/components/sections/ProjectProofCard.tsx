import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "@/lib/icons";
import type { Realization } from "@/lib/types";

/**
 * ProjectProofCard — "audit dossier" feel for featured chantiers.
 *
 * Visually distinct from a generic Card:
 *   - a sharp header strip ABOVE the image carries the technical label
 *     (mono uppercase amber-dark) and an optional Correction badge,
 *   - the image sits below with slight rounded corners,
 *   - title + 1-line problem, then the keyResult anchored at the bottom
 *     with a check mark.
 *
 * Server component. Used by ProofSystem sub-band 2.
 */

interface ProjectProofCardProps {
  realization: Realization;
  /** Pre-built primary label (e.g. "Installation 5.6 kWc · Hainaut"). */
  primaryLabel: string;
  /** Optional short problem statement (already trimmed to ~110 chars). */
  problem?: string;
}

export function ProjectProofCard({
  realization: r,
  primaryLabel,
  problem,
}: ProjectProofCardProps) {
  const isCorrection = r.category === "correction";

  return (
    <Link
      href={`/realisations/${r.slug}/`}
      className="group relative bg-white border-[1.5px] border-midnight/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_1px_2px_rgba(12,18,32,0.04)] hover:-translate-y-0.5 hover:border-amber/50 hover:shadow-[0_12px_32px_-12px_rgba(245,158,11,0.25),0_2px_8px_rgba(12,18,32,0.08)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      aria-label={`Dossier projet : ${r.title}`}
    >
      {/* Header strip — audit dossier label, sharp bottom border */}
      <div className="flex items-center justify-between gap-3 px-5 md:px-6 pt-4 pb-3 border-b-[1.5px] border-amber/40 bg-ivory/70">
        <p className="font-[family-name:var(--font-mono)] text-[12px] md:text-[13px] font-bold tracking-[0.1em] uppercase text-amber-dark leading-none truncate">
          {primaryLabel}
        </p>
        {isCorrection && (
          <span className="shrink-0 inline-flex items-center rounded-md bg-[#b91c1c] text-white text-[10.5px] md:text-[11px] font-bold tracking-[0.08em] uppercase px-2 py-0.5">
            Correction
          </span>
        )}
      </div>

      {/* Image — slight rounding inside the card */}
      <div className="relative aspect-[16/10] bg-midnight/5 overflow-hidden mx-3 mt-3 rounded-lg">
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
      </div>

      {/* Title + problem + keyResult */}
      <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-base md:text-lg font-semibold text-midnight leading-[1.3]">
          {r.title}
        </h3>
        {problem && (
          <p className="text-[13.5px] text-charcoal leading-relaxed line-clamp-2">
            {problem}
          </p>
        )}
        {r.keyResult && (
          <p className="mt-auto inline-flex items-start gap-2 text-[14px] md:text-[14.5px] font-semibold text-midnight leading-snug">
            <CheckIcon size={14} className="shrink-0 mt-[3px] text-success" />
            <span>{r.keyResult}</span>
          </p>
        )}
      </div>
    </Link>
  );
}
