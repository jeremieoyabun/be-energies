"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/lib/icons";
import { LeadMagnetModal } from "./LeadMagnetModal";

/**
 * Floating PDF download button that follows the user while they read
 * /pieges-a-eviter/.
 *
 * - Appears after the user has scrolled past ~250 px (so it doesn't fight
 *   the hero CTAs).
 * - Hides once the page's bottom CTA has come into view (avoids stacking
 *   two competing PDF buttons at the end of the article).
 * - Opens the LeadMagnetModal instead of linking directly to the PDF, so
 *   the email gate applies everywhere.
 *
 * SSR-safe: starts hidden, only mounts after a scroll signal.
 */
export function StickyPdfFab() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY > 280;
      const bottom =
        document.documentElement.scrollHeight - window.innerHeight;
      const farFromBottom = window.scrollY < bottom - 600;
      setShow(scrolled && farFromBottom);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Recevoir le guide complet (10 pièges)"
        className={`fixed z-40 bottom-[88px] left-4 md:bottom-6 md:left-auto md:right-6 inline-flex items-center gap-2.5 px-4 md:px-5 py-3 md:py-3.5 rounded-full bg-amber hover:bg-amber-dark text-midnight font-semibold text-[13px] md:text-sm shadow-2xl ring-1 ring-amber-dark/20 transition-all duration-300 ${
          show
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden sm:inline">Recevoir le guide (10 pièges)</span>
        <span className="sm:hidden">Guide PDF (10 pièges)</span>
        <ArrowRightIcon size={14} className="hidden md:inline" />
      </button>
      <LeadMagnetModal
        open={open}
        onClose={() => setOpen(false)}
        leadMagnetSlug="pieges-a-eviter"
        sourcePage="/pieges-a-eviter/"
      />
    </>
  );
}
