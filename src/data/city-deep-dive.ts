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
  // PROVINCE LIEGE - FR
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

  // -------------------------------------------------------------------------
  // Cities scaled from Liege pattern, 2026-06-23
  // 10 new FR entries below, grouped by province / region.
  // -------------------------------------------------------------------------

  // -------------------------------------------------------------------------
  // PROVINCE LIEGE (suite) - FR
  // -------------------------------------------------------------------------
  verviers: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Tissu bâti",
      heading: "Une ville lainière dense, étagée entre vallée et coteaux",
      body:
        "Verviers concentre environ 56 127 habitants sur 33 km², soit une densité de 1 702 hab/km² qui se traduit, sur le terrain, par un parc immobilier majoritairement mitoyen. Le centre historique aligne des maisons étroites à deux versants, fortes pentes, traditionnellement couvertes en ardoise naturelle, matériau régional du pays de Liège et du plateau de Herve. Les anciens quartiers liés à l'industrie lainière, héritage de la capitale belge de la laine, présentent des rangées denses de petites maisons ouvrières mitoyennes, avec des surfaces de toiture utiles réduites et des orientations imposées par l'alignement de la rue. La périphérie, vers Heusy, Stembert, Ensival, Lambermont ou Petit-Rechain, change de logique : habitat plus aéré, part plus importante de villas quatre façades, toitures à deux ou quatre versants, orientations plus libres et donc nettement plus favorables au photovoltaïque. À tout cela s'ajoute la topographie : la ville s'étage entre la vallée de la Vesdre et les coteaux, ce qui crée des ombrages variables d'une parcelle à l'autre. Avant tout dimensionnement, je prends le temps de lire la toiture, la pente, les masques voisins et la nature de la couverture, parce qu'à Verviers, deux maisons d'une même rue n'ont presque jamais le même potentiel solaire.",
    },
    regulatoryContext: {
      eyebrow: "Cadre RESA",
      heading: "Zone RESA, compteur communicant en cours, et un centre patrimonial à respecter",
      body:
        "Verviers est intégralement en zone RESA pour la distribution d'électricité et de gaz. Le Décret électricité wallon impose le remplacement de tous les compteurs par des compteurs communicants au plus tard le 31 décembre 2029 ; fin 2024, environ 326 392 compteurs étaient déjà déployés en Wallonie, et les GRD visent près de 300 000 installations supplémentaires d'ici fin 2026. RESA a publié en septembre 2025 son calendrier de déploiement, consultable adresse par adresse via son module en ligne. Côté prosumer, la CWaPE a approuvé pour 2026 un tarif RESA fixé à 85,93 €/kWe (à revérifier au moment du devis). Le principe de compensation reste applicable jusqu'au 31 décembre 2030 pour les installations certifiées avant le 1ᵉʳ janvier 2024 ; les installations mises en service à partir de cette date ne sont plus soumises au tarif prosumer capacitaire et l'injection peut être revalorisée par revente ou partage d'énergie. Sur le centre ancien, le Règlement Communal d'Urbanisme partiel « Vieille Ville » impose que les équipements techniques fixés en toiture, panneaux solaires inclus, soient intégrés à la toiture et idéalement non visibles depuis la rue. Avant tout projet patrimonial, je passe par le service Urbanisme et, si besoin, par le Guichet Énergie.",
    },
    typicalProjects: {
      eyebrow: "Sur le terrain",
      heading: "Trois profils de chantiers reviennent presque chaque semaine à Verviers",
      body:
        "Le premier, c'est la maison mitoyenne du centre ou d'un ancien quartier ouvrier, une toiture étroite en ardoise, souvent orientée est-ouest, où nous installons une installation modeste, typiquement entre 3 et 5 kWc, avec un onduleur dimensionné pour l'autoconsommation et un suivi sérieux des étanchéités sur ardoise. Le deuxième, c'est la villa quatre façades de la périphérie (Heusy, Stembert, Lambermont, Petit-Rechain) : surface de toiture plus large, orientation plus favorable, et un dimensionnement courant entre 6 et 10 kWc, parfois couplé à une batterie domestique, surtout pour les ménages déjà passés au compteur communicant ou qui basculent sur tarif prosumer proportionnel. Le troisième, c'est la rénovation patrimoniale en centre ancien ou sur bâti d'intérêt : panneaux intégrés, choix de modules tout noir, calepinage discret, dossier urbanisme préparé en amont, parfois associé à une mise en conformité électrique. Dans chaque cas, je commence par lire la toiture comme un ancien inspecteur, pas comme un commercial.",
    },
    commonChallenges: {
      eyebrow: "Points de vigilance",
      heading: "Ardoise, mitoyenneté, dénivelé et tableaux anciens",
      body:
        "À Verviers, plusieurs sujets reviennent en visite technique. La couverture ardoise demande un savoir-faire spécifique : crochets adaptés, respect des recouvrements, étanchéité soignée autour des traversées, sinon on ouvre la porte à des infiltrations longues à diagnostiquer. La mitoyenneté complique la pose : surface utile réduite, accès chantier par la rue, gestion fine des limites de propriété. Le dénivelé entre vallée de la Vesdre et coteaux génère des ombrages portés par les bâtiments voisins ou la végétation qu'il faut quantifier sérieusement, sinon le rendement annoncé ne tient pas. Côté installation électrique, beaucoup de maisons anciennes du centre conservent des tableaux et des sections de câble qui ne sont plus adaptés à un onduleur PV moderne ; en tant qu'ancien inspecteur, je vérifie systématiquement la conformité avant de raccorder. Enfin, le climat tempéré océanique de la vallée, environ 1 200 mm de précipitations annuelles et plus de 200 jours de pluie, impose un contrôle régulier des fixations, des solins et de la propreté des modules, particulièrement sur les versants exposés aux mousses.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer RESA en 2026 à Verviers ?",
        answer:
          "Pour 2026, la CWaPE a approuvé un tarif prosumer capacitaire RESA fixé à 85,93 €/kWe, à vérifier au moment de l'engagement car la grille tarifaire est révisée annuellement. Ce tarif ne concerne que les installations certifiées avant le 1ᵉʳ janvier 2024 et soumises au régime de compensation, lequel reste applicable jusqu'au 31 décembre 2030. Les installations mises en service à partir du 1ᵉʳ janvier 2024 ne sont plus soumises au tarif prosumer capacitaire.",
      },
      {
        question: "Le compteur communicant est-il déjà déployé chez moi à Verviers ?",
        answer:
          "Le déploiement RESA est en cours, avec un calendrier publié en septembre 2025 et consultable adresse par adresse sur le site du gestionnaire. Aucune date communale globale n'est publiée pour Verviers. La règle de fond est que tous les compteurs wallons doivent être remplacés au plus tard le 31 décembre 2029, et fin 2024 environ 326 392 compteurs communicants étaient déjà installés en Wallonie.",
      },
      {
        question: "Y a-t-il des contraintes d'urbanisme spécifiques à Verviers pour le photovoltaïque ?",
        answer:
          "Oui, dans le centre ancien. Le Règlement Communal d'Urbanisme partiel « Vieille Ville » impose que les équipements en toiture, panneaux solaires inclus, soient intégrés à la toiture et idéalement non visibles depuis la rue. Hors périmètre patrimonial, on relève du CoDT wallon : dispense, déclaration ou permis selon la situation. Je vérifie systématiquement auprès du service Urbanisme avant tout projet.",
      },
      {
        question: "Une batterie domestique est-elle pertinente sur le profil RESA ?",
        answer:
          "Cela dépend de votre profil de consommation et du régime applicable. Pour une installation post-01/01/2024 sans compensation, la batterie permet d'augmenter l'autoconsommation et de mieux valoriser la production locale. Pour une installation antérieure encore en compensation jusqu'au 31 décembre 2030, l'arbitrage est plus fin. Le tarif IMPACT, optionnel à partir de janvier 2026 pour les utilisateurs ≤ 56 kVA équipés d'un compteur communicant actif, change aussi la donne avec ses heures PIC, MEDIUM et ECO.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour poser des panneaux à Verviers ?",
        answer:
          "Pas systématiquement. La règle dépend du CoDT, du périmètre patrimonial éventuel et du PPAS local. Dans le centre couvert par le RCU partiel « Vieille Ville », l'intégration en toiture est exigée et un passage par le service Urbanisme est indispensable. En périphérie, beaucoup de projets résidentiels relèvent de la dispense ou de la déclaration, mais je fais toujours valider le dossier avant de poser.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // PROVINCE NAMUR - FR
  // -------------------------------------------------------------------------
  namur: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Lecture du bâti",
      heading: "Une corbeille dense, des villages annexés et une vallée à forte pente",
      body:
        "Namur n'est pas une ville homogène: depuis la fusion de 1977, la commune regroupe vingt-six anciennes localités, du centre historique au confluent Sambre-Meuse jusqu'aux villages plus ruraux de la périphérie. Concrètement, je distingue trois grandes familles de toitures sur le terrain. La Corbeille et les faubourgs anciens concentrent un bâti mitoyen étroit, à toiture en ardoise et lucarnes, où la longueur de versant utile dépend directement de l'orientation de la rue. Sur les anciennes communes urbanisées de la première couronne (Jambes, Bouge, Saint-Servais, Belgrade), je trouve un mélange de maisons d'avant-guerre rénovées et de bâti d'après-guerre, avec des couvertures plus variées (ardoise, tuile, parfois bac acier). La périphérie pavillonnaire d'entités comme Erpent, Naninne, Wépion ou Malonne offre des toitures plus généreuses, souvent en tuiles, mais la topographie vallonnée de la vallée mosane et les reliefs autour de la Citadelle créent des situations d'ombrage très contrastées d'un quartier à l'autre. Sur la décennie 2007-2017, Statbel relève une croissance du parc de logements plus marquée pour les appartements que pour les maisons individuelles, ce qui pèse sur la disponibilité réelle de toitures privatives en centre-ville. Chaque dimensionnement part donc d'une lecture de site, pas d'un standard.",
    },
    regulatoryContext: {
      eyebrow: "Cadre 2026",
      heading: "Ce que disent vraiment ORES, la CWaPE et le RCU biens mosans",
      body:
        "La commune est desservie par ORES pour la distribution d'électricité. Pour 2026, la CWaPE a approuvé un tarif prosumer capacitaire ORES de 85,84 €/kWe/an, calculé sur une production moyenne de référence d'environ 910 kWh/an par kWe et un taux d'autoconsommation moyen de 37,76 %. La prime régionale qui en compensait une partie a été supprimée au 1er janvier 2024: le prosumer prend désormais 100 % du tarif à sa charge. Le compteur communicant reste un point décisif. ORES s'est engagé à le déployer partout en Wallonie d'ici fin 2029 et avait, fin 2025, posé environ 429 272 compteurs (autour de 28 % de son parc basse tension); à l'échelle d'un quartier de Namur, la situation se vérifie au cas par cas. La pose par ORES est gratuite. Côté régime: la compensation (compteur qui tourne à l'envers) est maintenue jusqu'au 31 décembre 2030 pour les installations mises en service au plus tard le 31 décembre 2023, et n'est plus accessible aux installations mises en service à partir du 1er janvier 2024. En urbanisme, la règle wallonne dispense la majorité des panneaux en toiture de permis, sauf bien ou site classé. La Citadelle est patrimoine exceptionnel, le beffroi est inscrit à l'UNESCO et le RCU partiel biens mosans (entré en vigueur fin 2011) impose des matériaux sobres et harmonisés. Toute intervention sur un bien classé requiert l'avis conforme de l'AWaP, à vérifier auprès du service urbanisme.",
    },
    typicalProjects: {
      eyebrow: "Sur le terrain",
      heading: "Trois profils de chantiers que je rencontre régulièrement à Namur",
      body:
        "Le premier profil, c'est la maison mitoyenne dans la Corbeille ou un faubourg de Jambes, Saint-Servais ou Bouge: toiture en ardoise, un seul versant exploitable, je vise généralement 4 à 6 kWc selon la longueur disponible et l'absence d'ombrage des immeubles voisins. La discussion porte autant sur le tracé des câbles vers le tableau que sur la cohérence visuelle, surtout dans le périmètre des biens mosans. Le deuxième profil, c'est la villa quatre façades en périphérie (Erpent, Naninne, Wépion, Malonne, Champion) avec toiture en tuile et bonne exposition: 8 à 12 kWc en moyenne, parfois avec ajout d'une batterie domestique pour rentabiliser l'autoconsommation puisque le régime de compensation n'est plus accessible aux nouvelles installations. Le troisième profil, plus exigeant, concerne la rénovation patrimoniale ou un bâti ancien soumis au RCU: dimensionnement réduit, choix de modules sombres uniformes, validation préalable avec le service urbanisme, et parfois avis AWaP si le bien est repris à l'inventaire. Dans les trois cas, je calibre la puissance sur le profil de consommation réel, pas sur la surface disponible.",
    },
    commonChallenges: {
      eyebrow: "Vu de près",
      heading: "Les pièges techniques récurrents sur le parc namurois",
      body:
        "Premier point que je vérifie systématiquement: l'état du tableau électrique. Sur le bâti ancien de la Corbeille et des faubourgs anciens, on retrouve souvent des tableaux non conformes au RGIE actuel, des sections de câble sous-dimensionnées et parfois encore une mise à la terre douteuse. Avant tout raccordement onduleur, j'exige une mise en conformité propre, sinon le contrôle final pose problème. Deuxième point: l'ombrage. La topographie vallonnée de la vallée mosane, les versants autour de la Citadelle et la densité mitoyenne créent des masques solaires qui ne se voient pas sur une vue Google brute, il faut une étude d'ombrage sur l'année. Troisième point: les toitures en ardoise des bâtis anciens. Les pannes ne sont pas toujours saines, et un système de fixation mal pensé fragilise la couverture. Je préfère reporter un chantier plutôt qu'installer sur une charpente fatiguée. Quatrième point: l'autoconsommation. Sans compteur communicant compatible, le client reste sur le forfait capacitaire ORES; avec compteur, on peut basculer sur le proportionnel selon l'injection réelle. C'est cette logique qui doit guider le choix d'une batterie, pas un argument commercial.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer ORES applicable à Namur en 2026 ?",
        answer:
          "Pour 2026, la CWaPE a approuvé un tarif prosumer capacitaire ORES de 85,84 €/kWe/an. Ce tarif s'applique en forfait sur base de la puissance onduleur, sauf si vous disposez d'un compteur communicant compatible permettant le calcul proportionnel à l'injection réelle. La prime régionale qui le compensait partiellement a disparu au 1er janvier 2024: vous prenez désormais 100 % du tarif à votre charge. Les tarifs sont revus chaque année par la CWaPE.",
      },
      {
        question: "Le compteur communicant ORES est-il déjà déployé chez moi ?",
        answer:
          "Pas forcément. ORES s'est engagé à équiper toute la Wallonie d'ici fin 2029. Fin 2025, environ 429 272 compteurs communicants étaient posés sur le réseau ORES, soit autour de 28 % du parc basse tension. À l'échelle d'un quartier de Namur, la situation se vérifie directement auprès d'ORES. La pose est gratuite pour le client résidentiel.",
      },
      {
        question: "Y a-t-il des contraintes d'urbanisme spécifiques à Namur pour le photovoltaïque ?",
        answer:
          "La règle wallonne dispense la majorité des panneaux en toiture de permis d'urbanisme. À Namur, deux situations demandent une vigilance particulière: les biens et sites classés (Citadelle, périmètres protégés, beffroi inscrit à l'UNESCO), qui exigent l'avis conforme de l'AWaP, et le périmètre du RCU partiel biens mosans, qui encadre l'aspect des matériaux. À vérifier au cas par cas auprès du Service technique du développement territorial de la Ville.",
      },
      {
        question: "Puis-je encore bénéficier du compteur qui tourne à l'envers ?",
        answer:
          "Uniquement si votre installation a été mise en service au plus tard le 31 décembre 2023. Le régime de compensation est alors maintenu jusqu'au 31 décembre 2030. Toute installation mise en service à partir du 1er janvier 2024 en est exclue: la valorisation se fait par autoconsommation directe et, le cas échéant, par injection.",
      },
      {
        question: "Une batterie domestique est-elle pertinente sur un profil ORES ?",
        answer:
          "Cela dépend de votre profil de consommation, pas d'une règle générale. Sans régime de compensation et avec un tarif prosumer entièrement à votre charge, augmenter le taux d'autoconsommation a une vraie valeur. Mais une batterie mal dimensionnée se rentabilise mal. Je calibre la capacité sur vos relevés réels et sur la disponibilité du compteur communicant.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // HAINAUT - FR
  // -------------------------------------------------------------------------
  charleroi: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Lecture du bâti",
      heading: "Du coron ouvrier à la périphérie pavillonnaire, un parc à deux vitesses",
      body:
        "Charleroi, c'est 205 763 habitants au 1er janvier 2025 répartis sur 102,9 km², avec une densité de plus de 2 000 habitants au km² selon WalStat. Ce chiffre traduit une réalité que je vois sur le terrain : un tissu urbain hérité du bassin industriel du Pays Noir, structuré par la sidérurgie, le charbon, les verreries et les briqueteries du XIXe et début XXe siècle. Les rangées de maisons mitoyennes en brique, souvent à deux versants de pente modérée, dominent dans les anciens quartiers ouvriers nés autour des charbonnages. La Ville Haute, organisée après 1872 autour de l'Hôtel de Ville et du Palais de Justice, présente davantage d'hôtels particuliers et de bâtiments bourgeois, parfois en ardoise. À l'inverse, les anciennes communes fusionnées en 1977 (Gilly, Jumet, Marchienne, Marcinelle, Montignies, Mont-sur-Marchienne, Couillet) offrent un habitat plus mixte, avec davantage de pavillonnaire d'après-guerre et de lotissements aux toitures mieux dégagées, plus favorables au photovoltaïque. La tuile de terre cuite reste majoritaire sur l'habitat ouvrier et pavillonnaire, l'ardoise se rencontre surtout sur les bâtiments classés. Selon le quartier, l'orientation et la pente varient fortement : une étude technique au cas par cas reste indispensable, notamment dans les rangées ouvrières où pignons mitoyens et souches de cheminée limitent la surface utile.",
    },
    regulatoryContext: {
      eyebrow: "Cadre technique",
      heading: "ORES, compteur communicant et patrimoine classé : les trois variables à intégrer",
      body:
        "Charleroi est desservie par ORES, le gestionnaire de réseau de distribution qui couvre environ 75 % du territoire wallon et dispose d'un bureau d'accueil dans la commune. Côté compteur communicant, la CWaPE supervise un déploiement qui doit atteindre 100 % du parc d'ici le 31 décembre 2029. Depuis le 1er janvier 2023, le remplacement est systématique pour les nouveaux raccordements, les remplacements techniques et les nouveaux prosumers, sous réserve de faisabilité. L'installation est gratuite pour le client final, et depuis le 1er janvier 2024, vous pouvez refuser uniquement la fonction communicante dans les 15 jours suivant la pose, pas le compteur lui-même. Côté photovoltaïque, deux régimes coexistent. Pour les installations mises en service avant le 1er janvier 2024 et de puissance nette développable inférieure ou égale à 10 kW, le mécanisme de compensation (compteur qui tourne à l'envers) est maintenu jusqu'au 31 décembre 2030. Pour toute installation à partir du 1er janvier 2024, le compteur communicant est obligatoire selon ORES, le tarif prosumer ne s'applique plus, et les frais de réseau sont calculés sur l'énergie réellement prélevée. Attention enfin au patrimoine : beffroi de l'Hôtel de Ville classé UNESCO, hôtel des Postes de 1907, ensembles de maisons ouvrières et sites industriels imposent des règles spécifiques. Les biens classés ou inscrits sur la liste de sauvegarde ne bénéficient pas des exonérations de permis.",
    },
    typicalProjects: {
      eyebrow: "Profils récurrents",
      heading: "Trois configurations qui reviennent presque chaque semaine à Charleroi",
      body:
        "Premier profil, la maison mitoyenne ouvrière en brique, typique du centre et des anciens quartiers industriels. La surface utile de toiture est souvent limitée par la mitoyenneté et les souches de cheminée : on calibre généralement entre 4 et 6 kWc selon l'orientation réelle, et on travaille soigneusement le passage des câbles depuis la toiture vers le tableau, qui n'est pas toujours conforme RGIE. Deuxième profil, la villa quatre façades en périphérie (anciennes communes fusionnées), avec toitures pavillonnaires mieux dégagées : on monte plus volontiers entre 8 et 12 kWc, souvent couplés à une batterie domestique cohérente avec le nouveau régime post-2024, où l'autoconsommation devient le vrai moteur de rentabilité. Troisième profil, la rénovation patrimoniale, dans la Ville Haute ou sur un bien situé en zone de protection : ici on commence systématiquement par une vérification urbanisme avant même de chiffrer le projet. Le rôle d'ancien inspecteur prend tout son sens sur ces dossiers : avant de poser, on contrôle la tenue mécanique de la charpente, la mise à la terre, le différentiel et la section des conducteurs.",
    },
    commonChallenges: {
      eyebrow: "Vu du terrain",
      heading: "Ce qu'on rencontre vraiment dans les installations existantes de Charleroi",
      body:
        "Sur l'habitat ouvrier, le premier point d'attention est rarement la toiture : c'est le tableau électrique. Beaucoup de logements ont vu se succéder des rénovations partielles, parfois sans contrôle, avec des tableaux mélangeant matériel ancien et modules récents, des sections de câble sous-dimensionnées et des mises à la terre incomplètes. Avant tout ajout de production photovoltaïque, batterie ou borne, je vérifie systématiquement la conformité RGIE et l'état du raccordement ORES. Deuxième point, la charpente : sur les rangées mitoyennes, la pente modérée et la présence fréquente de souches en briques anciennes obligent à étudier finement le plan de pose et la fixation. Troisième point, le patrimoine : sur un bien classé, en zone de protection ou sur liste de sauvegarde, la dispense wallonne de permis pour le PV ne s'applique pas, et toute intervention sur la toiture passe par le service Urbanisme communal et, le cas échéant, l'AWaP. Quatrième point, l'éventuel PPAS local peut imposer des contraintes esthétiques, à vérifier au cas par cas auprès du service urbanisme.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer ORES à Charleroi en 2026 ?",
        answer:
          "Si votre installation a été mise en service avant le 1er janvier 2024 et que sa puissance nette développable est inférieure ou égale à 10 kW, vous restez sous le mécanisme de compensation jusqu'au 31 décembre 2030, avec un tarif prosumer en deux variantes (forfaitaire/capacitaire en €/kWe ou proportionnel/réel) fixé annuellement par ORES et approuvé par la CWaPE. Pour le montant 2026 exact, je vous renvoie à la grille tarifaire officielle ORES/CWaPE, mise à jour chaque année. Pour toute installation mise en service à partir du 1er janvier 2024, il n'y a plus de tarif prosumer : les frais de réseau sont calculés sur l'énergie réellement prélevée.",
      },
      {
        question: "Le compteur communicant est-il déjà installé chez moi à Charleroi ?",
        answer:
          "Pas forcément. La CWaPE pilote un déploiement qui doit atteindre 100 % du parc wallon au 31 décembre 2029. Depuis le 1er janvier 2023, ORES installe systématiquement un compteur communicant pour les nouveaux raccordements, les remplacements techniques, les clients en défaut de paiement et les nouveaux prosumers. La part exacte déjà déployée à Charleroi n'est pas publiée officiellement de manière à jour. Le remplacement est gratuit, et depuis le 1er janvier 2024 vous pouvez refuser la seule fonction communicante dans les 15 jours.",
      },
      {
        question: "Y a-t-il des contraintes d'urbanisme spécifiques à Charleroi ?",
        answer:
          "Oui, surtout pour le patrimoine. La circulaire wallonne du 14 mars 2024 dispense de permis le PV en toiture à versants si le débordement vertical est inférieur ou égal à 0,30 m et la différence de pente inférieure ou égale à 15°, mais cette dispense ne s'applique pas aux biens classés, en zone de protection ou inscrits sur liste de sauvegarde, ce qui concerne plusieurs ensembles à Charleroi. Un PPAS local peut aussi imposer des règles esthétiques. À vérifier systématiquement auprès du Service Urbanisme communal.",
      },
      {
        question: "Quel est le délai de raccordement chez ORES ?",
        answer:
          "Le délai dépend du type de demande (nouveau raccordement, modification de puissance, mise en service prosumer) et de la charge du gestionnaire. Pour un permis d'urbanisme communal lié à un projet impactant la toiture, comptez 30, 75 ou 115 jours selon la complexité et la localisation, durée qui s'allonge sur les biens classés. Nous gérons l'ensemble des démarches ORES et urbanisme dans le devis.",
      },
      {
        question: "Une batterie domestique est-elle pertinente sur le profil ORES post-2024 ?",
        answer:
          "Souvent oui, et c'est même la logique du nouveau régime. Depuis le 1er janvier 2024, l'absence de compensation et de tarif prosumer rend l'autoconsommation directe nettement plus rentable que l'injection. Sur un profil familial avec consommation en soirée, une batterie correctement dimensionnée permet de valoriser une part bien plus importante de la production. Le dimensionnement reste à faire au cas par cas selon votre courbe de charge réelle.",
      },
      {
        question: "Existe-t-il une prime communale photovoltaïque à Charleroi ?",
        answer:
          "Le site officiel de la Ville de Charleroi ne mentionne pas de prime communale spécifique au photovoltaïque. La Maison de l'Énergie de Charleroi propose un accompagnement et un prêt à 0 % (Rénopack/Écopack) pouvant atteindre 30 000 € pour les rénovations énergétiques, et renvoie pour les primes au dispositif régional wallon.",
      },
    ],
  },

  mons: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Lecture du parc bâti",
      heading: "Un coeur historique dense entouré de 19 anciennes communes fusionnées",
      body:
        "Mons est une commune de 97 120 habitants répartis sur 147,6 km², ce qui dessine un territoire à géométrie variable très éloigné du seul centre intra-muros. La fusion de 1977 a regroupé 19 anciennes entités autour de la ville-centre, chacune avec son propre tissu bâti, ses gabarits, ses pentes de toiture et ses matériaux de couverture. En 2022, la commune comptait 44 273 logements, dont plus de la moitié, environ 53,2 %, ont été érigés avant 1946 selon la fiche Hainaut Développement. Sur le terrain, cela se traduit par trois grandes familles de bâti à dimensionner différemment. Le centre ancien reconstruit après l'incendie de 1548 a vu se développer une architecture dite espagnole, avec maçonnerie de brique, pignons à gradins et trames étroites héritées du gothique, ce qui impose des toitures à forte pente, des lucarnes nombreuses et des surfaces utiles parfois limitées pour le photovoltaïque. Les anciens villages fusionnés et les cités ouvrières du Borinage offrent à l'inverse de longues séries de maisons mitoyennes en brique, à toitures à deux versants. La périphérie pavillonnaire, plus récente, présente des villas quatre façades aux pentes plus douces, mieux adaptées à des installations de 8 à 12 kWc. Le diagnostic toiture se fait donc cas par cas, jamais au gabarit.",
    },
    regulatoryContext: {
      eyebrow: "Réseau ORES et cadre wallon",
      heading: "Compteur communicant double flux, fin de la compensation et tarif IMPACT au 1er janvier 2026",
      body:
        "Mons est desservie par ORES pour la distribution d'électricité. Sur le plan réglementaire, trois éléments structurent aujourd'hui tout projet photovoltaïque. D'abord, depuis le 1er janvier 2024, toute nouvelle installation supérieure à 1 kW ou toute modification d'installation existante doit être associée à un compteur communicant double flux, technologie NB-IoT, posé gratuitement par ORES. Le décret électricité fixe un déploiement généralisé d'ici le 31 décembre 2029 sur l'ensemble du territoire wallon. Ensuite, les installations mises en service à partir du 1er janvier 2024 ne bénéficient plus du principe de compensation, communément appelé compteur qui tourne à l'envers. Les installations certifiées avant cette date conservent ce bénéfice jusqu'au 31 décembre 2030. Enfin, pour 2026, la CWaPE a approuvé un tarif prosumer capacitaire ORES de 85,84 euros par kWe d'onduleur, avec une convention d'autoconsommation de 37,76 %, le client pouvant opter pour le tarif proportionnel s'il dispose d'un compteur communicant actif. Le tarif IMPACT, optionnel, entre en vigueur le 1er janvier 2026 avec trois plages ECO, MEDIUM et PIC, et un régime bi-horaire revu avec heures creuses 11h-17h et 22h-7h, 7 jours sur 7. Pour le centre historique et les abords des biens UNESCO, le règlement communal d'urbanisme et l'avis de l'AWaP s'ajoutent au permis.",
    },
    typicalProjects: {
      eyebrow: "Ce que nous installons",
      heading: "Trois profils de chantier qui reviennent presque chaque semaine à Mons",
      body:
        "Sur le terrain, trois profils dominent. Le premier est la maison mitoyenne en brique d'avant 1946, fréquente dans les anciens villages fusionnés et les cités du Borinage. Toiture à deux versants, surface utile souvent comprise entre 25 et 35 m² selon les souches de cheminée et lucarnes, je dimensionne typiquement entre 4 et 6 kWc avec un onduleur calibré pour la nouvelle réalité tarifaire post-compensation. Le second profil est la villa quatre façades de la périphérie pavillonnaire. Pentes plus douces, orientations souvent mixtes, je travaille fréquemment sur des installations 8 à 12 kWc couplées à une batterie domestique dimensionnée pour absorber le pic de production de midi et limiter la facture prosumer capacitaire. Le troisième profil est la rénovation patrimoniale, près du centre ou en zone bâtie protégée, où l'enjeu n'est pas la puissance maximale mais la conformité urbanistique : pose discrète, intégration en pan arrière, vérification systématique auprès du service urbanisme et, si nécessaire, de l'AWaP.",
    },
    commonChallenges: {
      eyebrow: "Vu en inspection",
      heading: "Vétusté du tableau, toitures anciennes et erreurs de dimensionnement post-2024",
      body:
        "Comme ancien inspecteur en installation électrique, certifié RESCERT, je vois revenir les mêmes points durs à Mons. Premier point : un parc bâti à plus de 53 % antérieur à 1946, avec des tableaux électriques souvent non conformes au RGIE actuel, des sections de câbles sous-dimensionnées et l'absence de différentiels adaptés. Avant tout PV ou borne, je contrôle systématiquement la mise à la terre et la séparation des circuits. Deuxième point : les toitures anciennes en ardoise ou tuile, parfois sur charpente fatiguée, qui ne tolèrent pas un calepinage standard. Une étude de portance et de fixation conditionne la garantie décennale. Troisième point : les dimensionnements hérités d'avant 2024, encore proposés sur le marché. Avec la fin de la compensation pour les nouvelles installations et le tarif prosumer capacitaire 2026, surdimensionner l'onduleur sans batterie ni pilotage de charges revient à payer un forfait pour de l'énergie réinjectée à bas prix. Quatrième point : les abords protégés où une pose sans concertation urbanistique se solde par une remise en état.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer ORES applicable à Mons en 2026 ?",
        answer:
          "Pour 2026, la CWaPE a approuvé un tarif prosumer capacitaire ORES de 85,84 euros par kWe d'onduleur, calculé sur une hypothèse conventionnelle de 37,76 % d'autoconsommation et 62,24 % de réinjection. Vous pouvez aussi opter pour le tarif proportionnel, basé sur les kWh réellement prélevés, si vous disposez d'un compteur communicant double flux actif. Les tarifs étant révisés annuellement par la CWaPE, je revérifie le chiffre exact au moment de l'offre.",
      },
      {
        question: "Mon compteur communicant a-t-il déjà été posé à Mons ?",
        answer:
          "ORES déploie ses compteurs communicants NB-IoT progressivement sur tout son territoire, avec un objectif régional de déploiement généralisé chez les résidentiels d'ici le 31 décembre 2029. Il n'existe pas de calendrier communal public stabilisé spécifiquement pour Mons. La pose est gratuite, et toute nouvelle installation PV depuis le 1er janvier 2024 en exige un en mode double flux. Je vérifie l'état de votre compteur lors du diagnostic.",
      },
      {
        question: "Y a-t-il des contraintes d'urbanisme particulières dans le centre de Mons ?",
        answer:
          "Oui. Mons dispose d'un règlement communal d'urbanisme officiel, et le centre ancien inclut des biens classés et le périmètre UNESCO du beffroi, auxquels s'ajoutent les minières de Spiennes. Toute intervention visible depuis l'espace public protégé, y compris une pose PV, fait l'objet d'un permis d'urbanisme et, le cas échéant, d'un avis de l'AWaP. À vérifier auprès du service urbanisme de la Ville avant tout engagement.",
      },
      {
        question: "Mon installation d'avant 2024 garde-t-elle la compensation ?",
        answer:
          "Oui, les installations photovoltaïques certifiées avant le 1er janvier 2024 conservent le bénéfice du principe de compensation, le fameux compteur qui tourne à l'envers, jusqu'au 31 décembre 2030. Au-delà, le régime général s'appliquera. C'est un paramètre clé à intégrer si vous envisagez d'agrandir une installation existante, car toute modification fait basculer l'ensemble dans le nouveau régime.",
      },
      {
        question: "Une batterie domestique est-elle pertinente avec le profil ORES et le tarif IMPACT ?",
        answer:
          "Avec la fin de la compensation pour les nouvelles installations, le tarif prosumer capacitaire et l'arrivée au 1er janvier 2026 du tarif IMPACT à trois plages ECO, MEDIUM, PIC, augmenter l'autoconsommation a un vrai sens économique. Une batterie peut être pertinente sur les villas pavillonnaires en 8 à 12 kWc, moins systématiquement sur les petites mitoyennes 4 à 6 kWc. Le calcul se fait sur votre profil de consommation réel, pas sur une moyenne.",
      },
    ],
  },

  tournai: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Lecture du parc bâti",
      heading: "Entre centre historique UNESCO et campagne picarde, un parc bâti à deux vitesses",
      body:
        "Tournai est la commune la plus étendue de Belgique : environ 215 km² pour près de 69 000 habitants et un peu plus de 32 000 bâtiments recensés. Cette étendue crée un contraste net entre un centre historique dense, organisé autour de la Grand-Place, du beffroi et de la cathédrale Notre-Dame (tous deux inscrits à l'UNESCO), et une vaste périphérie agricole où 75 % du territoire est dédié aux cultures et où subsistent les nombreux villages issus de la fusion de 1977. Sur le terrain, je rencontre trois grandes typologies. Le centre historique aligne des maisons étroites et profondes du style tournaisien, avec chaînages alternant brique rouge et pierre calcaire bleue, toitures à coyaux en encorbellement et couverture fréquente en ardoise naturelle. La périphérie pavillonnaire des années 1960-1980 offre des maisons quatre façades en brique, toitures en tuile de terre cuite, orientations plus libres et pans plus généreux, techniquement bien plus simples à équiper en photovoltaïque. Enfin, la campagne picarde concentre fermes en carré, longères et habitat de pierre traditionnel, où la lecture de la charpente et l'état réel des couvertures conditionnent toujours le projet.",
    },
    regulatoryContext: {
      eyebrow: "Cadre wallon et patrimoine",
      heading: "ORES Hainaut, compteurs communicants et zones protégées : ce qui change vraiment",
      body:
        "Tournai est raccordée au réseau d'ORES Hainaut, pour l'électricité comme pour le gaz naturel. ORES couvre plus de 75 % du territoire wallon, ce qui veut dire que le cadre tarifaire validé par la CWaPE s'applique ici comme ailleurs en Wallonie. Depuis le 1er janvier 2026, les heures creuses sont uniformisées 7 jours sur 7 (11h-17h et 22h-7h) et un tarif optionnel IMPACT a été introduit pour les utilisateurs équipés d'un compteur électronique communicant, avec des plages PIC, MEDIUM et ECO. Le déploiement de ces compteurs avance : environ 500 000 unités installées en Wallonie début 2026, 300 000 supplémentaires prévues en 2026, et un objectif décrétal de généralisation au 31 décembre 2029. Côté photovoltaïque, le mécanisme de compensation (compteur qui tourne à l'envers) reste garanti jusqu'au 31 décembre 2030 pour les installations mises en service avant le 1er janvier 2024 ; au-delà, le régime est celui de l'autoconsommation. À Tournai s'ajoute une dimension patrimoniale forte : plus de 200 biens classés, 1 677 fiches IPIC, un plan de gestion UNESCO depuis 2011, et un Guide Régional d'Urbanisme qui intègre le RGBSR. Toute intervention en zone protégée se prépare avec le service Urbanisme communal et, le cas échéant, l'AWaP.",
    },
    typicalProjects: {
      eyebrow: "Ce qu'on installe ici",
      heading: "Trois profils techniques qui reviennent sur le terrain à Tournai",
      body:
        "Premier profil, le plus courant : la maison mitoyenne en périphérie urbaine, avec une toiture en tuile orientée correctement sur un pan exploitable. On dimensionne en général entre 4 et 6 kWc, en cherchant le bon équilibre entre autoconsommation et puissance de raccordement. Deuxième profil : la villa quatre façades des années 1970-1990 en zone pavillonnaire ou dans un village périphérique. Là, on monte facilement de 8 à 12 kWc, avec une réflexion sérieuse sur l'ajout d'une batterie, surtout dans le contexte du nouveau tarif IMPACT et de la fin de la compensation pour les installations post-2024. Troisième profil : la rénovation patrimoniale dans le centre historique ou à proximité d'un bien classé. Ici, je ne promets jamais rien avant d'avoir vérifié le statut du bien, l'éventuelle inscription à l'IPIC et la zone d'influence du plan de gestion UNESCO. Le projet passe par une concertation préalable avec le service Urbanisme et, si nécessaire, l'AWaP, avant tout chiffrage sérieux.",
    },
    commonChallenges: {
      eyebrow: "Vu sur le terrain",
      heading: "Charpentes anciennes, couvertures mixtes et tableaux non conformes : les vrais points durs",
      body:
        "Comme ancien inspecteur en installation électrique, je vois revenir les mêmes points de blocage à Tournai. Premier point : l'état des couvertures. Dans le style tournaisien, on trouve des toitures à coyaux, des charpentes en bois anciennes et des ardoises naturelles qui n'acceptent pas n'importe quelle fixation. Avant tout devis, je veux voir la sous-toiture, les chevrons et l'étanchéité. Deuxième point : la cohabitation entre brique, pierre calcaire bleue et raccords de toiture complexes en centre historique, qui impose des solutions de fixation et d'étanchéité spécifiques. Troisième point : les tableaux électriques, fréquemment sous-dimensionnés dans les maisons rénovées par étapes, avec des différentiels mal calibrés et des terres absentes ou douteuses, ce qui est rédhibitoire avant tout raccordement photovoltaïque. Enfin, la dimension patrimoniale : une toiture parfaitement adaptée techniquement peut se trouver dans le périmètre d'un bien classé ou d'un SOL, et nécessiter un avis urbanisme avant pose. Mieux vaut traiter ces points en amont qu'après commande des panneaux.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer ORES en 2026 à Tournai ?",
        answer:
          "Le tarif prosumer est fixé chaque année par la CWaPE et s'applique par défaut à tout prosumer ne disposant pas d'un compteur double flux. Tournai étant raccordée à ORES Hainaut, c'est la grille ORES qui s'applique. Je préfère vous communiquer le chiffre exact au moment du diagnostic, en croisant la grille tarifaire CWaPE en vigueur et votre profil de consommation, plutôt que de vous donner un montant qui peut évoluer chaque année.",
      },
      {
        question: "Le compteur communicant est-il déjà déployé chez moi à Tournai ?",
        answer:
          "Le déploiement est en cours sur l'ensemble du territoire wallon : environ 500 000 compteurs installés début 2026 et 300 000 supplémentaires prévus en 2026, avec un objectif légal de généralisation au 31 décembre 2029. Le calendrier précis par rue n'est pas public, mais le passage est obligatoire en cas de nouvelle installation photovoltaïque ou de remplacement d'un ancien compteur. Nous coordonnons cette étape avec ORES dans le cadre du projet.",
      },
      {
        question: "Y a-t-il des contraintes urbanisme particulières à Tournai ?",
        answer:
          "Oui, et elles sont sérieuses. Tournai compte plus de 200 biens classés, 1 677 fiches à l'IPIC, un plan de gestion UNESCO autour de la cathédrale et du beffroi depuis 2011, ainsi qu'un Schéma de Développement Communal approuvé en 2017. Selon votre adresse, votre projet peut nécessiter une simple déclaration ou un permis d'urbanisme avec avis patrimonial. Nous vérifions systématiquement le statut du bien auprès du service Urbanisme communal avant tout engagement.",
      },
      {
        question: "Une batterie domestique est-elle pertinente sur le profil ORES à Tournai ?",
        answer:
          "Cela dépend de la date de mise en service de votre installation photovoltaïque. Pour les installations d'avant le 1er janvier 2024, la compensation reste garantie jusqu'au 31 décembre 2030, ce qui rend la batterie moins prioritaire. Pour les installations postérieures, soumises à l'autoconsommation et potentiellement au tarif IMPACT avec ses plages PIC, MEDIUM et ECO, une batterie peut nettement améliorer la rentabilité. Le calcul se fait sur votre profil de consommation réel.",
      },
      {
        question: "Quels délais prévoir pour le raccordement ORES après installation ?",
        answer:
          "Les délais ORES dépendent du volume de demandes en cours et de la nature du raccordement (simple flux, double flux, changement de puissance). À Tournai comme ailleurs en Hainaut, nous préparons le dossier ORES en parallèle de la pose pour limiter l'attente entre la fin du chantier et la mise en service effective. Un délai prévisionnel précis vous est communiqué après le diagnostic.",
      },
    ],
  },

  "la-louviere": {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Tissu bâti",
      heading: "Un parc hérité du Centre minier, entre corons, faïenceries et périphérie pavillonnaire",
      body:
        "La Louvière est née d'une fusion en 1977 qui a réuni autour de la ville-centre plusieurs anciennes communes industrielles comme Houdeng-Aimeries, Houdeng-Goegnies, Strépy-Bracquegnies, Haine-Saint-Pierre, Haine-Saint-Paul, Saint-Vaast, Trivières, Maurage et Boussoit. Sur 64,6 km² et environ 81 674 habitants au 1er janvier 2025, on retrouve un tissu très caractéristique de l'ancien bassin houiller du Centre: un centre historique dense autour de la place Mansart et du site des anciennes Faïenceries Royal Boch en cours de reconversion via le projet La Strada, des anciens corons et cités ouvrières liés aux charbonnages dont la cité du Bois-du-Luc, puis une périphérie pavillonnaire d'après-guerre. Du point de vue d'un installateur, cela donne trois familles très différentes. Le bâti ancien associe maisons mitoyennes en brique, toitures à deux pans en tuile de terre cuite ou en ardoise, faîtages alignés sur la rue plutôt que sur le sud, et complexité d'accès. La périphérie pavillonnaire offre au contraire des toitures plus dégagées, mieux orientées, plus simples à dimensionner. Entre les deux, on trouve un parc rénové ou en cours de rénovation urbaine, notamment dans le périmètre Renocity du quartier de la gare de Haine-Saint-Pierre, où chaque projet photovoltaïque doit être pensé en cohérence avec les travaux d'enveloppe en cours.",
    },
    regulatoryContext: {
      eyebrow: "Cadre réseau",
      heading: "ORES, compteur communicant et règles prosumer: ce qui s'applique réellement à La Louvière",
      body:
        "La Louvière est desservie par ORES pour la distribution d'électricité. ORES déploie le compteur communicant sur l'ensemble de la Wallonie avec un objectif de déploiement généralisé chez les clients particuliers d'ici fin 2029, et la pose est gratuite pour le résidentiel. Côté prosumer, le principe reste clair sur le terrain: pour les installations photovoltaïques d'une puissance nette développable inférieure ou égale à 10 kW mises en service avant le 1er janvier 2024, la compensation entre prélèvement et injection est maintenue jusqu'au 31 décembre 2030. Avec un compteur communicant, le prosumer peut demander à basculer au tarif proportionnel et, dans certaines configurations, ne plus payer le tarif prosumer capacitaire forfaitaire. À cela s'ajoutent, depuis le 1er janvier 2026, le nouveau bihoraire wallon avec heures creuses 22h-7h et 11h-17h, sept jours sur sept, et l'arrivée du tarif de distribution optionnel IMPACT pour les clients équipés d'un compteur communicant. Côté urbanisme, le CoDT modifié en 2025 dispense en principe le photovoltaïque de permis, sauf pour les biens classés et les périmètres patrimoniaux protégés, ce qui peut viser le site UNESCO du Bois-du-Luc à Houdeng-Aimeries et certains édifices remarquables identifiés par la Ville. À vérifier au cas par cas auprès du service Permis d'urbanisme de La Louvière.",
    },
    typicalProjects: {
      eyebrow: "Sur le terrain",
      heading: "Trois profils d'installation que nous voyons revenir le plus souvent à La Louvière",
      body:
        "Le premier profil, c'est la maison mitoyenne du centre ou d'une ancienne commune ouvrière, souvent en deux pans, avec une surface de toiture utile limitée par l'orientation imposée par la rue et par les cheminées. Sur ce type de bien, un dimensionnement raisonnable se situe autour de 4 à 6 kWc, à caler précisément en fonction du profil de consommation et du futur passage au compteur communicant. Le deuxième profil, c'est la villa quatre façades de la périphérie pavillonnaire, avec une toiture bien dégagée et un pan exploitable, où l'on monte plutôt vers 8 à 12 kWc, parfois avec une batterie domestique si le ménage consomme peu en journée et veut sécuriser sa facture sur la durée. Le troisième profil, plus délicat, concerne la rénovation patrimoniale ou la maison située dans un périmètre sensible: là, le projet commence par une analyse de l'aspect extérieur, du support de couverture, et par un passage par le service Urbanisme avant tout chiffrage sérieux.",
    },
    commonChallenges: {
      eyebrow: "Points de vigilance",
      heading: "Les pièges techniques récurrents sur le parc bâti louviérois",
      body:
        "Sur le bâti ancien de l'ancien bassin du Centre, le premier problème n'est pas le panneau, c'est la toiture qui le porte. Les charpentes en bois et les couvertures en tuile ou ardoise des maisons mitoyennes du XIXe et du début du XXe ne supportent pas toujours une pose lourde sans renforcement, et l'état réel des liteaux ne se voit pas depuis la rue. Deuxième point récurrent: les tableaux électriques. Sur un parc partiellement rénové, on tombe encore régulièrement sur des installations vétustes, des mises à la terre douteuses, ou des compteurs qui ne sont pas prêts pour une injection propre. Avant d'ajouter de la production, il faut remettre la base aux normes, sinon la conformité RGIE bloque la mise en service. Troisième point: l'orientation. Beaucoup de toitures du centre sont contraintes par l'alignement de la rue, et un dimensionnement honnête doit l'assumer plutôt que survendre une production théorique. Enfin, dans les périmètres patrimoniaux ou autour du site UNESCO du Bois-du-Luc, l'aspect extérieur impose des choix de modules et d'implantation qui doivent être validés en amont.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer ORES en 2026 à La Louvière ?",
        answer:
          "La Louvière dépend bien d'ORES pour la distribution. Le tarif prosumer est fixé par la CWaPE et révisé annuellement par ORES, il varie donc d'une année à l'autre. Avec un compteur communicant, vous pouvez demander à passer au tarif proportionnel et, selon votre configuration, ne plus payer le tarif capacitaire forfaitaire. Pour le montant exact applicable à votre situation, le bon réflexe est de vérifier directement sur ores.be ou cwape.be, car ces grilles tarifaires sont mises à jour chaque année.",
      },
      {
        question: "Le compteur communicant est-il déjà installé chez moi ?",
        answer:
          "ORES déploie le compteur communicant sur l'ensemble de la Wallonie avec un objectif de généralisation chez les particuliers d'ici fin 2029. Le rythme dépend des tournées de pose par quartier. La pose est gratuite pour le résidentiel. Si vous installez du photovoltaïque, ORES procédera à la pose au moment du raccordement de l'installation si vous n'en avez pas encore.",
      },
      {
        question: "Y a-t-il des contraintes d'urbanisme spécifiques à La Louvière ?",
        answer:
          "Depuis la modification du CoDT en 2025, le photovoltaïque en toiture ou au sol est en principe dispensé de permis. Restent les exceptions pour biens classés et périmètres patrimoniaux protégés, ce qui peut concerner notamment le site UNESCO du Bois-du-Luc à Houdeng-Aimeries et certains édifices remarquables identifiés par la Ville. Dans le doute, on passe par le service Permis d'urbanisme de La Louvière avant tout engagement.",
      },
      {
        question: "Quel est le délai de raccordement ORES après installation ?",
        answer:
          "Le délai dépend de la charge du gestionnaire, du type de raccordement existant et de la nécessité ou non de poser ou remplacer le compteur. À La Louvière, comme partout en zone ORES, nous coordonnons la demande de raccordement et la mise en service en parallèle des travaux pour limiter le délai entre la pose des panneaux et la production effective.",
      },
      {
        question: "Une batterie domestique est-elle pertinente sur le profil ORES ?",
        answer:
          "Cela dépend de votre consommation et du régime prosumer qui vous concerne. Pour les installations mises en service avant le 1er janvier 2024 et inférieures ou égales à 10 kW, la compensation est maintenue jusqu'au 31 décembre 2030, ce qui réduit l'intérêt strictement financier d'une batterie. Pour les nouvelles installations, le compteur communicant, le nouveau bihoraire wallon 22h-7h et 11h-17h et le tarif IMPACT optionnel changent l'équation. Nous chiffrons les deux scénarios avant de recommander une batterie.",
      },
      {
        question: "Existe-t-il une prime communale à La Louvière pour les panneaux ?",
        answer:
          "La Ville n'a pas, à notre connaissance, de prime spécifiquement dédiée au photovoltaïque résidentiel. En revanche, le Guichet Énergie Logement Renolouve accompagne les habitants pour les primes régionales et pour la prime communale travaux, qui s'appuie sur un audit logement et qui n'est mobilisable qu'après l'octroi régional. Une prime Renocity spécifique existe par ailleurs dans le périmètre du quartier de la gare de Haine-Saint-Pierre.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // BRABANT WALLON - FR
  // -------------------------------------------------------------------------
  wavre: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Tissu wavrien",
      heading: "Entre centre dense sur la Dyle et couronne pavillonnaire en quatre façades",
      body:
        "Wavre, chef-lieu du Brabant wallon, s'étend sur environ 42 km² pour près de 35 600 habitants, soit une densité d'environ 848 hab/km² selon la fiche WalStat de l'IWEPS. Sur le terrain, cela se traduit par deux réalités très différentes pour une installation photovoltaïque. Le centre historique, organisé autour de la Dyle, présente un bâti dense en mitoyen, avec maisons de ville à pignons rapprochés, faîtages parallèles à la rue et toitures souvent étroites. La couronne, qui inclut Limal et Bierges rattachés lors de la fusion de 1977, est dominée par le modèle pavillonnaire des années 1960 à 1990, typologie largement documentée par la Maison de l'urbanisme du Brabant wallon comme caractéristique de la province. Sur ces villas quatre façades, on trouve des pans de toiture plus généreux, des pentes variables entre 30° et 45° selon la période de construction, et plus de marge pour orienter une centrale au sud ou en est-ouest. Les couvertures restent majoritairement en tuile, terre cuite ou béton, avec présence d'ardoise sur le bâti ancien et patrimonial. Les lotissements récents confirment la poursuite de ce modèle pavillonnaire en périphérie, comme l'illustre le projet de 47 maisons soumis à enquête publique en 2026.",
    },
    regulatoryContext: {
      eyebrow: "Cadre ORES",
      heading: "ORES, compteur communicant et tarif prosumer : ce qui s'applique réellement à Wavre",
      body:
        "Wavre est desservie par ORES pour la distribution d'électricité. ORES déploie le compteur communicant sur l'ensemble de son territoire wallon avec une échéance fixée au 31 décembre 2029, soit environ 1,5 million d'appareils à remplacer, à un rythme annoncé d'environ 300 000 installations par an avec RESA. Le calendrier précis rue par rue à Wavre n'est pas publié, donc je conseille de vérifier votre situation directement auprès d'ORES avant tout dimensionnement. Côté tarif prosumer, le principe reste celui validé par la CWaPE : le tarif capacitaire ne s'applique qu'aux prosumers sans compteur double flux ou communicant, et la compensation (compteur qui tourne à l'envers) reste maintenue jusqu'au 31/12/2030 pour les installations certifiées avant le 01/01/2024. Le passage au communicant ouvre l'accès au tarif prosumer proportionnel, calculé sur les kWh réellement prélevés, avec garantie CWaPE qu'il ne peut pas coûter plus cher que le capacitaire. Pour 2026, ORES propose trois formules sous 56 kVA : monohoraire, bihoraire avec nouvelles plages creuses au 1er janvier 2026, et le tarif optionnel IMPACT réservé aux clients équipés d'un communicant. Côté urbanisme, le service communal traite les permis liés au plan de secteur et aux PPAS ; toute modification de toiture à proximité d'un bien classé doit être validée avec le service et l'AWaP.",
    },
    typicalProjects: {
      eyebrow: "Sur le terrain",
      heading: "Trois profils de chantiers que nous voyons revenir le plus souvent à Wavre",
      body:
        "Premier profil, la maison mitoyenne du centre ou des anciens noyaux villageois de Limal et Bierges, généralement entre 4 et 6 kWc selon la surface utile et l'orientation du pan de toiture disponible. Sur ce type de bâti, je passe beaucoup de temps en amont pour vérifier la structure de charpente, l'état de la couverture et la place réelle au tableau pour intégrer le coffret de protection PV conformément à la RGIE. Deuxième profil, la villa quatre façades de la couronne pavillonnaire, typiquement entre 8 et 12 kWc, souvent couplée à une batterie domestique dès lors que le client passe au compteur communicant et veut maximiser son autoconsommation. Troisième profil, la rénovation lourde ou le bâti ancien à proximité d'un périmètre patrimonial : église Saint-Jean-Baptiste, ancienne église des Carmes Chaussés, presbytère néoclassique. Dans ces cas, je travaille en concertation avec le service urbanisme et, le cas échéant, l'AWaP, pour positionner les modules sans compromettre la covisibilité avec le bien protégé. Aucune de ces configurations ne se traite avec un devis générique.",
    },
    commonChallenges: {
      eyebrow: "Points de vigilance",
      heading: "Ce que je vérifie systématiquement avant de poser le premier rail à Wavre",
      body:
        "Premier point, l'état réel du tableau électrique sur les villas des années 1970 et 1980 de la couronne. Beaucoup ont été modifiés sans déclaration et ne sont plus conformes à la version actuelle de la RGIE, ce qui pose un problème de raccordement et de certification PV. La mise en conformité doit être chiffrée honnêtement dès le devis, pas découverte le jour de la pose. Deuxième point, la charpente et la couverture des maisons mitoyennes du centre. Une tuile béton en fin de vie ou une volige fatiguée changent radicalement le coût et la séquence d'intervention. Troisième point, la dimension électrique du raccordement : un 8 kWc avec batterie ne se traite pas comme un 4 kWc sans stockage, et la déclaration ORES doit être préparée correctement pour éviter les retards. Quatrième point, le contexte patrimonial. Le territoire wavrien comporte plusieurs édifices classés et zones de protection gérées par l'AWaP via le Géoportail de la Wallonie. À proximité, l'implantation des modules, leur teinte et leur covisibilité doivent être anticipées avec le service urbanisme communal, joignable via urbanisme@wavre.be ou au (010) 230.371.",
    },
    faq: [
      {
        question: "Quel sera mon tarif prosumer à Wavre en 2026 ?",
        answer:
          "Cela dépend de votre compteur. Si vous êtes encore en compteur mécanique classique sans communicant, vous restez sous le tarif prosumer capacitaire wallon, dont les valeurs 2026 ont été approuvées par la CWaPE dans le cadre tarifaire 2026-2029. Si vous passez au compteur communicant ou avez déjà un double flux, vous basculez sur le tarif prosumer proportionnel, calculé sur les kWh réellement prélevés au réseau. La CWaPE garantit que ce passage ne peut pas coûter plus cher que le capacitaire. Les montants exacts en €/kWe sont à vérifier sur les tableaux officiels CWaPE et ORES avant signature.",
      },
      {
        question: "Le compteur communicant ORES est-il déjà installé chez moi ?",
        answer:
          "ORES déploie le communicant sur tout son territoire wallon avec une fin de déploiement fixée au 31 décembre 2029, à raison d'environ 300 000 compteurs par an avec RESA. Le calendrier précis rue par rue à Wavre n'est pas publié. Je vous recommande de demander votre situation directement à ORES avant de figer le dimensionnement de votre installation, surtout si vous envisagez une batterie.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour des panneaux photovoltaïques à Wavre ?",
        answer:
          "En règle générale, des panneaux intégrés dans le plan de toiture hors périmètre patrimonial ne nécessitent pas de permis. Mais Wavre comporte plusieurs biens classés et zones de protection gérées par l'AWaP, dont l'ancienne église des Carmes Chaussés devenue hôtel de ville, l'église Saint-Jean-Baptiste, le presbytère néoclassique et la villa gallo-romaine de Basse-Wavre. À proximité, ou en cas de PPAS local, la situation doit être validée au cas par cas avec le service urbanisme communal.",
      },
      {
        question: "Combien de temps pour un raccordement ORES après la pose ?",
        answer:
          "Les délais varient selon la charge du GRD et la complexité du dossier. Je prépare toujours la déclaration ORES en amont avec le dossier technique complet (schémas, attestation RGIE, plan de calepinage) pour réduire les allers-retours administratifs. Aucun délai officiel rue par rue n'est publié pour Wavre.",
      },
      {
        question: "Une batterie domestique a-t-elle du sens chez ORES en 2026 ?",
        answer:
          "Cela dépend de votre profil de consommation, de votre tarif et de votre compteur. Avec un communicant et le nouveau tarif IMPACT proposé par ORES en 2026, ou un bihoraire avec nouvelles plages creuses, le calcul d'optimisation autoconsommation change. Je modélise toujours plusieurs scénarios chiffrés avant de proposer une batterie : ce n'est pas un réflexe automatique, c'est un arbitrage.",
      },
      {
        question: "Existe-t-il une prime communale wavrienne pour le photovoltaïque ?",
        answer:
          "La page officielle Aides et primes de la Ville de Wavre ne liste pas de prime communale dédiée à l'énergie ou au photovoltaïque. Les leviers financiers actuels passent par le cadre régional wallon (primes Habitation avec échéance fixée au 30 septembre 2026), le Rénoprêt à 0 % via la SWCS ou le FLW, et la TVA réduite à 6 % pour les logements de plus de 10 ans.",
      },
    ],
  },

  nivelles: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Lecture du bâti",
      heading: "Un centre historique dense et une couronne pavillonnaire très différenciée",
      body:
        "Nivelles, 29 429 habitants sur 60,8 km² selon WalStat, présente un contraste de bâti qui conditionne directement le calepinage photovoltaïque. Le centre historique s'organise autour de la Collégiale Sainte-Gertrude, classée monument depuis 1936 et inscrite au Patrimoine exceptionnel de Wallonie. On y trouve des immeubles anciens en brique et pierre, souvent couverts d'ardoise sur des toitures à forte pente, avec des faîtages contraints et des vues sensibles depuis l'espace public. La couronne pavillonnaire d'après-guerre, dominante en surface, est constituée majoritairement de quatre façades et de trois façades en brique rouge sous tuile, avec des orientations très hétérogènes par rapport au sud, ce qui impose une étude toiture par toiture plutôt qu'un dimensionnement standardisé. Le sud de l'entité conserve un tissu rural marqué par la typologie locale de la ferme en carré en briques et pierre calcaire, dont les vastes annexes peuvent accueillir des installations de plus grande puissance. À cela s'ajoutent les deux parcs d'activités gérés par in BW, Nivelles Nord (85,51 ha) et Nivelles Sud (205,88 ha plus extension), qui hébergent des toitures industrielles aux contraintes structurelles très différentes du résidentiel.",
    },
    regulatoryContext: {
      eyebrow: "Cadre ORES local",
      heading: "Compteur communicant, fin de la compensation et urbanisme patrimonial",
      body:
        "La commune est intégralement desservie par ORES, ce qui fixe le cadre opérationnel. Sur le plan du compteur communicant, ORES vise un déploiement généralisé chez les résidentiels d'ici le 31 décembre 2029, avec 429 272 compteurs basse tension déjà installés fin 2025 (environ 28 % du parc) et près de 260 000 nouvelles poses prévues en 2026 selon le bilan publié par BeProsumer. Pour connaître votre fenêtre, ORES met à disposition un planning en ligne (acdc-planning) interrogeable via votre code EAN. Côté prosumer, les installations mises en service avant le 1er janvier 2024 conservent automatiquement le principe de compensation jusqu'au 31 décembre 2030. Les installations postérieures à cette date ne sont pas soumises au tarif prosumer mais imposent obligatoirement un compteur communicant, et les frais de réseau sont calculés uniquement sur l'énergie réellement prélevée. Sur l'urbanisme, la réforme du CoDT dispense de permis les modules posés sur bâtiment existant, sous conditions de débordement et de pente (0,30 m et 15° en versant, 1,50 m et 35° en toiture plate). Cette dispense ne s'applique cependant pas aux biens classés ni aux zones protégées : autour de la Collégiale et en centre historique, il faut systématiquement valider le projet avec le service urbanisme et, le cas échéant, l'AWaP.",
    },
    typicalProjects: {
      eyebrow: "Profils récurrents",
      heading: "Trois familles d'installations qui reviennent constamment à Nivelles",
      body:
        "Sur la couronne pavillonnaire, le projet récurrent est la maison quatre façades des années 60 à 90, généralement entre 8 et 12 kWc en monocristallin, souvent associée à une batterie domestique pour anticiper la fin de la compensation en 2030 et lisser le profil de soutirage. Sur les trois façades plus modestes du centre élargi et des anciens noyaux villageois, on dimensionne plutôt entre 4 et 6 kWc, avec un travail précis sur l'orientation et les ombrages, parfois avec micro-onduleurs lorsque la toiture est partagée entre deux versants utiles. Dans le tissu rural au sud de l'entité, les anciennes fermes en carré reconverties offrent des grandes toitures de hangars ou d'annexes agricoles, où l'on intervient sur des puissances supérieures, avec un audit structurel de charpente préalable. En centre historique, autour de la Collégiale, chaque dossier est traité comme une rénovation patrimoniale : pré-validation urbanisme, calepinage discret, modules sombres alignés sur la trame d'ardoise, et arbitrage honnête lorsque la visibilité depuis l'espace public rend l'installation incompatible avec le cadre protégé.",
    },
    commonChallenges: {
      eyebrow: "Vu sur le terrain",
      heading: "Ce qui ressort des contrôles et des chantiers sur Nivelles",
      body:
        "Le premier point sensible reste la toiture en ardoise du bâti ancien. Beaucoup de couvertures couvrent des charpentes d'origine, parfois affaiblies, et un poids de panneaux mal réparti se traduit par des déformations à moyen terme. Sur ce type de bâti, je préfère refuser un chantier que poser sur une structure douteuse. Deuxième point récurrent : les tableaux électriques de la périphérie pavillonnaire des années 70 et 80, souvent sous-dimensionnés, sans différentiel 30 mA conforme ni schéma à jour. Avant tout raccordement onduleur, je vérifie la mise à la terre, la sélectivité et la conformité RGIE, parce qu'un défaut côté tableau ne se rattrape pas après mise en service. Troisième point : la planification ORES. Avec le déploiement progressif du compteur communicant, l'ordre des opérations compte. Pour les installations post-2024, le compteur communicant est obligatoire, et il faut séquencer raccordement, mise en service et basculement pour éviter des semaines d'attente. Enfin, en centre historique, l'erreur la plus fréquente est de promettre une installation sans avoir interrogé le service urbanisme : la procédure peut être plus longue, et parfois la réponse est non.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer ORES applicable à Nivelles en 2026 ?",
        answer:
          "Les tarifs de distribution applicables au tarif prosumer sont publiés et mis à jour chaque année par la CWaPE. Je ne communique jamais de chiffre figé : pour le montant 2026 exact en €/kWe applicable sur le réseau ORES, la référence est cwape.be. Rappel utile : si votre installation a été mise en service avant le 1er janvier 2024, vous restez en principe de compensation jusqu'au 31 décembre 2030.",
      },
      {
        question: "Mon compteur communicant ORES, c'est pour quand à Nivelles ?",
        answer:
          "ORES déploie commune par commune, avec un objectif de généralisation chez les résidentiels d'ici fin 2029. Pour obtenir une estimation par trimestre, le plus fiable est d'utiliser l'outil acdc-planning d'ORES en saisissant votre code EAN. Pour toute nouvelle installation PV depuis le 1er janvier 2024, le compteur communicant est de toute façon obligatoire au raccordement.",
      },
      {
        question: "Y a-t-il des contraintes d'urbanisme spécifiques au centre de Nivelles ?",
        answer:
          "Oui. La dispense wallonne de permis pour le PV en toiture ne s'applique pas aux biens classés ni aux zones protégées. Autour de la Collégiale Sainte-Gertrude, inscrite au Patrimoine exceptionnel, et dans les périmètres patrimoniaux, l'installation doit être pré-validée auprès du service urbanisme de la commune, voire de l'AWaP. À vérifier toiture par toiture selon l'adresse et le PPAS éventuel.",
      },
      {
        question: "Combien de temps pour un raccordement ORES après installation ?",
        answer:
          "Les délais varient selon la zone, la charge des équipes ORES et la nécessité ou non de placer un compteur communicant. Je planifie systématiquement la demande de raccordement en parallèle des travaux, et je préviens le client que la mise en service officielle peut prendre plusieurs semaines après la fin du chantier physique. Aucun délai garanti ne vient de moi : seul ORES s'engage.",
      },
      {
        question: "Une batterie domestique a-t-elle du sens à Nivelles sur réseau ORES ?",
        answer:
          "Cela dépend de votre profil. Sous compensation (installation pré-2024), la batterie a surtout un intérêt d'anticipation pour 2030. Pour une installation post-2024 sans tarif prosumer mais sans valorisation automatique de l'injection, la rentabilité dépend de votre taux d'autoconsommation et du contrat fournisseur. Je ne propose une batterie qu'après analyse du profil de consommation réel.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // BRUXELLES-CAPITALE - FR
  // -------------------------------------------------------------------------
  bruxelles: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Parc bâti bruxellois",
      heading: "Un tissu urbain ancien, dense et patrimonial qui dicte la méthode d'installation",
      body:
        "La Région de Bruxelles-Capitale, ce sont 19 communes, environ 1,25 million d'habitants et un parc d'environ 606 400 logements début 2024, en croissance d'environ 9% sur dix ans. La particularité bruxelloise tient surtout à l'âge du bâti : 84% des bâtiments ont été construits avant 1960, environ deux tiers datent d'avant 1945, et seulement 5% ont été érigés après 1991 avec une enveloppe légèrement isolée dès l'origine. Cela change tout pour le photovoltaïque. La maison bruxelloise type, née entre 1850 et les premières décennies du 20e siècle, est étroite, longitudinale, mitoyenne, souvent couverte d'une toiture mansardée avec brisis en ardoise. Les maisons à deux façades représentent encore plus de la moitié des bâtiments, pendant que les immeubles à appartements progressent d'environ 700 bâtiments par an. La périphérie résidentielle, plus aérée, accueille davantage de villas trois et quatre façades, notamment au sud et à l'est. Avant tout devis, je distingue toujours deux cas : le centre historique dense, où la surface de toit utilisable est contrainte par la géométrie et le voisinage, et la périphérie pavillonnaire, où la pente et l'orientation laissent plus de marge. La même installation ne se conçoit pas de la même manière dans le Pentagone et dans une villa quatre façades.",
    },
    regulatoryContext: {
      eyebrow: "Sibelga et Brugel",
      heading: "Pas de tarif prosumer, mais un cadre Brugel qui évolue vite en 2026",
      body:
        "À Bruxelles, le gestionnaire de réseau unique est Sibelga et le régulateur est Brugel. Première bonne nouvelle : il n'existe aucun tarif prosumer bruxellois, parce que toutes les installations sont équipées d'un compteur bidirectionnel mesurant séparément l'énergie prélevée et l'énergie injectée. Le principe de compensation a pris fin en 2020 avec la mise en œuvre du système MIG6 : depuis, le prosumer paie toute l'électricité prélevée au prix plein et revend son injection au prix de marché. La rentabilité repose donc essentiellement sur l'autoconsommation. Bruxelles reste, à ce jour, la seule région belge qui continue d'octroyer des certificats verts pour toutes les installations PV, mais Brugel ajuste les taux à partir du 1er avril 2026 : taux inchangé jusqu'à 5 kWc, baisse d'environ 11% entre 5 et 36 kWc, baisse d'environ 45% entre 36 et 100 kWc, et plus aucun CV au-delà de 100 kWc. À partir du 1er janvier 2026, toute nouvelle installation jusqu'à 5 kWc devra disposer d'un certificat RESCert PV pour accéder aux CV. Sibelga déploie les compteurs intelligents depuis 2019 lors des nouveaux raccordements et rénovations importantes, avec systématisation pour les prosumers, les bornes et le partage d'énergie. Toute installation PV, batterie ou borne doit être déclarée via greenmeter.sibelga.be dans les 30 jours, sous peine de pénalité depuis le 1er mai 2025.",
    },
    typicalProjects: {
      eyebrow: "Ce qu'on installe à Bruxelles",
      heading: "Trois profils dominants, du Pentagone à la périphérie pavillonnaire",
      body:
        "Sur le terrain, je vois trois profils revenir en boucle. D'abord la maison mitoyenne à deux façades du centre ou des premières couronnes, souvent à toiture mansardée en ardoise : on dimensionne en général entre 3 et 5 kWc pour rester sous le seuil des 5 kWc, garder le taux plein de certificats verts et passer le projet en dispense de permis quand la toiture le permet. Ensuite la villa trois ou quatre façades en périphérie résidentielle, typiquement 6 à 10 kWc, parfois couplée à une batterie domestique et une borne de recharge pour exploiter au maximum l'autoconsommation, puisque l'injection est rémunérée au prix de marché. Enfin la rénovation patrimoniale, où l'on travaille sur un bâtiment classé, inscrit à l'inventaire ou situé en zone de protection : ici, le dossier passe systématiquement par l'avis de la Commission royale des Monuments et des Sites, et le projet est conçu pour rester invisible depuis l'espace public. Dans les trois cas, on déclare l'installation à Sibelga via greenmeter.sibelga.be dans les 30 jours et on cale le calendrier sur les nouveaux taux de CV applicables à partir du 1er avril 2026.",
    },
    commonChallenges: {
      eyebrow: "Réalité de chantier",
      heading: "Toitures anciennes, contraintes patrimoniales et tableaux électriques à reprendre",
      body:
        "Le premier piège, à Bruxelles, c'est la toiture. Avec un parc bâti construit majoritairement avant 1960, on ouvre souvent des charpentes anciennes, des voliges fatiguées, des supports d'ardoise hétérogènes. Je refuse de poser des panneaux sur un complexe de couverture qui ne tiendra pas 25 ans : on vérifie la structure, on remplace ce qui doit l'être, et on documente. Deuxième piège : le cadre patrimonial. Pour un bâtiment classé, inscrit à l'inventaire ou situé en zone de protection, l'avis de la CRMS est indispensable, et la Grand-Place, inscrite à l'UNESCO depuis 1998, est protégée par un règlement zoné spécifique. Même un remplacement de tuiles en terre cuite par de l'ardoise peut requérir un permis d'urbanisme parce qu'il modifie l'aspect de la toiture. Troisième piège : le tableau électrique. Dans une maison bruxelloise d'avant-guerre, je tombe régulièrement sur des installations non conformes au RGIE, des terres absentes ou douteuses, des sections sous-dimensionnées. Avant le PV, on remet l'installation en ordre. Enfin, on n'oublie pas la déclaration Sibelga sous 30 jours, sous peine de pénalité depuis le 1er mai 2025.",
    },
    faq: [
      {
        question: "Quel est le tarif prosumer Sibelga en 2026 à Bruxelles ?",
        answer:
          "Il n'en existe aucun. Bruxelles ne facture pas de redevance forfaitaire basée sur la puissance de l'installation, parce que toutes les installations PV bruxelloises sont équipées d'un compteur bidirectionnel mesurant séparément l'énergie prélevée et l'énergie injectée. Le principe de compensation a pris fin en 2020 : depuis, vous payez l'électricité prélevée au prix plein et vous revendez l'injection à votre fournisseur au prix de marché.",
      },
      {
        question: "Le compteur communicant est-il déjà déployé chez moi ?",
        answer:
          "Sibelga déploie les compteurs intelligents depuis 2019 lors des nouveaux raccordements, des remplacements de compteurs et des rénovations importantes, avec un objectif d'environ 80% du parc à l'horizon 2030. Pour tout nouveau prosumer, propriétaire de véhicule électrique chargé à domicile ou participant au partage d'énergie, l'installation d'un compteur intelligent est systématique. Le statut exact de votre point de raccordement se vérifie auprès de Sibelga.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour poser des panneaux à Bruxelles ?",
        answer:
          "Pas pour des panneaux non visibles depuis l'espace public, ou intégrés et parallèles au plan de la toiture sans saillie de plus de 30 cm, sur un bâtiment non classé. Pour un bâtiment classé, inscrit à l'inventaire ou situé en zone de protection, l'avis de la Commission royale des Monuments et des Sites est obligatoire. Dans le périmètre UNESCO de la Grand-Place, le règlement communal zoné s'applique. À vérifier au cas par cas auprès du service urbanisme communal.",
      },
      {
        question: "Quel est le délai de raccordement Sibelga après installation ?",
        answer:
          "Toute installation photovoltaïque, batterie ou borne de recharge doit être déclarée à Sibelga via greenmeter.sibelga.be dans les 30 jours suivant la mise en service. Depuis le 1er mai 2025, Sibelga applique une pénalité en cas de déclaration tardive. C'est nous qui gérons cette démarche pour nos clients.",
      },
      {
        question: "Une batterie domestique est-elle pertinente à Bruxelles ?",
        answer:
          "Souvent oui, parce que la rentabilité repose entièrement sur l'autoconsommation : l'injection est rémunérée au prix de marché, généralement plus bas que le prix d'achat. Une batterie a du sens si votre profil de consommation est décalé de la production solaire, par exemple en cas de télétravail partiel, de borne de recharge, ou de pompe à chaleur. Le dimensionnement se fait sur base de votre courbe de charge réelle, pas d'une formule générique.",
      },
      {
        question: "Les primes Renolution PV existent-elles encore en 2026 ?",
        answer:
          "Les primes Renolution photovoltaïques ne sont plus octroyées à Bruxelles depuis 2024. Le soutien public passe désormais par les certificats verts via Brugel, par le compteur bidirectionnel et par le crédit ECORENO pour le financement. À partir du 1er janvier 2026, l'installation doit être réalisée par un installateur certifié RESCert PV pour ouvrir le droit aux certificats verts jusqu'à 5 kWc.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // PROVINCE LUXEMBOURG - FR
  // -------------------------------------------------------------------------
  arlon: {
    locale: "fr",
    urbanTypology: {
      eyebrow: "Tissu bâti",
      heading: "Entre coeur lorrain ancien et lotissements pavillonnaires en périphérie",
      body:
        "Arlon présente un parc immobilier nettement plus hétérogène que ce que laisse entendre l'image de chef-lieu provincial. Le centre historique s'organise autour du Knippchen et de l'église Saint-Donat, sur un site occupé depuis l'époque gallo-romaine, avec une trame dense de bâtisses anciennes où la covisibilité avec les monuments classés impose une lecture patrimoniale fine avant tout projet en toiture. En s'éloignant vers les faubourgs du XIXe et les anciens villages annexés couverts par les codes postaux 6700, 6704 et 6706, le tissu devient progressivement plus rural et marqué par l'influence lorraine: maisons-bloc à toit à deux versants de faible pente, faîte parallèle à la rue, gros oeuvre en pierre calcaire enduite, couverture historiquement en tuile canal mais aujourd'hui majoritairement en ardoise. La périphérie, illustrée par la pression d'urbanisation autour de Schoppach, concentre les lotissements pavillonnaires des dernières décennies, avec villas quatre façades, toitures à pente standard et capacité de pose en surimposition généralement plus simple. Selon le quartier, la nature de la couverture, la pente du versant, l'ombrage des bâtiments voisins ou des arbres mûrs changent radicalement le calepinage. Aucun projet sérieux ne devrait être chiffré sans relevé physique préalable de la toiture et de son environnement immédiat.",
    },
    regulatoryContext: {
      eyebrow: "Cadre wallon",
      heading: "GRD ORES, compteur communicant en déploiement et fin progressive de la compensation",
      body:
        "Contrairement à une idée parfois entretenue par d'anciennes communications, Arlon n'est pas desservie par AIEG mais bien par ORES, qui couvre la quasi-totalité de la province de Luxembourg et dispose d'un bureau d'accueil avenue Patton. AIEG ne gère le réseau que dans cinq communes namuroises. Pour le compteur communicant, l'objectif régional est un déploiement généralisé d'ici fin 2029, avec installation gratuite, et une priorité est déjà donnée depuis 2023 aux installations photovoltaïques de plus de 5 kW. Sur le plan financier, le principe de la compensation reste maintenu jusqu'au 31 décembre 2030 pour les installations de 10 kW ou moins mises en service avant le 1er janvier 2024. Pour les installations mises en service à partir de cette date, ORES facture séparément l'injection et le prélèvement, et le tarif prosumer existe en variante capacitaire forfaitaire ou proportionnelle. Côté urbanisme, le CoDT dispense depuis mai 2025 les panneaux sur bâtiment existant de permis, sous réserve de débordement vertical inférieur à 0,30 m et de différence de pente inférieure à 15° par rapport au versant. Le règlement RGBZPU local et la proximité de biens classés restent à vérifier auprès du service urbanisme de la Ville.",
    },
    typicalProjects: {
      eyebrow: "Profils récurrents",
      heading: "Trois configurations qui reviennent le plus souvent sur le territoire arlonais",
      body:
        "Sur le terrain, trois profils dominent les demandes que nous traitons à Arlon. Premièrement, la maison de faubourg ou la maison-bloc lorraine en zone semi-dense, généralement équipée d'une couverture ardoisée sur charpente traditionnelle, où nous calibrons typiquement des installations de 4 à 6 kWc avec un soin particulier sur la fixation et la reprise d'étanchéité. Deuxièmement, la villa quatre façades des lotissements périphériques de la seconde moitié du XXe siècle et plus récents, avec toiture en bon état et pente régulière, sur laquelle 8 à 12 kWc couplés à une batterie domestique deviennent cohérents dès que le foyer combine pompe à chaleur, recharge de véhicule électrique ou ballon piloté. Troisièmement, les rénovations en périphérie du centre historique, où la pose doit composer avec la covisibilité, le RGBZPU et parfois une couverture vieillissante: dans ce cas, le projet photovoltaïque est souvent l'occasion de remettre à plat la couverture, la mise à la terre et le tableau électrique avant pose. Aucun de ces profils n'est figé: l'orientation réelle, l'ombrage et le profil de consommation tranchent toujours le dimensionnement final.",
    },
    commonChallenges: {
      eyebrow: "Points de vigilance",
      heading: "Charpentes anciennes, tableaux sous-dimensionnés et lecture patrimoniale du centre",
      body:
        "Mon parcours d'ancien inspecteur en installation électrique me ramène toujours aux mêmes points faibles sur le bâti arlonais. Dans les maisons anciennes du centre et des villages annexés, la charpente n'a parfois jamais été pensée pour supporter une surcharge permanente: un relevé des sections et un contrôle des pannes s'impose avant tout chantier, surtout sur les couvertures ardoisées posées il y a plusieurs décennies. Sur certains bâtiments d'avant 1998, je rencontre encore des plaques ondulées amiantées qui doivent être traitées en filière réglementée avant pose. Côté électrique, beaucoup de tableaux des années 70 à 90 sont sous-dimensionnés pour accueillir un onduleur, une batterie et une borne de recharge en parallèle, et la mise à la terre ne respecte pas toujours le RGIE actuel. Enfin, à proximité du Knippchen, de Saint-Donat ou de la Grand-Place, la covisibilité avec des biens classés rend la lecture du RGBZPU obligatoire, et l'orientation idéale doit parfois céder le pas à une intégration plus discrète. Ces contraintes ne sont pas des obstacles mais des paramètres: ils doivent figurer dans le devis, pas être découverts pendant la pose.",
    },
    faq: [
      {
        question: "Quel sera le tarif prosumer à Arlon en 2026 ?",
        answer:
          "À Arlon, le gestionnaire de réseau est ORES, pas AIEG. Le montant exact du tarif prosumer, qu'il soit capacitaire forfaitaire ou proportionnel, est fixé chaque année par la CWaPE sur proposition d'ORES. Nous communiquons toujours le tarif applicable à votre dossier sur base des grilles publiées en cours d'année par la CWaPE et ORES, sans avancer de chiffre estimatif.",
      },
      {
        question: "Le compteur communicant est-il déjà installé chez moi ?",
        answer:
          "ORES déploie progressivement le compteur communicant sur l'ensemble de la Wallonie, avec un objectif de couverture généralisée d'ici fin 2029 et installation gratuite. La priorité est donnée depuis 2023 aux installations photovoltaïques de plus de 5 kW. Le calendrier précis pour votre rue à Arlon dépend de la planification d'ORES; nous vérifions systématiquement le statut avant de figer le scénario de facturation.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour poser des panneaux à Arlon ?",
        answer:
          "Depuis l'entrée en vigueur de la révision du CoDT en mai 2025, les panneaux photovoltaïques sur bâtiment existant sont dispensés de permis en Wallonie, à condition de respecter un débordement vertical de moins de 30 cm et un écart de pente inférieur à 15° par rapport au versant. Des règles plus strictes restent applicables en zone protégée en matière d'urbanisme et à proximité de biens classés. Pour le centre historique d'Arlon, la situation doit être vérifiée auprès du service urbanisme communal.",
      },
      {
        question: "Mon ancienne installation est-elle encore protégée par la compensation ?",
        answer:
          "Oui, si votre installation photovoltaïque de 10 kW ou moins a été mise en service avant le 1er janvier 2024, le principe de compensation reste maintenu jusqu'au 31 décembre 2030, indépendamment du type de compteur installé entre-temps. Pour toute installation mise en service depuis 2024, la facturation se fait séparément en injection et prélèvement.",
      },
      {
        question: "Une batterie domestique est-elle pertinente à Arlon ?",
        answer:
          "Cela dépend du profil. Le passage au tarif proportionnel devient intéressant lorsque votre autoconsommation réelle dépasse le taux présumé de 37,76 %. Une batterie, combinée à une pompe à chaleur, une borne de recharge ou un ballon piloté, peut faire basculer cet arbitrage en votre faveur. Nous le calculons sur votre courbe de consommation réelle, pas sur une moyenne théorique.",
      },
    ],
  },
};

export function getCityDeepDive(citySlug: string): CityDeepDive | undefined {
  return cityDeepDive[citySlug];
}
