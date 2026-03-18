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
  video?: string;
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
  video,
}: HeroSectionProps) {
  const isCompact = variant === "compact";
  const isIdentity = variant === "identity";

  if (isCompact) {
    return (
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-be">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
              {headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl text-charcoal">
              {subheadline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaHref}
                className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-xl text-base"
              >
                {ctaLabel}
                <ArrowRightIcon size={18} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-xl transition-colors text-base border border-cloud text-charcoal hover:bg-cloud"
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
      className="relative overflow-hidden"
      style={
        video
          ? { background: "var(--brand-midnight)" }
          : {
              background:
                "linear-gradient(160deg, var(--brand-midnight) 0%, var(--brand-slate) 60%, var(--brand-charcoal) 100%)",
            }
      }
    >
      {/* Video background */}
      {video && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={video} type="video/webm" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(12,18,32,0.75) 0%, rgba(12,18,32,0.85) 100%)" }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.07]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, var(--brand-amber) 0%, transparent 70%)",
        }}
      />

      <div className="container-be relative z-10 py-20 md:py-28 lg:py-36">
        <div className={isIdentity && image && !video ? "grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center" : ""}>
          <div className={video ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
            {/* Badge */}
            {badge && (
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-8 ${video ? "" : ""}`}>
                <div className="w-2 h-2 rounded-full bg-amber" />
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-light">
                  {badge}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-[family-name:var(--font-heading)] text-white leading-[1.1] text-balance">
              {headline}
            </h1>
            <p className={`mt-5 md:mt-6 text-lg md:text-xl leading-relaxed ${video ? "max-w-2xl mx-auto" : "max-w-2xl"} text-silver/90`}>
              {subheadline}
            </p>
            <div className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 ${video ? "justify-center" : ""}`}>
              <Link
                href={ctaHref}
                className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-8 py-4 rounded-xl transition-colors text-base"
              >
                {ctaLabel}
                <ArrowRightIcon size={18} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-xl transition-colors text-base border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Right side: image (only when no video) */}
          {isIdentity && image && !video && (
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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

      {/* Bottom amber accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber to-transparent opacity-40" aria-hidden="true" />
    </section>
  );
}
