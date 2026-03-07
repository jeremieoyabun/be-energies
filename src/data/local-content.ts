import type { City, Service, FAQItem } from "@/lib/types";

// ---------------------------------------------------------------------------
// GRD Tariff Data (source: docs/REGULATORY_INTELLIGENCE.md, March 2026)
// Must be reviewed quarterly when CWaPE publishes new tariffs
// ---------------------------------------------------------------------------

export interface GrdTariff {
  name: string;
  prosumerEurPerKweYear: number;
  cost5kwp: number;
  cost10kwp: number;
  region: "wallonie" | "bruxelles" | "flandre";
  note?: string;
}

export const grdTariffs: Record<string, GrdTariff> = {
  ORES: {
    name: "ORES",
    prosumerEurPerKweYear: 85.84,
    cost5kwp: 429,
    cost10kwp: 858,
    region: "wallonie",
  },
  RESA: {
    name: "RESA",
    prosumerEurPerKweYear: 84.22,
    cost5kwp: 421,
    cost10kwp: 842,
    region: "wallonie",
  },
  AIEG: {
    name: "AIEG",
    prosumerEurPerKweYear: 81.04,
    cost5kwp: 405,
    cost10kwp: 810,
    region: "wallonie",
  },
  AIESH: {
    name: "AIESH",
    prosumerEurPerKweYear: 99.29,
    cost5kwp: 496,
    cost10kwp: 993,
    region: "wallonie",
  },
  REW: {
    name: "REW",
    prosumerEurPerKweYear: 93.0,
    cost5kwp: 465,
    cost10kwp: 930,
    region: "wallonie",
  },
  Sibelga: {
    name: "Sibelga",
    prosumerEurPerKweYear: 0,
    cost5kwp: 0,
    cost10kwp: 0,
    region: "bruxelles",
    note: "Pas de tarif prosumer à Bruxelles. Certificats verts disponibles (~500 EUR/an pendant 10 ans).",
  },
  Fluvius: {
    name: "Fluvius",
    prosumerEurPerKweYear: 0,
    cost5kwp: 0,
    cost10kwp: 0,
    region: "flandre",
    note: "En Flandre, pas de tarif prosumer depuis 2021. Régime d'injection directe.",
  },
};

export function getGrdTariff(grdName: string): GrdTariff | undefined {
  return grdTariffs[grdName];
}

// ---------------------------------------------------------------------------
// City-specific intro generators (FR)
// Each city gets a unique opening paragraph based on its GRD, province, region
// ---------------------------------------------------------------------------

