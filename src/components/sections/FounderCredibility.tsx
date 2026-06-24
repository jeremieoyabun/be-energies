import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionLabel } from "@/components/sections/SectionLabel";
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

  // Full variant — lighter than the previous version. The 6-item
  // inspector checklist that used to live here now lives on its
  // dedicated PVMethodPanel (and the about page carries Benoît's full
  // story). Homepage version is now just portrait + ExpertNote + link,
  // which is enough credibility lift without doubling the inspector
  // narrative against the rest of the page.
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
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight underline-offset-4 hover:underline"
              >
                Lire son parcours complet
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT column : heading + ExpertNote + soft CTA. No
              checklist — that content lives on the PV service page. */}
          <div className="md:pt-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.05]">
              J&apos;ai vu ce que les autres font mal. Aujourd&apos;hui, je fais mieux.
            </h2>

            <ExpertNote
              quote="Avant Be'energies, Benoît inspectait des installations électriques et photovoltaïques pour des organismes agréés. Il conçoit chaque chantier comme un inspecteur : pensé pour le contrôle avant d'être pensé pour la vente."
              attribution="Benoît Dezso"
            />

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-[14.5px]">
              <Link
                href="/a-propos/"
                className="inline-flex items-center gap-2 font-bold text-midnight hover:text-amber-dark transition-colors underline underline-offset-4 decoration-[1.5px] decoration-amber/50 hover:decoration-amber"
              >
                Le parcours complet
                <span aria-hidden="true">→</span>
              </Link>
              <span aria-hidden="true" className="hidden sm:inline-block h-4 w-px bg-cloud" />
              <Link
                href="/realisations/"
                className="inline-flex items-center gap-2 font-bold text-midnight hover:text-amber-dark transition-colors"
              >
                Voir les chantiers
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
