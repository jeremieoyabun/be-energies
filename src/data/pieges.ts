import type { Piege } from "@/lib/types";

export const pieges: Piege[] = [
  {
    slug: "retour-investissement-gonfle",
    title: "Retour sur investissement en 2 ans",
    number: 1,
    service: "panneaux-photovoltaiques",
    severity: "critique",
    problem:
      "Certains installateurs promettent un retour en 1 a 2 ans. C'est mathematiquement impossible en 2026.",
    consequence:
      "Ces calculs utilisent des hypotheses obsoletes : anciennes primes, compensation a 100%, prix d'electricite gonfles, ou des systemes surdimensionnes dont le surplus est injecte a perte.",
    solution:
      "Benoit base chaque calcul sur les tarifs 2026 reels de votre GRD, votre profil de consommation mesure, et un taux d'autoconsommation realiste. Le retour honnete se situe entre 5 et 7 ans -- et c'est un excellent investissement a ~12% par an.",
    founderInsight:
      "Demandez a votre installateur : ce calcul inclut-il le tarif prosumer ? Le tarif d'injection reel ? Votre taux d'autoconsommation estime ? Si la reponse est floue, mefiez-vous.",
  },
  {
    slug: "installation-gratuite",
    title: "Installation gratuite",
    number: 2,
    service: "panneaux-photovoltaiques",
    severity: "critique",
    problem:
      "L'installation gratuite n'existe pas. C'est un code pour du financement predatoire a des taux qui doublent le cout reel.",
    consequence:
      "Le client paie 2 a 3 fois le prix reel sur 10-15 ans, avec des clauses qui l'empechent de revendre ou de modifier son installation.",
    solution:
      "Be'energies propose un prix clair, detaille, sans financement cache. Vous savez exactement ce que vous payez et ce que vous recevez.",
  },
  {
    slug: "surdimensionnement",
    title: "Le surdimensionnement",
    number: 3,
    service: "all",
    severity: "critique",
    problem:
      "Installer plus de panneaux ou une batterie plus grande pour vendre plus, pas pour rentabiliser votre installation.",
    consequence:
      "Le surplus est injecte a 1-6 centimes alors que l'autoconsommation vaut 38 centimes. Chaque kWc excedentaire est un investissement a perte.",
    solution:
      "On dimensionne pour maximiser l'autoconsommation, pas pour maximiser la facture. Chaque kWc installe doit etre rentable.",
    founderInsight:
      "Un bon dimensionnement commence par votre facture d'electricite, pas par la surface de votre toit.",
  },
  {
    slug: "devis-sans-visite",
    title: "Le devis sans visite technique",
    number: 4,
    service: "all",
    severity: "important",
    problem:
      "Impossible de dimensionner correctement une installation a distance. Un devis par telephone est une devinette deguisee en proposition.",
    consequence:
      "Mauvaise orientation, ombrage non detecte, tableau electrique incompatible, toiture inadaptee -- autant de surprises couteuses le jour de l'installation.",
    solution:
      "On commence toujours par une visite technique. C'est la base de tout calcul fiable.",
  },
  {
    slug: "onduleur-sous-dimensionne",
    title: "L'onduleur sous-dimensionne",
    number: 5,
    service: "panneaux-photovoltaiques",
    severity: "important",
    problem:
      "Pour reduire le cout du devis, certains installateurs placent un onduleur trop petit par rapport a la puissance des panneaux.",
    consequence:
      "L'onduleur ecrete la production aux heures de pointe. Vous perdez 10-20% de rendement sans le savoir.",
    solution:
      "Benoit dimensionne l'onduleur en fonction de la puissance crete reelle, de l'orientation, et du profil de production, pas pour rendre le devis plus attractif.",
  },
  {
    slug: "batterie-inutile",
    title: "La batterie dont vous n'avez pas besoin",
    number: 6,
    service: "batteries-domestiques",
    severity: "important",
    problem:
      "On vous pousse une batterie a 5 000-8 000 EUR alors qu'elle ne sera pas rentable pour votre profil de consommation.",
    consequence:
      "Surcout sans rentabilite reelle. La batterie n'est pertinente que si votre taux d'autoconsommation est sous les 40% sans elle.",
    solution:
      "On ne vous vend pas une batterie si elle n'est pas rentable pour votre situation. On calcule avant de proposer.",
    founderInsight:
      "Une batterie n'est pas toujours rentable. Voici comment calculer si c'est le cas pour vous.",
  },
  {
    slug: "installation-non-conforme",
    title: "L'installation non conforme",
    number: 7,
    service: "all",
    severity: "attention",
    problem:
      "L'installation ne passe pas le controle de conformite. Le risque invisible qui annule votre assurance.",
    consequence:
      "Assurance invalidee, risque d'incendie ou d'electrocution, amendes possibles, valeur du bien diminuee.",
    solution:
      "Benoit a redige des rapports de non-conformite pendant des annees. Aujourd'hui, il s'assure que vous n'en recevrez jamais un.",
    founderInsight:
      "La conformite electrique, ce n'est pas une formalite. C'est ce qui protege votre maison et valide votre assurance.",
  },
];

export function getPiegeBySlug(slug: string): Piege | undefined {
  return pieges.find((p) => p.slug === slug);
}

export function getPiegesForService(serviceSlug: string): Piege[] {
  return pieges.filter(
    (p) => p.service === serviceSlug || p.service === "all"
  );
}