const cityIntrosFr: Record<string, (service: Service) => string> = {
  liege: (s) =>
    `À Liège, deuxième ville de Wallonie, les installations de ${s.title.toLowerCase()} se multiplient. Desservie par le gestionnaire de réseau RESA, Liège bénéficie d'un tarif prosumer parmi les plus bas de Wallonie (${grdTariffs.RESA.prosumerEurPerKweYear} EUR/kWe/an). Benoît intervient dans tous les quartiers liégeois, de Guillemins à Amercoeur.`,
  namur: (s) =>
    `Namur, capitale wallonne, est desservie par ORES. Les ${s.title.toLowerCase()} y représentent un investissement avec un retour de 5 à 7 ans. Le tarif prosumer ORES s'élève à ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an pour les installations antérieures à 2024. Benoît intervient à Namur et dans les communes environnantes.`,
  bruxelles: (s) =>
    `Bruxelles offre un cadre particulièrement favorable pour les ${s.title.toLowerCase()}. Pas de tarif prosumer (GRD Sibelga) et des certificats verts encore disponibles, soit environ 500 EUR/an pendant 10 ans pour une installation de 5 kWc. Benoît intervient dans toute la Région de Bruxelles-Capitale.`,
  charleroi: (s) =>
    `À Charleroi, plus grande ville du Hainaut, les ${s.title.toLowerCase()} sont dimensionnées en tenant compte du tarif prosumer ORES de ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an. Avec une consommation moyenne élevée et un bon ensoleillement, le retour sur investissement reste de 5 à 7 ans. Benoît couvre Charleroi et tout le bassin carolo.`,
  mons: (s) =>
    `À Mons, en province de Hainaut, les ${s.title.toLowerCase()} sont gérées sous le GRD ORES (tarif prosumer de ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an). La ville et ses environs bénéficient d'un bon potentiel solaire. Benoît se déplace dans tout le Borinage pour le diagnostic gratuit.`,
  wavre: (s) =>
    `Wavre, au coeur du Brabant wallon, est desservie par ORES. Les ${s.title.toLowerCase()} dans cette zone résidentielle à haut pouvoir d'achat offrent un retour sur investissement de 5 à 7 ans. Le tarif prosumer s'élève à ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an. Benoît intervient dans tout le Brabant wallon.`,
  nivelles: (s) =>
    `À Nivelles, en Brabant wallon, les ${s.title.toLowerCase()} sont gérées par ORES avec un tarif prosumer de ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an. Zone résidentielle dynamique, Nivelles offre un excellent potentiel d'autoconsommation. Benoît intervient à Nivelles et dans les communes voisines.`,
  verviers: (s) =>
    `Verviers, en province de Liège, est desservie par RESA -- le GRD avec l'un des tarifs prosumer les plus bas de Wallonie (${grdTariffs.RESA.prosumerEurPerKweYear} EUR/kWe/an). Les ${s.title.toLowerCase()} y sont particulièrement rentables. Benoît couvre toute la région verviétoise.`,
  arlon: (s) =>
    `À Arlon, en province de Luxembourg, le GRD est AIEG, qui propose le tarif prosumer le plus bas de Wallonie : ${grdTariffs.AIEG.prosumerEurPerKweYear} EUR/kWe/an. Les ${s.title.toLowerCase()} dans cette région bénéficient donc d'un avantage tarifaire significatif. Benoît se déplace jusqu'en province de Luxembourg.`,
  tournai: (s) =>
    `À Tournai, en Hainaut occidental, les ${s.title.toLowerCase()} sont gérées par ORES (tarif prosumer de ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an). Ville historique avec un parc immobilier varié, Tournai offre de bonnes opportunités d'autoconsommation. Benoît intervient à Tournai et dans le Tournaisis.`,
  "la-louviere": (s) =>
    `À La Louvière, dans le Centre du Hainaut, les ${s.title.toLowerCase()} sont gérées sous ORES avec un tarif prosumer de ${grdTariffs.ORES.prosumerEurPerKweYear} EUR/kWe/an. La région offre un bon ensoleillement et des toitures souvent bien orientées. Benoît intervient dans toute la région du Centre.`,
};

// ---------------------------------------------------------------------------
// City-specific intro generators (NL)
// ---------------------------------------------------------------------------

const cityIntrosNl: Record<string, (service: Service) => string> = {
  riemst: (s) =>
    `In Riemst, in het zuiden van Limburg, worden ${s.titleNl.toLowerCase()} steeds populairder. Als gemeente aan de taalgrens biedt Riemst uitstekende mogelijkheden voor zelfconsumptie. Netbeheerder Fluvius hanteert geen prosumententarief meer sinds 2021. Benoit woont en werkt in de regio.`,
  tongeren: (s) =>
    `Tongeren, de oudste stad van Belgie, wordt bediend door Fluvius. ${s.titleNl} zijn hier een slimme investering: geen prosumententarief en een sterk potentieel voor zelfverbruik. Benoit bedient heel Zuid-Limburg vanuit zijn thuisbasis.`,
  bilzen: (s) =>
    `In Bilzen, centraal in Limburg, worden ${s.titleNl.toLowerCase()} beheerd door Fluvius -- zonder prosumententarief. De gunstige dakoriëntaties in de woonwijken maken Bilzen ideaal voor zonne-energie. Benoit komt gratis bij u langs voor een diagnose.`,
  hasselt: (s) =>
    `Hasselt, de hoofdstad van Limburg, biedt een uitstekend kader voor ${s.titleNl.toLowerCase()}. Fluvius als netbeheerder betekent geen prosumententarief. Met de hoogste bevolkingsdichtheid in de regio is de vraag naar energieoplossingen hier bijzonder groot. Benoit bedient heel Hasselt en omgeving.`,
};

