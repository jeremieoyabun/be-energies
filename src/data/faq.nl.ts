// NL versions of FAQ blocks - Belgian Dutch (nl-BE), formal U.
// Keep technical terms (kWh, kWp, RESCERT, prosumer, IMPACT, CWaPE, COP,
// LFP, NMC) identical to the FR source.

import type { FAQItem } from "@/lib/types";

export const homepageFaqNl: FAQItem[] = [
  {
    question: "Zijn zonnepanelen nog rendabel in 2026?",
    answer:
      "Ja. De terugverdientijd ligt tussen 5 en 7 jaar, wat overeenkomt met een jaarlijks rendement van ongeveer 12 %. Een typische installatie van 4,7 kWp kost ongeveer 9 700 EUR incl. BTW (6 % BTW voor woningen ouder dan 10 jaar) en levert tussen 1 200 en 1 600 EUR aan jaarlijkse besparingen op. Elke kWh die u zelf verbruikt bespaart u ongeveer 38 cent, tegenover 1 tot 6 cent voor de kWh die u injecteert op het net. De kost van panelen is in tien jaar tijd vijf keer gedaald: zonne-energie was nog nooit zo toegankelijk.",
  },
  {
    question: "Wat is het prosumertarief en moet ik het betalen?",
    answer:
      "Het prosumertarief is een jaarlijkse vergoeding voor het gebruik van het net, alleen van toepassing op installaties die vóór 2024 in dienst werden genomen. Het bedrag verschilt per netbeheerder: ORES rekent ongeveer 85,84 EUR/kWe/jaar, RESA ongeveer 84,22 EUR/kWe/jaar. Voor een installatie van 5 kWp bij ORES komt dat neer op ongeveer 429 EUR/jaar. Installaties die sinds januari 2024 in dienst zijn genomen met een digitale meter betalen dit tarief niet: u betaalt alleen de werkelijk afgenomen elektriciteit.",
  },
  {
    question:
      "Waarom kiezen voor een voormalig inspecteur, RESCERT-gecertificeerd, als installateur?",
    answer:
      "Benoît Dezsö besteedde meer dan 10 jaar aan het inspecteren van elektrische en fotovoltaïsche installaties voor erkende organismen. Hij documenteerde de meest voorkomende fouten in de sector: ondergedimensioneerde omvormers, niet-conforme bekabeling, dimensioneringen gebaseerd op beloften in plaats van echte berekeningen. Vandaag ontwerpt hij elke Be'energies-installatie met dezelfde strengheid die hij als inspecteur eiste. Resultaat: uw installatie is ontworpen om de conformiteitskeuring de eerste keer te doorstaan, zonder slechte verrassingen.",
  },
  {
    question: "Welke diensten biedt Be'energies?",
    answer:
      "Be'energies dekt het volledige energie-ecosysteem van uw woning: zonnepanelen, thuisbatterijen, laadpalen voor elektrische voertuigen, warmtepompen en airco, in-conformiteit-brengen van de elektrische installatie en dakreiniging. Het voordeel van één aanspreekpunt is de technische coherentie tussen elk element. Benoît ontwerpt uw installatie als een geïntegreerd systeem, niet als een optelsom van afzonderlijk verkochte producten.",
  },
  {
    question: "Hoe verloopt de gratis energiediagnose?",
    answer:
      "De diagnose begint altijd met een bezoek ter plaatse. Benoît analyseert uw werkelijk verbruik, de oriëntatie en staat van uw dak, de capaciteit van uw schakelbord en de spanning van het lokale net. Vervolgens ontvangt u een becijferd voorstel op basis van de werkelijke tarieven 2026 van uw netbeheerder, met een eerlijke rentabiliteitsberekening. Het is geen generieke schatting: het is een persoonlijke balans waarmee u een geïnformeerde beslissing kunt nemen, vrijblijvend.",
  },
];

