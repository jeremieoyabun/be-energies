import Link from "next/link";
import { ArrowRightIcon, CheckIcon, AlertTriangleIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { DataSources } from "@/components/sections/DataSources";

/**
 * RentabilityObjection2026
 *
 * Most installer sites bury "les panneaux ne sont plus rentables avec le
 * compteur communicant et le tarif prosumer" inside the FAQ. We name the
 * objection on the homepage (H2), resolve it in three sourced sub-blocks,
 * then CTA out to deeper pages — pattern borrowed from 1KOMMA5° and
 * Octopus Energy.
 *
 * Placed between ServiceCardGrid (bg-ivory) and FounderCredibility so the
 * warm gradient breaks the ivory rhythm and signals "this is the part you
 * actually came here to read".
 */

type Block = {
  number: "01" | "02" | "03";
  title: string;
  body: React.ReactNode;
  source: string;
  link: { href: string; label: string };
  Icon: typeof CheckIcon;
};

const BLOCKS: Block[] = [
  {
    number: "01",
    title: "Le tarif prosumer existe, mais ne tue pas la rentabilité",
    body: (
      <>
        Avant 2024, le prosumer s&apos;applique (
        <strong className="text-midnight">~85 EUR/kWe/an</strong> chez ORES).
        Comparé à l&apos;autoconsommation directe, le solde reste largement
        positif sur 25 ans.
      </>
    ),
    source: "Sources : CWaPE, grilles GRD 2026.",
    link: {
      href: "/guides/prix-panneaux-solaires-wallonie-2026/",
      label: "Voir le tarif par GRD",
    },
    Icon: CheckIcon,
  },
  {
    number: "02",
    title: "Le compteur communicant change le calcul, pas le résultat",
    body: (
      <>
        Depuis 2024, l&apos;autoconsommation directe vaut{" "}
        <strong className="text-midnight">~7 à 46 fois plus</strong> que
        l&apos;injection. Un dimensionnement honnête vise la consommation
        réelle, pas la surface du toit.
      </>
    ),
    source: "Sources : CWaPE, fournisseurs d'énergie 2026.",
    link: {
      href: "/guides/prix-panneaux-solaires-wallonie-2026/",
      label: "Lire le guide dimensionnement",
    },
    Icon: CheckIcon,
  },
  {
    number: "03",
    title: "Ce qui plombe vraiment la rentabilité : un mauvais devis",
    body: (
      <>
        Surdimensionnement vendu sur surface, matériel sous-garanti, oubli du
        tableau : trois erreurs qui coûtent plus que la réforme tarifaire.
        D&apos;où l&apos;intérêt de faire relire le devis avant de signer.
      </>
    ),
    source: "Sources : retours terrain Be'energies, guide pièges PDF.",
    link: {
      href: "/pieges-a-eviter/",
      label: "Voir les 10 pièges",
    },
    Icon: AlertTriangleIcon,
  },
];

export function RentabilityObjection2026() {
  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-be">
        <div className="max-w-3xl">
          <SectionLabel>L&apos;objection qu&apos;on entend le plus</SectionLabel>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
            Les panneaux sont-ils encore rentables en 2026 ?
          </h2>
          <p className="mt-4 text-charcoal leading-relaxed text-[17px]">
            Réponse honnête : oui, mais la logique a changé.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {BLOCKS.map(({ number, title, body, source, link, Icon }) => (
            <article
              key={number}
              className="card p-6 md:p-7 flex flex-col h-full relative"
            >
              {/* Top row: prominent eyebrow number + icon. The number is
                  intentionally oversized and treated as a tabular figure to
                  anchor the scan path: number → title → body → link → source. */}
              <div className="flex items-start justify-between mb-3">
                <span className="data-figure text-[40px] md:text-[44px] font-bold leading-none tracking-tight text-amber-dark">
                  {number}
                </span>
                <Icon
                  size={20}
                  className={
                    number === "03" ? "text-amber-dark" : "text-amber-dark/70"
                  }
                />
              </div>
              <h3 className="text-[17px] md:text-lg font-[family-name:var(--font-heading)] text-midnight leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-[14.5px] text-charcoal leading-relaxed">
                {body}
              </p>
              <Link
                href={link.href}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-amber-dark hover:text-midnight transition-colors"
              >
                {link.label}
                <ArrowRightIcon size={13} />
              </Link>
              <p className="mt-auto pt-4 border-t border-cloud text-[11.5px] text-steel/90 leading-snug tracking-wide">
                {source}
              </p>
            </article>
          ))}
        </div>

        {/* Next-step ladder: primary action (pièges guide, soft commitment)
            then secondary (devis analyse, higher intent). Eyebrow label
            frames it as a clear next step instead of a wall of buttons. */}
        <div className="mt-10 md:mt-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-4">
            La suite logique
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
            <Link
              href="/pieges-a-eviter/"
              className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Lire les 10 pièges à éviter
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/devis-analyse/"
              className="inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-colors border border-charcoal/30 text-charcoal hover:bg-midnight hover:text-white hover:border-midnight"
            >
              Faire vérifier mon devis
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>

        <DataSources
          className="max-w-3xl"
          sources="CWaPE, GRD wallons, fournisseurs d'énergie, retours terrain Be'energies"
        />
      </div>
    </section>
  );
}
