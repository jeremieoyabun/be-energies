"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/lib/icons";

const GUIDE_PDF_URL = "/api/guide/pieges/";

/**
 * Floating PDF download button that follows the user while they read
 * /pieges-a-eviter/.
 *
 * - Appears after the user has scrolled past ~250 px (so it doesn't fight
 *   the hero CTAs).
 * - Hides once the page's bottom CTA has come into view (avoids stacking
 *   two competing PDF buttons at the end of the article).
 *
 * SSR-safe: starts hidden, only mounts after a scroll signal.
 */
export function StickyPdfFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY > 280;
      // Hide near the very bottom (last 600px) so we don't double up with the
      // bottom-of-page CTA.
      const bottom = document.documentElement.scrollHeight - window.innerHeight;
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
    <a
      href={GUIDE_PDF_URL}
      target="_blank"
      rel="noopener noreferrer"
      download="be-energies-7-pieges-a-eviter.pdf"
      aria-label="Télécharger le guide PDF — 10 pièges à éviter"
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
      <span className="hidden sm:inline">Télécharger le guide</span>
      <span className="sm:hidden">Guide PDF</span>
      <ArrowRightIcon size={14} className="hidden md:inline" />
    </a>
  );
}
