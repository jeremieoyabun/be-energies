import Link from "next/link";
import { ArrowRightIcon, CheckIcon, AlertTriangleIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";

/**
 * Server-side summary card module for the photovoltaic service page.
 *
 * Sits between the hero and the deep regulatory sections to give visitors
 * a scannable answer to "what's the current PV situation in Belgium and
 * which regime applies to me?" before they dive into the long-form content.
 *
 * Pure server component - no JS shipped.
 *
 * Regulatory notes (verify before edits):
 * - Pre-2024 PV installations in Wallonia keep compensation ("compteur
 *   qui tourne à l'envers") until 31/12/2030, and pay the annual prosumer
 *   tariff. Source: CWaPE.
 * - Post-01/01/2024 installations require a smart meter, do NOT pay the
 *   prosumer tariff, and bill injection separately at supplier-defined
 *   rates.
 * - In Brussels, since 2026 small PV installations eligible for green
 *   certificates require a RESCERT-certified installer.
 * - All numerical figures depend on the GRD, supplier and consumption
 *   profile - never promise a fixed return without context.
 */
export function PVRegimesSummary() {
  return (
    <section className="section-padding bg-ivory" aria-labelledby="pv-regimes-heading">
      <div className="container-be max-w-5xl">
        <SectionLabel>Comprendre en 2 minutes</SectionLabel>
        <h2
          id="pv-regimes-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight leading-[1.1] text-balance max-w-2xl"
        >
          Avant ou après 2024 : votre régime fait toute la différence
        </h2>
        <p className="mt-4 text-charcoal/85 max-w-2xl text-[15.5px] leading-relaxed">
          Deux régimes coexistent en Wallonie depuis le passage au compteur
          communicant. Trouvez le vôtre : la suite de la page s&apos;applique
          différemment à chaque cas.
        </p>

        {/* Two regime cards side-by-side on md+, stacked on mobile */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {/* Régime 1 - pre-2024 */}
          <article className="card relative p-6 md:p-7 flex flex-col before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-steel/60 before:rounded-t-[1rem]">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="step-badge step-badge-on-white">1</span>
                <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-midnight">
                  Régime 1
                </span>
              </div>
              <span className="font-[family-name:var(--font-data)] text-[11.5px] font-semibold text-charcoal tabular-nums bg-cloud/60 px-2 py-0.5 rounded">
                avant 01/01/2024
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-midnight text-xl leading-snug">
              Régime de compensation
            </h3>
            <p className="mt-2 font-[family-name:var(--font-data)] text-[13px] text-amber-dark tabular-nums">
              Compensation maintenue jusqu&apos;au 31/12/2030
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-charcoal leading-relaxed flex-1">
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  Compteur qui tourne à l&apos;envers,{" "}
                  <strong>maintenu jusqu&apos;au 31/12/2030</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  Le réseau joue le rôle de batterie virtuelle gratuite.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangleIcon
                  size={14}
                  className="text-warning shrink-0 mt-0.5"
                />
                <span>
                  Vous payez le <strong>tarif prosumer</strong> annuel
                  (
                  <span className="font-[family-name:var(--font-data)] tabular-nums">
                    ~85 à 99 EUR/kWe/an
                  </span>{" "}
                  selon le GRD).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangleIcon
                  size={14}
                  className="text-warning shrink-0 mt-0.5"
                />
                <span>
                  À partir du 01/01/2031 : bascule automatique vers le
                  régime 2.
                </span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-cloud border-l-4 border-l-amber -mx-6 md:-mx-7 px-6 md:px-7 pl-7 md:pl-8 text-[13px] bg-amber/[0.04] rounded-bl-2xl rounded-br-2xl">
              <p className="font-semibold text-midnight mb-1 text-[10.5px] tracking-[0.14em] uppercase text-amber-dark">
                Ce que ça veut dire pour vous
              </p>
              <p className="text-charcoal leading-relaxed">
                Une batterie physique n&apos;est généralement{" "}
                <strong className="text-midnight">pas rentable</strong>{" "}
                tant que la compensation dure : le réseau fait déjà le job
                gratuitement.
              </p>
            </div>
          </article>

          {/* Régime 2 - post-2024 */}
          <article className="card relative p-6 md:p-7 flex flex-col before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-amber before:rounded-t-[1rem]">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="step-badge step-badge-on-white">2</span>
                <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-midnight">
                  Régime 2
                </span>
              </div>
              <span className="font-[family-name:var(--font-data)] text-[11.5px] font-semibold text-charcoal tabular-nums bg-cloud/60 px-2 py-0.5 rounded">
                depuis 01/01/2024
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-midnight text-xl leading-snug">
              Compteur communicant
            </h3>
            <p className="mt-2 font-[family-name:var(--font-data)] text-[13px] text-amber-dark tabular-nums">
              Ratio autoconso / injection : 7x à 46x
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-charcoal leading-relaxed flex-1">
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  <strong>Pas de tarif prosumer</strong> : vous payez
                  uniquement votre consommation réelle.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  Surplus revendu au tarif d&apos;injection de votre
                  fournisseur (
                  <span className="font-[family-name:var(--font-data)] tabular-nums">
                    1 à 6 c/kWh
                  </span>{" "}
                  selon l&apos;offre).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  Accès au tarif IMPACT (tri-horaire) : la batterie y prend
                  tout son sens.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangleIcon
                  size={14}
                  className="text-warning shrink-0 mt-0.5"
                />
                <span>
                  Chaque kWh injecté rapporte{" "}
                  <span className="font-[family-name:var(--font-data)] tabular-nums">
                    7 à 46x
                  </span>{" "}
                  moins que ce qu&apos;il coûte à l&apos;achat :
                  l&apos;autoconsommation devient la variable clé.
                </span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-cloud border-l-4 border-l-amber -mx-6 md:-mx-7 px-6 md:px-7 pl-7 md:pl-8 text-[13px] bg-amber/[0.04] rounded-bl-2xl rounded-br-2xl">
              <p className="font-semibold text-midnight mb-1 text-[10.5px] tracking-[0.14em] uppercase text-amber-dark">
                Ce que ça veut dire pour vous
              </p>
              <p className="text-charcoal leading-relaxed">
                Dans les faits, le dimensionnement doit viser{" "}
                <strong className="text-midnight">
                  l&apos;autoconsommation maximale
                </strong>
                , pas la production maximale. Une batterie ou un véhicule
                électrique change vite la rentabilité.
              </p>
            </div>
          </article>
        </div>

        {/* Bottom CTA - the decision point */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between bg-midnight text-white rounded-2xl p-5 md:p-6">
          <div className="flex-1">
            <p className="font-semibold text-white text-[15px] mb-1">
              Pas sûr du régime qui s&apos;applique chez vous ?
            </p>
            <p className="text-silver text-[13px] leading-relaxed">
              Visite technique sur site, lecture de votre compteur et de
              votre dernière facture : on tranche en 20 minutes.
            </p>
          </div>
          <Link
            href="/contact/"
            className="cta-glow inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-colors shrink-0"
          >
            Demander un diagnostic gratuit
            <ArrowRightIcon size={15} />
          </Link>
        </div>

        {/* Brussels regulatory note - soft callout, source-tagged */}
        <p className="mt-6 text-[12px] text-steel leading-relaxed border-l-2 border-amber/40 pl-3">
          <strong className="text-charcoal">Région bruxelloise :</strong>{" "}
          depuis 2026, les nouvelles installations photovoltaïques
          résidentielles éligibles aux certificats verts doivent être
          réalisées par un installateur certifié RESCERT. Sources :
          Brugel, arrêté du Gouvernement bruxellois 2024/2025 - à vérifier
          selon votre commune et la nature exacte de votre projet.
        </p>
      </div>
    </section>
  );
}
