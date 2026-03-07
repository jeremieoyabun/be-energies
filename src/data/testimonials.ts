import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    name: "Marie D.",
    city: "Liege",
    service: "panneaux-photovoltaiques",
    quote:
      "Depuis l'installation de nos panneaux par Be'energies, notre facture est passee de 185 EUR a 38 EUR par mois. Et l'installation a passe le controle du premier coup.",
    outcome: "Facture : de 185 EUR a 38 EUR/mois",
    rating: 5,
  },
  {
    name: "Philippe V.",
    city: "Namur",
    service: "panneaux-photovoltaiques",
    quote:
      "Benoit a pris le temps de tout verifier avant de proposer quoi que ce soit. Pas de pression, pas de promesses en l'air. Un vrai professionnel.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    city: "Wavre",
    service: "batteries-domestiques",
    quote:
      "Benoit nous a clairement explique qu'une batterie n'etait pas rentable pour notre profil. Quel installateur fait ca ? On a finalement optimise notre autoconsommation autrement.",
    rating: 5,
  },
  {
    name: "Jean-Marc B.",
    city: "Riemst",
    service: "panneaux-photovoltaiques",
    quote:
      "32 panelen geinstalleerd, alles perfect afgewerkt. Benoit kent zijn vak als geen ander.",
    outcome: "32 panneaux, 11.36 kWc",
    rating: 5,
  },
  {
    name: "Catherine R.",
    city: "Charleroi",
    service: "conformite-electrique",
    quote:
      "Apres un refus de conformite par un autre installateur, Benoit a repris le chantier et tout remis en ordre. Le controle est passe sans remarque.",
    rating: 5,
  },
  {
    name: "Laurent M.",
    city: "Bruxelles",
    service: "bornes-de-recharge",
    quote:
      "Installation de la borne integree a nos panneaux solaires. On recharge gratuitement en journee. Le calcul etait exact.",
    outcome: "Recharge gratuite en journee",
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
