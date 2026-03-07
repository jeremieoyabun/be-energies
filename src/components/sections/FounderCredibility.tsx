import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { InspectorInsight } from "@/components/sections/InspectorInsight";

interface FounderCredibilityProps {
  variant?: "full" | "compact" | "local";
  cityName?: string;
}

export function FounderCredibility({
  variant = "compact",
  cityName,
}: FounderCredibilityProps) {
  const founder = siteConfig.founder;

  if (variant === "local" && cityName) {
    return (
      <div className="flex items-center gap-4 bg-ivory border border-cloud rounded-xl p-4">
        <div className="w-14 h-14 rounded-full bg-slate/20 shrink-0 overflow-hidden">
          <Image
            src="/images/benoit-dezso.webp"
            alt={founder.name}
            width={56}
            height={56}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-midnight text-sm">
            Votre installateur a {cityName} :
          </p>
          <p className="text-sm text-charcoal">
            {founder.name}, ancien inspecteur {founder.credential}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 bg-ivory border border-cloud rounded-xl p-4">
        <div className="w-14 h-14 rounded-full bg-slate/20 shrink-0 overflow-hidden">
          <Image
            src="/images/benoit-dezso.webp"
            alt={founder.name}
            width={56}
            height={56}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-midnight text-sm">{founder.name}</p>
          <p className="text-xs text-steel">{founder.role}</p>
        </div>
      </div>
    );
  }

  // Full variant — Rapport de Terrain style
  return (
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <SectionLabel>Le fondateur</SectionLabel>

        <div className="grid md:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
          <div className="w-full max-w-[280px] mx-auto md:mx-0">
            <div className="aspect-[3/4] rounded-xl bg-midnight relative overflow-hidden">
              <div className="absolute inset-0 hatch-pattern opacity-30" />
              <Image
                src="/images/benoit-dezso.webp"
                alt={founder.name}
                width={560}
                height={747}
                className="object-cover w-full h-full relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-midnight/80 to-transparent z-20">
                <div className="text-[10px] font-[family-name:var(--font-data)] tracking-[0.15em] text-cyan uppercase">
                  Fondateur
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight">
              {founder.name}
            </h2>
            <p className="text-amber font-medium mt-1">{founder.role}</p>

            <div className="mt-6 space-y-4 text-charcoal leading-relaxed">
              <p>
                Pendant plus de 10 ans, Benoit a inspecte des installations electriques
                et photovoltaiques a travers la Belgique pour le compte d&apos;organismes agrees.
                Il a constate, documente, et corrige les erreurs les plus frequentes du secteur.
              </p>
              <p>
                Il fonde Be&apos;energies avec une conviction simple : chaque installation
                merite le niveau de rigueur qu&apos;il exigeait en tant qu&apos;inspecteur.
              </p>
            </div>

            <div className="mt-6">
              <InspectorInsight>
                En tant qu&apos;inspecteur, j&apos;ai recale des installations pour des
                sections de cable inadaptees, des protections manquantes, des mises a la
                terre defaillantes. Aujourd&apos;hui, chaque installation que je concois
                est pensee pour le controle avant d&apos;etre pensee pour la vente.
              </InspectorInsight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
