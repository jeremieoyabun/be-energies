import type { FAQItem } from "@/lib/types";

export const homepageFaq: FAQItem[] = [
  {
    question: "Les panneaux solaires sont-ils encore rentables en 2026 ?",
    answer:
      "Oui. Le retour sur investissement se situe entre 5 et 7 ans, soit un rendement annuel d'environ 12 %. Une installation typique de 4,7 kWc coûte environ 9 700 EUR TTC (TVA 6 % pour les habitations de plus de 10 ans) et génère entre 1 200 et 1 600 EUR d'économies par an. Chaque kWh autoconsommé vous fait économiser environ 38 centimes, contre 1 à 6 centimes pour le kWh injecté sur le réseau. Le coût des panneaux a été divisé par cinq en dix ans : le solaire n'a jamais été aussi accessible.",
  },
  {
    question: "Qu'est-ce que le tarif prosumer et dois-je le payer ?",
    answer:
      "Le tarif prosumer est une redevance annuelle pour l'utilisation du réseau, appliquée uniquement aux installations mises en service avant 2024. Son montant varie par gestionnaire de réseau : ORES facture environ 85,84 EUR/kWe/an, RESA environ 84,22 EUR/kWe/an. Pour une installation de 5 kWc chez ORES, cela représente environ 429 EUR/an. Les installations mises en service depuis janvier 2024 avec compteur communicant ne paient pas ce tarif : vous payez uniquement l'électricité réellement soutirée du réseau.",
  },
  {
    question: "Pourquoi choisir un ancien inspecteur, certifié RESCERT comme installateur ?",
    answer:
      "Benoît Dezsö a passé plus de 10 ans à inspecter des installations électriques et photovoltaïques pour des organismes agréés. Il a documenté les erreurs les plus fréquentes du secteur : onduleurs sous-dimensionnés, câblages non conformes, dimensionnements basés sur des promesses plutôt que sur des calculs réels. Aujourd'hui, il conçoit chaque installation Be'energies avec le niveau de rigueur qu'il exigeait en tant qu'inspecteur. Résultat : votre installation est pensée pour passer le contrôle de conformité du premier coup, sans mauvaise surprise.",
  },
  {
    question: "Quels services propose Be'energies ?",
    answer:
      "Be'energies couvre l'ensemble de l'écosystème énergétique de votre habitation : panneaux photovoltaïques, batteries domestiques, bornes de recharge pour véhicules électriques, pompes à chaleur et climatisation, mise en conformité électrique, et nettoyage de toiture. L'avantage d'un interlocuteur unique, c'est la cohérence technique entre chaque élément. Benoît conçoit votre installation comme un système intégré, pas comme une addition de produits vendus séparément.",
  },
  {
    question: "Comment fonctionne le diagnostic énergétique gratuit ?",
    answer:
      "Le diagnostic commence toujours par une visite sur site. Benoît analyse votre consommation réelle, l'orientation et l'état de votre toiture, la capacité de votre tableau électrique, et la tension du réseau local. Vous recevez ensuite une proposition chiffrée basée sur les tarifs 2026 réels de votre gestionnaire de réseau, avec un calcul de rentabilité honnête. Ce n'est pas une estimation générique : c'est un bilan personnalisé qui vous permet de prendre une décision éclairée, sans engagement.",
  },
];

