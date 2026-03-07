import type { Metadata } from "next";
import Link from "next/link";
import { concepts } from "../data";

export const metadata: Metadata = {
  title: "Comparaison des directions | Be'energies Design Showcase",
};

function PaletteRow({ concept }: { concept: (typeof concepts)[0] }) {
  return (
    <div className="flex items-center gap-2">
      {concept.palette.map((c) => (
        <div key={c.hex} className="flex items-center gap-1.5">
          <div
            className="w-5 h-5 rounded-full border border-[#e2e8f0]"
            style={{ background: c.hex }}
          />
          <span className="text-[10px] text-[#94a3b8] font-mono">{c.name}</span>
        </div>
      ))}
    </div>
  );
}

const comparisonAxes = [
  {
    axis: "Cible principale",
    values: [
      "Proprietaires analytiques, comparateurs de devis",
      "Proprietaires relationnels, amateurs de savoir-faire local",
      "Decideurs B2B, PME, syndics, profils techniques",
    ],
  },
  {
    axis: "Emotion dominante",
    values: [
      "Autorite et confiance technique",
      "Proximite et chaleur humaine",
      "Competence et fiabilite industrielle",
    ],
  },
  {
    axis: "Style visuel",
    values: [
      "Rapport de terrain premium, donnees chiffrees",
      "Artisanal chaleureux, narration, tons naturels",
      "Dashboard industriel, geometrie stricte",
    ],
  },
  {
    axis: "Biais psychologique active",
    values: [
      "Biais d'autorite (document officiel = competence)",
      "Biais de proximite (artisan local = confiance)",
      "Biais de competence (interface pro = fiabilite)",
    ],
  },
  {
    axis: "CTA style",
    values: [
      "Amber glow, engagement progressif",
      "Terracotta arrondi, invitation chaleureuse",
      "Cyan signal, action systeme",
    ],
  },
  {
    axis: "Risque principal",
    values: [
      "Peut paraitre froid si pas assez de photos reelles",
      "Peut paraitre trop doux face a un concurrent technique",
      "Peut intimider les particuliers residentiels",
    ],
  },
  {
    axis: "Meilleur pour",
    values: [
      "Mix residentiel + pro, approche universelle",
      "Residentiel pur, relation de confiance",
      "B2B, syndics, collectivites",
    ],
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/showcase/"
              className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#0c1220] transition-colors"
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
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Retour au showcase
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0c1220] flex items-center justify-center">
              <span className="text-[#f59e0b] font-bold text-sm">B</span>
            </div>
            <span className="text-[#94a3b8] text-xs">Comparaison</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl text-[#0c1220] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Comparaison des 3 directions
          </h1>
          <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
            Chaque direction a ete concue pour activer un levier psychologique
            different. Voici leurs forces, risques, et audiences ideales.
          </p>
        </div>
      </section>

      {/* Direction overview cards */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <Link
              key={concept.slug}
              href={`/showcase/${concept.slug}/`}
              className="group rounded-xl border border-[#e2e8f0] bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="h-3"
                style={{ background: concept.palette[1].hex }}
              />
              <div className="p-6">
                <h2
                  className="text-xl text-[#0c1220] tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {concept.title}
                </h2>
                <p className="text-sm text-[#64748b] mb-4">
                  {concept.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {concept.moodKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#f8fafc] text-[#64748b] border border-[#e2e8f0]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Typography */}
                <div className="space-y-1 mb-4">
                  {concept.typography.map((t) => (
                    <div
                      key={t.role}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-[#94a3b8]">{t.role}</span>
                      <span className="text-[#0c1220] font-medium">
                        {t.font}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Palette */}
                <PaletteRow concept={concept} />

                <div className="mt-4 pt-4 border-t border-[#e2e8f0] text-xs text-[#06b6d4] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir le concept complet →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl text-[#0c1220] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Analyse comparative detaillee
          </h2>

          <div className="rounded-xl border border-[#e2e8f0] bg-white overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr] border-b border-[#e2e8f0] bg-[#f8fafc]">
              <div className="p-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                Critere
              </div>
              {concepts.map((c) => (
                <div
                  key={c.slug}
                  className="p-4 text-xs font-semibold text-[#0c1220] border-l border-[#e2e8f0]"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: c.palette[1].hex }}
                    />
                    {c.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Table rows */}
            {comparisonAxes.map((row, i) => (
              <div
                key={row.axis}
                className="grid grid-cols-[200px_1fr_1fr_1fr]"
                style={{
                  background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                }}
              >
                <div className="p-4 text-sm font-medium text-[#0c1220]">
                  {row.axis}
                </div>
                {row.values.map((val, j) => (
                  <div
                    key={j}
                    className="p-4 text-sm text-[#64748b] leading-relaxed border-l border-[#e2e8f0]"
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 border-[#f59e0b]/30 bg-[#f59e0b]/5 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm font-semibold text-[#d97706] uppercase tracking-wider">
                Recommandation
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl text-[#0c1220] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Direction A : Rapport de Terrain
            </h2>
            <div className="space-y-4 text-[#2a3444] leading-relaxed">
              <p>
                <strong>Pourquoi cette direction ?</strong> Elle exploite le
                principal avantage concurrentiel de Be&apos;energies &mdash; le parcours
                d&apos;inspecteur de Benoit &mdash; et le transforme en langage visuel.
                Le positionnement &ldquo;rapport de terrain&rdquo; est unique sur le
                marche belge de l&apos;energie, ou les concurrents oscillent entre
                corporate froid et marketing agressif.
              </p>
              <p>
                <strong>Universalite.</strong> Contrairement a &ldquo;Atelier
                Solaire&rdquo; (trop residentiel) ou &ldquo;Controle Technique&rdquo;
                (trop B2B), cette direction fonctionne pour les deux audiences.
                Les proprietaires y trouvent la credibilite technique, les
                professionnels la rigueur documentee.
              </p>
              <p>
                <strong>Implementabilite.</strong> Cette direction s&apos;appuie sur 80%
                du design system deja en place (DM Serif Display + Plus Jakarta
                Sans, palette midnight/amber). L&apos;ajout de cyan et de JetBrains
                Mono complete le systeme sans le remettre en cause.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/showcase/rapport-de-terrain/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0c1220] text-white text-sm font-semibold hover:bg-[#1a2332] transition-colors"
              >
                Revoir le concept recommande
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/showcase/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#e2e8f0] text-sm text-[#64748b] hover:text-[#0c1220] transition-colors"
              >
                Retour au showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile comparison (stacked for small screens) */}
      <section className="pb-20 px-6 md:hidden">
        <div className="max-w-lg mx-auto space-y-6">
          <h2
            className="text-xl text-[#0c1220] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Resume par direction
          </h2>
          {concepts.map((concept) => (
            <div
              key={concept.slug}
              className="rounded-xl border border-[#e2e8f0] bg-white p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: concept.palette[1].hex }}
                />
                <h3 className="font-semibold text-[#0c1220]">
                  {concept.title}
                </h3>
              </div>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                {concept.rationale}
              </p>
              <div className="space-y-2">
                {comparisonAxes.map((row) => {
                  const idx = concepts.indexOf(concept);
                  return (
                    <div key={row.axis}>
                      <span className="text-xs font-medium text-[#0c1220]">
                        {row.axis}:
                      </span>{" "}
                      <span className="text-xs text-[#64748b]">
                        {row.values[idx]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
