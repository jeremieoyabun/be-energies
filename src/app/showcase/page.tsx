import type { Metadata } from "next";
import Link from "next/link";
import { concepts } from "./data";

export const metadata: Metadata = {
  title: "Design Showcase | Be'energies",
};

function ConceptCard({ concept }: { concept: (typeof concepts)[0] }) {
  return (
    <Link
      href={`/showcase/${concept.slug}/`}
      className="group block rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
    >
      {/* Thumbnail / Color Preview */}
      <div
        className="relative h-56 overflow-hidden"
        style={{ background: concept.palette[0].hex }}
      >
        {/* Abstract pattern representing the concept */}
        <div className="absolute inset-0 opacity-20">
          {concept.slug === "rapport-de-terrain" && (
            <>
              <div className="absolute top-6 left-6 w-32 h-1 bg-[#06b6d4]" />
              <div className="absolute top-10 left-6 w-48 h-1 bg-[#f59e0b] opacity-60" />
              <div className="absolute top-14 left-6 w-24 h-1 bg-[#06b6d4] opacity-40" />
              <div className="absolute bottom-8 right-8 font-mono text-[#06b6d4] text-xs tracking-widest">
                RAPPORT N.487
              </div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-white/10"
                  style={{
                    top: `${20 + i * 14}%`,
                    left: "5%",
                    right: "5%",
                  }}
                />
              ))}
            </>
          )}
          {concept.slug === "atelier-solaire" && (
            <>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-[#c2410c] opacity-40"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-[#fef3c7] opacity-30"
              />
              <div className="absolute bottom-6 left-6 text-[#fef3c7] text-sm italic opacity-60">
                fait main, fait bien
              </div>
            </>
          )}
          {concept.slug === "controle-technique" && (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px bg-[#06b6d4]/30"
                  style={{
                    left: `${12.5 * (i + 1)}%`,
                    top: 0,
                    bottom: 0,
                  }}
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-[#06b6d4]/20"
                  style={{
                    top: `${20 * (i + 1)}%`,
                    left: 0,
                    right: 0,
                  }}
                />
              ))}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[#22c55e] text-[10px] font-mono tracking-wider">
                  SYSTEME ACTIF
                </span>
              </div>
            </>
          )}
        </div>

        {/* Concept title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <h2
            className="text-2xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {concept.title}
          </h2>
          <p className="text-white/70 text-sm mt-1">{concept.subtitle}</p>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <p className="text-[#2a3444] text-sm leading-relaxed mb-4">
          {concept.rationale}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {concept.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#f8fafc] text-[#64748b] border border-[#e2e8f0]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Palette preview */}
        <div className="flex items-center gap-1.5">
          {concept.palette.map((color) => (
            <div
              key={color.hex}
              className="w-6 h-6 rounded-full border border-[#e2e8f0]"
              style={{ background: color.hex }}
              title={color.name}
            />
          ))}
          <span className="ml-2 text-xs text-[#94a3b8]">
            {concept.typography.map((t) => t.font).join(" / ")}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0c1220] flex items-center justify-center">
              <span className="text-[#f59e0b] font-bold text-sm">B</span>
            </div>
            <div>
              <span
                className="text-[#0c1220] font-semibold text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Be&apos;energies
              </span>
              <span className="text-[#94a3b8] text-xs ml-2">
                Design Showcase
              </span>
            </div>
          </div>
          <Link
            href="/showcase/compare/"
            className="text-sm text-[#64748b] hover:text-[#0c1220] transition-colors flex items-center gap-1.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            Comparer les directions
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c1220] text-[#f59e0b] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            Document interne
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-[#0c1220] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            3 directions creatives
            <br />
            <span className="text-[#64748b]">pour le nouveau site</span>
          </h1>
          <p className="mt-6 text-lg text-[#64748b] max-w-xl mx-auto leading-relaxed">
            Chaque concept est une homepage complete et realiste. Cliquez pour
            previsualiser, puis comparez les approches pour choisir la direction
            finale.
          </p>
        </div>
      </section>

      {/* Concept cards */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((concept, i) => (
            <div
              key={concept.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <ConceptCard concept={concept} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick guide */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 md:p-12">
            <h2
              className="text-xl text-[#0c1220] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Comment evaluer chaque direction
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center mb-3">
                  <span className="text-[#0c1220] font-bold text-sm">01</span>
                </div>
                <h3 className="font-semibold text-[#0c1220] text-sm mb-1">
                  Ouvrez le concept
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Chaque page est une homepage complete. Scrollez pour voir
                  toutes les sections.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center mb-3">
                  <span className="text-[#0c1220] font-bold text-sm">02</span>
                </div>
                <h3 className="font-semibold text-[#0c1220] text-sm mb-1">
                  Evaluez l&apos;emotion
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Quelle direction reflete le mieux l&apos;identite de
                  Be&apos;energies et inspire confiance ?
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center mb-3">
                  <span className="text-[#0c1220] font-bold text-sm">03</span>
                </div>
                <h3 className="font-semibold text-[#0c1220] text-sm mb-1">
                  Comparez
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Utilisez la page de comparaison pour voir les 3 directions
                  cote a cote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
