import { CheckIcon } from "@/lib/icons";

interface ComplianceBadgeProps {
  label: string;
  tone?: "amber" | "midnight" | "white";
  icon?: "check" | "shield" | "clock";
}

function ShieldCheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

const toneStyles: Record<NonNullable<ComplianceBadgeProps["tone"]>, string> = {
  amber:
    "bg-[color-mix(in_srgb,var(--brand-amber)_12%,transparent)] border-[color-mix(in_srgb,var(--brand-amber)_35%,transparent)] text-amber-dark",
  midnight:
    "bg-[color-mix(in_srgb,var(--brand-midnight)_8%,transparent)] border-[color-mix(in_srgb,var(--brand-midnight)_20%,transparent)] text-midnight",
  white: "bg-white/10 border-white/25 text-white",
};

export function ComplianceBadge({
  label,
  tone = "amber",
  icon = "check",
}: ComplianceBadgeProps) {
  const Icon =
    icon === "shield"
      ? ShieldCheckIcon
      : icon === "clock"
        ? ClockIcon
        : null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-full font-[family-name:var(--font-mono)] uppercase ${toneStyles[tone]}`}
      style={{
        padding: "0.375rem 0.625rem",
        fontSize: "11px",
        letterSpacing: "0.14em",
        lineHeight: 1,
      }}
    >
      {Icon ? <Icon size={12} /> : <CheckIcon size={12} />}
      <span>{label}</span>
    </span>
  );
}