export const pvServiceFaq: FAQItem[] = [
  {
    question:
      "Combien de panneaux solaires faut-il pour une maison en Belgique ?",
    answer:
      "Cela dépend de votre consommation, pas de la surface de votre toit. Pour un ménage moyen consommant 3 500 kWh par an, comptez environ 10 panneaux (3,5 kWc). Pour une famille de quatre personnes avec une consommation de 4 500 à 5 000 kWh, on passe à 12-14 panneaux. Benoît dimensionne toujours en fonction de votre facture réelle et de votre profil de consommation, pas en fonction de la surface disponible sur le toit.",
  },
  {
    question: "Le tarif prosumer annule-t-il la rentabilité ?",
    answer:
      "Non. Le tarif prosumer représente environ 85,84 EUR/kWe/an chez ORES. Pour une installation de 5 kWc, cela fait environ 429 EUR/an. Or, les économies d'autoconsommation pour la même installation se situent entre 1 200 et 1 600 EUR/an. Le solde reste largement positif, entre 800 et 1 200 EUR d'économies nettes par an. Et pour les installations mises en service depuis janvier 2024 avec compteur communicant, ce tarif ne s'applique tout simplement pas.",
  },
  {
    question: "Quelle est la différence entre compensation et injection ?",
    answer:
      "Les installations mises en service avant 2024 bénéficient du régime de compensation : le compteur tourne à l'envers, et cette compensation est maintenue jusqu'au 31 décembre 2030. Les installations depuis janvier 2024 sont équipées d'un compteur communicant qui mesure séparément l'énergie soutirée et l'énergie injectée. Chaque kWh injecté est rémunéré au tarif d'injection de votre fournisseur (de 0,82 centime chez Mega à 5,58 centimes chez Energie.be), bien en dessous du tarif d'achat d'environ 38 centimes. C'est pourquoi maximiser l'autoconsommation est devenu la stratégie prioritaire.",
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer:
      "L'installation elle-même prend 1 à 2 jours pour une habitation résidentielle standard. Avant cela, il y a le diagnostic sur site (visite technique obligatoire), la proposition détaillée avec calcul de rentabilité, et les démarches administratives auprès de votre gestionnaire de réseau. Comptez 2 à 3 semaines entre la signature et la mise en service.",
  },
  {
    question: "Be'energies intervient-il dans ma région ?",
    answer:
      "Nous intervenons dans toute la Wallonie, à Bruxelles, et dans le Limbourg flamand (Riemst, Tongeren, Bilzen, Hasselt). Benoît se déplace personnellement pour chaque diagnostic et supervise chaque chantier. Consultez nos pages locales pour voir les réalisations dans votre ville.",
  },
  {
    question: "Quelles marques de panneaux utilisez-vous ?",
    answer:
      "Nous travaillons exclusivement avec des marques tier-1 reconnues pour leur fiabilité à long terme : SunPower, Longi, Canadian Solar. Pour les onduleurs, nous installons du SolarEdge, Huawei ou Enphase selon la configuration de votre toiture et vos besoins de monitoring. Le choix du matériel est adapté à chaque projet : Benoît sélectionne la combinaison optimale après la visite technique, pas avant.",
  },
  {
    question: "Que se passe-t-il après l'installation ?",
    answer:
      "Le suivi post-installation est inclus : vérification de conformité, mise en service, paramétrage du monitoring de production, et support continu. Si un panneau faiblit ou si votre onduleur signale un problème, nous le détectons via le monitoring et intervenons. Be'energies ne disparaît pas après la vente -- c'est d'ailleurs l'un des critères que Benoît vérifiait systématiquement lors de ses inspections.",
  },
  {
    question: "Peut-on ajouter une batterie plus tard ?",
    answer:
      "Oui. Nous dimensionnons l'onduleur et le câblage dès la conception initiale pour permettre l'ajout ultérieur d'une batterie domestique. C'est une étape de préparation qui ne coûte presque rien à l'installation mais qui vous évite des frais importants si vous décidez d'ajouter du stockage dans quelques années, notamment quand la compensation prendra fin en 2030.",
  },
  {
    question: "Qu'est-ce que le tarif IMPACT et comment en profiter avec mes panneaux solaires ?",
    answer:
      "Le tarif IMPACT est un tarif tri-horaire disponible depuis janvier 2026 pour les détenteurs d'un compteur communicant. Il distingue trois périodes : ECO (01h-07h et 11h-17h, le moins cher), MEDIUM (07h-11h et 22h-01h), et PIC (17h-22h, le plus cher). La bonne nouvelle pour les propriétaires de panneaux solaires, c'est que les heures de production maximale (11h-17h) coïncident avec les heures ECO. Selon les simulations de la CWaPE, un ménage qui adapte sa consommation peut économiser jusqu'à 14 %, et jusqu'à 28 % avec un véhicule électrique.",
  },
  {
    question: "Que se passe-t-il si mon onduleur décroche à cause d'une surtension réseau ?",
    answer:
      "Le décrochage d'onduleur par surtension est un problème réel et croissant en Belgique. Quand trop d'installations solaires injectent simultanément sur un même réseau local, la tension dépasse 253 V et l'onduleur se déconnecte pendant 15 minutes, ce qui représente une perte de production. Lors du diagnostic, Benoît vérifie la tension du réseau local -- une étape que beaucoup d'installateurs omettent. Si le réseau est saturé, il vous le signale avant de signer et propose des solutions adaptées comme un onduleur avec gestion dynamique de puissance.",
  },
];

