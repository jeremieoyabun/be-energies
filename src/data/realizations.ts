import type { Realization } from "@/lib/types";

export const realizations: Realization[] = [
  // --- Existing 4, enriched ---
  {
    slug: "riemst-32-panneaux",
    title: "32 panneaux SunPower à Riemst -- 11.36 kWc",
    city: "riemst",
    service: "panneaux-photovoltaiques",
    panelCount: 32,
    kwc: 11.36,
    brands: ["SunPower", "SolarEdge"],
    date: "2025-09",
    clientType: "residential",
    category: "premium",
    description:
      "Installation de 32 panneaux SunPower Maxeon 6 avec optimiseurs SolarEdge sur une toiture en tuiles orientée sud-ouest à Riemst. Le dimensionnement a été calculé pour couvrir la consommation du ménage, y compris la recharge d'un véhicule électrique. Taux d'autoconsommation estimé à 62%, avec un retour sur investissement projeté à 7 ans sous le régime actuel du tarif prosommateur en Flandre.",
    images: [
      "/img/realisations/riemst.webp",
      "/img/realisations/panneaux-tongres.webp",
    ],
    caseStudy: {
      challenge:
        "Le propriétaire avait reçu deux offres concurrentes avec des panneaux d'entrée de gamme et un dimensionnement surdimensionné de 14 kWc. Il voulait comprendre pourquoi les propositions différaient autant et s'il risquait de payer pour de la puissance inutile.",
      solution:
        "Benoît a réalisé une analyse détaillée de la consommation annuelle, de l'orientation réelle de la toiture (azimut 215 degrés) et du profil d'utilisation. Le résultat : 11.36 kWc suffisaient largement, avec un meilleur rendement par panneau grâce aux SunPower Maxeon 6. L'ajout d'optimiseurs SolarEdge permet de gérer les micro-ombrages du faîtage voisin.",
      result:
        "Le client économise environ 1 850 euros par an sur sa facture énergétique. L'installation a passé le contrôle de conformité sans aucune remarque. Le surdimensionnement évité lui fait économiser plus de 3 000 euros sur le coût initial.",
      technicalDetails: [
        "32x SunPower Maxeon 6 -- 355 Wc unitaire",
        "Optimiseurs SolarEdge P505",
        "Onduleur SolarEdge SE10K",
        "Monitoring cloud SolarEdge",
        "Toiture tuiles -- inclinaison 35 degrés -- azimut 215 degrés",
      ],
    },
  },
  {
    slug: "liege-installation-pv-batterie",
    title: "Panneaux + batterie à Liège -- 8.5 kWc",
    city: "liege",
    service: "panneaux-photovoltaiques",
    panelCount: 24,
    kwc: 8.5,
    brands: ["Longi", "Huawei"],
    date: "2025-11",
    clientType: "residential",
    category: "standard",
    description:
      "Installation combinée panneaux photovoltaïques et batterie Huawei LUNA 10 kWh pour un ménage de 4 personnes à Liège. Le système a été dimensionné pour maximiser l'autoconsommation face au tarif prosommateur wallon. La batterie couvre les pics de consommation en soirée et réduit l'injection sur le réseau. Autoconsommation mesurée à 78% après trois mois de fonctionnement.",
    images: [
      "/img/realisations/batteries-crisnee.webp",
      "/img/realisations/batterie-maison.webp",
    ],
    caseStudy: {
      challenge:
        "Le client hésitait à investir dans le photovoltaïque après avoir lu que les panneaux n'étaient plus rentables en Wallonie avec le compteur communicant. Il craignait que le tarif prosommateur annule tout bénéfice financier.",
      solution:
        "Benoît a présenté une simulation réelle basée sur les données de consommation RESA du client, en comparant trois scénarios : panneaux seuls, panneaux + batterie, et statu quo. La batterie Huawei LUNA 10 kWh s'est avérée rentable grâce au profil de consommation du ménage (forte consommation en soirée). Le dimensionnement a été volontairement contenu à 8.5 kWc pour éviter une surproduction coûteuse.",
      result:
        "Autoconsommation réelle de 78% mesurée sur les trois premiers mois. Réduction de la facture annuelle estimée à 1 420 euros. Le client comprend désormais exactement comment son installation fonctionne et pourquoi elle est rentable, malgré le tarif prosommateur.",
      technicalDetails: [
        "24x Longi Hi-MO 6 -- 355 Wc unitaire",
        "Onduleur hybride Huawei SUN2000-8KTL-M1",
        "Batterie Huawei LUNA2000-10-S0",
        "GRD : RESA",
        "Compteur communicant installé",
      ],
    },
  },
  {
    slug: "namur-borne-recharge",
    title: "Borne de recharge à Namur -- Wallbox Pulsar Plus",
    city: "namur",
    service: "bornes-de-recharge",
    brands: ["Wallbox"],
    date: "2025-10",
    clientType: "residential",
    category: "standard",
    description:
      "Installation d'une borne Wallbox Pulsar Plus 22 kW en monophasé chez un particulier à Namur. La borne a été connectée à l'installation photovoltaïque existante de 6 kWc, avec programmation pour privilégier la recharge solaire en journée. Le tableau électrique a été adapté pour supporter la charge sans risque de surcharge.",
    images: [
      "/img/realisations/borne.webp",
      "/img/realisations/borne-chaudfontaine.webp",
    ],
    caseStudy: {
      challenge:
        "Le client venait d'acheter un véhicule électrique et souhaitait une borne rapide. Son installation électrique datait de 2008 et le différentiel 300mA n'était pas adapté. Un concurrent proposait d'installer la borne sans modifier le tableau.",
      solution:
        "Benoît a refusé de poser la borne sans d'abord mettre le tableau en sécurité. Un différentiel 30mA dédié a été ajouté, le câblage a été repris en 6mm2, et la borne a été configurée pour limiter la charge à 7.4 kW en monophasé (32A). La programmation solaire permet de déclencher la charge automatiquement quand la production PV dépasse 2 kW.",
      result:
        "La borne fonctionne en toute sécurité depuis l'installation. Le client recharge principalement en journée grâce au surplus solaire. L'installation a passé le contrôle de conformité du premier coup -- ce qui n'aurait pas été le cas sans la mise à niveau du tableau.",
      technicalDetails: [
        "Wallbox Pulsar Plus 7.4 kW monophasé",
        "Différentiel 30mA type A dédié",
        "Câblage 6mm2",
        "Programmation surplus solaire via Wallbox App",
        "Adaptation tableau existant",
      ],
    },
  },
  {
    slug: "charleroi-conformite",
    title: "Mise en conformité électrique à Charleroi",
    city: "charleroi",
    service: "conformite-electrique",
    date: "2025-12",
    clientType: "residential",
    category: "correction",
    description:
      "Reprise complète du tableau électrique et mise en conformité d'une maison des années 70 à Charleroi, après un refus de contrôle initial par un autre installateur. Remplacement du coffret, ajout des différentiels manquants, reprise du câblage non conforme et mise à la terre. Contrôle passé sans aucune remarque au deuxième passage.",
    images: [
      "/img/Be-energies_conformite_mobile.webp",
    ],
    caseStudy: {
      challenge:
        "Le propriétaire avait fait appel à un électricien général pour préparer sa maison à la vente. L'installation a échoué au contrôle RGIE : 7 infractions identifiées, dont l'absence de différentiel 30mA, une mise à la terre défaillante et des circuits non protégés. L'électricien initial refusait de reprendre le chantier.",
      solution:
        "Benoît, fort de son expérience d'ancien contrôleur, a parcouru le rapport d'infraction et identifié les causes profondes. Le coffret entier a été remplacé par un tableau modulaire aux normes actuelles. Chaque circuit a été vérifié, ré-étiqueté et protégé individuellement. La prise de terre a été refaite avec un piquet de 1.5m et une résistance mesurée à 18 ohms.",
      result:
        "L'installation a passé le contrôle RGIE sans aucune remarque lors du second passage. Le propriétaire a pu finaliser la vente de sa maison dans les délais prévus. Coût total de la mise en conformité : nettement inférieur à ce que deux autres entreprises avaient chiffré, car le diagnostic précis de Benoît a évité des travaux inutiles.",
      technicalDetails: [
        "Tableau modulaire 4 rangées -- 52 modules",
        "7 différentiels 30mA type A et AC",
        "Reprise complète du câblage non conforme",
        "Prise de terre : piquet 1.5m -- résistance 18 ohms",
        "Contrôle RGIE passé sans remarque",
      ],
    },
  },

  // --- New realizations ---
  {
    slug: "charleroi-batterie-pv-tarif-capacitaire",
    title: "Batterie + PV à Charleroi -- optimisation tarif capacitaire",
    city: "charleroi",
    service: "batteries-domestiques",
    panelCount: 16,
    kwc: 6.4,
    brands: ["Longi", "Huawei"],
    date: "2026-01",
    clientType: "residential",
    category: "standard",
    description:
      "Installation combinée de 16 panneaux Longi et d'une batterie Huawei LUNA 5 kWh pour un couple à Charleroi, dans le cadre du nouveau régime tarifaire wallon. Le système a été spécifiquement dimensionné pour lisser les pics de prélèvement et réduire l'impact du tarif capacitaire (pointe quart-horaire). La batterie se décharge automatiquement lors des pics de consommation détectés par le compteur communicant.",
    images: [
      "/img/realisations/batterie-maison.webp",
      "/img/Be-energies_batteries-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le client avait lu dans la presse que le nouveau tarif capacitaire pénalisait les ménages qui concentrent leur consommation sur certaines plages horaires. Avec une pompe à chaleur et un chauffe-eau électrique, ses pointes de prélèvement dépassaient régulièrement 6 kW. Il voulait savoir si une batterie pouvait réellement réduire ce coût.",
      solution:
        "Benoît a analysé les données quart-horaires du compteur communicant (GRD ORES) sur 6 mois. Le diagnostic a révélé que 80% des pointes dépassant 5 kW se concentraient entre 17h et 20h. Une batterie de 5 kWh, couplée à 6.4 kWc de panneaux, suffisait à écrêter ces pointes. Le système Huawei a été programmé pour prioriser le lissage des pics plutôt que la simple autoconsommation.",
      result:
        "Après deux mois de fonctionnement, la pointe quart-horaire maximale est passée de 6.8 kW à 3.1 kW. L'économie estimée sur le tarif capacitaire est de 280 euros par an, en plus des économies liées à l'autoconsommation solaire. Le retour sur investissement global est estimé à 8 ans.",
      technicalDetails: [
        "16x Longi Hi-MO 6 -- 400 Wc unitaire",
        "Onduleur hybride Huawei SUN2000-6KTL-M1",
        "Batterie Huawei LUNA2000-5-S0",
        "Programmation peak shaving active",
        "GRD : ORES -- compteur communicant Sagemcom",
      ],
    },
  },
  {
    slug: "namur-pompe-a-chaleur-pv",
    title: "Pompe à chaleur + PV à Namur -- 9.6 kWc",
    city: "namur",
    service: "pompes-a-chaleur",
    panelCount: 24,
    kwc: 9.6,
    brands: ["Daikin", "Longi", "SolarEdge"],
    date: "2025-12",
    clientType: "residential",
    category: "premium",
    description:
      "Installation couplée d'une pompe à chaleur air-eau Daikin Altherma 3 et de 24 panneaux photovoltaïques Longi sur une maison 4 façades à Namur. Le dimensionnement de la PAC a été calculé sur base d'une étude thermique réelle, pas d'une estimation au m2. L'objectif : couvrir 65% des besoins électriques de la PAC par la production solaire sur l'année.",
    images: [
      "/img/realisations/engis.webp",
      "/img/realisations/engis-01.webp",
    ],
    caseStudy: {
      challenge:
        "Le propriétaire avait reçu une offre pour une PAC de 14 kW d'un concurrent, basée uniquement sur la surface habitable (220 m2). Benoît soupçonnait un surdimensionnement : la maison avait été isolée récemment (murs et toiture) et les déperditions réelles étaient bien inférieures à ce que la surface seule suggère.",
      solution:
        "Une étude thermique complète a été réalisée : calcul des déperditions par paroi, prise en compte de l'isolation récente (U-value murs 0.28), du vitrage double HR et de l'exposition. Résultat : une PAC de 8 kW suffisait largement, avec un COP saisonnier estimé à 3.8. Le système photovoltaïque de 9.6 kWc a été dimensionné pour couvrir la consommation de la PAC et du ménage, avec une batterie prévue en phase 2.",
      result:
        "La PAC Daikin Altherma 3 fonctionne depuis trois mois avec un COP mesuré de 4.1, au-dessus des prévisions. La facture de chauffage a été divisée par 3.5 par rapport à l'ancienne chaudière mazout. Le client économise aussi plus de 2 500 euros par an grâce à la suppression du mazout et à l'autoconsommation solaire.",
      technicalDetails: [
        "Daikin Altherma 3 EHBX08E6V -- 8 kW",
        "24x Longi Hi-MO 6 -- 400 Wc unitaire",
        "Onduleur SolarEdge SE10K",
        "Ballon tampon 300L",
        "COP saisonnier mesuré : 4.1",
        "GRD : ORES",
      ],
    },
  },
  {
    slug: "bruxelles-borne-triphase-pv",
    title: "Borne triphasée à Bruxelles -- intégration PV existant",
    city: "bruxelles",
    service: "bornes-de-recharge",
    brands: ["Wallbox", "Enphase"],
    date: "2026-02",
    clientType: "residential",
    category: "standard",
    description:
      "Installation d'une borne Wallbox Commander 2 en triphasé 22 kW dans une maison de maître à Bruxelles. L'enjeu technique principal : intégrer la borne à une installation photovoltaïque existante de 5 kWc équipée de micro-onduleurs Enphase, sans dépasser la capacité du raccordement Sibelga. Le pilotage dynamique de charge évite les dépassements de puissance souscrite.",
    images: [
      "/img/realisations/borne-riemst.webp",
    ],
    caseStudy: {
      challenge:
        "Le client disposait déjà de panneaux photovoltaïques avec micro-onduleurs Enphase. Son raccordement Sibelga était limité à 13.8 kVA en triphasé. Installer une borne 22 kW sans gestion intelligente aurait systématiquement fait disjoncter l'installation ou dépasser la puissance souscrite.",
      solution:
        "Benoît a installé une borne Wallbox Commander 2 avec un module de gestion dynamique de charge (Power Boost). Un tore de mesure placé sur le compteur général permet à la borne d'adapter sa puissance en temps réel selon la consommation du reste de la maison et la production solaire. La borne charge à pleine puissance uniquement quand la marge le permet.",
      result:
        "Aucun dépassement de puissance souscrite depuis la mise en service. Le client charge son Tesla Model 3 en 4 à 5 heures en triphasé. En journée, la borne exploite automatiquement le surplus solaire. L'installation a passé le contrôle de conformité Sibelga sans remarque.",
      technicalDetails: [
        "Wallbox Commander 2 -- 22 kW triphasé",
        "Module Power Boost avec tore de mesure",
        "Intégration Enphase IQ7+ existant",
        "Raccordement Sibelga 13.8 kVA",
        "Pilotage dynamique de charge actif",
      ],
    },
  },
  {
    slug: "mons-nettoyage-toiture-inspection",
    title: "Nettoyage toiture + inspection panneaux à Mons",
    city: "mons",
    service: "nettoyage-toiture",
    panelCount: 18,
    brands: ["SunPower"],
    date: "2025-11",
    clientType: "residential",
    category: "standard",
    description:
      "Nettoyage complet d'une toiture en tuiles béton colonisée par de la mousse sur une maison à Mons. L'intervention a été couplée à une inspection visuelle et électrique des 18 panneaux SunPower installés 8 ans plus tôt. Deux connecteurs MC4 présentaient des signes d'oxydation et ont été remplacés. Le rendement des panneaux a été mesuré avant et après nettoyage : gain de 12% de production récupéré.",
    images: [
      "/img/realisations/engis-02.webp",
      "/img/realisations/engis-03.webp",
    ],
    caseStudy: {
      challenge:
        "Le client constatait une baisse progressive du rendement de ses panneaux sur les deux dernières années, sans en comprendre la cause. Un nettoyeur de toiture classique lui proposait un traitement anti-mousse sans vérifier l'état électrique des panneaux.",
      solution:
        "Benoît a d'abord réalisé une inspection thermographique et électrique des 18 panneaux avant tout nettoyage. Deux connecteurs MC4 montrent des signes d'échauffement et d'oxydation, source probable de micro-arcs. Ils ont été remplacés avant le nettoyage haute pression basse (max 80 bars) de la toiture et des panneaux.",
      result:
        "La production mesurée a augmenté de 12% dès la semaine suivant l'intervention. Les connecteurs défaillants, s'ils n'avaient pas été détectés, auraient pu provoquer un point chaud ou, dans le pire des cas, un départ de feu. Le client a maintenant un suivi annuel programmé.",
      technicalDetails: [
        "18x SunPower E20 -- installation de 2017",
        "Inspection thermographique IR",
        "Remplacement 2x connecteurs MC4",
        "Nettoyage basse pression 80 bars max",
        "Traitement anti-mousse biodégradable",
        "Gain de production mesuré : +12%",
      ],
    },
  },
  {
    slug: "liege-conformite-rescue",
    title: "Sauvetage conformité à Liège -- contrôle échoué repris",
    city: "liege",
    service: "conformite-electrique",
    date: "2026-01",
    clientType: "residential",
    category: "correction",
    description:
      "Intervention de sauvetage sur une installation électrique à Liège après un premier contrôle RGIE échoué réalisé par un autre installateur. Le rapport d'infraction listait 9 non-conformités, dont 3 critiques. Benoît a repris le chantier, corrigé les défauts réels et identifié deux faux positifs dans le rapport initial. Contrôle repassé avec succès en 10 jours ouvrables.",
    images: [
      "/img/Be-energies_conformite_mobile.webp",
    ],
    caseStudy: {
      challenge:
        "La propriétaire venait d'hériter d'une maison à Liège et devait la mettre en conformité pour finaliser la succession et la mettre en location. Un premier électricien avait tenté une mise en conformité, mais le contrôle avait échoué avec 9 infractions. Elle avait déjà dépensé 2 800 euros sans résultat.",
      solution:
        "Benoît a étudié le rapport d'infraction ligne par ligne. Son expérience d'ancien contrôleur lui a permis d'identifier immédiatement les vrais problèmes et de contester deux points du rapport qui relevaient d'une interprétation discutable de la norme. Les 7 défauts réels ont été corrigés : reprise de la mise à la terre, ajout de différentiels, protection des circuits humides, et réétiquetage complet du tableau.",
      result:
        "Le contrôle de repassage a été validé sans remarque en 10 jours ouvrables après l'intervention. La propriétaire a pu mettre le bien en location dans les délais. Le coût total de la reprise par Be'energies était inférieur de 40% à ce que deux autres entreprises avaient chiffré pour le même travail.",
      technicalDetails: [
        "9 non-conformités identifiées -- 2 contestées -- 7 corrigées",
        "Reprise mise à la terre -- résistance finale 22 ohms",
        "5 différentiels 30mA ajoutés",
        "Protection circuits salle de bain et cuisine",
        "Réétiquetage complet du tableau",
        "Délai total : 10 jours ouvrables",
      ],
    },
  },
  {
    slug: "wavre-pv-premium-28-panneaux",
    title: "28 panneaux premium à Wavre -- 11.2 kWc",
    city: "wavre",
    service: "panneaux-photovoltaiques",
    panelCount: 28,
    kwc: 11.2,
    brands: ["SunPower", "Enphase"],
    date: "2026-02",
    clientType: "residential",
    category: "premium",
    description:
      "Installation haut de gamme de 28 panneaux SunPower Maxeon 6 avec micro-onduleurs Enphase IQ8+ sur une villa à Wavre. La toiture présentait deux orientations différentes (sud et est), ce qui imposait un système capable de gérer des productions asymétriques. Le choix des micro-onduleurs Enphase permet à chaque panneau de fonctionner indépendamment, sans perte liée à l'effet de chaîne.",
    images: [
      "/img/realisations/panneaux-tongres.webp",
      "/img/realisations/panneaux-tongres-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le propriétaire voulait une installation capable de couvrir la consommation d'un ménage de 5 personnes, incluant une pompe à chaleur et deux véhicules électriques. La toiture imposait une répartition sur deux pans (sud 60%, est 40%). Plusieurs installateurs avaient proposé un onduleur string classique, ce qui aurait pénalisé la production du pan sud à cause du pan est moins performant.",
      solution:
        "Benoît a recommandé des micro-onduleurs Enphase IQ8+ pour désolidariser les deux pans. Chaque panneau produit à son maximum indépendamment. Le dimensionnement de 11.2 kWc tient compte de la consommation réelle (estimée à 9 200 kWh/an) et du futur ajout d'une batterie. Le passage de câbles a été préparé pour une extension batterie sans intervention supplémentaire sur la toiture.",
      result:
        "La production des deux premiers mois dépasse les simulations de 8%, grâce à l'absence de perte par effet de chaîne. Le pan est, que d'autres installateurs voulaient ignorer, produit 74% de ce que produit le pan sud -- un apport significatif. L'installation a passé le contrôle de conformité sans remarque.",
      technicalDetails: [
        "28x SunPower Maxeon 6 -- 400 Wc unitaire",
        "28x Micro-onduleurs Enphase IQ8+",
        "Pan sud : 17 panneaux -- azimut 180 degrés -- 35 degrés",
        "Pan est : 11 panneaux -- azimut 90 degrés -- 30 degrés",
        "Précâblage batterie pour extension future",
        "Monitoring Enphase Enlighten",
        "GRD : ORES",
      ],
    },
  },
  {
    slug: "nivelles-pv-pme",
    title: "Installation PV pour PME à Nivelles -- 30 kWc",
    city: "nivelles",
    service: "panneaux-photovoltaiques",
    panelCount: 60,
    kwc: 30,
    brands: ["Longi", "Huawei"],
    date: "2025-10",
    clientType: "professional",
    category: "premium",
    description:
      "Installation de 60 panneaux Longi Hi-MO 6 sur le toit plat d'un entrepôt PME à Nivelles. Le système de 30 kWc est équipé de deux onduleurs Huawei SUN2000-15KTL en cascade et d'un système de monitoring avancé pour le suivi de production. L'installation est dimensionnée pour couvrir 70% de la consommation de l'activité en journée, où la production solaire correspond aux heures d'exploitation.",
    images: [
      "/img/realisations/plateforme.webp",
      "/img/realisations/pharmacie.webp",
    ],
    caseStudy: {
      challenge:
        "Le gérant de cette PME logistique à Nivelles recevait des factures d'électricité dépassant 12 000 euros par an. Plusieurs installateurs proposaient des systèmes de 50 à 70 kWc, avec des promesses de rendement irréalistes. Le gérant voulait un dimensionnement honnête et un retour sur investissement crédible.",
      solution:
        "Benoît a analysé les factures trimestrielles et le profil de consommation horaire de l'activité. La consommation est fortement concentrée en journée (8h-17h), ce qui favorise l'autoconsommation directe sans batterie. Un système de 30 kWc couvre 70% des besoins en journée sans surproduction excessive. Deux onduleurs Huawei en cascade assurent la redondance : si l'un tombe en panne, l'autre continue à produire.",
      result:
        "L'économie annuelle mesurée après 6 mois de fonctionnement se projette à 7 800 euros. Le retour sur investissement est estimé à 5 ans, grâce au taux d'autoconsommation élevé de 82% et aux primes wallonnes pour les installations professionnelles. Le gérant a déjà recommandé Be'energies à deux autres PME du zoning.",
      technicalDetails: [
        "60x Longi Hi-MO 6 -- 500 Wc unitaire",
        "2x Onduleurs Huawei SUN2000-15KTL-M2",
        "Structure lestée toit plat -- inclinaison 15 degrés",
        "Monitoring Huawei FusionSolar Pro",
        "Autoconsommation mesurée : 82%",
        "GRD : ORES",
      ],
    },
  },
  {
    slug: "tournai-correction-installation-defaillante",
    title: "Correction d'une installation défaillante à Tournai",
    city: "tournai",
    service: "panneaux-photovoltaiques",
    panelCount: 14,
    kwc: 5.6,
    brands: ["Longi", "SolarEdge"],
    date: "2025-08",
    clientType: "residential",
    category: "correction",
    description:
      "Reprise complète d'une installation photovoltaïque de 14 panneaux à Tournai, initialement posée par un concurrent aujourd'hui en faillite. L'installation présentait des défauts graves : câblage DC non protégé, onduleur sous-dimensionné, fixations non conformes et absence de mise à la terre des cadres. Benoît a corrigé l'ensemble et fait passer le contrôle de conformité qui n'avait jamais été réalisé.",
    images: [
      "/img/realisations/engis-01.webp",
      "/img/realisations/engis-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le propriétaire avait fait installer des panneaux en 2021 par une entreprise qui a depuis fait faillite. Il n'avait jamais reçu d'attestation de conformité et l'installation n'avait jamais été contrôlée. En la faisant vérifier pour une vente, il a découvert que l'installation était dangereuse et non conforme.",
      solution:
        "Benoît a effectué un diagnostic complet de l'installation existante. Les panneaux eux-mêmes (Longi Hi-MO 5) étaient en bon état, mais tout le reste posait problème : l'onduleur string de 3 kW était largement sous-dimensionné pour 5.6 kWc de panneaux, le câblage DC passait dans une gouttière sans protection, les fixations manquaient de points d'ancrage, et les cadres n'étaient pas reliés à la terre. L'onduleur a été remplacé par un SolarEdge SE5K, le câblage entièrement repris, les fixations renforcées et la mise à la terre réalisée.",
      result:
        "L'installation produit désormais 18% de plus qu'avant la correction, uniquement grâce au remplacement de l'onduleur sous-dimensionné qui bridait la production. Le contrôle de conformité a été passé avec succès. Le propriétaire a pu vendre sa maison avec une installation photovoltaïque certifiée conforme.",
      technicalDetails: [
        "14x Longi Hi-MO 5 -- 400 Wc (panneaux existants conservés)",
        "Onduleur remplacé : string 3 kW par SolarEdge SE5K",
        "Câblage DC entièrement repris en chemin de câble",
        "Fixations renforcées -- 4 points d'ancrage par panneau",
        "Mise à la terre des cadres aluminium",
        "Contrôle de conformité passé -- première fois depuis 2021",
      ],
    },
  },
];

export function getRealizationBySlug(slug: string): Realization | undefined {
  return realizations.find((r) => r.slug === slug);
}

export function getRealizationsForService(serviceSlug: string): Realization[] {
  return realizations.filter((r) => r.service === serviceSlug);
}

export function getRealizationsForCity(citySlug: string): Realization[] {
  return realizations.filter((r) => r.city === citySlug);
}

export function getRealizationsByClientType(clientType: "residential" | "professional"): Realization[] {
  return realizations.filter((r) => r.clientType === clientType);
}

export function getRealizationsByCategory(category: "standard" | "correction" | "renovation" | "premium"): Realization[] {
  return realizations.filter((r) => r.category === category);
}
