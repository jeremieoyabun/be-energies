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
 * Animated number ticker that only runs once the element is in view.
 * Respects prefers-reduced-motion (renders the final value immediately).
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
  const [value, setValue] = useState<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot mount-time bypass, never re-fires
      setValue(to);
      startedRef.current = true;
      return;
    }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
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
