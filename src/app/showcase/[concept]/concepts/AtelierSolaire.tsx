import { services, reviews, realizations, piegesTeaser, coverageZones } from "../../data";

/* ──────────────────────────────────────────────
   CONCEPT B: ATELIER SOLAIRE
   Warm artisanal craftsmanship.
   The energy craftsman, not the salesperson.
   ────────────────────────────────────────────── */

const stats = [
  { value: "487", label: "installations realisees" },
  { value: "12 ans", label: "d'experience sur le terrain" },
  { value: "4.8/5", label: "satisfaction client" },
  { value: "98%", label: "conformes au 1er passage" },
];

export default function AtelierSolaire() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Source Serif 4', 'Georgia', serif",
        background: "#fffbeb",
        color: "#1c1917",
      }}
    >
      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #1c1917 0%, #292524 60%, #44403c 100%)",
        }}
      >
        {/* Organic radial glow */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] opacity-25 rounded-full"
          style={{
            background: "radial-gradient(circle, #c2410c 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] opacity-15 rounded-full"
          style={{
            background: "radial-gradient(circle, #fef3c7 0%, transparent 60%)",
          }}
        />

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="max-w-2xl">
            {/* Handwritten-style accent */}
            <p
              className="text-[#c2410c] text-lg mb-4 opacity-80"
              style={{ fontFamily: "'Caveat', cursive", fontSize: "1.4rem" }}
            >
              Fait main, fait bien.
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.08] text-[#fef3c7] tracking-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700 }}
            >
              Chaque installation est une{" "}
              <span
                className="relative inline-block"
                style={{ color: "#c2410c" }}
              >
                oeuvre
                <div className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full" style={{ background: "#c2410c", opacity: 0.4 }} />
              </span>{" "}
              de savoir-faire
            </h1>

            <p className="mt-8 text-lg text-[#a8a29e] leading-relaxed max-w-lg">
              Benoit Dezso, ancien inspecteur electrique, a fonde Be&apos;energies avec une
              conviction : une installation energetique, ca se concoit avec le meme soin
              qu&apos;un artisan met dans son meilleur ouvrage.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:brightness-110"
                style={{
                  background: "#c2410c",
                  boxShadow: "0 8px 30px -6px rgba(194, 65, 12, 0.4)",
                }}
              >
                Demander un diagnostic gratuit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="tel:+3212394237"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-[#fef3c7] text-sm border border-[#fef3c7]/20 hover:border-[#fef3c7]/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Appeler Benoit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section
        className="py-8 border-b border-[#d6d3d1]"
        style={{ background: "#fef3c7" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl font-bold text-[#1c1917]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#78716c] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM/SOLUTION ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#fffbeb" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[#c2410c] text-lg mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            La question que tout le monde se pose
          </p>
          <h2
            className="text-3xl md:text-4xl tracking-tight leading-[1.15] mb-8"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Oui, les panneaux solaires sont{" "}
            <em className="text-[#c2410c] not-italic">toujours rentables</em> en 2026
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-[#57534e] leading-relaxed">
                Le marche a change, c&apos;est vrai. Le compteur qui tourne a l&apos;envers,
                c&apos;est fini. Le tarif prosumer, c&apos;est une realite. Mais la
                rentabilite n&apos;a pas disparu — elle s&apos;est deplacee vers
                l&apos;autoconsommation.
              </p>
              <p className="text-[#57534e] leading-relaxed">
                Le vrai probleme, ce n&apos;est pas le marche. C&apos;est que
                beaucoup d&apos;installateurs dimensionnent encore comme en 2018.
                Benoit, lui, part de vos donnees reelles.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-[#e7e5e4] p-6 space-y-5">
              {[
                { label: "Retour sur investissement", value: "5-7 ans" },
                { label: "Rentabilite annuelle", value: "~12%" },
                { label: "Tarif prosumer (5 kWc)", value: "38c/jour" },
                { label: "Duree de vie garantie", value: "25+ ans" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-[#78716c]">{item.label}</span>
                  <span
                    className="text-sm font-bold text-[#1c1917]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#fefce8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[#c2410c] text-lg mb-2"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Nos savoir-faire
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Six expertises, un seul artisan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white border border-[#e7e5e4] p-7 transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(194,65,12,0.12)] hover:border-[#c2410c]/20"
              >
                <h3
                  className="text-lg font-semibold text-[#1c1917] mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#78716c] leading-relaxed">
                  {service.description}
                </p>
                {/* Organic divider */}
                <div className="mt-5 pt-4 border-t border-dashed border-[#d6d3d1]">
                  <span className="text-xs text-[#c2410c] font-medium cursor-pointer group-hover:underline">
                    Decouvrir ce service →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#fffbeb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
            {/* Photo area */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-[#292524] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#292524]/60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="text-[#fef3c7] text-sm"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem" }}
                  >
                    &ldquo;Le terrain ne ment jamais.&rdquo;
                  </p>
                </div>
              </div>
              {/* Floating credential */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-[#e7e5e4] shadow-lg px-5 py-3">
                <div className="text-[10px] uppercase tracking-wider text-[#78716c] mb-0.5">
                  Certification
                </div>
                <div className="text-sm font-bold text-[#1c1917]">
                  RESCERT
                </div>
              </div>
            </div>

            <div>
              <p
                className="text-[#c2410c] text-lg mb-3"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                L&apos;histoire de Be&apos;energies
              </p>
              <h2
                className="text-3xl md:text-4xl tracking-tight leading-[1.15] mb-6"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                De l&apos;inspection a l&apos;installation :{" "}
                <span className="text-[#c2410c]">un parcours unique</span>
              </h2>
              <div className="space-y-4 text-[#57534e] leading-relaxed">
                <p>
                  Avant de fonder Be&apos;energies, Benoit Dezso etait inspecteur en
                  conformite electrique. Il a inspecte des centaines d&apos;installations,
                  vu les raccourcis, les dangers, les fausses economies.
                </p>
                <p>
                  Cette experience forge chaque projet. Quand Benoit concoit une
                  installation, il sait deja exactement ce que l&apos;inspecteur va
                  verifier — parce qu&apos;il a ete cet inspecteur.
                </p>
              </div>

              {/* Quote block */}
              <blockquote className="mt-8 pl-6 border-l-4 border-[#c2410c]/30">
                <p className="text-lg text-[#1c1917] leading-relaxed italic">
                  &ldquo;Je ne vends pas des panneaux. Je concois des installations
                  qui tiennent la route pendant 25 ans, conformes, efficaces,
                  dimensionnees juste.&rdquo;
                </p>
                <cite className="block mt-3 text-sm text-[#78716c] not-italic">
                  — Benoit Dezso, fondateur de Be&apos;energies
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#fefce8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[#c2410c] text-lg mb-2"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Ils nous font confiance
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Temoignages de nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl bg-white border border-[#e7e5e4] p-7"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c2410c" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#57534e] leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center">
                    <span className="text-[#c2410c] font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1c1917]">
                      {review.name}
                    </div>
                    <div className="text-xs text-[#78716c]">
                      {review.location} — {review.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REALIZATIONS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#fffbeb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p
                className="text-[#c2410c] text-lg mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Nos realisations
              </p>
              <h2
                className="text-3xl md:text-4xl tracking-tight"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Du concret, pas du catalogue
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {realizations.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-[#e7e5e4] bg-white overflow-hidden"
              >
                <div className="aspect-[16/10] bg-[#f5f5f4] relative">
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs bg-white/90 text-[#1c1917] backdrop-blur border border-[#e7e5e4]">
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#c2410c] font-medium">
                    {project.type}
                  </span>
                  <h3
                    className="mt-1 text-lg font-semibold text-[#1c1917]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {project.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#65a30d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-medium text-[#65a30d]">
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
        style={{ background: "#292524" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[#c2410c] text-lg mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            L&apos;oeil de l&apos;inspecteur
          </p>
          <h2
            className="text-3xl md:text-4xl tracking-tight text-[#fef3c7] mb-4"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Pieges a eviter avant de signer un devis
          </h2>
          <p className="text-[#a8a29e] mb-12 max-w-xl">
            En 12 ans d&apos;inspections, Benoit a recense les erreurs les plus
            courantes. Protegez-vous.
          </p>

          <div className="space-y-4">
            {piegesTeaser.map((piege, i) => (
              <div
                key={piege.title}
                className="flex items-start gap-5 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-full border-2 border-[#c2410c]/40 flex items-center justify-center text-[#c2410c] font-bold"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[#fef3c7] font-semibold mb-1">
                    {piege.title}
                  </h3>
                  <p className="text-sm text-[#a8a29e] leading-relaxed">
                    {piege.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL COVERAGE ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ background: "#fffbeb" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-[#c2410c] text-lg mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Votre artisan de proximite
          </p>
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-12"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            On intervient pres de chez vous
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {coverageZones.map((zone) => (
              <div
                key={zone.region}
                className="rounded-2xl bg-white border border-[#e7e5e4] p-6 text-left"
              >
                <h3
                  className="text-lg font-semibold text-[#1c1917] mb-2"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {zone.region}
                </h3>
                <p className="text-sm text-[#78716c] leading-relaxed">
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
        style={{
          background: "linear-gradient(170deg, #1c1917 0%, #292524 100%)",
        }}
      >
        {/* Warm glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #c2410c 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-[#c2410c] text-xl mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Pret a commencer ?
          </p>
          <h2
            className="text-3xl md:text-5xl tracking-tight text-[#fef3c7] mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Votre diagnostic energetique,{" "}
            <span className="text-[#c2410c]">gratuit et sans engagement</span>
          </h2>
          <p className="text-lg text-[#a8a29e] mb-10 max-w-xl mx-auto">
            Benoit se deplace, analyse votre situation, et vous remet une
            proposition personnalisee sous 48 heures. Pas de call center, pas de
            commercial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300"
              style={{
                background: "#c2410c",
                boxShadow: "0 8px 30px -6px rgba(194, 65, 12, 0.5)",
              }}
            >
              Demander mon diagnostic gratuit
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-[#fef3c7] border border-[#fef3c7]/20 hover:border-[#fef3c7]/40 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Appeler Benoit directement
            </a>
          </div>
        </div>
      </section>

      {/* ── CONCEPT NOTE ── */}
      <section className="py-12 px-6 md:px-12 border-t border-[#e7e5e4]" style={{ background: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[#c2410c] mb-3"
            style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem" }}
          >
            Note de conception
          </p>
          <h3
            className="font-semibold text-[#1c1917] mb-2"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Psychologie d&apos;audience ciblee
          </h3>
          <p className="text-sm text-[#78716c] leading-relaxed mb-4">
            <strong>Atelier Solaire</strong> cible les proprietaires qui valorisent la relation
            humaine et le savoir-faire local. Ces clients choisissent avec leur instinct
            autant qu&apos;avec leur calculatrice. Le ton chaleureux et artisanal active
            un biais de proximite : on fait confiance a l&apos;artisan du coin plus
            qu&apos;a la multinationale.
          </p>
          <h3
            className="font-semibold text-[#1c1917] mb-2"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Logique de conversion
          </h3>
          <p className="text-sm text-[#78716c] leading-relaxed">
            La narration du fondateur cree un attachement personnel qui differencie
            Be&apos;energies de la concurrence commoditisee. Le parcours visuel guide
            le visiteur de la decouverte emotionnelle vers la preuve technique, puis
            vers le CTA. La chaleur visuelle reduit la friction de prise de contact.
          </p>
        </div>
      </section>
    </div>
  );
}
