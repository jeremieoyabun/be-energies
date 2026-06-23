import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";

/**
 * Server-side warranty comparison block for the photovoltaic service page.
 *
 * All figures come from the official editor datasheets listed in
 * `warrantyData` below. Do not add a number that is not sourced.
 * When a specific field is null / unknown, render a long dash ("—").
 *
 * Pure server component - no JS shipped.
 */

type PanelBrand = {
  brand: string;
  product_warranty_years: number | null;
  performance_year_1: number | null;
  performance_year_10: number | null;
  performance_year_25: number | null;
  performance_horizon_years: number | null;
  source_url: string;
};

type InverterBrand = {
  brand: string;
  warranty_years_standard: number | null;
  warranty_years_extended: number | null;
  source_url: string;
};

const warrantyData: {
  panel_brands: PanelBrand[];
  inverter_brands: InverterBrand[];
} = {
  panel_brands: [
    {
      brand: "SunPower Maxeon 6",
      product_warranty_years: 25,
      performance_year_1: 98,
      performance_year_10: null,
      performance_year_25: 92,
      performance_horizon_years: 25,
      source_url:
        "https://mediaroom.maxeon.com/2022-02-03-Maxeon-Solar-Technologies-Extends-the-Product,-Power-and-Service-Warranty-on-its-Flagship-Product-Line-to-40-Years",
    },
    {
      brand: "LONGi Hi-MO 6 Explorer (LR5-54HTH)",
      product_warranty_years: 15,
      performance_year_1: 98.5,
      performance_year_10: null,
      performance_year_25: 88.85,
      performance_horizon_years: 25,
      source_url: "https://www.enfsolar.com/pv/panel-datasheet/crystalline/56977",
    },
    {
      brand: "Trina Vertex S+ TSM-NEG9R.28",
      product_warranty_years: 25,
      performance_year_1: 99,
      performance_year_10: 95.4,
      performance_year_25: 89.4,
      performance_horizon_years: 30,
      source_url:
        "http://static.trinasolar.com/sites/default/files/Vertex%20S+_NEG9R.28_EN_2024_APAC_A_web.pdf",
    },
    {
      brand: "JA Solar DeepBlue 4.0 Pro (JAM72D40)",
      product_warranty_years: 12,
      performance_year_1: 99,
      performance_year_10: 95.4,
      performance_year_25: 89.4,
      performance_horizon_years: 30,
      source_url: "https://www.enfsolar.com/pv/panel-datasheet/crystalline/66275",
    },
  ],
  inverter_brands: [
    {
      brand: "SolarEdge",
      warranty_years_standard: 12,
      warranty_years_extended: 25,
      source_url: "https://www.solaredge.com/warranty",
    },
    {
      brand: "Enphase IQ8",
      warranty_years_standard: 25,
      warranty_years_extended: null,
      source_url: "https://enphase.com/en-gb/download/iq8-microinverter-warranty-uk",
    },
    {
      brand: "Huawei SUN2000 (résidentiel)",
      warranty_years_standard: 10,
      warranty_years_extended: 25,
      source_url:
        "https://solar.huawei.com/admin/asset/v1/pro/view/d373d9834172413b85d346e1f691915d.pdf",
    },
  ],
};

const DASH = "—";

function formatYears(value: number | null): string {
  if (value === null) return DASH;
  return `${value} ans`;
}

function formatPercent(value: number | null): string {
  if (value === null) return DASH;
  // Keep up to 2 decimals if needed, drop trailing zeros.
  const fixed = Number.isInteger(value) ? value.toString() : value.toString();
  return `${fixed} %`;
}

function Datasheet({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[12px] text-amber-dark hover:text-midnight underline-offset-2 hover:underline transition-colors font-medium"
    >
      Datasheet
      <ArrowRightIcon size={12} className="-rotate-45" />
    </a>
  );
}

function Source({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-[11px] text-steel hover:text-midnight underline underline-offset-2 break-all"
    >
      {label}
    </a>
  );
}