export function getCityIntro(
  city: City,
  service: Service,
  locale: "fr" | "nl" = "fr"
): string {
  if (locale === "nl") {
    const generator = cityIntrosNl[city.slug];
    if (generator) return generator(service);
    return `${service.titleNl} in ${city.name}: professionele installatie door een gecertificeerde vakman. Netbeheerder ${city.grd}. Gratis diagnose ter plaatse.`;
  }

  const generator = cityIntrosFr[city.slug];
  if (generator) return generator(service);
  return `À ${city.name}, les ${service.title.toLowerCase()} sont gérées par le GRD ${city.grd}. Benoît dimensionne chaque installation en fonction des tarifs réels de votre gestionnaire de réseau.`;
}

// ---------------------------------------------------------------------------
// Service-specific local copy (FR)
// Each service gets unique explanatory content when combined with a city
// ---------------------------------------------------------------------------

interface ServiceLocalContent {
  whyTitle: (cityName: string) => string;
  whyBody: (city: City, grd: GrdTariff | undefined) => string;
  crossServiceHeading: (cityName: string) => string;
}

const serviceLocalContentFr: Record<string, ServiceLocalContent> = {
  "panneaux-photovoltaiques": {
    whyTitle: (city) => `Panneaux photovoltaïques à ${city} : pourquoi nous choisir ?`,
    whyBody: (city, grd) => {
      const tariffLine = grd && grd.prosumerEurPerKweYear > 0
        ? `Le tarif prosumer ${grd.name} s'élève à ${grd.prosumerEurPerKweYear} EUR/kWe/an, soit ~${grd.cost5kwp} EUR/an pour une installation de 5 kWc. Malgré cela, les économies d'autoconsommation (1 200-1 800 EUR/an) dépassent largement ce coût.`
        : grd?.region === "bruxelles"
        ? `À Bruxelles, il n'y a pas de tarif prosumer. Vous bénéficiez en plus de certificats verts (~500 EUR/an pendant 10 ans).`
        : `En Flandre, le tarif prosumer a été supprimé depuis 2021. Vous payez uniquement l'énergie réellement prélevée sur le réseau.`;
      return `${city.name} est desservie par le GRD ${city.grd}. Benoît dimensionne chaque installation pour maximiser l'autoconsommation : chaque kWh consommé vous fait économiser ~38 centimes, contre 1 à 6 centimes pour le kWh injecté. ${tariffLine}`;
    },
    crossServiceHeading: (city) => `Vous installez des panneaux à ${city} ? Pensez aussi à :`,
  },
  "batteries-domestiques": {
    whyTitle: (city) => `Batterie domestique à ${city} : est-ce rentable ?`,
    whyBody: (city, grd) => {
      const tariffContext = grd && grd.prosumerEurPerKweYear > 0
        ? `Pour les installations antérieures à 2024 sous ${grd.name} avec compensation jusqu'en 2030, le réseau fait office de batterie virtuelle gratuite. Dans ce cas, une batterie physique n'est souvent pas justifiée. Pour les installations post-2024 avec compteur communicant, la batterie augmente votre taux d'autoconsommation et optimise le tarif IMPACT.`
        : `Sans tarif prosumer dans votre région, une batterie peut être rentable si votre taux d'autoconsommation est inférieur à 40%. On calcule avant de proposer.`;
      return `${city.name} (${city.grd}) : on ne vous vend une batterie que si elle est rentable pour votre situation. ${tariffContext}`;
    },
    crossServiceHeading: (city) => `Vous envisagez une batterie à ${city} ? Découvrez aussi :`,
  },
  "bornes-de-recharge": {
    whyTitle: (city) => `Borne de recharge à ${city} : installation intégrée`,
    whyBody: (city) =>
      `À ${city.name}, nous intégrons votre borne de recharge à votre installation solaire existante ou future. Recharger votre véhicule électrique pendant les heures de production solaire (10h-16h) réduit votre coût de recharge à quasi zéro. Benoît vérifie la capacité de votre installation électrique avant toute proposition.`,
    crossServiceHeading: (city) => `Vous installez une borne à ${city} ? Complétez votre système :`,
  },
  "conformite-electrique": {
    whyTitle: (city) => `Conformité électrique à ${city} : l'expertise d'un ancien inspecteur`,
    whyBody: (city) =>
      `À ${city.name}, la mise en conformité électrique est réalisée par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT. Il connaît exactement les points que le contrôleur vérifie et conçoit chaque mise en conformité pour passer le contrôle du premier coup. Pas de surprises, pas de frais supplémentaires, pas de contre-visite.`,
    crossServiceHeading: (city) => `Votre installation à ${city} est conforme ? Optimisez-la :`,
  },
  "nettoyage-toiture": {
    whyTitle: (city) => `Nettoyage de toiture à ${city} : protégez votre investissement`,
    whyBody: (city) =>
      `À ${city.name}, le nettoyage et la peinture de toiture protègent votre investissement et optimisent le rendement de vos panneaux solaires. Des panneaux encombrés de mousse ou de débris perdent jusqu'à 20% de leur production. Benoît combine le nettoyage de toiture avec l'inspection de votre installation.`,
    crossServiceHeading: (city) => `Votre toiture à ${city} est propre ? Et vos panneaux ?`,
  },
  "pompes-a-chaleur": {
    whyTitle: (city) => `Pompe à chaleur à ${city} : chauffage et climatisation`,
    whyBody: (city) =>
      `À ${city.name}, une pompe à chaleur correctement dimensionnée couvre vos besoins de chauffage et de climatisation. Combinez-la avec des panneaux solaires et le tarif IMPACT pour minimiser vos coûts énergétiques. Benoît vérifie votre isolation, votre installation électrique et votre consommation avant toute proposition.`,
    crossServiceHeading: (city) => `Pompe à chaleur à ${city} ? Complétez votre système énergétique :`,
  },
};