export const batteryServiceFaq: FAQItem[] = [
  {
    question: "Une batterie domestique est-elle rentable en 2026 ?",
    answer:
      "Cela dépend de votre situation. Pour les installations d'avant 2024 qui bénéficient encore de la compensation jusqu'en 2030, le réseau agit comme une batterie gratuite : l'investissement est rarement justifié avant la fin de ce régime. Pour les installations post-2024 avec compteur communicant, la rentabilité d'une batterie s'améliore sensiblement si vous combinez panneaux solaires, véhicule électrique ou pompe à chaleur. Benoît calcule votre taux d'autoconsommation réel avant de recommander ou non un stockage.",
  },
  {
    question: "Quelle capacité de batterie choisir ?",
    answer:
      "Pour un ménage moyen, une batterie de 5 à 10 kWh suffit généralement. Le dimensionnement dépend de votre consommation nocturne et de votre profil horaire. Une batterie surdimensionnée est un piège fréquent : elle coûte plus cher à l'achat sans générer d'économies supplémentaires significatives. Benoît analyse vos courbes de consommation pour déterminer la capacité optimale, pas la capacité maximale.",
  },
  {
    question: "Combien d'années dure une batterie domestique ?",
    answer:
      "Les batteries actuelles en lithium fer-phosphate (LFP) ont une durée de vie de 10 à 15 ans, avec une garantie constructeur de 10 ans minimum sur la capacité résiduelle (généralement 70 % de la capacité initiale). La chimie LFP est plus stable et plus durable que la chimie NMC (nickel-manganèse-cobalt), même si les batteries NMC offrent une densité énergétique légèrement supérieure. Be'energies privilégie le LFP pour les installations résidentielles en raison de sa sécurité et de sa longévité.",
  },
  {
    question: "Quelle est la différence entre une batterie LFP et NMC ?",
    answer:
      "Le LFP (lithium fer-phosphate) offre une meilleure durée de vie (plus de 6 000 cycles), une stabilité thermique supérieure et un risque d'emballement thermique quasi nul. Le NMC (nickel-manganèse-cobalt) est plus compact à capacité égale mais se dégrade plus vite et présente un risque de surchauffe légèrement plus élevé. Pour une installation résidentielle où la sécurité et la longévité priment sur l'encombrement, Benoît recommande systématiquement le LFP. C'est le choix le plus sensé sur 10 à 15 ans.",
  },
  {
    question: "Comment une batterie optimise-t-elle le tarif IMPACT ?",
    answer:
      "Le tarif IMPACT, en vigueur depuis janvier 2026, distingue trois plages horaires. Les heures PIC (17h-22h) sont les plus coûteuses, mais aussi celles où vos panneaux ne produisent plus. Une batterie chargée pendant les heures ECO (11h-17h, quand vos panneaux produisent) vous permet de consommer votre propre électricité le soir au lieu de l'acheter au prix fort. C'est exactement le scénario où le stockage prend tout son sens financier.",
  },
  {
    question: "Dans quels cas ne faut-il PAS acheter une batterie ?",
    answer:
      "Si votre installation date d'avant 2024 et bénéficie encore de la compensation (jusqu'au 31 décembre 2030), le réseau joue déjà le rôle de batterie virtuelle gratuite. Ajouter un stockage physique de 5 000 à 8 000 EUR n'accélèrera pas votre retour sur investissement. De même, si votre taux d'autoconsommation dépasse déjà 50 % sans batterie, le gain marginal est trop faible pour justifier la dépense. Benoît vous le dit clairement si c'est le cas : il ne vend pas une batterie qui ne se justifie pas.",
  },
];

