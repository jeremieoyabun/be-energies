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
    seoTitle: "Panneaux solaires en Wallonie 2026 | Be'energies",
    metaDescription:
      "Installation photovoltaïque par un ancien inspecteur en conformité électrique, certifié RESCERT. Calcul de rentabilité réel, tarif prosumer démystifié, retour en 5-7 ans. Diagnostic gratuit.",
    headline:
      "Panneaux photovoltaïques en 2026 : le guide honnête par un ancien inspecteur",
    subheadline:
      "Benoît Dezso a inspecté des centaines d&apos;installations avant de fonder Be'energies. Chaque système est dimensionné pour maximiser votre autoconsommation, pas pour gonfler un devis.",
    sections: [
      {
        id: "rentabilite-2026",
        title:
          "Le photovoltaïque est-il encore rentable en 2026 ? Oui. Voici le calcul.",
        body: `<p>Les subventions ont disparu parce que les panneaux sont devenus cinq fois moins chers en dix ans. Le solaire n&apos;a jamais été aussi rentable sans aide publique.</p>
<p><strong>Exemple concret : un système de 4,7 kWc (12 panneaux) pour un ménage de 4 personnes</strong></p>
<ul>
<li>Coût total installé (TVA 6% pour habitations de 10 ans et plus) : <strong>~9 700 EUR TTC</strong></li>
<li>Production annuelle estimée : ~4 200 kWh</li>
<li>Taux d&apos;autoconsommation visé : 50%</li>
<li>Économies annuelles d&apos;autoconsommation (2 100 kWh x 0,38 EUR) : <strong>~798 EUR</strong></li>
<li>Revenus d&apos;injection (2 100 kWh x 0,04 EUR, tarif moyen) : <strong>~84 EUR</strong></li>
<li>Économies sur facture nette annuelle : <strong>~1 200 - 1 600 EUR</strong></li>
<li>Retour sur investissement : <strong>5 à 7 ans</strong></li>
<li>Durée de vie du système : <strong>25-30 ans</strong></li>
<li>Gain total sur la durée de vie : <strong>20 000 - 35 000 EUR</strong></li>
</ul>
<p>Rendement annualisé : environ 12%. À comparer avec un compte épargne (~2%) ou un portefeuille boursier diversifié (~7%). Le photovoltaïque reste l&apos;un des meilleurs investissements pour un ménage belge.</p>`,
      },
      {
        id: "deux-regimes",
        title:
          "Avant ou après 2024 : deux régimes, deux logiques complètement différentes",
        body: `<p>C&apos;est la distinction la plus importante du marché, et celle que la plupart des installateurs ne prennent pas la peine d&apos;expliquer.</p>
<h4>Régime 1 : installations mises en service avant le 1er janvier 2024</h4>
<ul>
<li>Le compteur tournait à l&apos;envers. Ce mécanisme de compensation reste actif <strong>jusqu&apos;au 31 décembre 2030</strong>.</li>
<li>Vous payez le <strong>tarif prosumer</strong> : une redevance fixe annuelle basée sur votre capacité installée.</li>
<li>Le réseau fonctionne comme une batterie virtuelle gratuite : vous injectez le jour, vous reprenez le soir sans frais supplémentaires.</li>
<li>Après 2030 : tout le monde bascule vers le régime 2.</li>
</ul>
<h4>Régime 2 : installations mises en service après le 1er janvier 2024</h4>
<ul>
<li>Compteur communicant (smart meter) obligatoire. <strong>Pas de tarif prosumer.</strong></li>
<li>Vous payez uniquement l&apos;électricité réellement soutirée du réseau.</li>
<li>Votre surplus est revendu au tarif d&apos;injection (1 à 6 centimes/kWh selon le fournisseur).</li>
<li>Chaque kWh autoconsommé vous économise ~38 centimes. Chaque kWh injecté vous rapporte 1 à 6 centimes. Le ratio est de <strong>7x à 46x en faveur de l&apos;autoconsommation</strong>.</li>
</ul>
<p>Ce que cela signifie pour vous : que vous soyez en régime 1 ou en régime 2, le dimensionnement correct de votre installation est la variable déterminante. C&apos;est exactement ce que Benoît vérifie lors du diagnostic technique.</p>`,
      },
      {
        id: "tarif-prosumer",
        title:
          "Tarif prosumer démystifié : ce n&apos;est pas une taxe, c&apos;est un frais de réseau",
        body: `<p>Le tarif prosumer est une redevance pour l&apos;utilisation du réseau de distribution. Avant son introduction, les ménages sans panneaux payaient une part disproportionnée des coûts de maintenance du réseau. Ce n&apos;est ni une punition ni un impôt : c&apos;est une contribution équitable.</p>
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
<p>Hypothèse CWaPE : le tarif est calculé sur une base de 37,76% d&apos;autoconsommation. Si vous dépassez ce seuil, votre situation réelle est meilleure que le tarif ne le suppose.</p>
<p><strong>Point essentiel :</strong> les installations après 2024 avec compteur communicant ne paient pas le tarif prosumer. Elles paient uniquement leur consommation réelle. Si vous installez aujourd&apos;hui, ce tableau ne vous concerne pas.</p>`,
      },
      {
        id: "autoconsommation",
        title:
          "38 centimes économisés vs 1 à 6 centimes gagnés : la règle d&apos;or de l&apos;autoconsommation",
        body: `<p>C&apos;est le chiffre qui doit guider chaque décision :</p>
<ul>
<li><strong>Prix d&apos;achat moyen de l&apos;électricité : ~38 c/kWh</strong></li>
<li><strong>Meilleur tarif d&apos;injection : 5,58 c/kWh</strong> (Energie.be)</li>
<li><strong>Pire tarif d&apos;injection : 0,82 c/kWh</strong> (Mega)</li>
</ul>
<p>L&apos;électricité que vous consommez vous-même vaut entre 7 et 46 fois plus que celle que vous revendez. Toute la stratégie de dimensionnement découle de cette réalité.</p>
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
<p>Conseil concret : choisissez votre fournisseur en tenant compte du tarif d&apos;injection, pas seulement du prix d&apos;achat. L&apos;écart entre le meilleur et le pire fournisseur représente plusieurs centaines d&apos;euros par an sur le surplus injecté.</p>`,
      },
      {
        id: "tarif-impact",
        title:
          "Tarif IMPACT 2026 : trois plages horaires qui changent la donne",
        body: `<p>Depuis le 1er janvier 2026, les propriétaires d&apos;un compteur communicant peuvent opter pour le tarif IMPACT, avec trois plages horaires :</p>
<table>
<thead><tr><th>Plage</th><th>Heures</th><th>Niveau de coût</th><th>Stratégie solaire</th></tr></thead>
<tbody>
<tr><td><strong>ECO</strong></td><td>01h-07h, 11h-17h</td><td>Le moins cher</td><td>Le pic de production solaire tombe en plein dans la plage ECO</td></tr>
<tr><td><strong>MEDIUM</strong></td><td>07h-11h, 22h-01h</td><td>Intermédiaire</td><td>Consommation matinale et fin de soirée</td></tr>
<tr><td><strong>PIC</strong></td><td>17h-22h</td><td>Le plus cher</td><td>Post-solaire, forte demande : c&apos;est ici qu&apos;une batterie prend tout son sens</td></tr>
</tbody>
</table>
<p>Selon les simulations CWaPE, un ménage adapté peut économiser <strong>14%</strong> sur sa facture de distribution, et jusqu&apos;à <strong>28%</strong> avec un véhicule électrique.</p>
<p><strong>Attention :</strong> BeProsumer signale (mars 2026) que pour les ~350 000 prosumers encore sous régime de compensation, le passage à une formule tri-horaire comporte des risques. Des taxes d&apos;équilibrage masquées peuvent annuler l&apos;avantage. Un tarif bihoraire classique reste plus sûr pour la majorité. On analyse votre situation spécifique lors du diagnostic.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Visite technique préalable",
        others:
          "Devis envoyé par email sur base de Google Maps, sans visite sur site",
        beEnergies:
          "Visite technique obligatoire : toiture, réseau électrique, tension, ombrage, consommation réelle",
      },
      {
        aspect: "Calcul de rentabilité",
        others:
          "Estimation générique avec promesses de retour en 2 ans et projections gonflées",
        beEnergies:
          "Calcul personnalisé avec tarifs 2026 réels de votre GRD, taux d&apos;autoconsommation estimé, et tarif d&apos;injection de votre fournisseur",
      },
      {
        aspect: "Dimensionnement",
        others:
          "Maximum de panneaux possible pour maximiser le montant du devis",
        beEnergies:
          "Dimensionnement sur votre consommation réelle pour maximiser l&apos;autoconsommation, pas l&apos;injection à perte",
      },
      {
        aspect: "Explication du tarif prosumer",
        others:
          "Rarement mentionné, ou minimisé dans la présentation commerciale",
        beEnergies:
          "Expliqué en détail avec les montants exacts de votre GRD, intégré dans le calcul de rentabilité",
      },
      {
        aspect: "Conformité électrique",
        others:
          "Installation livrée sans vérification post-installation systématique",
        beEnergies:
          "Chaque installation conçue par un ancien inspecteur en conformité électrique, certifié RESCERT pour passer le contrôle du premier coup",
      },
      {
        aspect: "Suivi post-installation",
        others:
          "Service après-vente par téléphone, délais de plusieurs semaines",
        beEnergies:
          "Monitoring de production, maintenance, et accompagnement réglementaire inclus",
      },
    ],
    ctaTitle: "Diagnostic énergétique gratuit",
    ctaDescription:
      "Benoît analyse votre consommation, votre toiture et votre réseau électrique. Vous recevez un calcul de rentabilité basé sur les tarifs 2026 réels de votre GRD. Pas de promesses en l&apos;air : un calcul réel.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "batteries-domestiques": {
    seoTitle: "Batterie domestique en Belgique 2026 | Be'energies",
    metaDescription:
      "Batterie domestique : quand c&apos;est rentable et quand ça ne l&apos;est pas. Conseil honnête par un ancien inspecteur. 5 000-8 000 EUR. Diagnostic gratuit.",
    headline:
      "Batterie domestique : on ne vous en vend une que si elle est rentable pour vous",
    subheadline:
      "Un ancien inspecteur en conformité électrique ne vous laissera pas investir 5 000 à 8 000 EUR dans un équipement qui ne se justifie pas. Voici comment savoir si une batterie fait sens dans votre cas.",
    sections: [
      {
        id: "quand-rentable",
        title: "Quand une batterie domestique est rentable (et quand elle ne l&apos;est pas)",
        body: `<p>La réponse dépend de votre date d&apos;installation et de votre profil de consommation.</p>
<h4>Si votre installation date d&apos;avant 2024 (régime de compensation)</h4>
<p>Votre compteur tourne encore à l&apos;envers jusqu&apos;au 31 décembre 2030. Le réseau fait office de batterie virtuelle gratuite : vous injectez le jour, vous reprenez le soir. <strong>Dans cette configuration, une batterie physique n&apos;apporte pas de gain financier significatif.</strong> Le réseau stocke déjà votre surplus sans frais.</p>
<p>Exception : si votre onduleur décroche régulièrement à cause de surtensions réseau (un problème croissant en Wallonie), une batterie peut absorber le surplus au lieu de l&apos;injecter, ce qui évite des pertes de production.</p>
<h4>Si votre installation date d&apos;après 2024 (compteur communicant)</h4>
<p>Vous payez chaque kWh soutiré au tarif plein (~38 c/kWh) et revendez le surplus à 1-6 c/kWh. Une batterie stocke le surplus de la journée pour couvrir votre consommation du soir. Le gain réel dépend de :</p>
<ul>
<li>Votre consommation nocturne (entre 17h et 7h)</li>
<li>Votre taux d&apos;autoconsommation actuel (plus il est bas, plus la batterie aide)</li>
<li>La présence d&apos;un véhicule électrique ou d&apos;une pompe à chaleur</li>
<li>Votre tarification (le tarif IMPACT rend la batterie plus intéressante grâce aux heures PIC de 17h à 22h)</li>
</ul>`,
      },
      {
        id: "vrais-chiffres-batterie",
        title: "Les vrais chiffres : coût, économies, durée de vie",
        body: `<p><strong>Investissement :</strong> entre 5 000 et 8 000 EUR TTC pour une batterie lithium fer-phosphate de 5 à 10 kWh.</p>
<p><strong>Économies annuelles estimées :</strong></p>
<ul>
<li>Ménage sans véhicule électrique : 220 à 400 EUR/an</li>
<li>Ménage avec véhicule électrique et tarif IMPACT : 400 à 600 EUR/an</li>
</ul>
<p><strong>Retour sur investissement :</strong> 10 à 15 ans selon le profil.</p>
<p><strong>Durée de vie :</strong> 10 à 15 ans (garantie constructeur 10 ans minimum).</p>
<p>La rentabilité est donc serrée. Pour un ménage sans véhicule électrique en régime pré-2024, le retour peut dépasser la durée de vie de la batterie. C&apos;est pour cette raison que Benoît calcule votre situation spécifique avant de recommander quoi que ce soit.</p>`,
      },
      {
        id: "batterie-impact",
        title: "Batterie et tarif IMPACT : la combinaison qui change l&apos;équation",
        body: `<p>Le tarif IMPACT (tri-horaire) introduit en janvier 2026 rend la batterie plus pertinente pour les installations post-2024 :</p>
<ul>
<li><strong>Plage ECO (11h-17h) :</strong> vos panneaux produisent et chargent la batterie au coût le plus bas</li>
<li><strong>Plage PIC (17h-22h) :</strong> l&apos;électricité du réseau coûte le plus cher. C&apos;est précisément le moment où votre batterie se décharge pour alimenter la maison</li>
</ul>
<p>La batterie exploite le différentiel de prix entre les heures ECO et les heures PIC. Plus ce différentiel est élevé, plus la batterie se justifie.</p>
<p>Avec un véhicule électrique, la logique se renforce : la recharge solaire entre 10h et 16h charge la voiture en plage ECO, tandis que la batterie prend le relais pour la maison en plage PIC.</p>`,
      },
      {
        id: "dimensionnement-batterie",
        title: "Le dimensionnement correct : ni trop, ni trop peu",
        body: `<p>En tant qu&apos;ancien inspecteur, Benoît a vu des installations où la batterie était surdimensionnée par rapport au surplus réel. Résultat : un investissement plus lourd sans gain proportionnel.</p>
<p><strong>Règle de dimensionnement :</strong></p>
<ul>
<li>Votre batterie doit couvrir votre consommation entre la fin de production solaire (~17h) et le lendemain matin (~7h)</li>
<li>Pour un ménage moyen : 5 à 7 kWh suffisent</li>
<li>Au-delà de 10 kWh, la capacité supplémentaire reste inutilisée la plupart des nuits</li>
</ul>
<p>On dimensionne sur la base de votre courbe de charge réelle, pas d&apos;une estimation générique.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Conseil préalable",
        others:
          "Batterie proposée systématiquement pour augmenter le montant du devis",
        beEnergies:
          "Batterie recommandée uniquement si le calcul démontre un retour raisonnable pour votre situation",
      },
      {
        aspect: "Dimensionnement",
        others:
          "Capacité maximale proposée sans analyse de la consommation nocturne",
        beEnergies:
          "Capacité calculée sur votre courbe de charge réelle et votre profil horaire",
      },
      {
        aspect: "Intégration solaire",
        others:
          "Batterie installée sans optimisation du flux panneaux-batterie-réseau",
        beEnergies:
          "Configuration intégrée : panneaux, batterie, onduleur et borne de recharge optimisés comme un système",
      },
      {
        aspect: "Explication du tarif IMPACT",
        others:
          "Rarement mentionné ou mal expliqué lors de la vente",
        beEnergies:
          "Simulation complète avec plages ECO/PIC et estimation des économies réelles",
      },
      {
        aspect: "Transparence sur la rentabilité",
        others:
          "Promesses de rentabilité rapide sans tenir compte de la durée de vie",
        beEnergies:
          "Si la batterie n&apos;est pas rentable dans votre cas, on vous le dit. On préfère un client bien conseillé à une vente forcée.",
      },
    ],
    ctaTitle: "Votre batterie est-elle rentable ? Faisons le calcul.",
    ctaDescription:
      "Benoît analyse votre consommation, votre installation existante et votre profil horaire. Vous recevez une réponse claire : oui, non, ou pas encore.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "bornes-de-recharge": {
    seoTitle: "Borne de recharge domicile Belgique | Be'energies",
    metaDescription:
      "Installation de bornes de recharge à domicile par un ancien inspecteur. Intégration solaire, recharge 10h-16h, conformité garantie. Diagnostic gratuit.",
    headline:
      "Borne de recharge à domicile : rechargez avec vos panneaux, pas avec le réseau",
    subheadline:
      "Installer une borne, c&apos;est simple. L&apos;intégrer correctement à votre installation électrique et solaire, c&apos;est un autre métier. Celui d&apos;un ancien inspecteur en conformité.",
    sections: [
      {
        id: "recharge-solaire",
        title: "Recharger au solaire : le calcul qui change tout",
        body: `<p>En 2026, 1 voiture électrique sur 3 vendue en Belgique est rechargée à domicile. La question n&apos;est plus de savoir si vous avez besoin d&apos;une borne, mais comment la connecter intelligemment à votre installation.</p>
<p><strong>Le principe :</strong> vos panneaux produisent entre 10h et 16h. Votre voiture est souvent garée à domicile pendant ces heures (télétravail, week-ends, retraite). En programmant la recharge pendant les heures de production solaire, vous rechargez au coût le plus bas possible.</p>
<p><strong>Économies estimées :</strong></p>
<ul>
<li>Recharge réseau standard : ~38 c/kWh, soit environ <strong>7,60 EUR pour 100 km</strong></li>
<li>Recharge solaire directe : coût quasi nul (le soleil ne facture pas)</li>
<li>Avec le tarif IMPACT, la recharge solaire entre 11h et 17h tombe en plage ECO : double avantage</li>
</ul>
<p>Selon la simulation CWaPE, un ménage avec véhicule électrique et tarif IMPACT peut économiser jusqu&apos;à <strong>28%</strong> sur sa facture de distribution.</p>`,
      },
      {
        id: "mono-tri",
        title: "7,4 kW monophasé ou 11-22 kW triphasé : quel choix pour vous",
        body: `<p>Le choix de la puissance dépend de trois facteurs que Benoît vérifie lors du diagnostic :</p>
<h4>Borne 7,4 kW (monophasé)</h4>
<ul>
<li>Compatible avec la plupart des installations résidentielles existantes</li>
<li>Temps de recharge complet : 6 à 8 heures (largement suffisant pour une recharge nocturne ou en journée)</li>
<li>Coût d&apos;installation plus bas, pas de modification du raccordement nécessaire dans la majorité des cas</li>
<li>Idéale si votre compteur est monophasé et que vous n&apos;envisagez pas de pompe à chaleur</li>
</ul>
<h4>Borne 11 à 22 kW (triphasé)</h4>
<ul>
<li>Nécessite un raccordement triphasé (vérification préalable indispensable)</li>
<li>Temps de recharge complet : 2 à 4 heures</li>
<li>Pertinente si vous roulez beaucoup (+40 000 km/an) ou si le véhicule doit être disponible rapidement</li>
<li>S&apos;intègre mieux dans un système global (panneaux + batterie + pompe à chaleur + borne)</li>
</ul>
<p><strong>Ce que Benoît vérifie et que d&apos;autres ne vérifient pas :</strong> la capacité de votre tableau électrique, la section des câbles existants, la tension du réseau, et la compatibilité avec votre onduleur solaire. Une borne 22 kW installée sur un tableau sous-dimensionné, c&apos;est un rapport de non-conformité garanti.</p>`,
      },
      {
        id: "integration-systeme",
        title: "La borne comme pièce d&apos;un système énergétique complet",
        body: `<p>Une borne de recharge installée seule est un produit. Une borne intégrée à vos panneaux, votre batterie et votre tarification, c&apos;est une stratégie.</p>
<p><strong>Configuration optimale :</strong></p>
<ul>
<li><strong>Panneaux solaires</strong> : produisent entre 10h et 16h</li>
<li><strong>Borne de recharge</strong> : programmée pour charger pendant les heures de production solaire</li>
<li><strong>Batterie domestique</strong> : stocke le surplus solaire pour la consommation du soir (plage PIC 17h-22h)</li>
<li><strong>Tarif IMPACT</strong> : recharge en plage ECO, consommation batterie en plage PIC</li>
</ul>
<p>Coordonner quatre entreprises différentes pour obtenir ce résultat, c&apos;est un parcours du combattant. Chez Be'energies, un seul interlocuteur maîtrise l&apos;ensemble du système.</p>`,
      },
      {
        id: "conformite-borne",
        title: "Conformité électrique : le point que personne ne mentionne",
        body: `<p>Une borne de recharge est un équipement de forte puissance connecté en permanence. Les exigences de conformité électrique sont strictes :</p>
<ul>
<li>Protection différentielle dédiée (type A ou type B selon le modèle de borne)</li>
<li>Section de câble adaptée à la puissance et à la longueur du trajet</li>
<li>Mise à la terre conforme</li>
<li>Disjoncteur calibré correctement</li>
</ul>
<p>En tant qu&apos;ancien inspecteur, Benoît a rempli des rapports de non-conformité pour des bornes installées avec des câbles sous-dimensionnés, des protections inadaptées ou des mises à la terre défaillantes. Ce n&apos;est pas de la théorie : ce sont des défauts qu&apos;il a constatés sur le terrain, et qu&apos;il ne reproduira pas.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Vérification du tableau électrique",
        others:
          "Borne installée sans vérifier la capacité du tableau existant",
        beEnergies:
          "Diagnostic complet du tableau, du raccordement et de la section des câbles avant toute installation",
      },
      {
        aspect: "Intégration solaire",
        others:
          "Borne installée indépendamment du système photovoltaïque",
        beEnergies:
          "Programmation de la recharge en heures de production solaire, optimisation du flux énergétique",
      },
      {
        aspect: "Choix de puissance",
        others:
          "Puissance maximale proposée sans analyse du raccordement existant",
        beEnergies:
          "Puissance recommandée selon votre raccordement, votre consommation et votre production solaire",
      },
      {
        aspect: "Conformité électrique",
        others:
          "Protection différentielle générique, pas de vérification post-installation",
        beEnergies:
          "Protection dédiée, vérification de conformité par un ancien inspecteur, installation prête pour le contrôle",
      },
      {
        aspect: "Vision système",
        others:
          "Borne traitée comme un produit isolé",
        beEnergies:
          "Borne intégrée dans un écosystème : panneaux, batterie, pompe à chaleur, tarif IMPACT",
      },
    ],
    ctaTitle: "Diagnostic borne de recharge gratuit",
    ctaDescription:
      "Benoît vérifie votre raccordement, votre tableau électrique et votre installation solaire. Vous recevez une recommandation claire sur la puissance, le modèle et l&apos;intégration optimale.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "conformite-electrique": {
    seoTitle: "Conformité électrique Belgique | Be'energies",
    metaDescription:
      "Mise en conformité électrique par un ancien inspecteur en installation électrique, certifié RESCERT. Il a rédigé des rapports de non-conformité pendant des années. Diagnostic gratuit.",
    headline:
      "Conformité électrique : par celui qui rédigeait les rapports de non-conformité",
    subheadline:
      "Benoît Dezso a passé des années à inspecter des installations électriques pour des organismes agréés. Il sait exactement ce que le contrôleur va vérifier. Votre installation sera prête.",
    sections: [
      {
        id: "pourquoi-conformite",
        title: "La conformité électrique, ce n&apos;est pas une formalité. C&apos;est une protection.",
        body: `<p>Une installation non conforme présente trois risques concrets :</p>
<ul>
<li><strong>Risque pour la sécurité :</strong> électrocution, incendie d&apos;origine électrique, surchauffe des câbles. Ce ne sont pas des hypothèses : ce sont des sinistres que Benoît a documentés pendant ses années d&apos;inspection.</li>
<li><strong>Risque d&apos;assurance :</strong> en cas de sinistre électrique, votre assurance habitation vérifie la conformité de l&apos;installation. Si elle n&apos;est pas conforme, la couverture peut être refusée. Vous portez alors seul les conséquences financières.</li>
<li><strong>Risque administratif :</strong> lors d&apos;une vente immobilière, un rapport de non-conformité bloque ou retarde la transaction. Le coût de mise en conformité dans l&apos;urgence est toujours plus élevé.</li>
</ul>
<p>La conformité protège votre famille, votre patrimoine et votre tranquillité. C&apos;est la raison pour laquelle Benoît l&apos;a choisie comme fondation de son métier.</p>`,
      },
      {
        id: "oeil-inspecteur",
        title: "L&apos;avantage d&apos;un ancien inspecteur : il connaît le rapport avant qu&apos;il n&apos;existe",
        body: `<p>Pendant ses années d&apos;inspection, Benoît a rédigé des centaines de rapports de non-conformité. Il connaît les infractions les plus fréquentes, les points que chaque contrôleur vérifie en priorité, et les détails techniques qui font la différence entre un rapport vierge et une liste de remarques.</p>
<p><strong>Les 5 infractions les plus fréquentes qu&apos;il a constatées :</strong></p>
<ol>
<li><strong>Absence de différentiel 30 mA</strong> sur les circuits sensibles (salle de bain, cuisine, extérieur)</li>
<li><strong>Mise à la terre défaillante ou absente</strong> : résistance de terre supérieure à 30 ohms</li>
<li><strong>Schémas unifilaires non conformes</strong> ou absents : le plan de votre installation doit refléter la réalité</li>
<li><strong>Sections de câbles inadaptées</strong> : câbles sous-dimensionnés pour la charge réelle</li>
<li><strong>Circuits mélangés</strong> : éclairage et prises sur le même disjoncteur, dépassant la charge admissible</li>
</ol>
<p>Chacun de ces points fait l&apos;objet d&apos;une vérification systématique lors de chaque intervention Be'energies. Pas parce que c&apos;est une procédure : parce que Benoît les a vus provoquer des refus de contrôle des centaines de fois.</p>`,
      },
      {
        id: "quand-conformite",
        title: "Quand faut-il vérifier la conformité de votre installation ?",
        body: `<p>Le contrôle de conformité est obligatoire dans les situations suivantes :</p>
<ul>
<li><strong>Nouvelle installation</strong> : avant la mise sous tension</li>
<li><strong>Modification importante</strong> : ajout de panneaux solaires, borne de recharge, pompe à chaleur, extension du tableau</li>
<li><strong>Vente du bien immobilier</strong> : le rapport de conformité est exigé par le notaire</li>
<li><strong>Contrôle périodique</strong> : tous les 25 ans pour les installations domestiques</li>
</ul>
<p><strong>Conseil de Benoît :</strong> n&apos;attendez pas la vente pour découvrir les non-conformités. Le coût d&apos;une mise en conformité planifiée est significativement inférieur à celui d&apos;une mise en conformité dans l&apos;urgence d&apos;une transaction immobilière.</p>`,
      },
      {
        id: "processus-conformite",
        title: "Notre processus : du diagnostic au rapport vierge",
        body: `<p>Be'energies applique une méthodologie structurée, directement issue de l&apos;expérience d&apos;inspection de Benoît :</p>
<ol>
<li><strong>Diagnostic complet</strong> : inspection visuelle et mesures (résistance de terre, impédance de boucle, vérification des différentiels, contrôle des sections). On identifie chaque écart par rapport aux normes.</li>
<li><strong>Rapport de pré-inspection</strong> : vous recevez un document détaillant chaque point non conforme, avec la priorité, le coût estimé, et l&apos;explication technique.</li>
<li><strong>Travaux de mise en conformité</strong> : exécution des modifications nécessaires. Pas de travaux inutiles, pas de sur-facturation, uniquement ce qui est exigé par la norme.</li>
<li><strong>Vérification finale</strong> : avant l&apos;intervention de l&apos;organisme agréé, Benoît effectue un contrôle interne identique à celui que fera l&apos;inspecteur. C&apos;est le même regard, la même méthode, les mêmes critères.</li>
</ol>
<p>Résultat : votre installation passe le contrôle du premier coup. Pas de surprise, pas de visite supplémentaire payante, pas de stress.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Expertise du responsable",
        others:
          "Électricien généraliste sans expérience spécifique en inspection de conformité",
        beEnergies:
          "Ancien inspecteur en installation électrique, certifié RESCERT, auteur de centaines de rapports de non-conformité",
      },
      {
        aspect: "Diagnostic préalable",
        others:
          "Intervention directe sans évaluation préalable de l&apos;état de l&apos;installation",
        beEnergies:
          "Pré-inspection complète avec rapport détaillé avant tout travail",
      },
      {
        aspect: "Connaissance des normes",
        others:
          "Application des normes connues, sans vision globale du processus de contrôle",
        beEnergies:
          "Connaissance précise de ce que chaque organisme agréé vérifie, point par point",
      },
      {
        aspect: "Vérification post-travaux",
        others:
          "Travaux terminés, le client attend le contrôle en espérant que tout passe",
        beEnergies:
          "Contrôle interne identique à celui de l&apos;organisme agréé avant la visite officielle",
      },
      {
        aspect: "Schémas unifilaires",
        others:
          "Schéma générique ou non mis à jour après les travaux",
        beEnergies:
          "Schéma unifilaire conforme à la réalité de l&apos;installation, mis à jour systématiquement",
      },
      {
        aspect: "Taux de réussite au premier contrôle",
        others:
          "Variable, avec des reprises fréquentes qui coûtent du temps et de l&apos;argent",
        beEnergies:
          "Installation conçue pour passer le contrôle du premier coup, sans remarque",
      },
    ],
    ctaTitle: "Diagnostic de conformité gratuit",
    ctaDescription:
      "Benoît inspecte votre installation avec le même regard qu&apos;un contrôleur agréé. Vous recevez un état des lieux précis avant toute intervention.",
    ctaLabel: "Demander mon diagnostic gratuit",
  },

  "nettoyage-toiture": {
    seoTitle: "Nettoyage et peinture toiture Belgique | Be'energies",
    metaDescription:
      "Nettoyage et peinture de toiture professionnels. Protégez vos panneaux solaires et votre investissement. Inspection incluse. Devis gratuit.",
    headline:
      "Nettoyage et peinture de toiture : protégez votre investissement énergétique",
    subheadline:
      "Une toiture sale ou dégradée réduit le rendement de vos panneaux et raccourcit la durée de vie de votre couverture. On nettoie, on protège, et on vérifie vos panneaux dans la même intervention.",
    sections: [
      {
        id: "impact-rendement",
        title: "Une toiture sale fait perdre jusqu&apos;à 20% de rendement à vos panneaux",
        body: `<p>Les mousses, lichens et dépôts qui colonisent votre toiture ne restent pas à côté de vos panneaux. Ils progressent sous et autour des modules, créant des zones d&apos;ombre partielle qui réduisent la production.</p>
<p><strong>Impact mesurable :</strong></p>
<ul>
<li>Un panneau partiellement ombragé par des mousses ou des débris peut perdre <strong>15 à 20%</strong> de sa production</li>
<li>L&apos;accumulation de pollen, poussière et fientes d&apos;oiseaux crée un film qui réduit la captation lumineuse</li>
<li>Les micro-onduleurs détectent la baisse panneau par panneau, mais si la cause est externe, seul un nettoyage résout le problème</li>
</ul>
<p>Vous avez investi entre 8 000 et 15 000 EUR dans vos panneaux. Perdre 20% de rendement à cause d&apos;un entretien négligé, c&apos;est 200 à 300 EUR par an de production en moins.</p>`,
      },
      {
        id: "nettoyage-professionnel",
        title: "Nettoyage professionnel : ce qui fait la différence",
        body: `<p>Le nettoyage de toiture ne se résume pas à un karcher haute pression. Un nettoyage mal réalisé cause plus de dégâts qu&apos;il n&apos;en résout.</p>
<p><strong>Notre méthode :</strong></p>
<ul>
<li><strong>Traitement anti-mousse biocide :</strong> élimination à la racine, pas en surface. La mousse ne repousse pas en 6 mois.</li>
<li><strong>Nettoyage basse pression :</strong> les tuiles et ardoises sont poreuses. La haute pression les abîme et accélère leur dégradation. On travaille à pression contrôlée.</li>
<li><strong>Traitement hydrofuge :</strong> après nettoyage, une couche protectrice repousse l&apos;eau et ralentit la recolonisation par les mousses.</li>
<li><strong>Peinture de toiture :</strong> pour les toitures en fibrociment ou les tuiles décolorées, la peinture de toiture restaure l&apos;étanchéité et l&apos;aspect visuel sans remplacer la couverture.</li>
</ul>`,
      },
      {
        id: "inspection-panneaux",
        title: "L&apos;avantage Be'energies : nettoyage de toiture + inspection de panneaux",
        body: `<p>Quand on est sur votre toit pour nettoyer, on inspecte aussi vos panneaux. C&apos;est un avantage unique lié à notre double compétence.</p>
<p><strong>Ce que Benoît vérifie pendant le nettoyage :</strong></p>
<ul>
<li>État physique des modules (micro-fissures, jaunissement, délamination)</li>
<li>État des fixations et du système de montage</li>
<li>Connectique et câblage visible (oxydation, détérioration des connecteurs MC4)</li>
<li>Présence de points chauds ou de traces de surchauffe</li>
<li>Vérification du bon fonctionnement via le monitoring de production</li>
</ul>
<p>Deux entreprises différentes pour le nettoyage et l&apos;inspection, c&apos;est deux déplacements, deux factures, et souvent une toiture nettoyée sans regard technique sur les panneaux. Ici, c&apos;est un seul passage, un seul interlocuteur, et un rapport complet.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Méthode de nettoyage",
        others:
          "Karcher haute pression qui endommage les tuiles et réduit leur durée de vie",
        beEnergies:
          "Nettoyage basse pression adapté au matériau de couverture, traitement biocide longue durée",
      },
      {
        aspect: "Inspection des panneaux",
        others:
          "Nettoyage de toiture sans regard sur les panneaux solaires installés",
        beEnergies:
          "Inspection visuelle et technique des panneaux incluse dans chaque intervention toiture",
      },
      {
        aspect: "Traitement préventif",
        others:
          "Nettoyage ponctuel sans protection, la mousse revient en quelques mois",
        beEnergies:
          "Traitement hydrofuge après nettoyage pour prolonger le résultat de 3 à 5 ans",
      },
      {
        aspect: "Compétence technique",
        others:
          "Entreprise de nettoyage sans connaissance des installations électriques en toiture",
        beEnergies:
          "Ancien inspecteur : connaissance précise des normes de sécurité pour travailler autour des panneaux sous tension",
      },
    ],
    ctaTitle: "Devis nettoyage et inspection gratuit",
    ctaDescription:
      "Benoît évalue l&apos;état de votre toiture et de vos panneaux en une seule visite. Vous recevez un devis clair pour le nettoyage et un rapport d&apos;état de vos modules.",
    ctaLabel: "Demander mon devis gratuit",
  },

  "pompes-a-chaleur": {
    seoTitle: "Pompe à chaleur Belgique 2026 | Be'energies",
    metaDescription:
      "Pompe à chaleur air-eau et air-air intégrée à vos panneaux solaires. Dimensionnement par un ancien inspecteur. Tarif IMPACT optimisé. Diagnostic gratuit.",
    headline:
      "Pompe à chaleur : chauffage et climatisation intégrés à votre système solaire",
    subheadline:
      "Une pompe à chaleur mal dimensionnée consomme plus qu&apos;elle ne fait économiser. Benoît dimensionne votre système pour qu&apos;il fonctionne avec vos panneaux, pas contre votre facture.",
    sections: [
      {
        id: "air-eau-air-air",
        title: "Air-eau ou air-air : deux technologies, deux usages",
        body: `<p>Le choix entre air-eau et air-air dépend de votre système existant et de vos besoins. Voici la distinction concrète :</p>
<h4>Pompe à chaleur air-eau</h4>
<ul>
<li><strong>Usage :</strong> chauffage central (radiateurs ou plancher chauffant) + eau chaude sanitaire</li>
<li><strong>Rendement :</strong> COP moyen de 3 à 4 (pour 1 kWh d&apos;électricité, 3 à 4 kWh de chaleur)</li>
<li><strong>Investissement :</strong> 8 000 à 15 000 EUR TTC selon la puissance et le modèle</li>
<li><strong>Idéale si :</strong> vous remplacez une chaudière au mazout ou au gaz, vous avez un chauffage central existant, vous voulez intégrer l&apos;eau chaude sanitaire</li>
<li><strong>Limite :</strong> efficacité réduite sous -7°C (appoint électrique nécessaire quelques jours par an en Belgique)</li>
</ul>
<h4>Pompe à chaleur air-air (climatisation réversible)</h4>
<ul>
<li><strong>Usage :</strong> chauffage d&apos;appoint pièce par pièce + climatisation en été</li>
<li><strong>Rendement :</strong> COP moyen de 3 à 5 (excellent en mode climatisation)</li>
<li><strong>Investissement :</strong> 2 500 à 6 000 EUR TTC selon le nombre d&apos;unités</li>
<li><strong>Idéale si :</strong> vous voulez la climatisation en été, vous chauffez au bois ou au pellet et cherchez un complément, vous rénovez pièce par pièce</li>
<li><strong>Limite :</strong> ne remplace pas un chauffage central, ne produit pas d&apos;eau chaude sanitaire</li>
</ul>`,
      },
      {
        id: "integration-solaire-pac",
        title: "Pompe à chaleur + panneaux solaires : la combinaison stratégique",
        body: `<p>Une pompe à chaleur consomme de l&apos;électricité. Si cette électricité vient de vos panneaux plutôt que du réseau, le coût de fonctionnement chute.</p>
<p><strong>Le calcul :</strong></p>
<ul>
<li>Pompe à chaleur air-eau : consommation annuelle typique de 3 000 à 5 000 kWh</li>
<li>Coût au réseau (~38 c/kWh) : 1 140 à 1 900 EUR/an</li>
<li>Coût en autoconsommation solaire : quasi nul</li>
</ul>
<p>En dimensionnant vos panneaux pour couvrir aussi la consommation de la pompe à chaleur, vous transformez un poste de dépense en un poste couvert par votre production.</p>
<p><strong>Attention au dimensionnement :</strong> une pompe à chaleur augmente significativement votre consommation électrique. Si vos panneaux sont déjà dimensionnés au plus juste, il faudra probablement ajouter des modules. C&apos;est un point que Benoît vérifie systématiquement lors du diagnostic.</p>`,
      },
      {
        id: "pac-impact",
        title: "Tarif IMPACT et pompe à chaleur : optimiser les heures de chauffe",
        body: `<p>Le tarif IMPACT (tri-horaire) offre une opportunité concrète pour les propriétaires de pompes à chaleur :</p>
<ul>
<li><strong>Plage ECO (11h-17h) :</strong> vos panneaux produisent, votre pompe à chaleur peut préchauffer le ballon d&apos;eau chaude sanitaire et accumuler de la chaleur dans le plancher chauffant (inertie thermique)</li>
<li><strong>Plage PIC (17h-22h) :</strong> la pompe à chaleur fonctionne sur la chaleur accumulée ou sur la batterie, évitant le tarif le plus cher</li>
</ul>
<p>La programmation intelligente de la pompe à chaleur en fonction des plages horaires IMPACT peut réduire le coût de chauffage de <strong>15 à 25%</strong> supplémentaires, en plus de l&apos;autoconsommation solaire.</p>
<p>C&apos;est un exemple concret de ce qu&apos;un système énergétique intégré peut produire quand il est conçu comme un ensemble, pas comme une addition de produits séparés.</p>`,
      },
      {
        id: "conformite-pac",
        title: "Conformité électrique : la pompe à chaleur est un poste de forte puissance",
        body: `<p>L&apos;installation d&apos;une pompe à chaleur modifie significativement la charge de votre installation électrique. Points de conformité critiques :</p>
<ul>
<li><strong>Raccordement électrique dédié</strong> : circuit protégé, disjoncteur calibré, câble de section adéquate</li>
<li><strong>Compatibilité avec le raccordement existant</strong> : une PAC air-eau de 8 kW sur un raccordement monophasé limité nécessite une vérification de la puissance disponible</li>
<li><strong>Mise à la terre de l&apos;unité extérieure</strong> : obligatoire et souvent négligée</li>
<li><strong>Schéma unifilaire mis à jour</strong> : l&apos;ajout de la PAC doit figurer sur le schéma pour que l&apos;installation reste conforme</li>
</ul>
<p>En tant qu&apos;ancien inspecteur, Benoît a constaté de nombreuses installations de pompes à chaleur raccordées de manière non conforme : câbles sous-dimensionnés, absence de protection dédiée, schémas non mis à jour. Chaque installation Be'energies intègre la conformité dès la conception, pas comme un ajout après-coup.</p>`,
      },
    ],
    comparisonRows: [
      {
        aspect: "Dimensionnement",
        others:
          "Puissance standard proposée sans calcul des déperditions thermiques du bâtiment",
        beEnergies:
          "Calcul thermique basé sur l&apos;isolation, la surface, l&apos;orientation et les besoins réels du ménage",
      },
      {
        aspect: "Intégration solaire",
        others:
          "Pompe à chaleur installée sans coordination avec l&apos;installation photovoltaïque existante",
        beEnergies:
          "Dimensionnement conjoint : panneaux + PAC + batterie optimisés pour maximiser l&apos;autoconsommation",
      },
      {
        aspect: "Optimisation tarifaire",
        others:
          "Aucune prise en compte du tarif IMPACT dans la programmation de la PAC",
        beEnergies:
          "Programmation de la PAC en fonction des plages ECO/PIC pour minimiser le coût de fonctionnement",
      },
      {
        aspect: "Conformité électrique",
        others:
          "Raccordement électrique traité comme un détail, sans vérification du schéma unifilaire",
        beEnergies:
          "Circuit dédié conforme, schéma unifilaire mis à jour, vérification par un ancien inspecteur en installation électrique, certifié RESCERT",
      },
      {
        aspect: "Placement de l&apos;unité extérieure",
        others:
          "Positionnement basé sur la facilité d&apos;installation, sans tenir compte du bruit et de l&apos;efficacité",
        beEnergies:
          "Positionnement optimisé pour le rendement thermique, le niveau sonore (35-50 dB) et le respect du voisinage",
      },
    ],
    ctaTitle: "Diagnostic pompe à chaleur gratuit",
    ctaDescription:
      "Benoît évalue votre habitation, votre système de chauffage existant et votre installation électrique. Vous recevez une recommandation claire : air-eau ou air-air, la puissance adaptée, et le calcul d&apos;intégration avec vos panneaux.",
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