// NL service local content
const serviceLocalContentNl: Record<string, ServiceLocalContent> = {
  zonnepanelen: {
    whyTitle: (city) => `Zonnepanelen in ${city}: waarom Be'energies?`,
    whyBody: (city) =>
      `${city.name} wordt bediend door ${city.grd}. In Vlaanderen is er geen prosumententarief meer. Elke kWh die u zelf verbruikt bespaart u ~38 cent, tegenover slechts 1 tot 6 cent voor injectie. Benoit dimensioneert uw installatie om het zelfverbruik te maximaliseren, niet om te veel te injecteren.`,
    crossServiceHeading: (city) => `Zonnepanelen in ${city}? Denk ook aan:`,
  },
  thuisbatterijen: {
    whyTitle: (city) => `Thuisbatterij in ${city}: is het rendabel?`,
    whyBody: (city) =>
      `In ${city.name} (${city.grd}) verkopen we alleen een batterij als het rendabel is voor uw situatie. Zonder prosumententarief in Vlaanderen is een batterij vooral interessant als uw zelfverbruik onder 40% ligt. We berekenen het voor we voorstellen.`,
    crossServiceHeading: (city) => `Thuisbatterij in ${city}? Ontdek ook:`,
  },
  laadpalen: {
    whyTitle: (city) => `Laadpaal in ${city}: slim laden`,
    whyBody: (city) =>
      `In ${city.name} integreren we uw laadpaal met uw zonne-installatie. Laden tijdens de productie-uren (10u-16u) reduceert uw laadkosten tot bijna nul. Benoit controleert de capaciteit van uw elektrische installatie voor elk voorstel.`,
    crossServiceHeading: (city) => `Laadpaal in ${city}? Maak uw systeem compleet:`,
  },
  "elektrische-conformiteit": {
    whyTitle: (city) => `Elektrische conformiteit in ${city}: expertise van een ex-inspecteur`,
    whyBody: (city) =>
      `In ${city.name} wordt de conformiteitscontrole uitgevoerd door Benoit Dezso, voormalig gecertificeerd inspecteur. Hij weet exact wat de controleur nagaat en zorgt dat uw installatie in een keer slaagt voor de keuring.`,
    crossServiceHeading: (city) => `Installatie conform in ${city}? Optimaliseer verder:`,
  },
  dakreiniging: {
    whyTitle: (city) => `Dakreiniging in ${city}: bescherm uw investering`,
    whyBody: (city) =>
      `In ${city.name} beschermt professionele dakreiniging uw investering en optimaliseert het rendement van uw zonnepanelen. Panelen bedekt met mos of vuil verliezen tot 20% van hun productie.`,
    crossServiceHeading: (city) => `Dak schoon in ${city}? En uw panelen?`,
  },
  warmtepompen: {
    whyTitle: (city) => `Warmtepomp in ${city}: verwarming en koeling`,
    whyBody: (city) =>
      `In ${city.name} dekt een correct gedimensioneerde warmtepomp uw verwarmings- en koelingsbehoeften. Combineer met zonnepanelen om uw energiekosten te minimaliseren. Benoit controleert uw isolatie en elektrische installatie voor elk voorstel.`,
    crossServiceHeading: (city) => `Warmtepomp in ${city}? Maak uw energiesysteem compleet:`,
  },
};

