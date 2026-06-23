import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { InspectionPanel } from "@/components/sections/InspectionPanel";
import { ExpertNote } from "@/components/sections/ExpertNote";

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
            src="/img/services/benoit-inspection-tableau.png"
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
            src="/img/services/benoit-inspection-tableau.png"
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
  const inspectorChecks = [
    "L'orientation et l'ombrage réels de la toiture",
    "L'état du tableau électrique et des protections existantes",
    "La courbe de consommation réelle, pas une moyenne",
    "Le profil de prélèvement réseau et l'autoconsommation possible",
    "La conformité RGIE de l'installation existante",
    "La capacité du raccordement et la marge disponible",
  ];

  return (
    <section className="section-padding">
      <div className="container-be">
        <SectionLabel>Le fondateur</SectionLabel>

        <div className="grid md:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
          {/* LEFT column : portrait + identity card */}
          <div className="w-full max-w-[260px] mx-auto md:mx-0">
            <div className="w-[240px] h-[240px] rounded-2xl bg-midnight relative overflow-hidden shadow-elevated ring-4 ring-amber/25 mx-auto md:mx-0">
              <Image
                src="/img/services/benoit-inspection-tableau.png"
                alt={`${founder.name}, ${founder.role}, sur une intervention en Belgique`}
                width={480}
                height={480}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="mt-5 text-center md:text-left">
              <p className="font-semibold text-midnight text-base leading-tight">
                {founder.name}
              </p>
              <p className="mt-1 text-[13px] text-charcoal leading-snug">
                {founder.role}
              </p>
              <Link
                href="/a-propos/"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-midnight underline-offset-4 hover:underline"
              >
                En savoir plus sur Benoît
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT column : heading + intro + inspector checklist */}
          <div className="md:pt-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.05]">
              J&apos;ai vu ce que les autres font mal. Aujourd&apos;hui, je fais mieux.
            </h2>

            <ExpertNote
              quote="Avant Be'energies, Benoît inspectait des installations électriques et photovoltaïques pour des organismes agréés. Il conçoit chaque chantier comme un inspecteur : pensé pour le contrôle avant d'être pensé pour la vente."
              attribution="Benoît Dezso, ancien inspecteur"
            />

            {/* Inspector checklist */}
            <div className="mt-8">
              <InspectionPanel
                eyebrow="Protocole d'inspection"
                title="Ce que je vérifie avant de chiffrer"
                subtitle="Liste extraite du protocole d'inspection que j'utilisais en agrément."
                items={inspectorChecks}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
