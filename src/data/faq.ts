import type { FAQItem } from "@/lib/types";

export const homepageFaq: FAQItem[] = [
  {
    question: "Les panneaux solaires sont-ils encore rentables en 2026 ?",
    answer:
      "Oui. Le retour sur investissement se situe entre 5 et 7 ans, soit un rendement annuel d'environ 12 %. Une installation typique de 4,7 kWc coute environ 9 700 EUR TTC (TVA 6 % pour les habitations de plus de 10 ans) et genere entre 1 200 et 1 600 EUR d'economies par an. Chaque kWh autoconsomme vous fait economiser environ 38 centimes, contre 1 a 6 centimes pour le kWh injecte sur le reseau. Le cout des panneaux a ete divise par cinq en dix ans : le solaire n'a jamais ete aussi accessible.",
  },
  {
    question: "Qu'est-ce que le tarif prosumer et dois-je le payer ?",
    answer:
      "Le tarif prosumer est une redevance annuelle pour l'utilisation du reseau, appliquee uniquement aux installations mises en service avant 2024. Son montant varie par gestionnaire de reseau : ORES facture environ 85,84 EUR/kWe/an, RESA environ 84,22 EUR/kWe/an. Pour une installation de 5 kWc chez ORES, cela represente environ 429 EUR/an. Les installations mises en service depuis janvier 2024 avec compteur communicant ne paient pas ce tarif : vous payez uniquement l'electricite reellement soutiree du reseau.",
  },
  {
    question: "Pourquoi choisir un ancien inspecteur comme installateur ?",
    answer:
      "Benoit Dezso a passe plus de 10 ans a inspecter des installations electriques et photovoltaiques pour des organismes agrees. Il a documente les erreurs les plus frequentes du secteur : onduleurs sous-dimensionnes, cablages non conformes, dimensionnements bases sur des promesses plutot que sur des calculs reels. Aujourd'hui, il concoit chaque installation Be'energies avec le niveau de rigueur qu'il exigeait en tant qu'inspecteur. Resultat : votre installation est pensee pour passer le controle de conformite du premier coup, sans mauvaise surprise.",
  },
  {
    question: "Quels services propose Be'energies ?",
    answer:
      "Be'energies couvre l'ensemble de l'ecosysteme energetique de votre habitation : panneaux photovoltaiques, batteries domestiques, bornes de recharge pour vehicules electriques, pompes a chaleur et climatisation, mise en conformite electrique, et nettoyage de toiture. L'avantage d'un interlocuteur unique, c'est la coherence technique entre chaque element. Benoit concoit votre installation comme un systeme integre, pas comme une addition de produits vendus separement.",
  },
  {
    question: "Comment fonctionne le diagnostic energetique gratuit ?",
    answer:
      "Le diagnostic commence toujours par une visite sur site. Benoit analyse votre consommation reelle, l'orientation et l'etat de votre toiture, la capacite de votre tableau electrique, et la tension du reseau local. Vous recevez ensuite une proposition chiffree basee sur les tarifs 2026 reels de votre gestionnaire de reseau, avec un calcul de rentabilite honnete. Ce n'est pas une estimation generique : c'est un bilan personnalise qui vous permet de prendre une decision eclairee, sans engagement.",
  },
];