export function getServiceLocalContent(
  serviceSlug: string,
  locale: "fr" | "nl" = "fr"
): ServiceLocalContent | undefined {
  if (locale === "nl") return serviceLocalContentNl[serviceSlug];
  return serviceLocalContentFr[serviceSlug];
}

// ---------------------------------------------------------------------------
// City-specific FAQ generation
// Generates FAQs that interpolate real GRD names, tariff amounts, and city names
// ---------------------------------------------------------------------------

export function generateLocalFaq(
  city: City,
  service: Service,
  locale: "fr" | "nl" = "fr"
): FAQItem[] {
  const grd = getGrdTariff(city.grd);

  if (locale === "nl") {
    return generateLocalFaqNl(city, service, grd);
  }
  return generateLocalFaqFr(city, service, grd);
}

function generateLocalFaqFr(
  city: City,
  service: Service,
  grd: GrdTariff | undefined
): FAQItem[] {
  const faqs: FAQItem[] = [];

  // Service-specific FAQ (always first)
  const serviceSpecific = localFaqTemplatesFr[service.slug];
  if (serviceSpecific) {
    faqs.push(...serviceSpecific(city, grd));
  }

  // GRD/tariff FAQ (for PV and battery pages in Wallonia)
  if (
    grd &&
    grd.prosumerEurPerKweYear > 0 &&
    (service.slug === "panneaux-photovoltaiques" || service.slug === "batteries-domestiques")
  ) {
    faqs.push({
      question: `Combien coûte le tarif prosumer à ${city.name} en 2026 ?`,
      answer: `À ${city.name}, le GRD est ${grd.name}. Le tarif prosumer s'élève à ${grd.prosumerEurPerKweYear} EUR/kWe/an, soit environ ${grd.cost5kwp} EUR/an pour une installation de 5 kWc. Ce tarif ne s'applique qu'aux installations antérieures à 2024. Les nouvelles installations avec compteur communicant ne paient pas ce tarif.`,
    });
  }

  // Brussels-specific FAQ
  if (city.region === "bruxelles" && service.slug === "panneaux-photovoltaiques") {
    faqs.push({
      question: `Quelles primes sont disponibles pour le photovoltaïque à Bruxelles ?`,
      answer: `À Bruxelles, il n'y a pas de tarif prosumer. Vous bénéficiez de certificats verts d'environ 500 EUR/an pendant 10 ans pour une installation de 5 kWc. De plus, la TVA réduite à 6% s'applique pour les habitations de plus de 10 ans.`,
    });
  }

  // Universal local FAQ
  faqs.push({
    question: `Pourquoi choisir Be'energies pour votre ${service.title.toLowerCase()} à ${city.name} ?`,
    answer: `Benoît Dezso, ancien inspecteur en conformité électrique, connaît les erreurs les plus courantes des installateurs. À ${city.name}, il dimensionne chaque installation sur base des tarifs réels de ${city.grd} et de votre consommation. Diagnostic gratuit, sans engagement.`,
  });

  return faqs;
}

