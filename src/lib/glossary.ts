/**
 * Centralised glossary of technical terms surfaced via <Term> and
 * <GlossaryInline>.
 *
 * Each entry exposes a `short`, `full` (FR) and `fullNl` (NL). If `fullNl`
 * is omitted, consumers fall back to the FR definition — only the priority
 * terms get a Belgian Dutch version for now.
 */
export const glossary: Record<
  string,
  { short: string; full: string; fullNl?: string; sourceUrl?: string }
> = {
  rescert: {
    short: "Certification d'installateur d'énergies renouvelables.",
    full:
      "Certification belge des installateurs d'énergies renouvelables (solaire, pompes à chaleur, biomasse…). Délivrée par les Régions, attestant la maîtrise des normes RGIE et des bonnes pratiques d'installation. Obligatoire pour bénéficier de certaines primes.",
    fullNl:
      "Belgische certificering voor installateurs van hernieuwbare energie (zonne-energie, warmtepompen, biomassa…). Uitgereikt door de Gewesten, bevestigt de beheersing van de AREI-normen en goede installatiepraktijken. Verplicht om bepaalde premies te krijgen.",
  },
  grd: {
    short: "Gestionnaire de réseau de distribution (Ores, Resa, Sibelga…).",
    full:
      "Le Gestionnaire de Réseau de Distribution (GRD) est l'entreprise qui gère les câbles et compteurs jusqu'à votre habitation. En Wallonie : Ores, Resa, AIEG, AIESH ; à Bruxelles : Sibelga ; en Flandre : Fluvius.",
    fullNl:
      "De distributienetbeheerder is het bedrijf dat de kabels en meters tot aan uw woning beheert. In Wallonië: Ores, Resa, AIEG, AIESH; in Brussel: Sibelga; in Vlaanderen: Fluvius.",
  },
  prosumer: {
    short:
      "Redevance annuelle payée par les propriétaires de panneaux pré-2024.",
    full:
      "Le tarif prosumer est une redevance annuelle (85 à 99 € par kWe d'onduleur en Wallonie) payée par les ménages dont les panneaux ont été mis en service avant le 1ᵉʳ janvier 2024. Il compense les frais de réseau utilisés pour stocker virtuellement le surplus injecté. Les installations post-2024 ne paient pas le prosumer mais facturent leur injection au tarif fournisseur.",
    fullNl:
      "Het prosumertarief is een jaarlijkse vergoeding (85 tot 99 € per kWe omvormer in Wallonië) betaald door huishoudens van wie de panelen vóór 1 januari 2024 in dienst werden genomen. Het compenseert de netkosten die worden gebruikt om het geïnjecteerde overschot virtueel op te slaan. Installaties na 2024 betalen geen prosumer maar factureren hun injectie aan het leverancierstarief.",
  },
  rgie: {
    short: "Règlement Général sur les Installations Électriques en Belgique.",
    full:
      "Le RGIE est le règlement belge qui fixe les normes de sécurité des installations électriques basse tension. Mis à jour en 2020 (Livre 1 résidentiel), il est la référence du contrôleur lors du passage de conformité.",
    fullNl:
      "Het AREI is het Belgische reglement dat de veiligheidsnormen vastlegt voor laagspanning-installaties. Bijgewerkt in 2020 (Boek 1 residentieel), het is de referentie van de keurder bij de conformiteitskeuring.",
  },
  impact: {
    short: "Tarif tri-horaire 2026 (ECO / MEDIUM / PIC).",
    full:
      "Le tarif IMPACT est une nouvelle structure tarifaire belge introduite en 2026 pour les compteurs communicants : trois plages horaires (ECO 11-17h, MEDIUM 7-11h et 22-1h, PIC 17-22h) avec des prix de distribution différenciés. Pertinent surtout avec PV + batterie + véhicule électrique.",
    fullNl:
      "Het IMPACT-tarief is een nieuwe Belgische tariefstructuur ingevoerd in 2026 voor digitale meters: drie tijdvakken (ECO 11-17u, MEDIUM 7-11u en 22-1u, PIEK 17-22u) met gedifferentieerde distributieprijzen. Vooral relevant met PV + batterij + elektrische wagen.",
  },
  cwape: {
    short: "Autorité de régulation de l'énergie en Wallonie.",
    full:
      "La CWaPE (Commission wallonne pour l'Énergie) est l'autorité indépendante qui régule l'électricité et le gaz en Wallonie. Elle fixe les tarifs prosumer, supervise les GRD et publie les comparatifs tarifs d'injection.",
    fullNl:
      "De CWaPE (Waalse Commissie voor Energie) is de onafhankelijke autoriteit die elektriciteit en gas in Wallonië reguleert. Ze stelt de prosumertarieven vast, controleert de netbeheerders en publiceert de injectietarief-vergelijkingen.",
  },
  kwc: {
    short: "Puissance crête d'une installation solaire, en kilowatts.",
    full:
      "kWc (kilowatt-crête) = la puissance maximale qu'une installation solaire peut produire dans des conditions standardisées (1 000 W/m² d'ensoleillement, 25 °C). Une installation 5 kWc avec une bonne orientation produit environ 4 500 à 5 000 kWh/an en Belgique.",
    fullNl:
      "kWp (kilowattpiek) = het maximale vermogen dat een zonne-installatie kan produceren onder gestandaardiseerde omstandigheden (1 000 W/m² zonneschijn, 25 °C). Een installatie van 5 kWp met goede oriëntatie produceert ongeveer 4 500 tot 5 000 kWh/jaar in België.",
  },
  kwh: {
    short: "Unité d'énergie consommée ou produite, en kilowatt-heure.",
    full:
      "kWh (kilowatt-heure) = unité de mesure de l'énergie. Un ménage belge moyen consomme 3 500 kWh/an pour l'électricité hors chauffage. Votre facture est libellée en €/kWh.",
    fullNl:
      "kWh (kilowattuur) = meeteenheid voor energie. Een gemiddeld Belgisch huishouden verbruikt 3 500 kWh/jaar voor elektriciteit excl. verwarming. Uw factuur is uitgedrukt in €/kWh.",
  },
  onduleur: {
    short: "Convertit le courant continu des panneaux en courant alternatif.",
    full:
      "L'onduleur convertit l'électricité DC produite par les panneaux en AC utilisable dans la maison et le réseau. Il limite la production à sa puissance nominale (un onduleur 5 kW bridé limite une installation 6 kWc), et c'est généralement le premier composant qui tombe en panne (durée de vie 8 à 15 ans).",
    fullNl:
      "De omvormer zet de DC-elektriciteit geproduceerd door de panelen om in AC die bruikbaar is in huis en op het net. Hij beperkt de productie tot zijn nominaal vermogen (een onderdrukte omvormer van 5 kW beperkt een installatie van 6 kWp), en het is doorgaans de eerste component die uitvalt (levensduur 8 tot 15 jaar).",
  },
  autoconsommation: {
    short: "Part de l'électricité produite que vous utilisez vous-même.",
    full:
      "Le taux d'autoconsommation est la proportion de votre production solaire que vous consommez directement (vs injectée au réseau). En Belgique, sans batterie : 30 à 40 %. Avec batterie ou pilotage des consommations : 50 à 70 %. Plus c'est élevé, plus c'est rentable (38 c/kWh économisés vs 1-6 c/kWh à l'injection).",
    fullNl:
      "Het zelfverbruikspercentage is het aandeel van uw zonneproductie dat u rechtstreeks verbruikt (vs geïnjecteerd op het net). In België, zonder batterij: 30 tot 40 %. Met batterij of verbruiksturing: 50 tot 70 %. Hoe hoger, hoe rendabeler (38 c/kWh bespaard vs 1-6 c/kWh aan injectie).",
  },
};
