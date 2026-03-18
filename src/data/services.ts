import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "panneaux-photovoltaiques",
    slugNl: "zonnepanelen",
    title: "Panneaux photovoltaïques",
    titleNl: "Zonnepanelen",
    shortDescription:
      "Installation sur mesure de panneaux solaires, dimensionnée par un ancien inspecteur en conformité électrique, certifié RESCERT pour maximiser votre autoconsommation.",
    shortDescriptionNl:
      "Op maat geinstalleerde zonnepanelen, gedimensioneerd door een voormalig inspecteur om uw zelfconsumptie te maximaliseren.",
    icon: "solar",
    heroImage: "/img/services/panneaux.jpg",
    pieges: [
      "retour-investissement-gonfle",
      "installation-gratuite",
      "surdimensionnement",
      "devis-sans-visite",
      "onduleur-sous-dimensionne",
      "installation-non-conforme",
    ],
    relatedServices: ["batteries-domestiques", "bornes-de-recharge", "conformite-electrique"],
  },
  {
    slug: "batteries-domestiques",
    slugNl: "thuisbatterijen",
    title: "Batteries domestiques",
    titleNl: "Thuisbatterijen",
    shortDescription:
      "Stockage intelligent pour maximiser votre autoconsommation. On ne vous vend une batterie que si elle est rentable pour vous.",
    shortDescriptionNl:
      "Slimme opslag om uw zelfconsumptie te maximaliseren. We verkopen alleen een batterij als het rendabel is voor u.",
    icon: "battery",
    heroImage: "/img/realisations/batteries-crisnee.webp",
    pieges: [
      "surdimensionnement",
      "devis-sans-visite",
      "batterie-inutile",
    ],
    relatedServices: ["panneaux-photovoltaiques", "pompes-a-chaleur", "bornes-de-recharge"],
  },
  {
    slug: "bornes-de-recharge",
    slugNl: "laadpalen",
    title: "Bornes de recharge",
    titleNl: "Laadpalen",
    shortDescription:
      "Installation de bornes de recharge à domicile, intégrée à votre installation solaire pour recharger au coût le plus bas.",
    shortDescriptionNl:
      "Installatie van laadpalen aan huis, geintegreerd met uw zonne-installatie om tegen de laagste kosten op te laden.",
    icon: "ev-charging",
    heroImage: "/img/realisations/borne-riemst.webp",
    pieges: ["devis-sans-visite"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques", "conformite-electrique"],
  },
  {
    slug: "conformite-electrique",
    slugNl: "elektrische-conformiteit",
    title: "Conformité électrique",
    titleNl: "Elektrische conformiteit",
    shortDescription:
      "Mise en conformité par un ancien inspecteur en conformité électrique, certifié RESCERT. Votre installation sera prête pour le contrôle du premier coup.",
    shortDescriptionNl:
      "Conformiteit door een voormalig inspecteur. Uw installatie is klaar voor de eerste keuring.",
    icon: "compliance",
    heroImage: "/img/services/electricite.jpg",
    pieges: ["devis-sans-visite", "installation-non-conforme"],
    relatedServices: ["panneaux-photovoltaiques", "pompes-a-chaleur", "batteries-domestiques"],
  },
  {
    slug: "nettoyage-toiture",
    slugNl: "dakreiniging",
    title: "Nettoyage et peinture toiture",
    titleNl: "Dakreiniging en schilderwerk",
    shortDescription:
      "Nettoyage professionnel et peinture de toiture pour protéger votre investissement et optimiser le rendement de vos panneaux.",
    shortDescriptionNl:
      "Professionele dakreiniging en schilderwerk om uw investering te beschermen en het rendement van uw panelen te optimaliseren.",
    icon: "roof",
    heroImage: "/img/realisations/engis-03.webp",
    pieges: [],
    relatedServices: ["panneaux-photovoltaiques", "conformite-electrique"],
  },
  {
    slug: "pompes-a-chaleur",
    slugNl: "warmtepompen",
    title: "Pompes à chaleur et climatisation",
    titleNl: "Warmtepompen en airconditioning",
    shortDescription:
      "Chauffage et climatisation haute performance, dimensionnés pour votre habitation et intégrés à votre système énergétique.",
    shortDescriptionNl:
      "Hoogwaardige verwarming en airconditioning, gedimensioneerd voor uw woning en geintegreerd in uw energiesysteem.",
    icon: "heat-pump",
    heroImage: "/img/services/climatisation.jpg",
    pieges: ["devis-sans-visite"],
    relatedServices: [
      "panneaux-photovoltaiques",
      "batteries-domestiques",
      "conformite-electrique",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug || s.slugNl === slug);
}

export function getServiceBySlugFr(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceBySlugNl(slug: string): Service | undefined {
  return services.find((s) => s.slugNl === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getServiceBySlugFr(slug))
    .filter(Boolean) as Service[];
}
