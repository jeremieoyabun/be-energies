import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/lib/icons";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: { label: string; href: string };
  variant?: "identity" | "service" | "local" | "compact";
  image?: string;
  badge?: string;
}

export function HeroSection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryCta,
  variant = "identity",
  image,
  badge,
}: HeroSectionProps) {
  const isCompact = variant === "compact";
  const isIdentity = variant === "identity";

  if (isCompact) {
    return (
      <section className="py-12 md:py-16" style={{ background: "var(--brand-ivory)" }}>
        <div className="container-be">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-midnight leading-tight">
              {headline}
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-steel">
              {subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaHref}
                className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg text-base"
              >
                {ctaLabel}
                <ArrowRightIcon size={18} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-lg transition-colors text-base border border-cloud text-charcoal hover:bg-cloud"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, var(--brand-midnight) 0%, var(--brand-slate) 50%, var(--brand-charcoal) 100%)",
      }}
    >
      {/* Hatch pattern overlay */}
      <div className="absolute inset-0 hatch-pattern" aria-hidden="true" />

      {/* Radial amber accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rounded-full"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container-be relative z-10">
        <div className={isIdentity && image ? "grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center" : ""}>
          <div className="max-w-3xl">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-cyan/30 bg-cyan/5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                <span className="text-[10px] font-[family-name:var(--font-data)] tracking-[0.2em] uppercase text-cyan">
                  {badge}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-heading)] text-white leading-tight">
              {headline}
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-silver">
              {subheadline}
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaHref}
                className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                {ctaLabel}
                <ArrowRightIcon size={18} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-lg transition-colors text-base border border-charcoal text-silver hover:text-white hover:border-silver"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Right side: image */}
          {isIdentity && image && (
            <div className="hidden lg:block">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={image}
                  alt="Be'energies sur le terrain"
                  width={640}
                  height={480}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom dotted separator */}
      <div className="absolute bottom-0 left-0 right-0 dotted-line" aria-hidden="true" />
    </section>
  );
}
