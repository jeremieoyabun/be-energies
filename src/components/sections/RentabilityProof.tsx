import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";

export function RentabilityProof() {
  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Rentabilité 2026</SectionLabel>

        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
            Le photovoltaïque en 2026 : toujours rentable
          </h2>
          <p className="mt-3 text-steel">
            Les subventions ont disparu parce que les panneaux sont devenus 5 fois
            moins chers. Le solaire n&apos;a jamais été aussi rentable.
          </p>
        </div>

        {/* Key stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
          {[
            { value: "5-7", unit: "ans", label: "retour sur investissement" },
            { value: "~12", unit: "%", label: "rendement annuel" },
            { value: "38", unit: "c", label: "économisés par kWh autoconsommé" },
            { value: "25", unit: "+", label: "ans de durée de vie" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-ivory border border-cloud rounded-xl p-5 card-lift"
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl md:text-4xl font-bold text-midnight data-figure">
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-amber data-figure">
                  {stat.unit}
                </span>
              </div>
              <div className="text-xs text-steel mt-2 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* The key insight */}
        <div className="mt-8 max-w-3xl bg-midnight rounded-xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 hatch-pattern opacity-50" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[11px] font-[family-name:var(--font-data)] uppercase tracking-[0.15em] text-cyan mb-3">
                Le chiffre que votre installateur devrait vous montrer
              </p>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Chaque kWh que vous consommez vous-même vous fait économiser{" "}
                <strong className="text-amber data-figure">38 centimes</strong>. Chaque kWh
                revendu au réseau vous rapporte{" "}
                <strong className="text-amber data-figure">1 à 6 centimes</strong>.
              </p>
              <p className="text-silver mt-3 text-sm">
                L&apos;autoconsommation vaut 7 à 46 fois plus que l&apos;injection.
                C&apos;est pour ça qu&apos;on dimensionne pour maximiser ce que vous
                consommez, pas ce que vous injectez.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/services/panneaux-photovoltaiques/"
                className="cta-glow inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Voir le calcul complet
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
