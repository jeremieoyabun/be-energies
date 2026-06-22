import Link from "next/link";
import { ArrowRightIcon, CheckIcon, AlertTriangleIcon } from "@/lib/icons";

/**
 * Server-side summary card module for the photovoltaic service page.
 *
 * Sits between the hero and the deep regulatory sections to give visitors
 * a scannable answer to "what's the current PV situation in Belgium and
 * which regime applies to me?" before they dive into the long-form content.
 *
 * Pure server component — no JS shipped.
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
 *   profile — never promise a fixed return without context.
 */
export function PVRegimesSummary() {
  return (
    <section className="section-padding bg-ivory" aria-labelledby="pv-regimes-heading">
      <div className="container-be max-w-5xl">
        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
          Comprendre en 2 minutes
        </p>
        <h2
          id="pv-regimes-heading"
          className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance max-w-2xl"
        >
          Avant ou après 2024 : votre régime fait toute la différence
        </h2>
        <p className="mt-3 text-charcoal max-w-2xl">
          Deux régimes coexistent en Wallonie depuis le passage au compteur
          communicant. Trouvez le vôtre — la suite de la page s&apos;applique
          différemment à chaque cas.
        </p>

        {/* Two regime cards side-by-side on md+, stacked on mobile */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {/* Régime 1 — pre-2024 */}
          <article className="bg-white border border-cloud rounded-2xl p-6 md:p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-midnight text-amber font-bold text-sm">
                1
              </span>
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-steel">
                Installations avant le 01/01/2024
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-midnight text-xl leading-snug">
              Régime de compensation
            </h3>
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
                  (~85-99 €/kWe/an selon le GRD).
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
            <div className="mt-5 pt-5 border-t border-cloud text-[13px]">
              <p className="font-semibold text-midnight mb-1">
                Ce que ça veut dire pour vous
              </p>
              <p className="text-steel leading-relaxed">
                Une batterie physique n&apos;est généralement{" "}
                <strong className="text-midnight">pas rentable</strong>{" "}
                tant que la compensation dure : le réseau fait déjà le job
                gratuitement.
              </p>
            </div>
          </article>

          {/* Régime 2 — post-2024 */}
          <article className="bg-white border border-cloud rounded-2xl p-6 md:p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber text-midnight font-bold text-sm">
                2
              </span>
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark">
                Installations depuis le 01/01/2024
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-midnight text-xl leading-snug">
              Compteur communicant
            </h3>
            <ul className="mt-4 space-y-2 text-[14px] text-charcoal leading-relaxed flex-1">
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  <strong>Pas de tarif prosumer</strong> — vous payez
                  uniquement votre consommation réelle.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  Surplus revendu au tarif d&apos;injection de votre
                  fournisseur (1 à 6 c/kWh selon l&apos;offre).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon size={14} className="text-success shrink-0 mt-0.5" />
                <span>
                  Accès au tarif IMPACT (tri-horaire) — la batterie y prend
                  tout son sens.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangleIcon
                  size={14}
                  className="text-warning shrink-0 mt-0.5"
                />
                <span>
                  Chaque kWh injecté rapporte 7 à 46× moins que ce qu&apos;il
                  coûte à l&apos;achat — l&apos;autoconsommation devient la
                  variable clé.
                </span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-cloud text-[13px]">
              <p className="font-semibold text-midnight mb-1">
                Ce que ça veut dire pour vous
              </p>
              <p className="text-steel leading-relaxed">
                Le dimensionnement doit viser{" "}
                <strong className="text-midnight">
                  l&apos;autoconsommation maximale
                </strong>{" "}
                — pas la production maximale. Une batterie ou un véhicule
                électrique change vite la rentabilité.
              </p>
            </div>
          </article>
        </div>

        {/* Bottom CTA — the decision point */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between bg-midnight text-white rounded-2xl p-5 md:p-6">
          <div className="flex-1">
            <p className="font-semibold text-white text-[15px] mb-1">
              Pas sûr du régime qui s&apos;applique chez vous ?
            </p>
            <p className="text-silver text-[13px] leading-relaxed">
              Visite technique sur site, lecture de votre compteur et de
              votre dernière facture — on tranche en 20 minutes.
            </p>
          </div>
          <Link
            href="/contact/"
            className="cta-glow inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-colors shrink-0"
          >
            Demander mon diagnostic
            <ArrowRightIcon size={15} />
          </Link>
        </div>

        {/* Brussels regulatory note — soft callout, source-tagged */}
        <p className="mt-6 text-[12px] text-steel leading-relaxed border-l-2 border-amber/40 pl-3">
          <strong className="text-charcoal">Région bruxelloise :</strong>{" "}
          depuis 2026, les nouvelles installations photovoltaïques
          résidentielles éligibles aux certificats verts doivent être
          réalisées par un installateur certifié RESCERT. Sources :
          Brugel, arrêté du Gouvernement bruxellois 2024/2025 — à vérifier
          selon votre commune et la nature exacte de votre projet.
        </p>
      </div>
    </section>
  );
}