export const pvServiceFaq: FAQItem[] = [
  {
    question:
      "Combien de panneaux solaires faut-il pour une maison en Belgique ?",
    answer:
      "Cela depend de votre consommation, pas de la surface de votre toit. Pour un menage moyen consommant 3 500 kWh par an, comptez environ 10 panneaux (3,5 kWc). Pour une famille de quatre personnes avec une consommation de 4 500 a 5 000 kWh, on passe a 12-14 panneaux. Benoit dimensionne toujours en fonction de votre facture reelle et de votre profil de consommation, pas en fonction de la surface disponible sur le toit.",
  },
  {
    question: "Le tarif prosumer annule-t-il la rentabilite ?",
    answer:
      "Non. Le tarif prosumer represente environ 85,84 EUR/kWe/an chez ORES. Pour une installation de 5 kWc, cela fait environ 429 EUR/an. Or, les economies d'autoconsommation pour la meme installation se situent entre 1 200 et 1 600 EUR/an. Le solde reste largement positif, entre 800 et 1 200 EUR d'economies nettes par an. Et pour les installations mises en service depuis janvier 2024 avec compteur communicant, ce tarif ne s'applique tout simplement pas.",
  },
  {
    question: "Quelle est la difference entre compensation et injection ?",
    answer:
      "Les installations mises en service avant 2024 beneficient du regime de compensation : le compteur tourne a l'envers, et cette compensation est maintenue jusqu'au 31 decembre 2030. Les installations depuis janvier 2024 sont equipees d'un compteur communicant qui mesure separement l'energie soutiree et l'energie injectee. Chaque kWh injecte est remunere au tarif d'injection de votre fournisseur (de 0,82 centime chez Mega a 5,58 centimes chez Energie.be), bien en dessous du tarif d'achat d'environ 38 centimes. C'est pourquoi maximiser l'autoconsommation est devenu la strategie prioritaire.",
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer:
      "L'installation elle-meme prend 1 a 2 jours pour une habitation residentielle standard. Avant cela, il y a le diagnostic sur site (visite technique obligatoire), la proposition detaillee avec calcul de rentabilite, et les demarches administratives aupres de votre gestionnaire de reseau. Comptez 2 a 3 semaines entre la signature et la mise en service.",
  },
  {
    question: "Be'energies intervient-il dans ma region ?",
    answer:
      "Nous intervenons dans toute la Wallonie, a Bruxelles, et dans le Limbourg flamand (Riemst, Tongeren, Bilzen, Hasselt). Benoit se deplace personnellement pour chaque diagnostic et supervise chaque chantier. Consultez nos pages locales pour voir les realisations dans votre ville.",
  },
  {
    question: "Quelles marques de panneaux utilisez-vous ?",
    answer:
      "Nous travaillons exclusivement avec des marques tier-1 reconnues pour leur fiabilite a long terme : SunPower, Longi, Canadian Solar. Pour les onduleurs, nous installons du SolarEdge, Huawei ou Enphase selon la configuration de votre toiture et vos besoins de monitoring. Le choix du materiel est adapte a chaque projet : Benoit selectionne la combinaison optimale apres la visite technique, pas avant.",
  },
  {
    question: "Que se passe-t-il apres l'installation ?",
    answer:
      "Le suivi post-installation est inclus : verification de conformite, mise en service, parametrage du monitoring de production, et support continu. Si un panneau faiblit ou si votre onduleur signale un probleme, nous le detectons via le monitoring et intervenons. Be'energies ne disparait pas apres la vente -- c'est d'ailleurs l'un des criteres que Benoit verifiait systematiquement lors de ses inspections.",
  },
  {
    question: "Peut-on ajouter une batterie plus tard ?",
    answer:
      "Oui. Nous dimensionnons l'onduleur et le cablage des la conception initiale pour permettre l'ajout ulterieur d'une batterie domestique. C'est une etape de preparation qui ne coute presque rien a l'installation mais qui vous evite des frais importants si vous decidez d'ajouter du stockage dans quelques annees, notamment quand la compensation prendra fin en 2030.",
  },
  {
    question: "Qu'est-ce que le tarif IMPACT et comment en profiter avec mes panneaux solaires ?",
    answer:
      "Le tarif IMPACT est un tarif tri-horaire disponible depuis janvier 2026 pour les detenteurs d'un compteur communicant. Il distingue trois periodes : ECO (01h-07h et 11h-17h, le moins cher), MEDIUM (07h-11h et 22h-01h), et PIC (17h-22h, le plus cher). La bonne nouvelle pour les proprietaires de panneaux solaires, c'est que les heures de production maximale (11h-17h) coincident avec les heures ECO. Selon les simulations de la CWaPE, un menage qui adapte sa consommation peut economiser jusqu'a 14 %, et jusqu'a 28 % avec un vehicule electrique.",
  },
  {
    question: "Que se passe-t-il si mon onduleur decroche a cause d'une surtension reseau ?",
    answer:
      "Le decrochage d'onduleur par surtension est un probleme reel et croissant en Belgique. Quand trop d'installations solaires injectent simultanement sur un meme reseau local, la tension depasse 253 V et l'onduleur se deconnecte pendant 15 minutes, ce qui represente une perte de production. Lors du diagnostic, Benoit verifie la tension du reseau local -- une etape que beaucoup d'installateurs omettent. Si le reseau est sature, il vous le signale avant de signer et propose des solutions adaptees comme un onduleur avec gestion dynamique de puissance.",
  },
];

