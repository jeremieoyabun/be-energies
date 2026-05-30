"use client";

import { useEffect, useState } from "react";

interface ServiceTOCProps {
  sections: { id: string; title: string }[];
}

/**
 * Sticky desktop-only table of contents for long service pages.
 * Highlights the section currently in view via IntersectionObserver.
 */
export function ServiceTOC({ sections }: ServiceTOCProps) {
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null,
  );

  useEffect(() => {
    if (sections.length === 0) return;
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the highest-visible entry as the active one.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Sommaire de la page"
      className="hidden xl:block sticky top-24 self-start"
    >
      <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
        Sommaire
      </p>
      <ol className="space-y-0.5 text-[13px] border-l border-cloud">
        {sections.map((s, i) => {
          const isActive = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block pl-4 py-1.5 -ml-px border-l-2 transition-colors leading-snug ${
                  isActive
                    ? "border-amber text-midnight font-semibold"
                    : "border-transparent text-steel hover:text-midnight hover:border-cloud"
                }`}
              >
                <span className="inline-block w-5 text-[10.5px] data-figure text-amber-dark mr-1.5 align-baseline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
