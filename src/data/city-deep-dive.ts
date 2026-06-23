// ---------------------------------------------------------------------------
// City deep-dive entries. Long-form, neighborhood-grade content used on local
// landing pages to give visitors real technical and contextual depth.
//
// Voice = Benoit, ancien inspecteur en installation electrique, certifie
// RESCERT. Factual, no marketing superlatives, no specific prime amounts,
// no invented regulation citations.
//
// Structure (4 editorial blocks + FAQ):
//   1. urbanTypology   - housing stock, roof shapes, neighborhood patterns
//   2. regulatoryContext - GRD, smart meter / prosumer reality, urbanism
//   3. typicalProjects - what we actually install most often here
//   4. commonChallenges - the technical traps we see in the field
//   + faq              - 4 to 6 city-specific Q&A pairs
//
// FR entries cover Walloon and Brussels cities. NL entries cover Flemish
// Limburg cities. For cities without a deep-dive entry, getCityDeepDive
// simply returns undefined and the component does not render.
// ---------------------------------------------------------------------------

export interface CityDeepDiveSection {
  /** Short eyebrow label, e.g. "Tissu urbain", "Cadre réglementaire". */
  eyebrow: string;
  /** Section heading, e.g. "Du centre aux coteaux : trois Liège, trois logiques". */
  heading: string;
  /** Single paragraph body. Keep editorial, factual, dense. */
  body: string;
}

export interface CityDeepDiveFaq {
  question: string;
  answer: string;
}

export interface CityDeepDive {
  /** Locale of the entry copy. Used to guard NL-only pages from FR-only entries. */
  locale: "fr" | "nl";
  urbanTypology: CityDeepDiveSection;
  regulatoryContext: CityDeepDiveSection;
  typicalProjects: CityDeepDiveSection;
  commonChallenges: CityDeepDiveSection;
  faq: CityDeepDiveFaq[];
}

