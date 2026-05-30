"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

interface ReadMoreProps {
  children: ReactNode;
  /** Pixel height at which the content is clipped while collapsed. */
  collapsedHeight?: number;
  /** Don't activate clipping above this viewport width. Defaults to 768
   *  so desktop visitors always see the full content (their scroll budget
   *  is generally larger). */
  breakpointMax?: number;
  /** Labels for the toggle button. */
  expandLabel?: string;
  collapseLabel?: string;
  className?: string;
}

/**
 * Mobile-first "Lire la suite" wrapper.
 *
 * - Wraps long inner content (typically a prose body) and clips it to
 *   `collapsedHeight` until the user taps the toggle.
 * - Only activates below `breakpointMax` so desktop reading flow stays
 *   intact.
 * - Hides itself entirely when the content fits within the collapsed
 *   height (so we never show a useless "Lire la suite" on short bodies).
 * - SSR-safe: starts in the collapsed state, transitions on hydrate.
 */
export function ReadMore({
  children,
  collapsedHeight = 360,
  breakpointMax = 768,
  expandLabel = "Lire la suite",
  collapseLabel = "Réduire",
  className = "",
}: ReadMoreProps) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [needsClip, setNeedsClip] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function measure() {
      const isMobile = window.innerWidth < breakpointMax;
      setActive(isMobile);
      const el = innerRef.current;
      if (!el) return;
      // Measure the natural height by temporarily letting it grow.
      const prev = el.style.maxHeight;
      el.style.maxHeight = "none";
      const fullHeight = el.scrollHeight;
      el.style.maxHeight = prev;
      setNeedsClip(isMobile && fullHeight > collapsedHeight + 80);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [collapsedHeight, breakpointMax]);

  const clipped = active && needsClip && !expanded;

  return (
    <div className={className}>
      <div
        ref={innerRef}
        className="relative overflow-hidden transition-[max-height] duration-500 ease-out"
        style={{
          maxHeight: clipped ? `${collapsedHeight}px` : "none",
        }}
        aria-hidden={false}
      >
        {children}
        {clipped && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/85 to-transparent"
            aria-hidden="true"
          />
        )}
      </div>
      {active && needsClip && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-dark hover:text-amber transition-colors"
        >
          {expanded ? collapseLabel : expandLabel}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </div>
  );
}
