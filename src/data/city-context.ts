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
};

export function getCityContext(
  citySlug: string,
): CityContextEntry | undefined {
  return cityContext[citySlug];
}
