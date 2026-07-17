// ---------------------------------------------------------------------------
// City-specific localContext entries used on /diensten and /services local
// landing pages. Voice = Benoit, ancien inspecteur en installation electrique,
// certifie RESCERT. Factual, no marketing superlatives, no specific prime
// amounts, no invented regulation citations.
// FR entries cover Walloon and Brussels cities.
// NL entries cover Flemish Limburg cities (Riemst, Tongeren, Bilzen, Hasselt).
// ---------------------------------------------------------------------------

export interface CityContextEntry {
  housingNote: string;
  contextNote: string;
  positioningNote?: string;
}

export const cityContext: Record<string, CityContextEntry> = {
  // -------------------------------------------------------------------------
  // WALLONIE - tier 1
  // -------------------------------------------------------------------------
  liege: {
    housingNote:
      "Liège combine un tissu urbain dense, des maisons mitoyennes étagées sur les collines et un parc résidentiel ancien marqué par le relief escarpé des coteaux de Meuse.",
    contextNote:
      "Le réseau est exploité par RESA, avec une part importante de raccordements monophasés en milieu urbain. Sur les toitures mitoyennes, les ombrages des cheminées, lucarnes et bâtiments voisins sont fréquents : un onduleur à optimiseurs ou des micro-onduleurs y changent réellement la production annuelle. Les pentes raides et les orientations imposées par le bâti ancien obligent souvent à un calepinage soigné plutôt qu'à la maximisation du nombre de panneaux.",
    positioningNote:
      "Sur Liège, je vois encore beaucoup de tableaux électriques anciens, non différentiels par circuit, qui ne supportent pas l'ajout d'une borne de recharge ou d'une batterie sans reprise des protections. C'est le premier point que je contrôle avant de chiffrer.",
  },
  namur: {
    housingNote:
      "Namur mêle un centre historique à la confluence de la Sambre et de la Meuse, des faubourgs résidentiels et une périphérie pavillonnaire avec villas 4 façades et jardins.",
    contextNote:
      "Le réseau est exploité par ORES. Le parc résidentiel mixte permet souvent des installations 5 à 10 kWc bien orientées en périphérie, tandis que le centre demande plus d'attention au cadre patrimonial selon la commune : il faut vérifier la zone auprès du service urbanisme avant tout dépôt de déclaration. Le dimensionnement batterie se justifie surtout sur les profils avec voiture électrique ou pompe à chaleur.",
    positioningNote:
      "À Namur, ce qui revient souvent c'est l'installation faite trop vite sur une charpente ancienne sans vérification sérieuse de la portance. Je préfère prendre le temps de regarder la structure avant de promettre une puissance.",
  },
  bruxelles: {
    housingNote:
      "Bruxelles est un tissu urbain très dense, marqué par les maisons de maître, les maisons mitoyennes étroites, les immeubles à appartements et une forte proportion de toitures plates.",
    contextNote:
      "Le réseau est exploité par Sibelga, et le cadre régional bruxellois diffère de la Wallonie : les règles de compensation, de comptage et d'urbanisme sont spécifiques et évoluent. Sur les toitures plates, on travaille beaucoup en lestage avec inclinaison douce est-ouest pour maximiser l'autoconsommation. Sur les maisons mitoyennes, la place utile réelle est souvent plus petite qu'elle n'en a l'air une fois les châssis et corniches voisines pris en compte.",
    positioningNote:
      "À Bruxelles, je commence toujours par regarder le tableau et le compteur avant la toiture. Beaucoup de logements anciens ont un raccordement et des protections qui ne sont plus adaptés à un projet PV sérieux, et il faut le dire honnêtement au client.",
  },
  charleroi: {
    housingNote:
      "Charleroi mêle un tissu urbain dense de maisons mitoyennes du XXe siècle, un héritage post-industriel et des zones plus récentes en périphérie, avec une majorité de toitures en pans simples.",
    contextNote:
      "Le réseau est exploité par ORES, avec un raccordement monophasé majoritaire chez le particulier. Sur les toitures mitoyennes orientées plein sud, on rencontre souvent des ombrages partiels liés aux corniches voisines ou aux cheminées : un onduleur à optimiseurs y change réellement la production. La majorité de nos clients carolos cherchent à dimensionner pour la consommation réelle, batterie comprise quand le profil le justifie.",
    positioningNote:
      "Sur Charleroi, je vois encore régulièrement des tableaux électriques qui ne supportent pas l'ajout d'une borne ou d'une batterie sans reprise des protections. C'est le premier point que je regarde avant de chiffrer.",
  },
  mons: {
    housingNote:
      "Mons combine un centre historique avec ses maisons mitoyennes proches de la Grand-Place, des quartiers du XXe siècle et une périphérie résidentielle avec villas et jardins.",
    contextNote:
      "Le réseau est exploité par ORES. Dans le centre, le bâti patrimonial impose de vérifier la zone auprès du service urbanisme avant tout projet visible depuis l'espace public. En périphérie, les villas avec grandes pentes simples se prêtent bien à des installations 6 à 10 kWc avec batterie lorsque le profil de consommation le justifie. Les ombrages d'arbres matures sont fréquents dans les lotissements anciens.",
    positioningNote:
      "À Mons, je constate souvent que l'orientation réelle de la toiture n'a pas été mesurée, juste estimée à l'œil. Sur un projet à 10 ou 15 ans, ça change la production cumulée de façon significative.",
  },
  wavre: {
    housingNote:
      "Wavre est un Brabant wallon résidentiel typique, avec une forte proportion de villas 4 façades, des jardins généreux et un parc immobilier plutôt récent et entretenu.",
    contextNote:
      "Le réseau est exploité par ORES. Le profil résidentiel et la présence fréquente de voitures électriques ou de pompes à chaleur rendent le couplage PV plus batterie plus borne particulièrement cohérent ici. Les toitures sont souvent en pans simples bien exposés, ce qui simplifie le calepinage. On voit aussi beaucoup de projets où le client veut anticiper une deuxième voiture électrique : il faut prévoir le tableau et la ligne en conséquence dès le départ.",
    positioningNote:
      "À Wavre, le piège classique c'est de surdimensionner le PV sans penser à la borne et à la batterie comme un seul système. Je préfère poser le scénario d'usage complet avant de proposer une puissance.",
  },

  // -------------------------------------------------------------------------
  // WALLONIE - tier 2
  // -------------------------------------------------------------------------
  nivelles: {
    housingNote:
      "Nivelles offre un mix Brabant wallon : centre historique compact, faubourgs résidentiels et lotissements périphériques avec villas, jardins et toitures généralement bien exposées.",
    contextNote:
      "Le réseau est exploité par ORES. Le profil résidentiel se prête bien aux installations 6 à 10 kWc avec batterie quand il y a voiture électrique ou pompe à chaleur. Dans le centre, le bâti ancien demande de vérifier la zone auprès du service urbanisme avant tout dépôt. En périphérie, les toitures simples et dégagées permettent un dimensionnement plus libre, orienté sur la consommation réelle plutôt que sur la surface disponible.",
    positioningNote:
      "Sur Nivelles, ce que je regarde en priorité c'est la cohabitation PV plus borne plus pompe à chaleur sur le même tableau. Beaucoup d'installations posées sans cette vision globale finissent en reprise complète deux ans plus tard.",
  },
  verviers: {
    housingNote:
      "Verviers est marquée par son passé textile et sa topographie de vallée, avec beaucoup de maisons mitoyennes étagées, des toitures pentues et un parc immobilier majoritairement ancien.",
    contextNote:
      "Le réseau est exploité par RESA. La topographie de vallée et le bâti mitoyen créent des ombrages naturels fréquents (relief, bâtiments voisins, cheminées), qui rendent les optimiseurs ou micro-onduleurs particulièrement utiles. Les pentes raides imposent un calepinage soigné et un contrôle sérieux de la charpente avant pose. Le dimensionnement gagne souvent à être plus modeste mais mieux placé que maximalement large.",
    positioningNote:
      "À Verviers, je vois beaucoup de toitures anciennes où la portance n'a pas été vérifiée sérieusement avant la pose. Sur du bâti ancien, c'est le premier contrôle à faire, pas le dernier.",
  },
  arlon: {
    housingNote:
      "Arlon a un caractère à la fois urbain et résidentiel, avec un centre compact, des faubourgs en maisons mitoyennes et une périphérie pavillonnaire marquée par l'influence du marché luxembourgeois.",
    contextNote:
      "Le réseau est exploité par ORES, qui couvre la quasi-totalité de la province de Luxembourg. Le profil résidentiel arlonais, avec souvent des grands logements et des consommations électriques importantes, justifie régulièrement des installations 8 à 12 kWc avec batterie. Les hivers plus froids ici renforcent l'intérêt du couplage PV plus pompe à chaleur bien dimensionné.",
    positioningNote:
      "Sur Arlon, ce que je regarde avant tout c'est la covisibilité avec les biens classés du centre historique et la portance des charpentes anciennes. L'orientation idéale doit parfois céder le pas à une intégration plus discrète.",
  },
  tournai: {
    housingNote:
      "Tournai est une cité historique avec des maisons mitoyennes en centre proches de la cathédrale, des faubourgs résidentiels et une périphérie pavillonnaire avec jardins.",
    contextNote:
      "Le réseau est exploité par ORES. Le centre historique impose une vigilance particulière sur les règles d'urbanisme, à vérifier auprès du service de la commune avant tout projet visible depuis la voie publique. En périphérie, les toitures simples et bien orientées permettent des installations classiques 5 à 10 kWc, avec batterie quand le profil le justifie. L'exposition ouest-est est assez fréquente : un dimensionnement bien fait y reste très pertinent.",
    positioningNote:
      "À Tournai, je vois encore des projets vendus uniquement sur la base de la surface de toiture, sans regarder le profil de consommation réel du client. C'est une erreur de logique que je ne fais pas.",
  },
  "la-louviere": {
    housingNote:
      "La Louvière est marquée par son héritage post-industriel et un parc immobilier majoritairement ancien, avec beaucoup de maisons mitoyennes et une périphérie résidentielle plus récente.",
    contextNote:
      "Le réseau est exploité par ORES. Le bâti ancien et les toitures parfois fatiguées imposent un contrôle sérieux de la charpente et de l'étanchéité avant pose : c'est non négociable. Les raccordements monophasés sont majoritaires en résidentiel. Sur ce type de parc immobilier, dimensionner pour la consommation réelle plutôt que pour la surface disponible est presque toujours la bonne approche, batterie incluse si le profil le justifie.",
    positioningNote:
      "À La Louvière, le piège classique c'est l'installation posée sur une toiture qui aurait dû être rénovée d'abord. Je préfère dire non au projet que renvoyer le client à une fuite trois ans plus tard.",
  },

  // -------------------------------------------------------------------------
  // WALLONIE - tier 2b (agglomeration liegeoise, RESA)
  // -------------------------------------------------------------------------
  herstal: {
    housingNote:
      "Herstal aligne un tissu urbain dense hérité de son passé industriel, avec beaucoup de maisons mitoyennes du XXe siècle, quelques zones plus récentes en périphérie et une majorité de toitures en pans simples.",
    contextNote:
      "Le réseau est exploité par RESA, comme sur l'ensemble de l'agglomération liégeoise. Le raccordement monophasé est majoritaire chez le particulier. Sur les toitures mitoyennes, les ombrages de cheminées et de bâtiments voisins sont fréquents et justifient souvent des optimiseurs ou des micro-onduleurs. Le parc immobilier plus ancien impose un contrôle sérieux du tableau électrique avant l'ajout d'une borne ou d'une batterie.",
    positioningNote:
      "À Herstal, comme sur tout l'axe liégeois, le premier point que je vérifie c'est l'état du tableau et des protections. Beaucoup d'installations anciennes ne supportent pas l'ajout d'une borne sans reprise des différentiels par circuit.",
  },
  seraing: {
    housingNote:
      "Seraing porte un héritage sidérurgique marqué, avec un parc immobilier majoritairement ancien, des maisons mitoyennes en fond de vallée et des quartiers résidentiels étagés sur les hauteurs.",
    contextNote:
      "Le réseau est exploité par RESA. La topographie de vallée et le bâti ancien créent des ombrages naturels fréquents et imposent un contrôle sérieux de la charpente avant pose. Les raccordements monophasés dominent en résidentiel. Sur ce type de parc, dimensionner pour la consommation réelle plutôt que pour la surface disponible est presque toujours la bonne approche.",
    positioningNote:
      "À Seraing, je vois régulièrement des toitures fatiguées qui auraient dû être reprises avant la pose de panneaux. Sur du bâti ancien, le contrôle de la couverture et de la charpente est un préalable, pas un détail.",
  },
  vise: {
    housingNote:
      "Visé, sur la Basse-Meuse, mêle un centre historique compact, des faubourgs résidentiels et une périphérie pavillonnaire avec villas et jardins, proche de la frontière néerlandaise.",
    contextNote:
      "Le réseau est exploité par RESA. La proximité de la frontière et le profil résidentiel de la périphérie permettent souvent des installations 5 à 10 kWc bien orientées, avec batterie lorsque le profil de consommation le justifie. Dans le centre, le bâti ancien impose de vérifier la zone auprès du service urbanisme avant tout projet visible depuis l'espace public.",
    positioningNote:
      "À Visé, je suis à quelques minutes de mon siège de Riemst, ce qui me permet un suivi de proximité réel. Ce que je regarde d'abord, c'est l'orientation mesurée de la toiture et l'état du raccordement, pas la surface disponible.",
  },
  huy: {
    housingNote:
      "Huy, sur la Meuse entre Liège et Namur, mêle un centre historique dense au pied de la collégiale, des faubourgs en maisons mitoyennes et une périphérie pavillonnaire avec villas et jardins.",
    contextNote:
      "Le réseau est exploité par RESA. Le centre patrimonial, marqué par la collégiale et le fort, impose de vérifier la zone auprès du service urbanisme avant tout projet visible depuis l'espace public. En périphérie, les toitures simples et bien orientées permettent des installations 5 à 10 kWc, avec batterie lorsque le profil de consommation le justifie. Le relief de vallée crée des ombrages qu'il faut mesurer avant de chiffrer.",
    positioningNote:
      "À Huy, je regarde d'abord l'orientation réelle de la toiture et les ombrages liés au relief de la vallée. Sur un projet à quinze ans, une orientation estimée à l'œil peut coûter cher en production cumulée.",
  },
  waremme: {
    housingNote:
      "Waremme, au cœur de la Hesbaye liégeoise, offre un profil résidentiel et rural avec beaucoup de villas 4 façades, de fermes rénovées et de grandes toitures dégagées sur un plateau agricole peu accidenté.",
    contextNote:
      "Le réseau est exploité par RESA. Le plateau hesbignon, plat et peu boisé, offre des toitures souvent bien exposées et peu ombragées, propices à des installations 6 à 12 kWc, régulièrement couplées à une batterie quand il y a voiture électrique ou pompe à chaleur. Les grandes fermes et bâtiments agricoles rénovés se prêtent à des puissances plus élevées, à condition de vérifier sérieusement la charpente avant pose.",
    positioningNote:
      "À Waremme, les grandes toitures dégagées donnent envie de tout couvrir. Je préfère partir du profil de consommation réel du ménage : une installation bien dimensionnée rapporte plus qu'une grande installation qui injecte son surplus à perte.",
  },

  // -------------------------------------------------------------------------
  // WALLONIE - tier 2b (Brabant wallon, ORES)
  // -------------------------------------------------------------------------
  "ottignies-louvain-la-neuve": {
    housingNote:
      "Ottignies-Louvain-la-Neuve associe une ville universitaire récente et bien pensée à des quartiers résidentiels avec villas, maisons 4 façades et jardins, sur un parc immobilier plutôt jeune et entretenu.",
    contextNote:
      "Le réseau est exploité par ORES. Le profil résidentiel du Brabant wallon, avec une forte présence de voitures électriques et de pompes à chaleur, rend le couplage PV plus batterie plus borne particulièrement cohérent. Les toitures sont souvent en pans simples bien exposés, ce qui simplifie le calepinage et le dimensionnement sur la consommation réelle.",
    positioningNote:
      "À Ottignies et Louvain-la-Neuve, le piège classique c'est de dimensionner le photovoltaïque sans penser la borne et la batterie comme un seul système. Je préfère poser le scénario d'usage complet avant de proposer une puissance.",
  },
  waterloo: {
    housingNote:
      "Waterloo est un Brabant wallon résidentiel aisé, avec une forte proportion de villas 4 façades, de grands jardins et un parc immobilier généralement récent et bien entretenu.",
    contextNote:
      "Le réseau est exploité par ORES. Le profil résidentiel et la présence fréquente de voitures électriques ou de pompes à chaleur rendent le couplage PV plus batterie plus borne cohérent. Les toitures dégagées et bien orientées permettent un dimensionnement libre, orienté sur la consommation réelle plutôt que sur la surface disponible.",
    positioningNote:
      "À Waterloo, ce que je regarde en priorité c'est la cohabitation PV plus borne plus pompe à chaleur sur le même tableau. Anticiper une deuxième voiture électrique change le dimensionnement de la ligne dès le départ.",
  },

  // -------------------------------------------------------------------------
  // FLANDRE - tier 3 - entries en NEERLANDAIS
  // -------------------------------------------------------------------------
  riemst: {
    housingNote:
      "Riemst is een landelijke gemeente met veel boerderijen, vrijstaande woningen en grote tuinen, en een bouwstijl die typisch is voor het Haspengouwse platteland.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. Het landelijke profiel met grote daken en weinig schaduw leent zich goed voor installaties van 8 tot 12 kWc, vaak met batterij wanneer er een warmtepomp of elektrische wagen aanwezig is. Het Vlaamse kader rond digitale meter, terugleververgoeding en stedenbouwkundige regels verschilt van Wallonie en moet per dossier nagekeken worden bij de gemeente.",
    positioningNote:
      "In Riemst zie ik vaak grote daken die volledig volgelegd worden zonder eerst het reele verbruiksprofiel te bekijken. Voor mij begint een goed dossier altijd bij het verbruik, niet bij het beschikbare dakoppervlak.",
  },
  tongeren: {
    housingNote:
      "Tongeren is een historische stad met rijwoningen in het centrum, een oudere bouwvoorraad en een meer residentiele rand met vrijstaande en halfopen woningen.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. In het historische centrum vragen zichtbare ingrepen op het dak een controle van de stedenbouwkundige regels bij de gemeente voor elke aanvraag. In de rand maken eenvoudige daken installaties van 5 tot 10 kWc mogelijk, met batterij wanneer het verbruiksprofiel het rechtvaardigt. Schaduw van aanpalende gebouwen en schoorstenen komt in het centrum regelmatig voor en pleit dan voor optimizers of micro-omvormers.",
    positioningNote:
      "In Tongeren let ik vooral op de leeftijd van het elektrisch bord. Heel wat oudere installaties moeten eerst hersteld worden voor een PV-systeem of een laadpaal echt veilig kan werken.",
  },
  bilzen: {
    housingNote:
      "Bilzen heeft een semi-landelijk karakter, met een mix van vrijstaande woningen, boerderijen en kleinere woonkernen, en een bouwvoorraad die over het algemeen ruim en goed onderhouden is.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. De vaak ruime en weinig beschaduwde daken laten installaties van 8 tot 12 kWc toe, regelmatig gekoppeld aan een batterij wanneer er een warmtepomp of elektrische wagen is. Het verschil met Wallonie zit in het Vlaamse kader rond digitale meter en terugleververgoeding, dat per dossier moet meegenomen worden in de berekening van het reele rendement.",
    positioningNote:
      "In Bilzen zie ik dat klanten vaak een laadpaal en een warmtepomp willen toevoegen na de installatie. Daarom kijk ik van bij de start of het bord en de aansluiting die uitbreiding aankunnen.",
  },
  hasselt: {
    housingNote:
      "Hasselt is een dichtbebouwde stad met rijwoningen, appartementsgebouwen en een ring van residentiele wijken met vrijstaande en halfopen bebouwing.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. In het stadscentrum zijn de beschikbare dakvlakken vaak kleiner en gevoeliger voor schaduw van aanpalende gebouwen, wat optimizers of micro-omvormers vaak verantwoord maakt. In de residentiele rand laten grotere daken klassieke installaties van 6 tot 10 kWc toe, met batterij wanneer er voldoende eigenverbruik is via warmtepomp of elektrische wagen.",
    positioningNote:
      "In Hasselt vertrek ik altijd van het reele verbruiksprofiel, niet van het dakoppervlak. Een eerlijke dimensionering is belangrijker dan een groot vermogen op papier.",
  },

  // -------------------------------------------------------------------------
  // FLANDRE - tier 3b (Limburg, Fluvius) - proximite du siege
  // -------------------------------------------------------------------------
  genk: {
    housingNote:
      "Genk is een ruim opgezette stad met veel vrijstaande en halfopen woningen, brede verkavelingen en een naoorlogse bouwvoorraad die over het algemeen goede, eenvoudige dakvlakken oplevert.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. De ruime, vaak weinig beschaduwde daken laten installaties van 6 tot 12 kWc toe, regelmatig gekoppeld aan een batterij wanneer er een warmtepomp of elektrische wagen is. In Vlaanderen bepaalt sinds 2023 het capaciteitstarief mee de netfactuur: het loont om verbruikspieken te spreiden, wat de logica van batterij en sturing versterkt.",
    positioningNote:
      "In Genk kijk ik van bij de start of het elektrisch bord en de aansluiting een latere laadpaal of batterij aankunnen. Met het capaciteitstarief is het spreiden van pieken vandaag een echt onderdeel van een goed dossier.",
  },
  maasmechelen: {
    housingNote:
      "Maasmechelen heeft een semi-landelijk karakter langs de Maas, met een mix van vrijstaande woningen, oudere mijnwerkerswijken en recente verkavelingen met ruime tuinen.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. De vaak ruime daken laten installaties van 6 tot 12 kWc toe, met batterij wanneer het verbruiksprofiel het rechtvaardigt. Het Vlaamse kader zonder prosumententarief maar met capaciteitstarief betekent dat het reele rendement vooral afhangt van eigenverbruik en van het spreiden van pieken, niet van injectie op het net.",
    positioningNote:
      "In Maasmechelen vertrek ik van het reele verbruik en van de vraag of er later een warmtepomp of laadpaal bijkomt. Dat bepaalt of een batterij vandaag zin heeft of beter nog even wacht.",
  },
  lanaken: {
    housingNote:
      "Lanaken is een landelijke grensgemeente met veel vrijstaande woningen, grote tuinen en een bouwstijl die typisch is voor het Maasland, op korte afstand van mijn thuisbasis in Riemst.",
    contextNote:
      "Het distributienet wordt beheerd door Fluvius. Het landelijke profiel met ruime, weinig beschaduwde daken leent zich goed voor installaties van 8 tot 12 kWc, vaak met batterij bij een warmtepomp of elektrische wagen. Sinds 2023 weegt het capaciteitstarief mee in de netfactuur: het spreiden van verbruikspieken wordt een echte hefboom voor het rendement.",
    positioningNote:
      "Lanaken grenst aan Riemst, dus ik ben hier snel ter plaatse voor een diagnose en voor de opvolging. Ik begin altijd bij het verbruiksprofiel, niet bij het beschikbare dakoppervlak.",
  },
};

export function getCityContext(
  citySlug: string,
): CityContextEntry | undefined {
  return cityContext[citySlug];
}
