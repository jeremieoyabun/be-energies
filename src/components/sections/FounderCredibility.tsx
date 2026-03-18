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
            src="/img/misc/worker.webp"
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
            {founder.name}, ancien inspecteur, {founder.credential}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 bg-white border border-cloud rounded-xl p-4 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-slate/20 shrink-0 overflow-hidden ring-2 ring-amber/20">
          <Image
            src="/img/misc/worker.webp"
            alt={founder.name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-midnight text-sm">{founder.name}</p>
          <p className="text-xs text-steel">{founder.role}</p>
        </div>
        <Image
          src="/RESCERT.png"
          alt="RESCERT"
          width={28}
          height={28}
          className="h-7 w-7 object-contain ml-auto opacity-70"
        />
      </div>
    );
  }

  // Full variant
  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Le fondateur</SectionLabel>

        <div className="grid md:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
          {/* Photo + certifications */}
          <div className="w-full max-w-[300px] mx-auto md:mx-0 space-y-4">
            <div className="aspect-[3/4] rounded-2xl bg-midnight relative overflow-hidden shadow-elevated">
              <Image
                src="/img/misc/worker.webp"
                alt={founder.name}
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent">
                <p className="text-white font-semibold text-lg">{founder.name}</p>
                <p className="text-amber text-sm font-medium">{founder.role}</p>
              </div>
            </div>
            {/* RESCERT badge */}
            <div className="flex items-center gap-3 bg-ivory border border-cloud rounded-xl p-3">
              <Image
                src="/RESCERT.png"
                alt="Certification RESCERT"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-xs font-semibold text-midnight">Certifie RESCERT</p>
                <p className="text-[11px] text-steel">Installateur agree</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
              J&apos;ai vu ce que les autres font mal. Aujourd&apos;hui, je fais mieux.
            </h2>

            <div className="mt-6 space-y-4 text-charcoal leading-relaxed text-[15px]">
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

            <div className="mt-8">
              <InspectorInsight>
                En tant qu&apos;inspecteur, j&apos;ai recale des installations pour des
                sections de cable inadaptees, des protections manquantes, des mises a la
                terre defaillantes. Aujourd&apos;hui, chaque installation que je conçois
                est pensee pour le controle avant d&apos;etre pensee pour la vente.
              </InspectorInsight>
            </div>

            {/* Key differentiators */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { figure: "10+", label: "ans d'inspections" },
                { figure: "500+", label: "controles realises" },
                { figure: "0", label: "non-conformite depuis la creation" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-ivory rounded-xl border border-cloud">
                  <div className="stat-value text-2xl font-bold text-midnight">{item.figure}</div>
                  <div className="text-xs text-steel mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