export const batteryServiceFaq: FAQItem[] = [
  {
    question: "Une batterie domestique est-elle rentable en 2026 ?",
    answer:
      "Cela depend de votre situation. Pour les installations d'avant 2024 qui beneficient encore de la compensation jusqu'en 2030, le reseau agit comme une batterie gratuite : l'investissement est rarement justifie avant la fin de ce regime. Pour les installations post-2024 avec compteur communicant, la rentabilite d'une batterie s'ameliore sensiblement si vous combinez panneaux solaires, vehicule electrique ou pompe a chaleur. Benoit calcule votre taux d'autoconsommation reel avant de recommander ou non un stockage.",
  },
  {
    question: "Quelle capacite de batterie choisir ?",
    answer:
      "Pour un menage moyen, une batterie de 5 a 10 kWh suffit generalement. Le dimensionnement depend de votre consommation nocturne et de votre profil horaire. Une batterie surdimensionnee est un piege frequent : elle coute plus cher a l'achat sans generer d'economies supplementaires significatives. Benoit analyse vos courbes de consommation pour determiner la capacite optimale, pas la capacite maximale.",
  },
  {
    question: "Combien d'annees dure une batterie domestique ?",
    answer:
      "Les batteries actuelles en lithium fer-phosphate (LFP) ont une duree de vie de 10 a 15 ans, avec une garantie constructeur de 10 ans minimum sur la capacite residuelle (generalement 70 % de la capacite initiale). La chimie LFP est plus stable et plus durable que la chimie NMC (nickel-manganese-cobalt), meme si les batteries NMC offrent une densite energetique legerement superieure. Be'energies privilegie le LFP pour les installations residentielles en raison de sa securite et de sa longevite.",
  },
  {
    question: "Quelle est la difference entre une batterie LFP et NMC ?",
    answer:
      "Le LFP (lithium fer-phosphate) offre une meilleure duree de vie (plus de 6 000 cycles), une stabilite thermique superieure et un risque d'emballement thermique quasi nul. Le NMC (nickel-manganese-cobalt) est plus compact a capacite egale mais se degrade plus vite et presente un risque de surchauffe legerement plus eleve. Pour une installation residentielle ou la securite et la longevite priment sur l'encombrement, Benoit recommande systematiquement le LFP. C'est le choix le plus sense sur 10 a 15 ans.",
  },
  {
    question: "Comment une batterie optimise-t-elle le tarif IMPACT ?",
    answer:
      "Le tarif IMPACT, en vigueur depuis janvier 2026, distingue trois plages horaires. Les heures PIC (17h-22h) sont les plus couteuses, mais aussi celles ou vos panneaux ne produisent plus. Une batterie chargee pendant les heures ECO (11h-17h, quand vos panneaux produisent) vous permet de consommer votre propre electricite le soir au lieu de l'acheter au prix fort. C'est exactement le scenario ou le stockage prend tout son sens financier.",
  },
  {
    question: "Dans quels cas ne faut-il PAS acheter une batterie ?",
    answer:
      "Si votre installation date d'avant 2024 et beneficie encore de la compensation (jusqu'au 31 decembre 2030), le reseau joue deja le role de batterie virtuelle gratuite. Ajouter un stockage physique de 5 000 a 8 000 EUR n'accelerera pas votre retour sur investissement. De meme, si votre taux d'autoconsommation depasse deja 50 % sans batterie, le gain marginal est trop faible pour justifier la depense. Benoit vous le dit clairement si c'est le cas : il ne vend pas une batterie qui ne se justifie pas.",
  },
];

