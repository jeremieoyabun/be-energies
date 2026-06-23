"use client";

import { useState, type ReactNode } from "react";
import { LeadMagnetModal } from "./LeadMagnetModal";
import type { LeadMagnetSlug } from "@/lib/lead-magnet";

interface LeadMagnetButtonProps {
  leadMagnetSlug: LeadMagnetSlug;
  sourcePage?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

/**
 * LeadMagnetButton — drop-in trigger that opens the email-gate modal.
 *
 * Use this anywhere a "Télécharger le guide" CTA used to point straight
 * at /api/guide/pieges/. The visual style stays under the caller's
 * control via className + children; the gate and modal logic are
 * encapsulated here.
 */
export function LeadMagnetButton({
  leadMagnetSlug,
  sourcePage,
  className,
  children,
  ariaLabel,
}: LeadMagnetButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </button>
      <LeadMagnetModal
        open={open}
        onClose={() => setOpen(false)}
        leadMagnetSlug={leadMagnetSlug}
        sourcePage={sourcePage}
      />
    </>
  );
}
