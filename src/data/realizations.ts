import type { Realization } from "@/lib/types";

export const realizations: Realization[] = [
  // --- Existing 4, enriched ---
  {
    slug: "riemst-32-panneaux",
    title: "32 panneaux SunPower a Riemst -- 11.36 kWc",
    city: "riemst",
    service: "panneaux-photovoltaiques",
    panelCount: 32,
    kwc: 11.36,
    brands: ["SunPower", "SolarEdge"],
    date: "2025-09",
    clientType: "residential",
    category: "premium",
    description:
      "Installation de 32 panneaux SunPower Maxeon 6 avec optimiseurs SolarEdge sur une toiture en tuiles orientee sud-ouest a Riemst. Le dimensionnement a ete calcule pour couvrir la consommation du menage, y compris la recharge d'un vehicule electrique. Taux d'autoconsommation estime a 62%, avec un retour sur investissement projete a 7 ans sous le regime actuel du tarif prosommateur en Flandre.",
    images: [
      "/images/realizations/riemst-pv-01.webp",
      "/images/realizations/riemst-pv-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le proprietaire avait recu deux offres concurrentes avec des panneaux d'entree de gamme et un dimensionnement surdimensionne de 14 kWc. Il voulait comprendre pourquoi les propositions differaient autant et s'il risquait de payer pour de la puissance inutile.",
      solution:
        "Benoit a realise une analyse detaillee de la consommation annuelle, de l'orientation reelle de la toiture (azimut 215 degres) et du profil d'utilisation. Le resultat : 11.36 kWc suffisaient largement, avec un meilleur rendement par panneau grace aux SunPower Maxeon 6. L'ajout d'optimiseurs SolarEdge permet de gerer les micro-ombrages du faitage voisin.",
      result:
        "Le client economise environ 1 850 euros par an sur sa facture energetique. L'installation a passe le controle de conformite sans aucune remarque. Le surdimensionnement evite lui fait economiser plus de 3 000 euros sur le cout initial.",
      technicalDetails: [
        "32x SunPower Maxeon 6 -- 355 Wc unitaire",
        "Optimiseurs SolarEdge P505",
        "Onduleur SolarEdge SE10K",
        "Monitoring cloud SolarEdge",
        "Toiture tuiles -- inclinaison 35 degres -- azimut 215 degres",
      ],
    },
  },
  {
    slug: "liege-installation-pv-batterie",
    title: "Panneaux + batterie a Liege -- 8.5 kWc",
    city: "liege",
    service: "panneaux-photovoltaiques",
    panelCount: 24,
    kwc: 8.5,
    brands: ["Longi", "Huawei"],
    date: "2025-11",
    clientType: "residential",
    category: "standard",
    description:
      "Installation combinee panneaux photovoltaiques et batterie Huawei LUNA 10 kWh pour un menage de 4 personnes a Liege. Le systeme a ete dimensionne pour maximiser l'autoconsommation face au tarif prosommateur wallon. La batterie couvre les pics de consommation en soiree et reduit l'injection sur le reseau. Autoconsommation mesuree a 78% apres trois mois de fonctionnement.",
    images: [
      "/images/realizations/liege-pv-batterie-01.webp",
      "/images/realizations/liege-pv-batterie-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le client hesitait a investir dans le photovoltaique apres avoir lu que les panneaux n'etaient plus rentables en Wallonie avec le compteur communicant. Il craignait que le tarif prosommateur annule tout benefice financier.",
      solution:
        "Benoit a presente une simulation reelle basee sur les donnees de consommation RESA du client, en comparant trois scenarios : panneaux seuls, panneaux + batterie, et statu quo. La batterie Huawei LUNA 10 kWh s'est averee rentable grace au profil de consommation du menage (forte consommation en soiree). Le dimensionnement a ete volontairement contenu a 8.5 kWc pour eviter une surproduction couteuse.",
      result:
        "Autoconsommation reelle de 78% mesuree sur les trois premiers mois. Reduction de la facture annuelle estimee a 1 420 euros. Le client comprend desormais exactement comment son installation fonctionne et pourquoi elle est rentable, malgre le tarif prosommateur.",
      technicalDetails: [
        "24x Longi Hi-MO 6 -- 355 Wc unitaire",
        "Onduleur hybride Huawei SUN2000-8KTL-M1",
        "Batterie Huawei LUNA2000-10-S0",
        "GRD : RESA",
        "Compteur communicant installe",
      ],
    },
  },
  {
    slug: "namur-borne-recharge",
    title: "Borne de recharge a Namur -- Wallbox Pulsar Plus",
    city: "namur",
    service: "bornes-de-recharge",
    brands: ["Wallbox"],
    date: "2025-10",
    clientType: "residential",
    category: "standard",
    description:
      "Installation d'une borne Wallbox Pulsar Plus 22 kW en monophase chez un particulier a Namur. La borne a ete connectee a l'installation photovoltaique existante de 6 kWc, avec programmation pour privilegier la recharge solaire en journee. Le tableau electrique a ete adapte pour supporter la charge sans risque de surcharge.",
    images: ["/images/realizations/namur-borne-01.webp"],
    caseStudy: {
      challenge:
        "Le client venait d'acheter un vehicule electrique et souhaitait une borne rapide. Son installation electrique datait de 2008 et le differentiel 300mA n'etait pas adapte. Un concurrent proposait d'installer la borne sans modifier le tableau.",
      solution:
        "Benoit a refuse de poser la borne sans d'abord mettre le tableau en securite. Un differentiel 30mA dedie a ete ajoute, le cablage a ete repris en 6mm2, et la borne a ete configuree pour limiter la charge a 7.4 kW en monophase (32A). La programmation solaire permet de declencher la charge automatiquement quand la production PV depasse 2 kW.",
      result:
        "La borne fonctionne en toute securite depuis l'installation. Le client recharge principalement en journee grace au surplus solaire. L'installation a passe le controle de conformite du premier coup -- ce qui n'aurait pas ete le cas sans la mise a niveau du tableau.",
      technicalDetails: [
        "Wallbox Pulsar Plus 7.4 kW monophase",
        "Differentiel 30mA type A dedie",
        "Cablage 6mm2",
        "Programmation surplus solaire via Wallbox App",
        "Adaptation tableau existant",
      ],
    },
  },
  {
    slug: "charleroi-conformite",
    title: "Mise en conformite electrique a Charleroi",
    city: "charleroi",
    service: "conformite-electrique",
    date: "2025-12",
    clientType: "residential",
    category: "correction",
    description:
      "Reprise complete du tableau electrique et mise en conformite d'une maison des annees 70 a Charleroi, apres un refus de controle initial par un autre installateur. Remplacement du coffret, ajout des differentiels manquants, reprise du cablage non conforme et mise a la terre. Controle passe sans aucune remarque au deuxieme passage.",
    images: [
      "/images/realizations/charleroi-conformite-01.webp",
      "/images/realizations/charleroi-conformite-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le proprietaire avait fait appel a un electricien general pour preparer sa maison a la vente. L'installation a echoue au controle RGIE : 7 infractions identifiees, dont l'absence de differentiel 30mA, une mise a la terre defaillante et des circuits non proteges. L'electricien initial refusait de reprendre le chantier.",
      solution:
        "Benoit, fort de son experience d'ancien controleur, a parcouru le rapport d'infraction et identifie les causes profondes. Le coffret entier a ete remplace par un tableau modulaire aux normes actuelles. Chaque circuit a ete verifie, re-etiquete et protege individuellement. La prise de terre a ete refaite avec un piquet de 1.5m et une resistance mesuree a 18 ohms.",
      result:
        "L'installation a passe le controle RGIE sans aucune remarque lors du second passage. Le proprietaire a pu finaliser la vente de sa maison dans les delais prevus. Cout total de la mise en conformite : nettement inferieur a ce que deux autres entreprises avaient chiffre, car le diagnostic precis de Benoit a evite des travaux inutiles.",
      technicalDetails: [
        "Tableau modulaire 4 rangees -- 52 modules",
        "7 differentiels 30mA type A et AC",
        "Reprise complete du cablage non conforme",
        "Prise de terre : piquet 1.5m -- resistance 18 ohms",
        "Controle RGIE passe sans remarque",
      ],
    },
  },

  // --- New realizations ---
  {
    slug: "charleroi-batterie-pv-tarif-capacitaire",
    title: "Batterie + PV a Charleroi -- optimisation tarif capacitaire",
    city: "charleroi",
    service: "batteries-domestiques",
    panelCount: 16,
    kwc: 6.4,
    brands: ["Longi", "Huawei"],
    date: "2026-01",
    clientType: "residential",
    category: "standard",
    description:
      "Installation combinee de 16 panneaux Longi et d'une batterie Huawei LUNA 5 kWh pour un couple a Charleroi, dans le cadre du nouveau regime tarifaire wallon. Le systeme a ete specifiquement dimensionne pour lisser les pics de prelevement et reduire l'impact du tarif capacitaire (pointe quart-horaire). La batterie se decharge automatiquement lors des pics de consommation detectes par le compteur communicant.",
    images: [
      "/images/realizations/charleroi-batterie-pv-01.webp",
      "/images/realizations/charleroi-batterie-pv-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le client avait lu dans la presse que le nouveau tarif capacitaire penalisait les menages qui concentrent leur consommation sur certaines plages horaires. Avec une pompe a chaleur et un chauffe-eau electrique, ses pointes de prelevement depassaient regulierement 6 kW. Il voulait savoir si une batterie pouvait reellement reduire ce cout.",
      solution:
        "Benoit a analyse les donnees quart-horaires du compteur communicant (GRD ORES) sur 6 mois. Le diagnostic a revele que 80% des pointes depassant 5 kW se concentraient entre 17h et 20h. Une batterie de 5 kWh, couplee a 6.4 kWc de panneaux, suffisait a ecreter ces pointes. Le systeme Huawei a ete programme pour prioriser le lissage des pics plutot que la simple autoconsommation.",
      result:
        "Apres deux mois de fonctionnement, la pointe quart-horaire maximale est passee de 6.8 kW a 3.1 kW. L'economie estimee sur le tarif capacitaire est de 280 euros par an, en plus des economies liees a l'autoconsommation solaire. Le retour sur investissement global est estime a 8 ans.",
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
    title: "Pompe a chaleur + PV a Namur -- 9.6 kWc",
    city: "namur",
    service: "pompes-a-chaleur",
    panelCount: 24,
    kwc: 9.6,
    brands: ["Daikin", "Longi", "SolarEdge"],
    date: "2025-12",
    clientType: "residential",
    category: "premium",
    description:
      "Installation couplee d'une pompe a chaleur air-eau Daikin Altherma 3 et de 24 panneaux photovoltaiques Longi sur une maison 4 facades a Namur. Le dimensionnement de la PAC a ete calcule sur base d'une etude thermique reelle, pas d'une estimation au m2. L'objectif : couvrir 65% des besoins electriques de la PAC par la production solaire sur l'annee.",
    images: [
      "/images/realizations/namur-pac-pv-01.webp",
      "/images/realizations/namur-pac-pv-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le proprietaire avait recu une offre pour une PAC de 14 kW d'un concurrent, basee uniquement sur la surface habitable (220 m2). Benoit soupconnait un surdimensionnement : la maison avait ete isolee recemment (murs et toiture) et les deperditions reelles etaient bien inferieures a ce que la surface seule suggere.",
      solution:
        "Une etude thermique complete a ete realisee : calcul des deperditions par paroi, prise en compte de l'isolation recente (U-value murs 0.28), du vitrage double HR et de l'exposition. Resultat : une PAC de 8 kW suffisait largement, avec un COP saisonnier estime a 3.8. Le systeme photovoltaique de 9.6 kWc a ete dimensionne pour couvrir la consommation de la PAC et du menage, avec une batterie prevue en phase 2.",
      result:
        "La PAC Daikin Altherma 3 fonctionne depuis trois mois avec un COP mesure de 4.1, au-dessus des previsions. La facture de chauffage a ete divisee par 3.5 par rapport a l'ancienne chaudiere mazout. Le client economise aussi plus de 2 500 euros par an grace a la suppression du mazout et a l'autoconsommation solaire.",
      technicalDetails: [
        "Daikin Altherma 3 EHBX08E6V -- 8 kW",
        "24x Longi Hi-MO 6 -- 400 Wc unitaire",
        "Onduleur SolarEdge SE10K",
        "Ballon tampon 300L",
        "COP saisonnier mesure : 4.1",
        "GRD : ORES",
      ],
    },
  },
  {
    slug: "bruxelles-borne-triphase-pv",
    title: "Borne triphase a Bruxelles -- integration PV existant",
    city: "bruxelles",
    service: "bornes-de-recharge",
    brands: ["Wallbox", "Enphase"],
    date: "2026-02",
    clientType: "residential",
    category: "standard",
    description:
      "Installation d'une borne Wallbox Commander 2 en triphase 22 kW dans une maison de maitre a Bruxelles. L'enjeu technique principal : integrer la borne a une installation photovoltaique existante de 5 kWc equipee de micro-onduleurs Enphase, sans depasser la capacite du raccordement Sibelga. Le pilotage dynamique de charge evite les depassements de puissance souscrite.",
    images: [
      "/images/realizations/bruxelles-borne-triphase-01.webp",
    ],
    caseStudy: {
      challenge:
        "Le client disposait deja de panneaux photovoltaiques avec micro-onduleurs Enphase. Son raccordement Sibelga etait limite a 13.8 kVA en triphase. Installer une borne 22 kW sans gestion intelligente aurait systematiquement fait disjoncter l'installation ou depasser la puissance souscrite.",
      solution:
        "Benoit a installe une borne Wallbox Commander 2 avec un module de gestion dynamique de charge (Power Boost). Un tore de mesure place sur le compteur general permet a la borne d'adapter sa puissance en temps reel selon la consommation du reste de la maison et la production solaire. La borne charge a pleine puissance uniquement quand la marge le permet.",
      result:
        "Aucun depassement de puissance souscrite depuis la mise en service. Le client charge son Tesla Model 3 en 4 a 5 heures en triphase. En journee, la borne exploite automatiquement le surplus solaire. L'installation a passe le controle de conformite Sibelga sans remarque.",
      technicalDetails: [
        "Wallbox Commander 2 -- 22 kW triphase",
        "Module Power Boost avec tore de mesure",
        "Integration Enphase IQ7+ existant",
        "Raccordement Sibelga 13.8 kVA",
        "Pilotage dynamique de charge actif",
      ],
    },
  },
  {
    slug: "mons-nettoyage-toiture-inspection",
    title: "Nettoyage toiture + inspection panneaux a Mons",
    city: "mons",
    service: "nettoyage-toiture",
    panelCount: 18,
    brands: ["SunPower"],
    date: "2025-11",
    clientType: "residential",
    category: "standard",
    description:
      "Nettoyage complet d'une toiture en tuiles beton colonisee par de la mousse sur une maison a Mons. L'intervention a ete couplee a une inspection visuelle et electrique des 18 panneaux SunPower installes 8 ans plus tot. Deux connecteurs MC4 presenteraient des signes d'oxydation et ont ete remplaces. Le rendement des panneaux a ete mesure avant et apres nettoyage : gain de 12% de production recupere.",
    images: [
      "/images/realizations/mons-nettoyage-toiture-01.webp",
      "/images/realizations/mons-nettoyage-toiture-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le client constatait une baisse progressive du rendement de ses panneaux sur les deux dernieres annees, sans en comprendre la cause. Un nettoyeur de toiture classique lui proposait un traitement anti-mousse sans verifier l'etat electrique des panneaux.",
      solution:
        "Benoit a d'abord realise une inspection thermographique et electrique des 18 panneaux avant tout nettoyage. Deux connecteurs MC4 montrent des signes d'echauffement et d'oxydation, source probable de micro-arcs. Ils ont ete remplaces avant le nettoyage haute pression basse (max 80 bars) de la toiture et des panneaux.",
      result:
        "La production mesuree a augmente de 12% des la semaine suivant l'intervention. Les connecteurs defaillants, s'ils n'avaient pas ete detectes, auraient pu provoquer un point chaud ou, dans le pire des cas, un depart de feu. Le client a maintenant un suivi annuel programme.",
      technicalDetails: [
        "18x SunPower E20 -- installation de 2017",
        "Inspection thermographique IR",
        "Remplacement 2x connecteurs MC4",
        "Nettoyage basse pression 80 bars max",
        "Traitement anti-mousse biodegradable",
        "Gain de production mesure : +12%",
      ],
    },
  },
  {
    slug: "liege-conformite-rescue",
    title: "Sauvetage conformite a Liege -- controle echoue repris",
    city: "liege",
    service: "conformite-electrique",
    date: "2026-01",
    clientType: "residential",
    category: "correction",
    description:
      "Intervention de sauvetage sur une installation electrique a Liege apres un premier controle RGIE echoue realise par un autre installateur. Le rapport d'infraction listait 9 non-conformites, dont 3 critiques. Benoit a repris le chantier, corrige les defauts reels et identifie deux faux positifs dans le rapport initial. Controle repasse avec succes en 10 jours ouvrables.",
    images: [
      "/images/realizations/liege-conformite-rescue-01.webp",
      "/images/realizations/liege-conformite-rescue-02.webp",
    ],
    caseStudy: {
      challenge:
        "La proprietaire venait d'heriter d'une maison a Liege et devait la mettre en conformite pour finaliser la succession et la mettre en location. Un premier electricien avait tente une mise en conformite, mais le controle avait echoue avec 9 infractions. Elle avait deja depense 2 800 euros sans resultat.",
      solution:
        "Benoit a etudie le rapport d'infraction ligne par ligne. Son experience d'ancien controleur lui a permis d'identifier immediatement les vrais problemes et de contester deux points du rapport qui relevaient d'une interpretation discutable de la norme. Les 7 defauts reels ont ete corriges : reprise de la mise a la terre, ajout de differentiels, protection des circuits humides, et reetiquetage complet du tableau.",
      result:
        "Le controle de repassage a ete valide sans remarque en 10 jours ouvrables apres l'intervention. La proprietaire a pu mettre le bien en location dans les delais. Le cout total de la reprise par Be'energies etait inferieur de 40% a ce que deux autres entreprises avaient chiffre pour le meme travail.",
      technicalDetails: [
        "9 non-conformites identifiees -- 2 contestees -- 7 corrigees",
        "Reprise mise a la terre -- resistance finale 22 ohms",
        "5 differentiels 30mA ajoutes",
        "Protection circuits salle de bain et cuisine",
        "Reetiquetage complet du tableau",
        "Delai total : 10 jours ouvrables",
      ],
    },
  },
  {
    slug: "wavre-pv-premium-28-panneaux",
    title: "28 panneaux premium a Wavre -- 11.2 kWc",
    city: "wavre",
    service: "panneaux-photovoltaiques",
    panelCount: 28,
    kwc: 11.2,
    brands: ["SunPower", "Enphase"],
    date: "2026-02",
    clientType: "residential",
    category: "premium",
    description:
      "Installation haut de gamme de 28 panneaux SunPower Maxeon 6 avec micro-onduleurs Enphase IQ8+ sur une villa a Wavre. La toiture presentait deux orientations differentes (sud et est), ce qui imposait un systeme capable de gerer des productions asymetriques. Le choix des micro-onduleurs Enphase permet a chaque panneau de fonctionner independamment, sans perte liee a l'effet de chaine.",
    images: [
      "/images/realizations/wavre-pv-premium-01.webp",
      "/images/realizations/wavre-pv-premium-02.webp",
      "/images/realizations/wavre-pv-premium-03.webp",
    ],
    caseStudy: {
      challenge:
        "Le proprietaire voulait une installation capable de couvrir la consommation d'un menage de 5 personnes, incluant une pompe a chaleur et deux vehicules electriques. La toiture imposait une repartition sur deux pans (sud 60%, est 40%). Plusieurs installateurs avaient propose un onduleur string classique, ce qui aurait penalise la production du pan sud a cause du pan est moins performant.",
      solution:
        "Benoit a recommande des micro-onduleurs Enphase IQ8+ pour desolidariser les deux pans. Chaque panneau produit a son maximum independamment. Le dimensionnement de 11.2 kWc tient compte de la consommation reelle (estimee a 9 200 kWh/an) et du futur ajout d'une batterie. Le passage de cables a ete prepare pour une extension batterie sans intervention supplementaire sur la toiture.",
      result:
        "La production des deux premiers mois depasse les simulations de 8%, grace a l'absence de perte par effet de chaine. Le pan est, que d'autres installateurs voulaient ignorer, produit 74% de ce que produit le pan sud -- un apport significatif. L'installation a passe le controle de conformite sans remarque.",
      technicalDetails: [
        "28x SunPower Maxeon 6 -- 400 Wc unitaire",
        "28x Micro-onduleurs Enphase IQ8+",
        "Pan sud : 17 panneaux -- azimut 180 degres -- 35 degres",
        "Pan est : 11 panneaux -- azimut 90 degres -- 30 degres",
        "Precablage batterie pour extension future",
        "Monitoring Enphase Enlighten",
        "GRD : ORES",
      ],
    },
  },
  {
    slug: "nivelles-pv-pme",
    title: "Installation PV pour PME a Nivelles -- 30 kWc",
    city: "nivelles",
    service: "panneaux-photovoltaiques",
    panelCount: 60,
    kwc: 30,
    brands: ["Longi", "Huawei"],
    date: "2025-10",
    clientType: "professional",
    category: "premium",
    description:
      "Installation de 60 panneaux Longi Hi-MO 6 sur le toit plat d'un entrepot PME a Nivelles. Le systeme de 30 kWc est equipe de deux onduleurs Huawei SUN2000-15KTL en cascade et d'un systeme de monitoring avance pour le suivi de production. L'installation est dimensionnee pour couvrir 70% de la consommation de l'activite en journee, ou la production solaire correspond aux heures d'exploitation.",
    images: [
      "/images/realizations/nivelles-pme-pv-01.webp",
      "/images/realizations/nivelles-pme-pv-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le gerant de cette PME logistique a Nivelles recevait des factures d'electricite depassant 12 000 euros par an. Plusieurs installateurs proposaient des systemes de 50 a 70 kWc, avec des promesses de rendement irrealistes. Le gerant voulait un dimensionnement honnete et un retour sur investissement credible.",
      solution:
        "Benoit a analyse les factures trimestrielles et le profil de consommation horaire de l'activite. La consommation est fortement concentree en journee (8h-17h), ce qui favorise l'autoconsommation directe sans batterie. Un systeme de 30 kWc couvre 70% des besoins en journee sans surproduction excessive. Deux onduleurs Huawei en cascade assurent la redondance : si l'un tombe en panne, l'autre continue a produire.",
      result:
        "L'economie annuelle mesuree apres 6 mois de fonctionnement se projette a 7 800 euros. Le retour sur investissement est estime a 5 ans, grace au taux d'autoconsommation eleve de 82% et aux primes wallonnes pour les installations professionnelles. Le gerant a deja recommande Be'energies a deux autres PME du zoning.",
      technicalDetails: [
        "60x Longi Hi-MO 6 -- 500 Wc unitaire",
        "2x Onduleurs Huawei SUN2000-15KTL-M2",
        "Structure lestee toit plat -- inclinaison 15 degres",
        "Monitoring Huawei FusionSolar Pro",
        "Autoconsommation mesuree : 82%",
        "GRD : ORES",
      ],
    },
  },
  {
    slug: "tournai-correction-installation-defaillante",
    title: "Correction d'une installation defaillante a Tournai",
    city: "tournai",
    service: "panneaux-photovoltaiques",
    panelCount: 14,
    kwc: 5.6,
    brands: ["Longi", "SolarEdge"],
    date: "2025-08",
    clientType: "residential",
    category: "correction",
    description:
      "Reprise complete d'une installation photovoltaique de 14 panneaux a Tournai, initialement posee par un concurrent aujourd'hui en faillite. L'installation presentait des defauts graves : cablage DC non protege, onduleur sous-dimensionne, fixations non conformes et absence de mise a la terre des cadres. Benoit a corrige l'ensemble et fait passer le controle de conformite qui n'avait jamais ete realise.",
    images: [
      "/images/realizations/tournai-correction-pv-01.webp",
      "/images/realizations/tournai-correction-pv-02.webp",
    ],
    caseStudy: {
      challenge:
        "Le proprietaire avait fait installer des panneaux en 2021 par une entreprise qui a depuis fait faillite. Il n'avait jamais recu d'attestation de conformite et l'installation n'avait jamais ete controlee. En la faisant verifier pour une vente, il a decouvert que l'installation etait dangereuse et non conforme.",
      solution:
        "Benoit a effectue un diagnostic complet de l'installation existante. Les panneaux eux-memes (Longi Hi-MO 5) etaient en bon etat, mais tout le reste posait probleme : l'onduleur string de 3 kW etait largement sous-dimensionne pour 5.6 kWc de panneaux, le cablage DC passait dans une gouttiere sans protection, les fixations manquaient de points d'ancrage, et les cadres n'etaient pas relies a la terre. L'onduleur a ete remplace par un SolarEdge SE5K, le cablage entierement repris, les fixations renforcees et la mise a la terre realisee.",
      result:
        "L'installation produit desormais 18% de plus qu'avant la correction, uniquement grace au remplacement de l'onduleur sous-dimensionne qui bridait la production. Le controle de conformite a ete passe avec succes. Le proprietaire a pu vendre sa maison avec une installation photovoltaique certifiee conforme.",
      technicalDetails: [
        "14x Longi Hi-MO 5 -- 400 Wc (panneaux existants conserves)",
        "Onduleur remplace : string 3 kW par SolarEdge SE5K",
        "Cablage DC entierement repris en chemin de cable",
        "Fixations renforcees -- 4 points d'ancrage par panneau",
        "Mise a la terre des cadres aluminium",
        "Controle de conformite passe -- premiere fois depuis 2021",
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