export const cityDeepDive: Record<string, CityDeepDive> = {
  // -------------------------------------------------------------------------
  // LIEGE - FR
  // -------------------------------------------------------------------------
  liege: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Tissu urbain",
      heading: "Du centre aux coteaux : trois Liège, trois logiques d'installation",
      body:
        "Liège ne se laisse pas réduire à une seule typologie de toitures. Le centre historique - Outremeuse, Saint-Léonard, le Carré - aligne des maisons mitoyennes étroites, hautes, souvent à toiture en bâtière fortement pentée et à façade classée ou en zone de protection. Les coteaux - Cointe, Sainte-Walburge, Saint-Gilles - étagent des maisons trois ou quatre façades sur des parcelles en pente, où l'orientation réelle dépend autant du relief que des choix d'urbanisme du XXe siècle. La périphérie - Angleur, Wandre, Jupille - offre un parc plus pavillonnaire, avec villas, semi-mitoyennes et toitures simples, mieux exposées et plus libres en calepinage. Sur le terrain, ces trois Liège demandent trois approches techniques différentes : on ne dimensionne pas une installation à Outremeuse comme à Cointe, et encore moins comme à Angleur.",
    },
    regulatoryContext: {
      eyebrow: "Cadre réglementaire & réseau",
      heading: "RESA, compteur communicant et tarif prosumer : la réalité 2026",
      body:
        "Le réseau liégeois est exploité par RESA, qui suit le cadre wallon. Concrètement, cela signifie compteur communicant déployé par défaut sur tout nouveau raccordement ou modification, et application du tarif prosumer selon le régime en vigueur au moment de la mise en service. Pour le particulier, cela change la lecture du retour sur investissement : la valeur économique de l'autoconsommation directe et du stockage prend le pas sur celle de l'injection. Côté urbanisme, le centre de Liège comporte plusieurs périmètres patrimoniaux où les panneaux visibles depuis l'espace public peuvent demander une déclaration ou un avis préalable - cela se vérifie au cas par cas auprès du service urbanisme de la Ville. Sur les communes périphériques (Beyne, Chaudfontaine, Herstal, Seraing), les contraintes sont généralement plus souples mais varient selon le PPAS local.",
    },
    typicalProjects: {
      eyebrow: "Projets typiques",
      heading: "Ce que nous installons réellement à Liège",
      body:
        "Sur les coteaux et en périphérie, le projet le plus courant reste une installation photovoltaïque de 4 à 8 kWc en monophasé, posée sur toiture en pans simples, avec onduleur classique quand l'ombrage est nul ou onduleur à optimiseurs dès qu'une cheminée, une lucarne ou un voisin projette de l'ombre. Le couplage à une batterie domestique se justifie de plus en plus, en particulier sur les profils avec voiture électrique ou pompe à chaleur - typique dans les maisons rénovées des coteaux. Dans le centre mitoyen, on travaille plus souvent en surfaces utiles réduites et en orientation est-ouest, avec micro-onduleurs pour gérer les ombrages voisins. Les bornes de recharge sont quasi systématiques dans les projets pavillonnaires d'Angleur, Jupille ou Wandre, et imposent presque toujours une vérification du tableau et de la section du raccordement avant chiffrage.",
    },
    commonChallenges: {
      eyebrow: "Pièges du terrain",
      heading: "Ce que je vois trop souvent à Liège - et qu'on évite",
      body:
        "Le premier piège liégeois, c'est le tableau électrique ancien des maisons d'avant 1985, encore très présent dans le centre et sur les coteaux. Beaucoup ne supportent pas l'ajout d'une borne de recharge ou d'une batterie sans reprise complète des protections différentielles par circuit - et certains installateurs PV oublient ce point au moment du devis. Le deuxième piège, c'est la charpente : sur les maisons étagées des coteaux, la portance n'est parfois plus celle de l'origine après rénovations successives, et un contrôle sérieux avant pose est non négociable. Le troisième piège, c'est le calepinage paresseux : sur les mitoyennes orientées au sud, la production réelle dépend autant de la gestion des ombrages voisins (cheminées, corniches, paraboles) que du nombre de panneaux posés. Maximiser la surface couverte n'est presque jamais la bonne stratégie ici.",
    },
    faq: [
      {
        question: "Faut-il une déclaration d'urbanisme pour poser des panneaux à Liège ?",
        answer:
          "Cela dépend du quartier. Dans les périmètres patrimoniaux du centre - Outremeuse, autour de la Cathédrale, certaines rues classées - les panneaux visibles depuis la voie publique peuvent demander une déclaration ou un avis préalable. Sur les coteaux et en périphérie, c'est généralement plus souple. Dans tous les cas, je vérifie systématiquement la zone auprès du service urbanisme de la Ville avant tout dépôt, et je transmets le retour au client par écrit.",
      },
      {
        question: "Combien coûte un raccordement RESA à Liège pour une installation photovoltaïque ?",
        answer:
          "RESA applique des tarifs publiés annuellement pour la mise en conformité du compteur et l'éventuelle modification du raccordement. Le compteur communicant est posé gratuitement dans le cadre du déploiement régional, mais les éventuels travaux sur le tableau ou la mise en monophasé / triphasé sont à charge du client. Je donne les montants RESA actualisés dans le devis final, jamais une estimation à la louche.",
      },
      {
        question: "Le tarif prosumer rend-il encore les panneaux rentables à Liège ?",
        answer:
          "Oui, mais la logique a changé. Avec le compteur communicant et le tarif prosumer, ce qui paye une installation aujourd'hui n'est plus l'injection sur le réseau mais l'autoconsommation directe - donc le moment où votre maison consomme l'énergie produite. Une installation bien dimensionnée pour votre profil réel (avec ou sans batterie selon le cas) reste rentable sur 12 à 18 ans. Une installation surdimensionnée pour une famille peu présente en journée, en revanche, ne l'est plus comme avant.",
      },
      {
        question: "Faut-il une batterie domestique à Liège ?",
        answer:
          "Pas systématiquement. La batterie devient pertinente quand le profil de consommation justifie le stockage - typiquement chez les ménages avec voiture électrique, pompe à chaleur ou télétravail partiel. Sur un profil très diurne (présence à la maison, électroménager le jour), une bonne pilotage de l'autoconsommation peut suffire. Je calcule le scénario avec et sans batterie sur la base de votre consommation réelle, pas d'une moyenne théorique.",
      },
      {
        question: "Mon tableau électrique des années 70 est-il compatible avec une borne de recharge ?",
        answer:
          "Rarement sans intervention. Beaucoup de tableaux liégeois d'avant 1985 ne disposent pas de différentiel 30 mA par circuit, ni des sections de câble adaptées à un appel de 7 ou 11 kW continu. Ajouter une borne sans reprendre les protections, c'est créer un risque réel d'échauffement ou de déclenchement intempestif. Je contrôle systématiquement le tableau et la section du raccordement avant de chiffrer une borne - et je le dis honnêtement si une mise à niveau est nécessaire.",
      },
      {
        question: "Combien de temps pour installer un système PV complet à Liège ?",
        answer:
          "Pour une installation résidentielle classique sans surprise (toiture saine, tableau récent), le chantier sur place dure 1 à 2 jours. L'ensemble du processus - visite technique, devis, commande matériel, déclaration RESA, pose, contrôle - prend généralement 6 à 10 semaines selon les délais de RESA et la disponibilité du matériel. Sur du bâti ancien nécessitant un upgrade du tableau, prévoir une demi-journée à une journée supplémentaire de travaux électriques.",
      },
    ],
  },
};

export function getCityDeepDive(citySlug: string): CityDeepDive | undefined {
  return cityDeepDive[citySlug];
}