export const evChargingFaq: FAQItem[] = [
  {
    question: "Quel type de borne de recharge pour la maison ?",
    answer:
      "Pour un usage résidentiel, une borne de 7,4 kW en monophasé couvre largement les besoins quotidiens : elle recharge une batterie de 60 kWh en environ 8 heures, soit une nuit complète. Si votre installation électrique est en triphasé, une borne de 11 ou 22 kW permet une recharge plus rapide. Le choix dépend de votre raccordement existant, de votre véhicule et de vos habitudes de déplacement. Benoît vérifie la capacité de votre tableau électrique avant toute proposition.",
  },
  {
    question: "Peut-on recharger sa voiture électrique avec ses panneaux solaires ?",
    answer:
      "Oui, et c'est la configuration la plus avantageuse. En programmant la recharge pendant les heures de production solaire (10h-16h), vous rechargez à un coût quasi nul puisque vous consommez directement votre propre électricité. Avec le tarif IMPACT, ces heures correspondent aux plages ECO (11h-17h), les moins chères. Selon les simulations de la CWaPE, l'ajout d'un véhicule électrique avec recharge solaire intelligente peut générer jusqu'à 28 % d'économies supplémentaires.",
  },
  {
    question: "Qu'est-ce que la recharge intelligente (smart charging) ?",
    answer:
      "La recharge intelligente adapte automatiquement la puissance de charge en fonction de votre production solaire en temps réel. Quand vos panneaux produisent beaucoup, la borne augmente la puissance. Quand la production baisse, elle la réduit pour éviter de soutirer du réseau. Certaines bornes intègrent aussi la gestion des tarifs dynamiques pour recharger aux heures les moins chères. Be'energies installe des bornes compatibles avec ces fonctions et les configure pour maximiser votre autoconsommation.",
  },
  {
    question: "Combien de temps faut-il pour installer une borne de recharge ?",
    answer:
      "L'installation prend généralement une demi-journée à une journée complète. Le délai dépend principalement de la distance entre votre tableau électrique et l'emplacement de la borne, et de la nécessité éventuelle de renforcer votre raccordement. Benoît effectue toujours une visite préalable pour évaluer les travaux nécessaires. L'installation inclut la mise en conformité électrique, le test de fonctionnement et la configuration de la borne avec votre véhicule.",
  },
  {
    question: "Existe-t-il des primes pour l'installation d'une borne de recharge en Belgique ?",
    answer:
      "En Belgique, l'avantage principal est la TVA réduite à 6 % (au lieu de 21 %) pour les habitations de plus de 10 ans, ce qui s'applique à la borne comme à tous les travaux d'installation électrique. Pour les indépendants et les sociétés, l'investissement dans une borne est déductible fiscalement. Certaines communes offrent également des primes locales, mais les montants restent modestes. Benoît vous informe des aides disponibles dans votre commune lors du diagnostic.",
  },
];

export const complianceFaq: FAQItem[] = [
  {
    question: "Que risque-t-on avec une installation électrique non conforme ?",
    answer:
      "Les conséquences d'une non-conformité sont concrètes et sérieuses. Premièrement, votre assurance habitation peut refuser d'intervenir en cas d'incendie ou de dégât électrique si l'installation n'est pas conforme -- ce point est souvent ignoré par les propriétaires. Deuxièmement, une installation non conforme présente des risques réels d'incendie, d'électrocution ou de surtension. Troisièmement, lors d'une vente immobilière, un rapport de non-conformité réduit la valeur du bien et complique la transaction. Le contrôle de conformité n'est pas une formalité administrative : c'est une protection pour votre famille et votre patrimoine.",
  },
  {
    question: "Comment se déroule une mise en conformité électrique ?",
    answer:
      "On commence par un diagnostic complet de votre installation existante : tableau électrique, câblage, prises de terre, dispositifs de protection, sections de câble. Benoît identifie chaque infraction par rapport au RGIE (Règlement Général sur les Installations Électriques) et établit un plan de mise en conformité détaillé avec les travaux nécessaires, classés par priorité. Les modifications sont ensuite réalisées pour que l'installation passe le contrôle d'un organisme agréé sans remarque. Comptez entre quelques heures et deux jours de travaux selon l'ampleur des non-conformités.",
  },
  {
    question: "Qu'est-ce qui déclenche un contrôle de conformité obligatoire ?",
    answer:
      "Un contrôle est obligatoire dans trois cas principaux : lors de la vente d'un bien immobilier (le rapport de conformité est exigé par le notaire), lors d'une modification importante de l'installation électrique (ajout de circuits, remplacement du tableau), et lors du raccordement d'une nouvelle installation comme des panneaux solaires ou une borne de recharge. Par ailleurs, un contrôle périodique est requis tous les 25 ans pour les installations domestiques. En tant qu'ancien inspecteur, Benoît sait exactement ce que le contrôleur va vérifier et prépare votre installation en conséquence.",
  },
  {
    question: "Combien coûte une mise en conformité électrique ?",
    answer:
      "Le coût varie considérablement selon l'état de votre installation. Pour des corrections mineures (ajout de différentiel, amélioration de la mise à la terre), comptez entre 300 et 800 EUR. Pour une remise en conformité complète d'un tableau électrique ancien, le budget se situe généralement entre 1 500 et 4 000 EUR. Benoît fournit un devis détaillé après le diagnostic, sans mauvaise surprise. La TVA de 6 % s'applique pour les habitations de plus de 10 ans, ce qui réduit sensiblement la facture.",
  },
  {
    question: "Mon installation photovoltaïque doit-elle être conforme indépendamment de mon installation domestique ?",
    answer:
      "Oui. L'installation photovoltaïque fait l'objet d'un contrôle de conformité spécifique, distinct du contrôle de l'installation domestique. Ce contrôle vérifie le raccordement de l'onduleur, les protections électriques dédiées, la mise à la terre, et la conformité du câblage courant continu. C'est précisément le type d'inspection que Benoît réalisait avant de fonder Be'energies. Chaque installation Be'energies est conçue et documentée pour passer ce contrôle du premier coup, avec le dossier technique complet prêt pour l'organisme agréé.",
  },
];