export const pvServiceFaqNl: FAQItem[] = [
  {
    question:
      "Hoeveel zonnepanelen zijn nodig voor een woning in België?",
    answer:
      "Dat hangt af van uw verbruik, niet van de oppervlakte van uw dak. Voor een gemiddeld huishouden dat 3 500 kWh per jaar verbruikt, reken op ongeveer 10 panelen (3,5 kWp). Voor een gezin van vier personen met een verbruik van 4 500 tot 5 000 kWh komen we aan 12-14 panelen. Benoît dimensioneert altijd op basis van uw werkelijke factuur en uw verbruiksprofiel, niet op basis van de beschikbare dakoppervlakte.",
  },
  {
    question: "Maakt het prosumertarief de rentabiliteit teniet?",
    answer:
      "Nee. Het prosumertarief bedraagt ongeveer 85,84 EUR/kWe/jaar bij ORES. Voor een installatie van 5 kWp komt dat neer op ongeveer 429 EUR/jaar. De zelfverbruiksbesparingen voor dezelfde installatie liggen tussen 1 200 en 1 600 EUR/jaar. Het saldo blijft ruim positief, tussen 800 en 1 200 EUR netto besparingen per jaar. En voor installaties die sinds januari 2024 met digitale meter in dienst zijn genomen, is dit tarief gewoon niet van toepassing.",
  },
  {
    question:
      "Wat is het verschil tussen compensatie en injectie?",
    answer:
      "Installaties die vóór 2024 in dienst werden genomen, genieten het compensatieregime: de meter draait achterwaarts, en die compensatie blijft behouden tot 31 december 2030. Installaties vanaf januari 2024 zijn uitgerust met een digitale meter die afzonderlijk de afgenomen en geïnjecteerde energie meet. Elke geïnjecteerde kWh wordt vergoed aan het injectietarief van uw leverancier (van 0,82 cent bij Mega tot 5,58 cent bij Energie.be), ruim onder de aankoopprijs van ongeveer 38 cent. Daarom is het maximaliseren van zelfverbruik de prioritaire strategie geworden.",
  },
  {
    question: "Hoe lang duurt de installatie?",
    answer:
      "De installatie zelf duurt 1 tot 2 dagen voor een standaard residentiële woning. Daarvóór komt de diagnose ter plaatse (verplicht technisch bezoek), het gedetailleerde voorstel met rentabiliteitsberekening en de administratieve stappen bij uw netbeheerder. Reken op 2 tot 3 weken tussen ondertekening en indienstelling.",
  },
  {
    question: "Werkt Be'energies in mijn streek?",
    answer:
      "Wij werken in heel Wallonië, in Brussel en in Vlaams-Limburg (Riemst, Tongeren, Bilzen, Hasselt). Benoît komt persoonlijk langs voor elke diagnose en superviseert elk project. Raadpleeg onze lokale pagina's om de realisaties in uw stad te zien.",
  },
  {
    question: "Welke merken panelen gebruikt u?",
    answer:
      "Wij werken uitsluitend met tier-1-merken die bekend staan om hun betrouwbaarheid op lange termijn: SunPower, Longi, Canadian Solar. Voor de omvormers installeren wij SolarEdge, Huawei of Enphase afhankelijk van uw dakconfiguratie en monitoringbehoeften. De materiaalkeuze wordt aangepast aan elk project: Benoît selecteert de optimale combinatie na het technische bezoek, niet ervoor.",
  },
  {
    question: "Wat gebeurt er na de installatie?",
    answer:
      "De opvolging na installatie is inbegrepen: conformiteitscontrole, indienstelling, configuratie van de productiemonitoring en doorlopende ondersteuning. Verzwakt een paneel of meldt uw omvormer een probleem, dan detecteren wij dit via de monitoring en grijpen in. Be'energies verdwijnt niet na de verkoop : dat was trouwens een van de criteria die Benoît systematisch controleerde bij zijn inspecties.",
  },
  {
    question: "Kan er later een batterij worden toegevoegd?",
    answer:
      "Ja. Wij dimensioneren de omvormer en de bekabeling al bij het oorspronkelijke ontwerp om de latere toevoeging van een thuisbatterij mogelijk te maken. Het is een voorbereidingsstap die bijna niets kost bij de installatie maar u belangrijke kosten bespaart als u over enkele jaren beslist opslag toe te voegen, vooral wanneer de compensatie in 2030 afloopt.",
  },
  {
    question:
      "Wat is het IMPACT-tarief en hoe profiteer ik ervan met mijn zonnepanelen?",
    answer:
      "Het IMPACT-tarief is een drie-uurtarief beschikbaar sinds januari 2026 voor bezitters van een digitale meter. Het onderscheidt drie periodes: ECO (01u-07u en 11u-17u, goedkoopst), MEDIUM (07u-11u en 22u-01u) en PIEK (17u-22u, duurst). Het goede nieuws voor eigenaars van zonnepanelen is dat de uren van maximale productie (11u-17u) samenvallen met de ECO-uren. Volgens de CWaPE-simulaties kan een huishouden dat zijn verbruik aanpast tot 14 % besparen, en tot 28 % met een elektrische wagen.",
  },
  {
    question:
      "Wat gebeurt er als mijn omvormer uitvalt door een netspanningspiek?",
    answer:
      "Het uitvallen van de omvormer door overspanning is een reëel en groeiend probleem in België. Wanneer te veel zonne-installaties tegelijk injecteren op hetzelfde lokale net, overschrijdt de spanning 253 V en valt de omvormer 15 minuten uit, wat productieverlies betekent. Tijdens de diagnose controleert Benoît de spanning van het lokale net, een stap die veel installateurs overslaan. Is het net verzadigd, dan signaleert hij dit vóór de ondertekening en stelt aangepaste oplossingen voor, zoals een omvormer met dynamisch vermogensbeheer.",
  },
];

