import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import {
  JsonLd,
  personSchema,
  localBusinessSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon } from "@/lib/icons";

const PAGE_URL = "/nl/over-ons/";

export const metadata = generatePageMetadata({
  title: "Over Be'energies | De installateur die eerst inspecteur was",
  description:
    "Benoît Dezso, oprichter van Be'energies, was eerst inspecteur van elektrotechnische installaties. Vandaag ontwerpt hij elke installatie zoals een inspecteur: gemaakt om de keuring te doorstaan, niet om snel te verkopen. RESCERT-gecertificeerd.",
  path: PAGE_URL,
  locale: "nl-BE",
});

const stories = [
  {
    title: "De omvormer die het niet kon volgen",
    body: "Een gezin met een mooie installatie op papier, maar een omvormer die op zonnige dagen een deel van de productie afkapte. Niemand had het hun verteld. Bij de keuring viel het op. Sindsdien controleer ik altijd de verhouding tussen panelen en omvormer vóór ik iets voorstel.",
  },
  {
    title: "Het bord dat de laadpaal niet aankon",
    body: "Een klant wou een laadpaal bij zijn bestaande installatie. Het elektrisch bord uit de jaren tachtig had geen aparte differentieelbeveiliging per kring. Een andere firma wou de laadpaal er gewoon bijhangen. Dat is precies het soort situatie dat ik eerst controleer.",
  },
  {
    title: "Het dak dat eerst gerenoveerd moest worden",
    body: "Soms is het eerlijke antwoord: nog niet. Een verouderd dak met zonnepanelen beleggen betekent dat u alles opnieuw moet demonteren bij een lek. Ik zeg dan liever nee tegen het project dan de klant drie jaar later naar een waterschade te sturen.",
  },
];

const values = [
  {
    title: "Eerst kijken, dan pas berekenen",
    body: "Geen definitieve prijs zonder plaatsbezoek. Oriëntatie, schaduw, dakbedekking, bord en aansluiting: alles wordt ter plaatse gecontroleerd.",
  },
  {
    title: "Dimensioneren op uw reële verbruik",
    body: "Niet op het dakoppervlak. Een installatie die past bij uw verbruik rendeert beter dan een grote installatie die haar overschot goedkoop injecteert.",
  },
  {
    title: "Gemaakt om de keuring te doorstaan",
    body: "Elke installatie wordt ontworpen om de keuring in één keer te doorstaan, niet om er net langs te geraken.",
  },
  {
    title: "Geen verzonnen cijfers",
    body: "Elke prijs of rendementsberekening is gebaseerd op reële gegevens of wordt duidelijk als schatting voorgesteld, per situatie na te kijken.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/nl/" },
          { name: "Over ons", href: PAGE_URL },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Over ons" },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-4xl">
          <SectionLabel>Over ons</SectionLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-[1.05] text-balance">
            De installateur die eerst inspecteur was
          </h1>
          <p className="mt-6 text-[17px] md:text-lg text-charcoal leading-relaxed max-w-2xl">
            Vóór Be&apos;energies keurde Benoît Dezso elektrotechnische en
            fotovoltaïsche installaties voor erkende organismen. Hij schreef
            verslagen: conform of niet conform. En hij zag telkens weer
            dezelfde fouten terugkomen, altijd betaald door de eigenaars.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-padding bg-white">
        <div className="container-be">
          <div className="grid md:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <div className="w-full max-w-[260px] mx-auto md:mx-0">
              <div className="w-[240px] h-[240px] rounded-2xl bg-midnight relative overflow-hidden shadow-elevated ring-4 ring-amber/25 mx-auto md:mx-0">
                <Image
                  src="/img/services/benoit-inspection-tableau.png"
                  alt={`${siteConfig.founder.name}, ${siteConfig.founder.roleNl}`}
                  width={480}
                  height={480}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-5 text-center md:text-left">
                <p className="font-semibold text-midnight text-base leading-tight">
                  {siteConfig.founder.name}
                </p>
                <p className="mt-1 text-[13px] text-charcoal leading-snug">
                  {siteConfig.founder.roleNl}, {siteConfig.founder.credential}
                </p>
              </div>
            </div>

            <div className="md:pt-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.05]">
                Ik heb gezien wat anderen fout doen. Vandaag doe ik het beter.
              </h2>
              <p className="mt-6 text-[15.5px] text-charcoal leading-relaxed">
                Als voormalig inspecteur ontwerp ik elke installatie zoals een
                inspecteur: gemaakt om de keuring te doorstaan, vóór ze gemaakt
                is om te verkopen. Dat is het hele verschil. Ik reken op uw
                reële verbruik, ik controleer eerst het dak, het bord en de
                aansluiting, en ik zeg u eerlijk wanneer een batterij of een
                groter vermogen bij u geen zin heeft.
              </p>
              <p className="mt-4 text-[15.5px] text-charcoal leading-relaxed">
                Belangrijk om te weten: <strong className="text-midnight font-semibold">voormalig
                inspecteur</strong> en <strong className="text-midnight font-semibold">RESCERT-gecertificeerd</strong> zijn
                twee aparte zaken. Het eerste is mijn verleden op het terrein,
                het tweede is mijn huidige certificatie als installateur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-4xl">
          <SectionLabel>Op het terrein</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-8 leading-[1.15]">
            Drie situaties die ik te vaak zie
          </h2>
          <div className="space-y-5">
            {stories.map((s) => (
              <article key={s.title} className="card border-l-4 border-l-danger p-6 md:p-7">
                <h3 className="text-[17px] md:text-[18px] font-semibold text-midnight leading-snug mb-2.5 font-[family-name:var(--font-heading)]">
                  {s.title}
                </h3>
                <p className="text-[15px] text-charcoal leading-relaxed">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-4xl">
          <SectionLabel>Onze aanpak</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-8 leading-[1.15]">
            Vier principes, geen slogans
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-6 flex flex-col">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-amber/15 ring-1 ring-amber/25 text-amber-dark mb-4"
                >
                  <CheckIcon size={20} />
                </span>
                <h3 className="text-[16px] font-bold text-midnight leading-snug mb-2">
                  {v.title}
                </h3>
                <p className="text-[14.5px] text-charcoal leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESCERT */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <div className="card p-6 md:p-8 flex items-center gap-5">
            <Image
              src="/RESCERT.png"
              alt="RESCERT-certificatie"
              width={100}
              height={100}
              className="h-20 w-20 object-contain shrink-0"
            />
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-amber-dark mb-1">
                Gecertificeerd installateur
              </p>
              <p className="text-[15px] text-charcoal leading-relaxed">
                Be&apos;energies is RESCERT-gecertificeerd. {siteConfig.founder.name},{" "}
                {siteConfig.founder.roleNl}, staat persoonlijk in voor elk
                dossier, van de diagnose tot de keuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTADiagnostic
        locale="nl"
        title="Een project? Laten we praten."
        description="Benoît antwoordt u persoonlijk. Gratis energiediagnose ter plaatse, in het Nederlands, op basis van uw reële cijfers."
        variant="dark"
      />
    </>
  );
}
