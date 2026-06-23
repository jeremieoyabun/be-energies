interface ExpertNoteProps {
  quote: string;
  attribution?: string;
  signature?: string;
}

export function ExpertNote({ quote, attribution, signature }: ExpertNoteProps) {
  return (
    <figure className="mt-6 border-l-2 border-amber pl-5 max-w-[60ch]">
      <blockquote>
        <p className="italic text-charcoal leading-relaxed text-[15px]">
          {quote}
        </p>
      </blockquote>
      {attribution || signature ? (
        <figcaption className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-amber-dark font-[family-name:var(--font-mono)]">
          {attribution ? <span>{attribution}</span> : null}
          {signature ? (
            <span className="text-steel normal-case tracking-normal font-normal italic">
              {signature}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