export const batteryServiceFaqNl: FAQItem[] = [
  {
    question: "Is een thuisbatterij rendabel in 2026?",
    answer:
      "Dat hangt af van uw situatie. Voor installaties van vóór 2024 die nog steeds genieten van compensatie tot 2030 gedraagt het net zich als een gratis batterij: de investering is zelden gerechtvaardigd vóór het einde van dit regime. Voor installaties na 2024 met digitale meter verbetert de rentabiliteit van een batterij aanzienlijk als u zonnepanelen, elektrische wagen of warmtepomp combineert. Benoît berekent uw werkelijk zelfverbruikspercentage vóór hij opslag al dan niet aanbeveelt.",
  },
  {
    question: "Welke batterijcapaciteit kiezen?",
    answer:
      "Voor een gemiddeld huishouden volstaat doorgaans een batterij van 5 tot 10 kWh. De dimensionering hangt af van uw nachtverbruik en uw uurprofiel. Een overgedimensioneerde batterij is een frequente valkuil: ze kost meer aan aankoop zonder significant bijkomende besparingen te genereren. Benoît analyseert uw verbruikscurves om de optimale capaciteit te bepalen, niet de maximale capaciteit.",
  },
  {
    question: "Hoeveel jaar gaat een thuisbatterij mee?",
    answer:
      "Huidige batterijen in lithium-ijzer-fosfaat (LFP) hebben een levensduur van 10 tot 15 jaar, met een fabrieksgarantie van minimum 10 jaar op de resterende capaciteit (doorgaans 70 % van de oorspronkelijke capaciteit). De LFP-chemie is stabieler en duurzamer dan de NMC-chemie (nikkel-mangaan-kobalt), zelfs als NMC-batterijen een licht hogere energiedichtheid bieden. Be'energies geeft de voorkeur aan LFP voor residentiële installaties vanwege veiligheid en levensduur.",
  },
  {
    question:
      "Wat is het verschil tussen een LFP- en NMC-batterij?",
    answer:
      "LFP (lithium-ijzer-fosfaat) biedt een betere levensduur (meer dan 6 000 cycli), superieure thermische stabiliteit en bijna nul thermisch ontsporingsrisico. NMC (nikkel-mangaan-kobalt) is compacter bij gelijke capaciteit maar degradeert sneller en heeft een licht hoger oververhittingsrisico. Voor een residentiële installatie waarin veiligheid en levensduur belangrijker zijn dan ruimtegebruik, beveelt Benoît systematisch LFP aan. Dat is de meest zinvolle keuze over 10 tot 15 jaar.",
  },
  {
    question:
      "Hoe optimaliseert een batterij het IMPACT-tarief?",
    answer:
      "Het IMPACT-tarief, in voege sinds januari 2026, onderscheidt drie tijdvakken. De PIEK-uren (17u-22u) zijn het duurst, maar ook die waarop uw panelen niet meer produceren. Een batterij opgeladen tijdens de ECO-uren (11u-17u, wanneer uw panelen produceren) laat u toe uw eigen elektriciteit 's avonds te verbruiken in plaats van ze aan topprijs te kopen. Dat is precies het scenario waarin opslag al haar financiële zin krijgt.",
  },
  {
    question:
      "In welke gevallen mag u GEEN batterij kopen?",
    answer:
      "Als uw installatie van vóór 2024 dateert en nog steeds compensatie geniet (tot 31 december 2030), speelt het net al de rol van gratis virtuele batterij. Een fysieke opslag van 5 000 tot 8 000 EUR toevoegen zal uw terugverdientijd niet versnellen. Evenzo, als uw zelfverbruikspercentage al 50 % overschrijdt zonder batterij, is de marginale winst te klein om de uitgave te rechtvaardigen. Benoît zegt het u duidelijk als dat het geval is: hij verkoopt geen batterij die zich niet rechtvaardigt.",
  },
];

