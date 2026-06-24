import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { DataSources } from "@/components/sections/DataSources";
import { DecisionDashboard } from "@/components/sections/DecisionDashboard";

/**
 * RentabilityObjection2026
 *
 * Homepage decision frame for the PV 2026 question. Instead of debating the
 * objection rhetorically, we lay out three visual decision cards — avant
 * 2024, après 2024, ce qui compte vraiment — so the visitor reads the
 * regulatory shift as a clean before/after/answer, with the "answer" card
 * (carte 03) styled as the converting tile.
 *
 * Placed between ServiceCardGrid (bg-ivory) and FounderCredibility so the
 * warm gradient breaks the ivory rhythm and signals "this is the part you
 * actually came here to read".
 */

type CardTone = "light" | "dark" | "warm";

type Card = {
  number: "01" | "02" | "03";
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  link: { href: string; label: string };
  tone: CardTone;
};

const CARDS: Card[] = [
  {
    number: "01",
    eyebrow: "Avant 2024",
    title: "Compensation + tarif prosumer",
    body: (
      <>
        Le compteur tourne à l&apos;envers. Vous payez le tarif prosumer en
        contrepartie. Régime maintenu jusqu&apos;au{" "}
        <strong>31 décembre 2030</strong> pour les installations mises en
        service avant le 01/01/2024.
      </>
    ),
    link: {
      href: "/guides/prix-panneaux-solaires-wallonie-2026/",
      label: "Lire le détail",
    },
    tone: "light",
  },
  {
    number: "02",
    eyebrow: "Après 2024",
    title: "Compteur communicant + autoconsommation",
    body: (
      <>
        Le compteur communicant sépare injection et prélèvement. La
        rentabilité vient de ce que vous consommez quand vos panneaux
        produisent. L&apos;injection est revendue, mais plus faiblement.
      </>
    ),
    link: {
      href: "/guides/tarif-impact-wallonie-explication/",
      label: "Lire le détail",
    },
    tone: "dark",
  },
  {
    number: "03",
    eyebrow: "Ce qui compte vraiment",
    title: "Dimensionnement + profil de consommation",
    body: (
      <>
        Ce n&apos;est plus la surface de la toiture qui décide, c&apos;est
        votre consommation réelle. Une installation bien dimensionnée sur
        votre profil reste largement rentable. Surdimensionner ne paie plus.
      </>
    ),
    link: {
      href: "/devis-analyse/",
      label: "Faire vérifier mon projet",
    },
    tone: "warm",
  },
];

const TONE_STYLES: Record<
  CardTone,
  {
    card: string;
    eyebrow: string;
    title: string;
    body: string;
    badge: string;
    link: string;
  }
> = {
  light: {
    card: "bg-white border-[1.5px] border-midnight/12 shadow-[0_1px_2px_rgba(12,18,32,0.04),0_8px_24px_-12px_rgba(12,18,32,0.12)]",
    eyebrow: "text-midnight",
    title: "text-midnight",
    body: "text-charcoal",
    // step-badge solves the "01 quasi invisible" complaint: solid amber
    // disc with ivory halo so it punches through the section bg.
    badge: "step-badge step-badge-on-light",
    link: "text-amber-dark hover:text-midnight",
  },
  dark: {
    card: "bg-midnight text-white border-[1.5px] border-amber/30 shadow-[0_8px_24px_-8px_rgba(12,18,32,0.4)]",
    eyebrow: "text-amber-light",
    title: "text-white",
    body: "text-white/90",
    badge: "step-badge step-badge-on-dark",
    link: "text-amber-light hover:text-white",
  },
  warm: {
    card: "bg-warm-gradient border-[1.5px] border-amber/45 shadow-[0_1px_2px_rgba(245,158,11,0.06),0_8px_24px_-12px_rgba(245,158,11,0.18)]",
    eyebrow: "text-midnight",
    title: "text-midnight",
    body: "text-charcoal",
    badge: "step-badge step-badge-on-light",
    link: "text-amber-dark hover:text-midnight",
  },
};

export function RentabilityObjection2026() {
  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-be">
        <div className="max-w-3xl">
          <SectionLabel>Photovoltaïque 2026</SectionLabel>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
            Ce qui a changé, et ce qui compte vraiment
          </h2>
          <p className="mt-4 text-charcoal leading-relaxed text-[17px]">
            Le compteur communicant a redéfini le calcul de rentabilité — voici les trois points qui décident vraiment.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <DecisionDashboard
            steps={[
              { number: "01", label: "Avant 2024", tone: "neutral" },
              { number: "02", label: "Après 2024", tone: "accent" },
              {
                number: "03",
                label: "Ce qui compte vraiment",
                tone: "decision",
              },
            ]}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {CARDS.map(({ number, eyebrow, title, body, link, tone }, idx) => {
                const t = TONE_STYLES[tone];
                return (
                  <article
                    key={number}
                    className={`rounded-2xl p-6 md:p-7 flex flex-col h-full relative reveal reveal-${idx + 1} ${t.card}`}
                  >
                    {/* Top row: amber circle badge with the step number plus
                        the eyebrow label. The badge anchors the scan path
                        and lets the three cards read as a sequence: 01 → 02
                        → 03. The meta-rail above echoes this sequence at
                        section altitude. */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <span className={t.badge}>{number}</span>
                      <span
                        className={`text-[13px] font-bold tracking-[0.14em] uppercase ${t.eyebrow}`}
                      >
                        {eyebrow}
                      </span>
                    </div>
                    <h3
                      className={`text-[18px] md:text-xl font-[family-name:var(--font-heading)] leading-snug ${t.title}`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-3 text-[15px] md:text-[15.5px] leading-relaxed ${t.body}`}
                    >
                      {body}
                    </p>
                    <Link
                      href={link.href}
                      className={`mt-auto pt-5 inline-flex items-center gap-1.5 text-[14px] font-bold underline underline-offset-4 decoration-[1.5px] decoration-amber/40 hover:decoration-amber transition-colors ${t.link}`}
                    >
                      {link.label}
                      <ArrowRightIcon size={14} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </DecisionDashboard>
        </div>

        <DataSources
          className="max-w-3xl"
          sources="CWaPE, GRD wallons, fournisseurs d'énergie, retours terrain Be'energies"
        />

        {/* Single-line conversion tail: the cards already structured the
            decision; here we just offer the personalised next step in one
            sentence rather than a button row. */}
        <p className="mt-8 text-[15px] text-charcoal">
          Vous voulez le calcul pour votre cas ?{" "}
          <Link
            href="/contact/"
            className="font-semibold text-amber-dark hover:text-midnight underline underline-offset-4 decoration-amber/60 hover:decoration-midnight transition-colors"
          >
            Demander un diagnostic
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