export function WarrantyLadder() {
  const monoCell =
    "font-[family-name:var(--font-data)] text-[13px] text-midnight tabular-nums";

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="warranty-ladder-heading"
    >
      <div className="container-be max-w-5xl">
        <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
          Garanties chiffrées, pas promesses vagues
        </p>
        <h2
          id="warranty-ladder-heading"
          className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance max-w-3xl"
        >
          Une garantie qui se mesure, datasheet à l&apos;appui
        </h2>
        <p className="mt-4 text-charcoal max-w-3xl leading-relaxed">
          Quand un installateur vous parle de &laquo;&nbsp;garantie 25
          ans&nbsp;&raquo;, demandez la datasheet. Voici les vrais chiffres des
          panneaux et onduleurs que nous installons — chacun sourcé de
          l&apos;éditeur. La performance à 25 ans, c&apos;est ce qui sépare un
          panneau premium d&apos;un panneau d&apos;entrée de gamme.
        </p>

        {/* PANEL TABLE - desktop */}
        <div className="mt-10 hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-cloud">
                <th className="py-3 pr-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                  Marque
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                  Garantie produit
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                  Perf. à 10 ans
                </th>
                <th className="py-3 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                  Perf. à 25 ans
                </th>
                <th className="py-3 pl-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {warrantyData.panel_brands.map((panel) => (
                <tr
                  key={panel.brand}
                  className="border-b border-cloud last:border-b-0"
                >
                  <td className="py-5 pr-4 align-top">
                    <span className="font-semibold text-midnight text-[14px] leading-tight block">
                      {panel.brand}
                    </span>
                  </td>
                  <td className={`py-5 px-4 align-top ${monoCell}`}>
                    {formatYears(panel.product_warranty_years)}
                  </td>
                  <td className={`py-5 px-4 align-top ${monoCell}`}>
                    {formatPercent(panel.performance_year_10)}
                  </td>
                  <td className={`py-5 px-4 align-top ${monoCell}`}>
                    {formatPercent(panel.performance_year_25)}
                  </td>
                  <td className="py-5 pl-4 align-top">
                    <Datasheet href={panel.source_url} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PANEL TABLE - mobile stacked cards */}
        <div className="mt-10 md:hidden space-y-4">
          {warrantyData.panel_brands.map((panel) => (
            <article
              key={panel.brand}
              className="border border-cloud rounded-xl p-5"
            >
              <h3 className="font-semibold text-midnight text-[15px] leading-tight">
                {panel.brand}
              </h3>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Garantie produit
                  </dt>
                  <dd className={`mt-1 ${monoCell}`}>
                    {formatYears(panel.product_warranty_years)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Perf. à 10 ans
                  </dt>
                  <dd className={`mt-1 ${monoCell}`}>
                    {formatPercent(panel.performance_year_10)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Perf. à 25 ans
                  </dt>
                  <dd className={`mt-1 ${monoCell}`}>
                    {formatPercent(panel.performance_year_25)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Source
                  </dt>
                  <dd className="mt-1">
                    <Datasheet href={panel.source_url} />
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {/* INVERTER TABLE */}
        <div className="mt-14">
          <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
            Côté onduleur
          </p>
          <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight leading-tight mb-6">
            La pièce qui décide souvent du SAV à 10 ans
          </h3>

          {/* Desktop */}
          <div className="hidden md:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-cloud">
                  <th className="py-3 pr-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Marque
                  </th>
                  <th className="py-3 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Garantie standard
                  </th>
                  <th className="py-3 px-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Extension possible
                  </th>
                  <th className="py-3 pl-4 text-[11px] font-semibold tracking-[0.1em] uppercase text-steel">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {warrantyData.inverter_brands.map((inverter) => (
                  <tr
                    key={inverter.brand}
                    className="border-b border-cloud last:border-b-0"
                  >
                    <td className="py-5 pr-4 align-top">
                      <span className="font-semibold text-midnight text-[14px] leading-tight block">
                        {inverter.brand}
                      </span>
                    </td>
                    <td className={`py-5 px-4 align-top ${monoCell}`}>
                      {formatYears(inverter.warranty_years_standard)}
                    </td>
                    <td className={`py-5 px-4 align-top ${monoCell}`}>
                      {inverter.warranty_years_extended === null
                        ? DASH
                        : `jusqu'à ${inverter.warranty_years_extended} ans`}
                    </td>
                    <td className="py-5 pl-4 align-top">
                      <Datasheet href={inverter.source_url} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {warrantyData.inverter_brands.map((inverter) => (
              <article
                key={inverter.brand}
                className="border border-cloud rounded-xl p-5"
              >
                <h4 className="font-semibold text-midnight text-[15px] leading-tight">
                  {inverter.brand}
                </h4>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                      Standard
                    </dt>
                    <dd className={`mt-1 ${monoCell}`}>
                      {formatYears(inverter.warranty_years_standard)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                      Extension
                    </dt>
                    <dd className={`mt-1 ${monoCell}`}>
                      {inverter.warranty_years_extended === null
                        ? DASH
                        : `jusqu'à ${inverter.warranty_years_extended} ans`}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-[10px] font-semibold tracking-[0.1em] uppercase text-steel">
                      Source
                    </dt>
                    <dd className="mt-1">
                      <Datasheet href={inverter.source_url} />
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>

        {/* SOURCES & METHOD */}
        <details className="group mt-10 text-left">
          <summary className="inline-flex items-center gap-1.5 text-xs cursor-pointer list-none select-none transition-colors text-steel hover:text-charcoal">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="8" r="6.5" />
              <line x1="8" y1="7" x2="8" y2="11" />
              <circle cx="8" cy="4.75" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            <span>Sources et méthode</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 12 12"
              width="10"
              height="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-open:rotate-180"
            >
              <polyline points="3,4.5 6,7.5 9,4.5" />
            </svg>
          </summary>
          <div className="mt-3 text-xs leading-relaxed text-steel/85 max-w-3xl">
            <p className="m-0">
              Toutes les figures ci-dessus sont issues des datasheets
              officielles des éditeurs (révision la plus récente disponible
              au mois de juin 2026). La garantie de performance est dite
              «&nbsp;linéaire&nbsp;» : chaque année, le panneau perd au
              maximum un pourcentage fixe. Au-delà de la garantie, le panneau
              continue généralement à produire, il n&apos;est juste plus
              couvert si la performance tombe sous le seuil.
            </p>
            <p className="m-0 mt-2 text-[11px] uppercase tracking-[0.08em] text-steel/70">
              Dernière mise à jour : juin 2026
            </p>
            <ul className="mt-4 space-y-1.5 list-none p-0">
              {warrantyData.panel_brands.map((panel) => (
                <li key={`src-panel-${panel.brand}`} className="m-0">
                  <Source
                    href={panel.source_url}
                    label={`${panel.brand} — datasheet éditeur`}
                  />
                </li>
              ))}
              {warrantyData.inverter_brands.map((inverter) => (
                <li key={`src-inv-${inverter.brand}`} className="m-0">
                  <Source
                    href={inverter.source_url}
                    label={`${inverter.brand} — conditions de garantie éditeur`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* BOTTOM CTA */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-cloud pt-8">
          <p className="text-charcoal text-[14px] max-w-md leading-relaxed">
            Un devis sur votre table&nbsp;? Vérifions ligne par ligne les
            garanties qu&apos;il promet vraiment.
          </p>
          <Link
            href="/devis-analyse/"
            className="inline-flex items-center gap-2 border border-midnight text-midnight font-semibold px-5 py-3 rounded-xl text-sm whitespace-nowrap hover:bg-midnight hover:text-white transition-colors shrink-0"
          >
            Vérifier les garanties de mon devis
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
