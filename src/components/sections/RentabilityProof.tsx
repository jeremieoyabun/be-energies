import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";

export function RentabilityProof() {
  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Rentabilité 2026</SectionLabel>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Left: message */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
              Le photovoltaïque est plus rentable que jamais
            </h2>
            <p className="mt-4 text-charcoal leading-relaxed">
              Les subventions ont disparu parce que les panneaux sont devenus 5 fois
              moins chers. Chaque kWh autoconsommé vous fait économiser{" "}
              <strong className="text-midnight">38 centimes</strong>. Chaque kWh
              revendu ne rapporte que <strong className="text-midnight">1 à 6 centimes</strong>.
            </p>
            <p className="mt-3 text-steel text-[15px]">
              C&apos;est pour ça qu&apos;on dimensionne pour maximiser ce que vous
              consommez, pas ce que vous injectez.
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
            {[
              { value: "5-7", unit: "ans", label: "Retour sur investissement", accent: true },
              { value: "~12", unit: "%", label: "Rendement annuel", accent: false },
              { value: "38", unit: "c/kWh", label: "Économies par kWh autoconsommé", accent: false },
              { value: "25", unit: "+ ans", label: "Durée de vie garantie", accent: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-5 md:p-6 ${
                  stat.accent
                    ? "bg-midnight text-white"
                    : "bg-ivory border border-cloud"
                }`}
              >
                <div className="flex items-baseline gap-1">
                  <span className={`stat-value text-3xl md:text-4xl font-bold ${stat.accent ? "text-amber" : "text-midnight"}`}>
                    {stat.value}
                  </span>
                  <span className={`stat-value text-base font-semibold ${stat.accent ? "text-amber-light" : "text-amber-dark"}`}>
                    {stat.unit}
                  </span>
                </div>
                <div className={`text-xs mt-2 font-medium leading-snug ${stat.accent ? "text-silver" : "text-steel"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
