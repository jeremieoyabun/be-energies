import { services } from "./services";

export interface NavItem {
  label: string;
  href: string;
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
      })),
      { label: "Tous nos services", href: "/services/" },
    ],
  },
  { label: "Pieges a eviter", href: "/pieges-a-eviter/" },
  { label: "Realisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
  { label: "A propos", href: "/a-propos/" },
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
    { label: "Pieges a eviter", href: "/pieges-a-eviter/" },
    { label: "Realisations", href: "/realisations/" },
    { label: "Blog", href: "/blog/" },
    { label: "A propos", href: "/a-propos/" },
    { label: "Mentions legales", href: "/mentions-legales/" },
    { label: "Politique de confidentialite", href: "/politique-de-confidentialite/" },
  ],
};