export const heatPumpFaq: FAQItem[] = [
  {
    question: "Pompe à chaleur air-eau ou air-air : comment choisir ?",
    answer:
      "La pompe à chaleur air-eau est le choix adapté si vous disposez d'un chauffage central (radiateurs ou plancher chauffant) et souhaitez aussi produire votre eau chaude sanitaire. Elle remplace votre chaudière. La pompe air-air, elle, fonctionne par soufflage d'air et convient mieux pour la climatisation et le chauffage d'appoint dans des pièces spécifiques. Le choix dépend de votre système existant, de votre niveau d'isolation et de vos objectifs. Benoît évalue ces paramètres lors de la visite technique pour vous orienter vers la solution qui a du sens chez vous.",
  },
  {
    question: "Une pompe à chaleur est-elle bruyante ?",
    answer:
      "Les modèles actuels émettent entre 35 et 50 dB à un mètre de distance, soit le niveau sonore d'une conversation à voix basse ou d'une bibliothèque calme. L'élément déterminant n'est pas seulement le choix du modèle, mais le positionnement de l'unité extérieure. Un placement mal pensé peut amplifier le bruit par réflexion sur un mur ou générer des vibrations transmises à la structure. Benoît choisit l'emplacement en tenant compte des distances réglementaires, de l'acoustique du site et du voisinage.",
  },
  {
    question: "Qu'est-ce que le COP d'une pompe à chaleur ?",
    answer:
      "Le COP (Coefficient de Performance) mesure l'efficacité de la pompe à chaleur. Un COP de 4 signifie que pour 1 kWh d'électricité consommé, la pompe à chaleur produit 4 kWh de chaleur. En pratique, le COP varie selon la température extérieure : il est élevé quand il fait doux (COP 4 à 5 au-dessus de 7 °C) et diminue quand il fait très froid (COP 2 à 3 en dessous de -5 °C). C'est pourquoi le SCOP (COP saisonnier), qui tient compte des variations climatiques de votre région, est un indicateur plus fiable pour estimer vos économies réelles.",
  },
  {
    question: "Peut-on combiner une pompe à chaleur avec des panneaux solaires ?",
    answer:
      "C'est même l'une des combinaisons les plus intelligentes. Vos panneaux solaires produisent de l'électricité pendant la journée, et la pompe à chaleur utilise cette électricité pour chauffer votre habitation ou votre eau sanitaire. Avec un ballon tampon ou un boiler thermodynamique, vous stockez la chaleur produite pendant les heures de production solaire pour en profiter le soir. Cette synergie augmente directement votre taux d'autoconsommation et réduit votre dépendance au réseau. Be'energies conçoit les deux systèmes de manière intégrée pour maximiser cet effet.",
  },
  {
    question: "Quelle réduction sur ma facture de chauffage puis-je espérer avec une pompe à chaleur ?",
    answer:
      "En remplacement d'une chaudière au mazout, une pompe à chaleur air-eau peut réduire votre facture de chauffage de 40 à 60 %, selon votre niveau d'isolation et le climat local. En remplacement du gaz, la réduction est de l'ordre de 25 à 40 %. Ces chiffres supposent une habitation correctement isolée : si votre maison est une passoire thermique, la pompe à chaleur consommera davantage et la rentabilité sera compromise. Benoît évalue l'isolation de votre habitation avant de proposer un dimensionnement, pour éviter les mauvaises surprises.",
  },
];

