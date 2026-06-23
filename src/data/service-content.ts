// Service page deep content - production-ready, bilingual (FR + NL).
// All regulatory numbers verified against REGULATORY_INTELLIGENCE.md (March 2026)
// All messaging aligned with POSITIONING_MESSAGING.md
//
// Records are keyed by the canonical FR slug. Every field is a
// `Localized<T> = { fr, nl }` pair. The `getServiceContent(slug, locale)`
// helper resolves the locale variant so existing callers that pass
// only `slug` continue to receive a fully-resolved FR object.

export type Locale = "fr" | "nl";

export type Localized<T> = { fr: T; nl: T };

export interface ServiceSection {
  id: string;
  title: Localized<string>;
  body: Localized<string>;
}

export interface ServiceComparisonRow {
  aspect: Localized<string>;
  others: Localized<string>;
  beEnergies: Localized<string>;
}

export interface ServiceContent {
  seoTitle: Localized<string>;
  metaDescription: Localized<string>;
  headline: Localized<string>;
  subheadline: Localized<string>;
  sections: ServiceSection[];
  comparisonRows: ServiceComparisonRow[];
  ctaTitle: Localized<string>;
  ctaDescription: Localized<string>;
  ctaLabel: Localized<string>;
}

// Resolved variant - the shape consumers see after locale selection.
// Kept structurally identical to the previous `ServicePageContent` so
// existing callers and templates need no changes.
export interface ResolvedServiceContent {
  seoTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  sections: {
    id: string;
    title: string;
    body: string;
  }[];
  comparisonRows: {
    aspect: string;
    others: string;
    beEnergies: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

// Backwards-compatible alias for the old type name. Existing imports of
// `ServicePageContent` continue to resolve to the same resolved shape.
export type ServicePageContent = ResolvedServiceContent;

export const serviceContent: Record<string, ServiceContent> = {
  "panneaux-photovoltaiques": {
    seoTitle: {
      fr: "Panneaux photovoltaïques en Belgique | Installation rentable et conforme",
      nl: "Zonnepanelen in België | Rendabele en conforme installatie",
    },
    metaDescription: {
      fr: "Installation photovoltaïque par un ancien inspecteur en conformité électrique, certifié RESCERT. Calcul de rentabilité réel, tarif prosumer démystifié, retour en 5-7 ans. Diagnostic gratuit.",
      nl: "Installatie van zonnepanelen door een voormalig inspecteur elektrische conformiteit, RESCERT-gecertificeerd. Realistische rendabiliteitsberekening, prosumertarief uitgelegd, terugverdientijd 5-7 jaar. Gratis diagnose.",
    },
    headline: {
      fr: "Panneaux photovoltaïques en 2026 : le guide honnête par un ancien inspecteur",
      nl: "Zonnepanelen in 2026: de eerlijke gids van een voormalig inspecteur",
    },
    subheadline: {
      fr: "Benoît Dezso a inspecté des centaines d'installations avant de fonder Be'energies. Chaque système est dimensionné pour maximiser votre autoconsommation, pas pour gonfler un devis.",
      nl: "Benoît Dezso heeft honderden installaties geïnspecteerd voor hij Be'energies oprichtte. Elk systeem wordt gedimensioneerd om uw zelfverbruik te maximaliseren, niet om een offerte op te blazen.",
    },
    sections: [
      {
        id: "rentabilite-2026",
        title: {
          fr: "Le photovoltaïque est-il encore rentable en 2026 ? Oui. Voici le calcul.",
          nl: "Zijn zonnepanelen nog rendabel in 2026? Ja. Hier is de berekening.",
        },
        body: {
          fr: `<p>Les subventions ont disparu parce que les panneaux sont devenus cinq fois moins chers en dix ans. Le solaire n'a jamais été aussi rentable sans aide publique.</p>
<p><strong>Exemple concret : un système de 4,7 kWc (12 panneaux) pour un ménage de 4 personnes</strong></p>
<ul>
<li>Coût total installé (TVA 6% pour habitations de 10 ans et plus) : <strong>~9 700 EUR TTC</strong></li>
<li>Production annuelle estimée : ~4 200 kWh</li>
<li>Taux d'autoconsommation visé : 50%</li>
<li>Économies annuelles d'autoconsommation (2 100 kWh x 0,38 EUR) : <strong>~798 EUR</strong></li>
<li>Revenus d'injection (2 100 kWh x 0,04 EUR, tarif moyen) : <strong>~84 EUR</strong></li>
<li>Économies sur facture nette annuelle : <strong>~1 200 - 1 600 EUR</strong></li>
<li>Retour sur investissement : <strong>5 à 7 ans</strong></li>
<li>Durée de vie du système : <strong>25-30 ans</strong></li>
<li>Gain total sur la durée de vie : <strong>20 000 - 35 000 EUR</strong></li>
</ul>
<p>Rendement annualisé : environ 12%. À comparer avec un compte épargne (~2%) ou un portefeuille boursier diversifié (~7%). Le photovoltaïque reste l'un des meilleurs investissements pour un ménage belge.</p>`,
          nl: `<p>Subsidies zijn verdwenen omdat panelen in tien jaar tijd vijf keer goedkoper zijn geworden. Zonne-energie was nog nooit zo rendabel zonder overheidssteun.</p>
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
      },
      {
        id: "deux-regimes",
        title: {
          fr: "Avant ou après 2024 : deux régimes, deux logiques complètement différentes",
          nl: "Voor of na 2024: twee regimes, twee volledig verschillende logica's",
        },
        body: {
          fr: `<p>C'est la distinction la plus importante du marché, et celle que la plupart des installateurs ne prennent pas la peine d'expliquer.</p>
<h4>Régime 1 : installations mises en service avant le 1er janvier 2024</h4>
<ul>
<li>Le compteur tournait à l'envers. Ce mécanisme de compensation reste actif <strong>jusqu'au 31 décembre 2030</strong>.</li>
<li>Vous payez le <strong>tarif prosumer</strong> : une redevance fixe annuelle basée sur votre capacité installée.</li>
<li>Le réseau fonctionne comme une batterie virtuelle gratuite : vous injectez le jour, vous reprenez le soir sans frais supplémentaires.</li>
<li>Après 2030 : tout le monde bascule vers le régime 2.</li>
</ul>
<h4>Régime 2 : installations mises en service après le 1er janvier 2024</h4>
<ul>
<li>Compteur communicant (smart meter) obligatoire. <strong>Pas de tarif prosumer.</strong></li>
<li>Vous payez uniquement l'électricité réellement soutirée du réseau.</li>
<li>Votre surplus est revendu au tarif d'injection (1 à 6 centimes/kWh selon le fournisseur).</li>
<li>Chaque kWh autoconsommé vous économise ~38 centimes. Chaque kWh injecté vous rapporte 1 à 6 centimes. Le ratio est de <strong>7x à 46x en faveur de l'autoconsommation</strong>.</li>
</ul>
<p>Ce que cela signifie pour vous : que vous soyez en régime 1 ou en régime 2, le dimensionnement correct de votre installation est la variable déterminante. C'est exactement ce que Benoît vérifie lors du diagnostic technique.</p>`,
          nl: `<p>Dit is het belangrijkste onderscheid op de markt, en degene die de meeste installateurs niet de moeite nemen uit te leggen.</p>
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
      },
      {
        id: "tarif-prosumer",
        title: {
          fr: "Tarif prosumer démystifié : ce n'est pas une taxe, c'est un frais de réseau",
          nl: "Prosumertarief ontmythologiseerd: het is geen belasting, het is een netkost",
        },
        body: {
          fr: `<p>Le tarif prosumer est une redevance pour l'utilisation du réseau de distribution. Avant son introduction, les ménages sans panneaux payaient une part disproportionnée des coûts de maintenance du réseau. Ce n'est ni une punition ni un impôt : c'est une contribution équitable.</p>
<p><strong>Montants 2026 par gestionnaire de réseau (TTC) :</strong></p>
<table>
<thead><tr><th>GRD</th><th>EUR/kWe/an</th><th>Coût pour 5 kWc</th></tr></thead>
<tbody>
<tr><td>ORES</td><td>85,84 EUR</td><td>~429 EUR/an</td></tr>
<tr><td>RESA</td><td>84,22 EUR</td><td>~421 EUR/an</td></tr>
<tr><td>AIEG</td><td>81,04 EUR</td><td>~405 EUR/an</td></tr>
<tr><td>AIESH</td><td>99,29 EUR</td><td>~496 EUR/an</td></tr>
<tr><td>REW</td><td>93,00 EUR</td><td>~465 EUR/an</td></tr>
</tbody>
</table>
<p>Hypothèse CWaPE : le tarif est calculé sur une base de 37,76% d'autoconsommation. Si vous dépassez ce seuil, votre situation réelle est meilleure que le tarif ne le suppose.</p>
<p><strong>Point essentiel :</strong> les installations après 2024 avec compteur communicant ne paient pas le tarif prosumer. Elles paient uniquement leur consommation réelle. Si vous installez aujourd'hui, ce tableau ne vous concerne pas.</p>`,
          nl: `<p>Het prosumertarief is een vergoeding voor het gebruik van het distributienet. Vóór de invoering ervan betaalden huishoudens zonder panelen een onevenredig deel van de onderhoudskosten van het net. Het is noch een straf, noch een belasting: het is een eerlijke bijdrage.</p>
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
      },
      {
        id: "autoconsommation",
        title: {
          fr: "38 centimes économisés vs 1 à 6 centimes gagnés : la règle d'or de l'autoconsommation",
          nl: "38 cent bespaard vs 1 tot 6 cent verdiend: de gouden regel van zelfverbruik",
        },
        body: {
          fr: `<p>C'est le chiffre qui doit guider chaque décision :</p>
<ul>
<li><strong>Prix d'achat moyen de l'électricité : ~38 c/kWh</strong></li>
<li><strong>Meilleur tarif d'injection : 5,58 c/kWh</strong> (Energie.be)</li>
<li><strong>Pire tarif d'injection : 0,82 c/kWh</strong> (Mega)</li>
</ul>
<p>L'électricité que vous consommez vous-même vaut entre 7 et 46 fois plus que celle que vous revendez. Toute la stratégie de dimensionnement découle de cette réalité.</p>
<p><strong>Comparatif des tarifs d'injection (mars 2026) :</strong></p>
<table>
<thead><tr><th>Fournisseur</th><th>c EUR/kWh</th></tr></thead>
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
<p>Conseil concret : choisissez votre fournisseur en tenant compte du tarif d'injection, pas seulement du prix d'achat. L'écart entre le meilleur et le pire fournisseur représente plusieurs centaines d'euros par an sur le surplus injecté.</p>`,
          nl: `<p>Dit is het cijfer dat elke beslissing moet sturen:</p>
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
      },
      {
        id: "tarif-impact",
        title: {
          fr: "Tarif IMPACT 2026 : trois plages horaires qui changent la donne",
          nl: "IMPACT-tarief 2026: drie tijdvakken die het verschil maken",
        },
        body: {
          fr: `<p>Depuis le 1er janvier 2026, les propriétaires d'un compteur communicant peuvent opter pour le tarif IMPACT, avec trois plages horaires :</p>
<table>
<thead><tr><th>Plage</th><th>Heures</th><th>Niveau de coût</th><th>Stratégie solaire</th></tr></thead>
<tbody>
<tr><td><strong>ECO</strong></td><td>01h-07h, 11h-17h</td><td>Le moins cher</td><td>Le pic de production solaire tombe en plein dans la plage ECO</td></tr>
<tr><td><strong>MEDIUM</strong></td><td>07h-11h, 22h-01h</td><td>Intermédiaire</td><td>Consommation matinale et fin de soirée</td></tr>
<tr><td><strong>PIC</strong></td><td>17h-22h</td><td>Le plus cher</td><td>Post-solaire, forte demande : c'est ici qu'une batterie prend tout son sens</td></tr>
</tbody>
</table>
<p>Selon les simulations CWaPE, un ménage adapté peut économiser <strong>14%</strong> sur sa facture de distribution, et jusqu'à <strong>28%</strong> avec un véhicule électrique.</p>
<p><strong>Attention :</strong> BeProsumer signale (mars 2026) que pour les ~350 000 prosumers encore sous régime de compensation, le passage à une formule tri-horaire comporte des risques. Des taxes d'équilibrage masquées peuvent annuler l'avantage. Un tarif bihoraire classique reste plus sûr pour la majorité. On analyse votre situation spécifique lors du diagnostic.</p>`,
          nl: `<p>Sinds 1 januari 2026 kunnen eigenaars van een digitale meter kiezen voor het IMPACT-tarief, met drie tijdvakken:</p>
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
      },
    ],
    comparisonRows: [
      {
        aspect: {
          fr: "Visite technique préalable",
          nl: "Voorafgaand technisch bezoek",
        },
        others: {
          fr: "Devis envoyé par email sur base de Google Maps, sans visite sur site",
          nl: "Offerte per e-mail op basis van Google Maps, zonder bezoek ter plaatse",
        },
        beEnergies: {
          fr: "Visite technique obligatoire : toiture, réseau électrique, tension, ombrage, consommation réelle",
          nl: "Verplicht technisch bezoek: dak, elektrische installatie, spanning, schaduw, werkelijk verbruik",
        },
      },
      {
        aspect: {
          fr: "Calcul de rentabilité",
          nl: "Rentabiliteitsberekening",
        },
        others: {
          fr: "Estimation générique avec promesses de retour en 2 ans et projections gonflées",
          nl: "Generieke schatting met beloften van terugverdientijd in 2 jaar en opgeblazen projecties",
        },
        beEnergies: {
          fr: "Calcul personnalisé avec tarifs 2026 réels de votre GRD, taux d'autoconsommation estimé, et tarif d'injection de votre fournisseur",
          nl: "Persoonlijke berekening met werkelijke tarieven 2026 van uw netbeheerder, geschat zelfverbruikspercentage en injectietarief van uw leverancier",
        },
      },
      {
        aspect: { fr: "Dimensionnement", nl: "Dimensionering" },
        others: {
          fr: "Maximum de panneaux possible pour maximiser le montant du devis",
          nl: "Maximum aantal panelen om het offertebedrag te maximaliseren",
        },
        beEnergies: {
          fr: "Dimensionnement sur votre consommation réelle pour maximiser l'autoconsommation, pas l'injection à perte",
          nl: "Dimensionering op uw werkelijk verbruik om zelfverbruik te maximaliseren, geen verliesgevende injectie",
        },
      },
      {
        aspect: {
          fr: "Explication du tarif prosumer",
          nl: "Uitleg over het prosumertarief",
        },
        others: {
          fr: "Rarement mentionné, ou minimisé dans la présentation commerciale",
          nl: "Zelden vermeld, of geminimaliseerd in de commerciële presentatie",
        },
        beEnergies: {
          fr: "Expliqué en détail avec les montants exacts de votre GRD, intégré dans le calcul de rentabilité",
          nl: "Gedetailleerd uitgelegd met de exacte bedragen van uw netbeheerder, geïntegreerd in de rentabiliteitsberekening",
        },
      },
      {
        aspect: {
          fr: "Conformité électrique",
          nl: "Elektrische conformiteit",
        },
        others: {
          fr: "Installation livrée sans vérification post-installation systématique",
          nl: "Installatie geleverd zonder systematische controle na installatie",
        },
        beEnergies: {
          fr: "Chaque installation conçue par un ancien inspecteur en conformité électrique, certifié RESCERT pour passer le contrôle du premier coup",
          nl: "Elke installatie ontworpen door een voormalig inspecteur elektrische conformiteit, RESCERT-gecertificeerd, om de keuring de eerste keer te doorstaan",
        },
      },
      {
        aspect: {
          fr: "Suivi post-installation",
          nl: "Opvolging na installatie",
        },
        others: {
          fr: "Service après-vente par téléphone, délais de plusieurs semaines",
          nl: "Klantendienst per telefoon, wachttijden van meerdere weken",
        },
        beEnergies: {
          fr: "Monitoring de production, maintenance, et accompagnement réglementaire inclus",
          nl: "Monitoring van productie, onderhoud en reglementaire begeleiding inbegrepen",
        },
      },
    ],
    ctaTitle: {
      fr: "Diagnostic énergétique gratuit",
      nl: "Gratis energiediagnose",
    },
    ctaDescription: {
      fr: "Benoît analyse votre consommation, votre toiture et votre réseau électrique. Vous recevez un calcul de rentabilité basé sur les tarifs 2026 réels de votre GRD. Pas de promesses en l'air : un calcul réel.",
      nl: "Benoît analyseert uw verbruik, uw dak en uw elektrische installatie. U ontvangt een rendabiliteitsberekening op basis van de werkelijke tarieven 2026 van uw netbeheerder. Geen loze beloftes: een realistische berekening.",
    },
    ctaLabel: {
      fr: "Demander mon diagnostic gratuit",
      nl: "Vraag mijn gratis diagnose aan",
    },
  },

  "batteries-domestiques": {
    seoTitle: {
      fr: "Batterie domestique en Belgique | Quand c'est rentable, quand ça ne l'est pas",
      nl: "Thuisbatterij in België | Wanneer rendabel, wanneer niet",
    },
    metaDescription: {
      fr: "Batterie domestique : quand c'est rentable et quand ça ne l'est pas. Conseil honnête par un ancien inspecteur. 5 000-8 000 EUR. Diagnostic gratuit.",
      nl: "Thuisbatterij: wanneer is het rendabel en wanneer niet. Eerlijk advies van een voormalig inspecteur. 5 000-8 000 EUR. Gratis diagnose.",
    },
    headline: {
      fr: "Batterie domestique : on ne vous en vend une que si elle est rentable pour vous",
      nl: "Thuisbatterij: wij verkopen er u alleen een als ze rendabel is voor u",
    },
    subheadline: {
      fr: "Un ancien inspecteur en conformité électrique ne vous laissera pas investir 5 000 à 8 000 EUR dans un équipement qui ne se justifie pas. Voici comment savoir si une batterie fait sens dans votre cas.",
      nl: "Een voormalig inspecteur elektrische conformiteit zal u niet 5 000 tot 8 000 EUR laten investeren in apparatuur die niet te rechtvaardigen is. Hier leest u hoe u weet of een batterij in uw geval zinvol is.",
    },
    sections: [
      {
        id: "quand-rentable",
        title: {
          fr: "Quand une batterie domestique est rentable (et quand elle ne l'est pas)",
          nl: "Wanneer een thuisbatterij rendabel is (en wanneer niet)",
        },
        body: {
          fr: `<p>La réponse dépend de votre date d'installation et de votre profil de consommation.</p>
<h4>Si votre installation date d'avant 2024 (régime de compensation)</h4>
<p>Votre compteur tourne encore à l'envers jusqu'au 31 décembre 2030. Le réseau fait office de batterie virtuelle gratuite : vous injectez le jour, vous reprenez le soir. <strong>Dans cette configuration, une batterie physique n'apporte pas de gain financier significatif.</strong> Le réseau stocke déjà votre surplus sans frais.</p>
<p>Exception : si votre onduleur décroche régulièrement à cause de surtensions réseau (un problème croissant en Wallonie), une batterie peut absorber le surplus au lieu de l'injecter, ce qui évite des pertes de production.</p>
<h4>Si votre installation date d'après 2024 (compteur communicant)</h4>
<p>Vous payez chaque kWh soutiré au tarif plein (~38 c/kWh) et revendez le surplus à 1-6 c/kWh. Une batterie stocke le surplus de la journée pour couvrir votre consommation du soir. Le gain réel dépend de :</p>
<ul>
<li>Votre consommation nocturne (entre 17h et 7h)</li>
<li>Votre taux d'autoconsommation actuel (plus il est bas, plus la batterie aide)</li>
<li>La présence d'un véhicule électrique ou d'une pompe à chaleur</li>
<li>Votre tarification (le tarif IMPACT rend la batterie plus intéressante grâce aux heures PIC de 17h à 22h)</li>
</ul>`,
          nl: `<p>Het antwoord hangt af van uw installatiedatum en uw verbruiksprofiel.</p>
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
      },
      {
        id: "vrais-chiffres-batterie",
        title: {
          fr: "Les vrais chiffres : coût, économies, durée de vie",
          nl: "De echte cijfers: kost, besparingen, levensduur",
        },
        body: {
          fr: `<p><strong>Investissement :</strong> entre 5 000 et 8 000 EUR TTC pour une batterie lithium fer-phosphate de 5 à 10 kWh.</p>
<p><strong>Économies annuelles estimées :</strong></p>
<ul>
<li>Ménage sans véhicule électrique : 220 à 400 EUR/an</li>
<li>Ménage avec véhicule électrique et tarif IMPACT : 400 à 600 EUR/an</li>
</ul>
<p><strong>Retour sur investissement :</strong> 10 à 15 ans selon le profil.</p>
<p><strong>Durée de vie :</strong> 10 à 15 ans (garantie constructeur 10 ans minimum).</p>
<p>La rentabilité est donc serrée. Pour un ménage sans véhicule électrique en régime pré-2024, le retour peut dépasser la durée de vie de la batterie. C'est pour cette raison que Benoît calcule votre situation spécifique avant de recommander quoi que ce soit.</p>`,
          nl: `<p><strong>Investering:</strong> tussen 5 000 en 8 000 EUR incl. BTW voor een lithium-ijzer-fosfaat-batterij van 5 tot 10 kWh.</p>
<p><strong>Geschatte jaarlijkse besparingen:</strong></p>
<ul>
<li>Huishouden zonder elektrische wagen: 220 tot 400 EUR/jaar</li>
<li>Huishouden met elektrische wagen en IMPACT-tarief: 400 tot 600 EUR/jaar</li>
</ul>
<p><strong>Terugverdientijd:</strong> 10 tot 15 jaar naargelang het profiel.</p>
<p><strong>Levensduur:</strong> 10 tot 15 jaar (fabrieksgarantie minimum 10 jaar).</p>
<p>De rendabiliteit is dus krap. Voor een huishouden zonder elektrische wagen in regime pre-2024 kan de terugverdientijd de levensduur van de batterij overschrijden. Daarom berekent Benoît uw specifieke situatie vóór hij ook maar iets aanbeveelt.</p>`,
        },
      },
      {
        id: "batterie-impact",
        title: {
          fr: "Batterie et tarif IMPACT : la combinaison qui change l'équation",
          nl: "Batterij en IMPACT-tarief: de combinatie die de vergelijking verandert",
        },
        body: {
          fr: `<p>Le tarif IMPACT (tri-horaire) introduit en janvier 2026 rend la batterie plus pertinente pour les installations post-2024 :</p>
<ul>
<li><strong>Plage ECO (11h-17h) :</strong> vos panneaux produisent et chargent la batterie au coût le plus bas</li>
<li><strong>Plage PIC (17h-22h) :</strong> l'électricité du réseau coûte le plus cher. C'est précisément le moment où votre batterie se décharge pour alimenter la maison</li>
</ul>
<p>La batterie exploite le différentiel de prix entre les heures ECO et les heures PIC. Plus ce différentiel est élevé, plus la batterie se justifie.</p>
<p>Avec un véhicule électrique, la logique se renforce : la recharge solaire entre 10h et 16h charge la voiture en plage ECO, tandis que la batterie prend le relais pour la maison en plage PIC.</p>`,
          nl: `<p>Het IMPACT-tarief (drie-uurtarief), ingevoerd in januari 2026, maakt de batterij relevanter voor installaties na 2024:</p>
<ul>
<li><strong>ECO-tijdvak (11u-17u):</strong> uw panelen produceren en laden de batterij op tegen de laagste kost</li>
<li><strong>PIEK-tijdvak (17u-22u):</strong> elektriciteit van het net is het duurst. Precies het moment waarop uw batterij zich ontlaadt om het huis te voeden</li>
</ul>
<p>De batterij benut het prijsverschil tussen de ECO- en de PIEK-uren. Hoe groter dit verschil, hoe meer de batterij zich rechtvaardigt.</p>
<p>Met een elektrische wagen wordt de logica nog sterker: het zonneladen tussen 10u en 16u laadt de wagen in het ECO-tijdvak, terwijl de batterij het huis bedient in het PIEK-tijdvak.</p>`,
        },
      },
      {
        id: "dimensionnement-batterie",
        title: {
          fr: "Le dimensionnement correct : ni trop, ni trop peu",
          nl: "De juiste dimensionering: niet te veel, niet te weinig",
        },
        body: {
          fr: `<p>En tant qu'ancien inspecteur, Benoît a vu des installations où la batterie était surdimensionnée par rapport au surplus réel. Résultat : un investissement plus lourd sans gain proportionnel.</p>
<p><strong>Règle de dimensionnement :</strong></p>
<ul>
<li>Votre batterie doit couvrir votre consommation entre la fin de production solaire (~17h) et le lendemain matin (~7h)</li>
<li>Pour un ménage moyen : 5 à 7 kWh suffisent</li>
<li>Au-delà de 10 kWh, la capacité supplémentaire reste inutilisée la plupart des nuits</li>
</ul>
<p>On dimensionne sur la base de votre courbe de charge réelle, pas d'une estimation générique.</p>`,
          nl: `<p>Als voormalig inspecteur heeft Benoît installaties gezien waar de batterij overgedimensioneerd was ten opzichte van het werkelijke overschot. Resultaat: een zwaardere investering zonder evenredige winst.</p>
<p><strong>Dimensioneringsregel:</strong></p>
<ul>
<li>Uw batterij moet uw verbruik dekken tussen het einde van de zonneproductie (~17u) en de volgende ochtend (~7u)</li>
<li>Voor een gemiddeld huishouden: 5 tot 7 kWh volstaat</li>
<li>Boven 10 kWh blijft de bijkomende capaciteit de meeste nachten ongebruikt</li>
</ul>
<p>Wij dimensioneren op basis van uw werkelijke belastingscurve, niet van een generieke schatting.</p>`,
        },
      },
    ],
    comparisonRows: [
      {
        aspect: { fr: "Conseil préalable", nl: "Voorafgaand advies" },
        others: {
          fr: "Batterie proposée systématiquement pour augmenter le montant du devis",
          nl: "Batterij systematisch aangeboden om het offertebedrag te verhogen",
        },
        beEnergies: {
          fr: "Batterie recommandée uniquement si le calcul démontre un retour raisonnable pour votre situation",
          nl: "Batterij alleen aanbevolen als de berekening een redelijke terugverdientijd aantoont voor uw situatie",
        },
      },
      {
        aspect: { fr: "Dimensionnement", nl: "Dimensionering" },
        others: {
          fr: "Capacité maximale proposée sans analyse de la consommation nocturne",
          nl: "Maximale capaciteit voorgesteld zonder analyse van het nachtverbruik",
        },
        beEnergies: {
          fr: "Capacité calculée sur votre courbe de charge réelle et votre profil horaire",
          nl: "Capaciteit berekend op uw werkelijke belastingscurve en uw uurprofiel",
        },
      },
      {
        aspect: { fr: "Intégration solaire", nl: "Zonne-integratie" },
        others: {
          fr: "Batterie installée sans optimisation du flux panneaux-batterie-réseau",
          nl: "Batterij geïnstalleerd zonder optimalisatie van de stroom panelen-batterij-net",
        },
        beEnergies: {
          fr: "Configuration intégrée : panneaux, batterie, onduleur et borne de recharge optimisés comme un système",
          nl: "Geïntegreerde configuratie: panelen, batterij, omvormer en laadpaal geoptimaliseerd als één systeem",
        },
      },
      {
        aspect: {
          fr: "Explication du tarif IMPACT",
          nl: "Uitleg over IMPACT-tarief",
        },
        others: {
          fr: "Rarement mentionné ou mal expliqué lors de la vente",
          nl: "Zelden vermeld of slecht uitgelegd bij de verkoop",
        },
        beEnergies: {
          fr: "Simulation complète avec plages ECO/PIC et estimation des économies réelles",
          nl: "Volledige simulatie met ECO/PIEK-tijdvakken en schatting van werkelijke besparingen",
        },
      },
      {
        aspect: {
          fr: "Transparence sur la rentabilité",
          nl: "Transparantie over rentabiliteit",
        },
        others: {
          fr: "Promesses de rentabilité rapide sans tenir compte de la durée de vie",
          nl: "Beloftes van snelle rentabiliteit zonder rekening te houden met de levensduur",
        },
        beEnergies: {
          fr: "Si la batterie n'est pas rentable dans votre cas, on vous le dit. On préfère un client bien conseillé à une vente forcée.",
          nl: "Is de batterij niet rendabel in uw geval, dan zeggen we het. Wij verkiezen een goed geadviseerde klant boven een geforceerde verkoop.",
        },
      },
    ],
    ctaTitle: {
      fr: "Votre batterie est-elle rentable ? Faisons le calcul.",
      nl: "Is uw batterij rendabel? Laten we de berekening maken.",
    },
    ctaDescription: {
      fr: "Benoît analyse votre consommation, votre installation existante et votre profil horaire. Vous recevez une réponse claire : oui, non, ou pas encore.",
      nl: "Benoît analyseert uw verbruik, uw bestaande installatie en uw uurprofiel. U krijgt een duidelijk antwoord: ja, nee of nog niet.",
    },
    ctaLabel: {
      fr: "Demander mon diagnostic gratuit",
      nl: "Vraag mijn gratis diagnose aan",
    },
  },

  "bornes-de-recharge": {
    seoTitle: {
      fr: "Borne de recharge en Belgique | Installation à domicile et entreprise",
      nl: "Laadpaal in België | Installatie thuis en bij bedrijven",
    },
    metaDescription: {
      fr: "Installation de bornes de recharge à domicile par un ancien inspecteur. Intégration solaire, recharge 10h-16h, conformité garantie. Diagnostic gratuit.",
      nl: "Installatie van laadpalen aan huis door een voormalig inspecteur. Zonne-integratie, laden 10u-16u, conformiteit gewaarborgd. Gratis diagnose.",
    },
    headline: {
      fr: "Borne de recharge à domicile : rechargez avec vos panneaux, pas avec le réseau",
      nl: "Laadpaal aan huis: laad op met uw panelen, niet met het net",
    },
    subheadline: {
      fr: "Installer une borne, c'est simple. L'intégrer correctement à votre installation électrique et solaire, c'est un autre métier. Celui d'un ancien inspecteur en conformité.",
      nl: "Een laadpaal installeren is eenvoudig. Hem correct integreren in uw elektrische installatie en zonnesysteem is een ander vak. Dat van een voormalig inspecteur conformiteit.",
    },
    sections: [
      {
        id: "recharge-solaire",
        title: {
          fr: "Recharger au solaire : le calcul qui change tout",
          nl: "Laden met de zon: de berekening die alles verandert",
        },
        body: {
          fr: `<p>En 2026, 1 voiture électrique sur 3 vendue en Belgique est rechargée à domicile. La question n'est plus de savoir si vous avez besoin d'une borne, mais comment la connecter intelligemment à votre installation.</p>
<p><strong>Le principe :</strong> vos panneaux produisent entre 10h et 16h. Votre voiture est souvent garée à domicile pendant ces heures (télétravail, week-ends, retraite). En programmant la recharge pendant les heures de production solaire, vous rechargez au coût le plus bas possible.</p>
<p><strong>Économies estimées :</strong></p>
<ul>
<li>Recharge réseau standard : ~38 c/kWh, soit environ <strong>7,60 EUR pour 100 km</strong></li>
<li>Recharge solaire directe : coût quasi nul (le soleil ne facture pas)</li>
<li>Avec le tarif IMPACT, la recharge solaire entre 11h et 17h tombe en plage ECO : double avantage</li>
</ul>
<p>Selon la simulation CWaPE, un ménage avec véhicule électrique et tarif IMPACT peut économiser jusqu'à <strong>28%</strong> sur sa facture de distribution.</p>`,
          nl: `<p>In 2026 wordt 1 op 3 elektrische wagens verkocht in België thuis opgeladen. De vraag is niet meer of u een laadpaal nodig hebt, maar hoe u hem slim aansluit op uw installatie.</p>
<p><strong>Het principe:</strong> uw panelen produceren tussen 10u en 16u. Uw wagen staat vaak thuis geparkeerd tijdens die uren (telewerk, weekends, pensioen). Door het laden te programmeren tijdens de uren van zonneproductie laadt u op aan de laagst mogelijke kost.</p>
<p><strong>Geschatte besparingen:</strong></p>
<ul>
<li>Standaard netladen: ~38 c/kWh, ongeveer <strong>7,60 EUR voor 100 km</strong></li>
<li>Direct zonneladen: bijna gratis (de zon factureert niet)</li>
<li>Met het IMPACT-tarief valt zonneladen tussen 11u en 17u in het ECO-tijdvak: dubbel voordeel</li>
</ul>
<p>Volgens de CWaPE-simulatie kan een huishouden met elektrische wagen en IMPACT-tarief tot <strong>28%</strong> besparen op zijn distributiefactuur.</p>`,
        },
      },
      {
        id: "mono-tri",
        title: {
          fr: "7,4 kW monophasé ou 11-22 kW triphasé : quel choix pour vous",
          nl: "7,4 kW eenfasig of 11-22 kW driefasig: welke keuze voor u",
        },
        body: {
          fr: `<p>Le choix de la puissance dépend de trois facteurs que Benoît vérifie lors du diagnostic :</p>
<h4>Borne 7,4 kW (monophasé)</h4>
<ul>
<li>Compatible avec la plupart des installations résidentielles existantes</li>
<li>Temps de recharge complet : 6 à 8 heures (largement suffisant pour une recharge nocturne ou en journée)</li>
<li>Coût d'installation plus bas, pas de modification du raccordement nécessaire dans la majorité des cas</li>
<li>Idéale si votre compteur est monophasé et que vous n'envisagez pas de pompe à chaleur</li>
</ul>
<h4>Borne 11 à 22 kW (triphasé)</h4>
<ul>
<li>Nécessite un raccordement triphasé (vérification préalable indispensable)</li>
<li>Temps de recharge complet : 2 à 4 heures</li>
<li>Pertinente si vous roulez beaucoup (+40 000 km/an) ou si le véhicule doit être disponible rapidement</li>
<li>S'intègre mieux dans un système global (panneaux + batterie + pompe à chaleur + borne)</li>
</ul>
<p><strong>Ce que Benoît vérifie et que d'autres ne vérifient pas :</strong> la capacité de votre tableau électrique, la section des câbles existants, la tension du réseau, et la compatibilité avec votre onduleur solaire. Une borne 22 kW installée sur un tableau sous-dimensionné, c'est un rapport de non-conformité garanti.</p>`,
          nl: `<p>De keuze van het vermogen hangt af van drie factoren die Benoît tijdens de diagnose controleert:</p>
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
      },
      {
        id: "integration-systeme",
        title: {
          fr: "La borne comme pièce d'un système énergétique complet",
          nl: "De laadpaal als onderdeel van een volledig energiesysteem",
        },
        body: {
          fr: `<p>Une borne de recharge installée seule est un produit. Une borne intégrée à vos panneaux, votre batterie et votre tarification, c'est une stratégie.</p>
<p><strong>Configuration optimale :</strong></p>
<ul>
<li><strong>Panneaux solaires</strong> : produisent entre 10h et 16h</li>
<li><strong>Borne de recharge</strong> : programmée pour charger pendant les heures de production solaire</li>
<li><strong>Batterie domestique</strong> : stocke le surplus solaire pour la consommation du soir (plage PIC 17h-22h)</li>
<li><strong>Tarif IMPACT</strong> : recharge en plage ECO, consommation batterie en plage PIC</li>
</ul>
<p>Coordonner quatre entreprises différentes pour obtenir ce résultat, c'est un parcours du combattant. Chez Be'energies, un seul interlocuteur maîtrise l'ensemble du système.</p>`,
          nl: `<p>Een laadpaal alleen geïnstalleerd is een product. Een laadpaal geïntegreerd met uw panelen, uw batterij en uw tariefstructuur is een strategie.</p>
<p><strong>Optimale configuratie:</strong></p>
<ul>
<li><strong>Zonnepanelen</strong>: produceren tussen 10u en 16u</li>
<li><strong>Laadpaal</strong>: geprogrammeerd om te laden tijdens de zonneproductie-uren</li>
<li><strong>Thuisbatterij</strong>: slaat het zonne-overschot op voor het avondverbruik (PIEK-tijdvak 17u-22u)</li>
<li><strong>IMPACT-tarief</strong>: laden in ECO-tijdvak, batterijverbruik in PIEK-tijdvak</li>
</ul>
<p>Vier verschillende bedrijven coördineren om dit resultaat te bereiken is een lijdensweg. Bij Be'energies beheerst één aanspreekpunt het volledige systeem.</p>`,
        },
      },
      {
        id: "conformite-borne",
        title: {
          fr: "Conformité électrique : le point que personne ne mentionne",
          nl: "Elektrische conformiteit: het punt dat niemand vermeldt",
        },
        body: {
          fr: `<p>Une borne de recharge est un équipement de forte puissance connecté en permanence. Les exigences de conformité électrique sont strictes :</p>
<ul>
<li>Protection différentielle dédiée (type A ou type B selon le modèle de borne)</li>
<li>Section de câble adaptée à la puissance et à la longueur du trajet</li>
<li>Mise à la terre conforme</li>
<li>Disjoncteur calibré correctement</li>
</ul>
<p>En tant qu'ancien inspecteur, Benoît a rempli des rapports de non-conformité pour des bornes installées avec des câbles sous-dimensionnés, des protections inadaptées ou des mises à la terre défaillantes. Ce n'est pas de la théorie : ce sont des défauts qu'il a constatés sur le terrain, et qu'il ne reproduira pas.</p>`,
          nl: `<p>Een laadpaal is een toestel met hoog vermogen dat permanent aangesloten is. De conformiteitseisen zijn streng:</p>
<ul>
<li>Specifieke differentieelschakelaar (type A of type B afhankelijk van het laadpaalmodel)</li>
<li>Kabeldoorsnede afgestemd op het vermogen en de lengte van het tracé</li>
<li>Conforme aarding</li>
<li>Correct gekalibreerde automaat</li>
</ul>
<p>Als voormalig inspecteur heeft Benoît niet-conformiteitsrapporten ingediend voor laadpalen geïnstalleerd met ondergedimensioneerde kabels, ongeschikte beveiligingen of gebrekkige aarding. Dat is geen theorie: het zijn fouten die hij ter plaatse heeft vastgesteld en die hij niet zal herhalen.</p>`,
        },
      },
    ],
    comparisonRows: [
      {
        aspect: {
          fr: "Vérification du tableau électrique",
          nl: "Controle van het schakelbord",
        },
        others: {
          fr: "Borne installée sans vérifier la capacité du tableau existant",
          nl: "Laadpaal geïnstalleerd zonder de capaciteit van het bestaande schakelbord te controleren",
        },
        beEnergies: {
          fr: "Diagnostic complet du tableau, du raccordement et de la section des câbles avant toute installation",
          nl: "Volledige diagnose van schakelbord, aansluiting en kabeldoorsnede vóór elke installatie",
        },
      },
      {
        aspect: { fr: "Intégration solaire", nl: "Zonne-integratie" },
        others: {
          fr: "Borne installée indépendamment du système photovoltaïque",
          nl: "Laadpaal geïnstalleerd los van het zonnesysteem",
        },
        beEnergies: {
          fr: "Programmation de la recharge en heures de production solaire, optimisation du flux énergétique",
          nl: "Programmering van het laden tijdens zonneproductie-uren, optimalisatie van de energiestroom",
        },
      },
      {
        aspect: { fr: "Choix de puissance", nl: "Vermogenkeuze" },
        others: {
          fr: "Puissance maximale proposée sans analyse du raccordement existant",
          nl: "Maximaal vermogen voorgesteld zonder analyse van de bestaande aansluiting",
        },
        beEnergies: {
          fr: "Puissance recommandée selon votre raccordement, votre consommation et votre production solaire",
          nl: "Aanbevolen vermogen op basis van uw aansluiting, uw verbruik en uw zonneproductie",
        },
      },
      {
        aspect: {
          fr: "Conformité électrique",
          nl: "Elektrische conformiteit",
        },
        others: {
          fr: "Protection différentielle générique, pas de vérification post-installation",
          nl: "Generieke differentieelschakelaar, geen controle na installatie",
        },
        beEnergies: {
          fr: "Protection dédiée, vérification de conformité par un ancien inspecteur, installation prête pour le contrôle",
          nl: "Specifieke beveiliging, conformiteitscontrole door een voormalig inspecteur, installatie klaar voor de keuring",
        },
      },
      {
        aspect: { fr: "Vision système", nl: "Systeemvisie" },
        others: {
          fr: "Borne traitée comme un produit isolé",
          nl: "Laadpaal behandeld als geïsoleerd product",
        },
        beEnergies: {
          fr: "Borne intégrée dans un écosystème : panneaux, batterie, pompe à chaleur, tarif IMPACT",
          nl: "Laadpaal geïntegreerd in een ecosysteem: panelen, batterij, warmtepomp, IMPACT-tarief",
        },
      },
    ],
    ctaTitle: {
      fr: "Diagnostic borne de recharge gratuit",
      nl: "Gratis laadpaal-diagnose",
    },
    ctaDescription: {
      fr: "Benoît vérifie votre raccordement, votre tableau électrique et votre installation solaire. Vous recevez une recommandation claire sur la puissance, le modèle et l'intégration optimale.",
      nl: "Benoît controleert uw aansluiting, uw schakelbord en uw zonne-installatie. U krijgt een duidelijke aanbeveling over het vermogen, het model en de optimale integratie.",
    },
    ctaLabel: {
      fr: "Demander mon diagnostic gratuit",
      nl: "Vraag mijn gratis diagnose aan",
    },
  },

  "conformite-electrique": {
    seoTitle: {
      fr: "Conformité électrique en Belgique | Contrôle, mise en conformité et rapport",
      nl: "Elektrische conformiteit in België | Keuring, in conformiteit brengen en rapport",
    },
    metaDescription: {
      fr: "Mise en conformité électrique par un ancien inspecteur en installation électrique, certifié RESCERT. Il a rédigé des rapports de non-conformité pendant des années. Diagnostic gratuit.",
      nl: "In conformiteit brengen door een voormalig inspecteur elektrische installaties, RESCERT-gecertificeerd. Hij schreef jarenlang niet-conformiteitsrapporten. Gratis diagnose.",
    },
    headline: {
      fr: "Conformité électrique : par celui qui rédigeait les rapports de non-conformité",
      nl: "Elektrische conformiteit: door wie de niet-conformiteitsrapporten schreef",
    },
    subheadline: {
      fr: "Benoît Dezso a passé des années à inspecter des installations électriques pour des organismes agréés. Il sait exactement ce que le contrôleur va vérifier. Votre installation sera prête.",
      nl: "Benoît Dezso heeft jarenlang elektrische installaties geïnspecteerd voor erkende organismen. Hij weet precies wat de keurder zal controleren. Uw installatie zal er klaar voor zijn.",
    },
    sections: [
      {
        id: "pourquoi-conformite",
        title: {
          fr: "La conformité électrique, ce n'est pas une formalité. C'est une protection.",
          nl: "Elektrische conformiteit is geen formaliteit. Het is bescherming.",
        },
        body: {
          fr: `<p>Une installation non conforme présente trois risques concrets :</p>
<ul>
<li><strong>Risque pour la sécurité :</strong> électrocution, incendie d'origine électrique, surchauffe des câbles. Ce ne sont pas des hypothèses : ce sont des sinistres que Benoît a documentés pendant ses années d'inspection.</li>
<li><strong>Risque d'assurance :</strong> en cas de sinistre électrique, votre assurance habitation vérifie la conformité de l'installation. Si elle n'est pas conforme, la couverture peut être refusée. Vous portez alors seul les conséquences financières.</li>
<li><strong>Risque administratif :</strong> lors d'une vente immobilière, un rapport de non-conformité bloque ou retarde la transaction. Le coût de mise en conformité dans l'urgence est toujours plus élevé.</li>
</ul>
<p>La conformité protège votre famille, votre patrimoine et votre tranquillité. C'est la raison pour laquelle Benoît l'a choisie comme fondation de son métier.</p>`,
          nl: `<p>Een niet-conforme installatie houdt drie concrete risico's in:</p>
<ul>
<li><strong>Veiligheidsrisico:</strong> elektrocutie, brand van elektrische oorsprong, oververhitting van kabels. Dat zijn geen hypotheses: dat zijn schadegevallen die Benoît tijdens zijn inspectiejaren heeft gedocumenteerd.</li>
<li><strong>Verzekeringsrisico:</strong> bij een elektrisch schadegeval controleert uw woonverzekering de conformiteit van de installatie. Is ze niet conform, dan kan de dekking geweigerd worden. U draagt dan zelf de financiële gevolgen.</li>
<li><strong>Administratief risico:</strong> bij verkoop van een woning blokkeert of vertraagt een niet-conformiteitsrapport de transactie. De kost van in conformiteit brengen onder druk is altijd hoger.</li>
</ul>
<p>Conformiteit beschermt uw gezin, uw vermogen en uw gemoedsrust. Daarom heeft Benoît het gekozen als fundament van zijn vak.</p>`,
        },
      },
      {
        id: "oeil-inspecteur",
        title: {
          fr: "L'avantage d'un ancien inspecteur : il connaît le rapport avant qu'il n'existe",
          nl: "Het voordeel van een voormalig inspecteur: hij kent het rapport voor het bestaat",
        },
        body: {
          fr: `<p>Pendant ses années d'inspection, Benoît a rédigé des centaines de rapports de non-conformité. Il connaît les infractions les plus fréquentes, les points que chaque contrôleur vérifie en priorité, et les détails techniques qui font la différence entre un rapport vierge et une liste de remarques.</p>
<p><strong>Les 5 infractions les plus fréquentes qu'il a constatées :</strong></p>
<ol>
<li><strong>Absence de différentiel 30 mA</strong> sur les circuits sensibles (salle de bain, cuisine, extérieur)</li>
<li><strong>Mise à la terre défaillante ou absente</strong> : résistance de terre supérieure à 30 ohms</li>
<li><strong>Schémas unifilaires non conformes</strong> ou absents : le plan de votre installation doit refléter la réalité</li>
<li><strong>Sections de câbles inadaptées</strong> : câbles sous-dimensionnés pour la charge réelle</li>
<li><strong>Circuits mélangés</strong> : éclairage et prises sur le même disjoncteur, dépassant la charge admissible</li>
</ol>
<p>Chacun de ces points fait l'objet d'une vérification systématique lors de chaque intervention Be'energies. Pas parce que c'est une procédure : parce que Benoît les a vus provoquer des refus de contrôle des centaines de fois.</p>`,
          nl: `<p>Tijdens zijn inspectiejaren heeft Benoît honderden niet-conformiteitsrapporten geschreven. Hij kent de meest voorkomende overtredingen, de punten die elke keurder bij voorrang controleert en de technische details die het verschil maken tussen een blanco rapport en een lijst met opmerkingen.</p>
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
      },
      {
        id: "quand-conformite",
        title: {
          fr: "Quand faut-il vérifier la conformité de votre installation ?",
          nl: "Wanneer moet u de conformiteit van uw installatie laten controleren?",
        },
        body: {
          fr: `<p>Le contrôle de conformité est obligatoire dans les situations suivantes :</p>
<ul>
<li><strong>Nouvelle installation</strong> : avant la mise sous tension</li>
<li><strong>Modification importante</strong> : ajout de panneaux solaires, borne de recharge, pompe à chaleur, extension du tableau</li>
<li><strong>Vente du bien immobilier</strong> : le rapport de conformité est exigé par le notaire</li>
<li><strong>Contrôle périodique</strong> : tous les 25 ans pour les installations domestiques</li>
</ul>
<p><strong>Conseil de Benoît :</strong> n'attendez pas la vente pour découvrir les non-conformités. Le coût d'une mise en conformité planifiée est significativement inférieur à celui d'une mise en conformité dans l'urgence d'une transaction immobilière.</p>`,
          nl: `<p>De conformiteitskeuring is verplicht in de volgende situaties:</p>
<ul>
<li><strong>Nieuwe installatie</strong>: vóór de inbedrijfstelling</li>
<li><strong>Belangrijke wijziging</strong>: toevoeging van zonnepanelen, laadpaal, warmtepomp, uitbreiding van het schakelbord</li>
<li><strong>Verkoop van het onroerend goed</strong>: het conformiteitsrapport wordt vereist door de notaris</li>
<li><strong>Periodieke keuring</strong>: elke 25 jaar voor residentiële installaties</li>
</ul>
<p><strong>Advies van Benoît:</strong> wacht niet op de verkoop om niet-conformiteiten te ontdekken. De kost van een gepland in-conformiteit-brengen is significant lager dan die van een in-conformiteit-brengen in de spoed van een vastgoedtransactie.</p>`,
        },
      },
      {
        id: "processus-conformite",
        title: {
          fr: "Notre processus : du diagnostic au rapport vierge",
          nl: "Ons proces: van diagnose tot blanco rapport",
        },
        body: {
          fr: `<p>Be'energies applique une méthodologie structurée, directement issue de l'expérience d'inspection de Benoît :</p>
<ol>
<li><strong>Diagnostic complet</strong> : inspection visuelle et mesures (résistance de terre, impédance de boucle, vérification des différentiels, contrôle des sections). On identifie chaque écart par rapport aux normes.</li>
<li><strong>Rapport de pré-inspection</strong> : vous recevez un document détaillant chaque point non conforme, avec la priorité, le coût estimé, et l'explication technique.</li>
<li><strong>Travaux de mise en conformité</strong> : exécution des modifications nécessaires. Pas de travaux inutiles, pas de sur-facturation, uniquement ce qui est exigé par la norme.</li>
<li><strong>Vérification finale</strong> : avant l'intervention de l'organisme agréé, Benoît effectue un contrôle interne identique à celui que fera l'inspecteur. C'est le même regard, la même méthode, les mêmes critères.</li>
</ol>
<p>Résultat : votre installation passe le contrôle du premier coup. Pas de surprise, pas de visite supplémentaire payante, pas de stress.</p>`,
          nl: `<p>Be'energies past een gestructureerde methodologie toe, rechtstreeks afgeleid uit Benoîts inspectie-ervaring:</p>
<ol>
<li><strong>Volledige diagnose</strong>: visuele inspectie en metingen (aardingsweerstand, lusimpedantie, controle van differentieelschakelaars, doorsnedecontrole). Wij identificeren elke afwijking ten opzichte van de normen.</li>
<li><strong>Pre-inspectierapport</strong>: u ontvangt een document dat elk niet-conform punt detailleert, met prioriteit, geschatte kost en technische uitleg.</li>
<li><strong>In-conformiteit-brengen-werken</strong>: uitvoering van de nodige wijzigingen. Geen overbodige werken, geen overfacturering, alleen wat door de norm wordt vereist.</li>
<li><strong>Finale controle</strong>: vóór de tussenkomst van het erkende organisme voert Benoît een interne controle uit identiek aan die van de keurder. Hetzelfde oog, dezelfde methode, dezelfde criteria.</li>
</ol>
<p>Resultaat: uw installatie slaagt voor de keuring vanaf de eerste keer. Geen verrassing, geen betalend bijkomend bezoek, geen stress.</p>`,
        },
      },
    ],
    comparisonRows: [
      {
        aspect: {
          fr: "Expertise du responsable",
          nl: "Expertise van de verantwoordelijke",
        },
        others: {
          fr: "Électricien généraliste sans expérience spécifique en inspection de conformité",
          nl: "Algemene elektricien zonder specifieke ervaring in conformiteitsinspectie",
        },
        beEnergies: {
          fr: "Ancien inspecteur en installation électrique, certifié RESCERT, auteur de centaines de rapports de non-conformité",
          nl: "Voormalig inspecteur elektrische installaties, RESCERT-gecertificeerd, auteur van honderden niet-conformiteitsrapporten",
        },
      },
      {
        aspect: { fr: "Diagnostic préalable", nl: "Voorafgaande diagnose" },
        others: {
          fr: "Intervention directe sans évaluation préalable de l'état de l'installation",
          nl: "Directe interventie zonder voorafgaande beoordeling van de installatie",
        },
        beEnergies: {
          fr: "Pré-inspection complète avec rapport détaillé avant tout travail",
          nl: "Volledige pre-inspectie met gedetailleerd rapport vóór elke werk",
        },
      },
      {
        aspect: { fr: "Connaissance des normes", nl: "Kennis van normen" },
        others: {
          fr: "Application des normes connues, sans vision globale du processus de contrôle",
          nl: "Toepassing van bekende normen, zonder globale visie op het keuringsproces",
        },
        beEnergies: {
          fr: "Connaissance précise de ce que chaque organisme agréé vérifie, point par point",
          nl: "Nauwkeurige kennis van wat elk erkend organisme controleert, punt voor punt",
        },
      },
      {
        aspect: {
          fr: "Vérification post-travaux",
          nl: "Controle na werken",
        },
        others: {
          fr: "Travaux terminés, le client attend le contrôle en espérant que tout passe",
          nl: "Werken afgerond, de klant wacht op de keuring in de hoop dat alles in orde is",
        },
        beEnergies: {
          fr: "Contrôle interne identique à celui de l'organisme agréé avant la visite officielle",
          nl: "Interne controle identiek aan die van het erkende organisme vóór het officiële bezoek",
        },
      },
      {
        aspect: { fr: "Schémas unifilaires", nl: "Eendraadschema's" },
        others: {
          fr: "Schéma générique ou non mis à jour après les travaux",
          nl: "Generiek schema of niet bijgewerkt na de werken",
        },
        beEnergies: {
          fr: "Schéma unifilaire conforme à la réalité de l'installation, mis à jour systématiquement",
          nl: "Eendraadschema conform aan de realiteit van de installatie, systematisch bijgewerkt",
        },
      },
      {
        aspect: {
          fr: "Taux de réussite au premier contrôle",
          nl: "Slaagpercentage eerste keuring",
        },
        others: {
          fr: "Variable, avec des reprises fréquentes qui coûtent du temps et de l'argent",
          nl: "Variabel, met frequente herhalingen die tijd en geld kosten",
        },
        beEnergies: {
          fr: "Installation conçue pour passer le contrôle du premier coup, sans remarque",
          nl: "Installatie ontworpen om de keuring de eerste keer te doorstaan, zonder opmerking",
        },
      },
    ],
    ctaTitle: {
      fr: "Diagnostic de conformité gratuit",
      nl: "Gratis conformiteitsdiagnose",
    },
    ctaDescription: {
      fr: "Benoît inspecte votre installation avec le même regard qu'un contrôleur agréé. Vous recevez un état des lieux précis avant toute intervention.",
      nl: "Benoît inspecteert uw installatie met dezelfde blik als een erkend keurder. U ontvangt een nauwkeurige stand van zaken vóór elke interventie.",
    },
    ctaLabel: {
      fr: "Demander mon diagnostic gratuit",
      nl: "Vraag mijn gratis diagnose aan",
    },
  },

  "nettoyage-toiture": {
    // TODO: NL translation needed for seoTitle (nettoyage-toiture)
    seoTitle: {
      fr: "Nettoyage et peinture toiture Belgique | Be'energies",
      nl: "Nettoyage et peinture toiture Belgique | Be'energies",
    },
    // TODO: NL translation needed for metaDescription (nettoyage-toiture)
    metaDescription: {
      fr: "Nettoyage et peinture de toiture professionnels. Protégez vos panneaux solaires et votre investissement. Inspection incluse. Devis gratuit.",
      nl: "Nettoyage et peinture de toiture professionnels. Protégez vos panneaux solaires et votre investissement. Inspection incluse. Devis gratuit.",
    },
    // TODO: NL translation needed for headline (nettoyage-toiture)
    headline: {
      fr: "Nettoyage et peinture de toiture : protégez votre investissement énergétique",
      nl: "Nettoyage et peinture de toiture : protégez votre investissement énergétique",
    },
    // TODO: NL translation needed for subheadline (nettoyage-toiture)
    subheadline: {
      fr: "Une toiture sale ou dégradée réduit le rendement de vos panneaux et raccourcit la durée de vie de votre couverture. On nettoie, on protège, et on vérifie vos panneaux dans la même intervention.",
      nl: "Une toiture sale ou dégradée réduit le rendement de vos panneaux et raccourcit la durée de vie de votre couverture. On nettoie, on protège, et on vérifie vos panneaux dans la même intervention.",
    },
    sections: [
      {
        id: "impact-rendement",
        // TODO: NL translation needed for section "impact-rendement" (nettoyage-toiture)
        title: {
          fr: "Une toiture sale fait perdre jusqu'à 20% de rendement à vos panneaux",
          nl: "Une toiture sale fait perdre jusqu'à 20% de rendement à vos panneaux",
        },
        body: {
          fr: `<p>Les mousses, lichens et dépôts qui colonisent votre toiture ne restent pas à côté de vos panneaux. Ils progressent sous et autour des modules, créant des zones d'ombre partielle qui réduisent la production.</p>
<p><strong>Impact mesurable :</strong></p>
<ul>
<li>Un panneau partiellement ombragé par des mousses ou des débris peut perdre <strong>15 à 20%</strong> de sa production</li>
<li>L'accumulation de pollen, poussière et fientes d'oiseaux crée un film qui réduit la captation lumineuse</li>
<li>Les micro-onduleurs détectent la baisse panneau par panneau, mais si la cause est externe, seul un nettoyage résout le problème</li>
</ul>
<p>Vous avez investi entre 8 000 et 15 000 EUR dans vos panneaux. Perdre 20% de rendement à cause d'un entretien négligé, c'est 200 à 300 EUR par an de production en moins.</p>`,
          nl: `<p>Les mousses, lichens et dépôts qui colonisent votre toiture ne restent pas à côté de vos panneaux. Ils progressent sous et autour des modules, créant des zones d'ombre partielle qui réduisent la production.</p>
<p><strong>Impact mesurable :</strong></p>
<ul>
<li>Un panneau partiellement ombragé par des mousses ou des débris peut perdre <strong>15 à 20%</strong> de sa production</li>
<li>L'accumulation de pollen, poussière et fientes d'oiseaux crée un film qui réduit la captation lumineuse</li>
<li>Les micro-onduleurs détectent la baisse panneau par panneau, mais si la cause est externe, seul un nettoyage résout le problème</li>
</ul>
<p>Vous avez investi entre 8 000 et 15 000 EUR dans vos panneaux. Perdre 20% de rendement à cause d'un entretien négligé, c'est 200 à 300 EUR par an de production en moins.</p>`,
        },
      },
      {
        id: "nettoyage-professionnel",
        // TODO: NL translation needed for section "nettoyage-professionnel" (nettoyage-toiture)
        title: {
          fr: "Nettoyage professionnel : ce qui fait la différence",
          nl: "Nettoyage professionnel : ce qui fait la différence",
        },
        body: {
          fr: `<p>Le nettoyage de toiture ne se résume pas à un karcher haute pression. Un nettoyage mal réalisé cause plus de dégâts qu'il n'en résout.</p>
<p><strong>Notre méthode :</strong></p>
<ul>
<li><strong>Traitement anti-mousse biocide :</strong> élimination à la racine, pas en surface. La mousse ne repousse pas en 6 mois.</li>
<li><strong>Nettoyage basse pression :</strong> les tuiles et ardoises sont poreuses. La haute pression les abîme et accélère leur dégradation. On travaille à pression contrôlée.</li>
<li><strong>Traitement hydrofuge :</strong> après nettoyage, une couche protectrice repousse l'eau et ralentit la recolonisation par les mousses.</li>
<li><strong>Peinture de toiture :</strong> pour les toitures en fibrociment ou les tuiles décolorées, la peinture de toiture restaure l'étanchéité et l'aspect visuel sans remplacer la couverture.</li>
</ul>`,
          nl: `<p>Le nettoyage de toiture ne se résume pas à un karcher haute pression. Un nettoyage mal réalisé cause plus de dégâts qu'il n'en résout.</p>
<p><strong>Notre méthode :</strong></p>
<ul>
<li><strong>Traitement anti-mousse biocide :</strong> élimination à la racine, pas en surface. La mousse ne repousse pas en 6 mois.</li>
<li><strong>Nettoyage basse pression :</strong> les tuiles et ardoises sont poreuses. La haute pression les abîme et accélère leur dégradation. On travaille à pression contrôlée.</li>
<li><strong>Traitement hydrofuge :</strong> après nettoyage, une couche protectrice repousse l'eau et ralentit la recolonisation par les mousses.</li>
<li><strong>Peinture de toiture :</strong> pour les toitures en fibrociment ou les tuiles décolorées, la peinture de toiture restaure l'étanchéité et l'aspect visuel sans remplacer la couverture.</li>
</ul>`,
        },
      },
      {
        id: "inspection-panneaux",
        // TODO: NL translation needed for section "inspection-panneaux" (nettoyage-toiture)
        title: {
          fr: "L'avantage Be'energies : nettoyage de toiture + inspection de panneaux",
          nl: "L'avantage Be'energies : nettoyage de toiture + inspection de panneaux",
        },
        body: {
          fr: `<p>Quand on est sur votre toit pour nettoyer, on inspecte aussi vos panneaux. C'est un avantage unique lié à notre double compétence.</p>
<p><strong>Ce que Benoît vérifie pendant le nettoyage :</strong></p>
<ul>
<li>État physique des modules (micro-fissures, jaunissement, délamination)</li>
<li>État des fixations et du système de montage</li>
<li>Connectique et câblage visible (oxydation, détérioration des connecteurs MC4)</li>
<li>Présence de points chauds ou de traces de surchauffe</li>
<li>Vérification du bon fonctionnement via le monitoring de production</li>
</ul>
<p>Deux entreprises différentes pour le nettoyage et l'inspection, c'est deux déplacements, deux factures, et souvent une toiture nettoyée sans regard technique sur les panneaux. Ici, c'est un seul passage, un seul interlocuteur, et un rapport complet.</p>`,
          nl: `<p>Quand on est sur votre toit pour nettoyer, on inspecte aussi vos panneaux. C'est un avantage unique lié à notre double compétence.</p>
<p><strong>Ce que Benoît vérifie pendant le nettoyage :</strong></p>
<ul>
<li>État physique des modules (micro-fissures, jaunissement, délamination)</li>
<li>État des fixations et du système de montage</li>
<li>Connectique et câblage visible (oxydation, détérioration des connecteurs MC4)</li>
<li>Présence de points chauds ou de traces de surchauffe</li>
<li>Vérification du bon fonctionnement via le monitoring de production</li>
</ul>
<p>Deux entreprises différentes pour le nettoyage et l'inspection, c'est deux déplacements, deux factures, et souvent une toiture nettoyée sans regard technique sur les panneaux. Ici, c'est un seul passage, un seul interlocuteur, et un rapport complet.</p>`,
        },
      },
    ],
    // TODO: NL translation needed for comparisonRows (nettoyage-toiture)
    comparisonRows: [
      {
        aspect: {
          fr: "Méthode de nettoyage",
          nl: "Méthode de nettoyage",
        },
        others: {
          fr: "Karcher haute pression qui endommage les tuiles et réduit leur durée de vie",
          nl: "Karcher haute pression qui endommage les tuiles et réduit leur durée de vie",
        },
        beEnergies: {
          fr: "Nettoyage basse pression adapté au matériau de couverture, traitement biocide longue durée",
          nl: "Nettoyage basse pression adapté au matériau de couverture, traitement biocide longue durée",
        },
      },
      {
        aspect: {
          fr: "Inspection des panneaux",
          nl: "Inspection des panneaux",
        },
        others: {
          fr: "Nettoyage de toiture sans regard sur les panneaux solaires installés",
          nl: "Nettoyage de toiture sans regard sur les panneaux solaires installés",
        },
        beEnergies: {
          fr: "Inspection visuelle et technique des panneaux incluse dans chaque intervention toiture",
          nl: "Inspection visuelle et technique des panneaux incluse dans chaque intervention toiture",
        },
      },
      {
        aspect: {
          fr: "Traitement préventif",
          nl: "Traitement préventif",
        },
        others: {
          fr: "Nettoyage ponctuel sans protection, la mousse revient en quelques mois",
          nl: "Nettoyage ponctuel sans protection, la mousse revient en quelques mois",
        },
        beEnergies: {
          fr: "Traitement hydrofuge après nettoyage pour prolonger le résultat de 3 à 5 ans",
          nl: "Traitement hydrofuge après nettoyage pour prolonger le résultat de 3 à 5 ans",
        },
      },
      {
        aspect: {
          fr: "Compétence technique",
          nl: "Compétence technique",
        },
        others: {
          fr: "Entreprise de nettoyage sans connaissance des installations électriques en toiture",
          nl: "Entreprise de nettoyage sans connaissance des installations électriques en toiture",
        },
        beEnergies: {
          fr: "Ancien inspecteur : connaissance précise des normes de sécurité pour travailler autour des panneaux sous tension",
          nl: "Ancien inspecteur : connaissance précise des normes de sécurité pour travailler autour des panneaux sous tension",
        },
      },
    ],
    // TODO: NL translation needed for ctaTitle (nettoyage-toiture)
    ctaTitle: {
      fr: "Devis nettoyage et inspection gratuit",
      nl: "Devis nettoyage et inspection gratuit",
    },
    // TODO: NL translation needed for ctaDescription (nettoyage-toiture)
    ctaDescription: {
      fr: "Benoît évalue l'état de votre toiture et de vos panneaux en une seule visite. Vous recevez un devis clair pour le nettoyage et un rapport d'état de vos modules.",
      nl: "Benoît évalue l'état de votre toiture et de vos panneaux en une seule visite. Vous recevez un devis clair pour le nettoyage et un rapport d'état de vos modules.",
    },
    // TODO: NL translation needed for ctaLabel (nettoyage-toiture)
    ctaLabel: {
      fr: "Demander mon devis gratuit",
      nl: "Demander mon devis gratuit",
    },
  },

  "pompes-a-chaleur": {
    seoTitle: {
      fr: "Pompe à chaleur en Belgique | Dimensionnement et intégration solaire",
      nl: "Warmtepomp in België | Dimensionering en zonne-integratie",
    },
    metaDescription: {
      fr: "Pompe à chaleur air-eau et air-air intégrée à vos panneaux solaires. Dimensionnement par un ancien inspecteur. Tarif IMPACT optimisé. Diagnostic gratuit.",
      nl: "Lucht/water- en lucht/lucht-warmtepomp geïntegreerd met uw zonnepanelen. Dimensionering door een voormalig inspecteur. IMPACT-tarief geoptimaliseerd. Gratis diagnose.",
    },
    headline: {
      fr: "Pompe à chaleur : chauffage et climatisation intégrés à votre système solaire",
      nl: "Warmtepomp: verwarming en airco geïntegreerd in uw zonnesysteem",
    },
    subheadline: {
      fr: "Une pompe à chaleur mal dimensionnée consomme plus qu'elle ne fait économiser. Benoît dimensionne votre système pour qu'il fonctionne avec vos panneaux, pas contre votre facture.",
      nl: "Een slecht gedimensioneerde warmtepomp verbruikt meer dan ze bespaart. Benoît dimensioneert uw systeem zodat het samenwerkt met uw panelen, niet tegen uw factuur.",
    },
    sections: [
      {
        id: "air-eau-air-air",
        title: {
          fr: "Air-eau ou air-air : deux technologies, deux usages",
          nl: "Lucht/water of lucht/lucht: twee technologieën, twee gebruiken",
        },
        body: {
          fr: `<p>Le choix entre air-eau et air-air dépend de votre système existant et de vos besoins. Voici la distinction concrète :</p>
<h4>Pompe à chaleur air-eau</h4>
<ul>
<li><strong>Usage :</strong> chauffage central (radiateurs ou plancher chauffant) + eau chaude sanitaire</li>
<li><strong>Rendement :</strong> COP moyen de 3 à 4 (pour 1 kWh d'électricité, 3 à 4 kWh de chaleur)</li>
<li><strong>Investissement :</strong> 8 000 à 15 000 EUR TTC selon la puissance et le modèle</li>
<li><strong>Idéale si :</strong> vous remplacez une chaudière au mazout ou au gaz, vous avez un chauffage central existant, vous voulez intégrer l'eau chaude sanitaire</li>
<li><strong>Limite :</strong> efficacité réduite sous -7°C (appoint électrique nécessaire quelques jours par an en Belgique)</li>
</ul>
<h4>Pompe à chaleur air-air (climatisation réversible)</h4>
<ul>
<li><strong>Usage :</strong> chauffage d'appoint pièce par pièce + climatisation en été</li>
<li><strong>Rendement :</strong> COP moyen de 3 à 5 (excellent en mode climatisation)</li>
<li><strong>Investissement :</strong> 2 500 à 6 000 EUR TTC selon le nombre d'unités</li>
<li><strong>Idéale si :</strong> vous voulez la climatisation en été, vous chauffez au bois ou au pellet et cherchez un complément, vous rénovez pièce par pièce</li>
<li><strong>Limite :</strong> ne remplace pas un chauffage central, ne produit pas d'eau chaude sanitaire</li>
</ul>`,
          nl: `<p>De keuze tussen lucht/water en lucht/lucht hangt af van uw bestaand systeem en uw behoeften. Hier is het concrete onderscheid:</p>
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
      },
      {
        id: "integration-solaire-pac",
        title: {
          fr: "Pompe à chaleur + panneaux solaires : la combinaison stratégique",
          nl: "Warmtepomp + zonnepanelen: de strategische combinatie",
        },
        body: {
          fr: `<p>Une pompe à chaleur consomme de l'électricité. Si cette électricité vient de vos panneaux plutôt que du réseau, le coût de fonctionnement chute.</p>
<p><strong>Le calcul :</strong></p>
<ul>
<li>Pompe à chaleur air-eau : consommation annuelle typique de 3 000 à 5 000 kWh</li>
<li>Coût au réseau (~38 c/kWh) : 1 140 à 1 900 EUR/an</li>
<li>Coût en autoconsommation solaire : quasi nul</li>
</ul>
<p>En dimensionnant vos panneaux pour couvrir aussi la consommation de la pompe à chaleur, vous transformez un poste de dépense en un poste couvert par votre production.</p>
<p><strong>Attention au dimensionnement :</strong> une pompe à chaleur augmente significativement votre consommation électrique. Si vos panneaux sont déjà dimensionnés au plus juste, il faudra probablement ajouter des modules. C'est un point que Benoît vérifie systématiquement lors du diagnostic.</p>`,
          nl: `<p>Een warmtepomp verbruikt elektriciteit. Komt die elektriciteit van uw panelen in plaats van het net, dan daalt de werkingskost.</p>
<p><strong>De berekening:</strong></p>
<ul>
<li>Lucht/water-warmtepomp: typisch jaarverbruik van 3 000 tot 5 000 kWh</li>
<li>Kost van het net (~38 c/kWh): 1 140 tot 1 900 EUR/jaar</li>
<li>Kost in zonne-zelfverbruik: bijna nul</li>
</ul>
<p>Door uw panelen te dimensioneren om ook het verbruik van de warmtepomp te dekken, transformeert u een uitgavepost in een post gedekt door uw productie.</p>
<p><strong>Let op de dimensionering:</strong> een warmtepomp verhoogt uw elektrisch verbruik aanzienlijk. Zijn uw panelen al krap gedimensioneerd, dan zullen er waarschijnlijk modules moeten worden toegevoegd. Dit punt controleert Benoît systematisch tijdens de diagnose.</p>`,
        },
      },
      {
        id: "pac-impact",
        title: {
          fr: "Tarif IMPACT et pompe à chaleur : optimiser les heures de chauffe",
          nl: "IMPACT-tarief en warmtepomp: de verwarmingsuren optimaliseren",
        },
        body: {
          fr: `<p>Le tarif IMPACT (tri-horaire) offre une opportunité concrète pour les propriétaires de pompes à chaleur :</p>
<ul>
<li><strong>Plage ECO (11h-17h) :</strong> vos panneaux produisent, votre pompe à chaleur peut préchauffer le ballon d'eau chaude sanitaire et accumuler de la chaleur dans le plancher chauffant (inertie thermique)</li>
<li><strong>Plage PIC (17h-22h) :</strong> la pompe à chaleur fonctionne sur la chaleur accumulée ou sur la batterie, évitant le tarif le plus cher</li>
</ul>
<p>La programmation intelligente de la pompe à chaleur en fonction des plages horaires IMPACT peut réduire le coût de chauffage de <strong>15 à 25%</strong> supplémentaires, en plus de l'autoconsommation solaire.</p>
<p>C'est un exemple concret de ce qu'un système énergétique intégré peut produire quand il est conçu comme un ensemble, pas comme une addition de produits séparés.</p>`,
          nl: `<p>Het IMPACT-tarief (drie-uurtarief) biedt een concrete opportuniteit voor eigenaars van een warmtepomp:</p>
<ul>
<li><strong>ECO-tijdvak (11u-17u):</strong> uw panelen produceren, uw warmtepomp kan de boiler voorverwarmen en warmte accumuleren in de vloerverwarming (thermische inertie)</li>
<li><strong>PIEK-tijdvak (17u-22u):</strong> de warmtepomp werkt op de geaccumuleerde warmte of op de batterij en vermijdt zo het duurste tarief</li>
</ul>
<p>Slimme programmering van de warmtepomp volgens de IMPACT-tijdvakken kan de verwarmingskost met bijkomend <strong>15 tot 25%</strong> verlagen, bovenop het zonne-zelfverbruik.</p>
<p>Dit is een concreet voorbeeld van wat een geïntegreerd energiesysteem kan opleveren wanneer het als een geheel ontworpen wordt, niet als een optelsom van afzonderlijke producten.</p>`,
        },
      },
      {
        id: "conformite-pac",
        title: {
          fr: "Conformité électrique : la pompe à chaleur est un poste de forte puissance",
          nl: "Elektrische conformiteit: de warmtepomp is een post met hoog vermogen",
        },
        body: {
          fr: `<p>L'installation d'une pompe à chaleur modifie significativement la charge de votre installation électrique. Points de conformité critiques :</p>
<ul>
<li><strong>Raccordement électrique dédié</strong> : circuit protégé, disjoncteur calibré, câble de section adéquate</li>
<li><strong>Compatibilité avec le raccordement existant</strong> : une PAC air-eau de 8 kW sur un raccordement monophasé limité nécessite une vérification de la puissance disponible</li>
<li><strong>Mise à la terre de l'unité extérieure</strong> : obligatoire et souvent négligée</li>
<li><strong>Schéma unifilaire mis à jour</strong> : l'ajout de la PAC doit figurer sur le schéma pour que l'installation reste conforme</li>
</ul>
<p>En tant qu'ancien inspecteur, Benoît a constaté de nombreuses installations de pompes à chaleur raccordées de manière non conforme : câbles sous-dimensionnés, absence de protection dédiée, schémas non mis à jour. Chaque installation Be'energies intègre la conformité dès la conception, pas comme un ajout après-coup.</p>`,
          nl: `<p>De installatie van een warmtepomp wijzigt de belasting van uw elektrische installatie aanzienlijk. Kritieke conformiteitspunten:</p>
<ul>
<li><strong>Specifieke elektrische aansluiting</strong>: beveiligd circuit, gekalibreerde automaat, kabel met geschikte doorsnede</li>
<li><strong>Compatibiliteit met de bestaande aansluiting</strong>: een lucht/water-WP van 8 kW op een beperkte eenfasige aansluiting vereist een controle van het beschikbare vermogen</li>
<li><strong>Aarding van de buitenunit</strong>: verplicht en vaak verwaarloosd</li>
<li><strong>Bijgewerkt eendraadschema</strong>: de toevoeging van de WP moet op het schema staan opdat de installatie conform blijft</li>
</ul>
<p>Als voormalig inspecteur heeft Benoît talrijke warmtepompinstallaties vastgesteld die niet-conform aangesloten waren: ondergedimensioneerde kabels, afwezigheid van specifieke beveiliging, niet-bijgewerkte schema's. Elke Be'energies-installatie integreert conformiteit van bij het ontwerp, niet als een toevoeging achteraf.</p>`,
        },
      },
    ],
    comparisonRows: [
      {
        aspect: { fr: "Dimensionnement", nl: "Dimensionering" },
        others: {
          fr: "Puissance standard proposée sans calcul des déperditions thermiques du bâtiment",
          nl: "Standaardvermogen voorgesteld zonder berekening van de warmteverliezen van het gebouw",
        },
        beEnergies: {
          fr: "Calcul thermique basé sur l'isolation, la surface, l'orientation et les besoins réels du ménage",
          nl: "Thermische berekening op basis van isolatie, oppervlakte, oriëntatie en de werkelijke behoeften van het huishouden",
        },
      },
      {
        aspect: { fr: "Intégration solaire", nl: "Zonne-integratie" },
        others: {
          fr: "Pompe à chaleur installée sans coordination avec l'installation photovoltaïque existante",
          nl: "Warmtepomp geïnstalleerd zonder coördinatie met de bestaande zonne-installatie",
        },
        beEnergies: {
          fr: "Dimensionnement conjoint : panneaux + PAC + batterie optimisés pour maximiser l'autoconsommation",
          nl: "Gezamenlijke dimensionering: panelen + WP + batterij geoptimaliseerd om zelfverbruik te maximaliseren",
        },
      },
      {
        aspect: {
          fr: "Optimisation tarifaire",
          nl: "Tariefoptimalisatie",
        },
        others: {
          fr: "Aucune prise en compte du tarif IMPACT dans la programmation de la PAC",
          nl: "Geen rekening met het IMPACT-tarief in de programmering van de WP",
        },
        beEnergies: {
          fr: "Programmation de la PAC en fonction des plages ECO/PIC pour minimiser le coût de fonctionnement",
          nl: "Programmering van de WP volgens de ECO/PIEK-tijdvakken om de werkingskost te minimaliseren",
        },
      },
      {
        aspect: {
          fr: "Conformité électrique",
          nl: "Elektrische conformiteit",
        },
        others: {
          fr: "Raccordement électrique traité comme un détail, sans vérification du schéma unifilaire",
          nl: "Elektrische aansluiting behandeld als detail, zonder controle van het eendraadschema",
        },
        beEnergies: {
          fr: "Circuit dédié conforme, schéma unifilaire mis à jour, vérification par un ancien inspecteur en installation électrique, certifié RESCERT",
          nl: "Specifiek conform circuit, bijgewerkt eendraadschema, controle door een voormalig inspecteur elektrische installaties, RESCERT-gecertificeerd",
        },
      },
      {
        aspect: {
          fr: "Placement de l'unité extérieure",
          nl: "Plaatsing van de buitenunit",
        },
        others: {
          fr: "Positionnement basé sur la facilité d'installation, sans tenir compte du bruit et de l'efficacité",
          nl: "Positionering op basis van installatiegemak, zonder rekening met geluid en efficiëntie",
        },
        beEnergies: {
          fr: "Positionnement optimisé pour le rendement thermique, le niveau sonore (35-50 dB) et le respect du voisinage",
          nl: "Geoptimaliseerde positionering voor thermisch rendement, geluidsniveau (35-50 dB) en respect voor de buren",
        },
      },
    ],
    ctaTitle: {
      fr: "Diagnostic pompe à chaleur gratuit",
      nl: "Gratis warmtepomp-diagnose",
    },
    ctaDescription: {
      fr: "Benoît évalue votre habitation, votre système de chauffage existant et votre installation électrique. Vous recevez une recommandation claire : air-eau ou air-air, la puissance adaptée, et le calcul d'intégration avec vos panneaux.",
      nl: "Benoît evalueert uw woning, uw bestaand verwarmingssysteem en uw elektrische installatie. U krijgt een duidelijke aanbeveling: lucht/water of lucht/lucht, het aangepaste vermogen en de integratieberekening met uw panelen.",
    },
    ctaLabel: {
      fr: "Demander mon diagnostic gratuit",
      nl: "Vraag mijn gratis diagnose aan",
    },
  },
};

/**
 * Resolve a service content entry to its FR (default) or NL variant.
 *
 * Backwards-compatible: pre-existing FR callers that pass `slug` only
 * continue to receive the FR-resolved object, with the same shape as
 * before the bilingual refactor.
 *
 * For NL pages, callers should pass the canonical FR slug (e.g.
 * `service.slug` from `getServiceBySlugNl(...)`) together with the
 * `"nl"` locale.
 */
export function getServiceContent(
  slug: string,
  locale: Locale = "fr",
): ResolvedServiceContent | undefined {
  const entry = serviceContent[slug];
  if (!entry) return undefined;
  return {
    seoTitle: entry.seoTitle[locale],
    metaDescription: entry.metaDescription[locale],
    headline: entry.headline[locale],
    subheadline: entry.subheadline[locale],
    sections: entry.sections.map((s) => ({
      id: s.id,
      title: s.title[locale],
      body: s.body[locale],
    })),
    comparisonRows: entry.comparisonRows.map((r) => ({
      aspect: r.aspect[locale],
      others: r.others[locale],
      beEnergies: r.beEnergies[locale],
    })),
    ctaTitle: entry.ctaTitle[locale],
    ctaDescription: entry.ctaDescription[locale],
    ctaLabel: entry.ctaLabel[locale],
  };
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceContent);
}