export const evChargingFaq: FAQItem[] = [
  {
    question: "Quel type de borne de recharge pour la maison ?",
    answer:
      "Pour un usage residentiel, une borne de 7,4 kW en monophase couvre largement les besoins quotidiens : elle recharge une batterie de 60 kWh en environ 8 heures, soit une nuit complete. Si votre installation electrique est en triphase, une borne de 11 ou 22 kW permet une recharge plus rapide. Le choix depend de votre raccordement existant, de votre vehicule et de vos habitudes de deplacement. Benoit verifie la capacite de votre tableau electrique avant toute proposition.",
  },
  {
    question: "Peut-on recharger sa voiture electrique avec ses panneaux solaires ?",
    answer:
      "Oui, et c'est la configuration la plus avantageuse. En programmant la recharge pendant les heures de production solaire (10h-16h), vous rechargez a un cout quasi nul puisque vous consommez directement votre propre electricite. Avec le tarif IMPACT, ces heures correspondent aux plages ECO (11h-17h), les moins cheres. Selon les simulations de la CWaPE, l'ajout d'un vehicule electrique avec recharge solaire intelligente peut generer jusqu'a 28 % d'economies supplementaires.",
  },
  {
    question: "Qu'est-ce que la recharge intelligente (smart charging) ?",
    answer:
      "La recharge intelligente adapte automatiquement la puissance de charge en fonction de votre production solaire en temps reel. Quand vos panneaux produisent beaucoup, la borne augmente la puissance. Quand la production baisse, elle la reduit pour eviter de soutirer du reseau. Certaines bornes integrent aussi la gestion des tarifs dynamiques pour recharger aux heures les moins cheres. Be'energies installe des bornes compatibles avec ces fonctions et les configure pour maximiser votre autoconsommation.",
  },
  {
    question: "Combien de temps faut-il pour installer une borne de recharge ?",
    answer:
      "L'installation prend generalement une demi-journee a une journee complete. Le delai depend principalement de la distance entre votre tableau electrique et l'emplacement de la borne, et de la necessite eventuelle de renforcer votre raccordement. Benoit effectue toujours une visite prealable pour evaluer les travaux necessaires. L'installation inclut la mise en conformite electrique, le test de fonctionnement et la configuration de la borne avec votre vehicule.",
  },
  {
    question: "Existe-t-il des primes pour l'installation d'une borne de recharge en Belgique ?",
    answer:
      "En Belgique, l'avantage principal est la TVA reduite a 6 % (au lieu de 21 %) pour les habitations de plus de 10 ans, ce qui s'applique a la borne comme a tous les travaux d'installation electrique. Pour les independants et les societes, l'investissement dans une borne est deductible fiscalement. Certaines communes offrent egalement des primes locales, mais les montants restent modestes. Benoit vous informe des aides disponibles dans votre commune lors du diagnostic.",
  },
];

