// NL versions of service deep content — Belgian Dutch (nl-BE), formal U.
// Mirror the structure of service-content.ts. Numerical values, brand names
// and technical terms (kWc, kWh, kWh, IMPACT, RESCERT, ORES, etc.) are kept
// identical to the FR source so the data stays consistent across locales.

import type { ServicePageContent } from "./service-content";

export const serviceContentNl: Record<string, ServicePageContent> = {
  zonnepanelen: {
    seoTitle:
      "Zonnepanelen in België | Rendabele en conforme installatie",
    metaDescription:
      "Installatie van zonnepanelen door een voormalig inspecteur elektrische conformiteit, RESCERT-gecertificeerd. Realistische rendabiliteitsberekening, prosumertarief uitgelegd, terugverdientijd 5-7 jaar. Gratis diagnose.",
    headline:
      "Zonnepanelen in 2026: de eerlijke gids van een voormalig inspecteur",
    subheadline:
      "Benoît Dezso heeft honderden installaties geïnspecteerd voor hij Be'energies oprichtte. Elk systeem wordt gedimensioneerd om uw zelfverbruik te maximaliseren, niet om een offerte op te blazen.",
    sections: [
      {
        id: "rentabiliteit-2026",
        title:
          "Zijn zonnepanelen nog rendabel in 2026? Ja. Hier is de berekening.",
        body: `<p>Subsidies zijn verdwenen omdat panelen in tien jaar tijd vijf keer goedkoper zijn geworden. Zonne-energie was nog nooit zo rendabel zonder overheidssteun.</p>
<p><strong>Concreet voorbeeld: een systeem van 4,7 kWp (12 panelen) voor een gezin van 4 personen</strong></p>
<ul>
<li>Totale geïnstalleerde kost (BTW 6% voor woningen van 10 jaar en ouder): <strong>~9 700 EUR incl. BTW</strong></li>
<li>Geschatte jaarproductie: ~4 200 kWh</li>
<li>Beoogd zelfverbruikspercentage: 50%</li>
<li>Jaarlijkse besparingen zelfverbruik (2 100 kWh x 0,38 EUR): <strong>~798 EUR</strong></li>
<li>Inkomsten injectie (2 100 kWh x 0,04 EUR, gemiddeld tarief): <strong>~84 EUR</strong></li>
<li>Netto jaarlijkse besparingen op factuur: <strong>~1 200 - 1 600 EUR</strong></li>
<li>Terugverdientijd: <strong>5 tot 7 jaar</strong></li>
<li>Levensduur van het systeem: <strong>25-30 jaar</strong></li>
<li>Totale winst over de levensduur: <strong>20 000 - 35 000 EUR</strong></li>
</ul>
<p>Geannualiseerd rendement: ongeveer 12%. Ter vergelijking met een spaarrekening (~2%) of een gediversifieerde beleggingsportefeuille (~7%). Zonne-energie blijft een van de beste investeringen voor een Belgisch gezin.</p>`,
      },
      {
        id: "twee-regimes",
        title:
          "Voor of na 2024: twee regimes, twee volledig verschillende logica's",
        body: `<p>Dit is het belangrijkste onderscheid op de markt — en degene die de meeste installateurs niet de moeite nemen uit te leggen.</p>
<h4>Regime 1: installaties in gebruik genomen vóór 1 januari 2024</h4>
<ul>
<li>De meter draaide achterwaarts. Dit compensatiemechanisme blijft actief <strong>tot 31 december 2030</strong>.</li>
<li>U betaalt het <strong>prosumertarief</strong>: een jaarlijkse vaste vergoeding op basis van uw geïnstalleerd vermogen.</li>
<li>Het net werkt als een gratis virtuele batterij: u injecteert overdag, u neemt 's avonds af zonder bijkomende kosten.</li>
<li>Na 2030: iedereen schakelt over naar regime 2.</li>
</ul>
<h4>Regime 2: installaties in gebruik genomen na 1 januari 2024</h4>
<ul>
<li>Digitale meter (smart meter) verplicht. <strong>Geen prosumertarief.</strong></li>
<li>U betaalt alleen de elektriciteit die u werkelijk van het net afneemt.</li>
<li>Uw overschot wordt verkocht aan het injectietarief (1 tot 6 cent/kWh afhankelijk van de leverancier).</li>
<li>Elke kWh zelfverbruik bespaart u ~38 cent. Elke kWh geïnjecteerd levert u 1 tot 6 cent op. De verhouding is <strong>7x tot 46x in het voordeel van zelfverbruik</strong>.</li>
</ul>
<p>Wat dit voor u betekent: of u nu onder regime 1 of regime 2 valt, de juiste dimensionering van uw installatie is de bepalende factor. Dat is precies wat Benoît controleert tijdens de technische diagnose.</p>`,
      },
      {
        id: "prosumertarief",
        title:
          "Prosumertarief ontmythologiseerd: het is geen belasting, het is een netkost",
        body: `<p>Het prosumertarief is een vergoeding voor het gebruik van het distributienet. Vóór de invoering ervan betaalden huishoudens zonder panelen een onevenredig deel van de onderhoudskosten van het net. Het is noch een straf, noch een belasting: het is een eerlijke bijdrage.</p>
<p><strong>Bedragen 2026 per netbeheerder (incl. BTW):</strong></p>
<table>
<thead><tr><th>Netbeheerder</th><th>EUR/kWe/jaar</th><th>Kost voor 5 kWp</th></tr></thead>
<tbody>
<tr><td>ORES</td><td>85,84 EUR</td><td>~429 EUR/jaar</td></tr>
<tr><td>RESA</td><td>84,22 EUR</td><td>~421 EUR/jaar</td></tr>
<tr><td>AIEG</td><td>81,04 EUR</td><td>~405 EUR/jaar</td></tr>
<tr><td>AIESH</td><td>99,29 EUR</td><td>~496 EUR/jaar</td></tr>
<tr><td>REW</td><td>93,00 EUR</td><td>~465 EUR/jaar</td></tr>
</tbody>
</table>
<p>CWaPE-hypothese: het tarief wordt berekend op basis van 37,76% zelfverbruik. Overschrijdt u die drempel, dan is uw werkelijke situatie beter dan het tarief veronderstelt.</p>
<p><strong>Essentieel punt:</strong> installaties na 2024 met digitale meter betalen geen prosumertarief. Zij betalen enkel hun werkelijk verbruik. Als u vandaag installeert, is deze tabel niet op u van toepassing.</p>`,
      },
      {
        id: "zelfverbruik",
        title:
          "38 cent bespaard vs 1 tot 6 cent verdiend: de gouden regel van zelfverbruik",
        body: `<p>Dit is het cijfer dat elke beslissing moet sturen:</p>
<ul>
<li><strong>Gemiddelde aankoopprijs van elektriciteit: ~38 c/kWh</strong></li>
<li><strong>Beste injectietarief: 5,58 c/kWh</strong> (Energie.be)</li>
<li><strong>Slechtste injectietarief: 0,82 c/kWh</strong> (Mega)</li>
</ul>
<p>De elektriciteit die u zelf verbruikt is 7 tot 46 keer meer waard dan wat u doorverkoopt. De volledige dimensioneringsstrategie vloeit voort uit deze realiteit.</p>
<p><strong>Vergelijking van injectietarieven (maart 2026):</strong></p>
<table>
<thead><tr><th>Leverancier</th><th>c EUR/kWh</th></tr></thead>
<tbody>
<tr><td>Energie.be</td><td>5,58</td></tr>
<tr><td>Trevion Flex</td><td>4,63</td></tr>
<tr><td>EnergyVision</td><td>4,00</td></tr>
<tr><td>Frank Energie</td><td>3,86</td></tr>
<tr><td>Engie</td><td>3,69</td></tr>
<tr><td>Octa+</td><td>2,93</td></tr>
<tr><td>Luminus</td><td>2,37-2,89</td></tr>
<tr><td>TotalEnergies</td><td>0,93</td></tr>
<tr><td>Mega</td><td>0,82</td></tr>
</tbody>
</table>
<p>Concreet advies: kies uw leverancier door rekening te houden met het injectietarief, niet alleen met de aankoopprijs. Het verschil tussen de beste en de slechtste leverancier vertegenwoordigt enkele honderden euro's per jaar op het geïnjecteerde overschot.</p>`,
      },
      {
        id: "tarief-impact",
        title:
          "IMPACT-tarief 2026: drie tijdvakken die het verschil maken",
        body: `<p>Sinds 1 januari 2026 kunnen eigenaars van een digitale meter kiezen voor het IMPACT-tarief, met drie tijdvakken:</p>
<table>
<thead><tr><th>Tijdvak</th><th>Uren</th><th>Kostenniveau</th><th>Zonne-strategie</th></tr></thead>
<tbody>
<tr><td><strong>ECO</strong></td><td>01u-07u, 11u-17u</td><td>Goedkoopst</td><td>De piek van zonneproductie valt volledig binnen het ECO-tijdvak</td></tr>
<tr><td><strong>MEDIUM</strong></td><td>07u-11u, 22u-01u</td><td>Tussenliggend</td><td>Verbruik 's morgens en laat op de avond</td></tr>
<tr><td><strong>PIEK</strong></td><td>17u-22u</td><td>Duurst</td><td>Na de zon, sterke vraag: hier krijgt een batterij al haar zin</td></tr>
</tbody>
</table>
<p>Volgens de CWaPE-simulaties kan een aangepast huishouden tot <strong>14%</strong> besparen op zijn distributiefactuur, en tot <strong>28%</strong> met een elektrische wagen.</p>
<p><strong>Let op:</strong> BeProsumer signaleert (maart 2026) dat voor de ~350 000 prosumers die nog onder het compensatieregime vallen, de overstap naar een drie-uurformule risico's inhoudt. Verdoken balanceringskosten kunnen het voordeel tenietdoen. Een klassiek tweevoudig tarief blijft veiliger voor de meerderheid. Wij analyseren uw specifieke situatie tijdens de diagnose.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Voorafgaand technisch bezoek",
        others:
          "Offerte per e-mail op basis van Google Maps, zonder bezoek ter plaatse",
        beEnergies:
          "Verplicht technisch bezoek: dak, elektrische installatie, spanning, schaduw, werkelijk verbruik",
      },
      {
        aspect: "Rentabiliteitsberekening",
        others:
          "Generieke schatting met beloften van terugverdientijd in 2 jaar en opgeblazen projecties",
        beEnergies:
          "Persoonlijke berekening met werkelijke tarieven 2026 van uw netbeheerder, geschat zelfverbruikspercentage en injectietarief van uw leverancier",
      },
      {
        aspect: "Dimensionering",
        others:
          "Maximum aantal panelen om het offertebedrag te maximaliseren",
        beEnergies:
          "Dimensionering op uw werkelijk verbruik om zelfverbruik te maximaliseren, geen verliesgevende injectie",
      },
      {
        aspect: "Uitleg over het prosumertarief",
        others:
          "Zelden vermeld, of geminimaliseerd in de commerciële presentatie",
        beEnergies:
          "Gedetailleerd uitgelegd met de exacte bedragen van uw netbeheerder, geïntegreerd in de rentabiliteitsberekening",
      },
      {
        aspect: "Elektrische conformiteit",
        others:
          "Installatie geleverd zonder systematische controle na installatie",
        beEnergies:
          "Elke installatie ontworpen door een voormalig inspecteur elektrische conformiteit, RESCERT-gecertificeerd, om de keuring de eerste keer te doorstaan",
      },
      {
        aspect: "Opvolging na installatie",
        others:
          "Klantendienst per telefoon, wachttijden van meerdere weken",
        beEnergies:
          "Monitoring van productie, onderhoud en reglementaire begeleiding inbegrepen",
      },
    ],
    ctaTitle: "Gratis energiediagnose",
    ctaDescription:
      "Benoît analyseert uw verbruik, uw dak en uw elektrische installatie. U ontvangt een rendabiliteitsberekening op basis van de werkelijke tarieven 2026 van uw netbeheerder. Geen loze beloftes: een realistische berekening.",
    ctaLabel: "Vraag mijn gratis diagnose aan",
  },

  thuisbatterijen: {
    seoTitle: "Thuisbatterij in België | Wanneer rendabel, wanneer niet",
    metaDescription:
      "Thuisbatterij: wanneer is het rendabel en wanneer niet. Eerlijk advies van een voormalig inspecteur. 5 000-8 000 EUR. Gratis diagnose.",
    headline:
      "Thuisbatterij: wij verkopen er u alleen een als ze rendabel is voor u",
    subheadline:
      "Een voormalig inspecteur elektrische conformiteit zal u niet 5 000 tot 8 000 EUR laten investeren in apparatuur die niet te rechtvaardigen is. Hier leest u hoe u weet of een batterij in uw geval zinvol is.",
    sections: [
      {
        id: "wanneer-rendabel",
        title:
          "Wanneer een thuisbatterij rendabel is (en wanneer niet)",
        body: `<p>Het antwoord hangt af van uw installatiedatum en uw verbruiksprofiel.</p>
<h4>Als uw installatie van vóór 2024 dateert (compensatieregime)</h4>
<p>Uw meter draait nog steeds achterwaarts tot 31 december 2030. Het net fungeert als gratis virtuele batterij: u injecteert overdag, u neemt 's avonds af. <strong>In deze configuratie levert een fysieke batterij geen significante financiële winst op.</strong> Het net slaat uw overschot al gratis op.</p>
<p>Uitzondering: als uw omvormer regelmatig uitvalt door netspanningspieken (een groeiend probleem in Wallonië), kan een batterij het overschot opnemen in plaats van het te injecteren, wat productieverlies vermijdt.</p>
<h4>Als uw installatie van na 2024 dateert (digitale meter)</h4>
<p>U betaalt elke afgenomen kWh aan het volle tarief (~38 c/kWh) en verkoopt het overschot aan 1-6 c/kWh. Een batterij slaat het dagoverschot op om uw avondverbruik te dekken. De werkelijke winst hangt af van:</p>
<ul>
<li>Uw nachtverbruik (tussen 17u en 7u)</li>
<li>Uw huidig zelfverbruikspercentage (hoe lager, hoe meer de batterij helpt)</li>
<li>De aanwezigheid van een elektrische wagen of warmtepomp</li>
<li>Uw tariefstructuur (het IMPACT-tarief maakt de batterij interessanter dankzij de PIEK-uren van 17u tot 22u)</li>
</ul>`,
      },
      {
        id: "echte-cijfers-batterij",
        title: "De echte cijfers: kost, besparingen, levensduur",
        body: `<p><strong>Investering:</strong> tussen 5 000 en 8 000 EUR incl. BTW voor een lithium-ijzer-fosfaat-batterij van 5 tot 10 kWh.</p>
<p><strong>Geschatte jaarlijkse besparingen:</strong></p>
<ul>
<li>Huishouden zonder elektrische wagen: 220 tot 400 EUR/jaar</li>
<li>Huishouden met elektrische wagen en IMPACT-tarief: 400 tot 600 EUR/jaar</li>
</ul>
<p><strong>Terugverdientijd:</strong> 10 tot 15 jaar naargelang het profiel.</p>
<p><strong>Levensduur:</strong> 10 tot 15 jaar (fabrieksgarantie minimum 10 jaar).</p>
<p>De rendabiliteit is dus krap. Voor een huishouden zonder elektrische wagen in regime pre-2024 kan de terugverdientijd de levensduur van de batterij overschrijden. Daarom berekent Benoît uw specifieke situatie vóór hij ook maar iets aanbeveelt.</p>`,
      },
      {
        id: "batterij-impact",
        title:
          "Batterij en IMPACT-tarief: de combinatie die de vergelijking verandert",
        body: `<p>Het IMPACT-tarief (drie-uurtarief), ingevoerd in januari 2026, maakt de batterij relevanter voor installaties na 2024:</p>
<ul>
<li><strong>ECO-tijdvak (11u-17u):</strong> uw panelen produceren en laden de batterij op tegen de laagste kost</li>
<li><strong>PIEK-tijdvak (17u-22u):</strong> elektriciteit van het net is het duurst. Precies het moment waarop uw batterij zich ontlaadt om het huis te voeden</li>
</ul>
<p>De batterij benut het prijsverschil tussen de ECO- en de PIEK-uren. Hoe groter dit verschil, hoe meer de batterij zich rechtvaardigt.</p>
<p>Met een elektrische wagen wordt de logica nog sterker: het zonneladen tussen 10u en 16u laadt de wagen in het ECO-tijdvak, terwijl de batterij het huis bedient in het PIEK-tijdvak.</p>`,
      },
      {
        id: "dimensionering-batterij",
        title: "De juiste dimensionering: niet te veel, niet te weinig",
        body: `<p>Als voormalig inspecteur heeft Benoît installaties gezien waar de batterij overgedimensioneerd was ten opzichte van het werkelijke overschot. Resultaat: een zwaardere investering zonder evenredige winst.</p>
<p><strong>Dimensioneringsregel:</strong></p>
<ul>
<li>Uw batterij moet uw verbruik dekken tussen het einde van de zonneproductie (~17u) en de volgende ochtend (~7u)</li>
<li>Voor een gemiddeld huishouden: 5 tot 7 kWh volstaat</li>
<li>Boven 10 kWh blijft de bijkomende capaciteit de meeste nachten ongebruikt</li>
</ul>
<p>Wij dimensioneren op basis van uw werkelijke belastingscurve, niet van een generieke schatting.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Voorafgaand advies",
        others:
          "Batterij systematisch aangeboden om het offertebedrag te verhogen",
        beEnergies:
          "Batterij alleen aanbevolen als de berekening een redelijke terugverdientijd aantoont voor uw situatie",
      },
      {
        aspect: "Dimensionering",
        others:
          "Maximale capaciteit voorgesteld zonder analyse van het nachtverbruik",
        beEnergies:
          "Capaciteit berekend op uw werkelijke belastingscurve en uw uurprofiel",
      },
      {
        aspect: "Zonne-integratie",
        others:
          "Batterij geïnstalleerd zonder optimalisatie van de stroom panelen-batterij-net",
        beEnergies:
          "Geïntegreerde configuratie: panelen, batterij, omvormer en laadpaal geoptimaliseerd als één systeem",
      },
      {
        aspect: "Uitleg over IMPACT-tarief",
        others:
          "Zelden vermeld of slecht uitgelegd bij de verkoop",
        beEnergies:
          "Volledige simulatie met ECO/PIEK-tijdvakken en schatting van werkelijke besparingen",
      },
      {
        aspect: "Transparantie over rentabiliteit",
        others:
          "Beloftes van snelle rentabiliteit zonder rekening te houden met de levensduur",
        beEnergies:
          "Is de batterij niet rendabel in uw geval, dan zeggen we het. Wij verkiezen een goed geadviseerde klant boven een geforceerde verkoop.",
      },
    ],
    ctaTitle: "Is uw batterij rendabel? Laten we de berekening maken.",
    ctaDescription:
      "Benoît analyseert uw verbruik, uw bestaande installatie en uw uurprofiel. U krijgt een duidelijk antwoord: ja, nee of nog niet.",
    ctaLabel: "Vraag mijn gratis diagnose aan",
  },

  laadpalen: {
    seoTitle:
      "Laadpaal in België | Installatie thuis en bij bedrijven",
    metaDescription:
      "Installatie van laadpalen aan huis door een voormalig inspecteur. Zonne-integratie, laden 10u-16u, conformiteit gewaarborgd. Gratis diagnose.",
    headline:
      "Laadpaal aan huis: laad op met uw panelen, niet met het net",
    subheadline:
      "Een laadpaal installeren is eenvoudig. Hem correct integreren in uw elektrische installatie en zonnesysteem is een ander vak. Dat van een voormalig inspecteur conformiteit.",
    sections: [
      {
        id: "zonneladen",
        title:
          "Laden met de zon: de berekening die alles verandert",
        body: `<p>In 2026 wordt 1 op 3 elektrische wagens verkocht in België thuis opgeladen. De vraag is niet meer of u een laadpaal nodig hebt, maar hoe u hem slim aansluit op uw installatie.</p>
<p><strong>Het principe:</strong> uw panelen produceren tussen 10u en 16u. Uw wagen staat vaak thuis geparkeerd tijdens die uren (telewerk, weekends, pensioen). Door het laden te programmeren tijdens de uren van zonneproductie laadt u op aan de laagst mogelijke kost.</p>
<p><strong>Geschatte besparingen:</strong></p>
<ul>
<li>Standaard netladen: ~38 c/kWh, ongeveer <strong>7,60 EUR voor 100 km</strong></li>
<li>Direct zonneladen: bijna gratis (de zon factureert niet)</li>
<li>Met het IMPACT-tarief valt zonneladen tussen 11u en 17u in het ECO-tijdvak: dubbel voordeel</li>
</ul>
<p>Volgens de CWaPE-simulatie kan een huishouden met elektrische wagen en IMPACT-tarief tot <strong>28%</strong> besparen op zijn distributiefactuur.</p>`,
      },
      {
        id: "mono-tri",
        title:
          "7,4 kW eenfasig of 11-22 kW driefasig: welke keuze voor u",
        body: `<p>De keuze van het vermogen hangt af van drie factoren die Benoît tijdens de diagnose controleert:</p>
<h4>Laadpaal 7,4 kW (eenfasig)</h4>
<ul>
<li>Compatibel met de meeste bestaande residentiële installaties</li>
<li>Volledige laadtijd: 6 tot 8 uur (ruim voldoende voor nachtelijk of overdag laden)</li>
<li>Lagere installatiekost, geen wijziging van de aansluiting nodig in de meeste gevallen</li>
<li>Ideaal als uw meter eenfasig is en u geen warmtepomp overweegt</li>
</ul>
<h4>Laadpaal 11 tot 22 kW (driefasig)</h4>
<ul>
<li>Vereist een driefasige aansluiting (voorafgaande controle onontbeerlijk)</li>
<li>Volledige laadtijd: 2 tot 4 uur</li>
<li>Relevant als u veel rijdt (+40 000 km/jaar) of als de wagen snel beschikbaar moet zijn</li>
<li>Past beter in een globaal systeem (panelen + batterij + warmtepomp + laadpaal)</li>
</ul>
<p><strong>Wat Benoît controleert en anderen niet:</strong> de capaciteit van uw schakelbord, de doorsnede van de bestaande kabels, de netspanning en de compatibiliteit met uw zonne-omvormer. Een 22 kW-laadpaal op een ondergedimensioneerd schakelbord is een gegarandeerd niet-conformiteitsrapport.</p>`,
      },
      {
        id: "systeem-integratie",
        title:
          "De laadpaal als onderdeel van een volledig energiesysteem",
        body: `<p>Een laadpaal alleen geïnstalleerd is een product. Een laadpaal geïntegreerd met uw panelen, uw batterij en uw tariefstructuur is een strategie.</p>
<p><strong>Optimale configuratie:</strong></p>
<ul>
<li><strong>Zonnepanelen</strong>: produceren tussen 10u en 16u</li>
<li><strong>Laadpaal</strong>: geprogrammeerd om te laden tijdens de zonneproductie-uren</li>
<li><strong>Thuisbatterij</strong>: slaat het zonne-overschot op voor het avondverbruik (PIEK-tijdvak 17u-22u)</li>
<li><strong>IMPACT-tarief</strong>: laden in ECO-tijdvak, batterijverbruik in PIEK-tijdvak</li>
</ul>
<p>Vier verschillende bedrijven coördineren om dit resultaat te bereiken is een lijdensweg. Bij Be'energies beheerst één aanspreekpunt het volledige systeem.</p>`,
      },
      {
        id: "conformiteit-laadpaal",
        title:
          "Elektrische conformiteit: het punt dat niemand vermeldt",
        body: `<p>Een laadpaal is een toestel met hoog vermogen dat permanent aangesloten is. De conformiteitseisen zijn streng:</p>
<ul>
<li>Specifieke differentieelschakelaar (type A of type B afhankelijk van het laadpaalmodel)</li>
<li>Kabeldoorsnede afgestemd op het vermogen en de lengte van het tracé</li>
<li>Conforme aarding</li>
<li>Correct gekalibreerde automaat</li>
</ul>
<p>Als voormalig inspecteur heeft Benoît niet-conformiteitsrapporten ingediend voor laadpalen geïnstalleerd met ondergedimensioneerde kabels, ongeschikte beveiligingen of gebrekkige aarding. Dat is geen theorie: het zijn fouten die hij ter plaatse heeft vastgesteld en die hij niet zal herhalen.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Controle van het schakelbord",
        others:
          "Laadpaal geïnstalleerd zonder de capaciteit van het bestaande schakelbord te controleren",
        beEnergies:
          "Volledige diagnose van schakelbord, aansluiting en kabeldoorsnede vóór elke installatie",
      },
      {
        aspect: "Zonne-integratie",
        others:
          "Laadpaal geïnstalleerd los van het zonnesysteem",
        beEnergies:
          "Programmering van het laden tijdens zonneproductie-uren, optimalisatie van de energiestroom",
      },
      {
        aspect: "Vermogenkeuze",
        others:
          "Maximaal vermogen voorgesteld zonder analyse van de bestaande aansluiting",
        beEnergies:
          "Aanbevolen vermogen op basis van uw aansluiting, uw verbruik en uw zonneproductie",
      },
      {
        aspect: "Elektrische conformiteit",
        others:
          "Generieke differentieelschakelaar, geen controle na installatie",
        beEnergies:
          "Specifieke beveiliging, conformiteitscontrole door een voormalig inspecteur, installatie klaar voor de keuring",
      },
      {
        aspect: "Systeemvisie",
        others:
          "Laadpaal behandeld als geïsoleerd product",
        beEnergies:
          "Laadpaal geïntegreerd in een ecosysteem: panelen, batterij, warmtepomp, IMPACT-tarief",
      },
    ],
    ctaTitle: "Gratis laadpaal-diagnose",
    ctaDescription:
      "Benoît controleert uw aansluiting, uw schakelbord en uw zonne-installatie. U krijgt een duidelijke aanbeveling over het vermogen, het model en de optimale integratie.",
    ctaLabel: "Vraag mijn gratis diagnose aan",
  },

  "elektrische-conformiteit": {
    seoTitle:
      "Elektrische conformiteit in België | Keuring, in conformiteit brengen en rapport",
    metaDescription:
      "In conformiteit brengen door een voormalig inspecteur elektrische installaties, RESCERT-gecertificeerd. Hij schreef jarenlang niet-conformiteitsrapporten. Gratis diagnose.",
    headline:
      "Elektrische conformiteit: door wie de niet-conformiteitsrapporten schreef",
    subheadline:
      "Benoît Dezso heeft jarenlang elektrische installaties geïnspecteerd voor erkende organismen. Hij weet precies wat de keurder zal controleren. Uw installatie zal er klaar voor zijn.",
    sections: [
      {
        id: "waarom-conformiteit",
        title:
          "Elektrische conformiteit is geen formaliteit. Het is bescherming.",
        body: `<p>Een niet-conforme installatie houdt drie concrete risico's in:</p>
<ul>
<li><strong>Veiligheidsrisico:</strong> elektrocutie, brand van elektrische oorsprong, oververhitting van kabels. Dat zijn geen hypotheses: dat zijn schadegevallen die Benoît tijdens zijn inspectiejaren heeft gedocumenteerd.</li>
<li><strong>Verzekeringsrisico:</strong> bij een elektrisch schadegeval controleert uw woonverzekering de conformiteit van de installatie. Is ze niet conform, dan kan de dekking geweigerd worden. U draagt dan zelf de financiële gevolgen.</li>
<li><strong>Administratief risico:</strong> bij verkoop van een woning blokkeert of vertraagt een niet-conformiteitsrapport de transactie. De kost van in conformiteit brengen onder druk is altijd hoger.</li>
</ul>
<p>Conformiteit beschermt uw gezin, uw vermogen en uw gemoedsrust. Daarom heeft Benoît het gekozen als fundament van zijn vak.</p>`,
      },
      {
        id: "blik-inspecteur",
        title:
          "Het voordeel van een voormalig inspecteur: hij kent het rapport voor het bestaat",
        body: `<p>Tijdens zijn inspectiejaren heeft Benoît honderden niet-conformiteitsrapporten geschreven. Hij kent de meest voorkomende overtredingen, de punten die elke keurder bij voorrang controleert en de technische details die het verschil maken tussen een blanco rapport en een lijst met opmerkingen.</p>
<p><strong>De 5 meest voorkomende overtredingen die hij vaststelde:</strong></p>
<ol>
<li><strong>Afwezigheid van 30 mA-differentieelschakelaar</strong> op gevoelige circuits (badkamer, keuken, buiten)</li>
<li><strong>Gebrekkige of afwezige aarding</strong>: aardingsweerstand boven 30 ohm</li>
<li><strong>Niet-conforme of afwezige eendraadschema's</strong>: het plan van uw installatie moet de realiteit weerspiegelen</li>
<li><strong>Ongeschikte kabeldoorsneden</strong>: kabels ondergedimensioneerd voor de werkelijke belasting</li>
<li><strong>Gemengde circuits</strong>: verlichting en stopcontacten op dezelfde automaat, met overschrijding van de toelaatbare belasting</li>
</ol>
<p>Elk van deze punten wordt systematisch gecontroleerd bij elke Be'energies-interventie. Niet omdat het een procedure is: omdat Benoît ze honderden keren keuringsweigeringen heeft zien veroorzaken.</p>`,
      },
      {
        id: "wanneer-conformiteit",
        title:
          "Wanneer moet u de conformiteit van uw installatie laten controleren?",
        body: `<p>De conformiteitskeuring is verplicht in de volgende situaties:</p>
<ul>
<li><strong>Nieuwe installatie</strong>: vóór de inbedrijfstelling</li>
<li><strong>Belangrijke wijziging</strong>: toevoeging van zonnepanelen, laadpaal, warmtepomp, uitbreiding van het schakelbord</li>
<li><strong>Verkoop van het onroerend goed</strong>: het conformiteitsrapport wordt vereist door de notaris</li>
<li><strong>Periodieke keuring</strong>: elke 25 jaar voor residentiële installaties</li>
</ul>
<p><strong>Advies van Benoît:</strong> wacht niet op de verkoop om niet-conformiteiten te ontdekken. De kost van een gepland in-conformiteit-brengen is significant lager dan die van een in-conformiteit-brengen in de spoed van een vastgoedtransactie.</p>`,
      },
      {
        id: "proces-conformiteit",
        title:
          "Ons proces: van diagnose tot blanco rapport",
        body: `<p>Be'energies past een gestructureerde methodologie toe, rechtstreeks afgeleid uit Benoîts inspectie-ervaring:</p>
<ol>
<li><strong>Volledige diagnose</strong>: visuele inspectie en metingen (aardingsweerstand, lusimpedantie, controle van differentieelschakelaars, doorsnedecontrole). Wij identificeren elke afwijking ten opzichte van de normen.</li>
<li><strong>Pre-inspectierapport</strong>: u ontvangt een document dat elk niet-conform punt detailleert, met prioriteit, geschatte kost en technische uitleg.</li>
<li><strong>In-conformiteit-brengen-werken</strong>: uitvoering van de nodige wijzigingen. Geen overbodige werken, geen overfacturering, alleen wat door de norm wordt vereist.</li>
<li><strong>Finale controle</strong>: vóór de tussenkomst van het erkende organisme voert Benoît een interne controle uit identiek aan die van de keurder. Hetzelfde oog, dezelfde methode, dezelfde criteria.</li>
</ol>
<p>Resultaat: uw installatie slaagt voor de keuring vanaf de eerste keer. Geen verrassing, geen betalend bijkomend bezoek, geen stress.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Expertise van de verantwoordelijke",
        others:
          "Algemene elektricien zonder specifieke ervaring in conformiteitsinspectie",
        beEnergies:
          "Voormalig inspecteur elektrische installaties, RESCERT-gecertificeerd, auteur van honderden niet-conformiteitsrapporten",
      },
      {
        aspect: "Voorafgaande diagnose",
        others:
          "Directe interventie zonder voorafgaande beoordeling van de installatie",
        beEnergies:
          "Volledige pre-inspectie met gedetailleerd rapport vóór elke werk",
      },
      {
        aspect: "Kennis van normen",
        others:
          "Toepassing van bekende normen, zonder globale visie op het keuringsproces",
        beEnergies:
          "Nauwkeurige kennis van wat elk erkend organisme controleert, punt voor punt",
      },
      {
        aspect: "Controle na werken",
        others:
          "Werken afgerond, de klant wacht op de keuring in de hoop dat alles in orde is",
        beEnergies:
          "Interne controle identiek aan die van het erkende organisme vóór het officiële bezoek",
      },
      {
        aspect: "Eendraadschema's",
        others:
          "Generiek schema of niet bijgewerkt na de werken",
        beEnergies:
          "Eendraadschema conform aan de realiteit van de installatie, systematisch bijgewerkt",
      },
      {
        aspect: "Slaagpercentage eerste keuring",
        others:
          "Variabel, met frequente herhalingen die tijd en geld kosten",
        beEnergies:
          "Installatie ontworpen om de keuring de eerste keer te doorstaan, zonder opmerking",
      },
    ],
    ctaTitle: "Gratis conformiteitsdiagnose",
    ctaDescription:
      "Benoît inspecteert uw installatie met dezelfde blik als een erkend keurder. U ontvangt een nauwkeurige stand van zaken vóór elke interventie.",
    ctaLabel: "Vraag mijn gratis diagnose aan",
  },

  warmtepompen: {
    seoTitle:
      "Warmtepomp in België | Dimensionering en zonne-integratie",
    metaDescription:
      "Lucht/water- en lucht/lucht-warmtepomp geïntegreerd met uw zonnepanelen. Dimensionering door een voormalig inspecteur. IMPACT-tarief geoptimaliseerd. Gratis diagnose.",
    headline:
      "Warmtepomp: verwarming en airco geïntegreerd in uw zonnesysteem",
    subheadline:
      "Een slecht gedimensioneerde warmtepomp verbruikt meer dan ze bespaart. Benoît dimensioneert uw systeem zodat het samenwerkt met uw panelen, niet tegen uw factuur.",
    sections: [
      {
        id: "lucht-water-lucht-lucht",
        title:
          "Lucht/water of lucht/lucht: twee technologieën, twee gebruiken",
        body: `<p>De keuze tussen lucht/water en lucht/lucht hangt af van uw bestaand systeem en uw behoeften. Hier is het concrete onderscheid:</p>
<h4>Lucht/water-warmtepomp</h4>
<ul>
<li><strong>Gebruik:</strong> centrale verwarming (radiatoren of vloerverwarming) + sanitair warm water</li>
<li><strong>Rendement:</strong> gemiddelde COP van 3 tot 4 (voor 1 kWh elektriciteit, 3 tot 4 kWh warmte)</li>
<li><strong>Investering:</strong> 8 000 tot 15 000 EUR incl. BTW naargelang vermogen en model</li>
<li><strong>Ideaal als:</strong> u een mazout- of gasketel vervangt, u een bestaande centrale verwarming hebt, u sanitair warm water wilt integreren</li>
<li><strong>Beperking:</strong> verminderd rendement onder -7°C (elektrische bijverwarming nodig enkele dagen per jaar in België)</li>
</ul>
<h4>Lucht/lucht-warmtepomp (reversibele airco)</h4>
<ul>
<li><strong>Gebruik:</strong> bijverwarming kamer per kamer + airco in de zomer</li>
<li><strong>Rendement:</strong> gemiddelde COP van 3 tot 5 (uitstekend in airco-modus)</li>
<li><strong>Investering:</strong> 2 500 tot 6 000 EUR incl. BTW naargelang het aantal units</li>
<li><strong>Ideaal als:</strong> u airco wilt in de zomer, u verwarmt op hout of pellets en zoekt een aanvulling, u renoveert kamer per kamer</li>
<li><strong>Beperking:</strong> vervangt geen centrale verwarming, produceert geen sanitair warm water</li>
</ul>`,
      },
      {
        id: "zonne-integratie-wp",
        title:
          "Warmtepomp + zonnepanelen: de strategische combinatie",
        body: `<p>Een warmtepomp verbruikt elektriciteit. Komt die elektriciteit van uw panelen in plaats van het net, dan daalt de werkingskost.</p>
<p><strong>De berekening:</strong></p>
<ul>
<li>Lucht/water-warmtepomp: typisch jaarverbruik van 3 000 tot 5 000 kWh</li>
<li>Kost van het net (~38 c/kWh): 1 140 tot 1 900 EUR/jaar</li>
<li>Kost in zonne-zelfverbruik: bijna nul</li>
</ul>
<p>Door uw panelen te dimensioneren om ook het verbruik van de warmtepomp te dekken, transformeert u een uitgavepost in een post gedekt door uw productie.</p>
<p><strong>Let op de dimensionering:</strong> een warmtepomp verhoogt uw elektrisch verbruik aanzienlijk. Zijn uw panelen al krap gedimensioneerd, dan zullen er waarschijnlijk modules moeten worden toegevoegd. Dit punt controleert Benoît systematisch tijdens de diagnose.</p>`,
      },
      {
        id: "wp-impact",
        title:
          "IMPACT-tarief en warmtepomp: de verwarmingsuren optimaliseren",
        body: `<p>Het IMPACT-tarief (drie-uurtarief) biedt een concrete opportuniteit voor eigenaars van een warmtepomp:</p>
<ul>
<li><strong>ECO-tijdvak (11u-17u):</strong> uw panelen produceren, uw warmtepomp kan de boiler voorverwarmen en warmte accumuleren in de vloerverwarming (thermische inertie)</li>
<li><strong>PIEK-tijdvak (17u-22u):</strong> de warmtepomp werkt op de geaccumuleerde warmte of op de batterij en vermijdt zo het duurste tarief</li>
</ul>
<p>Slimme programmering van de warmtepomp volgens de IMPACT-tijdvakken kan de verwarmingskost met bijkomend <strong>15 tot 25%</strong> verlagen, bovenop het zonne-zelfverbruik.</p>
<p>Dit is een concreet voorbeeld van wat een geïntegreerd energiesysteem kan opleveren wanneer het als een geheel ontworpen wordt, niet als een optelsom van afzonderlijke producten.</p>`,
      },
      {
        id: "conformiteit-wp",
        title:
          "Elektrische conformiteit: de warmtepomp is een post met hoog vermogen",
        body: `<p>De installatie van een warmtepomp wijzigt de belasting van uw elektrische installatie aanzienlijk. Kritieke conformiteitspunten:</p>
<ul>
<li><strong>Specifieke elektrische aansluiting</strong>: beveiligd circuit, gekalibreerde automaat, kabel met geschikte doorsnede</li>
<li><strong>Compatibiliteit met de bestaande aansluiting</strong>: een lucht/water-WP van 8 kW op een beperkte eenfasige aansluiting vereist een controle van het beschikbare vermogen</li>
<li><strong>Aarding van de buitenunit</strong>: verplicht en vaak verwaarloosd</li>
<li><strong>Bijgewerkt eendraadschema</strong>: de toevoeging van de WP moet op het schema staan opdat de installatie conform blijft</li>
</ul>
<p>Als voormalig inspecteur heeft Benoît talrijke warmtepompinstallaties vastgesteld die niet-conform aangesloten waren: ondergedimensioneerde kabels, afwezigheid van specifieke beveiliging, niet-bijgewerkte schema's. Elke Be'energies-installatie integreert conformiteit van bij het ontwerp, niet als een toevoeging achteraf.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Dimensionering",
        others:
          "Standaardvermogen voorgesteld zonder berekening van de warmteverliezen van het gebouw",
        beEnergies:
          "Thermische berekening op basis van isolatie, oppervlakte, oriëntatie en de werkelijke behoeften van het huishouden",
      },
      {
        aspect: "Zonne-integratie",
        others:
          "Warmtepomp geïnstalleerd zonder coördinatie met de bestaande zonne-installatie",
        beEnergies:
          "Gezamenlijke dimensionering: panelen + WP + batterij geoptimaliseerd om zelfverbruik te maximaliseren",
      },
      {
        aspect: "Tariefoptimalisatie",
        others:
          "Geen rekening met het IMPACT-tarief in de programmering van de WP",
        beEnergies:
          "Programmering van de WP volgens de ECO/PIEK-tijdvakken om de werkingskost te minimaliseren",
      },
      {
        aspect: "Elektrische conformiteit",
        others:
          "Elektrische aansluiting behandeld als detail, zonder controle van het eendraadschema",
        beEnergies:
          "Specifiek conform circuit, bijgewerkt eendraadschema, controle door een voormalig inspecteur elektrische installaties, RESCERT-gecertificeerd",
      },
      {
        aspect: "Plaatsing van de buitenunit",
        others:
          "Positionering op basis van installatiegemak, zonder rekening met geluid en efficiëntie",
        beEnergies:
          "Geoptimaliseerde positionering voor thermisch rendement, geluidsniveau (35-50 dB) en respect voor de buren",
      },
    ],
    ctaTitle: "Gratis warmtepomp-diagnose",
    ctaDescription:
      "Benoît evalueert uw woning, uw bestaand verwarmingssysteem en uw elektrische installatie. U krijgt een duidelijke aanbeveling: lucht/water of lucht/lucht, het aangepaste vermogen en de integratieberekening met uw panelen.",
    ctaLabel: "Vraag mijn gratis diagnose aan",
  },
};

export function getServiceContentNl(
  slugNl: string,
): ServicePageContent | undefined {
  return serviceContentNl[slugNl];
}
