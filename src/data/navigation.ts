import { services } from "./services";

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
      ...services.map((s) => ({
        label: s.title,
        href: `/services/${s.slug}/`,
        icon: s.icon,
      })),
      { label: "Tous nos services", href: "/services/" },
    ],
  },
  { label: "Pièges à éviter", href: "/pieges-a-eviter/" },
  { label: "Réalisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Contact", href: "/contact/" },
];

export const mainNavNl: NavItem[] = [
  {
    label: "Diensten",
    href: "/nl/diensten/",
    children: [
      ...services.map((s) => ({
        label: s.titleNl,
        href: `/nl/diensten/${s.slugNl}/`,
        icon: s.icon,
      })),
      { label: "Alle diensten", href: "/nl/diensten/" },
    ],
  },
  { label: "Contact", href: "/nl/contact/" },
];

export const footerNavFr = {
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}/`,
  })),
  informations: [
    { label: "Pièges à éviter", href: "/pieges-a-eviter/" },
    { label: "Réalisations", href: "/realisations/" },
    { label: "Blog", href: "/blog/" },
    { label: "À propos", href: "/a-propos/" },
    { label: "Mentions légales", href: "/mentions-legales/" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" },
  ],
};