function generateLocalFaqNl(
  city: City,
  service: Service,
  grd: GrdTariff | undefined
): FAQItem[] {
  const faqs: FAQItem[] = [];

  const serviceSpecific = localFaqTemplatesNl[service.slugNl];
  if (serviceSpecific) {
    faqs.push(...serviceSpecific(city, grd));
  }

  faqs.push({
    question: `Waarom Be'energies kiezen voor ${service.titleNl.toLowerCase()} in ${city.name}?`,
    answer: `Benoit Dezso, voormalig inspecteur elektrische conformiteit, kent de meest voorkomende fouten van installateurs. In ${city.name} dimensioneert hij elke installatie op basis van uw werkelijk verbruik. Gratis diagnose, zonder verplichting.`,
  });

  return faqs;
}

// ---------------------------------------------------------------------------
// Service-specific local FAQ templates (FR)
// ---------------------------------------------------------------------------

type LocalFaqGenerator = (city: City, grd: GrdTariff | undefined) => FAQItem[];

const localFaqTemplatesFr: Record<string, LocalFaqGenerator> = {
  "panneaux-photovoltaiques": (city, grd) => {
    const items: FAQItem[] = [
      {
        question: `Les panneaux solaires sont-ils rentables à ${city.name} en 2026 ?`,
        answer: `Oui. À ${city.name} (${city.province}), le retour sur investissement se situe entre 5 et 7 ans, soit un rendement annuel d'environ 12%. Chaque kWh autoconsommé vous fait économiser environ 38 centimes. ${grd && grd.prosumerEurPerKweYear > 0 ? `Le tarif prosumer ${grd.name} de ${grd.prosumerEurPerKweYear} EUR/kWe/an est largement compensé par les économies d'autoconsommation.` : ""}`,
      },
      {
        question: `Combien de panneaux solaires faut-il pour une maison à ${city.name} ?`,
        answer: `Cela dépend de votre consommation, pas de la surface de votre toit. Pour un ménage moyen à ${city.name} (3 500 kWh/an), comptez environ 10 panneaux (3.5 kWc). Benoît dimensionne sur base de votre facture réelle, pas de la surface disponible.`,
      },
    ];
    return items;
  },
  "batteries-domestiques": (city, grd) => [
    {
      question: `Une batterie domestique est-elle rentable à ${city.name} ?`,
      answer: `Cela dépend de votre situation. ${grd && grd.prosumerEurPerKweYear > 0 ? `À ${city.name} (${grd.name}), si votre installation date d'avant 2024, le réseau fait office de batterie gratuite jusqu'en 2030. La batterie n'est alors souvent pas justifiée. Pour les installations post-2024, la batterie augmente votre autoconsommation et optimise le tarif IMPACT.` : `Sans tarif prosumer dans votre région, une batterie peut être rentable si votre autoconsommation est inférieure à 40%.`}`,
    },
  ],
  "bornes-de-recharge": (city) => [
    {
      question: `Quelle borne de recharge installer à ${city.name} ?`,
      answer: `Pour un usage résidentiel à ${city.name}, une borne 7.4 kW (monophasé) ou 11-22 kW (triphasé) convient. Le choix dépend de votre installation électrique et de votre véhicule. Benoît vérifie la compatibilité lors du diagnostic gratuit.`,
    },
    {
      question: `Peut-on recharger avec ses panneaux solaires à ${city.name} ?`,
      answer: `Oui, c'est la configuration idéale. En programmant la recharge pendant les heures de production solaire (10h-16h), vous rechargez au coût le plus bas. À ${city.name}, nous intégrons systématiquement la borne à votre installation solaire.`,
    },
  ],
  "conformite-electrique": (city) => [
    {
      question: `Comment se passe une mise en conformité à ${city.name} ?`,
      answer: `À ${city.name}, Benoît réalise d'abord un diagnostic complet de votre installation. En tant qu'ancien inspecteur, il sait exactement ce que le contrôleur vérifie. Il établit un plan de mise en conformité précis et effectue les travaux pour que votre installation passe le contrôle du premier coup.`,
    },
  ],
  "nettoyage-toiture": (city) => [
    {
      question: `Pourquoi nettoyer sa toiture à ${city.name} ?`,
      answer: `À ${city.name}, les conditions climatiques favorisent le développement de mousse et de lichen. Une toiture sale réduit la durée de vie de vos tuiles et peut faire perdre jusqu'à 20% de rendement à vos panneaux solaires. Un nettoyage professionnel protège votre investissement.`,
    },
  ],
  "pompes-a-chaleur": (city) => [
    {
      question: `Quelle pompe à chaleur choisir à ${city.name} ?`,
      answer: `Le choix dépend de votre habitation à ${city.name} : air-eau pour le chauffage central et l'eau chaude sanitaire, air-air pour la climatisation et le chauffage d'appoint. Benoît analyse votre isolation, votre système existant et votre consommation avant toute proposition.`,
    },
  ],
};

