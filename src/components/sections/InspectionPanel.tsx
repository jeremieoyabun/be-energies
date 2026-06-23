interface InspectionPanelProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: string[];
}

export function InspectionPanel({
  eyebrow,
  title,
  subtitle,
  items,
}: InspectionPanelProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-amber/15 text-amber-dark border border-amber/30"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
          >
            <path d="M5 12l4 4L19 7" />
          </svg>
        </span>
        <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-amber-dark font-[family-name:var(--font-mono)]">
          {eyebrow}
        </p>
        <span
          aria-hidden="true"
          className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-charcoal font-[family-name:var(--font-mono)] border-[1.5px] border-midnight/20 rounded-md px-2 py-0.5 bg-white"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber" />
          Rapport
        </span>
      </div>

      <h3 className="mt-3 text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight leading-tight">
        {title}
      </h3>

      {subtitle ? (
        <p className="mt-2 text-[13.5px] italic text-charcoal/70 max-w-[58ch]">
          {subtitle}
        </p>
      ) : null}

      <ol className="mt-5 grid sm:grid-cols-2 gap-3">
        {items.map((item, idx) => {
          const number = String(idx + 1).padStart(2, "0");
          return (
            <li
              key={item}
              className="card group flex items-start gap-3 p-4"
            >
              <span
                aria-hidden="true"
                className="shrink-0 inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-md bg-midnight text-ivory text-[12px] font-bold tracking-[0.1em] font-[family-name:var(--font-mono)] ring-1 ring-amber/30"
              >
                {number}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber/15 text-amber-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M5 12l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[14.5px] text-charcoal leading-snug">
                {item}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
