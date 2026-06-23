import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { DataSources } from "@/components/sections/DataSources";
import { CountUp } from "@/components/CountUp";

export function RentabilityProof() {
  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Rentabilité 2026</SectionLabel>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Left: message */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
              Le photovoltaïque reste un investissement défendable
            </h2>
            <p className="mt-4 text-charcoal leading-relaxed">
              Chaque kWh autoconsommé économise{" "}
              <strong className="text-midnight">~38 centimes</strong>, chaque
              kWh revendu rapporte{" "}
              <strong className="text-midnight">1 à 6 centimes</strong> : le
              calcul favorise l&apos;autoconsommation.
            </p>
            <Link
              href="/services/panneaux-photovoltaiques/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-dark hover:text-amber transition-colors"
            >
              Voir le calcul complet
              <ArrowRightIcon size={15} />
            </Link>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {(
              [
                {
                  display: <span>5-7</span>,
                  unit: "ans",
                  label: "Retour sur investissement estimé",
                  accent: true,
                },
                {
                  display: <CountUp to={12} prefix="~" decimals={0} />,
                  unit: "%",
                  label: "Rendement annualisé estimé",
                  accent: false,
                },
                {
                  display: <CountUp to={38} prefix="~" decimals={0} />,
                  unit: "c/kWh",
                  label: "Économies par kWh autoconsommé",
                  accent: false,
                },
                {
                  display: <CountUp to={25} suffix="+" decimals={0} />,
                  unit: "ans",
                  label: "Durée de vie du système",
                  accent: false,
                },
              ] as const
            ).map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-5 md:p-6 ${
                  stat.accent
                    ? "bg-midnight text-white"
                    : "bg-ivory border border-cloud"
                }`}
              >
                <div className="flex items-baseline gap-1">
                  <span
                    className={`stat-value text-3xl md:text-4xl font-bold ${
                      stat.accent ? "text-amber" : "text-midnight"
                    }`}
                  >
                    {stat.display}
                  </span>
                  <span
                    className={`stat-value text-base font-semibold ${
                      stat.accent ? "text-amber-light" : "text-amber-dark"
                    }`}
                  >
                    {stat.unit}
                  </span>
                </div>
                <div
                  className={`text-xs mt-2 font-medium leading-snug ${
                    stat.accent ? "text-silver" : "text-steel"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <DataSources className="max-w-3xl" />
      </div>
    </section>
  );
}