// ---------------------------------------------------------------------------
// Service-specific local FAQ templates (NL)
// ---------------------------------------------------------------------------

const localFaqTemplatesNl: Record<string, LocalFaqGenerator> = {
  zonnepanelen: (city) => [
    {
      question: `Zijn zonnepanelen rendabel in ${city.name} in 2026?`,
      answer: `Ja. In ${city.name} (${city.province}) is de terugverdientijd 5 tot 7 jaar, wat neerkomt op een jaarlijks rendement van ongeveer 12%. Elke kWh die u zelf verbruikt bespaart u ~38 cent. In Vlaanderen is er geen prosumententarief meer.`,
    },
    {
      question: `Hoeveel zonnepanelen heb ik nodig in ${city.name}?`,
      answer: `Dat hangt af van uw verbruik, niet van uw dakoppervlak. Voor een gemiddeld gezin in ${city.name} (3 500 kWh/jaar) rekent u op ongeveer 10 panelen (3,5 kWc). Benoit dimensioneert op basis van uw werkelijke factuur.`,
    },
  ],
  thuisbatterijen: (city) => [
    {
      question: `Is een thuisbatterij rendabel in ${city.name}?`,
      answer: `In ${city.name} (${city.grd}) is er geen prosumententarief meer. Een batterij kan rendabel zijn als uw zelfverbruik onder 40% ligt. We berekenen het concreet voor uw situatie alvorens een voorstel te doen.`,
    },
  ],
  laadpalen: (city) => [
    {
      question: `Welke laadpaal installeren in ${city.name}?`,
      answer: `Voor thuisgebruik in ${city.name} is een laadpaal van 7,4 kW (eenfasig) of 11-22 kW (driefasig) geschikt. Het hangt af van uw elektrische installatie en uw voertuig. Benoit controleert de compatibiliteit tijdens de gratis diagnose.`,
    },
  ],
  "elektrische-conformiteit": (city) => [
    {
      question: `Hoe verloopt een conformiteitscontrole in ${city.name}?`,
      answer: `In ${city.name} voert Benoit eerst een volledige diagnose uit van uw installatie. Als voormalig inspecteur weet hij precies wat de controleur nagaat. Hij stelt een plan op en voert de werken uit zodat uw installatie in een keer slaagt voor de keuring.`,
    },
  ],
  dakreiniging: (city) => [
    {
      question: `Waarom dakreiniging in ${city.name}?`,
      answer: `In ${city.name} bevorderen de weersomstandigheden mosgroei en korstmos. Een vuil dak verkort de levensduur van uw dakpannen en kan tot 20% rendementsverlies veroorzaken bij uw zonnepanelen.`,
    },
  ],
  warmtepompen: (city) => [
    {
      question: `Welke warmtepomp kiezen in ${city.name}?`,
      answer: `De keuze hangt af van uw woning in ${city.name}: lucht-water voor centrale verwarming en sanitair warm water, lucht-lucht voor airconditioning. Benoit analyseert uw isolatie en bestaand systeem voor elk voorstel.`,
    },
  ],
};

