import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { AlertTriangleIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Pieges a eviter avant d'installer | Guide par un ancien inspecteur",
  description:
    "10 pieges a eviter avant d'installer des panneaux solaires, une batterie, une borne ou une pompe a chaleur. Guide complet par Benoit Dezso, ancien inspecteur RESCERT. Checklists incluses.",
  path: "/pieges-a-eviter/",
});

// ---------------------------------------------------------------------------
// Data: chapters
// ---------------------------------------------------------------------------
interface Chapter {
  id: string;
  number: number;
  title: string;
  severity: "critique" | "important" | "attention";
  service: string;
  body: string;
  checklist?: string[];
  founderInsight?: string;
  serviceLink?: { label: string; href: string };
}

const chapters: Chapter[] = [
  {
    id: "fausses-primes-wallonnes",
    number: 1,
    title: "Les fausses promesses de primes en Wallonie",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>En 2026, il n&apos;existe plus de prime regionale pour les panneaux photovoltaiques residentiels en Wallonie. Les anciennes primes Qualiwatt ont disparu, et aucun dispositif de remplacement equivalent n&apos;a ete mis en place.</p>
<p>Pourtant, certains demarcheurs continuent d&apos;evoquer des &laquo;&nbsp;primes regionales&nbsp;&raquo;, des &laquo;&nbsp;aides communales&nbsp;&raquo; ou des &laquo;&nbsp;incentives fiscaux&nbsp;&raquo; pour justifier un prix gonfle. La technique est simple : on presente un prix brut eleve, on annonce une &laquo;&nbsp;prime&nbsp;&raquo; qui le reduit, et le client paie au final un tarif normal -- en croyant avoir obtenu une reduction.</p>
<p><strong>Ce qui existe reellement en mars 2026 :</strong></p>
<ul>
<li>TVA a 6% (au lieu de 21%) pour les habitations de plus de 10 ans -- ce n&apos;est pas une prime, c&apos;est un taux reduit standard</li>
<li>Certificats verts a Bruxelles (pas en Wallonie ni en Flandre)</li>
<li>Deduction fiscale pour les entreprises (pas les particuliers)</li>
<li>Aucune prime regionale wallonne pour le photovoltaique residentiel</li>
</ul>
<p>Si un installateur mentionne une &laquo;&nbsp;prime&nbsp;&raquo; specifique, demandez-lui le nom exact du dispositif, l&apos;organisme payeur, et le lien vers le texte officiel. S&apos;il ne peut pas vous les fournir, c&apos;est un signal d&apos;alerte.</p>`,
    checklist: [
      "Demander le nom exact de la prime et l'organisme payeur",
      "Verifier sur le site de la Region wallonne si le dispositif existe",
      "Comparer le prix final (apres soi-disant prime) avec d'autres devis",
      "Ne jamais signer sur base d'une prime non verifiee",
    ],
    founderInsight:
      "J'ai vu des devis ou la 'prime' annoncee correspondait exactement a la marge cachee. Le client payait le prix du marche en croyant beneficier d'une aide.",
    serviceLink: { label: "Installation photovoltaique", href: "/services/panneaux-photovoltaiques/" },
  },
  {
    id: "fausses-garanties",
    number: 2,
    title: "Les fausses garanties : 25 ans sur le papier, 0 ans dans la realite",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>Les panneaux solaires beneficient typiquement de deux types de garantie :</p>
<ul>
<li><strong>Garantie produit (fabricant) :</strong> couvre les defauts de fabrication. Generalement 12 a 25 ans selon la marque.</li>
<li><strong>Garantie de rendement :</strong> assure que le panneau conserve un certain pourcentage de sa puissance nominale (typiquement 80% apres 25 ans).</li>
</ul>
<p>Le probleme n&apos;est pas la garantie du panneau, mais la garantie de l&apos;installation. Voici ce que beaucoup d&apos;installateurs ne disent pas :</p>
<ul>
<li>La garantie fabricant ne couvre pas la main-d&apos;oeuvre de remplacement. Si un panneau est defectueux apres 5 ans, le fabricant vous envoie un nouveau panneau -- mais qui paie le deplacement, la depose et la repose ?</li>
<li>Si l&apos;installateur fait faillite (et dans un marche volatile, ca arrive), la garantie d&apos;installation disparait avec l&apos;entreprise</li>
<li>La garantie de rendement est quasi impossible a faire valoir : il faut prouver que la baisse de rendement est due au panneau et non a l&apos;ombrage, la salissure, ou un defaut d&apos;onduleur</li>
</ul>
<p><strong>Les vrais questions a poser :</strong></p>
<ul>
<li>Quelle est la garantie sur la main-d&apos;oeuvre et le deplacement ?</li>
<li>Depuis combien d&apos;annees l&apos;entreprise existe-t-elle ?</li>
<li>Que se passe-t-il si l&apos;installateur cesse son activite ?</li>
<li>L&apos;onduleur a-t-il la meme duree de garantie que les panneaux ? (souvent non : 5-12 ans vs 25 ans)</li>
</ul>`,
    checklist: [
      "Verifier la garantie main-d'oeuvre separement de la garantie produit",
      "Demander l'anciennete de l'entreprise et son numero BCE",
      "Verifier la duree de garantie de l'onduleur (souvent plus courte)",
      "Demander un document ecrit detaillant exactement ce qui est couvert",
    ],
    founderInsight:
      "Chez Be'energies, on ne promet pas 25 ans de garantie pour disparaitre dans 3 ans. On detaille par ecrit ce qui est garanti, par qui, et pendant combien de temps. Et on est la depuis le debut.",
  },
  {
    id: "devis-non-equivalents",
    number: 3,
    title: "Comparer des devis sur du materiel non equivalent",
    severity: "important",
    service: "panneaux-photovoltaiques",
    body: `<p>Trois devis a 9 500, 11 000 et 12 500 EUR pour une installation de 5 kWc. Le reflexe est de prendre le moins cher. Mais les trois devis ne proposent pas la meme chose.</p>
<p><strong>Ce qui varie entre deux devis &laquo;&nbsp;equivalents&nbsp;&raquo; :</strong></p>
<ul>
<li><strong>Les panneaux :</strong> un panneau N-type monocristallin a haut rendement (21-22%) n&apos;a pas la meme performance qu&apos;un panneau polycristallin d&apos;entree de gamme (17-18%). Sur 25 ans, l&apos;ecart de production peut atteindre 15-20%.</li>
<li><strong>L&apos;onduleur :</strong> un micro-onduleur SolarEdge ou Enphase permet un suivi panneau par panneau et limite l&apos;impact de l&apos;ombrage partiel. Un onduleur string basique fait chuter la production de toute la chaine si un seul panneau est ombrage.</li>
<li><strong>Le systeme de fixation :</strong> les systemes de montage low-cost utilisent des crochets non certifies ou des rails fins qui se deforment sous le vent.</li>
<li><strong>Le cablage :</strong> un cablage AC sous-dimensionne ou mal protege ne se voit pas a l&apos;oeil nu mais cree des risques de surchauffe et echoue au controle.</li>
<li><strong>La visite technique :</strong> le devis le moins cher n&apos;inclut souvent pas de visite prealable. Le dimensionnement est fait sur base de Google Maps.</li>
</ul>
<p>Pour comparer des devis de maniere equitable, il faut comparer point par point :</p>`,
    checklist: [
      "Marque, modele et puissance de chaque panneau (pas juste 'panneau 400W')",
      "Type et marque de l'onduleur (string, optimise ou micro-onduleur)",
      "Systeme de fixation et certification",
      "Section de cable et protection electrique incluses",
      "Visite technique prealable incluse ou non",
      "Garanties detaillees : produit, rendement, main-d'oeuvre",
      "Mise en service et verification de conformite incluses",
    ],
    founderInsight:
      "Le devis le moins cher est rarement le moins cher a 25 ans. Je vois regulierement des installations a 8 000 EUR qui necessitent 2 000 EUR de corrections apres le controle de conformite.",
    serviceLink: { label: "Notre approche photovoltaique", href: "/services/panneaux-photovoltaiques/" },
  },
  {
    id: "surchauffe-onduleur",
    number: 4,
    title: "Onduleur surchauffe et risque d'incendie : le danger invisible",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>L&apos;onduleur convertit le courant continu produit par les panneaux en courant alternatif utilisable. C&apos;est le composant le plus sollicite de l&apos;installation, et c&apos;est aussi celui qui presente le risque d&apos;incendie le plus eleve quand il est mal installe.</p>
<p><strong>Les causes de surchauffe les plus courantes :</strong></p>
<ul>
<li><strong>Emplacement inadapte :</strong> un onduleur installe dans un grenier non ventile, directement sous la toiture ou dans un local technique ferme atteint facilement 55-65 C en ete. La plupart des onduleurs reduisent leur puissance (derating) au-dessus de 45 C et s&apos;arretent au-dessus de 60 C. Vous perdez de la production sans le savoir.</li>
<li><strong>Sous-dimensionnement :</strong> un onduleur de 4 kW connecte a 5,5 kWc de panneaux fonctionne en permanence a sa puissance maximale. La surchauffe est systematique, la duree de vie chute de 12-15 ans a 5-7 ans.</li>
<li><strong>Ventilation bloquee :</strong> les onduleurs ont besoin d&apos;un espace libre autour d&apos;eux (minimum 20 cm sur chaque face). Les installations ou l&apos;onduleur est coince entre deux murs ou derriere un meuble ne respectent pas cette exigence.</li>
<li><strong>Connexions DC defaillantes :</strong> des connecteurs MC4 mal sertis ou non compatibles (melanges de marques) creent des points chauds locaux qui peuvent atteindre 200-300 C. C&apos;est la cause la plus frequente des incendies photovoltaiques documentes.</li>
</ul>
<p><strong>Ce qu&apos;un ancien inspecteur verifie :</strong> l&apos;emplacement de l&apos;onduleur, la ventilation, le dimensionnement par rapport a la puissance crete, la qualite des connexions DC, et la protection contre les surtensions (parafoudre DC si necessaire).</p>`,
    checklist: [
      "Verifier que l'onduleur est installe dans un endroit ventile",
      "S'assurer d'un espace libre minimum de 20 cm autour de l'onduleur",
      "Verifier que la puissance de l'onduleur est adaptee a la puissance crete",
      "Demander si les connecteurs MC4 sont de meme marque (pas de melange)",
      "Verifier la presence d'un parafoudre DC cote panneaux",
    ],
    founderInsight:
      "Les incendies photovoltaiques sont rares mais reels. Dans mes annees d'inspection, j'ai vu des connecteurs MC4 noircis par la chaleur, des onduleurs installes dans des combles a 60 C, et des cables DC qui passaient a travers l'isolation sans protection. Ce sont des erreurs evitables.",
  },
  {
    id: "systeme-ac-sous-dimensionne",
    number: 5,
    title: "Le cote AC sous-dimensionne : le coupable oublie",
    severity: "important",
    service: "all",
    body: `<p>Tout le monde parle des panneaux et de l&apos;onduleur. Personne ne parle du cote AC -- la partie courant alternatif entre l&apos;onduleur et le tableau electrique. C&apos;est pourtant la ou se concentre une part importante des non-conformites.</p>
<p><strong>Les erreurs les plus frequentes cote AC :</strong></p>
<ul>
<li><strong>Section de cable insuffisante :</strong> un cable 2,5 mm pour un onduleur de 5 kW sur une distance de 15 metres. Le cable chauffe, la resistance augmente, vous perdez de l&apos;energie et le risque de surchauffe est reel.</li>
<li><strong>Protection differentielle inadaptee :</strong> certains onduleurs necessitent un differentiel de type A (sensible au courant continu residuel), pas un type AC standard. Utiliser le mauvais type signifie que la protection ne declenchera pas en cas de defaut.</li>
<li><strong>Disjoncteur mal calibre :</strong> un disjoncteur de 20A sur un circuit qui debite regulierement 18A fonctionne en permanence a 90% de sa capacite. Ce n&apos;est pas dangereux a court terme, mais ca reduit sa duree de vie et sa fiabilite.</li>
<li><strong>Absence de coupure generale :</strong> en cas d&apos;urgence (incendie, intervention des pompiers), il doit etre possible de couper l&apos;integralite de l&apos;installation photovoltaique depuis un point accessible. Si ce dispositif n&apos;existe pas, c&apos;est une non-conformite.</li>
</ul>
<p>Ces erreurs sont invisibles pour un proprietaire non technicien. Elles ne se voient pas. Elles ne font pas de bruit. Et elles ne se revelent qu&apos;au controle de conformite -- ou pire, lors d&apos;un incident.</p>`,
    checklist: [
      "Verifier la section du cable AC entre l'onduleur et le tableau",
      "Demander le type de differentiel prevu (type A ou type B)",
      "S'assurer qu'un dispositif de coupure generale est prevu",
      "Verifier que le disjoncteur est calibre pour la puissance de l'onduleur",
    ],
    founderInsight:
      "Le cote AC est mon domaine. C'est exactement ce que j'inspectais pendant des annees. La majorite des rapports de non-conformite que j'ai rediges concernaient le cote AC, pas les panneaux eux-memes.",
    serviceLink: { label: "Conformite electrique", href: "/services/conformite-electrique/" },
  },
  {
    id: "mauvais-dimensionnement-chaudiere",
    number: 6,
    title: "Pompe a chaleur : le mauvais dimensionnement qui coute une fortune",
    severity: "critique",
    service: "pompes-a-chaleur",
    body: `<p>Une pompe a chaleur mal dimensionnee est l&apos;un des investissements les plus decevants qu&apos;un proprietaire puisse faire. Contrairement aux panneaux solaires, ou un leger surdimensionnement a un impact limite, une pompe a chaleur surdimensionnee ou sous-dimensionnee cree des problemes concrets et immediats.</p>
<p><strong>Pompe a chaleur sous-dimensionnee :</strong></p>
<ul>
<li>L&apos;appoint electrique (resistance) fonctionne en permanence les jours froids</li>
<li>La facture d&apos;electricite explose au lieu de diminuer</li>
<li>Le confort thermique n&apos;est pas atteint</li>
<li>Le client pense que &laquo;&nbsp;les pompes a chaleur, ca ne marche pas en Belgique&nbsp;&raquo;</li>
</ul>
<p><strong>Pompe a chaleur surdimensionnee :</strong></p>
<ul>
<li>Le compresseur effectue des cycles courts (on/off repetitifs)</li>
<li>Le COP (coefficient de performance) chute : au lieu de 3-4, il tombe a 2-2,5</li>
<li>La duree de vie du compresseur diminue significativement</li>
<li>L&apos;investissement initial est plus eleve sans gain proportionnel</li>
</ul>
<p><strong>Comment dimensionner correctement :</strong></p>
<p>Le dimensionnement d&apos;une pompe a chaleur ne se fait pas sur la surface habitable seule. Il necessite :</p>
<ul>
<li>Un calcul de deperditions thermiques (isolation des murs, toiture, sol, fenetres)</li>
<li>L&apos;analyse du systeme de distribution existant (radiateurs, plancher chauffant, temperature de regime)</li>
<li>La prise en compte du climat local (degre-jours de chauffage)</li>
<li>L&apos;integration avec l&apos;installation photovoltaique existante pour dimensionner la production en consequence</li>
</ul>`,
    checklist: [
      "Exiger un calcul de deperditions thermiques (pas juste la surface)",
      "Verifier que le systeme de distribution existant est compatible",
      "Demander le COP nominal ET le COP saisonnier (SCOP)",
      "Verifier la puissance de l'appoint electrique et quand il s'active",
      "S'assurer que le dimensionnement inclut les besoins en eau chaude sanitaire",
    ],
    founderInsight:
      "J'ai inspecte des maisons ou la pompe a chaleur tournait avec l'appoint electrique en permanence. Le proprietaire payait plus qu'avec sa chaudiere au gaz, et l'installateur avait quitte la scene. Un calcul thermique serieux avant l'installation aurait evite tout ca.",
    serviceLink: { label: "Pompe a chaleur", href: "/services/pompes-a-chaleur/" },
  },
  {
    id: "documentation-technique",
    number: 7,
    title: "Documentation technique : ce que vous devez recevoir (et que beaucoup ne fournissent pas)",
    severity: "important",
    service: "all",
    body: `<p>Apres une installation, vous devez recevoir un ensemble de documents techniques qui sont a la fois une obligation legale et une protection pour vous. Sans ces documents, votre installation est incomplete, meme si elle fonctionne.</p>
<p><strong>Documents obligatoires :</strong></p>
<ul>
<li><strong>Schema unifilaire :</strong> le plan complet de votre installation electrique, mis a jour avec les nouveaux equipements (panneaux, onduleur, batterie, borne). Ce schema est exige lors de tout controle de conformite.</li>
<li><strong>Schema de position :</strong> le plan physique montrant l&apos;emplacement de chaque composant (tableau, prises, interrupteurs, onduleur, etc.)</li>
<li><strong>Rapport de conformite :</strong> le rapport de l&apos;organisme agree (Vinqotte, AIB, ACA, BTV, etc.) attestant que l&apos;installation est conforme.</li>
<li><strong>Declaration de conformite de l&apos;installateur :</strong> le document ou l&apos;installateur atteste que les travaux respectent les normes en vigueur.</li>
</ul>
<p><strong>Documents fortement recommandes :</strong></p>
<ul>
<li>Fiche technique des panneaux (datasheet avec la puissance nominale, les courbes I-V, les certifications)</li>
<li>Fiche technique de l&apos;onduleur (rendement, plage de tension DC, certifications)</li>
<li>Garanties ecrites (produit, rendement, main-d&apos;oeuvre)</li>
<li>Photos de l&apos;installation avant fermeture (chemins de cables, boitier de jonction, raccordement au tableau)</li>
<li>Parametres de configuration de l&apos;onduleur (limitation d&apos;injection si applicable, parametres reseau)</li>
</ul>
<p>Sans schema unifilaire a jour, votre installation sera refusee au controle. Sans rapport de conformite, votre assurance peut invalider une couverture. Sans fiches techniques, vous ne pouvez pas verifier ce qui a ete installe.</p>`,
    checklist: [
      "Schema unifilaire mis a jour avec tous les nouveaux equipements",
      "Schema de position conforme a la realite",
      "Rapport de conformite de l'organisme agree",
      "Declaration de conformite signee par l'installateur",
      "Fiches techniques des panneaux et de l'onduleur",
      "Document de garantie detaille",
      "Photos de l'installation avant fermeture",
    ],
    founderInsight:
      "Pendant mes annees d'inspection, le probleme le plus frequent n'etait pas un defaut electrique. C'etait un schema unifilaire absent ou non a jour. Pas de schema = rapport de non-conformite automatique, quelle que soit la qualite de l'installation.",
    serviceLink: { label: "Conformite electrique", href: "/services/conformite-electrique/" },
  },
  {
    id: "retour-investissement-gonfle",
    number: 8,
    title: "Le retour sur investissement en 2 ans : mathematiquement impossible",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>En 2026, avec un cout d&apos;installation moyen de 1 800 a 2 200 EUR/kWc (TVA 6% incluse), et des economies annuelles realistes de 250 a 350 EUR/kWc, le retour sur investissement se situe entre <strong>5 et 7 ans</strong>.</p>
<p>Un installateur qui promet un retour en 2 ans utilise necessairement des hypotheses fausses :</p>
<ul>
<li><strong>Prix d&apos;electricite gonfle :</strong> projection a 50-60 c/kWh au lieu des ~38 c/kWh actuels</li>
<li><strong>Taux d&apos;autoconsommation irreal :</strong> 90% alors que la moyenne belge sans batterie est de 30-40%</li>
<li><strong>Tarif d&apos;injection gonfle :</strong> utilisation de 15-20 c/kWh alors que la realite est de 1 a 6 c/kWh</li>
<li><strong>Production surestimee :</strong> calcul sur la production theorique maximale sans tenir compte de l&apos;orientation, de l&apos;inclinaison et de l&apos;ombrage</li>
<li><strong>Tarif prosumer omis :</strong> pas de mention des 85-99 EUR/kWe/an pour les installations avant 2024 en Wallonie</li>
</ul>
<p><strong>Les vrais chiffres 2026 :</strong></p>
<ul>
<li>Cout moyen installe (TVA 6%) : ~9 000 - 12 000 EUR pour 4 a 6 kWc</li>
<li>Economies annuelles nettes : ~1 200 - 1 800 EUR (autoconsommation + injection)</li>
<li>Retour reel : <strong>5 a 7 ans</strong></li>
<li>Rendement annualise : <strong>~12%</strong></li>
<li>Gain total sur 25 ans : <strong>20 000 - 35 000 EUR</strong></li>
</ul>
<p>Un retour en 5-7 ans avec un rendement de 12% est un excellent investissement. Pas besoin de mentir pour le vendre.</p>`,
    checklist: [
      "Demander le detail du calcul de rentabilite ligne par ligne",
      "Verifier le prix d'electricite utilise (doit etre ~38 c/kWh)",
      "Verifier le taux d'autoconsommation estime (30-50% sans batterie est realiste)",
      "Verifier le tarif d'injection utilise (1-6 c/kWh, pas plus)",
      "Verifier si le tarif prosumer est inclus dans le calcul",
    ],
    founderInsight:
      "Un retour en 5-7 ans, c'est un rendement d'environ 12% par an. Aucun placement bancaire ne fait mieux. Pourquoi certains installateurs ressentent-ils le besoin de promettre 2 ans ? Parce que ca signe des contrats. Mais ca cree aussi des clients decus.",
    serviceLink: { label: "Notre calcul de rentabilite", href: "/services/panneaux-photovoltaiques/" },
  },
  {
    id: "surdimensionnement-injection",
    number: 9,
    title: "Le surdimensionnement : plus de panneaux, plus de marge pour l'installateur",
    severity: "important",
    service: "panneaux-photovoltaiques",
    body: `<p>La regle d&apos;or de 2026 : chaque kWh que vous consommez vous-meme vaut <strong>~38 centimes</strong>. Chaque kWh que vous injectez dans le reseau vous rapporte entre <strong>1 et 6 centimes</strong>. Le ratio est de 7 a 46 en faveur de l&apos;autoconsommation.</p>
<p>Un systeme surdimensionne produit plus d&apos;electricite que vous n&apos;en consommez. Le surplus est injecte et vendu a perte. Vous payez plus cher a l&apos;achat pour un retour marginal sur chaque kWc excedentaire.</p>
<p><strong>Pourquoi certains installateurs surdimensionnent :</strong></p>
<ul>
<li>Le chiffre d&apos;affaires augmente proportionnellement au nombre de panneaux</li>
<li>La marge en pourcentage reste constante, donc le profit en euros augmente</li>
<li>Le client est impressionne par un grand nombre de panneaux</li>
<li>L&apos;argument &laquo;&nbsp;vous pourrez toujours ajouter une batterie plus tard&nbsp;&raquo; masque le surcout</li>
</ul>
<p><strong>Le bon dimensionnement :</strong></p>
<ul>
<li>Commencer par votre consommation annuelle reelle (facture d&apos;electricite)</li>
<li>Viser un taux d&apos;autoconsommation de 40-60% sans batterie</li>
<li>Chaque kWc installe doit avoir un retour demontrable</li>
<li>Si vous prevoyez une batterie ou un vehicule electrique, integrer ces besoins futurs dans le calcul -- mais seulement s&apos;ils sont concrets et dates</li>
</ul>`,
    checklist: [
      "Partir de votre consommation annuelle, pas de la surface du toit",
      "Demander le taux d'autoconsommation estime",
      "Calculer la part injectee et son revenu reel (1-6 c/kWh)",
      "Verifier que chaque kWc supplementaire a un retour positif",
    ],
    founderInsight:
      "Un bon dimensionnement commence par votre facture d'electricite, pas par la surface de votre toit. Si l'installateur commence par mesurer votre toiture au lieu de lire votre facture, posez-vous la question.",
  },
  {
    id: "prendre-son-temps",
    number: 10,
    title: "Prenez votre temps : la pression commerciale est un signal d'alarme",
    severity: "attention",
    service: "all",
    body: `<p>Les techniques de vente sous pression sont courantes dans le secteur de l&apos;energie en Belgique :</p>
<ul>
<li>&laquo;&nbsp;Cette offre est valable uniquement aujourd&apos;hui&nbsp;&raquo;</li>
<li>&laquo;&nbsp;Notre agenda est complet, on ne peut vous garantir un creneau que si vous signez maintenant&nbsp;&raquo;</li>
<li>&laquo;&nbsp;Les prix des panneaux vont augmenter le mois prochain&nbsp;&raquo;</li>
<li>&laquo;&nbsp;La prime expire bientot&nbsp;&raquo; (cf. chapitre 1 : quelle prime ?)</li>
</ul>
<p>La realite : les panneaux solaires ne sont pas une denree perissable. Les prix sont stables ou en legere baisse. Aucune offre serieuse n&apos;expire en 24 heures. Un installateur qui vous met la pression ne veut pas que vous compariez.</p>
<p><strong>Le bon processus :</strong></p>
<ol>
<li><strong>Demandez 2 a 3 devis</strong> aupres d&apos;installateurs differents</li>
<li><strong>Comparez point par point</strong> (cf. chapitre 3 sur les devis non equivalents)</li>
<li><strong>Prenez le temps de lire</strong> chaque document, chaque clause</li>
<li><strong>Posez les questions de ce guide</strong> a chaque installateur</li>
<li><strong>Verifiez les references</strong> : realisations, avis Google, existence de l&apos;entreprise</li>
<li><strong>Ne signez jamais lors d&apos;une premiere visite</strong> si vous avez le moindre doute</li>
</ol>
<p>Un installateur serieux comprend que vous avez besoin de temps. Il ne vous pressera pas. Il sait que la qualite de son travail parle d&apos;elle-meme.</p>`,
    checklist: [
      "Ne jamais signer le jour meme d'un demarchage",
      "Obtenir au minimum 2-3 devis detailles",
      "Verifier l'existence et les avis de chaque entreprise",
      "Prendre le temps de comparer les devis point par point",
      "Faire relire le contrat par un tiers si necessaire",
    ],
    founderInsight:
      "Chez Be'energies, le diagnostic est gratuit et sans engagement. On ne demande jamais de signature le jour meme. Si vous avez besoin de deux semaines pour comparer, prenez-les. Notre devis sera toujours valable.",
  },
];

