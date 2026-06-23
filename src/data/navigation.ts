import { visibleServices } from "./services";

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export const mainNavFr: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      ...visibleServices.map((s) => ({
        label: s.title,
        href: `/services/${s.slug}/`,
        icon: s.icon,
      })),
      { label: "Tous nos services", href: "/services/" },
    ],
  },
  { label: "Pièges à éviter", href: "/pieges-a-eviter/" },
  { label: "Guides", href: "/guides/" },
  { label: "Réalisations", href: "/realisations/" },
  { label: "Espace Pro", href: "/pro/" },
  { label: "Blog", href: "/blog/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Contact", href: "/contact/" },
];

export const mainNavNl: NavItem[] = [
  {
    label: "Diensten",
    href: "/nl/diensten/",
    children: [
      ...visibleServices.map((s) => ({
        label: s.titleNl,
        href: `/nl/diensten/${s.slugNl}/`,
        icon: s.icon,
      })),
      { label: "Alle diensten", href: "/nl/diensten/" },
    ],
  },
  // NB: pages Valstrikken / Realisaties / Pro / Over ons restent en cours
  // de traduction côté contenu. On garde les liens en français le temps
  // que les pages NL soient prêtes - la nav doit rester complète pour la
  // découverte.
  { label: "Valstrikken", href: "/pieges-a-eviter/" },
  { label: "Realisaties", href: "/realisations/" },
  { label: "Pro", href: "/pro/" },
  { label: "Over ons", href: "/a-propos/" },
  { label: "Contact", href: "/nl/contact/" },
];

export const footerNavFr = {
  services: visibleServices.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}/`,
  })),
  informations: [
    { label: "Pièges à éviter", href: "/pieges-a-eviter/" },
    { label: "Guides", href: "/guides/" },
    { label: "Réalisations", href: "/realisations/" },
    { label: "Espace Pro", href: "/pro/" },
    { label: "Blog", href: "/blog/" },
    { label: "À propos", href: "/a-propos/" },
    { label: "Mentions légales", href: "/mentions-legales/" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" },
  ],
};
