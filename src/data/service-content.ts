// Service page deep content — production-ready
// All regulatory numbers verified against REGULATORY_INTELLIGENCE.md (March 2026)
// All messaging aligned with POSITIONING_MESSAGING.md

export interface ServicePageContent {
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

export const serviceContent: Record<string, ServicePageContent> = {
  "panneaux-photovoltaiques": {
    seoTitle: "Panneaux solaires en Wallonie 2026 | Be&apos;energies",
    metaDescription:
      "Installation photovoltaique par un ancien inspecteur RESCERT. Calcul de rentabilite reel, tarif prosumer demystifie, retour en 5-7 ans. Diagnostic gratuit.",
    headline:
      "Panneaux photovoltaiques en 2026 : le guide honnete par un ancien inspecteur",
    subheadline:
      "Benoit Dezso a inspecte des centaines d&apos;installations avant de fonder Be&apos;energies. Chaque systeme est dimensionne pour maximiser votre autoconsommation, pas pour gonfler un devis.",
    sections: [
      {
        id: "rentabilite-2026",
        title:
          "Le photovoltaique est-il encore rentable en 2026 ? Oui. Voici le calcul.",
        body: `<p>Les subventions ont disparu parce que les panneaux sont devenus cinq fois moins chers en dix ans. Le solaire n&apos;a jamais ete aussi rentable sans aide publique.</p>
<p><strong>Exemple concret : un systeme de 4,7 kWc (12 panneaux) pour un menage de 4 personnes</strong></p>
<ul>
<li>Cout total installe (TVA 6% pour habitations de 10 ans et plus) : <strong>~9 700 EUR TTC</strong></li>
<li>Production annuelle estimee : ~4 200 kWh</li>
<li>Taux d&apos;autoconsommation vise : 50%</li>
<li>Economies annuelles d&apos;autoconsommation (2 100 kWh x 0,38 EUR) : <strong>~798 EUR</strong></li>
<li>Revenus d&apos;injection (2 100 kWh x 0,04 EUR, tarif moyen) : <strong>~84 EUR</strong></li>
<li>Economies sur facture nette annuelle : <strong>~1 200 - 1 600 EUR</strong></li>
<li>Retour sur investissement : <strong>5 a 7 ans</strong></li>
<li>Duree de vie du systeme : <strong>25-30 ans</strong></li>
<li>Gain total sur la duree de vie : <strong>20 000 - 35 000 EUR</strong></li>
</ul>
<p>Rendement annualise : environ 12%. A comparer avec un compte epargne (~2%) ou un portefeuille boursier diversifie (~7%). Le photovoltaique reste l&apos;un des meilleurs investissements pour un menage belge.</p>`,
      },
      {
        id: "deux-regimes",
        title:
          "Avant ou apres 2024 : deux regimes, deux logiques completement differentes",
        body: `<p>C&apos;est la distinction la plus importante du marche, et celle que la plupart des installateurs ne prennent pas la peine d&apos;expliquer.</p>
<h4>Regime 1 : installations mises en service avant le 1er janvier 2024</h4>
<ul>
<li>Le compteur tournait a l&apos;envers. Ce mecanisme de compensation reste actif <strong>jusqu&apos;au 31 decembre 2030</strong>.</li>
<li>Vous payez le <strong>tarif prosumer</strong> : une redevance fixe annuelle basee sur votre capacite installee.</li>
<li>Le reseau fonctionne comme une batterie virtuelle gratuite : vous injectez le jour, vous reprenez le soir sans frais supplementaires.</li>
<li>Apres 2030 : tout le monde bascule vers le regime 2.</li>
</ul>
<h4>Regime 2 : installations mises en service apres le 1er janvier 2024</h4>
<ul>
<li>Compteur communicant (smart meter) obligatoire. <strong>Pas de tarif prosumer.</strong></li>
<li>Vous payez uniquement l&apos;electricite reellement soutiree du reseau.</li>
<li>Votre surplus est revendu au tarif d&apos;injection (1 a 6 centimes/kWh selon le fournisseur).</li>
<li>Chaque kWh autoconsomme vous economise ~38 centimes. Chaque kWh injecte vous rapporte 1 a 6 centimes. Le ratio est de <strong>7x a 46x en faveur de l&apos;autoconsommation</strong>.</li>
</ul>
<p>Ce que cela signifie pour vous : que vous soyez en regime 1 ou en regime 2, le dimensionnement correct de votre installation est la variable determinante. C&apos;est exactement ce que Benoit verifie lors du diagnostic technique.</p>`,
      },
      {
        id: "tarif-prosumer",
        title:
          "Tarif prosumer demystifie : ce n&apos;est pas une taxe, c&apos;est un frais de reseau",
        body: `<p>Le tarif prosumer est une redevance pour l&apos;utilisation du reseau de distribution. Avant son introduction, les menages sans panneaux payaient une part disproportionnee des couts de maintenance du reseau. Ce n&apos;est ni une punition ni un impot : c&apos;est une contribution equitable.</p>
<p><strong>Montants 2026 par gestionnaire de reseau (TTC) :</strong></p>
<table>
<thead><tr><th>GRD</th><th>EUR/kWe/an</th><th>Cout pour 5 kWc</th></tr></thead>
<tbody>
<tr><td>ORES</td><td>85,84 EUR</td><td>~429 EUR/an</td></tr>
<tr><td>RESA</td><td>84,22 EUR</td><td>~421 EUR/an</td></tr>
<tr><td>AIEG</td><td>81,04 EUR</td><td>~405 EUR/an</td></tr>
<tr><td>AIESH</td><td>99,29 EUR</td><td>~496 EUR/an</td></tr>
<tr><td>REW</td><td>93,00 EUR</td><td>~465 EUR/an</td></tr>
</tbody>
</table>
<p>Hypothese CWaPE : le tarif est calcule sur une base de 37,76% d&apos;autoconsommation. Si vous depassez ce seuil, votre situation reelle est meilleure que le tarif ne le suppose.</p>
<p><strong>Point essentiel :</strong> les installations apres 2024 avec compteur communicant ne paient pas le tarif prosumer. Elles paient uniquement leur consommation reelle. Si vous installez aujourd&apos;hui, ce tableau ne vous concerne pas.</p>`,
      },
      {
        id: "autoconsommation",
        title:
          "38 centimes economises vs 1 a 6 centimes gagnes : la regle d&apos;or de l&apos;autoconsommation",
        body: `<p>C&apos;est le chiffre qui doit guider chaque decision :</p>
<ul>
<li><strong>Prix d&apos;achat moyen de l&apos;electricite : ~38 c/kWh</strong></li>
<li><strong>Meilleur tarif d&apos;injection : 5,58 c/kWh</strong> (Energie.be)</li>
<li><strong>Pire tarif d&apos;injection : 0,82 c/kWh</strong> (Mega)</li>
</ul>
<p>L&apos;electricite que vous consommez vous-meme vaut entre 7 et 46 fois plus que celle que vous revendez. Toute la strategie de dimensionnement decoule de cette realite.</p>
<p><strong>Comparatif des tarifs d&apos;injection (mars 2026) :</strong></p>
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
<p>Conseil concret : choisissez votre fournisseur en tenant compte du tarif d&apos;injection, pas seulement du prix d&apos;achat. L&apos;ecart entre le meilleur et le pire fournisseur represente plusieurs centaines d&apos;euros par an sur le surplus injecte.</p>`,
      },
      {
        id: "tarif-impact",
        title:
          "Tarif IMPACT 2026 : trois plages horaires qui changent la donne",
        body: `<p>Depuis le 1er janvier 2026, les proprietaires d&apos;un compteur communicant peuvent opter pour le tarif IMPACT, avec trois plages horaires :</p>
<table>
<thead><tr><th>Plage</th><th>Heures</th><th>Niveau de cout</th><th>Strategie solaire</th></tr></thead>
<tbody>
<tr><td><strong>ECO</strong></td><td>01h-07h, 11h-17h</td><td>Le moins cher</td><td>Le pic de production solaire tombe en plein dans la plage ECO</td></tr>
<tr><td><strong>MEDIUM</strong></td><td>07h-11h, 22h-01h</td><td>Intermediaire</td><td>Consommation matinale et fin de soiree</td></tr>
<tr><td><strong>PIC</strong></td><td>17h-22h</td><td>Le plus cher</td><td>Post-solaire, forte demande : c&apos;est ici qu&apos;une batterie prend tout son sens</td></tr>
</tbody>
</table>
<p>Selon les simulations CWaPE, un menage adapte peut economiser <strong>14%</strong> sur sa facture de distribution, et jusqu&apos;a <strong>28%</strong> avec un vehicule electrique.</p>
<p><strong>Attention :</strong> BeProsumer signale (mars 2026) que pour les ~350 000 prosumers encore sous regime de compensation, le passage a une formule tri-horaire comporte des risques. Des taxes d&apos;equilibrage masquees peuvent annuler l&apos;avantage. Un tarif bihoraire classique reste plus sur pour la majorite. On analyse votre situation specifique lors du diagnostic.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Visite technique prealable",
        others:
          "Devis envoye par email sur base de Google Maps, sans visite sur site",
        beEnergies:
          "Visite technique obligatoire : toiture, reseau electrique, tension, ombrage, consommation reelle",
      },
      {
        aspect: "Calcul de rentabilite",
        others:
          "Estimation generique avec promesses de retour en 2 ans et projections gonflees",
        beEnergies:
          "Calcul personnalise avec tarifs 2026 reels de votre GRD, taux d&apos;autoconsommation estime, et tarif d&apos;injection de votre fournisseur",
      },
      {
        aspect: "Dimensionnement",
        others:
          "Maximum de panneaux possible pour maximiser le montant du devis",
        beEnergies:
          "Dimensionnement sur votre consommation reelle pour maximiser l&apos;autoconsommation, pas l&apos;injection a perte",
      },
      {
        aspect: "Explication du tarif prosumer",
        others:
          "Rarement mentionne, ou minimise dans la presentation commerciale",
        beEnergies:
          "Explique en detail avec les montants exacts de votre GRD, integre dans le calcul de rentabilite",
      },
      {
        aspect: "Conformite electrique",
        others:
          "Installation livree sans verification post-installation systematique",
        beEnergies:
          "Chaque installation concue par un ancien inspecteur RESCERT pour passer le controle du premier coup",
      },
      {
        aspect: "Suivi post-installation",
        others:
          "Service apres-vente par telephone, delais de plusieurs semaines",
        beEnergies:
          "Monitoring de production, maintenance, et accompagnement reglementaire inclus",
      },
    ],
    ctaTitle: "Diagnostic energetique gratuit",
    ctaDescription:
      "Benoit analyse votre consommation, votre toiture et votre reseau electrique. Vous recevez un calcul de rentabilite base sur les tarifs 2026 reels de votre GRD. Pas de promesses en l&apos;air : un calcul reel.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "batteries-domestiques": {
    seoTitle: "Batterie domestique en Belgique 2026 | Be&apos;energies",
    metaDescription:
      "Batterie domestique : quand c&apos;est rentable et quand ca ne l&apos;est pas. Conseil honnete par un ancien inspecteur. 5 000-8 000 EUR. Diagnostic gratuit.",
    headline:
      "Batterie domestique : on ne vous en vend une que si elle est rentable pour vous",
    subheadline:
      "Un ancien inspecteur en conformite electrique ne vous laissera pas investir 5 000 a 8 000 EUR dans un equipement qui ne se justifie pas. Voici comment savoir si une batterie fait sens dans votre cas.",
    sections: [
      {
        id: "quand-rentable",
        title: "Quand une batterie domestique est rentable (et quand elle ne l&apos;est pas)",
        body: `<p>La reponse depend de votre date d&apos;installation et de votre profil de consommation.</p>
<h4>Si votre installation date d&apos;avant 2024 (regime de compensation)</h4>
<p>Votre compteur tourne encore a l&apos;envers jusqu&apos;au 31 decembre 2030. Le reseau fait office de batterie virtuelle gratuite : vous injectez le jour, vous reprenez le soir. <strong>Dans cette configuration, une batterie physique n&apos;apporte pas de gain financier significatif.</strong> Le reseau stocke deja votre surplus sans frais.</p>
<p>Exception : si votre onduleur decroche regulierement a cause de surtensions reseau (un probleme croissant en Wallonie), une batterie peut absorber le surplus au lieu de l&apos;injecter, ce qui evite des pertes de production.</p>
<h4>Si votre installation date d&apos;apres 2024 (compteur communicant)</h4>
<p>Vous payez chaque kWh soutire au tarif plein (~38 c/kWh) et revendez le surplus a 1-6 c/kWh. Une batterie stocke le surplus de la journee pour couvrir votre consommation du soir. Le gain reel depend de :</p>
<ul>
<li>Votre consommation nocturne (entre 17h et 7h)</li>
<li>Votre taux d&apos;autoconsommation actuel (plus il est bas, plus la batterie aide)</li>
<li>La presence d&apos;un vehicule electrique ou d&apos;une pompe a chaleur</li>
<li>Votre tarification (le tarif IMPACT rend la batterie plus interessante grace aux heures PIC de 17h a 22h)</li>
</ul>`,
      },
      {
        id: "vrais-chiffres-batterie",
        title: "Les vrais chiffres : cout, economies, duree de vie",
        body: `<p><strong>Investissement :</strong> entre 5 000 et 8 000 EUR TTC pour une batterie lithium fer-phosphate de 5 a 10 kWh.</p>
<p><strong>Economies annuelles estimees :</strong></p>
<ul>
<li>Menage sans vehicule electrique : 220 a 400 EUR/an</li>
<li>Menage avec vehicule electrique et tarif IMPACT : 400 a 600 EUR/an</li>
</ul>
<p><strong>Retour sur investissement :</strong> 10 a 15 ans selon le profil.</p>
<p><strong>Duree de vie :</strong> 10 a 15 ans (garantie constructeur 10 ans minimum).</p>
<p>La rentabilite est donc seree. Pour un menage sans vehicule electrique en regime pre-2024, le retour peut depasser la duree de vie de la batterie. C&apos;est pour cette raison que Benoit calcule votre situation specifique avant de recommander quoi que ce soit.</p>`,
      },
      {
        id: "batterie-impact",
        title: "Batterie et tarif IMPACT : la combinaison qui change l&apos;equation",
        body: `<p>Le tarif IMPACT (tri-horaire) introduit en janvier 2026 rend la batterie plus pertinente pour les installations post-2024 :</p>
<ul>
<li><strong>Plage ECO (11h-17h) :</strong> vos panneaux produisent et chargent la batterie au cout le plus bas</li>
<li><strong>Plage PIC (17h-22h) :</strong> l&apos;electricite du reseau coute le plus cher. C&apos;est precisement le moment ou votre batterie se decharge pour alimenter la maison</li>
</ul>
<p>La batterie exploite le differentiel de prix entre les heures ECO et les heures PIC. Plus ce differentiel est eleve, plus la batterie se justifie.</p>
<p>Avec un vehicule electrique, la logique se renforce : la recharge solaire entre 10h et 16h charge la voiture en plage ECO, tandis que la batterie prend le relais pour la maison en plage PIC.</p>`,
      },
      {
        id: "dimensionnement-batterie",
        title: "Le dimensionnement correct : ni trop, ni trop peu",
        body: `<p>En tant qu&apos;ancien inspecteur, Benoit a vu des installations ou la batterie etait surdimensionnee par rapport au surplus reel. Resultat : un investissement plus lourd sans gain proportionnel.</p>
<p><strong>Regle de dimensionnement :</strong></p>
<ul>
<li>Votre batterie doit couvrir votre consommation entre la fin de production solaire (~17h) et le lendemain matin (~7h)</li>
<li>Pour un menage moyen : 5 a 7 kWh suffisent</li>
<li>Au-dela de 10 kWh, la capacite supplementaire reste inutilisee la plupart des nuits</li>
</ul>
<p>On dimensionne sur la base de votre courbe de charge reelle, pas d&apos;une estimation generique.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Conseil prealable",
        others:
          "Batterie proposee systematiquement pour augmenter le montant du devis",
        beEnergies:
          "Batterie recommandee uniquement si le calcul demontre un retour raisonnable pour votre situation",
      },
      {
        aspect: "Dimensionnement",
        others:
          "Capacite maximale proposee sans analyse de la consommation nocturne",
        beEnergies:
          "Capacite calculee sur votre courbe de charge reelle et votre profil horaire",
      },
      {
        aspect: "Integration solaire",
        others:
          "Batterie installee sans optimisation du flux panneaux-batterie-reseau",
        beEnergies:
          "Configuration integree : panneaux, batterie, onduleur et borne de recharge optimises comme un systeme",
      },
      {
        aspect: "Explication du tarif IMPACT",
        others:
          "Rarement mentionne ou mal explique lors de la vente",
        beEnergies:
          "Simulation complete avec plages ECO/PIC et estimation des economies reelles",
      },
      {
        aspect: "Transparence sur la rentabilite",
        others:
          "Promesses de rentabilite rapide sans tenir compte de la duree de vie",
        beEnergies:
          "Si la batterie n&apos;est pas rentable dans votre cas, on vous le dit. On prefere un client bien conseille a une vente forcee.",
      },
    ],
    ctaTitle: "Votre batterie est-elle rentable ? Faisons le calcul.",
    ctaDescription:
      "Benoit analyse votre consommation, votre installation existante et votre profil horaire. Vous recevez une reponse claire : oui, non, ou pas encore.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "bornes-de-recharge": {
    seoTitle: "Borne de recharge domicile Belgique | Be&apos;energies",
    metaDescription:
      "Installation de bornes de recharge a domicile par un ancien inspecteur. Integration solaire, recharge 10h-16h, conformite garantie. Diagnostic gratuit.",
    headline:
      "Borne de recharge a domicile : rechargez avec vos panneaux, pas avec le reseau",
    subheadline:
      "Installer une borne, c&apos;est simple. L&apos;integrer correctement a votre installation electrique et solaire, c&apos;est un autre metier. Celui d&apos;un ancien inspecteur en conformite.",
    sections: [
      {
        id: "recharge-solaire",
        title: "Recharger au solaire : le calcul qui change tout",
        body: `<p>En 2026, 1 voiture electrique sur 3 vendue en Belgique est rechargee a domicile. La question n&apos;est plus de savoir si vous avez besoin d&apos;une borne, mais comment la connecter intelligemment a votre installation.</p>
<p><strong>Le principe :</strong> vos panneaux produisent entre 10h et 16h. Votre voiture est souvent garez a domicile pendant ces heures (teletravail, week-ends, retraite). En programmant la recharge pendant les heures de production solaire, vous rechargez au cout le plus bas possible.</p>
<p><strong>Economies estimees :</strong></p>
<ul>
<li>Recharge reseau standard : ~38 c/kWh, soit environ <strong>7,60 EUR pour 100 km</strong></li>
<li>Recharge solaire directe : cout quasi nul (le soleil ne facture pas)</li>
<li>Avec le tarif IMPACT, la recharge solaire entre 11h et 17h tombe en plage ECO : double avantage</li>
</ul>
<p>Selon la simulation CWaPE, un menage avec vehicule electrique et tarif IMPACT peut economiser jusqu&apos;a <strong>28%</strong> sur sa facture de distribution.</p>`,
      },
      {
        id: "mono-tri",
        title: "7,4 kW monophase ou 11-22 kW triphase : quel choix pour vous",
        body: `<p>Le choix de la puissance depend de trois facteurs que Benoit verifie lors du diagnostic :</p>
<h4>Borne 7,4 kW (monophase)</h4>
<ul>
<li>Compatible avec la plupart des installations residentielles existantes</li>
<li>Temps de recharge complet : 6 a 8 heures (largement suffisant pour une recharge nocturne ou en journee)</li>
<li>Cout d&apos;installation plus bas, pas de modification du raccordement necessaire dans la majorite des cas</li>
<li>Ideale si votre compteur est monophase et que vous n&apos;envisagez pas de pompe a chaleur</li>
</ul>
<h4>Borne 11 a 22 kW (triphase)</h4>
<ul>
<li>Necessite un raccordement triphase (verification prealable indispensable)</li>
<li>Temps de recharge complet : 2 a 4 heures</li>
<li>Pertinente si vous roulez beaucoup (+40 000 km/an) ou si le vehicule doit etre disponible rapidement</li>
<li>S&apos;integre mieux dans un systeme global (panneaux + batterie + pompe a chaleur + borne)</li>
</ul>
<p><strong>Ce que Benoit verifie et que d&apos;autres ne verifient pas :</strong> la capacite de votre tableau electrique, la section des cables existants, la tension du reseau, et la compatibilite avec votre onduleur solaire. Une borne 22 kW installee sur un tableau sous-dimensionne, c&apos;est un rapport de non-conformite garanti.</p>`,
      },
      {
        id: "integration-systeme",
        title: "La borne comme piece d&apos;un systeme energetique complet",
        body: `<p>Une borne de recharge installee seule est un produit. Une borne integree a vos panneaux, votre batterie et votre tarification, c&apos;est une strategie.</p>
<p><strong>Configuration optimale :</strong></p>
<ul>
<li><strong>Panneaux solaires</strong> : produisent entre 10h et 16h</li>
<li><strong>Borne de recharge</strong> : programmee pour charger pendant les heures de production solaire</li>
<li><strong>Batterie domestique</strong> : stocke le surplus solaire pour la consommation du soir (plage PIC 17h-22h)</li>
<li><strong>Tarif IMPACT</strong> : recharge en plage ECO, consommation batterie en plage PIC</li>
</ul>
<p>Coordonner quatre entreprises differentes pour obtenir ce resultat, c&apos;est un parcours du combattant. Chez Be&apos;energies, un seul interlocuteur maitrise l&apos;ensemble du systeme.</p>`,
      },
      {
        id: "conformite-borne",
        title: "Conformite electrique : le point que personne ne mentionne",
        body: `<p>Une borne de recharge est un equipement de forte puissance connecte en permanence. Les exigences de conformite electrique sont strictes :</p>
<ul>
<li>Protection differentielle dediee (type A ou type B selon le modele de borne)</li>
<li>Section de cable adaptee a la puissance et a la longueur du trajet</li>
<li>Mise a la terre conforme</li>
<li>Disjoncteur calibre correctement</li>
</ul>
<p>En tant qu&apos;ancien inspecteur, Benoit a rempli des rapports de non-conformite pour des bornes installees avec des cables sous-dimensionnes, des protections inadaptees ou des mises a la terre defaillantes. Ce n&apos;est pas de la theorie : ce sont des defauts qu&apos;il a constates sur le terrain, et qu&apos;il ne reproduira pas.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Verification du tableau electrique",
        others:
          "Borne installee sans verifier la capacite du tableau existant",
        beEnergies:
          "Diagnostic complet du tableau, du raccordement et de la section des cables avant toute installation",
      },
      {
        aspect: "Integration solaire",
        others:
          "Borne installee independamment du systeme photovoltaique",
        beEnergies:
          "Programmation de la recharge en heures de production solaire, optimisation du flux energetique",
      },
      {
        aspect: "Choix de puissance",
        others:
          "Puissance maximale proposee sans analyse du raccordement existant",
        beEnergies:
          "Puissance recommandee selon votre raccordement, votre consommation et votre production solaire",
      },
      {
        aspect: "Conformite electrique",
        others:
          "Protection differentielle generique, pas de verification post-installation",
        beEnergies:
          "Protection dediee, verification de conformite par un ancien inspecteur, installation prete pour le controle",
      },
      {
        aspect: "Vision systeme",
        others:
          "Borne traitee comme un produit isole",
        beEnergies:
          "Borne integree dans un ecosysteme : panneaux, batterie, pompe a chaleur, tarif IMPACT",
      },
    ],
    ctaTitle: "Diagnostic borne de recharge gratuit",
    ctaDescription:
      "Benoit verifie votre raccordement, votre tableau electrique et votre installation solaire. Vous recevez une recommandation claire sur la puissance, le modele et l&apos;integration optimale.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "conformite-electrique": {
    seoTitle: "Conformite electrique Belgique | Be&apos;energies",
    metaDescription:
      "Mise en conformite electrique par un ancien inspecteur RESCERT. Il a redige des rapports de non-conformite pendant des annees. Diagnostic gratuit.",
    headline:
      "Conformite electrique : par celui qui redigeait les rapports de non-conformite",
    subheadline:
      "Benoit Dezso a passe des annees a inspecter des installations electriques pour des organismes agrees. Il sait exactement ce que le controleur va verifier. Votre installation sera prete.",
    sections: [
      {
        id: "pourquoi-conformite",
        title: "La conformite electrique, ce n&apos;est pas une formalite. C&apos;est une protection.",
        body: `<p>Une installation non conforme presente trois risques concrets :</p>
<ul>
<li><strong>Risque pour la securite :</strong> electrocution, incendie d&apos;origine electrique, surchauffe des cables. Ce ne sont pas des hypotheses : ce sont des sinistres que Benoit a documentes pendant ses annees d&apos;inspection.</li>
<li><strong>Risque d&apos;assurance :</strong> en cas de sinistre electrique, votre assurance habitation verifie la conformite de l&apos;installation. Si elle n&apos;est pas conforme, la couverture peut etre refusee. Vous portez alors seul les consequences financieres.</li>
<li><strong>Risque administratif :</strong> lors d&apos;une vente immobiliere, un rapport de non-conformite bloque ou retarde la transaction. Le cout de mise en conformite dans l&apos;urgence est toujours plus eleve.</li>
</ul>
<p>La conformite protege votre famille, votre patrimoine et votre tranquillite. C&apos;est la raison pour laquelle Benoit l&apos;a choisie comme fondation de son metier.</p>`,
      },
      {
        id: "oeil-inspecteur",
        title: "L&apos;avantage d&apos;un ancien inspecteur : il connait le rapport avant qu&apos;il n&apos;existe",
        body: `<p>Pendant ses annees d&apos;inspection, Benoit a redige des centaines de rapports de non-conformite. Il connait les infractions les plus frequentes, les points que chaque controleur verifie en priorite, et les details techniques qui font la difference entre un rapport vierge et une liste de remarques.</p>
<p><strong>Les 5 infractions les plus frequentes qu&apos;il a constatees :</strong></p>
<ol>
<li><strong>Absence de differentiel 30 mA</strong> sur les circuits sensibles (salle de bain, cuisine, exterieur)</li>
<li><strong>Mise a la terre defaillante ou absente</strong> : resistance de terre superieure a 30 ohms</li>
<li><strong>Schemas unifilaires non conformes</strong> ou absents : le plan de votre installation doit refleter la realite</li>
<li><strong>Sections de cables inadaptees</strong> : cables sous-dimensionnes pour la charge reelle</li>
<li><strong>Circuits melanges</strong> : eclairage et prises sur le meme disjoncteur, depassant la charge admissible</li>
</ol>
<p>Chacun de ces points fait l&apos;objet d&apos;une verification systematique lors de chaque intervention Be&apos;energies. Pas parce que c&apos;est une procedure : parce que Benoit les a vus provoquer des refus de controle des centaines de fois.</p>`,
      },
      {
        id: "quand-conformite",
        title: "Quand faut-il verifier la conformite de votre installation ?",
        body: `<p>Le controle de conformite est obligatoire dans les situations suivantes :</p>
<ul>
<li><strong>Nouvelle installation</strong> : avant la mise sous tension</li>
<li><strong>Modification importante</strong> : ajout de panneaux solaires, borne de recharge, pompe a chaleur, extension du tableau</li>
<li><strong>Vente du bien immobilier</strong> : le rapport de conformite est exige par le notaire</li>
<li><strong>Controle periodique</strong> : tous les 25 ans pour les installations domestiques</li>
</ul>
<p><strong>Conseil de Benoit :</strong> n&apos;attendez pas la vente pour decouvrir les non-conformites. Le cout d&apos;une mise en conformite planifiee est significativement inferieur a celui d&apos;une mise en conformite dans l&apos;urgence d&apos;une transaction immobiliere.</p>`,
      },
      {
        id: "processus-conformite",
        title: "Notre processus : du diagnostic au rapport vierge",
        body: `<p>Be&apos;energies applique une methodologie structuree, directement issue de l&apos;experience d&apos;inspection de Benoit :</p>
<ol>
<li><strong>Diagnostic complet</strong> : inspection visuelle et mesures (resistance de terre, impedance de boucle, verification des differentiels, controle des sections). On identifie chaque ecart par rapport aux normes.</li>
<li><strong>Rapport de pre-inspection</strong> : vous recevez un document detaillant chaque point non conforme, avec la priorite, le cout estime, et l&apos;explication technique.</li>
<li><strong>Travaux de mise en conformite</strong> : execution des modifications necessaires. Pas de travaux inutiles, pas de sur-facturation, uniquement ce qui est exige par la norme.</li>
<li><strong>Verification finale</strong> : avant l&apos;intervention de l&apos;organisme agree, Benoit effectue un controle interne identique a celui que fera l&apos;inspecteur. C&apos;est le meme regard, la meme methode, les memes criteres.</li>
</ol>
<p>Resultat : votre installation passe le controle du premier coup. Pas de surprise, pas de visite supplementaire payante, pas de stress.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Expertise du responsable",
        others:
          "Electricien generaliste sans experience specifique en inspection de conformite",
        beEnergies:
          "Ancien inspecteur RESCERT qui a redige des centaines de rapports de non-conformite",
      },
      {
        aspect: "Diagnostic prealable",
        others:
          "Intervention directe sans evaluation prealable de l&apos;etat de l&apos;installation",
        beEnergies:
          "Pre-inspection complete avec rapport detaille avant tout travail",
      },
      {
        aspect: "Connaissance des normes",
        others:
          "Application des normes connues, sans vision globale du processus de controle",
        beEnergies:
          "Connaissance precise de ce que chaque organisme agree verifie, point par point",
      },
      {
        aspect: "Verification post-travaux",
        others:
          "Travaux termines, le client attend le controle en esperant que tout passe",
        beEnergies:
          "Controle interne identique a celui de l&apos;organisme agree avant la visite officielle",
      },
      {
        aspect: "Schemas unifilaires",
        others:
          "Schema generique ou non mis a jour apres les travaux",
        beEnergies:
          "Schema unifilaire conforme a la realite de l&apos;installation, mis a jour systematiquement",
      },
      {
        aspect: "Taux de reussite au premier controle",
        others:
          "Variable, avec des reprises frequentes qui coutent du temps et de l&apos;argent",
        beEnergies:
          "Installation concue pour passer le controle du premier coup, sans remarque",
      },
    ],
    ctaTitle: "Diagnostic de conformite gratuit",
    ctaDescription:
      "Benoit inspecte votre installation avec le meme regard qu&apos;un controleur agree. Vous recevez un etat des lieux precis avant toute intervention.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "nettoyage-toiture": {
    seoTitle: "Nettoyage et peinture toiture Belgique | Be&apos;energies",
    metaDescription:
      "Nettoyage et peinture de toiture professionnels. Protegez vos panneaux solaires et votre investissement. Inspection incluse. Devis gratuit.",
    headline:
      "Nettoyage et peinture de toiture : protegez votre investissement energetique",
    subheadline:
      "Une toiture sale ou degradee reduit le rendement de vos panneaux et raccourcit la duree de vie de votre couverture. On nettoie, on protege, et on verifie vos panneaux dans la meme intervention.",
    sections: [
      {
        id: "impact-rendement",
        title: "Une toiture sale fait perdre jusqu&apos;a 20% de rendement a vos panneaux",
        body: `<p>Les mousses, lichens et depots qui colonisent votre toiture ne restent pas a cote de vos panneaux. Ils progressent sous et autour des modules, creant des zones d&apos;ombre partielle qui reduisent la production.</p>
<p><strong>Impact mesurable :</strong></p>
<ul>
<li>Un panneau partiellement ombrage par des mousses ou des debris peut perdre <strong>15 a 20%</strong> de sa production</li>
<li>L&apos;accumulation de pollen, poussiere et fientes d&apos;oiseaux cree un film qui reduit la captation lumineuse</li>
<li>Les micro-onduleurs detectent la baisse panneau par panneau, mais si la cause est externe, seul un nettoyage resout le probleme</li>
</ul>
<p>Vous avez investi entre 8 000 et 15 000 EUR dans vos panneaux. Perdre 20% de rendement a cause d&apos;un entretien neglige, c&apos;est 200 a 300 EUR par an de production en moins.</p>`,
      },
      {
        id: "nettoyage-professionnel",
        title: "Nettoyage professionnel : ce qui fait la difference",
        body: `<p>Le nettoyage de toiture ne se resume pas a un karcher haute pression. Un nettoyage mal realise cause plus de degats qu&apos;il n&apos;en resout.</p>
<p><strong>Notre methode :</strong></p>
<ul>
<li><strong>Traitement anti-mousse biocide :</strong> elimination a la racine, pas en surface. La mousse ne repousse pas en 6 mois.</li>
<li><strong>Nettoyage basse pression :</strong> les tuiles et ardoises sont poreuses. La haute pression les abime et accelere leur degradation. On travaille a pression controlee.</li>
<li><strong>Traitement hydrofuge :</strong> apres nettoyage, une couche protectrice repousse l&apos;eau et ralentit la recolonisation par les mousses.</li>
<li><strong>Peinture de toiture :</strong> pour les toitures en fibrociment ou les tuiles decolorees, la peinture de toiture restaure l&apos;etancheite et l&apos;aspect visuel sans remplacer la couverture.</li>
</ul>`,
      },
      {
        id: "inspection-panneaux",
        title: "L&apos;avantage Be&apos;energies : nettoyage de toiture + inspection de panneaux",
        body: `<p>Quand on est sur votre toit pour nettoyer, on inspecte aussi vos panneaux. C&apos;est un avantage unique lie a notre double competence.</p>
<p><strong>Ce que Benoit verifie pendant le nettoyage :</strong></p>
<ul>
<li>Etat physique des modules (micro-fissures, jaunissement, delamination)</li>
<li>Etat des fixations et du systeme de montage</li>
<li>Connectique et cablage visible (oxydation, deterioration des connecteurs MC4)</li>
<li>Presence de points chauds ou de traces de surchauffe</li>
<li>Verification du bon fonctionnement via le monitoring de production</li>
</ul>
<p>Deux entreprises differentes pour le nettoyage et l&apos;inspection, c&apos;est deux deplacements, deux factures, et souvent une toiture nettoyee sans regard technique sur les panneaux. Ici, c&apos;est un seul passage, un seul interlocuteur, et un rapport complet.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Methode de nettoyage",
        others:
          "Karcher haute pression qui endommage les tuiles et reduit leur duree de vie",
        beEnergies:
          "Nettoyage basse pression adapte au materiau de couverture, traitement biocide longue duree",
      },
      {
        aspect: "Inspection des panneaux",
        others:
          "Nettoyage de toiture sans regard sur les panneaux solaires installes",
        beEnergies:
          "Inspection visuelle et technique des panneaux incluse dans chaque intervention toiture",
      },
      {
        aspect: "Traitement preventif",
        others:
          "Nettoyage ponctuel sans protection, la mousse revient en quelques mois",
        beEnergies:
          "Traitement hydrofuge apres nettoyage pour prolonger le resultat de 3 a 5 ans",
      },
      {
        aspect: "Competence technique",
        others:
          "Entreprise de nettoyage sans connaissance des installations electriques en toiture",
        beEnergies:
          "Ancien inspecteur : connaissance precise des normes de securite pour travailler autour des panneaux sous tension",
      },
    ],
    ctaTitle: "Devis nettoyage et inspection gratuit",
    ctaDescription:
      "Benoit evalue l&apos;etat de votre toiture et de vos panneaux en une seule visite. Vous recevez un devis clair pour le nettoyage et un rapport d&apos;etat de vos modules.",
    ctaLabel: "Demander mon devis gratuit",
  },

  "pompes-a-chaleur": {
    seoTitle: "Pompe a chaleur Belgique 2026 | Be&apos;energies",
    metaDescription:
      "Pompe a chaleur air-eau et air-air integree a vos panneaux solaires. Dimensionnement par un ancien inspecteur. Tarif IMPACT optimise. Diagnostic gratuit.",
    headline:
      "Pompe a chaleur : chauffage et climatisation integres a votre systeme solaire",
    subheadline:
      "Une pompe a chaleur mal dimensionnee consomme plus qu&apos;elle ne fait economiser. Benoit dimensionne votre systeme pour qu&apos;il fonctionne avec vos panneaux, pas contre votre facture.",
    sections: [
      {
        id: "air-eau-air-air",
        title: "Air-eau ou air-air : deux technologies, deux usages",
        body: `<p>Le choix entre air-eau et air-air depend de votre systeme existant et de vos besoins. Voici la distinction concrete :</p>
<h4>Pompe a chaleur air-eau</h4>
<ul>
<li><strong>Usage :</strong> chauffage central (radiateurs ou plancher chauffant) + eau chaude sanitaire</li>
<li><strong>Rendement :</strong> COP moyen de 3 a 4 (pour 1 kWh d&apos;electricite, 3 a 4 kWh de chaleur)</li>
<li><strong>Investissement :</strong> 8 000 a 15 000 EUR TTC selon la puissance et le modele</li>
<li><strong>Ideale si :</strong> vous remplacez une chaudiere au mazout ou au gaz, vous avez un chauffage central existant, vous voulez integrer l&apos;eau chaude sanitaire</li>
<li><strong>Limite :</strong> efficacite reduite sous -7 C (appoint electrique necessaire quelques jours par an en Belgique)</li>
</ul>
<h4>Pompe a chaleur air-air (climatisation reversible)</h4>
<ul>
<li><strong>Usage :</strong> chauffage d&apos;appoint piece par piece + climatisation en ete</li>
<li><strong>Rendement :</strong> COP moyen de 3 a 5 (excellent en mode climatisation)</li>
<li><strong>Investissement :</strong> 2 500 a 6 000 EUR TTC selon le nombre d&apos;unites</li>
<li><strong>Ideale si :</strong> vous voulez la climatisation en ete, vous chauffez au bois ou au pellet et cherchez un complement, vous renovez piece par piece</li>
<li><strong>Limite :</strong> ne remplace pas un chauffage central, ne produit pas d&apos;eau chaude sanitaire</li>
</ul>`,
      },
      {
        id: "integration-solaire-pac",
        title: "Pompe a chaleur + panneaux solaires : la combinaison strategique",
        body: `<p>Une pompe a chaleur consomme de l&apos;electricite. Si cette electricite vient de vos panneaux plutot que du reseau, le cout de fonctionnement chute.</p>
<p><strong>Le calcul :</strong></p>
<ul>
<li>Pompe a chaleur air-eau : consommation annuelle typique de 3 000 a 5 000 kWh</li>
<li>Cout au reseau (~38 c/kWh) : 1 140 a 1 900 EUR/an</li>
<li>Cout en autoconsommation solaire : quasi nul</li>
</ul>
<p>En dimensionnant vos panneaux pour couvrir aussi la consommation de la pompe a chaleur, vous transformez un poste de depense en un poste couvert par votre production.</p>
<p><strong>Attention au dimensionnement :</strong> une pompe a chaleur augmente significativement votre consommation electrique. Si vos panneaux sont deja dimensionnes au plus juste, il faudra probablement ajouter des modules. C&apos;est un point que Benoit verifie systematiquement lors du diagnostic.</p>`,
      },
      {
        id: "pac-impact",
        title: "Tarif IMPACT et pompe a chaleur : optimiser les heures de chauffe",
        body: `<p>Le tarif IMPACT (tri-horaire) offre une opportunite concrete pour les proprietaires de pompes a chaleur :</p>
<ul>
<li><strong>Plage ECO (11h-17h) :</strong> vos panneaux produisent, votre pompe a chaleur peut prechauffer le ballon d&apos;eau chaude sanitaire et accumuler de la chaleur dans le plancher chauffant (inertie thermique)</li>
<li><strong>Plage PIC (17h-22h) :</strong> la pompe a chaleur fonctionne sur la chaleur accumulee ou sur la batterie, evitant le tarif le plus cher</li>
</ul>
<p>La programmation intelligente de la pompe a chaleur en fonction des plages horaires IMPACT peut reduire le cout de chauffage de <strong>15 a 25%</strong> supplementaires, en plus de l&apos;autoconsommation solaire.</p>
<p>C&apos;est un exemple concret de ce qu&apos;un systeme energetique integre peut produire quand il est concu comme un ensemble, pas comme une addition de produits separes.</p>`,
      },
      {
        id: "conformite-pac",
        title: "Conformite electrique : la pompe a chaleur est un poste de forte puissance",
        body: `<p>L&apos;installation d&apos;une pompe a chaleur modifie significativement la charge de votre installation electrique. Points de conformite critiques :</p>
<ul>
<li><strong>Raccordement electrique dedie</strong> : circuit protege, disjoncteur calibre, cable de section adequate</li>
<li><strong>Compatibilite avec le raccordement existant</strong> : une PAC air-eau de 8 kW sur un raccordement monophase limite necessite une verification de la puissance disponible</li>
<li><strong>Mise a la terre de l&apos;unite exterieure</strong> : obligatoire et souvent negligee</li>
<li><strong>Schema unifilaire mis a jour</strong> : l&apos;ajout de la PAC doit figurer sur le schema pour que l&apos;installation reste conforme</li>
</ul>
<p>En tant qu&apos;ancien inspecteur, Benoit a constate de nombreuses installations de pompes a chaleur raccordees de maniere non conforme : cables sous-dimensionnes, absence de protection dediee, schemas non mis a jour. Chaque installation Be&apos;energies integre la conformite des la conception, pas comme un ajout apres-coup.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Dimensionnement",
        others:
          "Puissance standard proposee sans calcul des deperditions thermiques du batiment",
        beEnergies:
          "Calcul thermique base sur l&apos;isolation, la surface, l&apos;orientation et les besoins reels du menage",
      },
      {
        aspect: "Integration solaire",
        others:
          "Pompe a chaleur installee sans coordination avec l&apos;installation photovoltaique existante",
        beEnergies:
          "Dimensionnement conjoint : panneaux + PAC + batterie optimises pour maximiser l&apos;autoconsommation",
      },
      {
        aspect: "Optimisation tarifaire",
        others:
          "Aucune prise en compte du tarif IMPACT dans la programmation de la PAC",
        beEnergies:
          "Programmation de la PAC en fonction des plages ECO/PIC pour minimiser le cout de fonctionnement",
      },
      {
        aspect: "Conformite electrique",
        others:
          "Raccordement electrique traite comme un detail, sans verification du schema unifilaire",
        beEnergies:
          "Circuit dedie conforme, schema unifilaire mis a jour, verification par un ancien inspecteur RESCERT",
      },
      {
        aspect: "Placement de l&apos;unite exterieure",
        others:
          "Positionnement base sur la facilite d&apos;installation, sans tenir compte du bruit et de l&apos;efficacite",
        beEnergies:
          "Positionnement optimise pour le rendement thermique, le niveau sonore (35-50 dB) et le respect du voisinage",
      },
    ],
    ctaTitle: "Diagnostic pompe a chaleur gratuit",
    ctaDescription:
      "Benoit evalue votre habitation, votre systeme de chauffage existant et votre installation electrique. Vous recevez une recommandation claire : air-eau ou air-air, la puissance adaptee, et le calcul d&apos;integration avec vos panneaux.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },
};

export function getServiceContent(
  slug: string
): ServicePageContent | undefined {
  return serviceContent[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceContent);
}
