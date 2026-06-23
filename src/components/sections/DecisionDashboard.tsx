import type { ReactNode } from "react";

/**
 * DecisionDashboard
 *
 * Slim server wrapper that prefixes a horizontal "01 → 02 → 03" stepper rail
 * above a group of decision cards. The rail is a meta-navigation aid: it
 * tells the visitor "you are reading a 3-step decision frame" before they
 * scan the cards. It does not replace the per-card number badge — both
 * coexist, the rail at section altitude, the badge at card altitude.
 *
 * The rail is intentionally quiet: 24px circles, a 1px connector line, no
 * chevrons, no gradients. On mobile (< md) it collapses into a compact
 * vertical strip rather than crowding the header.
 *
 * Server component only.
 */

type DashboardTone = "neutral" | "accent" | "decision";

type DashboardStep = {
  number: string;
  label: string;
  tone?: DashboardTone;
};

type DecisionDashboardProps = {
  children: ReactNode;
  steps: DashboardStep[];
};

const TONE_CIRCLE: Record<DashboardTone, string> = {
  neutral: "bg-ivory border border-cloud text-charcoal",
  accent: "bg-amber text-midnight border border-amber",
  decision: "bg-midnight text-white border border-midnight",
};

const TONE_LABEL: Record<DashboardTone, string> = {
  neutral: "text-charcoal/70",
  accent: "text-amber-dark",
  decision: "text-midnight",
};

export function DecisionDashboard({ children, steps }: DecisionDashboardProps) {
  return (
    <div>
      {/* Desktop rail: horizontal 01 → 02 → 03 with 1px connectors.
          Hidden under md to keep mobile clean. */}
      <ol
        aria-label="Étapes de lecture"
        className="hidden md:flex items-center gap-3 mb-8"
      >
        {steps.map((step, idx) => {
          const tone: DashboardTone = step.tone ?? "neutral";
          const isLast = idx === steps.length - 1;
          return (
            <li
              key={`${step.number}-${idx}`}
              className="flex items-center gap-3 flex-1 last:flex-none"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10.5px] font-bold tabular-nums ${TONE_CIRCLE[tone]}`}
                >
                  {step.number}
                </span>
                <span
                  className={`text-[11px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap ${TONE_LABEL[tone]}`}
                >
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="flex-1 h-px bg-cloud min-w-[24px]"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile rail: compact vertical strip — just the circles in a row
          without labels, so the header stays calm. */}
      <ol
        aria-label="Étapes de lecture"
        className="flex md:hidden items-center gap-2 mb-6"
      >
        {steps.map((step, idx) => {
          const tone: DashboardTone = step.tone ?? "neutral";
          const isLast = idx === steps.length - 1;
          return (
            <li
              key={`m-${step.number}-${idx}`}
              className="flex items-center gap-2"
            >
              <span
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[9.5px] font-bold tabular-nums ${TONE_CIRCLE[tone]}`}
              >
                {step.number}
              </span>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="block w-4 h-px bg-cloud"
                />
              )}
            </li>
          );
        })}
      </ol>

      {children}
    </div>
  );
}
