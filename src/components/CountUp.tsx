"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Target value to count up to. */
  to: number;
  /** Optional prefix (e.g. "~", "+"). */
  prefix?: string;
  /** Optional suffix (e.g. "+", "%", " ans"). */
  suffix?: string;
  /** Animation duration in ms. Default 1100. */
  duration?: number;
  /** Number of decimal places. */
  decimals?: number;
  className?: string;
}

/**
 * Number ticker with **SSR-safe progressive enhancement**.
 *
 * Renders the FINAL value in HTML at server time so that:
 *   - search-engine crawlers see the real figure ("12 %", "38 c/kWh")
 *   - screen readers announce the correct value immediately
 *   - no-JS users get the right number
 *   - copy-paste / text extraction works as expected
 *
 * The count-up animation only runs on the client when:
 *   - JS is enabled
 *   - the user does not have prefers-reduced-motion: reduce
 *   - the element is scrolled into view
 *
 * If any of the above fails, the element keeps its server-rendered final
 * value — never reverts to 0.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1100,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // Initial state = final value, so SSR HTML already contains the truth.
  // Only the animation tick mutates this downwards then back up.
  const [value, setValue] = useState<number>(to);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Reduced motion → keep the static final value, skip animation entirely.
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        // Snap to 0 just before the animation begins, then ease back to `to`.
        // The dip is invisible because we only enter the animation loop when
        // the element is in view AND ~one frame separates the snap from the
        // first tick.
        setValue(0);
        const start = performance.now();
        // Ease-out cubic — fast start, gentle settle.
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration);
          setValue(to * ease(t));
          if (t < 1) requestAnimationFrame(tick);
          else setValue(to);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("fr-BE", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