export const complianceFaq: FAQItem[] = [
  {
    question: "Que risque-t-on avec une installation electrique non conforme ?",
    answer:
      "Les consequences d'une non-conformite sont concretes et serieuses. Premierement, votre assurance habitation peut refuser d'intervenir en cas d'incendie ou de degat electrique si l'installation n'est pas conforme -- ce point est souvent ignore par les proprietaires. Deuxiemement, une installation non conforme presente des risques reels d'incendie, d'electrocution ou de surtension. Troisiemement, lors d'une vente immobiliere, un rapport de non-conformite reduit la valeur du bien et complique la transaction. Le controle de conformite n'est pas une formalite administrative : c'est une protection pour votre famille et votre patrimoine.",
  },
  {
    question: "Comment se deroule une mise en conformite electrique ?",
    answer:
      "On commence par un diagnostic complet de votre installation existante : tableau electrique, cablage, prises de terre, dispositifs de protection, sections de cable. Benoit identifie chaque infraction par rapport au RGIE (Reglement General sur les Installations Electriques) et etablit un plan de mise en conformite detaille avec les travaux necessaires, classes par priorite. Les modifications sont ensuite realisees pour que l'installation passe le controle d'un organisme agree sans remarque. Comptez entre quelques heures et deux jours de travaux selon l'ampleur des non-conformites.",
  },
  {
    question: "Qu'est-ce qui declenche un controle de conformite obligatoire ?",
    answer:
      "Un controle est obligatoire dans trois cas principaux : lors de la vente d'un bien immobilier (le rapport de conformite est exige par le notaire), lors d'une modification importante de l'installation electrique (ajout de circuits, remplacement du tableau), et lors du raccordement d'une nouvelle installation comme des panneaux solaires ou une borne de recharge. Par ailleurs, un controle periodique est requis tous les 25 ans pour les installations domestiques. En tant qu'ancien inspecteur, Benoit sait exactement ce que le controleur va verifier et prepare votre installation en consequence.",
  },
  {
    question: "Combien coute une mise en conformite electrique ?",
    answer:
      "Le cout varie considerablement selon l'etat de votre installation. Pour des corrections mineures (ajout de differentiel, amelioration de la mise a la terre), comptez entre 300 et 800 EUR. Pour une remise en conformite complete d'un tableau electrique ancien, le budget se situe generalement entre 1 500 et 4 000 EUR. Benoit fournit un devis detaille apres le diagnostic, sans mauvaise surprise. La TVA de 6 % s'applique pour les habitations de plus de 10 ans, ce qui reduit sensiblement la facture.",
  },
  {
    question: "Mon installation photovoltaique doit-elle etre conforme independamment de mon installation domestique ?",
    answer:
      "Oui. L'installation photovoltaique fait l'objet d'un controle de conformite specifique, distinct du controle de l'installation domestique. Ce controle verifie le raccordement de l'onduleur, les protections electriques dediees, la mise a la terre, et la conformite du cablage courant continu. C'est precisement le type d'inspection que Benoit realisait avant de fonder Be'energies. Chaque installation Be'energies est concue et documentee pour passer ce controle du premier coup, avec le dossier technique complet pret pour l'organisme agree.",
  },
];

export const heatPumpFaq: FAQItem[] = [
  {
    question: "Pompe a chaleur air-eau ou air-air : comment choisir ?",
    answer:
      "La pompe a chaleur air-eau est le choix adapte si vous disposez d'un chauffage central (radiateurs ou plancher chauffant) et souhaitez aussi produire votre eau chaude sanitaire. Elle remplace votre chaudiere. La pompe air-air, elle, fonctionne par soufflage d'air et convient mieux pour la climatisation et le chauffage d'appoint dans des pieces specifiques. Le choix depend de votre systeme existant, de votre niveau d'isolation et de vos objectifs. Benoit evalue ces parametres lors de la visite technique pour vous orienter vers la solution qui a du sens chez vous.",
  },
  {
    question: "Une pompe a chaleur est-elle bruyante ?",
    answer:
      "Les modeles actuels emettent entre 35 et 50 dB a un metre de distance, soit le niveau sonore d'une conversation a voix basse ou d'une bibliotheque calme. L'element determinant n'est pas seulement le choix du modele, mais le positionnement de l'unite exterieure. Un placement mal pense peut amplifier le bruit par reflexion sur un mur ou generer des vibrations transmises a la structure. Benoit choisit l'emplacement en tenant compte des distances reglementaires, de l'acoustique du site et du voisinage.",
  },
  {
    question: "Qu'est-ce que le COP d'une pompe a chaleur ?",
    answer:
      "Le COP (Coefficient de Performance) mesure l'efficacite de la pompe a chaleur. Un COP de 4 signifie que pour 1 kWh d'electricite consomme, la pompe a chaleur produit 4 kWh de chaleur. En pratique, le COP varie selon la temperature exterieure : il est eleve quand il fait doux (COP 4 a 5 au-dessus de 7 °C) et diminue quand il fait tres froid (COP 2 a 3 en dessous de -5 °C). C'est pourquoi le SCOP (COP saisonnier), qui tient compte des variations climatiques de votre region, est un indicateur plus fiable pour estimer vos economies reelles.",
  },
  {
    question: "Peut-on combiner une pompe a chaleur avec des panneaux solaires ?",
    answer:
      "C'est meme l'une des combinaisons les plus intelligentes. Vos panneaux solaires produisent de l'electricite pendant la journee, et la pompe a chaleur utilise cette electricite pour chauffer votre habitation ou votre eau sanitaire. Avec un ballon tampon ou un boiler thermodynamique, vous stockez la chaleur produite pendant les heures de production solaire pour en profiter le soir. Cette synergie augmente directement votre taux d'autoconsommation et reduit votre dependance au reseau. Be'energies concoit les deux systemes de maniere integree pour maximiser cet effet.",
  },
  {
    question: "Quelle reduction sur ma facture de chauffage puis-je esperer avec une pompe a chaleur ?",
    answer:
      "En remplacement d'une chaudiere au mazout, une pompe a chaleur air-eau peut reduire votre facture de chauffage de 40 a 60 %, selon votre niveau d'isolation et le climat local. En remplacement du gaz, la reduction est de l'ordre de 25 a 40 %. Ces chiffres supposent une habitation correctement isolee : si votre maison est une passoire thermique, la pompe a chaleur consommera davantage et la rentabilite sera compromise. Benoit evalue l'isolation de votre habitation avant de proposer un dimensionnement, pour eviter les mauvaises surprises.",
  },
];