export const evChargingFaqNl: FAQItem[] = [
  {
    question: "Welk type laadpaal voor thuis?",
    answer:
      "Voor residentieel gebruik dekt een laadpaal van 7,4 kW eenfasig ruim de dagelijkse behoeften: ze laadt een batterij van 60 kWh op in ongeveer 8 uur, een volledige nacht. Is uw elektrische installatie driefasig, dan laat een laadpaal van 11 of 22 kW sneller laden toe. De keuze hangt af van uw bestaande aansluiting, uw wagen en uw verplaatsingsgewoonten. Benoît controleert de capaciteit van uw schakelbord vóór elk voorstel.",
  },
  {
    question:
      "Kan men zijn elektrische wagen opladen met zijn zonnepanelen?",
    answer:
      "Ja, en het is de voordeligste configuratie. Door het laden te programmeren tijdens de zonneproductie-uren (10u-16u) laadt u op aan een bijna nulkost, aangezien u rechtstreeks uw eigen elektriciteit verbruikt. Met het IMPACT-tarief komen die uren overeen met de ECO-tijdvakken (11u-17u), de goedkoopste. Volgens de CWaPE-simulaties kan het toevoegen van een elektrische wagen met slim zonneladen tot 28 % bijkomende besparingen genereren.",
  },
  {
    question: "Wat is slim laden (smart charging)?",
    answer:
      "Slim laden past het laadvermogen automatisch aan in functie van uw zonneproductie in real time. Wanneer uw panelen veel produceren, verhoogt de laadpaal het vermogen. Daalt de productie, dan vermindert ze die om netafname te vermijden. Sommige laadpalen integreren ook het beheer van dynamische tarieven om op de goedkoopste uren te laden. Be'energies installeert laadpalen die compatibel zijn met deze functies en configureert ze om uw zelfverbruik te maximaliseren.",
  },
  {
    question: "Hoe lang duurt het installeren van een laadpaal?",
    answer:
      "De installatie duurt doorgaans een halve dag tot een volledige dag. De duur hangt vooral af van de afstand tussen uw schakelbord en de plaats van de laadpaal, en van de eventuele noodzaak om uw aansluiting te verzwaren. Benoît voert altijd een voorafgaand bezoek uit om de nodige werken te beoordelen. De installatie omvat het in-conformiteit-brengen, de werkingstest en de configuratie van de laadpaal met uw wagen.",
  },
  {
    question:
      "Bestaan er premies voor de installatie van een laadpaal in België?",
    answer:
      "In België is het voornaamste voordeel de verlaagde BTW van 6 % (in plaats van 21 %) voor woningen ouder dan 10 jaar, die van toepassing is op de laadpaal zoals op alle elektrische installatiewerken. Voor zelfstandigen en vennootschappen is de investering in een laadpaal fiscaal aftrekbaar. Sommige gemeenten bieden ook lokale premies, maar de bedragen blijven bescheiden. Benoît informeert u over de beschikbare hulp in uw gemeente tijdens de diagnose.",
  },
];

