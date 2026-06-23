import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { InspectorInsight } from "@/components/sections/InspectorInsight";

interface FounderCredibilityProps {
  variant?: "full" | "compact" | "local";
  cityName?: string;
  locale?: "fr" | "nl";
}

const COPY = {
  fr: {
    localPrefix: (city: string) => `Votre installateur à ${city} :`,
    localRoleSuffix: (credential: string) =>
      `, ancien inspecteur, ${credential}`,
  },
  nl: {
    localPrefix: (city: string) => `Uw installateur in ${city}:`,
    localRoleSuffix: (credential: string) =>
      `, voormalig inspecteur, ${credential}`,
  },
} as const;

export function FounderCredibility({
  variant = "compact",
  cityName,
  locale = "fr",
}: FounderCredibilityProps) {
  const founder = siteConfig.founder;
  const t = COPY[locale];
  const role = locale === "nl" ? founder.roleNl : founder.role;

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
            {t.localPrefix(cityName)}
          </p>
          <p className="text-sm text-charcoal">
            {founder.name}
            {t.localRoleSuffix(founder.credential)}
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
          <p className="text-xs text-steel">{role}</p>
        </div>
        <Image
          src="/RESCERT.png"
          alt="Certification RESCERT"
          width={80}
          height={80}
          className="h-16 w-16 object-contain ml-auto"
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
          {/* Photo + certifications.
              Image slot: placeholder for a real field portrait of Benoît
              (toiture, tableau, ou intervention). Replace src with the
              final asset when shot, keep the aspect-ratio. */}
          <div className="w-full max-w-[300px] mx-auto md:mx-0 space-y-4">
            <div className="aspect-[3/4] rounded-2xl bg-midnight relative overflow-hidden shadow-elevated">
              <Image
                src="/img/misc/worker.webp"
                alt={`${founder.name}, ${founder.role}, sur une intervention en Belgique`}
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
                width={120}
                height={120}
                className="h-[72px] w-[72px] object-contain"
              />
              <div>
                <p className="text-xs font-semibold text-midnight">Certifié RESCERT</p>
                <p className="text-[11px] text-steel">Installateur agréé</p>
              </div>
            </div>
          </div>

          {/* Bio - top-aligned with the photo via leading-none + tracking-tight to remove font baseline offset */}
          <div className="md:pt-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.05]">
              J&apos;ai vu ce que les autres font mal. Aujourd&apos;hui, je fais mieux.
            </h2>

            <div className="mt-6 space-y-4 text-charcoal leading-relaxed text-[15px]">
              <p>
                Avant de fonder Be&apos;energies, Benoît a inspecté des installations
                électriques et photovoltaïques en Belgique pour le compte d&apos;organismes
                agréés. Il a constaté, documenté et corrigé les erreurs les plus fréquentes
                du secteur, celles qui font recaler une installation au contrôle.
              </p>
              <p>
                Il fonde Be&apos;energies avec une conviction simple : chaque installation
                mérite le niveau de rigueur qu&apos;il exigeait en tant qu&apos;inspecteur.
              </p>
            </div>

            <div className="mt-8">
              <InspectorInsight>
                En tant qu&apos;inspecteur, j&apos;ai recalé des installations pour des
                sections de câble inadaptées, des protections manquantes, des mises à la
                terre défaillantes. Aujourd&apos;hui, chaque installation que je conçois
                est pensée pour le contrôle avant d&apos;être pensée pour la vente.
              </InspectorInsight>
            </div>

            {/* Ce qu'il regarde en premier - field-grounded mini-checklist
                that mirrors the inspector reflex. Reinforces "l'installateur
                qui a d'abord été l'inspecteur" with three concrete signals. */}
            <div className="mt-8 rounded-2xl border border-cloud bg-ivory p-5 md:p-6">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-4">
                Ce qu&apos;il regarde en premier
              </p>
              <ul className="space-y-3">
                {[
                  "Le tableau électrique : âge, schéma, état des protections (en particulier sur les maisons d'avant 1985).",
                  "La charpente : état réel après rénovation ou isolation, capacité à porter la structure de pose.",
                  "Le profil de consommation : courbe horaire, présence d'une pompe à chaleur ou d'une borne, pour dimensionner sur l'usage et pas sur la surface.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14.5px] text-charcoal leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key differentiators - qualitative until quantified data is confirmed */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                {
                  figure: "Inspecteur",
                  label: "expérience terrain en conformité électrique",
                },
                {
                  figure: "RESCERT",
                  label: "installateur agréé en Wallonie",
                },
                {
                  figure: "Pré-audit",
                  label: "approche pensée pour limiter les non-conformités",
                },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-ivory rounded-xl border border-cloud">
                  <div className="stat-value text-base font-bold text-midnight uppercase tracking-wide">
                    {item.figure}
                  </div>
                  <div className="text-xs text-steel mt-1 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
