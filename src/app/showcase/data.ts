export interface ConceptMeta {
  slug: string;
  title: string;
  subtitle: string;
  rationale: string;
  tags: string[];
  audiencePsychology: string;
  conversionLogic: string;
  palette: { name: string; hex: string }[];
  typography: { role: string; font: string }[];
  moodKeywords: string[];
}

export const concepts: ConceptMeta[] = [
  {
    slug: "rapport-de-terrain",
    title: "Rapport de Terrain",
    subtitle: "L'autorite technique au service de la confiance",
    rationale:
      "Ce concept transforme l'experience d'inspecteur de Benoit en langage visuel. Le site ressemble a un rapport de terrain premium : donnees chiffrees en monospace, callouts techniques, preuves documentees. La credibilite ne se dit pas, elle se montre.",
    tags: ["Technique", "Editorial", "Data-driven", "Premium"],
    audiencePsychology:
      "Cible les proprietaires analytiques qui comparent plusieurs devis. Ces clients veulent des preuves, pas des promesses. Le style 'rapport d'inspection' active un biais d'autorite : si le site ressemble a un document technique officiel, le visiteur attribue inconsciemment plus de competence a l'entreprise. Les donnees chiffrees reduisent l'anxiete decisionnelle.",
    conversionLogic:
      "L'architecture de preuve (chiffres reels, cas documentes, badges de conformite) reduit les objections avant qu'elles ne surviennent. Le rythme CTA alterne entre diagnostic gratuit (engagement faible) et appel direct (engagement fort), maximisant les conversions a chaque niveau de decision.",
    palette: [
      { name: "Midnight", hex: "#0c1220" },
      { name: "Amber", hex: "#f59e0b" },
      { name: "Cyan", hex: "#06b6d4" },
      { name: "Ivory", hex: "#f8fafc" },
      { name: "Steel", hex: "#64748b" },
    ],
    typography: [
      { role: "Titres", font: "DM Serif Display" },
      { role: "Corps", font: "Plus Jakarta Sans" },
      { role: "Donnees", font: "JetBrains Mono" },
    ],
    moodKeywords: [
      "Rigueur",
      "Transparence",
      "Preuve",
      "Autorite",
      "Precision",
    ],
  },
  {
    slug: "atelier-solaire",
    title: "Atelier Solaire",
    subtitle: "L'artisan de l'energie durable",
    rationale:
      "Ce concept positionne Be'energies comme un artisan-expert, pas un vendeur. Tons chauds, typographie expressive, sensation de savoir-faire. Chaque installation est presentee comme une oeuvre realisee avec soin, pas comme un produit en serie.",
    tags: ["Artisanal", "Chaleureux", "Humain", "Narratif"],
    audiencePsychology:
      "Cible les proprietaires qui valorisent la relation humaine et le savoir-faire local. Ces clients choisissent avec leur instinct autant qu'avec leur calculatrice. Le ton chaleureux et artisanal active un biais de proximite : on fait confiance a l'artisan du coin plus qu'a la multinationale. Les temoignages et l'histoire du fondateur creent un lien emotionnel.",
    conversionLogic:
      "La narration du fondateur cree un attachement personnel qui differencie Be'energies de la concurrence commoditisee. Le parcours visuel guide le visiteur de la decouverte emotionnelle vers la preuve technique, puis vers le CTA. La chaleur visuelle reduit la friction de prise de contact.",
    palette: [
      { name: "Charbon", hex: "#1c1917" },
      { name: "Terracotta", hex: "#c2410c" },
      { name: "Sable", hex: "#fef3c7" },
      { name: "Sauge", hex: "#65a30d" },
      { name: "Pierre", hex: "#78716c" },
    ],
    typography: [
      { role: "Titres", font: "Fraunces" },
      { role: "Corps", font: "Source Serif 4" },
      { role: "Accents", font: "Caveat" },
    ],
    moodKeywords: [
      "Savoir-faire",
      "Proximite",
      "Authenticite",
      "Chaleur",
      "Engagement",
    ],
  },
  {
    slug: "controle-technique",
    title: "Controle Technique",
    subtitle: "L'ingenierie au service de la performance",
    rationale:
      "Ce concept pousse la precision technique a son maximum. Interface inspiree des dashboards industriels, geometrie stricte, palette froide avec accents electriques. Le message est clair : ici, on ne plaisante pas avec la qualite.",
    tags: ["Ingenierie", "Precision", "Dashboard", "High-tech"],
    audiencePsychology:
      "Cible les decideurs rationnels et les professionnels (PME, syndics) qui evaluent un prestataire sur sa competence technique plutot que sur sa sympathie. L'esthetique dashboard/controle qualite active un biais de competence technique. Les indicateurs de performance et les certifications creent une impression de fiabilite industrielle.",
    conversionLogic:
      "L'interface structuree comme un tableau de bord reduit la charge cognitive : chaque information est a sa place, chaque chiffre est mis en evidence. Le parcours est lineaire et efficace. Les CTAs sont presentes comme des 'actions systeme', integres naturellement dans le flux. Particulierement efficace pour les prospects B2B.",
    palette: [
      { name: "Noir Graphite", hex: "#09090b" },
      { name: "Cyan Electrique", hex: "#06b6d4" },
      { name: "Blanc Signal", hex: "#fafafa" },
      { name: "Gris Acier", hex: "#52525b" },
      { name: "Vert Validation", hex: "#22c55e" },
    ],
    typography: [
      { role: "Titres", font: "Space Grotesk" },
      { role: "Corps", font: "IBM Plex Sans" },
      { role: "Donnees", font: "IBM Plex Mono" },
    ],
    moodKeywords: [
      "Precision",
      "Performance",
      "Controle",
      "Fiabilite",
      "Systeme",
    ],
  },
];

