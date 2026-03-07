import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    name: "Marie D.",
    city: "Liège",
    service: "panneaux-photovoltaiques",
    quote:
      "Depuis l'installation de nos panneaux par Be'energies, notre facture est passée de 185 EUR à 38 EUR par mois. Et l'installation a passé le contrôle du premier coup.",
    outcome: "Facture : de 185 EUR à 38 EUR/mois",
    rating: 5,
  },
  {
    name: "Philippe V.",
    city: "Namur",
    service: "panneaux-photovoltaiques",
    quote:
      "Benoît a pris le temps de tout vérifier avant de proposer quoi que ce soit. Pas de pression, pas de promesses en l'air. Un vrai professionnel.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    city: "Wavre",
    service: "batteries-domestiques",
    quote:
      "Benoît nous a clairement expliqué qu'une batterie n'était pas rentable pour notre profil. Quel installateur fait ça ? On a finalement optimisé notre autoconsommation autrement.",
    rating: 5,
  },
  {
    name: "Jean-Marc B.",
    city: "Riemst",
    service: "panneaux-photovoltaiques",
    quote:
      "32 panelen geïnstalleerd, alles perfect afgewerkt. Benoît kent zijn vak als geen ander.",
    outcome: "32 panneaux, 11.36 kWc",
    rating: 5,
  },
  {
    name: "Catherine R.",
    city: "Charleroi",
    service: "conformite-electrique",
    quote:
      "Après un refus de conformité par un autre installateur, Benoît a repris le chantier et tout remis en ordre. Le contrôle est passé sans remarque.",
    rating: 5,
  },
  {
    name: "Laurent M.",
    city: "Bruxelles",
    service: "bornes-de-recharge",
    quote:
      "Installation de la borne intégrée à nos panneaux solaires. On recharge gratuitement en journée. Le calcul était exact.",
    outcome: "Recharge gratuite en journée",
    rating: 5,
  },
];

export function getTestimonialsForService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.service === serviceSlug);
}

export function getTestimonialsForCity(citySlug: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.city.toLowerCase().replace(/\s/g, "-") === citySlug
  );
}