export const complianceFaqNl: FAQItem[] = [
  {
    question:
      "Welke risico's loopt men met een niet-conforme elektrische installatie?",
    answer:
      "De gevolgen van niet-conformiteit zijn concreet en ernstig. Ten eerste kan uw woonverzekering weigeren tussenbeide te komen bij brand of elektrische schade als de installatie niet conform is, een punt dat eigenaars vaak negeren. Ten tweede vormt een niet-conforme installatie reële risico's op brand, elektrocutie of overspanning. Ten derde verlaagt een niet-conformiteitsrapport bij een vastgoedverkoop de waarde van het goed en bemoeilijkt het de transactie. De conformiteitskeuring is geen administratieve formaliteit: het is bescherming voor uw gezin en uw vermogen.",
  },
  {
    question:
      "Hoe verloopt een in-conformiteit-brengen van de elektrische installatie?",
    answer:
      "We beginnen met een volledige diagnose van uw bestaande installatie: schakelbord, bekabeling, aardingen, beveiligingen, kabeldoorsneden. Benoît identificeert elke overtreding ten opzichte van het AREI (Algemeen Reglement op de Elektrische Installaties) en stelt een gedetailleerd in-conformiteit-brengen-plan op met de nodige werken, gerangschikt op prioriteit. De wijzigingen worden vervolgens uitgevoerd zodat de installatie de keuring van een erkend organisme doorstaat zonder opmerking. Reken op enkele uren tot twee dagen werken naargelang de omvang van de niet-conformiteiten.",
  },
  {
    question:
      "Wat veroorzaakt een verplichte conformiteitskeuring?",
    answer:
      "Een keuring is verplicht in drie hoofdgevallen: bij verkoop van een onroerend goed (het conformiteitsrapport wordt door de notaris geëist), bij een belangrijke wijziging van de elektrische installatie (toevoeging van circuits, vervanging van het schakelbord) en bij aansluiting van een nieuwe installatie zoals zonnepanelen of een laadpaal. Bovendien is een periodieke keuring vereist om de 25 jaar voor residentiële installaties. Als voormalig inspecteur weet Benoît precies wat de keurder zal controleren en bereidt hij uw installatie dienovereenkomstig voor.",
  },
  {
    question:
      "Hoeveel kost een in-conformiteit-brengen van de elektrische installatie?",
    answer:
      "De kost varieert sterk naargelang de staat van uw installatie. Voor kleine correcties (toevoeging van differentieelschakelaar, verbetering van de aarding) reken op 300 tot 800 EUR. Voor een volledige hertekening van een oud schakelbord ligt het budget doorgaans tussen 1 500 en 4 000 EUR. Benoît bezorgt een gedetailleerde offerte na de diagnose, zonder slechte verrassing. De BTW van 6 % is van toepassing voor woningen ouder dan 10 jaar, wat de factuur aanzienlijk verlaagt.",
  },
  {
    question:
      "Moet mijn fotovoltaïsche installatie conform zijn los van mijn domestieke installatie?",
    answer:
      "Ja. De fotovoltaïsche installatie ondergaat een specifieke conformiteitskeuring, los van die van de domestieke installatie. Deze keuring controleert de aansluiting van de omvormer, de specifieke elektrische beveiligingen, de aarding en de conformiteit van de gelijkstroombekabeling. Het is precies het type inspectie dat Benoît uitvoerde vóór hij Be'energies oprichtte. Elke Be'energies-installatie is ontworpen en gedocumenteerd om deze keuring de eerste keer te doorstaan, met het volledige technische dossier klaar voor het erkende organisme.",
  },
];

