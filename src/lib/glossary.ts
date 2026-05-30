/**
 * Centralised glossary of technical terms surfaced via <Term>.
 * Keys are normalised lowercase (the component does the lookup).
 *
 * Keep definitions:
 *  - Short (≤ 200 chars), one or two sentences.
 *  - Vulgarised — assume the reader is a homeowner, not an electrician.
 *  - Factually defensible (cite source in a comment if non-obvious).
 */
export const glossary: Record<
  string,
  { short: string; full: string; sourceUrl?: string }
> = {
  rescert: {
    short: "Certification d'installateur d'énergies renouvelables.",
    full: "Certification belge des installateurs d'énergies renouvelables (solaire, pompes à chaleur, biomasse…). Délivrée par les Régions, attestant la maîtrise des normes RGIE et des bonnes pratiques d'installation. Obligatoire pour bénéficier de certaines primes.",
  },
  grd: {
    short: "Gestionnaire de réseau de distribution (Ores, Resa, Sibelga…).",
    full: "Le Gestionnaire de Réseau de Distribution (GRD) est l'entreprise qui gère les câbles et compteurs jusqu'à votre habitation. En Wallonie : Ores, Resa, AIEG, AIESH ; à Bruxelles : Sibelga ; en Flandre : Fluvius.",
  },
  prosumer: {
    short: "Redevance annuelle payée par les propriétaires de panneaux pré-2024.",
    full: "Le tarif prosumer est une redevance annuelle (85 à 99 € par kWe d'onduleur en Wallonie) payée par les ménages dont les panneaux ont été mis en service avant le 1ᵉʳ janvier 2024. Il compense les frais de réseau utilisés pour stocker virtuellement le surplus injecté. Les installations post-2024 ne paient pas le prosumer mais facturent leur injection au tarif fournisseur.",
  },
  rgie: {
    short: "Règlement Général sur les Installations Électriques en Belgique.",
    full: "Le RGIE est le règlement belge qui fixe les normes de sécurité des installations électriques basse tension. Mis à jour en 2020 (Livre 1 résidentiel), il est la référence du contrôleur lors du passage de conformité.",
  },
  impact: {
    short: "Tarif tri-horaire 2026 (ECO / MEDIUM / PIC).",
    full: "Le tarif IMPACT est une nouvelle structure tarifaire belge introduite en 2026 pour les compteurs communicants : trois plages horaires (ECO 11-17h, MEDIUM 7-11h et 22-1h, PIC 17-22h) avec des prix de distribution différenciés. Pertinent surtout avec PV + batterie + véhicule électrique.",
  },
  cwape: {
    short: "Autorité de régulation de l'énergie en Wallonie.",
    full: "La CWaPE (Commission wallonne pour l'Énergie) est l'autorité indépendante qui régule l'électricité et le gaz en Wallonie. Elle fixe les tarifs prosumer, supervise les GRD et publie les comparatifs tarifs d'injection.",
  },
  kwc: {
    short: "Puissance crête d'une installation solaire, en kilowatts.",
    full: "kWc (kilowatt-crête) = la puissance maximale qu'une installation solaire peut produire dans des conditions standardisées (1 000 W/m² d'ensoleillement, 25 °C). Une installation 5 kWc avec une bonne orientation produit environ 4 500 à 5 000 kWh/an en Belgique.",
  },
  kwh: {
    short: "Unité d'énergie consommée ou produite, en kilowatt-heure.",
    full: "kWh (kilowatt-heure) = unité de mesure de l'énergie. Un ménage belge moyen consomme 3 500 kWh/an pour l'électricité hors chauffage. Votre facture est libellée en €/kWh.",
  },
  onduleur: {
    short: "Convertit le courant continu des panneaux en courant alternatif.",
    full: "L'onduleur convertit l'électricité DC produite par les panneaux en AC utilisable dans la maison et le réseau. Il limite la production à sa puissance nominale (un onduleur 5 kW bridé limite une installation 6 kWc), et c'est généralement le premier composant qui tombe en panne (durée de vie 8 à 15 ans).",
  },
  autoconsommation: {
    short: "Part de l'électricité produite que vous utilisez vous-même.",
    full: "Le taux d'autoconsommation est la proportion de votre production solaire que vous consommez directement (vs injectée au réseau). En Belgique, sans batterie : 30 à 40 %. Avec batterie ou pilotage des consommations : 50 à 70 %. Plus c'est élevé, plus c'est rentable (38 c/kWh économisés vs 1-6 c/kWh à l'injection).",
  },
};
