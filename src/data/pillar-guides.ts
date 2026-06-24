/**
 * Pillar long-form guides.
 *
 * These are SEO + commercial cornerstone pages — each one targets a
 * high-intent query that customers actually type into Google before
 * deciding whether to invest. They support the homepage and the service
 * pages through internal linking, and act as the "trust artefacts" the
 * sales process points to.
 *
 * Source of truth for the dedicated /guides/[slug] route.
 */

import type { FAQItem } from "@/lib/types";

export interface PillarGuideTableData {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface PillarGuideSection {
  id: string;
  title: string;
  /** Body copy. Paragraphs separated by double line breaks. Rendered as
   *  individual <p> elements, no HTML markup. */
  body: string;
  /** Optional comparative / numeric table rendered after the body. */
  tableData?: PillarGuideTableData;
}

export interface PillarGuide {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  /** Optional rich-HTML introduction. When present, the [slug] page
   *  renders this in a 2-column layout on desktop with selective
   *  <strong> emphasis on key terms. Allows pillar guides to break the
   *  long single-block intro into a more readable editorial spread.
   *  Use plain <p> and <strong> tags only. */
  introductionHtml?: string;
  sections: PillarGuideSection[];
  faq: FAQItem[];
  sources_cited?: string[];
  /** YYYY-MM. Surfaced under the H1 + used as dateModified in the Article
   *  schema. */
  lastUpdated: string;
  /** Indicative word count (informational only, not rendered). */
  word_count?: number;
}

export const pillarGuides: Record<string, PillarGuide> = {
  "prix-panneaux-solaires-wallonie-2026": {
    slug: "prix-panneaux-solaires-wallonie-2026",
    title:
      "Prix panneaux solaires Wallonie 2026 : guide complet et honnête",
    metaDescription:
      "Prix réels, TVA 6 %, tarif prosumer 85,84 €/kWe/an chez ORES, retour sur investissement, primes 2026 : ce qu'un installateur honnête doit vous dire.",
    h1: "Combien coûtent vraiment des panneaux solaires en Wallonie en 2026 ?",
    introduction:
      "La question revient chaque semaine en rendez-vous : combien coûte aujourd'hui une installation photovoltaïque en Wallonie, et est-ce que cela vaut encore la peine ? La réponse honnête est moins simple qu'en 2020. Depuis le 1er janvier 2024, le compteur qui tourne à l'envers est terminé pour les nouvelles installations résidentielles wallonnes, le tarif prosumer reste dû et le compteur communicant devient progressivement la norme. Le calcul a changé, mais la rentabilité existe encore, à condition de bien dimensionner l'installation et de comprendre comment lire un devis. Cette page rassemble ce que je dis à mes clients en visite technique : les fourchettes de prix réelles en 2026, la TVA à 6 % et qui peut en bénéficier, ce qu'il reste comme aides régionales, le temps de retour sous le nouveau régime, et surtout les signaux qui distinguent un devis solaire sérieux d'une promesse marketing. Pas de chiffres inventés, uniquement des données sourcées et qualifiées.",
    introductionHtml:
      "<p>La question revient chaque semaine en rendez-vous : <strong>combien coûte aujourd'hui une installation photovoltaïque en Wallonie</strong>, et est-ce que cela vaut encore la peine ? La réponse honnête est moins simple qu'en 2020.</p>" +
      "<p>Depuis le <strong>1<sup>er</sup> janvier 2024</strong>, le compteur qui tourne à l'envers est terminé pour les nouvelles installations résidentielles wallonnes, <strong>le tarif prosumer reste dû</strong> et le compteur communicant devient progressivement la norme.</p>" +
      "<p>Le calcul a changé, mais <strong>la rentabilité existe encore</strong>, à condition de bien dimensionner l'installation et de comprendre comment lire un devis.</p>" +
      "<p>Cette page rassemble ce que je dis à mes clients en visite technique : les fourchettes de prix réelles en 2026, la <strong>TVA à 6 %</strong> et qui peut en bénéficier, ce qu'il reste comme aides régionales, le temps de retour sous le nouveau régime, et surtout les signaux qui distinguent un devis solaire sérieux d'une promesse marketing.</p>" +
      "<p><strong>Pas de chiffres inventés</strong>, uniquement des données sourcées et qualifiées.</p>",
    sections: [
      {
        id: "combien-coute-installation-photovoltaique-wallonie-2026",
        title:
          "Combien coûte une installation photovoltaïque en Wallonie en 2026 ?",
        body: "Il n'existe pas de prix unique. Le tarif dépend de la puissance installée (kWc), de la qualité des modules et de l'onduleur, de la complexité du toit, du type de couverture, de la distance entre les modules et le tableau électrique, et du contexte du chantier (échafaudage, accès, intégration en toiture ou surimposition).\n\nSelon les données publiques disponibles en juin 2026, le prix tout-inclus d'une installation résidentielle se situe globalement entre 1,1 et 1,8 €/Wc installé, TVA et pose comprises. Cela donne, à titre indicatif, les fourchettes suivantes pour un chantier classique en Wallonie, logement de plus de 10 ans, TVA à 6 % :\n\nPour une installation de 3 kWc, le budget total se situe généralement entre 4 000 € et 5 500 € TVAC. Pour 5 kWc, entre 5 500 € et 8 000 € TVAC. Pour 6 kWc, entre 7 000 € et 10 000 € TVAC, pose et mise en service comprises. Plus la puissance installée augmente, plus le prix au kWc baisse : l'échafaudage, le raccordement et la main-d'œuvre se mutualisent.\n\nCes fourchettes restent des ordres de grandeur. Un toit en ardoise naturelle, une orientation Est-Ouest avec deux pans, un onduleur hybride prêt pour batterie, ou une intégration architecturale spécifique font monter le devis. À l'inverse, un toit simple plein sud, en tuiles standard, accessible facilement, avec un tableau électrique récent et un compteur communicant déjà posé, sera dans le bas de la fourchette.\n\nLe bon réflexe n'est pas de comparer un prix au kWc, mais de comparer ce que le devis inclut réellement : marque et modèle des panneaux, marque et puissance de l'onduleur, garanties produit et performance, prestations de mise en service, accompagnement administratif auprès du gestionnaire de réseau, et présence ou non d'une étude de dimensionnement basée sur votre consommation réelle.",
        tableData: {
          caption:
            "Fourchettes indicatives de prix tout-inclus pour une installation photovoltaïque résidentielle en Wallonie, TVA 6 % (logement >10 ans), pose comprise. Sources : energy-village, maconstruction.be (2026).",
          headers: [
            "Puissance installée",
            "Production annuelle estimée",
            "Budget total TVAC",
            "Profil de ménage type",
          ],
          rows: [
            [
              "3 kWc",
              "~2 550 à 3 000 kWh",
              "4 000 € à 5 500 €",
              "Couple, faible consommation",
            ],
            [
              "5 kWc",
              "~4 250 à 5 000 kWh",
              "5 500 € à 8 000 €",
              "Famille, consommation moyenne",
            ],
            [
              "6 kWc",
              "~5 100 à 6 000 kWh",
              "7 000 € à 10 000 €",
              "Famille + véhicule électrique léger",
            ],
            [
              "8 à 10 kWc",
              "Variable selon orientation",
              "Sur devis",
              "Forte consommation, pompe à chaleur, VE",
            ],
          ],
        },
      },
      {
        id: "detail-prix-panneaux-onduleur-structure-main-oeuvre",
        title:
          "Le détail du prix : panneaux, onduleur, structure, main-d'œuvre",
        body: "Un devis photovoltaïque sérieux ne se résume pas à un prix global. Il devrait détailler chaque poste, parce que c'est là que se cachent les différences de qualité et les futurs problèmes.\n\nLes modules photovoltaïques représentent le cœur visible de l'installation. Les choix vont des modules monocristallins standards aux modules à haut rendement (TOPCon, hétérojonction) plus performants au m². La différence de prix entre un module entrée de gamme et un module premium peut représenter plusieurs centaines d'euros sur l'installation totale, mais la garantie produit et la garantie de performance linéaire à 25 ou 30 ans en dépendent directement.\n\nL'onduleur est le composant le plus stratégique et souvent le plus sous-estimé. C'est lui qui transforme le courant continu des panneaux en courant alternatif utilisable. Un onduleur sous-dimensionné bridera votre production toute l'année. Un onduleur de marque obscure peut tomber en panne sans pièce de rechange disponible. Un onduleur hybride, plus cher à l'achat, permet d'ajouter une batterie plus tard sans tout remplacer. C'est typiquement le poste où je vois le plus d'économies douteuses dans les devis bas de gamme.\n\nLa structure de fixation, les rails, les pinces, les passages de câbles et l'étanchéité de toiture sont des postes que personne ne regarde, et c'est précisément pour cette raison qu'ils méritent attention. Une structure mal dimensionnée ou des fixations bas de gamme posent des problèmes au bout de quelques années : infiltrations, corrosion, désolidarisation par grand vent.\n\nLa main-d'œuvre, le raccordement électrique au tableau, la mise en service, le test des protections et la déclaration au gestionnaire de réseau représentent la part invisible mais essentielle du travail. Selon la législation belge sur la TVA, les composants intégrés (onduleur, rails, fixations, câblage) suivent le même taux que la prestation principale d'installation, donc 6 % si le logement éligible a plus de 10 ans.\n\nUn devis honnête mentionne aussi ce qui n'est pas inclus : remise en conformité éventuelle du tableau électrique, adaptation du compteur, frais de raccordement spécifiques, et accompagnement administratif.",
      },
      {
        id: "primes-incitants-2026-tva-renopret",
        title: "Les primes et incitants en 2026 : la réalité, sans promesses",
        body: "C'est probablement le sujet le plus mal compris. Beaucoup de propriétaires arrivent encore en rendez-vous en parlant de Qualiwatt ou de certificats verts. Ces dispositifs n'existent plus pour les nouvelles installations photovoltaïques résidentielles en Wallonie.\n\nLe principal avantage fiscal en 2026 reste la TVA réduite à 6 % sur la fourniture et la pose de panneaux photovoltaïques pour les habitations résidentielles de plus de 10 ans. Pour le neuf ou un logement de moins de 10 ans, la TVA reste à 21 %. C'est un écart significatif qui peut représenter plusieurs centaines voire un peu plus de mille euros selon la taille du chantier, mais l'ordre de grandeur exact dépend du devis.\n\nIl n'existe plus de prime régionale wallonne directe pour l'installation de panneaux photovoltaïques résidentiels neufs en 2026. Le régime transitoire des Primes Habitation, valable du 14 février 2025 au 30 septembre 2026, ne comprend pas de prime directe pour le photovoltaïque résidentiel. Méfiez-vous donc des installateurs qui annoncent une « prime » spécifique panneaux solaires en Wallonie : la formulation cache souvent une remise commerciale interne, pas un dispositif public.\n\nLe Rénoprêt accordé par la Société Wallonne du Crédit Social (SWCS) permet en revanche d'emprunter à taux zéro jusqu'à 60 000 € sur une durée maximale de 30 ans pour financer des travaux de rénovation énergétique, photovoltaïque inclus. Les conditions principales : revenu imposable globalement sous 97 700 €, logement situé en Wallonie et de plus de 15 ans, et statut de propriétaire. Les conditions exactes et plafonds doivent être vérifiés au moment de la demande sur le site de la SWCS.\n\nDes primes communales ponctuelles existent dans certaines communes wallonnes, mais leur montant, leurs conditions et leur disponibilité varient fortement et changent d'année en année. La seule source fiable reste le service énergie ou urbanisme de votre commune, à contacter avant signature.",
      },
      {
        id: "temps-retour-investissement-nouveau-regime",
        title: "Le temps de retour sous le nouveau régime",
        body: "C'est la question que tout le monde se pose, et c'est aussi celle où circulent le plus de chiffres fantaisistes. Le calcul a réellement changé depuis 2024.\n\nLe principe du compteur qui tourne à l'envers a été supprimé en Wallonie pour toute installation mise en service à partir du 1er janvier 2024. Les installations mises en service avant le 31 décembre 2023 conservent le bénéfice de la compensation annuelle jusqu'au 31 décembre 2030. Toute nouvelle installation doit désormais être associée à un compteur double flux ou communicant, qui mesure séparément les prélèvements et les injections.\n\nConcrètement, votre rentabilité dépend de trois leviers : ce que vous économisez en autoconsommant directement votre production, ce que vous touchez en revendant le surplus injecté, et le tarif prosumer que vous payez pour l'usage du réseau.\n\nSur le tarif prosumer, le communiqué de la CWaPE du 26 juin 2025 a approuvé les tarifs périodiques de distribution pour la période 2026-2029. Le tarif capacitaire 2026 s'élève à 85,84 €/kWe/an chez ORES, 85,93 €/kWe/an chez RESA et 76,45 €/kWe/an chez AIEG. Ce tarif s'applique par défaut sur une hypothèse standardisée d'autoconsommation de 37,76 %. Un foyer mieux équipé en compteur communicant peut opter pour le tarif proportionnel basé sur la consommation réelle réseau, ce qui peut être avantageux selon le profil.\n\nSur l'injection, le tarif d'achat du surplus revendu au fournisseur se situe en 2026 dans une fourchette d'environ 0,04 à 0,09 €/kWh selon le fournisseur et le type de contrat (fixe, variable ou dynamique). À vérifier au cas par cas auprès du fournisseur d'électricité.\n\nDans ces conditions, le retour sur investissement d'une installation résidentielle bien dimensionnée se situe typiquement entre 6 et 9 ans, en fonction du taux d'autoconsommation et du profil de consommation. Un foyer présent en journée, équipé d'un ballon thermodynamique ou d'une pompe à chaleur, atteindra plus rapidement le seuil. Un foyer en télétravail partiel avec véhicule électrique rechargeable la journée maximise la rentabilité. Une batterie domestique peut améliorer le taux d'autoconsommation, mais son coût additionnel (typiquement 5 000 à 10 000 €) doit être amorti par les économies réelles qu'elle génère, ce qui n'est pas toujours évident sur 10 ans.",
      },
      {
        id: "lire-devis-solaire-honnete-pieges",
        title: "Comment lire un devis solaire honnête (et repérer les pièges)",
        body: "Après quinze ans à inspecter des installations électriques avant d'installer moi-même, j'ai pris l'habitude de prévenir mes clients sur ce qu'un devis doit obligatoirement contenir. Un devis solaire propre tient sur quelques pages et répond à des questions précises.\n\nLes marques et modèles exacts des panneaux et de l'onduleur doivent figurer noir sur blanc. Pas « panneaux 400 Wc tier-1 », mais le fabricant, la référence et la fiche technique annexée. Pareil pour l'onduleur. Sans cela, vous ne pouvez ni comparer, ni vérifier les garanties.\n\nLes garanties produit et performance doivent être détaillées séparément : garantie produit du panneau (souvent 12 à 25 ans selon le fabricant), garantie de performance linéaire (typiquement 25 à 30 ans), garantie produit de l'onduleur (5 à 12 ans selon les marques), et garantie de pose de l'installateur lui-même.\n\nL'étude de dimensionnement doit s'appuyer sur votre consommation réelle, pas sur une moyenne nationale. Demandez à voir l'estimation de production annuelle calculée pour votre toit (orientation, inclinaison, ombrages éventuels) et l'estimation du taux d'autoconsommation prévu. Un installateur sérieux refusera de surdimensionner « pour faire un beau toit » si vos besoins réels ne le justifient pas.\n\nLes prestations administratives auprès du gestionnaire de réseau doivent être incluses : déclaration de l'installation, demande de compteur double flux ou activation du communicant, choix entre tarif capacitaire et tarif proportionnel après mise en service. C'est un travail réel qui demande du temps.\n\nMéfiez-vous des promesses de retour sur investissement en 4 ou 5 ans : sous le régime 2026, c'est mathématiquement difficile à atteindre, sauf profil de consommation très favorable. Méfiez-vous aussi des « primes » mises en avant qui ne correspondent à aucun dispositif officiel vérifiable.\n\nPour aller plus loin, j'ai détaillé ces points dans la page /pieges-a-eviter/, et je propose une analyse gratuite de devis tiers via /devis-analyse/. Pour le détail technique de l'installation elle-même, vous pouvez consulter /services/panneaux-photovoltaiques/.",
      },
    ],
    faq: [
      {
        question:
          "Le tarif prosumer va-t-il disparaître en Wallonie après 2026 ?",
        answer:
          "Non, le tarif prosumer n'est pas un impôt mais une redevance d'usage du réseau de distribution, en place depuis le 1er octobre 2020. Le communiqué de la CWaPE du 26 juin 2025 a approuvé les tarifs périodiques 2026-2029, ce qui confirme que le mécanisme reste en place sur cette période. Il s'applique aussi bien au tarif capacitaire forfaitaire qu'au tarif proportionnel basé sur la consommation réelle. Le montant exact varie selon le gestionnaire de réseau (ORES, RESA, AIEG, AIESH) et la puissance kWe de l'onduleur.",
      },
      {
        question:
          "Est-ce que je bénéficie encore de la TVA à 6 % sur mes panneaux solaires en 2026 ?",
        answer:
          "Oui, si votre logement résidentiel a plus de 10 ans à la date des travaux. Le taux réduit de 6 % s'applique alors à la fourniture et à la pose des panneaux, et aux composants intégrés (onduleur, rails, fixations, câblage). Pour un logement neuf ou de moins de 10 ans, la TVA reste à 21 %. Faites figurer explicitement ce taux et la justification (âge du bien) sur le devis : c'est ce que vérifiera l'administration fiscale en cas de contrôle.",
      },
      {
        question:
          "Existe-t-il encore une prime régionale wallonne pour les panneaux photovoltaïques en 2026 ?",
        answer:
          "Non, il n'existe plus de prime régionale wallonne directe pour l'installation de panneaux photovoltaïques résidentiels neufs. La prime Qualiwatt et les certificats verts ont été supprimés pour ce type d'installations. Le régime transitoire des Primes Habitation 2025-2026 ne couvre pas le photovoltaïque résidentiel. En revanche, le Rénoprêt à taux zéro de la SWCS reste mobilisable sous conditions. Certaines communes proposent ponctuellement des primes locales, à vérifier directement auprès du service énergie de votre commune.",
      },
      {
        question:
          "Avec le tarif prosumer et la fin de la compensation, est-ce que c'est encore rentable ?",
        answer:
          "Oui, mais le calcul a changé. Sous le régime 2026, le retour sur investissement d'une installation résidentielle bien dimensionnée se situe typiquement entre 6 et 9 ans. La rentabilité dépend désormais surtout de votre taux d'autoconsommation : plus vous consommez votre production au moment où elle est produite, mieux c'est. Un foyer présent en journée, équipé d'un ballon thermodynamique ou d'une pompe à chaleur, optimise nettement la rentabilité. Surdimensionner pour vendre du surplus à 0,04-0,09 €/kWh est rarement la bonne stratégie.",
      },
      {
        question:
          "Faut-il installer une batterie domestique avec mes panneaux solaires en 2026 ?",
        answer:
          "Pas systématiquement. Une batterie augmente le taux d'autoconsommation au-delà du 30-40 % moyen, ce qui peut améliorer la rentabilité globale, mais son coût additionnel (typiquement 5 000 à 10 000 €) doit être amorti par les économies réelles qu'elle génère. Pour un foyer absent toute la journée et sans gros consommateur pilotable, la batterie peut faire sens. Pour un foyer déjà bien équipé en charges décalables (ballon thermodynamique, pompe à chaleur, recharge VE), le pilotage intelligent de l'autoconsommation peut suffire sans batterie.",
      },
    ],
    sources_cited: [
      "https://www.cwape.be/documents-recents/communique-de-presse-tarifs-periodiques-de-distribution-delectricite-dores-resa",
      "https://www.wallonie.be/fr/actualites/panneaux-photovoltaiques-fin-du-compteur-qui-tourne-lenvers",
      "https://www.ores.be/particulier/compensation-avant-0101",
      "https://www.wallonie.be/fr/demarches/photovoltaique-sinformer-sur-le-tarif-prosumer",
      "https://www.ores.be/particulier/compteur-communicant-fonctionnement",
      "https://www.guide-panneaux-photovoltaiques.be/legislation/tva-photovoltaique/",
      "https://logement.wallonie.be/fr/aide/primes-habitation-2025",
      "https://hightechsolar.be/blog/solaire/primes-photovoltaiques-wallonie/",
      "https://www.wallonie.be/fr/demarches/beneficier-du-financement-de-vos-travaux-de-renovation",
      "https://www.test-achats.be/maison-energie/energie-renouvelable/news/cout-energie-solaire-injectee",
      "https://www.ecoconso.be/fr/content/est-ce-rentable-dinstaller-des-panneaux-photovoltaiques",
      "https://www.energy-village.be/panneaux-photovoltaiques-prix/",
      "https://www.maconstruction.be/actualites/panneaux-photovoltaiques/prix-nombre-panneaux-solaires-wallonie-vectura/",
    ],
    lastUpdated: "2026-06",
    word_count: 1450,
  },

  "prime-borne-recharge-belgique-2026": {
    slug: "prime-borne-recharge-belgique-2026",
    title:
      "Prime borne de recharge 2026 en Belgique : la vérité actualisée",
    metaDescription:
      "Prime borne de recharge en Belgique 2026 : ce qui reste vraiment (TVA 6 %, déduction pro 40 %), ce qui a disparu, et les conditions techniques à respecter.",
    h1: "Prime borne de recharge en Belgique 2026 : ce qui existe vraiment",
    introduction:
      "Si vous cherchez une \"prime borne de recharge 2026\" pour installer un point de charge chez vous en Belgique, autant le dire directement : le paysage a profondément changé en deux ans, et beaucoup d'informations qui circulent encore en ligne sont périmées. La réduction d'impôt fédérale qui a porté le marché entre 2021 et 2024 est supprimée. Aucune région ne propose, à ce jour, une prime directe pour une borne installée à domicile par un particulier. Mais cela ne veut pas dire qu'il n'y a plus aucun levier. En tant qu'ancien inspecteur en installation électrique, certifié RESCERT, je vois passer chaque semaine des projets où le client pense avoir droit à une prime qui n'existe plus, et passe à côté des vraies économies, fiscales et techniques, qui restent disponibles en 2026. Cette page fait le point clair sur ce qui s'applique vraiment, pour un particulier comme pour un indépendant ou une PME.",
    sections: [
      {
        id: "existe-t-il-une-prime-borne-2026",
        title: "Existe-t-il une prime borne de recharge en 2026 ?",
        body: "Pour un particulier qui installe une borne à son domicile en 2026, la réponse honnête est : non, il n'existe plus de prime directe au sens strict.\n\nLa réduction d'impôt fédérale, qui a longtemps été le principal incitant, a été supprimée à partir de l'exercice d'imposition 2026. Selon les informations publiques du SPF Finances, elle ne s'appliquait qu'aux dépenses, TVA comprise, payées entre le 1er septembre 2021 et le 31 août 2024 inclus. Le taux a d'ailleurs été progressivement réduit pendant cette période : 45 % pour les dépenses entre septembre 2021 et fin 2022, puis 30 % en 2023, puis 15 % du 1er janvier au 31 août 2024. Le plafond a lui aussi évolué, jusqu'à 1.750 € par borne unidirectionnelle, ou 8.000 € pour une borne bidirectionnelle entre 2023 et août 2024.\n\nDepuis la fin de ce régime, aucun dispositif fédéral équivalent n'a été reconduit pour les particuliers.\n\nAu niveau régional, la situation est similaire. En Wallonie, selon les données publiques du portail Energie de la Région wallonne, aucune prime régionale directe n'est prévue pour l'installation d'une borne de recharge à usage privé chez un particulier. La Région de Bruxelles-Capitale ne propose pas non plus de prime résidentielle directe. Côté flamand, les sources publiques disponibles indiquent que Mijn VerbouwPremie ne couvre pas la borne de recharge pour un particulier en 2026.\n\nIl reste, en théorie, la possibilité qu'une commune propose une aide locale ponctuelle. Aucun annuaire centralisé fiable ne recense ces aides communales et leurs montants varient fortement. Avant de signer un devis, le réflexe utile est de poser directement la question à l'administration communale, document à l'appui, et non de se fier à une affirmation générale trouvée sur un site marchand.\n\nLa bonne nouvelle est ailleurs : ce que l'on perd en prime, on peut en partie le récupérer en TVA, en couplage photovoltaïque et, pour les indépendants, en fiscalité professionnelle.",
      },
      {
        id: "vraies-aides-tva-deduction-communales",
        title:
          "Les vraies aides en 2026 : TVA 6 %, déduction fiscale pro, primes communales",
        body: "Pour un particulier en 2026, l'avantage financier le plus tangible reste la TVA réduite à 6 % au lieu de 21 % sur la fourniture et l'installation de la borne. C'est, sur une facture de plusieurs milliers d'euros, une économie significative.\n\nQuatre conditions cumulatives doivent être réunies, selon les règles de la TVA applicable aux travaux immobiliers. L'habitation doit avoir plus de 10 ans. La borne doit être fournie ET installée par un installateur professionnel, sur une seule et même facture. Le logement doit être affecté majoritairement à un usage privé, c'est-à-dire au moins 50 % de la surface. Enfin, la borne doit être installée dans le bâtiment, dans le garage, ou contre la façade extérieure. Si elle est posée plus loin sur le terrain, par exemple au fond du jardin ou le long d'une allée éloignée, le taux standard de 21 % s'applique.\n\nConcrètement, cela veut dire qu'acheter sa borne en ligne et faire appel à un électricien pour la poser séparément fait souvent perdre le bénéfice du 6 %, parce que la fourniture et l'installation ne figurent pas sur la même facture.\n\nPour les indépendants et les sociétés, un autre levier reste actif. Selon les informations publiques du SPF Finances Entreprises, la déduction pour investissement reste disponible en 2026 : 40 % pour les PME et indépendants, 30 % pour les grandes sociétés, sur un investissement neuf d'au moins 1.000 € utilisé à des fins professionnelles en Belgique. Pour les bornes accessibles au public, la déduction majorée fédérale a en revanche cessé de s'appliquer aux investissements postérieurs au 31 août 2024.\n\nÀ Bruxelles, la Prime Utilitaire électrique reste disponible : selon le portail régional Economie-Emploi, elle couvre jusqu'à 40 % des dépenses éligibles pour l'achat d'un utilitaire électrique et de sa borne de recharge, avec un plafond de 16.000 € par véhicule, dans la limite de 48.000 € par bénéficiaire et par année civile. Elle est réservée aux PME ayant un siège d'exploitation en Région bruxelloise et concerne les véhicules N1 ou L7e-CU 100 % électriques. Ce n'est pas une prime borne au sens strict, mais elle inclut explicitement la borne dans le périmètre du financement.\n\nCôté wallon, le prêt Easy'Green de Wallonie Entreprendre peut financer une partie de l'investissement borne pour les indépendants et entreprises, jusqu'à 1 million d'euros par projet sans frais de dossier, selon les conditions publiques de Wallonie Entreprendre.",
      },
      {
        id: "conditions-techniques-aides",
        title: "Les conditions techniques à respecter pour rester en règle",
        body: "Beaucoup de clients découvrent trop tard qu'une borne installée n'est pas seulement une question de prise au mur. C'est une installation électrique soumise à des obligations strictes, et c'est précisément là que se jouent la sécurité et la conformité.\n\nPremière obligation : la déclaration au gestionnaire de réseau. Selon le décret wallon du 15 octobre 2022 relatif au marché de l'électricité, toute borne de recharge installée en Wallonie doit être déclarée au gestionnaire de réseau de votre commune, c'est-à-dire ORES, RESA, AIEG, AIESH ou REW selon la zone. À Bruxelles, Sibelga impose la même déclaration. Cette démarche se fait en ligne et permet au gestionnaire de réseau d'anticiper la charge supplémentaire sur le réseau local. Un installateur sérieux la prend en charge ou vous accompagne pour la finaliser.\n\nDeuxième obligation : le contrôle RGIE par un organisme agréé. Le RGIE impose un contrôle de conformité avant la mise en service de toute borne installée en Belgique. Depuis l'entrée en vigueur du RGIE 2026 au 1er avril 2026, ce contrôle doit être réalisé par un organisme agréé indépendant : l'installateur ne peut plus signer son propre travail. Pour l'organisme, il faut généralement fournir le schéma unifilaire, le plan de position, la documentation technique de la borne (marque, modèle, puissance, numéro de série) et le code EAN du compteur.\n\nTroisième point : la conformité technique de la borne et du circuit. Les bornes installées en Belgique doivent respecter la norme IEC/NBN EN 61851, notamment le mode 3 pour la recharge AC domestique. Cela suppose un circuit dédié, un disjoncteur différentiel adapté (de type B ou A-EV selon le modèle de borne), et un câblage dimensionné à l'intensité maximale. Pour les particularités d'installation à éviter et les erreurs récurrentes que je vois sur le terrain, je détaille tout dans notre page /pieges-a-eviter/.\n\nQuatrième point : la certification RESCERT de l'installateur. Selon plusieurs sources publiques du secteur, cette certification est recommandée et même exigée par certains programmes régionaux pour les installateurs de bornes en Belgique. C'est un signal de sérieux à vérifier avant de signer.",
      },
      {
        id: "regime-fiscal-indepenants-entreprises",
        title:
          "Pour les indépendants et entreprises : le régime fiscal vraiment intéressant",
        body: "Si la fin de la réduction d'impôt résidentielle a refroidi le marché, la situation est très différente pour un indépendant ou une société.\n\nLa déduction pour investissement reste, en 2026, le principal levier fiscal. Selon les informations publiques du SPF Finances, le taux est de 40 % pour les PME et indépendants, et de 30 % pour les grandes sociétés, sur un investissement neuf d'au moins 1.000 € utilisé à des fins professionnelles en Belgique. Concrètement, sur une borne professionnelle ou une borne installée chez un dirigeant et utilisée pour son véhicule de fonction, l'effet fiscal peut être substantiel selon la structure juridique.\n\nIl faut toutefois distinguer clairement deux cas. Une borne installée chez un particulier strict, sans usage professionnel, ne donne plus droit à aucun avantage fédéral direct. Une borne installée dans un cadre professionnel (PME, indépendant, dirigeant, flotte) entre dans une logique de déduction d'investissement, avec des conditions de durée d'amortissement et d'usage professionnel à respecter.\n\nLa déduction majorée fédérale pour les bornes accessibles au public, qui avait permis à beaucoup d'entreprises de financer leur transition entre 2021 et 2024, n'est plus applicable aux investissements réalisés après le 31 août 2024, selon les sources fiscales publiques disponibles.\n\nCôté régional, les leviers professionnels existent toujours. À Bruxelles, la Prime Utilitaire électrique inclut explicitement les bornes de recharge dans le périmètre du financement, à hauteur de 40 % des dépenses éligibles et jusqu'à 16.000 € par véhicule, avec un plafond annuel de 48.000 € par bénéficiaire. En Wallonie, le prêt Easy'Green de Wallonie Entreprendre peut financer le projet jusqu'à un million d'euros.\n\nMon conseil de terrain pour les indépendants : ne pas raisonner seulement \"prime\". Le calcul réel se fait sur la déduction d'investissement, l'amortissement, l'optimisation TVA si l'usage professionnel est majoritaire, et le coût évité par rapport à la recharge publique. Sur un véhicule de fonction qui parcourt 25.000 km par an, c'est souvent là que se trouve le vrai retour sur investissement, bien plus que dans une éventuelle prime.\n\nPour une analyse personnalisée tenant compte de votre statut, de votre véhicule et de votre installation existante, vous pouvez demander un /devis-analyse/ détaillé.",
      },
      {
        id: "avis-terrain-cout-economies",
        title:
          "Notre avis terrain : ce qui coûte vraiment, ce qu'on économise",
        body: "Quand un client me demande si \"ça vaut encore la peine\", je réponds toujours la même chose : la rentabilité d'une borne en 2026 ne se joue plus sur la prime, mais sur l'usage et le couplage.\n\nLe coût d'installation dépend de plusieurs facteurs concrets : la distance entre le tableau et l'emplacement de la borne, la nécessité ou non de tirer un nouveau circuit dédié, la puissance choisie (3,7 kW ou 7,4 kW en monophasé, 11 kW ou 22 kW en triphasé selon la capacité du compteur), et le type de borne (basique ou intelligente, unidirectionnelle ou bidirectionnelle). Sur le terrain, l'écart entre une pose simple et une installation nécessitant un renforcement du tableau peut facilement aller du simple au triple. C'est pour cela qu'un installateur sérieux commence toujours par évaluer la capacité disponible du tableau et de l'arrivée électrique avant de proposer une puissance, pour éviter un surdimensionnement coûteux et inutile.\n\nCôté économies réelles, deux leviers se cumulent. D'abord, le simple fait de recharger chez soi reste structurellement moins cher qu'utiliser la recharge publique rapide, surtout si vous exploitez les heures creuses du tarif bi-horaire. Ensuite, et c'est là que ça devient intéressant, coupler la borne à une installation /services/panneaux-photovoltaiques/ existante permet d'augmenter le taux d'autoconsommation solaire, ce qui améliore mécaniquement le retour sur investissement de l'ensemble du système.\n\nUne borne intelligente permet de prioriser l'énergie solaire produite, de moduler la puissance pour ne pas faire déclencher le compteur, et de programmer la recharge sur des plages tarifaires avantageuses. Sur une année, l'écart entre une borne \"basique\" qui tire sur le réseau au tarif plein et une borne intelligente couplée au solaire peut représenter plusieurs centaines d'euros, sans aucune prime.\n\nEnfin, un point souvent oublié : une borne installée, déclarée et conforme valorise le bien immobilier sur le marché de la revente. Ce n'est pas un avantage fiscal, mais c'est une valeur réelle.\n\nMon avis sincère : ne pas attendre une hypothétique prime qui ne viendra peut-être pas. En revanche, soigner le dimensionnement, exiger la TVA 6 % quand on y a droit, déclarer la borne au gestionnaire de réseau et passer un contrôle RGIE en règle : c'est ça qui sécurise vraiment l'investissement.",
        tableData: {
          caption:
            "Récapitulatif des leviers financiers disponibles en 2026 selon le profil",
          headers: ["Profil", "Levier disponible en 2026", "Source"],
          rows: [
            [
              "Particulier — borne à domicile",
              "TVA 6 % si logement > 10 ans, fourniture + pose même facture",
              "SPF Finances",
            ],
            [
              "Particulier — borne à domicile",
              "Réduction d'impôt fédérale supprimée à partir de l'exercice 2026",
              "SPF Finances",
            ],
            [
              "Indépendant / PME",
              "Déduction pour investissement 40 % (investissement neuf ≥ 1.000 €)",
              "SPF Finances Entreprises",
            ],
            [
              "Grande société",
              "Déduction pour investissement 30 %",
              "SPF Finances Entreprises",
            ],
            [
              "PME bruxelloise (utilitaire électrique)",
              "Prime Utilitaire jusqu'à 40 %, plafond 16.000 € par véhicule",
              "Economie-Emploi Brussels",
            ],
            [
              "Indépendant / entreprise wallonne",
              "Prêt Easy'Green jusqu'à 1 M€, sans frais de dossier",
              "Wallonie Entreprendre",
            ],
          ],
        },
      },
    ],
    faq: [
      {
        question:
          "Puis-je encore bénéficier de la réduction d'impôt fédérale pour ma borne installée en 2026 ?",
        answer:
          "Non. Selon le SPF Finances, la réduction d'impôt fédérale pour borne de recharge à domicile ne s'appliquait qu'aux dépenses payées entre le 1er septembre 2021 et le 31 août 2024 inclus. Elle est totalement supprimée à partir de l'exercice d'imposition 2026. Si vous installez une borne en 2026 dans le cadre privé, vous ne pouvez plus invoquer cette réduction dans votre déclaration. Le seul vrai levier fiscal qui reste accessible aux particuliers est la TVA réduite à 6 % sur la fourniture et l'installation, à condition que le logement ait plus de 10 ans.",
      },
      {
        question:
          "Quelles sont les conditions exactes pour obtenir la TVA à 6 % sur ma borne ?",
        answer:
          "Quatre conditions cumulatives doivent être réunies. Premièrement, la borne doit être fournie ET installée par un installateur professionnel sur la même facture. Deuxièmement, l'habitation doit avoir plus de 10 ans. Troisièmement, elle doit servir majoritairement à des fins privées (au moins 50 % de la surface). Quatrièmement, la borne doit être installée dans le bâtiment, le garage ou contre la façade extérieure. Si la borne est posée plus loin (jardin, allée éloignée), le taux passe à 21 %. Une attestation TVA est généralement remise par l'installateur.",
      },
      {
        question:
          "Dois-je vraiment déclarer ma borne au gestionnaire de réseau ?",
        answer:
          "Oui, c'est une obligation légale, pas une option. Le décret wallon du 15 octobre 2022 impose la déclaration de toute borne de recharge à ORES, RESA, AIEG, AIESH ou REW selon votre commune. À Bruxelles, Sibelga impose la même obligation. Cette déclaration permet au gestionnaire de réseau d'anticiper la charge sur le réseau local. La déclaration se fait en ligne, via un formulaire dédié, en indiquant la puissance, la marque et le code EAN de votre compteur. Un installateur sérieux vous accompagne dans cette démarche ou la prend en charge.",
      },
      {
        question:
          "Suis-je obligé de faire contrôler ma borne par un organisme agréé ?",
        answer:
          "Oui. Le RGIE impose un contrôle de conformité avant la mise en service d'une borne de recharge. Depuis l'entrée en vigueur du RGIE 2026 le 1er avril 2026, ce contrôle doit être réalisé par un organisme agréé indépendant — l'installateur ne peut plus signer son propre travail. L'organisme vérifie le schéma unifilaire, le plan de position, la documentation technique de la borne et la conformité du circuit dédié. Sans ce procès-verbal de conformité, la mise sous tension n'est pas autorisée et toute intervention ultérieure peut être refusée.",
      },
      {
        question:
          "Est-ce qu'une borne couplée à des panneaux solaires reste rentable en 2026 ?",
        answer:
          "Oui, surtout si vous l'utilisez correctement. Coupler la borne à une installation photovoltaïque existante permet d'augmenter le taux d'autoconsommation, ce qui améliore le retour sur investissement global du système solaire. Concrètement, recharger en journée sur ses propres panneaux coûte structurellement moins cher que recharger sur le réseau, même en heures creuses. Une borne intelligente peut prioriser l'énergie solaire produite et moduler la puissance pour ne pas tirer du réseau. Le levier financier ne vient plus d'une prime, mais du kilowattheure que vous ne payez pas.",
      },
    ],
    sources_cited: [
      "https://fin.belgium.be/fr/particuliers/avantages-fiscaux/bornes-de-recharge-pour-voitures-electriques",
      "https://energie.wallonie.be/home/au-quotidien/dans-les-deplacements/electromobilite/bornes-de-recharge.html",
      "https://economie-emploi.brussels/prime-utilitaire-electrique",
      "https://www.vlaanderen.be/en/moving-housing-and-energy/mijn-verbouwpremie-in-english",
      "https://www.vandelanotte.be/en/news/1038",
      "https://www.ores.be/particulier/declarer-borne",
      "https://www.sibelga.be/asset/file/e10a9658-4e23-11ee-9d39-005056970ffd",
      "https://www.certinergie.be/pro/services/controle-electrique/controle-electrique-domestique/borne-de-recharge/",
      "https://www.certinergie.be/fr/2026/06/04/rgie-2026-panneaux-solaires-batterie-borne/",
      "https://www.stagobel.be/fr/news/wijziging-normering-laadpunten-voor-elektrische-wagens",
      "https://finances.belgium.be/fr/entreprises/impot_des_societes/avantages_fiscaux/bornes-recharge-vehicules-electriques",
      "https://vectura.be/deductibilite-borne-de-recharge-pour-entreprise-wallonie-2024-2025/",
      "https://www.wallonie-entreprendre.be/",
      "https://www.tesla-mag.com/les-normes-a-respecter-pour-installer-une-borne-de-recharge-en-belgique/",
      "https://www.belgotest.be/controle-electrique/borne-de-recharge",
    ],
    lastUpdated: "2026-06",
    word_count: 1480,
  },

  "tarif-impact-wallonie-explication": {
    slug: "tarif-impact-wallonie-explication",
    title: "Tarif IMPACT Wallonie 2026 : explication complète et impact PV",
    metaDescription:
      "Tarif IMPACT Wallonie 2026 : qui est concerné, nouvelles plages bihoraires, impact sur le PV et les batteries. Explication claire par un ancien inspecteur.",
    h1: "Tarif IMPACT en Wallonie : ce qui change vraiment en 2026",
    introduction:
      "Depuis le 1er janvier 2026, la facture d'électricité wallonne ne se lit plus comme avant. Trois formules de distribution coexistent désormais pour les ménages raccordés en basse tension : le monohoraire historique, un bihoraire aux plages horaires entièrement redessinées, et un nouveau tarif optionnel appelé IMPACT. Ce dernier introduit pour la première fois en Wallonie une logique à trois niveaux de prix répartis sur cinq plages horaires, accessible uniquement via un compteur communicant. La question que me posent presque tous les clients est simple : est-ce que ça vaut la peine, est-ce que mes panneaux deviennent plus ou moins rentables, et faut-il une batterie pour en profiter ? Je l'aborde ici sans jargon, en m'appuyant sur les communications officielles CWaPE et ORES disponibles à la date de publication. L'objectif n'est pas de vous vendre un tarif : c'est de vous donner une grille de lecture honnête, fondée sur les chiffres publics, avec les limites de chaque scénario.",
    sections: [
      {
        id: "tarif-impact-qui-est-concerne",
        title: "Qu'est-ce que le tarif IMPACT et qui est concerné ?",
        body: "Le tarif IMPACT est un nouveau tarif de distribution wallon, entré en vigueur le 1er janvier 2026. Il a été approuvé par la CWaPE le 26 juin 2025 pour la période 2026-2029, en même temps que les nouvelles structures tarifaires d'ORES, RESA, AIEG et AIESH.\n\nPremière chose à comprendre : ce n'est pas un nouveau prix de l'énergie. Le tarif IMPACT ne concerne que la part distribution de votre facture, c'est-à-dire les coûts du réseau basse tension. Cette part représentait environ un quart de la facture d'électricité d'un ménage en 2025. Le prix de l'énergie chez votre fournisseur (la commodity) et les taxes fédérales ne changent pas à cause d'IMPACT.\n\nDeuxième point, essentiel : IMPACT est optionnel et conditionné. Il n'est accessible qu'aux utilisateurs dont la puissance de raccordement est inférieure ou égale à 56 kVA et qui sont équipés d'un compteur électronique avec fonction de communication active. Sans compteur communicant, pas d'IMPACT. C'est pour cette raison que le déploiement des compteurs communicants s'accélère : les gestionnaires de réseau wallons doivent équiper 80 % des prosumers de plus de 5 kWe d'ici fin 2029.\n\nL'objectif derrière IMPACT est explicite dans les documents publics : inciter les consommateurs à déplacer leurs gros usages électriques (véhicule électrique, pompe à chaleur, boiler électrique) vers les heures où les coûts de réseau sont les plus avantageux. C'est aussi un outil de gestion du réseau : en encourageant la consommation pendant les heures de production solaire (11h-17h), la Wallonie cherche à réduire la surtension du réseau et donc le risque de déconnexion des installations photovoltaïques en milieu de journée.\n\nConcrètement, si vous avez un compteur classique non communicant, IMPACT ne vous concerne pas en 2026. Si vous avez un compteur communicant, c'est une option à étudier sérieusement, surtout si vous rechargez un véhicule électrique ou si vous avez une pompe à chaleur.",
      },
      {
        id: "structure-2026-plages-horaires",
        title: "La structure 2026 : heures pleines, creuses, et le poids des pics",
        body: "Trois formules de distribution coexistent désormais. Le monohoraire reste inchangé dans son principe : un même prix unitaire 24h/24. Le bihoraire change ses plages horaires. Et IMPACT introduit trois niveaux de prix répartis sur cinq plages.\n\nPour le nouveau bihoraire, à partir du 1er janvier 2026 : heures creuses de 11h à 17h et de 22h à 7h, heures pleines de 7h à 11h et de 17h à 22h, 7 jours sur 7. C'est un changement important : les week-ends ne sont plus entièrement en heures creuses. En contrepartie, le système offre 105 heures creuses par semaine, soit environ 15 heures par jour. Le basculement est automatique : votre gestionnaire de réseau reprogramme le compteur à distance, qu'il soit digital ou électromécanique. Vous n'avez aucune démarche à faire.\n\nPour IMPACT, la grille est plus fine. ECO (le tarif distribution le moins cher) : de 1h à 7h et de 11h à 17h. MEDIUM : de 7h à 11h et de 22h à 1h. PIC (le tarif distribution le plus cher) : de 17h à 22h. Cette structure traduit deux réalités : le creux solaire de mi-journée et le pic de demande de fin d'après-midi quand tout le monde rentre, allume les plaques, branche la voiture.\n\nUn point honnête : les ratios exacts entre PIC et ECO, ainsi que les prix précis en c€/kWh chez ORES, RESA, AIEG et AIESH ne sont pas reproduits ici. Ils figurent dans les annexes tarifaires CWaPE et varient selon le gestionnaire de réseau. Demandez la grille à jour à votre fournisseur avant toute décision.\n\nÀ retenir aussi : le coût pondéré de la distribution électrique pour un client résidentiel wallon augmente en moyenne de 14 % en 2026 par rapport à 2025. Cette hausse touche tout le monde, indépendamment du choix de tarif. IMPACT ne neutralise pas cette hausse, il permet de mieux la répartir si vos usages sont déplaçables.",
      },
      {
        id: "impact-rentabilite-photovoltaique",
        title: "Le tarif IMPACT change-t-il la rentabilité du photovoltaïque ?",
        body: "C'est la question que j'entends le plus souvent depuis l'annonce d'IMPACT. La réponse honnête : cela dépend de quand vos panneaux ont été installés, et de comment vous consommez.\n\nPour les installations certifiées avant le 1er janvier 2024, le principe de compensation (le « tourniquet ») reste applicable jusqu'au 31 décembre 2030, à condition que les modifications postérieures ne dépassent pas la puissance initiale de plus de 1 kW. Bonne nouvelle complémentaire : le tarif prosumer capacitaire est fixé à 0 €/kW pour la période 2026-2029. La charge capacitaire pour les prosumers concernés par la compensation est donc supprimée. C'est un changement réel et favorable.\n\nPour les installations mises en service à partir du 1er janvier 2024, le régime est différent. Le compteur communicant est obligatoire et gratuit. Il n'y a pas de tarif prosumer : la facture de distribution est calculée uniquement sur les kWh prélevés du réseau, et l'injection est valorisée via la vente du surplus ou le partage d'énergie. Pour ces installations, l'autoconsommation devient la clé économique.\n\nIMPACT s'inscrit dans cette logique. Si vous arrivez à consommer pendant la plage ECO de 11h à 17h, qui coïncide avec la production solaire maximale, vous payez la distribution la moins chère possible sur les kWh restants prélevés du réseau, et vous valorisez au mieux l'autoconsommation. À l'inverse, si vous consommez surtout entre 17h et 22h (PIC), vous payez la part distribution la plus élevée sur les kWh qui ne sont plus couverts par vos panneaux.\n\nPour les prosumers encore éligibles à la compensation, attention : le maintien de la compensation lorsque vous souscrivez à IMPACT dépend de l'offre commerciale de votre fournisseur. Demandez-le par écrit avant tout changement. Sur les pièges classiques à éviter en photovoltaïque, je détaille les questions à poser dans /pieges-a-eviter/.",
      },
      {
        id: "batterie-domestique-pertinence",
        title: "Quand une batterie devient enfin intéressante",
        body: "Pendant longtemps, j'ai été prudent en conseil batterie domestique. Le retour sur investissement, avec la compensation pré-2024 et un bihoraire favorable les week-ends, était souvent difficile à justifier sur la durée de vie utile de la batterie. Avec la structure 2026, le calcul change.\n\nLe mécanisme est simple. Les panneaux photovoltaïques produisent au pic entre 11h et 15h. Dans le nouveau cadre, c'est précisément l'une des plages ECO d'IMPACT. À l'inverse, la plage PIC (17h-22h) est exactement la fenêtre où un ménage typique consomme le plus : repas, douche, télévision, recharge VE. Une batterie domestique stocke l'énergie produite en milieu de journée pour la restituer le soir, donc pour éviter de prélever du réseau pendant le PIC.\n\nPlus l'écart de prix entre la plage PIC et la plage ECO est important, plus la batterie a un sens économique. C'est ce ratio qu'il faut regarder de près, gestionnaire de réseau par gestionnaire de réseau, et année par année, car les tarifs ont été approuvés pour 2026-2029.\n\nQuelques garde-fous d'inspecteur. Premièrement, une batterie ne se justifie pas pour tout le monde. Si vous êtes presque toujours absent en soirée, le pic à éviter n'est plus le vôtre. Deuxièmement, le dimensionnement doit être réaliste : surdimensionner une batterie pour couvrir des cas extrêmes anéantit la rentabilité. Troisièmement, la durée de vie en cycles, la garantie réelle, et la compatibilité avec un éventuel pilotage tarifaire dynamique (en plus d'IMPACT) sont des critères techniques aussi importants que le prix d'achat.\n\nLes pompes à chaleur et les bornes de recharge VE bien pilotées peuvent souvent capturer une partie du gain d'IMPACT sans batterie, simplement en programmant intelligemment leurs cycles. Avant d'acheter une batterie, regardez d'abord ces optimisations. Pour un avis chiffré sur votre cas, je le couvre dans /devis-analyse/.",
      },
      {
        id: "grille-de-decision-tarifs",
        title:
          "Choisir entre IMPACT, monohoraire et bihoraire : la grille de décision",
        body: "Il n'y a pas de tarif universellement meilleur. Il y a un tarif qui correspond à vos usages réels. Voici la grille que j'utilise avec mes clients.\n\nMonohoraire. Reste pertinent si votre consommation est très stable, sans gros postes pilotables, et si vous n'avez pas de compteur communicant. Il a l'avantage de la simplicité : pas de surprise, pas de modulation à gérer.\n\nBihoraire nouvelle version. Convient bien si vous pouvez déplacer une partie significative de votre consommation vers les heures creuses (11h-17h et 22h-7h). Avec environ 15 heures creuses par jour, le nouveau bihoraire reste compétitif pour beaucoup de ménages. Attention : si vous comptiez sur le week-end entier en heures creuses, ce n'est plus le cas. Recalculez vos habitudes.\n\nIMPACT. Devient pertinent dès que vous combinez compteur communicant et au moins un usage électrique lourd que vous pouvez programmer hors PIC (17h-22h) : recharge VE, pompe à chaleur, chauffage d'appoint électrique, ballon d'eau chaude électrique, batterie domestique pilotée. Selon les communications ORES, un ménage wallon moyen qui adapte ses consommations peut économiser environ 13 % sur les coûts de distribution par rapport au bihoraire, et jusqu'à environ 33 % par rapport au monohoraire. Ces chiffres sont des ordres de grandeur, pas une garantie individuelle.\n\nMa méthode en trois étapes. Un, je récupère un mois de données quart-horaires via le compteur communicant pour voir où la consommation se situe réellement. Deux, je compare les trois grilles tarifaires avec ce profil. Trois, je regarde si une optimisation simple (programmation de la pompe à chaleur, décalage de la machine, recharge VE nocturne) suffit, ou s'il faut ajouter une batterie.\n\nDernier point pratique : le passage à IMPACT n'est pas automatique. La démarche se fait via votre fournisseur d'énergie, qui transmet la demande au gestionnaire de réseau. Et IMPACT est réversible : si après quelques mois ça ne colle pas à vos habitudes, vous repassez en bihoraire ou en monohoraire.",
      },
    ],
    faq: [
      {
        question: "Suis-je obligé de passer au tarif IMPACT en 2026 ?",
        answer:
          "Non. Le tarif IMPACT est optionnel. Si vous ne demandez rien à votre fournisseur, vous restez sur votre tarif actuel : monohoraire ou bihoraire. Pour les clients déjà au bihoraire, seules les plages horaires changent automatiquement au 1er janvier 2026 (heures creuses 11h-17h et 22h-7h, heures pleines 7h-11h et 17h-22h, 7 jours sur 7). Le passage à IMPACT, lui, doit être demandé activement via votre fournisseur d'énergie, qui transmettra ensuite la demande au gestionnaire de réseau (ORES, RESA, AIEG ou AIESH).",
      },
      {
        question:
          "Faut-il un compteur communicant pour bénéficier du tarif IMPACT ?",
        answer:
          "Oui, c'est une condition non négociable. Le tarif IMPACT n'est accessible qu'aux utilisateurs équipés d'un compteur électronique avec fonction de communication active, et dont la puissance de raccordement reste inférieure ou égale à 56 kVA. Sans ce compteur, votre installation ne peut pas séparer les cinq plages horaires d'IMPACT. À noter aussi : les utilisateurs dont le compteur n'a pas été remplacé par un compteur communicant avant le 1er janvier 2026 basculent automatiquement en monohoraire, même s'ils étaient au bihoraire auparavant.",
      },
      {
        question:
          "Si je passe au tarif IMPACT, je perds la compensation annuelle de mes panneaux ?",
        answer:
          "Pas nécessairement, mais c'est à vérifier. Le principe de compensation (le « tourniquet ») reste applicable jusqu'au 31 décembre 2030 pour les installations photovoltaïques certifiées avant le 1er janvier 2024, sous conditions. Le maintien de cette compensation lorsque vous souscrivez à IMPACT dépend de l'offre commerciale proposée par votre fournisseur d'énergie. Avant de basculer, demandez-lui par écrit si son contrat IMPACT préserve ou non votre régime de compensation. C'est le bon réflexe d'inspecteur : on lit le contrat avant de signer.",
      },
      {
        question: "Le tarif IMPACT est-il réversible ?",
        answer:
          "Oui. Si IMPACT ne correspond pas à vos usages réels après quelques mois, vous pouvez repasser au bihoraire ou au monohoraire en faisant la demande à votre fournisseur d'énergie. C'est un point important : ce n'est pas un engagement à vie. Cela permet de tester le tarif sur un cycle complet, idéalement sur une année, pour voir si vos habitudes de consommation (recharge VE la nuit, pompe à chaleur, machines en milieu de journée) collent vraiment à la grille ECO/MEDIUM/PIC.",
      },
      {
        question: "Mes panneaux installés en 2026 sont-ils concernés ?",
        answer:
          "Oui, et différemment des installations plus anciennes. Les installations photovoltaïques mises en service depuis le 1er janvier 2024 ne paient pas de tarif prosumer : la facture de distribution est calculée uniquement sur les kWh prélevés du réseau, l'injection étant valorisée séparément (vente du surplus ou partage d'énergie). Le compteur communicant est obligatoire et son placement est gratuit. Pour ces nouveaux prosumers, IMPACT peut être particulièrement intéressant si l'on adapte la consommation aux plages ECO de la mi-journée, lorsque les panneaux produisent au maximum.",
      },
    ],
    sources_cited: [
      "https://www.cwape.be/documents-recents/communique-de-presse-changements-en-2026-au-niveau-des-tarifs-de-distribution",
      "https://www.ores.be/comprendre-ma-facture/bihoraire",
      "https://www.ores.be/comprendre-ma-facture/impact",
      "https://www.ores.be/comprendre-ma-facture/tarifs-distribution-2026",
      "https://www.wallonie.be/fr/actualites/le-1er-janvier-2026-le-bihoraire-change-dhoraire",
      "https://www.cwape.be/documents-recents/communique-de-presse-tarifs-periodiques-de-distribution-delectricite-dores-resa",
      "https://www.cwape.be/sites/default/files/cwape-documents/CP_tarifs%20distribution%202026-2029-final.pdf",
      "https://www.cwape.be/node/5205",
      "https://www.ores.be/particulier/prosumer-a-partir-de-2024",
      "https://www.ores.be/particulier/panneaux-photovoltaiques",
      "https://energie.wallonie.be/home/au-quotidien/a-la-maison/gerer-ses-appareils-electriques/tarification.html",
    ],
    lastUpdated: "2026-06",
    word_count: 1480,
  },

  "certificats-verts-bruxelles-2026": {
    slug: "certificats-verts-bruxelles-2026",
    title: "Certificats verts Bruxelles 2026 : ce qui change vraiment",
    metaDescription:
      "Nouveaux coefficients CV au 1er avril 2026, obligation RESCert, calcul d'octroi : ce qu'un propriétaire bruxellois doit savoir avant d'installer.",
    h1: "Certificats verts à Bruxelles en 2026 : le guide d'un ancien inspecteur",
    introduction:
      "Si vous lisez cette page, vous êtes probablement en train d'arbitrer une décision concrète : faut-il encore installer du photovoltaïque à Bruxelles en 2026, et combien rapportent réellement les certificats verts une fois que tous les changements annoncés sont entrés en vigueur. La réponse honnête est qu'elle dépend de trois éléments précis : la date de mise en service de l'installation, sa puissance, et le profil de consommation du ménage. Le mécanisme reste, mais ses paramètres ont bougé. Au 1er avril 2026, les coefficients multiplicateurs sont revus à la baisse pour les installations de plus de 5 kWc, et depuis le 1er janvier 2026 l'accès même aux CV est conditionné à un installateur certifié RESCert. En tant qu'ancien inspecteur en installation électrique, certifié RESCERT, je vais détailler ce que disent les textes officiels, ce qui change concrètement, et comment lire correctement un calcul de rentabilité photovoltaïque bruxellois en 2026.",
    sections: [
      {
        id: "comment-fonctionne-le-systeme-des-certificats-verts-a-bruxelles",
        title:
          "Comment fonctionne le système des certificats verts à Bruxelles ?",
        body: "Le mécanisme des certificats verts à Bruxelles existe depuis 2006. Il est encadré par l'arrêté du Gouvernement de la Région de Bruxelles-Capitale relatif à la promotion de l'électricité verte, et supervisé par Brugel, le régulateur bruxellois de l'énergie. Sibelga, gestionnaire unique du réseau de distribution, gère de son côté le raccordement, le compteur, et l'encodage des index.\n\nLe principe est simple à énoncer mais souvent mal compris. Un certificat vert est octroyé pour chaque 217 kg de CO₂ évités, ce qui correspond à un taux de base de 1,81 CV par MWh d'électricité produite pour les installations sans combustible : solaire, éolien, hydraulique. Ce taux de base est ensuite multiplié par un coefficient qui dépend de la filière et de la taille de l'installation. Pour le résidentiel photovoltaïque, Brugel calibre ce coefficient pour viser une durée de retour sur investissement, en payback simple, d'environ 7 ans.\n\nLes CV sont délivrés pendant 10 ans à compter de la date de certification de l'installation. Pour les installations jusqu'à 36 kWc, Brugel se base sur le rapport de conformité RGIE pour certifier, sans visite séparée. Au-delà de 36 kWc, une visite par un organisme accrédité est requise. Une fois l'installation certifiée, les CV sont calculés et octroyés dans les 15 jours calendrier qui suivent l'encodage des index sur la plateforme Sibelga.\n\nUn point structurel à comprendre : le CV n'a pas de valeur tant qu'il n'est pas vendu. Les fournisseurs d'électricité actifs en Région bruxelloise ont une obligation annuelle de quota qu'ils doivent couvrir en achetant des CV auprès des producteurs locaux. C'est cette demande qui crée le marché secondaire. En parallèle, Elia est légalement obligée de racheter les CV à un prix minimum garanti de 65 € par CV, ce qui constitue le plancher de tout calcul de rentabilité sérieux.",
      },
      {
        id: "les-nouveaux-taux-2026-ce-qui-change-le-1er-avril",
        title: "Les nouveaux taux 2026 — ce qui change le 1er avril",
        body: "La réforme des coefficients multiplicateurs a été publiée au Moniteur belge le 2 octobre 2025 et s'applique aux installations photovoltaïques mises en service à partir du 1er avril 2026. La distinction par tranche de puissance est essentielle, parce que l'impact est très différent selon le segment.\n\nPour les installations résidentielles jusqu'à 5 kWc, qui couvrent la majorité des toitures bruxelloises, le taux d'octroi reste inchangé. C'est le point le plus important pour un propriétaire qui hésite : la baisse annoncée dans la presse ne concerne pas le résidentiel standard. Pour les installations de 5 à 36 kWc, le coefficient baisse de 11 %. Pour les installations de 36 à 100 kWc, la baisse atteint 45 %. Au-delà de 100 kWc, plus aucun CV n'est octroyé : Brugel estime la rentabilité de ces installations à environ 6 ans sans aide, ce qui justifie la suppression du soutien.\n\nLa logique de Brugel reste cohérente : viser un payback de 7 ans environ pour le résidentiel, et retirer le soutien là où le marché est déjà rentable seul. Concrètement, cela veut dire que pour un ménage qui installe une toiture de 4 ou 5 kWc, le mécanisme 2026 est équivalent à celui de 2025. Pour une PME ou une copropriété visant 50 ou 80 kWc, la chute est réelle et le calcul doit être refait.\n\nLes coefficients exacts par tranche sont publiés par Brugel ; je préfère ne pas en citer ici un chiffre arrondi qui circulerait ensuite hors contexte. Avant tout dimensionnement, il faut récupérer la version officielle en vigueur à la date prévue de mise en service, car c'est cette date — et non la date de signature du devis — qui détermine le taux applicable.",
      },
      {
        id: "combien-rapportent-les-cv-pour-une-installation-residentielle-en-2026",
        title:
          "Combien rapportent les CV pour une installation résidentielle en 2026 ?",
        body: "Pour donner un ordre de grandeur tangible, je m'appuie sur l'exemple publié par Brugel lui-même. Une installation de 6 kWc reçoit 1,739 CV par MWh produit, soit environ 8,3 CV par an pour une production de 4 800 kWh. Sur les 10 ans pendant lesquels l'installation reçoit des CV, cela représente environ 83 CV au total.\n\nLa conversion en euros est plus délicate. Le prix plancher légal est de 65 € par CV, garanti par Elia. Le prix sur le marché secondaire, c'est-à-dire la vente directe à un fournisseur tenu par son quota, peut être supérieur, mais il varie d'un trimestre à l'autre et d'un fournisseur à l'autre. Brugel publie des moyennes de prix mais ne fixe pas de valeur de référence stable. Toute estimation de revenu sur 10 ans qui ne tient pas compte de cette variabilité est trompeuse.\n\nDeux canaux de vente coexistent. La vente à Elia se fait via l'extranet Brugel, en sélectionnant l'option Transfert vers Elia ; le paiement intervient au plus tard le 30 juin de l'année, ou dans les 30 jours après réception de la facture si le vendeur est assujetti à la TVA. La vente à un fournisseur se négocie individuellement et permet en principe d'obtenir un prix supérieur, mais demande un peu d'arbitrage actif.\n\nUn point essentiel souvent oublié : la rentabilité d'une installation photovoltaïque bruxelloise en 2026 ne repose pas sur les CV seuls. Depuis la fin du principe de compensation en novembre 2021, chaque kWh autoconsommé évite l'achat d'électricité au tarif retail complet, tandis que l'électricité injectée est rémunérée à un tarif beaucoup plus faible, fixé par le fournisseur. Concrètement, un bon dimensionnement vise d'abord à maximiser l'autoconsommation. Les CV viennent en complément, pas en cœur du modèle économique. C'est précisément ce point que je détaille dans la page /pieges-a-eviter/ : un installateur qui vend sa proposition uniquement sur le revenu des CV présente un calcul incomplet.",
        tableData: {
          caption:
            "Coefficients CV applicables aux installations PV mises en service à partir du 1er avril 2026 — synthèse des changements officiels",
          headers: [
            "Tranche de puissance",
            "Évolution au 1er avril 2026",
            "Public typique",
          ],
          rows: [
            ["≤ 5 kWc", "Aucune modification", "Résidentiel standard"],
            [
              "5 à 36 kWc",
              "-11 %",
              "Grandes toitures résidentielles, petit tertiaire",
            ],
            ["36 à 100 kWc", "-45 %", "PME, copropriétés, écoles"],
            [
              "> 100 kWc",
              "Plus aucun CV octroyé",
              "Grandes installations tertiaires",
            ],
          ],
        },
      },
      {
        id: "obligation-installateur-rescert-depuis-janvier-2026",
        title: "L'obligation d'un installateur RESCert depuis janvier 2026",
        body: "Depuis le 1er janvier 2026, toute nouvelle installation photovoltaïque jusqu'à 5 kWc en Région bruxelloise doit être réalisée par un installateur disposant de la certification RESCert PV pour ouvrir droit aux certificats verts. C'est un changement structurel pour le marché bruxellois, et il a des conséquences très concrètes pour le propriétaire.\n\nLa logique de cette obligation est la qualité d'installation. RESCert est une certification de personnes, attribuée à des installateurs ayant suivi une formation reconnue et réussi un examen. Elle existait déjà en Wallonie comme condition d'accès au régime de soutien ; Bruxelles l'aligne. L'objectif est de réduire les installations mal dimensionnées, mal câblées, ou mal protégées que je vois encore régulièrement en intervention.\n\nLa vérification se fait au moment de la demande de certification auprès de Brugel. Sans installateur certifié RESCert PV, le propriétaire n'a tout simplement pas accès aux CV. La liste officielle des installateurs certifiés est publiée et tenue à jour sur RESCert.be, et c'est cette liste qui sert de référence en cas de contrôle.\n\nUne clause grand-père est prévue. Les installations dont l'engagement contractuel ou le démarrage des travaux est documenté en 2025 restent éligibles même si l'installateur n'est pas certifié RESCert. La preuve documentaire est ici clé : devis signé daté, acompte versé, bon de commande, photos de chantier. Si vous êtes dans ce cas, conservez tout. Au moindre doute, demandez à votre installateur de l'écrire noir sur blanc.\n\nÀ partir de janvier 2026, la première question à poser à tout installateur sollicité doit donc être : êtes-vous certifié RESCert PV, et puis-je vérifier votre nom sur la liste officielle. Si la réponse n'est pas un oui clair, le dossier CV ne passera pas. C'est aussi pour cette raison que je traite la sélection d'installateur en détail dans /devis-analyse/, où je décris ce qu'un devis sérieux doit contenir avant signature.",
      },
    ],
    faq: [
      {
        question:
          "Les certificats verts valent-ils encore le coup à Bruxelles en 2026 pour une maison ?",
        answer:
          "Pour une installation résidentielle jusqu'à 5 kWc, le taux d'octroi reste inchangé au 1er avril 2026 : le mécanisme conserve donc sa valeur d'origine, calibré par Brugel pour viser un retour sur investissement d'environ 7 ans. La rentabilité réelle dépend cependant fortement du taux d'autoconsommation, du prix de revente des CV au-dessus du plancher de 65 €, et du tarif d'injection négocié avec votre fournisseur. Les CV restent un complément utile, mais ne constituent pas à eux seuls le cœur du modèle économique.",
      },
      {
        question:
          "Mon installation est commandée fin 2025 mais posée en 2026. Suis-je concerné par l'obligation RESCert ?",
        answer:
          "Une clause grand-père couvre les installations dont l'engagement contractuel ou le démarrage des travaux est documenté en 2025. Concrètement, un devis signé et daté, un acompte versé, ou un début de chantier prouvé en 2025 permettent de rester éligible aux CV même si l'installateur n'est pas certifié RESCert PV. Conservez l'ensemble des pièces datées : c'est ce dossier qui sera examiné par Brugel lors de la demande de certification.",
      },
      {
        question: "Combien de CV reçoit une installation de 6 kWc à Bruxelles ?",
        answer:
          "Selon l'exemple publié par Brugel, une installation de 6 kWc bénéficie d'un taux de 1,739 CV par MWh produit. Pour une production typique de 4 800 kWh par an, cela représente environ 8,3 CV annuels, octroyés pendant 10 ans à compter de la date de certification. Vendus au prix plancher garanti de 65 € par Elia, ces CV constituent un revenu plancher ; sur le marché secondaire auprès d'un fournisseur, le prix peut être supérieur mais varie selon la période.",
      },
      {
        question: "À quel prix puis-je vendre mes certificats verts ?",
        answer:
          "Elia est légalement tenue de racheter les CV à un prix minimum garanti de 65 € par CV : c'est votre filet de sécurité. La vente se fait via l'extranet Brugel en option Transfert vers Elia, avec paiement au plus tard le 30 juin de l'année. Vous pouvez aussi vendre directement à un fournisseur d'électricité soumis à un quota, généralement à un prix légèrement supérieur, à négocier au cas par cas. Brugel publie des moyennes de marché à titre indicatif.",
      },
      {
        question:
          "Faut-il déclarer mon installation photovoltaïque même si elle est petite ?",
        answer:
          "Oui, toute installation photovoltaïque doit être déclarée à Sibelga dans les 30 jours suivant sa mise en service, quelle que soit sa puissance. Depuis le 1er mai 2025, Sibelga applique un tarif de non-déclaration aux installations non communiquées. La déclaration est par ailleurs indispensable pour obtenir le compteur intelligent, lui-même obligatoire pour toute production d'énergie en Région bruxelloise depuis le déploiement à grande échelle démarré en octobre 2023.",
      },
    ],
    sources_cited: [
      "https://environnement.brussels/pro/news/2025/panneaux-photovoltaiques-nouvelles-mesures-en-2026-pour-les-certificats-verts",
      "https://environnement.brussels/citoyen/news/2025/panneaux-photovoltaiques-nouvelles-mesures-en-2026-pour-les-certificats-verts",
      "https://brugel.brussels/themes/energies-renouvelables-11/mecanisme-des-certificats-verts-35",
      "https://brugel.brussels/themes/energies-renouvelables-11/conditions-pour-la-certification-286",
      "https://brugel.brussels/themes/energies-renouvelables-11/vendre-les-certificats-verts-38",
      "https://brugel.brussels/themes/energies-renouvelables-11/certificats-verts-503",
      "https://www.sibelga.be/en/connections-meters/smart-meters/when-will-i-get-a-smart-meter",
      "https://www.sibelga.be/en/news/2025/03/sibelga-emphasises-the-importance-of-declaring-all-photovoltaic-installations-within-30-days",
      "https://www.sibelga.be/en/connections-meters/rates/net-usage-rates/end-of-compensation-principle-for-prosumers",
    ],
    lastUpdated: "2026-06",
    word_count: 1380,
  },
};

/** Returns the guide for a given slug, or undefined if it does not exist. */
export function getPillarGuide(slug: string): PillarGuide | undefined {
  return pillarGuides[slug];
}

/** Returns every pillar guide, in the declaration order of `pillarGuides`. */
export function getAllPillarGuides(): PillarGuide[] {
  return Object.values(pillarGuides);
}
