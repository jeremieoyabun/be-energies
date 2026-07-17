import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { FAQSection } from "@/components/sections/FAQSection";
import { AlertTriangleIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

const PAGE_URL = "/nl/valstrikken/";

export const metadata = generatePageMetadata({
  title:
    "7 valkuilen om te vermijden vóór u een offerte tekent | Gids door een voormalig inspecteur",
  description:
    "Zonnepanelen, batterij, laadpaal: de 7 valkuilen om te controleren vóór u in Vlaanderen een offerte tekent. Checklist en de juiste vragen, door Benoît Dezso, voormalig inspecteur, RESCERT-gecertificeerd.",
  path: PAGE_URL,
  locale: "nl-BE",
});

interface Valstrik {
  number: number;
  title: string;
  severity: "kritiek" | "belangrijk" | "aandacht";
  trap: string;
  body: string;
  checklist: string[];
  question: string;
}

const severityLabel: Record<Valstrik["severity"], string> = {
  kritiek: "Kritiek risico",
  belangrijk: "Belangrijk risico",
  aandacht: "Aandachtspunt",
};

const severityBadge: Record<Valstrik["severity"], string> = {
  kritiek: "bg-[#b91c1c] text-white",
  belangrijk: "bg-amber/20 text-[#7c2d12] border border-amber/45",
  aandacht: "bg-electric text-white",
};

const valstrikken: Valstrik[] = [
  {
    number: 1,
    title: "Een terugverdientijd van 2 jaar",
    severity: "kritiek",
    trap: "Een terugverdientijd van twee jaar wordt beloofd om u snel te laten tekenen. In Vlaanderen is dat in 2026 rekenkundig niet houdbaar.",
    body: "Sinds er in Vlaanderen geen terugdraaiende teller en geen prosumententarief meer is, en met het capaciteitstarief erbovenop, hangt het rendement volledig af van uw eigenverbruik. Een eerlijke terugverdientijd voor een goed gedimensioneerde installatie ligt doorgaans tussen 8 en 14 jaar, niet 2. Wie 2 jaar belooft, rekent met verouderde of onrealistische aannames.",
    checklist: [
      "Vraag de berekening op basis van uw reële verbruik, niet van een gemiddelde.",
      "Controleer of eigenverbruik en injectie apart zijn berekend.",
      "Vraag welke terugleververgoeding is gebruikt en van welke leverancier.",
    ],
    question: "Op welk reëel verbruiksprofiel en welke terugleververgoeding is deze terugverdientijd gebaseerd?",
  },
  {
    number: 2,
    title: "De 'gratis' installatie",
    severity: "kritiek",
    trap: "Een 'gratis' installatie bestaat niet. Meestal is het een duur krediet of een verhuurformule die u over de looptijd meer kost.",
    body: "Achter een gratis of gefinancierde installatie zit vaak een lening met een hoge totale kost, of een contract waarbij een deel van uw opbrengst naar een derde partij gaat. Vraag altijd de totale kost over de volledige looptijd, en vergelijk ze met een klassieke aankoop.",
    checklist: [
      "Vraag de totale kost over de hele looptijd, niet de maandprijs.",
      "Controleer wie eigenaar is van de panelen en van de opbrengst.",
      "Vergelijk met een gewone aankoopofferte.",
    ],
    question: "Wat is de totale kost over de volledige looptijd, en wie is eigenaar van de installatie en de opbrengst?",
  },
  {
    number: 3,
    title: "De overdimensionering",
    severity: "kritiek",
    trap: "Meer panelen betekent meer marge voor de installateur, niet noodzakelijk meer voordeel voor u.",
    body: "Zonder terugdraaiende teller wordt elke kWh die u injecteert veel minder waard dan een kWh die u zelf verbruikt. Een installatie die te groot is voor uw verbruik verkoopt haar overschot goedkoop terug aan het net. Een correcte dimensionering vertrekt van uw verbruiksprofiel, niet van het beschikbare dakoppervlak.",
    checklist: [
      "Vraag waarom exact dit vermogen wordt voorgesteld.",
      "Laat het vermogen koppelen aan uw jaarverbruik en uw dagprofiel.",
      "Wees kritisch als het aantal panelen enkel door de dakgrootte wordt bepaald.",
    ],
    question: "Waarom stelt u precies dit vermogen voor, gelet op mijn reële verbruik overdag?",
  },
  {
    number: 4,
    title: "De offerte zonder plaatsbezoek",
    severity: "belangrijk",
    trap: "Een offerte per telefoon of online, zonder dat iemand het dak, het bord en de aansluiting heeft gezien, is een gok, geen voorstel.",
    body: "De oriëntatie, de schaduw, de staat van de dakbedekking, de draagkracht en het elektrisch bord bepalen samen of een installatie veilig en rendabel is. Dat kan niemand correct inschatten zonder plaatsbezoek. Een ernstige installateur komt eerst kijken en meet, en berekent daarna pas.",
    checklist: [
      "Aanvaard geen definitieve prijs zonder plaatsbezoek.",
      "Vraag of oriëntatie en schaduw ter plaatse zijn gemeten.",
      "Laat het elektrisch bord controleren vóór de offerte.",
    ],
    question: "Komt u het dak, het bord en de aansluiting ter plaatse controleren vóór u een definitieve prijs geeft?",
  },
  {
    number: 5,
    title: "De onderdimensioneerde omvormer",
    severity: "belangrijk",
    trap: "Een te kleine omvormer knijpt uw productie af zonder dat u het merkt, soms 10 tot 20 procent per jaar.",
    body: "De omvormer moet passen bij het vermogen van de panelen en bij de oriëntatie. Een omvormer die te krap is bemeten om de prijs te drukken, kapt op zonnige momenten een deel van de productie af. Over de levensduur van de installatie is dat een aanzienlijk verlies.",
    checklist: [
      "Vraag het merk, het model en het vermogen van de omvormer.",
      "Controleer de verhouding tussen paneelvermogen en omvormervermogen.",
      "Vraag de garantieduur van de omvormer apart van die van de panelen.",
    ],
    question: "Welk merk en vermogen heeft de omvormer, en hoe verhoudt zich dat tot het paneelvermogen?",
  },
  {
    number: 6,
    title: "De batterij die u niet nodig heeft",
    severity: "aandacht",
    trap: "Een batterij wordt soms verkocht als vanzelfsprekende oplossing, terwijl ze bij uw profiel misschien niet rendeert.",
    body: "Met het capaciteitstarief kan een batterij interessant worden om uw maandpiek af te vlakken en uw eigenverbruik te verhogen. Maar dat hangt af van uw verbruiksprofiel, uw investering en uw contract. Een eerlijke installateur rekent dat door op uw cijfers en zegt u ook wanneer een batterij beter nog even wacht.",
    checklist: [
      "Vraag de concrete berekening van de meerwaarde van de batterij.",
      "Laat het effect op uw maandpiek en uw eigenverbruik tonen.",
      "Aanvaard 'nee, nog niet' als een geldig en eerlijk antwoord.",
    ],
    question: "Kunt u met mijn cijfers aantonen dat een batterij vandaag bij mij rendeert?",
  },
  {
    number: 7,
    title: "De niet-conforme installatie",
    severity: "kritiek",
    trap: "Een installatie die niet conform is, is het onzichtbare risico dat uw verzekering kan uitsluiten en de keuring kan doen mislukken.",
    body: "Zonnepanelen, een batterij of een laadpaal grijpen in op uw elektrische installatie. Als het bord, de aarding of de beveiligingen niet in orde zijn, is het geheel niet veilig en niet conform. Als voormalig inspecteur ontwerp ik elke installatie zodat ze de keuring in één keer doorstaat, niet zodat ze er net langs geraakt.",
    checklist: [
      "Vraag of de installatie ontworpen is om de keuring te doorstaan.",
      "Laat de staat van bord, aarding en beveiligingen controleren.",
      "Vraag het keuringsverslag na de oplevering.",
    ],
    question: "Is de installatie ontworpen om de keuring in één keer te doorstaan, en krijg ik het keuringsverslag?",
  },
];

const faq: FAQItem[] = [
  {
    question: "Waarom is deze gids gratis?",
    answer:
      "Omdat een goed geïnformeerde klant betere keuzes maakt. En omdat installateurs die te duur of slecht dimensioneren er niet van houden dat iemand hun praktijken uitlegt. Deze gids is ons beste visitekaartje.",
  },
  {
    question: "Wie heeft deze gids geschreven?",
    answer:
      "Benoît Dezso, oprichter van Be'energies, voormalig inspecteur elektrotechnische installaties en RESCERT-gecertificeerd. Hij heeft deze valkuilen op het terrein vastgesteld, bij honderden installaties die hij gekeurd heeft.",
  },
  {
    question: "Gelden deze valkuilen ook voor Limburg en Vlaanderen?",
    answer:
      "Ja. De meeste valkuilen zijn universeel. In Vlaanderen komt daar het Vlaamse kader bij: geen prosumententarief, wel het capaciteitstarief sinds 2023. Daardoor is een correcte dimensionering op uw reële verbruik nog belangrijker geworden.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: "7 valkuilen om te vermijden vóór u een offerte tekent",
          description:
            "De 7 valkuilen om te controleren vóór u in Vlaanderen een offerte voor zonnepanelen, batterij of laadpaal tekent.",
          url: PAGE_URL,
          datePublished: "2026-05-01",
          dateModified: "2026-06-01",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/nl/" },
          { name: "Valstrikken", href: PAGE_URL },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Valstrikken" },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-midnight">
        <div className="container-be max-w-4xl">
          <div className="section-label section-label-dark">
            <span>Gratis gids</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-white leading-[1.05] text-balance">
            7 valkuilen om te vermijden vóór u tekent met een installateur
          </h1>
          <p className="mt-6 text-lg text-silver leading-relaxed max-w-2xl">
            Geschreven door Benoît Dezso, voormalig inspecteur
            elektrotechnische installaties, RESCERT-gecertificeerd. Hij heeft
            deze fouten honderden keren op het terrein gezien. Deze gids toont
            u precies waarop u moet letten vóór u iets tekent.
          </p>
        </div>
      </section>

      {/* Valstrikken */}
      {valstrikken.map((v, i) => (
        <section
          key={v.number}
          className={`section-padding ${i % 2 === 0 ? "" : "bg-ivory"}`}
        >
          <div className="container-be max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="step-badge step-badge-inverted shrink-0">
                {String(v.number).padStart(2, "0")}
              </span>
              <span
                className={`text-[11.5px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.12em] inline-flex items-center gap-1.5 ${severityBadge[v.severity]}`}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80"
                  aria-hidden="true"
                />
                {severityLabel[v.severity]}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-[family-name:var(--font-heading)] text-midnight mb-5 leading-[1.1] text-balance">
              {v.title}
            </h2>

            <div className="mb-8 flex items-start gap-3 bg-danger/8 ring-1 ring-danger/15 border-l-[5px] border-danger rounded-r-xl p-4 md:p-5">
              <AlertTriangleIcon
                size={20}
                className="text-danger shrink-0 mt-0.5"
              />
              <div>
                <p className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-danger mb-1.5">
                  De valstrik
                </p>
                <p className="text-charcoal leading-snug text-[15px] md:text-base">
                  {v.trap}
                </p>
              </div>
            </div>

            <p className="text-[15.5px] text-charcoal leading-relaxed mb-8">
              {v.body}
            </p>

            <div className="card p-6 md:p-7">
              <h3 className="flex items-center gap-2 font-bold text-midnight text-[12.5px] uppercase tracking-[0.16em] mb-5">
                <CheckIcon size={16} className="text-success" />
                Checklist: wat u moet controleren
              </h3>
              <ul className="space-y-2.5">
                {v.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-charcoal"
                  >
                    <span className="shrink-0 w-5 h-5 flex items-center justify-center border-[1.5px] border-midnight/35 bg-white rounded-md mt-0.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]" />
                    <span className="text-[14.5px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-midnight text-white rounded-2xl p-5 md:p-6 ring-1 ring-amber/25 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)]">
              <p className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber mb-2.5">
                Vraag aan uw installateur
              </p>
              <p className="font-[family-name:var(--font-heading)] text-[17px] md:text-[19px] leading-snug">
                « {v.question} »
              </p>
              <p className="mt-3 text-[12px] text-white/85">
                Geen duidelijk antwoord binnen de minuut: een waarschuwingssignaal.
              </p>
            </div>
          </div>
        </section>
      ))}

      <CTADiagnostic
        locale="nl"
        title="Een offerte die u wilt laten nakijken?"
        description="Stuur uw offerte door: Benoît leest ze met het oog van een voormalig inspecteur, controleert de dimensionering, de prijs en de conformiteit, en stuurt u een geschreven analyse. Gratis, in het Nederlands."
        variant="dark"
      />

      <FAQSection items={faq} title="Veelgestelde vragen" />

      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-4">
            Meer weten over uw regio?
          </h2>
          <p className="text-charcoal mb-6">
            Ontdek wat het capaciteitstarief betekent voor uw zonnepanelen in
            Vlaanderen.
          </p>
          <Link
            href="/nl/gids/capaciteitstarief-vlaanderen/"
            className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-7 py-3.5 rounded-xl transition-colors"
          >
            Lees de gids capaciteitstarief
          </Link>
        </div>
      </section>
    </>
  );
}
