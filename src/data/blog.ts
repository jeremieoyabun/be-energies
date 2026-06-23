import type { BlogArticle } from "@/lib/types";

// ---------------------------------------------------------------------------
// Blog article metadata.
//
// The article BODY for each entry lives in /src/content/blog/{slug}.mdx and is
// rendered by /src/app/(fr)/blog/[slug]/page.tsx via a dynamic MDX import.
// Keeping metadata here (and dropping the inline HTML bodies) means:
//   - The blog index, BlogPreview, sitemap and RSS feed keep a single, cheap
//     source of truth for slug/title/excerpt/date/tags/image.
//   - The MDX files stay editor-friendly (no escaping HTML inside template
//     literals) and load only on the article route that actually renders them.
//
// When adding a new article:
//   1. Create /src/content/blog/{slug}.mdx with the article content.
//   2. Add a metadata entry here (same slug). No body field.
//   3. Order: newest first - the index page renders in array order.
// ---------------------------------------------------------------------------

export const blogArticles: BlogArticle[] = [
  {
    slug: "prix-panneaux-solaires-belgique-2026",
    title: "Prix des panneaux solaires en Belgique en 2026 : guide complet",
    excerpt:
      "De 5 000 à 20 000 EUR selon la taille : ce qui détermine le prix, ce qu'un devis sérieux doit inclure, et pourquoi le moins cher coûte souvent plus.",
    date: "2026-03-05",
    author: "Benoît Dezso",
    readingTime: 7,
    tags: ["photovoltaïque", "prix", "belgique"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques"],
    image: "/img/pieges/primes.webp",
  },
  {
    slug: "panneaux-solaires-rentables-2026",
    title: "Les panneaux solaires sont-ils encore rentables en 2026 ?",
    excerpt:
      "Tarif prosumer, tarifs d’injection, autoconsommation : un ancien inspecteur vous donne les vrais chiffres.",
    date: "2026-03-01",
    author: "Benoît Dezso",
    readingTime: 8,
    tags: ["photovoltaïque", "rentabilité", "tarif-prosumer"],
    relatedServices: ["panneaux-photovoltaiques", "batteries-domestiques"],
    image: "/img/pieges/06-roi.webp",
  },
  {
    slug: "borne-recharge-domicile-guide",
    title: "Installer une borne de recharge chez soi : le guide complet",
    excerpt:
      "Monophasé ou triphasé, conformité RGIE, prix, marques : tout ce qu'il faut savoir avant d'installer une borne de recharge à domicile.",
    date: "2026-02-28",
    author: "Benoît Dezso",
    readingTime: 8,
    tags: ["borne-recharge", "véhicule-électrique", "guide"],
    relatedServices: ["bornes-de-recharge", "conformite-electrique"],
    image: "/img/realisations/borne-riemst.webp",
  },
  {
    slug: "tarif-prosumer-2026",
    title:
      "Tarif prosumer 2026 en Wallonie : ce qui change et ce que ça coûte",
    excerpt:
      "Les montants par GRD, les deux régimes (avant/après 2024), et comment optimiser votre installation.",
    date: "2026-02-15",
    author: "Benoît Dezso",
    readingTime: 6,
    tags: ["tarif-prosumer", "wallonie", "réglementation"],
    relatedServices: ["panneaux-photovoltaiques"],
    image: "/img/pieges/05-tableau.webp",
  },
  {
    slug: "pompe-chaleur-vs-chaudiere-gaz",
    title: "Pompe à chaleur ou chaudière gaz : le comparatif honnête",
    excerpt:
      "Investissement, coûts de fonctionnement, conditions idéales : le comparatif sans parti pris pour faire le bon choix de chauffage.",
    date: "2026-02-10",
    author: "Benoît Dezso",
    readingTime: 8,
    tags: ["pompe-à-chaleur", "chauffage", "comparatif"],
    relatedServices: ["pompes-a-chaleur", "panneaux-photovoltaiques"],
    image: "/img/pieges/06b_pompe-chaleur.webp",
  },
  {
    slug: "batterie-domestique-rentable",
    title: "Une batterie domestique est-elle rentable ? Le calcul honnête",
    excerpt:
      "On ne vous vend pas une batterie si elle n’est pas rentable. Voici comment on calcule.",
    date: "2026-01-20",
    author: "Benoît Dezso",
    readingTime: 7,
    tags: ["batterie", "rentabilité", "autoconsommation"],
    relatedServices: ["batteries-domestiques", "panneaux-photovoltaiques"],
    image: "/img/realisations/batteries-crisnee.webp",
  },
];

export function getBlogArticleBySlug(
  slug: string
): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
