import { ComplianceIcon } from "@/lib/icons";

interface InspectorInsightProps {
  children: React.ReactNode;
  title?: string;
}

export function InspectorInsight({
  children,
  title = "Insight inspecteur",
}: InspectorInsightProps) {
  return (
    <div className="inspector-insight">
      <div className="flex items-center gap-2 mb-2">
        <ComplianceIcon size={16} className="text-cyan" />
        <span className="text-[11px] font-[family-name:var(--font-data)] tracking-[0.15em] uppercase text-cyan">
          {title}
        </span>
      </div>
      <div className="text-sm text-charcoal leading-relaxed">{children}</div>
    </div>
  );
}
