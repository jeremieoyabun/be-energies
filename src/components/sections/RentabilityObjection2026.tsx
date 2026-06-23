import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { DataSources } from "@/components/sections/DataSources";

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
    card: "bg-ivory border border-cloud",
    eyebrow: "text-charcoal/70",
    title: "text-midnight",
    body: "text-charcoal",
    badge: "bg-amber/15 text-amber-dark",
    link: "text-amber-dark hover:text-midnight",
  },
  dark: {
    card: "bg-midnight text-white border border-midnight",
    eyebrow: "text-amber-light/80",
    title: "text-white",
    body: "text-white/85",
    badge: "bg-amber text-midnight",
    link: "text-amber-light hover:text-white",
  },
  warm: {
    card: "bg-warm-gradient border border-amber/25",
    eyebrow: "text-amber-dark",
    title: "text-midnight",
    body: "text-charcoal",
    badge: "bg-amber text-midnight",
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
            Le calcul de rentabilité a changé avec le compteur communicant.
            Trois repères simples pour vous repérer.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map(({ number, eyebrow, title, body, link, tone }) => {
            const t = TONE_STYLES[tone];
            return (
              <article
                key={number}
                className={`rounded-2xl p-6 md:p-7 flex flex-col h-full relative ${t.card}`}
              >
                {/* Top row: amber circle badge with the step number plus the
                    eyebrow label. The badge anchors the scan path and lets
                    the three cards read as a sequence: 01 → 02 → 03. */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-[12px] font-bold tabular-nums ${t.badge}`}
                  >
                    {number}
                  </span>
                  <span
                    className={`text-[11px] font-semibold tracking-[0.14em] uppercase ${t.eyebrow}`}
                  >
                    {eyebrow}
                  </span>
                </div>
                <h3
                  className={`text-[17px] md:text-lg font-[family-name:var(--font-heading)] leading-snug ${t.title}`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 text-[14.5px] leading-relaxed ${t.body}`}
                >
                  {body}
                </p>
                <Link
                  href={link.href}
                  className={`mt-auto pt-5 inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors ${t.link}`}
                >
                  {link.label}
                  <ArrowRightIcon size={13} />
                </Link>
              </article>
            );
          })}
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
