import { services, reviews, realizations, piegesTeaser, coverageZones } from "../../data";

/* ──────────────────────────────────────────────
   CONCEPT A: RAPPORT DE TERRAIN
   Technical documentation meets editorial authority.
   Inspector's field report as visual language.
   ────────────────────────────────────────────── */

const stats = [
  { value: "487", label: "installations", suffix: "+" },
  { value: "12", label: "ans d'experience", suffix: "" },
  { value: "4.8", label: "satisfaction client", suffix: "/5" },
  { value: "98", label: "conformes au 1er controle", suffix: "%" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
      <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#06b6d4]">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#06b6d4]/20" />
    </div>
  );
}

export default function RapportDeTerrain() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        background: "#ffffff",
        color: "#0c1220",
      }}
    >
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: "#0c1220" }}
      >
        {/* Diagonal hatch pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #06b6d4 10px,
              #06b6d4 11px
            )`,
          }}
        />

        {/* Radial accent */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #f59e0b 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            {/* Report badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#06b6d4]/30 bg-[#06b6d4]/5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#06b6d4]">
                Ancien inspecteur RESCERT
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] text-white tracking-tight"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              L&apos;installateur qui a d&apos;abord ete{" "}
              <span className="text-[#f59e0b]">l&apos;inspecteur</span>
            </h1>

            <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed max-w-xl">
              Benoit Dezso a inspecte des centaines d&apos;installations avant de creer
              Be&apos;energies. Il a vu les erreurs, les raccourcis, les dangers.
              Aujourd&apos;hui, il concoit des installations qui passent le controle du
              premier coup.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg text-[#0c1220] font-semibold text-sm transition-all duration-300"
                style={{
                  background: "#f59e0b",
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)",
                }}
              >
                Diagnostic energetique gratuit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="tel:+3212394237"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-white text-sm border border-white/20 hover:border-white/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +32 12 39 42 37
              </a>
            </div>
          </div>

          {/* Right: Data proof block */}
          <div className="hidden lg:block">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="text-[10px] font-mono tracking-[0.15em] text-[#94a3b8] uppercase">
                  Chiffres verifies
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-baseline gap-0.5">
                      <span
                        className="text-3xl font-bold text-white"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[#f59e0b] text-lg font-bold">
                        {stat.suffix}
                      </span>
                    </div>
                    <span className="text-xs text-[#64748b] mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge: dotted line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundImage: "repeating-linear-gradient(to right, #06b6d4 0, #06b6d4 4px, transparent 4px, transparent 12px)" }} />
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-6 border-b border-[#e2e8f0]" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            "Certifie RESCERT",
            "Ancien inspecteur electrique",
            "Installateur agree",
            "Garantie decennale",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-[#64748b]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM/SOLUTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Le contexte en 2026</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-3xl md:text-4xl tracking-tight leading-[1.15]"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Les panneaux solaires sont-ils encore{" "}
                <span className="text-[#f59e0b]">rentables</span> ?
              </h2>
              <p className="mt-6 text-[#64748b] leading-relaxed">
                Tarif prosumer, compteur intelligent, fin du compteur qui tourne a
                l&apos;envers... Le marche a change. Mais la rentabilite est toujours
                la &mdash; si l&apos;installation est bien dimensionnee. C&apos;est
                exactement ce que font la plupart des installateurs mal.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  myth: "Les panneaux ne sont plus rentables",
                  reality:
                    "Retour sur investissement de 5 a 7 ans. Rentabilite de 10-15% par an sur 25 ans.",
                },
                {
                  myth: "Le compteur intelligent supprime l'avantage",
                  reality:
                    "L'autoconsommation directe reste a 100% de valeur. La cle : bien dimensionner.",
                },
                {
                  myth: "Le tarif prosumer annule les economies",
                  reality:
                    "Il represente 38c/jour pour 5 kWc. L'economie nette reste largement positive.",
                },
              ].map((item) => (
                <div
                  key={item.myth}
                  className="rounded-lg border border-[#e2e8f0] p-5 hover:border-[#06b6d4]/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#ef4444]/10 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0c1220]">
                        &ldquo;{item.myth}&rdquo;
                      </p>
                      <p className="text-sm text-[#64748b] mt-1 leading-relaxed">
                        {item.reality}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Nos expertises</SectionLabel>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Des solutions energetiques{" "}
            <span className="text-[#f59e0b]">completes</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group relative rounded-xl border border-[#e2e8f0] bg-white p-7 transition-all duration-300 hover:border-[#f59e0b]/30 hover:shadow-[0_8px_30px_-8px_rgba(245,158,11,0.12)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0c1220] flex items-center justify-center">
                    <span className="text-[#f59e0b] text-xs font-mono font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0c1220]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER / INSPECTOR INSIGHT ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Le fondateur</SectionLabel>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[3/4] rounded-xl bg-[#0c1220] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    #06b6d4 10px,
                    #06b6d4 11px
                  )`,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] font-mono tracking-[0.15em] text-[#06b6d4] uppercase mb-2">
                  Fondateur
                </div>
                <div
                  className="text-2xl text-white"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Benoit Dezso
                </div>
                <div className="text-sm text-[#94a3b8] mt-1">
                  Ancien inspecteur en conformite electrique
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl tracking-tight leading-[1.15] mb-6"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                &ldquo;J&apos;ai vu assez d&apos;erreurs pour ne jamais en
                commettre&rdquo;
              </h2>
              {/* Inspector insight callout */}
              <div className="rounded-lg border-l-4 border-[#06b6d4] bg-[#06b6d4]/5 p-6 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-[11px] font-mono tracking-[0.15em] text-[#06b6d4] uppercase">
                    Insight inspecteur
                  </span>
                </div>
                <p className="text-sm text-[#2a3444] leading-relaxed">
                  En tant qu&apos;inspecteur RESCERT, j&apos;ai recale des dizaines
                  d&apos;installations pour des erreurs evitables : sections de cable
                  inadaptees, protections manquantes, mises a la terre defaillantes.
                  Aujourd&apos;hui, chaque installation que je concois est pensee pour
                  le controle avant d&apos;etre pensee pour la vente.
                </p>
              </div>
              <p className="text-[#64748b] leading-relaxed">
                Quand Benoit visite votre maison, il ne regarde pas seulement votre
                toit. Il inspecte votre tableau electrique, verifie la tension reseau,
                evalue la compatibilite de votre installation existante. C&apos;est ce
                qui fait la difference entre un devis rapide et un projet qui
                fonctionne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#0c1220" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Temoignages verifies</SectionLabel>
          <h2
            className="text-3xl md:text-4xl tracking-tight text-white mb-12"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Ce que disent nos clients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white font-medium">
                      {review.name}
                    </div>
                    <div className="text-xs text-[#64748b]">
                      {review.location}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#06b6d4] tracking-wider uppercase px-2 py-1 rounded border border-[#06b6d4]/20">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REALIZATIONS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Realisations recentes</SectionLabel>
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-3xl md:text-4xl tracking-tight"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Projets verifies,{" "}
              <span className="text-[#f59e0b]">documentes</span>
            </h2>
            <span className="hidden md:inline text-sm text-[#06b6d4] font-medium cursor-pointer hover:underline">
              Voir toutes les realisations →
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {realizations.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-[#e2e8f0] overflow-hidden group hover:border-[#f59e0b]/30 transition-colors"
              >
                <div className="aspect-[16/10] bg-[#f8fafc] relative">
                  <div className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-mono bg-white/90 text-[#0c1220] backdrop-blur">
                    {project.type}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#64748b] mb-1 flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </div>
                  <h3 className="font-semibold text-[#0c1220] mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      className="text-sm font-semibold text-[#0c1220]"
                      style={{ fontFamily: "monospace" }}
                    >
                      {project.keyFigure}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIEGES A EVITER ── */}
      <section
        className="py-20 md:py-28 px-6 md:px-12"
        style={{
          background: "linear-gradient(135deg, #0c1220 0%, #1a2332 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Pieges a eviter</SectionLabel>
          <h2
            className="text-3xl md:text-4xl tracking-tight text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Ce que Benoit a vu{" "}
            <span className="text-[#f59e0b]">sur le terrain</span>
          </h2>
          <p className="text-[#94a3b8] mb-12 max-w-2xl">
            En tant qu&apos;inspecteur, Benoit a documente les erreurs les plus
            frequentes. Voici les pieges que vous devez connaitre avant de signer
            un devis.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {piegesTeaser.map((piege, i) => (
              <div
                key={piege.title}
                className="rounded-xl border border-[#ef4444]/20 bg-[#ef4444]/5 p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className="text-[10px] font-mono tracking-wider text-[#ef4444] uppercase">
                    Piege {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2">{piege.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {piege.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-sm text-[#06b6d4] font-medium cursor-pointer hover:underline">
              Lire le guide complet des pieges a eviter →
            </span>
          </div>
        </div>
      </section>

      {/* ── LOCAL COVERAGE ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Zone d&apos;intervention</SectionLabel>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Wallonie, Bruxelles,{" "}
            <span className="text-[#f59e0b]">Limbourg</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {coverageZones.map((zone) => (
              <div
                key={zone.region}
                className="rounded-xl border border-[#e2e8f0] p-6"
              >
                <h3 className="font-semibold text-[#0c1220] mb-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {zone.region}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {zone.cities}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        id="diagnostic"
        className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden"
        style={{ background: "#0c1220" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #f59e0b 10px,
              #f59e0b 11px
            )`,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#f59e0b]/30 bg-[#f59e0b]/5 mb-6">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#f59e0b] uppercase">
              Gratuit &middot; Sans engagement
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl tracking-tight text-white mb-6"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Votre diagnostic energetique,{" "}
            <span className="text-[#f59e0b]">par un ancien inspecteur</span>
          </h2>
          <p className="text-lg text-[#94a3b8] mb-10 max-w-xl mx-auto">
            Benoit se deplace chez vous, analyse votre installation, et vous remet
            un rapport personnalise. Devis detaille sous 48h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-[#0c1220] font-semibold transition-all duration-300"
              style={{
                background: "#f59e0b",
                boxShadow: "0 0 40px rgba(245, 158, 11, 0.3)",
              }}
            >
              Demander mon diagnostic gratuit
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contacter via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CONCEPT NOTE ── */}
      <section className="py-12 px-6 md:px-12 border-t border-[#e2e8f0]" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#06b6d4]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#06b6d4]">
              Note de conception
            </span>
          </div>
          <h3 className="font-semibold text-[#0c1220] mb-2">
            Psychologie d&apos;audience ciblee
          </h3>
          <p className="text-sm text-[#64748b] leading-relaxed mb-4">
            <strong>Rapport de Terrain</strong> cible les proprietaires analytiques qui comparent
            plusieurs devis. Ces clients veulent des preuves, pas des promesses.
            Le style &ldquo;rapport d&apos;inspection&rdquo; active un biais d&apos;autorite :
            si le site ressemble a un document technique officiel, le visiteur
            attribue inconsciemment plus de competence a l&apos;entreprise.
          </p>
          <h3 className="font-semibold text-[#0c1220] mb-2">
            Logique de conversion
          </h3>
          <p className="text-sm text-[#64748b] leading-relaxed">
            L&apos;architecture de preuve (chiffres reels, cas documentes, badges de
            conformite) reduit les objections avant qu&apos;elles ne surviennent.
            Le rythme CTA alterne entre diagnostic gratuit (engagement faible) et
            appel direct (engagement fort), maximisant les conversions a chaque
            niveau de decision.
          </p>
        </div>
      </section>
    </div>
  );
}