// ---------------------------------------------------------------------------
// Headline and meta description variant generators
// ---------------------------------------------------------------------------

const headlineVariantsFr: Record<string, (cityName: string) => string> = {
  "panneaux-photovoltaiques": (city) =>
    `Panneaux photovoltaïques à ${city} : votre installateur certifié`,
  "batteries-domestiques": (city) =>
    `Batterie domestique à ${city} : stockage intelligent par un expert`,
  "bornes-de-recharge": (city) =>
    `Borne de recharge à ${city} : installation intégrée à votre solaire`,
  "conformite-electrique": (city) =>
    `Conformité électrique à ${city} : par un ancien inspecteur`,
  "nettoyage-toiture": (city) =>
    `Nettoyage toiture à ${city} : protégez vos panneaux et votre toit`,
  "pompes-a-chaleur": (city) =>
    `Pompe à chaleur à ${city} : chauffage et climatisation sur mesure`,
};

const headlineVariantsNl: Record<string, (cityName: string) => string> = {
  zonnepanelen: (city) =>
    `Zonnepanelen in ${city}: uw gecertificeerde installateur`,
  thuisbatterijen: (city) =>
    `Thuisbatterij in ${city}: slimme opslag door een expert`,
  laadpalen: (city) =>
    `Laadpaal in ${city}: geintegreerde installatie met uw zonnepanelen`,
  "elektrische-conformiteit": (city) =>
    `Elektrische conformiteit in ${city}: door een voormalig inspecteur`,
  dakreiniging: (city) =>
    `Dakreiniging in ${city}: bescherm uw panelen en uw dak`,
  warmtepompen: (city) =>
    `Warmtepomp in ${city}: verwarming en koeling op maat`,
};

export function getLocalHeadline(
  service: Service,
  cityName: string,
  locale: "fr" | "nl" = "fr"
): string {
  if (locale === "nl") {
    const gen = headlineVariantsNl[service.slugNl];
    return gen ? gen(cityName) : `${service.titleNl} in ${cityName}`;
  }
  const gen = headlineVariantsFr[service.slug];
  return gen ? gen(cityName) : `${service.title} à ${cityName}`;
}

export function getLocalMetaDescription(
  service: Service,
  city: City,
  locale: "fr" | "nl" = "fr"
): string {
  const grd = getGrdTariff(city.grd);

  if (locale === "nl") {
    return `${service.titleNl} in ${city.name} (${city.province}) door Be'energies. Benoit Dezso, voormalig inspecteur. Netbeheerder ${city.grd}. Gratis diagnose.`;
  }

  const tariffSnippet =
    grd && grd.prosumerEurPerKweYear > 0
      ? ` GRD ${grd.name} (tarif prosumer ${grd.prosumerEurPerKweYear} EUR/kWe/an).`
      : city.region === "bruxelles"
      ? ` Certificats verts disponibles.`
      : "";

  return `${service.title} à ${city.name} (${city.province}) par Be'energies. Ancien inspecteur en installation électrique, certifié RESCERT.${tariffSnippet} Diagnostic gratuit.`;
}