// ---------------------------------------------------------------------------
// Data: FAQ
// ---------------------------------------------------------------------------
const pillarFaq: FAQItem[] = [
  {
    question: "Comment savoir si un installateur est serieux ?",
    answer:
      "Verifiez son numero BCE, ses avis Google, son anciennete, et demandez des references de chantiers recents. Un installateur serieux effectue toujours une visite technique avant de proposer un devis. Il ne vous met pas sous pression pour signer rapidement.",
  },
  {
    question: "Est-il obligatoire de faire un controle de conformite apres l'installation ?",
    answer:
      "Oui. Toute nouvelle installation electrique ou modification importante (ajout de panneaux, borne, batterie) doit faire l'objet d'un controle de conformite par un organisme agree. Sans ce controle, votre assurance habitation peut refuser de couvrir un sinistre electrique.",
  },
  {
    question: "Que faire si j'ai deja signe et que je decouvre un probleme ?",
    answer:
      "En Belgique, le droit de retractation est de 14 jours pour les contrats signes a domicile (demarchage). Passe ce delai, vous pouvez faire appel a un expert independant pour evaluer l'installation et negocier les corrections necessaires avec l'installateur.",
  },
  {
    question: "Les panneaux solaires sont-ils encore rentables avec le tarif prosumer ?",
    answer:
      "Oui. Le tarif prosumer en Wallonie (85-99 EUR/kWe/an selon le GRD) est un frais de reseau, pas une taxe punitive. Meme avec ce tarif, le retour sur investissement se situe entre 5 et 7 ans, avec un rendement annualise d'environ 12%. Les installations apres 2024 avec compteur communicant ne paient pas le tarif prosumer.",
  },
  {
    question: "Comment Be'energies evite-t-il ces pieges ?",
    answer:
      "Le fondateur, Benoit Dezso, est un ancien inspecteur en conformite electrique certifie RESCERT. Il a redige des centaines de rapports de non-conformite. Chaque installation Be'energies est concue pour passer le controle du premier coup, avec un calcul de rentabilite base sur les chiffres reels 2026 et une documentation complete.",
  },
  {
    question: "Un devis gratuit engage-t-il a quelque chose ?",
    answer:
      "Non. Le diagnostic energetique Be'energies est gratuit et sans engagement. Vous recevez un calcul de rentabilite detaille. Vous etes libre de comparer avec d'autres offres et de prendre le temps de decider.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const severityLabel = {
  critique: "Risque critique",
  important: "Risque important",
  attention: "Point de vigilance",
};

const severityBadge = {
  critique: "bg-danger text-white",
  important: "bg-warning text-white",
  attention: "bg-electric text-white",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function PiegesPage() {
  return (
    <>
      {/* Schema: Article + FAQ */}
      <JsonLd
        data={articleSchema({
          title: "Les 10 pieges a eviter avant d'installer des panneaux solaires, une borne ou une pompe a chaleur en Belgique",
          description:
            "Guide complet par un ancien inspecteur RESCERT. 10 pieges detailles, checklists pratiques, et les vrais chiffres 2026.",
          url: "/pieges-a-eviter/",
          datePublished: "2026-01-15",
          dateModified: "2026-03-07",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Pieges a eviter" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,158,11,0.08),transparent_60%)]" />
        <div className="container-be max-w-4xl relative section-padding">
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-4">
            Guide par un ancien inspecteur RESCERT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-white leading-tight">
            Les 10 pieges a eviter avant d&apos;installer des panneaux solaires,
            une borne ou une pompe a chaleur
          </h1>
          <p className="mt-6 text-lg md:text-xl text-silver leading-relaxed max-w-3xl">
            Benoit Dezso a passe des annees a inspecter des installations electriques
            en Belgique. Il a redige des centaines de rapports de non-conformite.
            Ce guide rassemble les erreurs les plus courantes, les plus couteuses,
            et les plus evitables qu&apos;il a constatees sur le terrain.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center bg-amber hover:bg-amber-dark text-midnight font-semibold px-6 py-3.5 rounded-lg transition-colors"
            >
              Diagnostic gratuit
            </Link>
            <Link
              href="/guide-pieges-a-eviter/"
              className="inline-flex items-center border border-silver/30 hover:border-silver/60 text-silver font-medium px-6 py-3.5 rounded-lg transition-colors"
            >
              Telecharger le guide PDF
            </Link>
          </div>
        </div>
      </section>

      {/* Who wrote this */}
      <section className="section-padding">
        <div className="container-be max-w-3xl">
          <FounderCredibility variant="compact" />
          <div className="mt-8 prose prose-lg max-w-none text-charcoal">
            <p>
              Ce guide n&apos;est pas une liste de peurs. C&apos;est un outil de decision.
              Si vous lisez ces 10 chapitres et posez les questions associees a votre
              installateur, vous eliminerez 90% des risques d&apos;une mauvaise installation.
            </p>
            <p>
              Et si c&apos;est nous que vous interrogez, on repondra avec la meme transparence.
              Parce qu&apos;un client bien informe est un client qui fait un bon choix -- et
              qui recommande ensuite.
            </p>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
            Sommaire
          </h2>
          <nav>
            <ol className="space-y-2">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <span className="shrink-0 w-7 h-7 flex items-center justify-center bg-midnight text-white text-xs font-bold rounded-full mt-0.5">
                      {ch.number}
                    </span>
                    <span className="text-charcoal group-hover:text-midnight transition-colors">
                      {ch.title}
                    </span>
                    <span className={`ml-auto shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${severityBadge[ch.severity]}`}>
                      {severityLabel[ch.severity]}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((ch, i) => (
        <section
          key={ch.id}
          id={ch.id}
          className={`section-padding ${i % 2 === 0 ? "" : "bg-ivory"}`}
        >
          <div className="container-be max-w-3xl">
            {/* Chapter header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-midnight text-white font-bold rounded-full">
                {ch.number}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${severityBadge[ch.severity]}`}>
                {severityLabel[ch.severity]}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6 leading-tight">
              {ch.title}
            </h2>

            {/* Body content */}
            <div
              className="prose prose-lg max-w-none text-charcoal prose-headings:text-midnight prose-headings:font-[family-name:var(--font-heading)] prose-strong:text-midnight"
              dangerouslySetInnerHTML={{ __html: ch.body }}
            />

            {/* Checklist */}
            {ch.checklist && (
              <div className="mt-8 bg-white border border-cloud rounded-2xl p-6">
                <h3 className="flex items-center gap-2 font-semibold text-midnight text-sm uppercase tracking-wide mb-4">
                  <CheckIcon size={16} className="text-success" />
                  Checklist : ce que vous devez verifier
                </h3>
                <ul className="space-y-2">
                  {ch.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-charcoal">
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center border-2 border-cloud rounded mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Founder insight */}
            {ch.founderInsight && (
              <blockquote className="mt-6 border-l-4 border-amber pl-5 py-2">
                <p className="italic text-steel leading-relaxed">
                  &ldquo;{ch.founderInsight}&rdquo;
                </p>
                <cite className="not-italic text-sm text-steel/70 mt-1 block">
                  — Benoit Dezso, ancien inspecteur RESCERT
                </cite>
              </blockquote>
            )}

            {/* Service link */}
            {ch.serviceLink && (
              <div className="mt-6">
                <Link
                  href={ch.serviceLink.href}
                  className="inline-flex items-center gap-1 text-amber hover:text-amber-dark font-medium text-sm transition-colors"
                >
                  {ch.serviceLink.label} →
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* 10 questions */}
      <section className="section-padding bg-midnight">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-center mb-3">
            Les 10 questions a poser a votre installateur
          </h2>
          <p className="text-silver text-center mb-10 max-w-xl mx-auto">
            Imprimez cette liste. Posez chaque question. Si l&apos;installateur ne peut
            pas y repondre clairement, c&apos;est un signal.
          </p>
          <ol className="space-y-3">
            {[
              "Votre calcul de rentabilite inclut-il le tarif prosumer et le tarif d'injection reel de mon fournisseur ?",
              "Quel taux d'autoconsommation estimez-vous pour mon profil ? Sur quelle base ?",
              "Allez-vous effectuer une visite technique sur site avant de rediger le devis ?",
              "Quelles sont les marques exactes et modeles des panneaux, de l'onduleur et du systeme de fixation ?",
              "Quelle est la garantie sur la main-d'oeuvre et le deplacement, distincte de la garantie produit ?",
              "Depuis combien d'annees votre entreprise existe-t-elle ? Puis-je voir votre numero BCE ?",
              "L'onduleur est-il dimensionne pour la puissance crete totale installee ?",
              "Le controle de conformite est-il inclus dans le devis ? Qui le realise ?",
              "Quels documents vais-je recevoir apres l'installation ? (schema unifilaire, rapport de conformite, fiches techniques)",
              "Pouvez-vous me montrer 3 realisations recentes avec les coordonnees du client pour reference ?",
            ].map((q, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber text-midnight font-semibold text-sm shrink-0">
                  {i + 1}
                </span>
                <span className="text-silver">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lead magnet hook */}
      <section className="section-padding bg-amber/10">
        <div className="container-be max-w-3xl text-center">
          <AlertTriangleIcon size={32} className="text-amber mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-4">
            Ce guide existe aussi en PDF
          </h2>
          <p className="text-charcoal max-w-xl mx-auto mb-6">
            Les 10 pieges + la checklist des 10 questions en un document imprimable.
            Gardez-le sous la main quand vous comparez vos devis.
          </p>
          <Link
            href="/guide-pieges-a-eviter/"
            className="inline-flex items-center bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Telecharger le guide gratuit (PDF)
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={pillarFaq}
        title="Questions frequentes sur les pieges a eviter"
      />

      {/* Internal links */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
            Allez plus loin
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Panneaux photovoltaiques", description: "Notre approche, les vrais chiffres, le calcul de rentabilite", href: "/services/panneaux-photovoltaiques/" },
              { title: "Batteries domestiques", description: "Quand c'est rentable et quand ca ne l'est pas", href: "/services/batteries-domestiques/" },
              { title: "Bornes de recharge", description: "Integration solaire, conformite, dimensionnement", href: "/services/bornes-de-recharge/" },
              { title: "Conformite electrique", description: "Par un ancien inspecteur : il connait le rapport avant qu'il n'existe", href: "/services/conformite-electrique/" },
              { title: "Pompes a chaleur", description: "Dimensionnement, integration, tarif IMPACT", href: "/services/pompes-a-chaleur/" },
              { title: "Nos realisations", description: "Les preuves sur le terrain", href: "/realisations/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-cloud rounded-xl p-5 hover:border-amber/40 transition-colors group"
              >
                <h3 className="font-semibold text-midnight group-hover:text-amber transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-steel mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTADiagnostic
        title="Benoit peut analyser votre devis gratuitement"
        description="Vous avez recu un devis d'un autre installateur ? Envoyez-le nous. Benoit l'analyse et vous donne son avis honnete, sans engagement. Pas de pression. Juste un regard d'ancien inspecteur."
        ctaLabel="Envoyer mon devis pour analyse"
        variant="dark"
      />
    </>
  );
}
