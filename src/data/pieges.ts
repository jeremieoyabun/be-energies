import type { Piege } from "@/lib/types";

export const pieges: Piege[] = [
  {
    slug: "retour-investissement-gonfle",
    title: "Retour sur investissement en 2 ans",
    number: 1,
    service: "panneaux-photovoltaiques",
    severity: "critique",
    problem:
      "Certains installateurs promettent un retour en 1 à 2 ans. C'est mathématiquement impossible en 2026.",
    consequence:
      "Ces calculs utilisent des hypothèses obsolètes : anciennes primes, compensation à 100%, prix d'électricité gonflés, ou des systèmes surdimensionnés dont le surplus est injecté à perte.",
    solution:
      "Benoît base chaque calcul sur les tarifs 2026 réels de votre GRD, votre profil de consommation mesuré, et un taux d'autoconsommation réaliste. Le retour honnête se situe entre 5 et 7 ans -- et c'est un excellent investissement à ~12% par an.",
    founderInsight:
      "Demandez à votre installateur : ce calcul inclut-il le tarif prosumer ? Le tarif d'injection réel ? Votre taux d'autoconsommation estimé ? Si la réponse est floue, méfiez-vous.",
  },
  {
    slug: "installation-gratuite",
    title: "Installation gratuite",
    number: 2,
    service: "panneaux-photovoltaiques",
    severity: "critique",
    problem:
      "L'installation gratuite n'existe pas. C'est un code pour du financement prédatoire à des taux qui doublent le coût réel.",
    consequence:
      "Le client paie 2 à 3 fois le prix réel sur 10-15 ans, avec des clauses qui l'empêchent de revendre ou de modifier son installation.",
    solution:
      "Be'energies propose un prix clair, détaillé, sans financement caché. Vous savez exactement ce que vous payez et ce que vous recevez.",
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
      "Le surplus est injecté à 1-6 centimes alors que l'autoconsommation vaut 38 centimes. Chaque kWc excédentaire est un investissement à perte.",
    solution:
      "On dimensionne pour maximiser l'autoconsommation, pas pour maximiser la facture. Chaque kWc installé doit être rentable.",
    founderInsight:
      "Un bon dimensionnement commence par votre facture d'électricité, pas par la surface de votre toit.",
  },
  {
    slug: "devis-sans-visite",
    title: "Le devis sans visite technique",
    number: 4,
    service: "all",
    severity: "important",
    problem:
      "Impossible de dimensionner correctement une installation à distance. Un devis par téléphone est une devinette déguisée en proposition.",
    consequence:
      "Mauvaise orientation, ombrage non détecté, tableau électrique incompatible, toiture inadaptée -- autant de surprises coûteuses le jour de l'installation.",
    solution:
      "On commence toujours par une visite technique. C'est la base de tout calcul fiable.",
  },
  {
    slug: "onduleur-sous-dimensionne",
    title: "L'onduleur sous-dimensionné",
    number: 5,
    service: "panneaux-photovoltaiques",
    severity: "important",
    problem:
      "Pour réduire le coût du devis, certains installateurs placent un onduleur trop petit par rapport à la puissance des panneaux.",
    consequence:
      "L'onduleur écrête la production aux heures de pointe. Vous perdez 10-20% de rendement sans le savoir.",
    solution:
      "Benoît dimensionne l'onduleur en fonction de la puissance crête réelle, de l'orientation, et du profil de production, pas pour rendre le devis plus attractif.",
  },
  {
    slug: "batterie-inutile",
    title: "La batterie dont vous n'avez pas besoin",
    number: 6,
    service: "batteries-domestiques",
    severity: "important",
    problem:
      "On vous pousse une batterie à 5 000-8 000 EUR alors qu'elle ne sera pas rentable pour votre profil de consommation.",
    consequence:
      "Surcoût sans rentabilité réelle. La batterie n'est pertinente que si votre taux d'autoconsommation est sous les 40% sans elle.",
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
      "L'installation ne passe pas le contrôle de conformité. Le risque invisible qui annule votre assurance.",
    consequence:
      "Assurance invalidée, risque d'incendie ou d'électrocution, amendes possibles, valeur du bien diminuée.",
    solution:
      "Benoît a rédigé des rapports de non-conformité pendant des années. Aujourd'hui, il s'assure que vous n'en recevrez jamais un.",
    founderInsight:
      "La conformité électrique, ce n'est pas une formalité. C'est ce qui protège votre maison et valide votre assurance.",
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
