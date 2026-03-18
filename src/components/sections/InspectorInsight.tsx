import { ComplianceIcon } from "@/lib/icons";

interface InspectorInsightProps {
  children: React.ReactNode;
  title?: string;
}

export function InspectorInsight({
  children,
  title = "Parole d'inspecteur",
}: InspectorInsightProps) {
  return (
    <div className="inspector-insight">
      <div className="flex items-center gap-2 mb-2">
        <ComplianceIcon size={15} className="text-amber-dark" />
        <span className="text-[11px] font-[family-name:var(--font-data)] tracking-[0.12em] uppercase text-amber-dark font-semibold">
          {title}
        </span>
      </div>
      <div className="text-sm text-charcoal leading-relaxed">{children}</div>
    </div>
  );
}
