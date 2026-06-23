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
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-amber-dark font-[family-name:var(--font-mono)]">
          {eyebrow}
        </p>
        <span
          aria-hidden="true"
          className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-steel font-[family-name:var(--font-mono)] border border-cloud rounded-md px-2 py-0.5"
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
              className="group flex items-start gap-3 bg-white border border-cloud rounded-xl p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-elevated hover:border-amber/40"
            >
              <span
                aria-hidden="true"
                className="shrink-0 inline-flex items-center justify-center min-w-[2rem] h-7 px-1.5 rounded-md bg-midnight text-ivory text-[11px] font-semibold tracking-[0.08em] font-[family-name:var(--font-mono)]"
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
              <span className="text-[14px] text-charcoal leading-snug">
                {item}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
