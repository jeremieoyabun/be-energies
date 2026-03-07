import { services, reviews, realizations, piegesTeaser, coverageZones } from "../../data";

/* ──────────────────────────────────────────────
   CONCEPT C: CONTROLE TECHNIQUE
   Engineering precision. Dashboard-inspired.
   Industrial control quality meets energy services.
   ────────────────────────────────────────────── */

const metrics = [
  { value: "487", unit: "+", label: "Installations", status: "operational" },
  { value: "12", unit: "ans", label: "Experience", status: "operational" },
  { value: "4.8", unit: "/5", label: "Satisfaction", status: "optimal" },
  { value: "98", unit: "%", label: "Conformite 1er ctrl", status: "optimal" },
];

function StatusDot({ status }: { status: string }) {
  const color = status === "optimal" ? "#22c55e" : "#06b6d4";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: color }}
      />
      <span
        className="text-[9px] font-mono uppercase tracking-[0.15em]"
        style={{ color }}
      >
        {status}
      </span>
    </span>
  );
}

export default function ControleTechnique() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        background: "#09090b",
        color: "#fafafa",
      }}
    >
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0">
          {/* Vertical grid lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v${i}`}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${(i + 1) * 8.33}%`,
                background: "rgba(6, 182, 212, 0.06)",
              }}
            />
          ))}
          {/* Horizontal grid lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h${i}`}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${(i + 1) * 12.5}%`,
                background: "rgba(6, 182, 212, 0.06)",
              }}
            />
          ))}
        </div>

        {/* Cyan gradient bloom */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] opacity-10"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
            <div>
              {/* System status */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-[#06b6d4]/20 bg-[#06b6d4]/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.15em] text-[#06b6d4] uppercase">
                  Systeme certifie RESCERT
                </span>
                <span className="text-[11px] font-mono text-[#52525b]">|</span>
                <span className="text-[11px] font-mono text-[#52525b]">
                  v12.0 &mdash; 487 installations
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
              >
                <span className="text-[#fafafa]">Precision technique.</span>
                <br />
                <span className="text-[#06b6d4]">Performance verifiee.</span>
              </h1>

              <p className="mt-6 text-[#a1a1aa] leading-relaxed max-w-xl text-lg">
                Be&apos;energies applique les standards de controle qualite d&apos;un
                ancien inspecteur certifie RESCERT a chaque installation. Chaque cable, chaque
                connexion, chaque dimensionnement est verifie.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#diagnostic"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-md font-semibold text-sm text-[#09090b] transition-all duration-300"
                  style={{
                    background: "#06b6d4",
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#09090b]" />
                  Lancer un diagnostic
                </a>
                <a
                  href="tel:+3212394237"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-sm border border-[#27272a] text-[#a1a1aa] hover:border-[#06b6d4]/40 hover:text-[#06b6d4] transition-colors font-mono"
                >
                  TEL +32.12.39.42.37
                </a>
              </div>
            </div>

            {/* Right: Metrics panel */}
            <div className="hidden lg:block">
              <div className="rounded-lg border border-[#27272a] bg-[#09090b] overflow-hidden">
                <div className="px-5 py-3 border-b border-[#27272a] flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.15em] text-[#52525b] uppercase">
                    Performance Dashboard
                  </span>
                  <StatusDot status="operational" />
                </div>
                <div className="grid grid-cols-2">
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className="p-5 border-b border-r border-[#27272a]"
                      style={{
                        borderRight: i % 2 === 1 ? "none" : undefined,
                        borderBottom: i >= 2 ? "none" : undefined,
                      }}
                    >
                      <StatusDot status={m.status} />
                      <div className="mt-2 flex items-baseline gap-1">
                        <span
                          className="text-3xl font-bold text-[#fafafa]"
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {m.value}
                        </span>
                        <span className="text-[#06b6d4] text-sm font-mono">
                          {m.unit}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#52525b] font-mono mt-1 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-y border-[#27272a] py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { label: "RESCERT", icon: "shield" },
            { label: "Garantie decennale", icon: "check" },
            { label: "Inspecteur certifie", icon: "check" },
            { label: "Installateur agree", icon: "check" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-xs font-mono text-[#a1a1aa] tracking-wider uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM/SOLUTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase">
              // Analyse marche 2026
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-3xl md:text-4xl tracking-tight leading-[1.1]"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
              >
                Rentabilite photovoltaique :{" "}
                <span className="text-[#06b6d4]">statut verifie</span>
              </h2>
              <p className="mt-6 text-[#a1a1aa] leading-relaxed">
                Le marche a change. Tarif prosumer, compteur intelligent, nouvelles
                regles de compensation. Mais les donnees sont claires : un systeme
                bien dimensionne reste l&apos;un des meilleurs investissements
                energetiques disponibles.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: "ROI", value: "5-7 ans", status: "VALIDE", color: "#22c55e" },
                { label: "Rendement annuel", value: "~12%", status: "OPTIMAL", color: "#22c55e" },
                { label: "Prosumer 5kWc", value: "0.38 EUR/j", status: "CONTROLLE", color: "#06b6d4" },
                { label: "Duree vie", value: "25+ ans", status: "GARANTI", color: "#22c55e" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-4 rounded-md border border-[#27272a] bg-[#09090b]/50"
                >
                  <span className="text-sm text-[#a1a1aa] font-mono">
                    {row.label}
                  </span>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-sm font-bold font-mono"
                      style={{ color: "#fafafa" }}
                    >
                      {row.value}
                    </span>
                    <span
                      className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border"
                      style={{
                        color: row.color,
                        borderColor: `${row.color}33`,
                        background: `${row.color}0d`,
                      }}
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase">
              // Modules disponibles
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
          >
            Services <span className="text-[#06b6d4]">certifies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group rounded-lg border border-[#27272a] bg-[#09090b] p-6 transition-all duration-300 hover:border-[#06b6d4]/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#52525b] tracking-wider">
                    MODULE_{String(i + 1).padStart(2, "0")}
                  </span>
                  <StatusDot status="operational" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#fafafa] mb-2"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[#27272a] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-[#06b6d4] font-mono tracking-wider">
                    DETAILS →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            {/* Profile card */}
            <div className="rounded-lg border border-[#27272a] overflow-hidden">
              <div className="aspect-[3/4] bg-[#18181b] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <StatusDot status="operational" />
                </div>
              </div>
              <div className="p-5 border-t border-[#27272a]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-mono text-[#52525b]">
                      OPERATEUR_PRINCIPAL
                    </div>
                    <div
                      className="text-lg font-semibold text-[#fafafa] mt-1"
                      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                    >
                      Benoit Dezso
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border border-[#22c55e]/20 bg-[#22c55e]/5 text-[#22c55e]">
                      CERTIFIE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase">
                  // Profil operateur
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl tracking-tight leading-[1.1] mb-6"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
              >
                Ancien inspecteur.
                <br />
                <span className="text-[#06b6d4]">Zero tolerance pour l&apos;a-peu-pres.</span>
              </h2>

              {/* Technical callout */}
              <div className="rounded-md border-l-2 border-[#06b6d4] bg-[#06b6d4]/5 px-5 py-4 mb-6">
                <div className="text-[9px] font-mono tracking-wider text-[#06b6d4] uppercase mb-2">
                  Protocole inspecteur
                </div>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  En tant qu&apos;ancien inspecteur certifie RESCERT, Benoit a recale des installations
                  pour des sections de cable inadaptees, des protections manquantes, des
                  mises a la terre defaillantes. Aujourd&apos;hui, il concoit chaque
                  installation pour passer le controle — parce qu&apos;il sait exactement
                  ce qui sera verifie.
                </p>
              </div>

              <p className="text-[#a1a1aa] leading-relaxed">
                Quand Benoit visite votre site, il ne fait pas un devis rapide.
                Il lance un audit complet : tableau electrique, tension reseau,
                compatibilite, orientation, ombrage. C&apos;est ce protocole qui
                garantit des resultats, pas des surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase">
              // Retours clients verifies
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
          >
            Temoignages
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-lg border border-[#27272a] bg-[#09090b] p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#06b6d4" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border border-[#22c55e]/20 bg-[#22c55e]/5 text-[#22c55e]">
                    VERIFIE
                  </span>
                </div>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5 font-mono text-[13px]">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#fafafa]">{review.name}</span>
                  <span className="text-[#52525b]">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REALIZATIONS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase block mb-3">
                // Projets documentes
              </span>
              <h2
                className="text-3xl md:text-4xl tracking-tight"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
              >
                Realisations
              </h2>
            </div>
            <span className="hidden md:inline text-xs font-mono text-[#06b6d4] tracking-wider cursor-pointer hover:underline">
              VOIR_TOUT →
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {realizations.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border border-[#27272a] overflow-hidden group hover:border-[#06b6d4]/30 transition-colors"
              >
                <div className="aspect-[16/10] bg-[#18181b] relative">
                  <div className="absolute top-3 left-3 px-2 py-1 rounded text-[9px] font-mono tracking-wider bg-[#09090b]/90 text-[#06b6d4] border border-[#27272a] backdrop-blur">
                    {project.type.toUpperCase()}
                  </div>
                </div>
                <div className="p-5 border-t border-[#27272a]">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#52525b] mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </div>
                  <h3
                    className="font-semibold text-[#fafafa] mb-2"
                    style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs font-mono text-[#22c55e]">
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
        className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a]"
        style={{
          background: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#ef4444] uppercase">
              // Alertes terrain
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
          >
            Pieges <span className="text-[#ef4444]">detectes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {piegesTeaser.map((piege, i) => (
              <div
                key={piege.title}
                className="rounded-lg border border-[#ef4444]/20 bg-[#ef4444]/[0.03] p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className="text-[9px] font-mono tracking-wider text-[#ef4444] uppercase">
                    ALERTE_{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="text-[#fafafa] font-semibold mb-2"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  {piege.title}
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {piege.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL COVERAGE ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase">
              // Zone de couverture
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
          >
            Couverture <span className="text-[#06b6d4]">geographique</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {coverageZones.map((zone) => (
              <div
                key={zone.region}
                className="rounded-lg border border-[#27272a] p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h3
                    className="font-semibold text-[#fafafa]"
                    style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                  >
                    {zone.region}
                  </h3>
                </div>
                <p className="text-sm text-[#71717a] leading-relaxed font-mono text-[13px]">
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
        className="py-20 md:py-28 px-6 md:px-12 border-t border-[#27272a] relative overflow-hidden"
      >
        {/* Grid bg */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${(i + 1) * 16.6}%`,
                background: "rgba(6, 182, 212, 0.05)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#06b6d4]/20 bg-[#06b6d4]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#06b6d4] uppercase">
              Diagnostic gratuit &middot; Sans engagement
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700 }}
          >
            Lancez votre{" "}
            <span className="text-[#06b6d4]">diagnostic technique</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-10 max-w-xl mx-auto">
            Audit complet de votre installation par un ancien inspecteur, certifie RESCERT.
            Rapport personnalise et devis detaille sous 48h.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md font-semibold text-[#09090b] transition-all duration-300"
              style={{
                background: "#06b6d4",
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#09090b]" />
              Initier le diagnostic
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-md border border-[#27272a] text-[#a1a1aa] hover:border-[#06b6d4]/40 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CONCEPT NOTE ── */}
      <section className="py-12 px-6 md:px-12 border-t border-[#27272a]" style={{ background: "#18181b" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#52525b] uppercase">
              // Note de conception
            </span>
          </div>
          <h3
            className="font-semibold text-[#fafafa] mb-2"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Psychologie d&apos;audience ciblee
          </h3>
          <p className="text-sm text-[#71717a] leading-relaxed mb-4">
            <strong className="text-[#a1a1aa]">Controle Technique</strong> cible les decideurs rationnels
            et les professionnels (PME, syndics) qui evaluent un prestataire sur sa competence
            technique plutot que sur sa sympathie. L&apos;esthetique dashboard active un biais de
            competence technique. Les indicateurs de performance et les certifications creent une
            impression de fiabilite industrielle.
          </p>
          <h3
            className="font-semibold text-[#fafafa] mb-2"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Logique de conversion
          </h3>
          <p className="text-sm text-[#71717a] leading-relaxed">
            L&apos;interface structuree comme un tableau de bord reduit la charge cognitive :
            chaque information est a sa place, chaque chiffre est mis en evidence. Le parcours
            est lineaire et efficace. Les CTAs sont presentes comme des &ldquo;actions systeme&rdquo;,
            integres naturellement dans le flux. Particulierement efficace pour les prospects B2B.
          </p>
        </div>
      </section>
    </div>
  );
}
