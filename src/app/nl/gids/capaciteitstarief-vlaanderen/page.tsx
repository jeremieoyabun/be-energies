import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { FAQSection } from "@/components/sections/FAQSection";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRightIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

const PAGE_URL = "/nl/gids/capaciteitstarief-vlaanderen/";

export const metadata = generatePageMetadata({
  title:
    "Capaciteitstarief Vlaanderen 2026 uitgelegd | Wat het betekent voor zonnepanelen",
  description:
    "Wat is het capaciteitstarief van Fluvius, hoe wordt uw maandpiek berekend, en wat betekent het voor zonnepanelen, batterij en laadpaal in Limburg? Heldere uitleg door Benoît Dezso, voormalig inspecteur, RESCERT-gecertificeerd.",
  path: PAGE_URL,
  locale: "nl-BE",
});

const GUIDE_TITLE =
  "Capaciteitstarief in Vlaanderen: wat het echt betekent voor uw zonnepanelen";

const faq: FAQItem[] = [
  {
    question: "Wat is het capaciteitstarief precies?",
    answer:
      "Sinds 2023 is een deel van uw nettarief in Vlaanderen niet langer alleen gebaseerd op hoeveel kWh u verbruikt, maar ook op uw maandpiek: het gemiddelde van uw hoogste kwartierpieken per maand, uitgedrukt in kilowatt. Hoe meer zware toestellen u tegelijk laat draaien, hoe hoger die piek, en hoe hoger dat deel van uw netfactuur. Fluvius rekent een minimumpiek aan van 2,5 kW, ook als u minder afneemt.",
  },
  {
    question: "Is er nog een prosumententarief in Vlaanderen?",
    answer:
      "Nee. Sinds 2021, na de uitspraak van het Grondwettelijk Hof over de digitale meter, is er in Vlaanderen geen terugdraaiende teller en geen prosumententarief meer voor nieuwe installaties. Uw injectie op het net wordt vergoed via een terugleververgoeding die u met uw energieleverancier afspreekt, en die verschilt per contract.",
  },
  {
    question: "Maakt het capaciteitstarief zonnepanelen minder rendabel?",
    answer:
      "Niet noodzakelijk, maar het verandert de logica. Wat vandaag telt is eigenverbruik en het spreiden van pieken, niet injectie. Zonnepanelen die u dimensioneert op uw reële verbruik, eventueel met een batterij en slimme sturing, blijven rendabel. Panelen die enkel op maximaal vermogen worden gelegd zonder rekening te houden met uw verbruiksprofiel, renderen minder dan vroeger.",
  },
  {
    question: "Heeft een batterij nu meer zin door het capaciteitstarief?",
    answer:
      "In veel gevallen wel. Een batterij en slimme sturing kunnen uw maandpiek afvlakken (peak shaving): in plaats van 's avonds tegelijk te koken, te laden en te verwarmen van het net, put u dan uit de batterij. Of dat economisch klopt hangt af van uw verbruiksprofiel, uw investering en uw contract. Ik reken dat door op uw eigen cijfers, niet op een algemeen model.",
  },
  {
    question: "Wat kan ik zelf doen om mijn maandpiek laag te houden?",
    answer:
      "Vermijd om zware verbruikers tegelijk te laten draaien: laad uw elektrische wagen niet op hetzelfde moment dat uw warmtepomp, oven en kookvuur op vol vermogen staan. Veel laadpalen en warmtepompen kunnen slim gestuurd worden zodat ze pieken spreiden. Dat is vaak de goedkoopste ingreep, nog voor u aan een batterij denkt.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: GUIDE_TITLE,
          description:
            "Heldere uitleg over het capaciteitstarief van Fluvius en de gevolgen voor zonnepanelen, batterij en laadpaal in Vlaanderen.",
          url: PAGE_URL,
          datePublished: "2026-05-01",
          dateModified: "2026-06-01",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/nl/" },
          { name: "Gids", href: "/nl/gids/capaciteitstarief-vlaanderen/" },
          { name: "Capaciteitstarief Vlaanderen", href: PAGE_URL },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Capaciteitstarief Vlaanderen" },
        ]}
      />

      {/* Banner */}
      <section className="bg-ivory pt-8 md:pt-12">
        <div className="container-be max-w-5xl">
          <figure className="relative aspect-[21/9] rounded-2xl overflow-hidden ring-1 ring-midnight/8 shadow-[0_8px_28px_-12px_rgba(12,18,32,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/guides/guide-compteur-communicant.webp"
              alt="Digitale meter van Fluvius, basis voor het capaciteitstarief"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-midnight/35 to-transparent"
            />
          </figure>
        </div>
      </section>

      {/* HERO */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-4xl">
          <SectionLabel>Technische gids</SectionLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.05]">
            Capaciteitstarief in Vlaanderen: wat het echt betekent voor uw
            zonnepanelen
          </h1>
          <div className="mt-6 text-[16px] md:text-[17px] text-charcoal leading-[1.7] lg:columns-2 lg:gap-12 [&_p]:mb-5 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-midnight">
            <p>
              De vraag komt bij elk plaatsbezoek terug: <strong>verandert
              het capaciteitstarief mijn zonnepanelen?</strong> Kort
              antwoord: het verandert vooral de logica, niet het feit dat
              zonne-energie rendeert.
            </p>
            <p>
              Sinds 2023 is een deel van uw netfactuur gebaseerd op uw{" "}
              <strong>maandpiek</strong> in kilowatt, en niet meer alleen
              op uw verbruik in kWh. Tegelijk is er in Vlaanderen{" "}
              <strong>geen prosumententarief</strong> en geen terugdraaiende
              teller meer.
            </p>
            <p>
              Deze pagina legt uit wat dat concreet betekent: hoe uw
              maandpiek wordt berekend, waarom een batterij en slimme
              sturing interessanter worden, en waar ik als voormalig
              inspecteur op let voor ik een dossier bereken.
            </p>
            <p>
              <strong>Geen verzonnen cijfers</strong>, alleen wat vandaag
              echt geldt onder Fluvius.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-3xl">
          <SectionLabel>Hoe het werkt</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-6 leading-[1.15]">
            Uw maandpiek bepaalt mee uw netfactuur
          </h2>
          <div className="space-y-4 text-[15.5px] text-charcoal leading-relaxed">
            <p>
              Vroeger betaalde u nettarieven puur op basis van hoeveel
              elektriciteit u van het net afnam. Sinds 2023 kijkt Fluvius
              voor huishoudens met een digitale meter ook naar uw{" "}
              <strong className="text-midnight font-semibold">
                gemiddelde maandpiek
              </strong>
              : het gemiddelde van uw hoogste kwartierpieken per maand,
              uitgedrukt in kilowatt.
            </p>
            <p>
              Concreet: als u &apos;s avonds tegelijk kookt, uw
              elektrische wagen laadt en uw warmtepomp op vol vermogen
              draait, ontstaat er een hoge kwartierpiek. Dat gemiddelde
              van uw maandpieken bepaalt een deel van uw netfactuur.
              Fluvius rekent daarbij een{" "}
              <strong className="text-midnight font-semibold">
                minimumpiek van 2,5 kW
              </strong>{" "}
              aan, ook als u minder afneemt.
            </p>
            <p>
              De bedoeling van de overheid is duidelijk: verbruikers
              aanzetten om hun pieken te spreiden, zodat het net niet
              overbelast raakt wanneer iedereen tegelijk laadt en verwarmt.
            </p>
          </div>
        </div>
      </section>

      {/* NO PROSUMER */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <SectionLabel>Belangrijk verschil met Wallonie</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-6 leading-[1.15]">
            Geen prosumententarief, wel een terugleververgoeding
          </h2>
          <div className="space-y-4 text-[15.5px] text-charcoal leading-relaxed">
            <p>
              In Vlaanderen is er sinds 2021, na de uitspraak van het
              Grondwettelijk Hof over de digitale meter,{" "}
              <strong className="text-midnight font-semibold">
                geen terugdraaiende teller en geen prosumententarief
              </strong>{" "}
              meer voor nieuwe installaties. Dat is een belangrijk verschil
              met Wallonie, waar het prosumententarief nog wel bestaat.
            </p>
            <p>
              Wat u op het net injecteert, wordt vergoed via een{" "}
              <strong className="text-midnight font-semibold">
                terugleververgoeding
              </strong>{" "}
              die u met uw energieleverancier afspreekt. Die vergoeding
              verschilt per contract en ligt doorgaans een stuk lager dan
              de prijs die u betaalt om diezelfde elektriciteit terug van
              het net te halen.
            </p>
            <p>
              Het gevolg: elke kilowattuur die u zelf verbruikt op het
              moment dat uw panelen produceren, is meer waard dan een
              kilowattuur die u injecteert. <strong className="text-midnight font-semibold">Eigenverbruik is de
              hoeksteen</strong> van een rendabel dossier geworden.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT MEANS FOR SOLAR */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-3xl">
          <SectionLabel>Gevolgen voor uw project</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-6 leading-[1.15]">
            Drie dingen die vandaag echt tellen
          </h2>
          <ul className="space-y-4">
            {[
              {
                t: "Dimensioneer op uw reële verbruik",
                d: "Niet op het beschikbare dakoppervlak. Een installatie die past bij wanneer u echt verbruikt, rendeert beter dan een groter systeem dat zijn overschot goedkoop injecteert.",
              },
              {
                t: "Spreid uw pieken",
                d: "Laad uw wagen niet op hetzelfde moment als uw warmtepomp, oven en kookvuur op vol vermogen draaien. Slimme sturing van laadpaal en warmtepomp is vaak de goedkoopste ingreep om uw maandpiek laag te houden.",
              },
              {
                t: "Overweeg een batterij op basis van cijfers",
                d: "Een batterij kan uw maandpiek afvlakken en uw eigenverbruik verhogen. Of dat economisch klopt hangt af van uw profiel en uw contract. Dat reken ik door op uw eigen data, niet op een algemeen model.",
              },
            ].map((item) => (
              <li key={item.t} className="card p-5 md:p-6 flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex items-center justify-center w-9 h-9 -my-1 rounded-lg bg-amber/12 ring-1 ring-amber/30 text-amber-dark"
                >
                  <CheckIcon size={18} />
                </span>
                <div>
                  <h3 className="font-bold text-midnight text-[16px] leading-[1.3]">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-charcoal leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTADiagnostic
        locale="nl"
        title="Wilt u weten wat het capaciteitstarief voor uw situatie betekent?"
        description="Benoît rekent uw verbruiksprofiel, uw dak en uw maandpiek door en zegt u eerlijk of zonnepanelen, een batterij of slimme sturing bij u renderen. Gratis diagnose ter plaatse, in het Nederlands."
        variant="dark"
      />

      <FAQSection items={faq} title="Veelgestelde vragen" />

      {/* RELATED */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <SectionLabel>Verder lezen</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-8 leading-[1.15]">
            Diensten in uw regio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Zonnepanelen",
                href: "/nl/diensten/zonnepanelen/",
                d: "Ontwerp en installatie op maat, gedimensioneerd op uw reële verbruik.",
              },
              {
                title: "Thuisbatterijen",
                href: "/nl/diensten/thuisbatterijen/",
                d: "Alleen wanneer de berekening klopt voor uw profiel en contract.",
              },
              {
                title: "Laadpalen",
                href: "/nl/diensten/laadpalen/",
                d: "Slim gestuurd, zodat uw maandpiek onder controle blijft.",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group card p-6 hover:border-amber/40 transition-colors flex flex-col"
              >
                <h3 className="text-[16px] font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-charcoal/85 leading-relaxed flex-1">
                  {r.d}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-amber-dark group-hover:gap-2.5 transition-all">
                  Bekijk de dienst
                  <ArrowRightIcon size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
