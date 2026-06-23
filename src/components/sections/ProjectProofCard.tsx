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
      className="group relative bg-ivory border border-cloud rounded-2xl overflow-hidden flex flex-col hover:border-amber/40 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      aria-label={`Dossier projet : ${r.title}`}
    >
      {/* Header strip — audit dossier label, sharp bottom border */}
      <div className="flex items-center justify-between gap-3 px-5 md:px-6 pt-4 pb-3 border-b border-amber/30 bg-ivory">
        <p className="font-[family-name:var(--font-mono)] text-[10.5px] md:text-[11px] font-semibold tracking-[0.14em] uppercase text-amber-dark leading-none truncate">
          {primaryLabel}
        </p>
        {isCorrection && (
          <span className="shrink-0 inline-flex items-center rounded-md bg-danger text-white text-[10px] font-semibold tracking-[0.08em] uppercase px-2 py-0.5">
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
        <h3 className="text-[15.5px] md:text-base font-semibold text-midnight leading-snug">
          {r.title}
        </h3>
        {problem && (
          <p className="text-[13px] text-charcoal/80 leading-relaxed line-clamp-2">
            {problem}
          </p>
        )}
        {r.keyResult && (
          <p className="mt-auto inline-flex items-start gap-1.5 text-[13px] font-semibold text-success">
            <CheckIcon size={13} className="shrink-0 mt-0.5" />
            {r.keyResult}
          </p>
        )}
      </div>
    </Link>
  );
}
