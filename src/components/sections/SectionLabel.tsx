interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{children}</span>
    </div>
  );
}
