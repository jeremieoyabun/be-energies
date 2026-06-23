import { visibleServices } from "./services";

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

/**
 * Top navigation - kept intentionally minimal (5 items).
 *
 * The previous menu listed every section we ship (Services, Pièges, Guides,
 * Réalisations, Pro, Blog, À propos, Contact), which read as a sitemap and
 * pushed the CTA into a cramped corner at the xl breakpoint. We now lead with
 * the 5 decisions a visitor actually makes in the first 10 seconds and tuck
 * the rest into the dropdown or the footer:
 *   - "Pièges à éviter" lives inside the Guides dropdown (it pairs
 *     conceptually with the pillar guides as a buyer-education artefact),
 *   - "Espace Pro" and "Blog" stay reachable via the footer "Informations"
 *     column.
 * The right-hand CTA ("Diagnostic gratuit") is owned by Header.tsx, not by
 * this array.
 */
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
  { label: "Réalisations", href: "/realisations/" },
  {
    label: "Guides",
    href: "/guides/",
    children: [
      { label: "Prix panneaux solaires Wallonie 2026", href: "/guides/prix-panneaux-solaires-wallonie-2026/" },
      { label: "Prime borne de recharge 2026", href: "/guides/prime-borne-recharge-belgique-2026/" },
      { label: "Tarif IMPACT Wallonie 2026", href: "/guides/tarif-impact-wallonie-explication/" },
      { label: "Certificats verts Bruxelles 2026", href: "/guides/certificats-verts-bruxelles-2026/" },
      { label: "Pièges à éviter", href: "/pieges-a-eviter/" },
      { label: "Tous les guides", href: "/guides/" },
    ],
  },
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
  // NB: pages Realisaties / Gidsen / Valstrikken / Over ons restent en cours
  // de traduction côté contenu. On garde les liens vers les pages FR le temps
  // que les pages NL soient prêtes - mieux vaut une page FR utile qu'un 404.
  { label: "Realisaties", href: "/realisations/" },
  {
    label: "Gidsen",
    href: "/guides/",
    children: [
      { label: "Prix panneaux solaires Wallonie 2026", href: "/guides/prix-panneaux-solaires-wallonie-2026/" },
      { label: "Prime borne de recharge 2026", href: "/guides/prime-borne-recharge-belgique-2026/" },
      { label: "Tarif IMPACT Wallonie 2026", href: "/guides/tarif-impact-wallonie-explication/" },
      { label: "Certificats verts Bruxelles 2026", href: "/guides/certificats-verts-bruxelles-2026/" },
      { label: "Valstrikken", href: "/pieges-a-eviter/" },
      { label: "Alle gidsen", href: "/guides/" },
    ],
  },
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
