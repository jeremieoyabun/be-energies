/**
 * Content used by the PDF generator at /api/guide/pieges.
 * Keep this synchronised with the corresponding chapters of
 * /pieges-a-eviter so visitors who read both find the same recommendations.
 */

export interface PiegePdfSection {
  number: number;
  severity: "critique" | "important" | "attention";
  title: string;
  intro: string;
  redFlags: string[];
  checklist: string[];
  /** Absolute on-disk path to the chapter image (resolved server-side). */
  imageRelativePath?: string;
}

export const GUIDE_TITLE =
  "Les 10 pièges à éviter avant de signer avec un installateur";
export const GUIDE_SUBTITLE =
  "Guide pratique par Benoît Dezso, ancien inspecteur certifié RESCERT";

export const GUIDE_INTRO_PARAGRAPHS = [
  "Ce guide n'est pas une liste de peurs. C'est un outil de décision.",
  "Pendant des années, j'ai inspecté des installations électriques et photovoltaïques en Belgique pour le compte d'organismes agréés. J'ai rédigé des rapports — conformes ou non conformes. Et j'ai vu, à de nombreuses reprises, les mêmes erreurs revenir. Toujours les mêmes. Toujours payées par les propriétaires.",
  "Si vous lisez ce guide et posez les questions associées à votre installateur, vous éliminerez la grande majorité des risques d'une mauvaise installation — qu'elle soit photovoltaïque, batterie, borne de recharge ou pompe à chaleur.",
];

export const SEVERITY_LABEL = {
  critique: "Risque critique",
  important: "Risque important",
  attention: "Point de vigilance",
} as const;