export const heatPumpFaqNl: FAQItem[] = [
  {
    question:
      "Lucht/water- of lucht/lucht-warmtepomp: hoe kiezen?",
    answer:
      "De lucht/water-warmtepomp is de geschikte keuze als u over centrale verwarming beschikt (radiatoren of vloerverwarming) en ook sanitair warm water wilt produceren. Ze vervangt uw ketel. De lucht/lucht-warmtepomp werkt via lucht en is geschikter voor airco en aanvullende verwarming in specifieke kamers. De keuze hangt af van uw bestaand systeem, uw isolatieniveau en uw doelstellingen. Benoît evalueert deze parameters tijdens het technische bezoek om u te oriënteren naar de oplossing die bij u zinvol is.",
  },
  {
    question: "Is een warmtepomp luidruchtig?",
    answer:
      "De huidige modellen produceren tussen 35 en 50 dB op één meter afstand, het geluidsniveau van een fluisterend gesprek of een rustige bibliotheek. De bepalende factor is niet alleen de modelkeuze, maar de plaatsing van de buitenunit. Een slecht doordachte plaatsing kan het geluid versterken door reflectie op een muur of trillingen op de structuur overdragen. Benoît kiest de plaatsing rekening houdend met de reglementaire afstanden, de akoestiek van de site en de buren.",
  },
  {
    question: "Wat is de COP van een warmtepomp?",
    answer:
      "De COP (Coefficient of Performance) meet de efficiëntie van de warmtepomp. Een COP van 4 betekent dat de warmtepomp voor 1 verbruikte kWh elektriciteit 4 kWh warmte produceert. In de praktijk varieert de COP naargelang de buitentemperatuur: hij is hoog wanneer het mild is (COP 4 tot 5 boven 7 °C) en daalt wanneer het zeer koud is (COP 2 tot 3 onder -5 °C). Daarom is de SCOP (seizoens-COP), die rekening houdt met de klimaatschommelingen van uw streek, een betrouwbaardere indicator om uw werkelijke besparingen te schatten.",
  },
  {
    question:
      "Kan men een warmtepomp combineren met zonnepanelen?",
    answer:
      "Dat is zelfs een van de slimste combinaties. Uw zonnepanelen produceren overdag elektriciteit, en de warmtepomp gebruikt die elektriciteit om uw woning of sanitair water te verwarmen. Met een buffervat of thermodynamische boiler slaat u de warmte op die wordt geproduceerd tijdens de zonneproductie-uren om er 's avonds van te genieten. Deze synergie verhoogt direct uw zelfverbruikspercentage en vermindert uw afhankelijkheid van het net. Be'energies ontwerpt beide systemen op geïntegreerde wijze om dit effect te maximaliseren.",
  },
  {
    question:
      "Welke vermindering op mijn verwarmingsfactuur kan ik verwachten met een warmtepomp?",
    answer:
      "Ter vervanging van een mazoutketel kan een lucht/water-warmtepomp uw verwarmingsfactuur met 40 tot 60 % verlagen, naargelang uw isolatieniveau en het lokale klimaat. Ter vervanging van gas is de vermindering 25 tot 40 %. Deze cijfers veronderstellen een correct geïsoleerde woning: is uw huis een energielek, dan zal de warmtepomp meer verbruiken en wordt de rentabiliteit gecompromitteerd. Benoît evalueert de isolatie van uw woning vóór een dimensionering voor te stellen, om slechte verrassingen te vermijden.",
  },
];

export const faqByServiceNl: Record<string, FAQItem[]> = {
  "panneaux-photovoltaiques": pvServiceFaqNl,
  "batteries-domestiques": batteryServiceFaqNl,
  "bornes-de-recharge": evChargingFaqNl,
  "conformite-electrique": complianceFaqNl,
  "pompes-a-chaleur": heatPumpFaqNl,
};
