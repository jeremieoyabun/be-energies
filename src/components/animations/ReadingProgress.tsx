"use client";

import { useEffect, useState } from "react";

/**
 * Thin amber gradient bar pinned to the top of the viewport that
 * tracks scroll depth on long pages (pillar guides, /pieges-a-eviter/).
 *
 * Uses requestAnimationFrame throttling so scroll events don't
 * thrash, transform: scaleX instead of width so it's GPU-composited
 * and never triggers layout.
 *
 * SSR-safe: starts hidden (scaleX 0) until first scroll.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let rafId: number | null = null;
    function compute() {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const max = docHeight - winHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setProgress(ratio);
      rafId = null;
    }
    function onScroll() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(compute);
    }
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-amber/10 pointer-events-none origin-left"
    >
      <div
        className="h-full bg-gradient-to-r from-amber via-amber to-amber-dark origin-left"
        style={{
          transform: `scaleX(${progress})`,
          transition: progress === 0 ? "none" : "transform 0.1s linear",
        }}
      />
    </div>
  );
}