export const roofCleaningFaq: FAQItem[] = [
  {
    question: "A quelle frequence faut-il nettoyer sa toiture ?",
    answer:
      "En Belgique, un nettoyage tous les 3 a 5 ans est generalement recommande, selon l'exposition de votre toit (orientation nord, presence d'arbres a proximite, humidite du site). Les toitures en tuiles beton sont particulierement sensibles aux mousses et lichens. Un toit neglige ne pose pas seulement un probleme esthetique : les mousses retiennent l'humidite, accelerent la degradation des materiaux et peuvent provoquer des infiltrations. Un entretien regulier prolonge la duree de vie de votre couverture de plusieurs annees.",
  },
  {
    question: "Le nettoyage de toiture ameliore-t-il la performance de mes panneaux solaires ?",
    answer:
      "Oui, directement. Des panneaux solaires recouverts de poussieres, de pollens, de fientes d'oiseaux ou de residus de mousse peuvent perdre entre 5 et 15 % de leur rendement. Lors du nettoyage de votre toiture, Be'energies nettoie egalement la surface de vos panneaux avec des produits adaptes qui n'endommagent pas le revetement anti-reflet. C'est un geste d'entretien simple qui peut representer plusieurs centaines d'euros de production supplementaire par an sur une installation de taille moyenne.",
  },
  {
    question: "Mon assurance habitation peut-elle refuser un sinistre a cause d'un toit mal entretenu ?",
    answer:
      "C'est un risque reel et souvent meconnu. Si une infiltration d'eau cause des degats interieurs et que l'expert constate que la toiture etait envahie de mousse ou presentait des signes de deterioration evidents, l'assureur peut invoquer le defaut d'entretien pour reduire ou refuser l'indemnisation. Le RGIE n'impose pas directement le nettoyage de toiture, mais le contrat d'assurance habitation contient generalement une clause d'entretien normal du bien. Un nettoyage periodique documente protege aussi bien votre toit que vos droits en cas de sinistre.",
  },
  {
    question: "Quelle est la difference entre un nettoyage de toiture et un traitement anti-mousse ?",
    answer:
      "Le nettoyage consiste a retirer physiquement les mousses, lichens et saletés presentes sur la toiture, generalement par un lavage a basse pression adapte au type de revetement. Le traitement anti-mousse est une etape complementaire : un produit biocide est applique apres le nettoyage pour ralentir la repousse des vegetaux. Sans traitement, la mousse reapparait en 12 a 18 mois. Avec traitement, la protection dure 3 a 5 ans. Be'energies propose les deux services et adapte la methode au materiau de votre couverture pour eviter tout dommage.",
  },
  {
    question: "Combien coute un nettoyage de toiture en Belgique ?",
    answer:
      "Le prix depend de la surface de toiture, de l'accessibilite (hauteur, pente, obstacles), et de l'etat general. Pour une toiture residentielle standard de 80 a 120 m2, comptez generalement entre 800 et 2 000 EUR, traitement anti-mousse inclus. La peinture de toiture, qui constitue une protection et une renovation esthetique supplementaire, se situe dans une fourchette superieure. Benoit etablit un devis precis apres une evaluation sur site. La TVA de 6 % s'applique pour les habitations de plus de 10 ans.",
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
