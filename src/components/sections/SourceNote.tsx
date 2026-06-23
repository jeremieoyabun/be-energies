import type { ReactNode } from "react";

/**
 * SourceNote — small italic inline note for attribution, sources,
 * caption disclaimers below tables or proof blocks.
 *
 * Server component. Two variants of leading icon: "info" (default) or
 * "source" (book-style mark).
 */

interface SourceNoteProps {
  children: ReactNode;
  icon?: "info" | "source";
}

export function SourceNote({ children, icon = "info" }: SourceNoteProps) {
  return (
    <p className="mt-6 md:mt-8 flex items-start gap-1.5 text-[12px] italic leading-relaxed text-steel/85">
      <span aria-hidden="true" className="shrink-0 mt-[2px] text-steel/70">
        {icon === "info" ? <InfoCircleSvg /> : <SourceSvg />}
      </span>
      <span>{children}</span>
    </p>
  );
}

function InfoCircleSvg() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <line x1="8" y1="7" x2="8" y2="11" />
      <circle cx="8" cy="4.75" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SourceSvg() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 3.5h4a2 2 0 0 1 2 2v8a1.5 1.5 0 0 0-1.5-1.5h-4.5z" />
      <path d="M13.5 3.5h-4a2 2 0 0 0-2 2v8a1.5 1.5 0 0 1 1.5-1.5h4.5z" />
    </svg>
  );
}