export const services = [
  {
    title: "Panneaux solaires",
    description:
      "Dimensionnement sur mesure, pose certifiee, conformite garantie des le premier controle.",
    icon: "solar",
  },
  {
    title: "Batteries domestiques",
    description:
      "Stockage intelligent pour maximiser votre autoconsommation et votre independance.",
    icon: "battery",
  },
  {
    title: "Bornes de recharge",
    description:
      "Installation conforme RGIE, mono ou triphase, pour maison ou copropriete.",
    icon: "ev",
  },
  {
    title: "Conformite electrique",
    description:
      "Mise en conformite, preparation au controle, ancien inspecteur certifie RESCERT.",
    icon: "compliance",
  },
  {
    title: "Pompes a chaleur",
    description:
      "Chauffage et climatisation haute performance, dimensionnes pour votre habitat.",
    icon: "heatpump",
  },
  {
    title: "Nettoyage toiture",
    description:
      "Demoussage, traitement anti-mousse, peinture de toiture professionnelle.",
    icon: "roof",
  },
];

export const reviews = [
  {
    name: "Marc D.",
    location: "Waremme",
    text: "Benoit a repere un defaut de terre que l'ancien installateur avait ignore. Installation solaire nickel, conforme du premier coup.",
    rating: 5,
    service: "Panneaux solaires",
  },
  {
    name: "Sophie L.",
    location: "Bruxelles",
    text: "Le seul qui m'a explique pourquoi mon devis precedent etait surdimensionne. Honnete, competent, et disponible.",
    rating: 5,
    service: "Diagnostic electrique",
  },
  {
    name: "Pierre V.",
    location: "Riemst",
    text: "Borne de recharge installee en une journee. Tout conforme, tout propre. Je recommande sans hesiter.",
    rating: 5,
    service: "Borne de recharge",
  },
];

export const realizations = [
  {
    title: "Installation 8.4 kWc",
    location: "Ans",
    type: "Panneaux solaires",
    keyFigure: "Retour < 6 ans",
  },
  {
    title: "Mise en conformite complete",
    location: "Liege",
    type: "Conformite electrique",
    keyFigure: "Conforme au 1er controle",
  },
  {
    title: "Borne triphase 22 kW",
    location: "Riemst",
    type: "Borne de recharge",
    keyFigure: "Installation en 1 jour",
  },
];

export const piegesTeaser = [
  {
    title: "Le surdimensionnement delibere",
    description:
      "Certains vendeurs gonflent la puissance pour gonfler la facture. Un kWc de trop, c'est de l'argent perdu.",
  },
  {
    title: "Le compteur pas compatible",
    description:
      "Installer des panneaux sans verifier le compteur, c'est risquer un refus de raccordement. On le voit chaque semaine.",
  },
  {
    title: "L'onduleur sous-dimensionne",
    description:
      "Un onduleur trop petit bride votre production. C'est invisible sur le devis mais catastrophique sur votre rentabilite.",
  },
];

export const coverageZones = [
  { region: "Wallonie", cities: "Liege, Namur, Mons, Charleroi, Waremme, Ans, Nivelles" },
  { region: "Bruxelles", cities: "Toutes les communes" },
  { region: "Limbourg flamand", cities: "Riemst, Tongeren, Hasselt, Bilzen, Lanaken" },
];