export const roofCleaningFaq: FAQItem[] = [
  {
    question: "À quelle fréquence faut-il nettoyer sa toiture ?",
    answer:
      "En Belgique, un nettoyage tous les 3 à 5 ans est généralement recommandé, selon l'exposition de votre toit (orientation nord, présence d'arbres à proximité, humidité du site). Les toitures en tuiles béton sont particulièrement sensibles aux mousses et lichens. Un toit négligé ne pose pas seulement un problème esthétique : les mousses retiennent l'humidité, accélèrent la dégradation des matériaux et peuvent provoquer des infiltrations. Un entretien régulier prolonge la durée de vie de votre couverture de plusieurs années.",
  },
  {
    question: "Le nettoyage de toiture améliore-t-il la performance de mes panneaux solaires ?",
    answer:
      "Oui, directement. Des panneaux solaires recouverts de poussières, de pollens, de fientes d'oiseaux ou de résidus de mousse peuvent perdre entre 5 et 15 % de leur rendement. Lors du nettoyage de votre toiture, Be'energies nettoie également la surface de vos panneaux avec des produits adaptés qui n'endommagent pas le revêtement anti-reflet. C'est un geste d'entretien simple qui peut représenter plusieurs centaines d'euros de production supplémentaire par an sur une installation de taille moyenne.",
  },
  {
    question: "Mon assurance habitation peut-elle refuser un sinistre à cause d'un toit mal entretenu ?",
    answer:
      "C'est un risque réel et souvent méconnu. Si une infiltration d'eau cause des dégâts intérieurs et que l'expert constate que la toiture était envahie de mousse ou présentait des signes de détérioration évidents, l'assureur peut invoquer le défaut d'entretien pour réduire ou refuser l'indemnisation. Le RGIE n'impose pas directement le nettoyage de toiture, mais le contrat d'assurance habitation contient généralement une clause d'entretien normal du bien. Un nettoyage périodique documenté protège aussi bien votre toit que vos droits en cas de sinistre.",
  },
  {
    question: "Quelle est la différence entre un nettoyage de toiture et un traitement anti-mousse ?",
    answer:
      "Le nettoyage consiste à retirer physiquement les mousses, lichens et saletés présentes sur la toiture, généralement par un lavage à basse pression adapté au type de revêtement. Le traitement anti-mousse est une étape complémentaire : un produit biocide est appliqué après le nettoyage pour ralentir la repousse des végétaux. Sans traitement, la mousse réapparaît en 12 à 18 mois. Avec traitement, la protection dure 3 à 5 ans. Be'energies propose les deux services et adapte la méthode au matériau de votre couverture pour éviter tout dommage.",
  },
  {
    question: "Combien coûte un nettoyage de toiture en Belgique ?",
    answer:
      "Le prix dépend de la surface de toiture, de l'accessibilité (hauteur, pente, obstacles), et de l'état général. Pour une toiture résidentielle standard de 80 à 120 m2, comptez généralement entre 800 et 2 000 EUR, traitement anti-mousse inclus. La peinture de toiture, qui constitue une protection et une rénovation esthétique supplémentaire, se situe dans une fourchette supérieure. Benoît établit un devis précis après une évaluation sur site. La TVA de 6 % s'applique pour les habitations de plus de 10 ans.",
  },
];

export const faqByService: Record<string, FAQItem[]> = {
  "panneaux-photovoltaiques": pvServiceFaq,
  "batteries-domestiques": batteryServiceFaq,
  "bornes-de-recharge": evChargingFaq,
  "conformite-electrique": complianceFaq,
  "nettoyage-toiture": roofCleaningFaq,
  "pompes-a-chaleur": heatPumpFaq,
};
