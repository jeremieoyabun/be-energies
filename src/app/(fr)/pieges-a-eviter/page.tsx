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
  title: "Pièges à éviter avant d'installer | Guide par un ancien inspecteur",
  description:
    "10 pièges à éviter avant d'installer des panneaux solaires, une batterie, une borne ou une pompe à chaleur. Guide complet par Benoît Dezso, ancien inspecteur, certifié RESCERT. Checklists incluses.",
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
    body: `<p>En 2026, il n&apos;existe plus de prime régionale pour les panneaux photovoltaïques résidentiels en Wallonie. Les anciennes primes Qualiwatt ont disparu, et aucun dispositif de remplacement équivalent n&apos;a été mis en place.</p>
<p>Pourtant, certains démarcheurs continuent d&apos;évoquer des &laquo;&nbsp;primes régionales&nbsp;&raquo;, des &laquo;&nbsp;aides communales&nbsp;&raquo; ou des &laquo;&nbsp;incentives fiscaux&nbsp;&raquo; pour justifier un prix gonflé. La technique est simple : on présente un prix brut élevé, on annonce une &laquo;&nbsp;prime&nbsp;&raquo; qui le réduit, et le client paie au final un tarif normal -- en croyant avoir obtenu une réduction.</p>
<p><strong>Ce qui existe réellement en mars 2026 :</strong></p>
<ul>
<li>TVA à 6% (au lieu de 21%) pour les habitations de plus de 10 ans -- ce n&apos;est pas une prime, c&apos;est un taux réduit standard</li>
<li>Certificats verts à Bruxelles (pas en Wallonie ni en Flandre)</li>
<li>Déduction fiscale pour les entreprises (pas les particuliers)</li>
<li>Aucune prime régionale wallonne pour le photovoltaïque résidentiel</li>
</ul>
<p>Si un installateur mentionne une &laquo;&nbsp;prime&nbsp;&raquo; spécifique, demandez-lui le nom exact du dispositif, l&apos;organisme payeur, et le lien vers le texte officiel. S&apos;il ne peut pas vous les fournir, c&apos;est un signal d&apos;alerte.</p>`,
    checklist: [
      "Demander le nom exact de la prime et l'organisme payeur",
      "Vérifier sur le site de la Région wallonne si le dispositif existe",
      "Comparer le prix final (après soi-disant prime) avec d'autres devis",
      "Ne jamais signer sur base d'une prime non vérifiée",
    ],
    founderInsight:
      "J'ai vu des devis où la 'prime' annoncée correspondait exactement à la marge cachée. Le client payait le prix du marché en croyant bénéficier d'une aide.",
    serviceLink: { label: "Installation photovoltaïque", href: "/services/panneaux-photovoltaiques/" },
  },
  {
    id: "fausses-garanties",
    number: 2,
    title: "Les fausses garanties : 25 ans sur le papier, 0 ans dans la réalité",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>Les panneaux solaires bénéficient typiquement de deux types de garantie :</p>
<ul>
<li><strong>Garantie produit (fabricant) :</strong> couvre les défauts de fabrication. Généralement 12 à 25 ans selon la marque.</li>
<li><strong>Garantie de rendement :</strong> assure que le panneau conserve un certain pourcentage de sa puissance nominale (typiquement 80% après 25 ans).</li>
</ul>
<p>Le problème n&apos;est pas la garantie du panneau, mais la garantie de l&apos;installation. Voici ce que beaucoup d&apos;installateurs ne disent pas :</p>
<ul>
<li>La garantie fabricant ne couvre pas la main-d&apos;œuvre de remplacement. Si un panneau est défectueux après 5 ans, le fabricant vous envoie un nouveau panneau -- mais qui paie le déplacement, la dépose et la repose ?</li>
<li>Si l&apos;installateur fait faillite (et dans un marché volatile, ça arrive), la garantie d&apos;installation disparaît avec l&apos;entreprise</li>
<li>La garantie de rendement est quasi impossible à faire valoir : il faut prouver que la baisse de rendement est due au panneau et non à l&apos;ombrage, la salissure, ou un défaut d&apos;onduleur</li>
</ul>
<p><strong>Les vraies questions à poser :</strong></p>
<ul>
<li>Quelle est la garantie sur la main-d&apos;œuvre et le déplacement ?</li>
<li>Depuis combien d&apos;années l&apos;entreprise existe-t-elle ?</li>
<li>Que se passe-t-il si l&apos;installateur cesse son activité ?</li>
<li>L&apos;onduleur a-t-il la même durée de garantie que les panneaux ? (souvent non : 5-12 ans vs 25 ans)</li>
</ul>`,
    checklist: [
      "Vérifier la garantie main-d'œuvre séparément de la garantie produit",
      "Demander l'ancienneté de l'entreprise et son numéro BCE",
      "Vérifier la durée de garantie de l'onduleur (souvent plus courte)",
      "Demander un document écrit détaillant exactement ce qui est couvert",
    ],
    founderInsight:
      "Chez Be'énergies, on ne promet pas 25 ans de garantie pour disparaître dans 3 ans. On détaille par écrit ce qui est garanti, par qui, et pendant combien de temps. Et on est là depuis le début.",
  },
  {
    id: "devis-non-equivalents",
    number: 3,
    title: "Comparer des devis sur du matériel non équivalent",
    severity: "important",
    service: "panneaux-photovoltaiques",
    body: `<p>Trois devis à 9 500, 11 000 et 12 500 EUR pour une installation de 5 kWc. Le réflexe est de prendre le moins cher. Mais les trois devis ne proposent pas la même chose.</p>
<p><strong>Ce qui varie entre deux devis &laquo;&nbsp;équivalents&nbsp;&raquo; :</strong></p>
<ul>
<li><strong>Les panneaux :</strong> un panneau N-type monocristallin à haut rendement (21-22%) n&apos;a pas la même performance qu&apos;un panneau polycristallin d&apos;entrée de gamme (17-18%). Sur 25 ans, l&apos;écart de production peut atteindre 15-20%.</li>
<li><strong>L&apos;onduleur :</strong> un micro-onduleur SolarEdge ou Enphase permet un suivi panneau par panneau et limite l&apos;impact de l&apos;ombrage partiel. Un onduleur string basique fait chuter la production de toute la chaîne si un seul panneau est ombragé.</li>
<li><strong>Le système de fixation :</strong> les systèmes de montage low-cost utilisent des crochets non certifiés ou des rails fins qui se déforment sous le vent.</li>
<li><strong>Le câblage :</strong> un câblage AC sous-dimensionné ou mal protégé ne se voit pas à l&apos;œil nu mais crée des risques de surchauffe et échoue au contrôle.</li>
<li><strong>La visite technique :</strong> le devis le moins cher n&apos;inclut souvent pas de visite préalable. Le dimensionnement est fait sur base de Google Maps.</li>
</ul>
<p>Pour comparer des devis de manière équitable, il faut comparer point par point :</p>`,
    checklist: [
      "Marque, modèle et puissance de chaque panneau (pas juste 'panneau 400W')",
      "Type et marque de l'onduleur (string, optimisé ou micro-onduleur)",
      "Système de fixation et certification",
      "Section de câble et protection électrique incluses",
      "Visite technique préalable incluse ou non",
      "Garanties détaillées : produit, rendement, main-d'œuvre",
      "Mise en service et vérification de conformité incluses",
    ],
    founderInsight:
      "Le devis le moins cher est rarement le moins cher à 25 ans. Je vois régulièrement des installations à 8 000 EUR qui nécessitent 2 000 EUR de corrections après le contrôle de conformité.",
    serviceLink: { label: "Notre approche photovoltaïque", href: "/services/panneaux-photovoltaiques/" },
  },
  {
    id: "surchauffe-onduleur",
    number: 4,
    title: "Onduleur surchauffe et risque d'incendie : le danger invisible",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>L&apos;onduleur convertit le courant continu produit par les panneaux en courant alternatif utilisable. C&apos;est le composant le plus sollicité de l&apos;installation, et c&apos;est aussi celui qui présente le risque d&apos;incendie le plus élevé quand il est mal installé.</p>
<p><strong>Les causes de surchauffe les plus courantes :</strong></p>
<ul>
<li><strong>Emplacement inadapté :</strong> un onduleur installé dans un grenier non ventilé, directement sous la toiture ou dans un local technique fermé atteint facilement 55-65 C en été. La plupart des onduleurs réduisent leur puissance (derating) au-dessus de 45 C et s&apos;arrêtent au-dessus de 60 C. Vous perdez de la production sans le savoir.</li>
<li><strong>Sous-dimensionnement :</strong> un onduleur de 4 kW connecté à 5,5 kWc de panneaux fonctionne en permanence à sa puissance maximale. La surchauffe est systématique, la durée de vie chute de 12-15 ans à 5-7 ans.</li>
<li><strong>Ventilation bloquée :</strong> les onduleurs ont besoin d&apos;un espace libre autour d&apos;eux (minimum 20 cm sur chaque face). Les installations où l&apos;onduleur est coincé entre deux murs ou derrière un meuble ne respectent pas cette exigence.</li>
<li><strong>Connexions DC défaillantes :</strong> des connecteurs MC4 mal sertis ou non compatibles (mélanges de marques) créent des points chauds locaux qui peuvent atteindre 200-300 C. C&apos;est la cause la plus fréquente des incendies photovoltaïques documentés.</li>
</ul>
<p><strong>Ce qu&apos;un ancien inspecteur vérifie :</strong> l&apos;emplacement de l&apos;onduleur, la ventilation, le dimensionnement par rapport à la puissance crête, la qualité des connexions DC, et la protection contre les surtensions (parafoudre DC si nécessaire).</p>`,
    checklist: [
      "Vérifier que l'onduleur est installé dans un endroit ventilé",
      "S'assurer d'un espace libre minimum de 20 cm autour de l'onduleur",
      "Vérifier que la puissance de l'onduleur est adaptée à la puissance crête",
      "Demander si les connecteurs MC4 sont de même marque (pas de mélange)",
      "Vérifier la présence d'un parafoudre DC côté panneaux",
    ],
    founderInsight:
      "Les incendies photovoltaïques sont rares mais réels. Dans mes années d'inspection, j'ai vu des connecteurs MC4 noircis par la chaleur, des onduleurs installés dans des combles à 60 C, et des câbles DC qui passaient à travers l'isolation sans protection. Ce sont des erreurs évitables.",
  },
  {
    id: "systeme-ac-sous-dimensionne",
    number: 5,
    title: "Le côté AC sous-dimensionné : le coupable oublié",
    severity: "important",
    service: "all",
    body: `<p>Tout le monde parle des panneaux et de l&apos;onduleur. Personne ne parle du côté AC -- la partie courant alternatif entre l&apos;onduleur et le tableau électrique. C&apos;est pourtant là où se concentre une part importante des non-conformités.</p>
<p><strong>Les erreurs les plus fréquentes côté AC :</strong></p>
<ul>
<li><strong>Section de câble insuffisante :</strong> un câble 2,5 mm pour un onduleur de 5 kW sur une distance de 15 mètres. Le câble chauffe, la résistance augmente, vous perdez de l&apos;énergie et le risque de surchauffe est réel.</li>
<li><strong>Protection différentielle inadaptée :</strong> certains onduleurs nécessitent un différentiel de type A (sensible au courant continu résiduel), pas un type AC standard. Utiliser le mauvais type signifie que la protection ne déclenchera pas en cas de défaut.</li>
<li><strong>Disjoncteur mal calibré :</strong> un disjoncteur de 20A sur un circuit qui débite régulièrement 18A fonctionne en permanence à 90% de sa capacité. Ce n&apos;est pas dangereux à court terme, mais ça réduit sa durée de vie et sa fiabilité.</li>
<li><strong>Absence de coupure générale :</strong> en cas d&apos;urgence (incendie, intervention des pompiers), il doit être possible de couper l&apos;intégralité de l&apos;installation photovoltaïque depuis un point accessible. Si ce dispositif n&apos;existe pas, c&apos;est une non-conformité.</li>
</ul>
<p>Ces erreurs sont invisibles pour un propriétaire non technicien. Elles ne se voient pas. Elles ne font pas de bruit. Et elles ne se révèlent qu&apos;au contrôle de conformité -- ou pire, lors d&apos;un incident.</p>`,
    checklist: [
      "Vérifier la section du câble AC entre l'onduleur et le tableau",
      "Demander le type de différentiel prévu (type A ou type B)",
      "S'assurer qu'un dispositif de coupure générale est prévu",
      "Vérifier que le disjoncteur est calibré pour la puissance de l'onduleur",
    ],
    founderInsight:
      "Le côté AC est mon domaine. C'est exactement ce que j'inspectais pendant des années. La majorité des rapports de non-conformité que j'ai rédigés concernaient le côté AC, pas les panneaux eux-mêmes.",
    serviceLink: { label: "Conformité électrique", href: "/services/conformite-electrique/" },
  },
  {
    id: "mauvais-dimensionnement-chaudiere",
    number: 6,
    title: "Pompe à chaleur : le mauvais dimensionnement qui coûte une fortune",
    severity: "critique",
    service: "pompes-a-chaleur",
    body: `<p>Une pompe à chaleur mal dimensionnée est l&apos;un des investissements les plus décevants qu&apos;un propriétaire puisse faire. Contrairement aux panneaux solaires, où un léger surdimensionnement a un impact limité, une pompe à chaleur surdimensionnée ou sous-dimensionnée crée des problèmes concrets et immédiats.</p>
<p><strong>Pompe à chaleur sous-dimensionnée :</strong></p>
<ul>
<li>L&apos;appoint électrique (résistance) fonctionne en permanence les jours froids</li>
<li>La facture d&apos;électricité explose au lieu de diminuer</li>
<li>Le confort thermique n&apos;est pas atteint</li>
<li>Le client pense que &laquo;&nbsp;les pompes à chaleur, ça ne marche pas en Belgique&nbsp;&raquo;</li>
</ul>
<p><strong>Pompe à chaleur surdimensionnée :</strong></p>
<ul>
<li>Le compresseur effectue des cycles courts (on/off répétitifs)</li>
<li>Le COP (coefficient de performance) chute : au lieu de 3-4, il tombe à 2-2,5</li>
<li>La durée de vie du compresseur diminue significativement</li>
<li>L&apos;investissement initial est plus élevé sans gain proportionnel</li>
</ul>
<p><strong>Comment dimensionner correctement :</strong></p>
<p>Le dimensionnement d&apos;une pompe à chaleur ne se fait pas sur la surface habitable seule. Il nécessite :</p>
<ul>
<li>Un calcul de déperditions thermiques (isolation des murs, toiture, sol, fenêtres)</li>
<li>L&apos;analyse du système de distribution existant (radiateurs, plancher chauffant, température de régime)</li>
<li>La prise en compte du climat local (degré-jours de chauffage)</li>
<li>L&apos;intégration avec l&apos;installation photovoltaïque existante pour dimensionner la production en conséquence</li>
</ul>`,
    checklist: [
      "Exiger un calcul de déperditions thermiques (pas juste la surface)",
      "Vérifier que le système de distribution existant est compatible",
      "Demander le COP nominal ET le COP saisonnier (SCOP)",
      "Vérifier la puissance de l'appoint électrique et quand il s'active",
      "S'assurer que le dimensionnement inclut les besoins en eau chaude sanitaire",
    ],
    founderInsight:
      "J'ai inspecté des maisons où la pompe à chaleur tournait avec l'appoint électrique en permanence. Le propriétaire payait plus qu'avec sa chaudière au gaz, et l'installateur avait quitté la scène. Un calcul thermique sérieux avant l'installation aurait évité tout ça.",
    serviceLink: { label: "Pompe à chaleur", href: "/services/pompes-a-chaleur/" },
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
<li><strong>Schéma unifilaire :</strong> le plan complet de votre installation électrique, mis à jour avec les nouveaux équipements (panneaux, onduleur, batterie, borne). Ce schéma est exigé lors de tout contrôle de conformité.</li>
<li><strong>Schéma de position :</strong> le plan physique montrant l&apos;emplacement de chaque composant (tableau, prises, interrupteurs, onduleur, etc.)</li>
<li><strong>Rapport de conformité :</strong> le rapport de l&apos;organisme agréé (Vinçotte, AIB, ACA, BTV, etc.) attestant que l&apos;installation est conforme.</li>
<li><strong>Déclaration de conformité de l&apos;installateur :</strong> le document où l&apos;installateur atteste que les travaux respectent les normes en vigueur.</li>
</ul>
<p><strong>Documents fortement recommandés :</strong></p>
<ul>
<li>Fiche technique des panneaux (datasheet avec la puissance nominale, les courbes I-V, les certifications)</li>
<li>Fiche technique de l&apos;onduleur (rendement, plage de tension DC, certifications)</li>
<li>Garanties écrites (produit, rendement, main-d&apos;œuvre)</li>
<li>Photos de l&apos;installation avant fermeture (chemins de câbles, boîtier de jonction, raccordement au tableau)</li>
<li>Paramètres de configuration de l&apos;onduleur (limitation d&apos;injection si applicable, paramètres réseau)</li>
</ul>
<p>Sans schéma unifilaire à jour, votre installation sera refusée au contrôle. Sans rapport de conformité, votre assurance peut invalider une couverture. Sans fiches techniques, vous ne pouvez pas vérifier ce qui a été installé.</p>`,
    checklist: [
      "Schéma unifilaire mis à jour avec tous les nouveaux équipements",
      "Schéma de position conforme à la réalité",
      "Rapport de conformité de l'organisme agréé",
      "Déclaration de conformité signée par l'installateur",
      "Fiches techniques des panneaux et de l'onduleur",
      "Document de garantie détaillé",
      "Photos de l'installation avant fermeture",
    ],
    founderInsight:
      "Pendant mes années d'inspection, le problème le plus fréquent n'était pas un défaut électrique. C'était un schéma unifilaire absent ou non à jour. Pas de schéma = rapport de non-conformité automatique, quelle que soit la qualité de l'installation.",
    serviceLink: { label: "Conformité électrique", href: "/services/conformite-electrique/" },
  },
  {
    id: "retour-investissement-gonfle",
    number: 8,
    title: "Le retour sur investissement en 2 ans : mathématiquement impossible",
    severity: "critique",
    service: "panneaux-photovoltaiques",
    body: `<p>En 2026, avec un coût d&apos;installation moyen de 1 800 à 2 200 EUR/kWc (TVA 6% incluse), et des économies annuelles réalistes de 250 à 350 EUR/kWc, le retour sur investissement se situe entre <strong>5 et 7 ans</strong>.</p>
<p>Un installateur qui promet un retour en 2 ans utilise nécessairement des hypothèses fausses :</p>
<ul>
<li><strong>Prix d&apos;électricité gonflé :</strong> projection à 50-60 c/kWh au lieu des ~38 c/kWh actuels</li>
<li><strong>Taux d&apos;autoconsommation irréel :</strong> 90% alors que la moyenne belge sans batterie est de 30-40%</li>
<li><strong>Tarif d&apos;injection gonflé :</strong> utilisation de 15-20 c/kWh alors que la réalité est de 1 à 6 c/kWh</li>
<li><strong>Production surestimée :</strong> calcul sur la production théorique maximale sans tenir compte de l&apos;orientation, de l&apos;inclinaison et de l&apos;ombrage</li>
<li><strong>Tarif prosumer omis :</strong> pas de mention des 85-99 EUR/kWe/an pour les installations avant 2024 en Wallonie</li>
</ul>
<p><strong>Les vrais chiffres 2026 :</strong></p>
<ul>
<li>Coût moyen installé (TVA 6%) : ~9 000 - 12 000 EUR pour 4 à 6 kWc</li>
<li>Économies annuelles nettes : ~1 200 - 1 800 EUR (autoconsommation + injection)</li>
<li>Retour réel : <strong>5 à 7 ans</strong></li>
<li>Rendement annualisé : <strong>~12%</strong></li>
<li>Gain total sur 25 ans : <strong>20 000 - 35 000 EUR</strong></li>
</ul>
<p>Un retour en 5-7 ans avec un rendement de 12% est un excellent investissement. Pas besoin de mentir pour le vendre.</p>`,
    checklist: [
      "Demander le détail du calcul de rentabilité ligne par ligne",
      "Vérifier le prix d'électricité utilisé (doit être ~38 c/kWh)",
      "Vérifier le taux d'autoconsommation estimé (30-50% sans batterie est réaliste)",
      "Vérifier le tarif d'injection utilisé (1-6 c/kWh, pas plus)",
      "Vérifier si le tarif prosumer est inclus dans le calcul",
    ],
    founderInsight:
      "Un retour en 5-7 ans, c'est un rendement d'environ 12% par an. Aucun placement bancaire ne fait mieux. Pourquoi certains installateurs ressentent-ils le besoin de promettre 2 ans ? Parce que ça signe des contrats. Mais ça crée aussi des clients déçus.",
    serviceLink: { label: "Notre calcul de rentabilité", href: "/services/panneaux-photovoltaiques/" },
  },
  {
    id: "surdimensionnement-injection",
    number: 9,
    title: "Le surdimensionnement : plus de panneaux, plus de marge pour l'installateur",
    severity: "important",
    service: "panneaux-photovoltaiques",
    body: `<p>La règle d&apos;or de 2026 : chaque kWh que vous consommez vous-même vaut <strong>~38 centimes</strong>. Chaque kWh que vous injectez dans le réseau vous rapporte entre <strong>1 et 6 centimes</strong>. Le ratio est de 7 à 46 en faveur de l&apos;autoconsommation.</p>
<p>Un système surdimensionné produit plus d&apos;électricité que vous n&apos;en consommez. Le surplus est injecté et vendu à perte. Vous payez plus cher à l&apos;achat pour un retour marginal sur chaque kWc excédentaire.</p>
<p><strong>Pourquoi certains installateurs surdimensionnent :</strong></p>
<ul>
<li>Le chiffre d&apos;affaires augmente proportionnellement au nombre de panneaux</li>
<li>La marge en pourcentage reste constante, donc le profit en euros augmente</li>
<li>Le client est impressionné par un grand nombre de panneaux</li>
<li>L&apos;argument &laquo;&nbsp;vous pourrez toujours ajouter une batterie plus tard&nbsp;&raquo; masque le surcout</li>
</ul>
<p><strong>Le bon dimensionnement :</strong></p>
<ul>
<li>Commencer par votre consommation annuelle réelle (facture d&apos;électricité)</li>
<li>Viser un taux d&apos;autoconsommation de 40-60% sans batterie</li>
<li>Chaque kWc installé doit avoir un retour démontrable</li>
<li>Si vous prévoyez une batterie ou un véhicule électrique, intégrer ces besoins futurs dans le calcul -- mais seulement s&apos;ils sont concrets et datés</li>
</ul>`,
    checklist: [
      "Partir de votre consommation annuelle, pas de la surface du toit",
      "Demander le taux d'autoconsommation estimé",
      "Calculer la part injectée et son revenu réel (1-6 c/kWh)",
      "Vérifier que chaque kWc supplémentaire a un retour positif",
    ],
    founderInsight:
      "Un bon dimensionnement commence par votre facture d'électricité, pas par la surface de votre toit. Si l'installateur commence par mesurer votre toiture au lieu de lire votre facture, posez-vous la question.",
  },
  {
    id: "prendre-son-temps",
    number: 10,
    title: "Prenez votre temps : la pression commerciale est un signal d'alarme",
    severity: "attention",
    service: "all",
    body: `<p>Les techniques de vente sous pression sont courantes dans le secteur de l&apos;énergie en Belgique :</p>
<ul>
<li>&laquo;&nbsp;Cette offre est valable uniquement aujourd&apos;hui&nbsp;&raquo;</li>
<li>&laquo;&nbsp;Notre agenda est complet, on ne peut vous garantir un créneau que si vous signez maintenant&nbsp;&raquo;</li>
<li>&laquo;&nbsp;Les prix des panneaux vont augmenter le mois prochain&nbsp;&raquo;</li>
<li>&laquo;&nbsp;La prime expire bientôt&nbsp;&raquo; (cf. chapitre 1 : quelle prime ?)</li>
</ul>
<p>La réalité : les panneaux solaires ne sont pas une denrée périssable. Les prix sont stables ou en légère baisse. Aucune offre sérieuse n&apos;expire en 24 heures. Un installateur qui vous met la pression ne veut pas que vous compariez.</p>
<p><strong>Le bon processus :</strong></p>
<ol>
<li><strong>Demandez 2 à 3 devis</strong> auprès d&apos;installateurs différents</li>
<li><strong>Comparez point par point</strong> (cf. chapitre 3 sur les devis non équivalents)</li>
<li><strong>Prenez le temps de lire</strong> chaque document, chaque clause</li>
<li><strong>Posez les questions de ce guide</strong> à chaque installateur</li>
<li><strong>Vérifiez les références</strong> : réalisations, avis Google, existence de l&apos;entreprise</li>
<li><strong>Ne signez jamais lors d&apos;une première visite</strong> si vous avez le moindre doute</li>
</ol>
<p>Un installateur sérieux comprend que vous avez besoin de temps. Il ne vous pressera pas. Il sait que la qualité de son travail parle d&apos;elle-même.</p>`,
    checklist: [
      "Ne jamais signer le jour même d'un démarchage",
      "Obtenir au minimum 2-3 devis détaillés",
      "Vérifier l'existence et les avis de chaque entreprise",
      "Prendre le temps de comparer les devis point par point",
      "Faire relire le contrat par un tiers si nécessaire",
    ],
    founderInsight:
      "Chez Be'energies, le diagnostic est gratuit et sans engagement. On ne demande jamais de signature le jour même. Si vous avez besoin de deux semaines pour comparer, prenez-les. Notre devis sera toujours valable.",
  },
];

// ---------------------------------------------------------------------------
// Data: FAQ
// ---------------------------------------------------------------------------
const pillarFaq: FAQItem[] = [
  {
    question: "Comment savoir si un installateur est sérieux ?",
    answer:
      "Vérifiez son numéro BCE, ses avis Google, son ancienneté, et demandez des références de chantiers récents. Un installateur sérieux effectue toujours une visite technique avant de proposer un devis. Il ne vous met pas sous pression pour signer rapidement.",
  },
  {
    question: "Est-il obligatoire de faire un contrôle de conformité après l'installation ?",
    answer:
      "Oui. Toute nouvelle installation électrique ou modification importante (ajout de panneaux, borne, batterie) doit faire l'objet d'un contrôle de conformité par un organisme agréé. Sans ce contrôle, votre assurance habitation peut refuser de couvrir un sinistre électrique.",
  },
  {
    question: "Que faire si j'ai déjà signé et que je découvre un problème ?",
    answer:
      "En Belgique, le droit de rétractation est de 14 jours pour les contrats signés à domicile (démarchage). Passé ce délai, vous pouvez faire appel à un expert indépendant pour évaluer l'installation et négocier les corrections nécessaires avec l'installateur.",
  },
  {
    question: "Les panneaux solaires sont-ils encore rentables avec le tarif prosumer ?",
    answer:
      "Oui. Le tarif prosumer en Wallonie (85-99 EUR/kWe/an selon le GRD) est un frais de réseau, pas une taxe punitive. Même avec ce tarif, le retour sur investissement se situe entre 5 et 7 ans, avec un rendement annualisé d'environ 12%. Les installations après 2024 avec compteur communicant ne paient pas le tarif prosumer.",
  },
  {
    question: "Comment Be'energies évite-t-il ces pièges ?",
    answer:
      "Le fondateur, Benoît Dezso, est un ancien inspecteur en installation électrique, certifié RESCERT. Il a rédigé des centaines de rapports de non-conformité. Chaque installation Be'energies est conçue pour passer le contrôle du premier coup, avec un calcul de rentabilité basé sur les chiffres réels 2026 et une documentation complète.",
  },
  {
    question: "Un devis gratuit engage-t-il à quelque chose ?",
    answer:
      "Non. Le diagnostic énergétique Be'energies est gratuit et sans engagement. Vous recevez un calcul de rentabilité détaillé. Vous êtes libre de comparer avec d'autres offres et de prendre le temps de décider.",
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
          title: "Les 10 pièges à éviter avant d'installer des panneaux solaires, une borne ou une pompe à chaleur en Belgique",
          description:
            "Guide complet par un ancien inspecteur, certifié RESCERT. 10 pièges détaillés, checklists pratiques, et les vrais chiffres 2026.",
          url: "/pieges-a-eviter/",
          datePublished: "2026-01-15",
          dateModified: "2026-03-07",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Pièges à éviter" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,158,11,0.08),transparent_60%)]" />
        <div className="container-be max-w-4xl relative section-padding">
          <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-4">
            Guide par un ancien inspecteur, certifié RESCERT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-white leading-tight">
            Les 10 pièges à éviter avant d&apos;installer des panneaux solaires,
            une borne ou une pompe à chaleur
          </h1>
          <p className="mt-6 text-lg md:text-xl text-silver leading-relaxed max-w-3xl">
            Benoît Dezso a passé des années à inspecter des installations électriques
            en Belgique. Il a rédigé des centaines de rapports de non-conformité.
            Ce guide rassemble les erreurs les plus courantes, les plus coûteuses,
            et les plus évitables qu&apos;il a constatées sur le terrain.
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
              Télécharger le guide PDF
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
              Ce guide n&apos;est pas une liste de peurs. C&apos;est un outil de décision.
              Si vous lisez ces 10 chapitres et posez les questions associées à votre
              installateur, vous éliminerez 90% des risques d&apos;une mauvaise installation.
            </p>
            <p>
              Et si c&apos;est nous que vous interrogez, on répondra avec la même transparence.
              Parce qu&apos;un client bien informé est un client qui fait un bon choix -- et
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
                  Checklist : ce que vous devez vérifier
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
                  — Benoît Dezso, ancien inspecteur, certifié RESCERT
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
            Les 10 questions à poser à votre installateur
          </h2>
          <p className="text-silver text-center mb-10 max-w-xl mx-auto">
            Imprimez cette liste. Posez chaque question. Si l&apos;installateur ne peut
            pas y répondre clairement, c&apos;est un signal.
          </p>
          <ol className="space-y-3">
            {[
              "Votre calcul de rentabilité inclut-il le tarif prosumer et le tarif d'injection réel de mon fournisseur ?",
              "Quel taux d'autoconsommation estimez-vous pour mon profil ? Sur quelle base ?",
              "Allez-vous effectuer une visite technique sur site avant de rédiger le devis ?",
              "Quelles sont les marques exactes et modèles des panneaux, de l'onduleur et du système de fixation ?",
              "Quelle est la garantie sur la main-d'œuvre et le déplacement, distincte de la garantie produit ?",
              "Depuis combien d'années votre entreprise existe-t-elle ? Puis-je voir votre numéro BCE ?",
              "L'onduleur est-il dimensionné pour la puissance crête totale installée ?",
              "Le contrôle de conformité est-il inclus dans le devis ? Qui le réalise ?",
              "Quels documents vais-je recevoir après l'installation ? (schéma unifilaire, rapport de conformité, fiches techniques)",
              "Pouvez-vous me montrer 3 réalisations récentes avec les coordonnées du client pour référence ?",
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
            Les 10 pièges + la checklist des 10 questions en un document imprimable.
            Gardez-le sous la main quand vous comparez vos devis.
          </p>
          <Link
            href="/guide-pieges-a-eviter/"
            className="inline-flex items-center bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Télécharger le guide gratuit (PDF)
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={pillarFaq}
        title="Questions fréquentes sur les pièges à éviter"
      />

      {/* Internal links */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
            Allez plus loin
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Panneaux photovoltaïques", description: "Notre approche, les vrais chiffres, le calcul de rentabilité", href: "/services/panneaux-photovoltaiques/" },
              { title: "Batteries domestiques", description: "Quand c'est rentable et quand ça ne l'est pas", href: "/services/batteries-domestiques/" },
              { title: "Bornes de recharge", description: "Intégration solaire, conformité, dimensionnement", href: "/services/bornes-de-recharge/" },
              { title: "Conformité électrique", description: "Par un ancien inspecteur : il connaît le rapport avant qu'il n'existe", href: "/services/conformite-electrique/" },
              { title: "Pompes à chaleur", description: "Dimensionnement, intégration, tarif IMPACT", href: "/services/pompes-a-chaleur/" },
              { title: "Nos réalisations", description: "Les preuves sur le terrain", href: "/realisations/" },
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
        title="Benoît peut analyser votre devis gratuitement"
        description="Vous avez reçu un devis d'un autre installateur ? Envoyez-le nous. Benoît l'analyse et vous donne son avis honnête, sans engagement. Pas de pression. Juste un regard d'ancien inspecteur."
        ctaLabel="Envoyer mon devis pour analyse"
        variant="dark"
      />
    </>
  );
}
