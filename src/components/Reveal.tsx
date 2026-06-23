"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay before the reveal animation starts, in milliseconds. */
  delay?: number;
  /** Distance the element translates from. Default 16px. */
  offset?: number;
  /** Viewport threshold (0..1). Default 0.15. */
  threshold?: number;
  /** Disable on first paint to keep SSR markup stable. */
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "ul" | "ol" | "li";
  className?: string;
}

/**
 * Lightweight reveal-on-scroll wrapper. Uses IntersectionObserver, fires
 * once, and respects prefers-reduced-motion (renders fully visible
 * immediately).
 *
 * - SSR: renders content opacity:0, translateY(offset) - but since the
 *   block is hydrated quickly, the user only sees the animation if their
 *   browser is fast enough to register the IntersectionObserver before
 *   the page is scrolled.
 * - Reduced motion: bypasses animation entirely.
 */
export function Reveal({
  children,
  delay = 0,
  offset = 16,
  threshold = 0.15,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot mount-time bypass, never re-fires
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic ref typing across union of intrinsic tags
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${offset}px)`,
        transition: `opacity 600ms ease-out ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
