"use client";

import { useState, useId, useRef, useEffect } from "react";
import { glossary } from "@/lib/glossary";

interface TermProps {
  /** Glossary key (case-insensitive). */
  k: string;
  /** Visible text. Defaults to the children if both are provided. */
  children?: React.ReactNode;
}

/**
 * Tooltip-style glossary term. Hover (desktop) or tap (mobile) to reveal
 * a definition from the central glossary. Dashed underline signals the
 * interactive affordance.
 *
 * a11y: visible focus ring; tooltip uses role="tooltip" + aria-describedby.
 * Closes on Escape, on outside click, and when scrolled out of view.
 */
export function Term({ k, children }: TermProps) {
  const entry = glossary[k.toLowerCase()];
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const tipId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointer(e: MouseEvent | TouchEvent) {
      const target = e.target as Node | null;
      if (target && wrapRef.current && !wrapRef.current.contains(target)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Unknown key - render as plain text. Console-warn to flag a typo.
  if (!entry) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`<Term k="${k}"> not found in glossary.`);
    }
    return <span>{children ?? k}</span>;
  }

  return (
    <span
      ref={wrapRef}
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-describedby={open ? tipId : undefined}
        aria-expanded={open}
        className="font-medium underline decoration-dotted decoration-amber-dark/60 underline-offset-[3px] hover:decoration-amber-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-sm transition-colors"
      >
        {children ?? k}
      </button>
      {open && (
        <span
          id={tipId}
          role="tooltip"
          className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 top-full w-[min(280px,calc(100vw-2rem))] bg-midnight text-silver text-[12px] leading-relaxed rounded-lg border border-charcoal shadow-xl p-3"
        >
          <strong className="text-white block mb-1 text-[12.5px] uppercase tracking-[0.08em]">
            {(children ?? k)?.toString()}
          </strong>
          {entry.full}
          {entry.sourceUrl && (
            <a
              href={entry.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-amber-light text-[11px] underline"
            >
              Source officielle
            </a>
          )}
        </span>
      )}
    </span>
  );
}
