"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  /** Animation duration in milliseconds. Default 1500. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to show. Default 0. */
  decimals?: number;
  /** Use comma as decimal separator (fr-BE) vs dot. Default true. */
  french?: boolean;
  className?: string;
}

/**
 * Numeric counter that animates from 0 to `value` when the element
 * enters the viewport. Triggers once. Uses requestAnimationFrame +
 * cubic-out easing for a snappy "rolling number" feel.
 *
 * Respects `prefers-reduced-motion`: shows the final value immediately
 * without any animation.
 *
 * SSR-safe: renders the final value on the server (so the page never
 * displays "0" to crawlers or no-JS users), then re-animates on mount
 * via state to give the perceived effect.
 */
export function AnimatedNumber({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  decimals = 0,
  french = true,
  className,
}: AnimatedNumberProps) {
  // Render the final value during SSR so crawlers + no-JS users see it.
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasRunRef.current) return;
        hasRunRef.current = true;
        // Snap to 0 the moment the element is about to animate so the
        // count visibly rolls up from zero (instead of briefly showing
        // the final value on hydration and then jumping back).
        setDisplay(0);
        let start: number | null = null;
        function step(t: number) {
          if (start === null) start = t;
          const progress = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(eased * value);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.disconnect();
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const formatted = french
    ? display.toFixed(decimals).replace(".", ",")
    : display.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