export const piegePdfSections: PiegePdfSection[] = [
  {
    number: 1,
    severity: "critique",
    title: "Les fausses promesses de primes en Wallonie",
    intro:
      "En 2026, il n'existe plus de prime régionale pour le photovoltaïque résidentiel en Wallonie. Pourtant, certains démarcheurs continuent d'évoquer des « primes régionales » ou « aides communales » pour justifier un prix gonflé.",
    redFlags: [
      "L'installateur mentionne une prime sans pouvoir la nommer précisément.",
      "Le prix brut est artificiellement élevé pour mettre en valeur la « prime ».",
      "Aucun lien officiel vers le dispositif évoqué n'est fourni.",
    ],
    checklist: [
      "Demander le nom exact de la prime et l'organisme payeur.",
      "Vérifier sur le site de la Région wallonne si le dispositif existe.",
      "Comparer le prix final avec d'autres devis sans « prime ».",
      "Ne jamais signer sur base d'une prime non vérifiée.",
    ],
    imageRelativePath: "public/img/pieges/primes.webp",
  },
  {
    number: 2,
    severity: "critique",
    title: "Les fausses garanties : 25 ans sur le papier, 0 ans dans la réalité",
    intro:
      "La garantie du fabricant ne couvre pas la main-d'œuvre. Si l'installateur disparaît, vous gardez un nouveau panneau dans son carton, mais personne pour le poser. L'onduleur, lui, a souvent une garantie 2 à 3 fois plus courte que les panneaux.",
    redFlags: [
      "Mention « garantie 25 ans » sans détail de ce qui est couvert.",
      "Pas de garantie main-d'œuvre / déplacement séparée.",
      "Entreprise récente sans antécédents vérifiables.",
    ],
    checklist: [
      "Demander la garantie main-d'œuvre par écrit.",
      "Vérifier l'ancienneté et le numéro BCE de l'entreprise.",
      "Vérifier la durée de garantie de l'onduleur (souvent 5-12 ans).",
      "Obtenir un document écrit détaillant exactement ce qui est couvert.",
    ],
    imageRelativePath: "public/img/pieges/02-garanties.webp",
  },
  {
    number: 3,
    severity: "important",
    title: "Comparer des devis sur du matériel non équivalent",
    intro:
      "Trois devis à 9 500, 11 000 et 12 500 €, et le réflexe est de prendre le moins cher. Mais les trois ne proposent jamais la même chose : panneaux, onduleur, fixation, câblage, visite technique — tout varie. Le devis le moins cher est rarement le moins cher à 25 ans.",
    redFlags: [
      "Devis vague sur les marques et modèles (« panneau 400 W »).",
      "Pas de mention du type d'onduleur (string vs micro-onduleur).",
      "Section de câble et protections AC non spécifiées.",
      "Pas de visite technique préalable incluse.",
    ],
    checklist: [
      "Marque, modèle et puissance de chaque panneau.",
      "Type et marque de l'onduleur.",
      "Système de fixation et certification.",
      "Section de câble et protection électrique.",
      "Visite technique préalable incluse.",
      "Mise en service et contrôle de conformité inclus.",
    ],
    imageRelativePath: "public/img/pieges/03-devis-compare.webp",
  },
  {
    number: 4,
    severity: "critique",
    title: "L'onduleur mal installé : le danger invisible",
    intro:
      "L'onduleur est le composant le plus sollicité d'une installation, et c'est aussi celui qui présente le risque d'incendie le plus élevé quand il est mal installé : grenier non ventilé, sous-dimensionnement, connecteurs MC4 mal sertis.",
    redFlags: [
      "Onduleur installé sans dégagement (< 20 cm autour).",
      "Local technique sans ventilation (combles, placard fermé).",
      "Mélange de marques pour les connecteurs MC4.",
      "Onduleur sous-dimensionné par rapport à la puissance crête.",
    ],
    checklist: [
      "Vérifier que l'onduleur est dans un endroit ventilé.",
      "S'assurer d'un espace libre minimum de 20 cm autour.",
      "Vérifier que sa puissance est adaptée à la puissance crête.",
      "Demander si les connecteurs MC4 sont de même marque.",
      "Vérifier la présence d'un parafoudre DC côté panneaux.",
    ],
    imageRelativePath: "public/img/pieges/04-onduleur.webp",
  },
  {
    number: 5,
    severity: "important",
    title: "Le côté AC sous-dimensionné : le coupable oublié",
    intro:
      "Tout le monde parle des panneaux et de l'onduleur. Personne ne parle du côté AC — la partie entre l'onduleur et le tableau électrique. C'est pourtant là que se concentre une part importante des non-conformités.",
    redFlags: [
      "Section de câble AC insuffisante.",
      "Protection différentielle de mauvais type (AC au lieu de A).",
      "Absence de dispositif de coupure générale accessible.",
      "Disjoncteur calibré trop juste pour la puissance.",
    ],
    checklist: [
      "Vérifier la section du câble AC entre onduleur et tableau.",
      "Demander le type de différentiel prévu (type A ou B).",
      "S'assurer qu'un dispositif de coupure générale est prévu.",
      "Vérifier que le disjoncteur est correctement calibré.",
    ],
    imageRelativePath: "public/img/pieges/05-tableau.webp",
  },
  {
    number: 6,
    severity: "critique",
    title: "Le retour sur investissement en 2 ans : mathématiquement impossible",
    intro:
      "En 2026, avec un coût installé moyen de 1 800 à 2 200 €/kWc et des économies réalistes de 250 à 350 €/kWc par an, le retour réel se situe entre 5 et 7 ans. Tout installateur qui promet 2 ans utilise des hypothèses fausses.",
    redFlags: [
      "Prix d'électricité projeté à 50-60 c/kWh (vs ~38 c/kWh réels).",
      "Taux d'autoconsommation à 90 % (vs 30-40 % sans batterie).",
      "Tarif d'injection à 15-20 c/kWh (vs 1-6 c/kWh réels).",
      "Pas de mention du tarif prosumer pour les installations pré-2024.",
    ],
    checklist: [
      "Demander le détail du calcul ligne par ligne.",
      "Vérifier le prix d'électricité utilisé (~38 c/kWh).",
      "Vérifier le taux d'autoconsommation estimé (30-50 % réaliste).",
      "Vérifier le tarif d'injection utilisé (1-6 c/kWh).",
      "Vérifier si le tarif prosumer est inclus.",
    ],
    imageRelativePath: "public/img/pieges/06-roi.webp",
  },
  {
    number: 7,
    severity: "attention",
    title: "Pression commerciale et signature trop rapide",
    intro:
      "« Cette offre est valable aujourd'hui. » « Notre agenda est complet, signez maintenant. » « Les prix augmentent le mois prochain. » La pression commerciale est un signal d'alarme. Un installateur sérieux comprend que vous avez besoin de temps pour décider.",
    redFlags: [
      "Pression pour signer le jour même.",
      "Argument « offre limitée dans le temps ».",
      "Pas de visite technique préalable.",
      "Refus de fournir des références de chantiers récents.",
    ],
    checklist: [
      "Ne jamais signer le jour même d'un démarchage.",
      "Obtenir au minimum 2 à 3 devis détaillés.",
      "Vérifier l'existence et les avis de chaque entreprise.",
      "Prendre le temps de comparer point par point.",
      "Faire relire le contrat par un tiers si nécessaire.",
    ],
    imageRelativePath: "public/img/pieges/07-pression.webp",
  },
];

export const GUIDE_CONCLUSION =
  "Si après lecture de ce guide vous avez le moindre doute sur un devis reçu, envoyez-le-nous : nous l'analysons gratuitement et vous renvoyons un avis écrit, sans pression commerciale.";

export const GUIDE_CONTACT_LINES = [
  "Be'energies SARL — Komveld 35, 3770 Riemst, Belgique",
  "+32 (0)472 12 70 55 · +32 (0)474 36 73 27",
  "info@be-energies.be · be-energies.be",
];
