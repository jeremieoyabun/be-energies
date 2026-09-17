import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: { remarkPlugins: [], rehypePlugins: [] },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  async redirects() {
    return [
      // Unpublished content (sept. 2026). Service pages, city pages and the
      // "prime borne" guide that no longer exist land on the closest live hub.
      // Cities: beyond the 70-80 km driving radius from Riemst (see cities.ts).
      {
        source:
          "/:service(panneaux-photovoltaiques|batteries-domestiques|bornes-de-recharge|conformite-electrique)/:city(namur|wavre|ottignies-louvain-la-neuve|bruxelles|charleroi|waterloo|nivelles|la-louviere|mons|arlon|tournai)/",
        destination: "/services/:service/",
        permanent: true,
      },
      { source: "/pompes-a-chaleur/:city/", destination: "/services/", permanent: true },
      { source: "/nl/warmtepompen/:city/", destination: "/nl/diensten/", permanent: true },
      { source: "/services/pompes-a-chaleur/", destination: "/services/", permanent: true },
      { source: "/nl/diensten/warmtepompen/", destination: "/nl/diensten/", permanent: true },
      { source: "/blog/pompe-chaleur-vs-chaudiere-gaz/", destination: "/blog/", permanent: true },
      { source: "/realisations/namur-pompe-a-chaleur-pv/", destination: "/realisations/", permanent: true },
      { source: "/guides/prime-borne-recharge-belgique-2026/", destination: "/services/bornes-de-recharge/", permanent: true },

      // WordPress slug migration
      { source: "/realisation/", destination: "/realisations/", permanent: true },
      { source: "/realisation/:slug/", destination: "/realisations/:slug/", permanent: true },

      // WordPress infrastructure cleanup
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/feed/", destination: "/blog/", permanent: true },
      { source: "/feed", destination: "/blog/", permanent: true },

      // Old WordPress page slugs -> new routes
      { source: "/panneaux-solaires/", destination: "/services/panneaux-photovoltaiques/", permanent: true },
      { source: "/panneaux-photovoltaiques/", destination: "/services/panneaux-photovoltaiques/", permanent: true },
      { source: "/batteries/", destination: "/services/batteries-domestiques/", permanent: true },
      { source: "/batterie-domestique/", destination: "/services/batteries-domestiques/", permanent: true },
      { source: "/bornes-de-recharge/", destination: "/services/bornes-de-recharge/", permanent: true },
      { source: "/borne-de-recharge/", destination: "/services/bornes-de-recharge/", permanent: true },
      { source: "/conformite-electrique/", destination: "/services/conformite-electrique/", permanent: true },
      // Heat-pump service is offline (sept. 2026): land on the services hub.
      { source: "/pompe-a-chaleur/", destination: "/services/", permanent: true },
      { source: "/pompes-a-chaleur/", destination: "/services/", permanent: true },
      { source: "/nettoyage-toiture/", destination: "/services/nettoyage-toiture/", permanent: true },
      { source: "/nettoyage-de-toiture/", destination: "/services/nettoyage-toiture/", permanent: true },
      { source: "/peinture-toiture/", destination: "/services/nettoyage-toiture/", permanent: true },

      // Old WordPress informational pages
      { source: "/qui-sommes-nous/", destination: "/a-propos/", permanent: true },
      { source: "/about/", destination: "/a-propos/", permanent: true },
      { source: "/notre-equipe/", destination: "/a-propos/", permanent: true },
      { source: "/contactez-nous/", destination: "/contact/", permanent: true },
      { source: "/devis/", destination: "/contact/", permanent: true },
      { source: "/demande-de-devis/", destination: "/contact/", permanent: true },
      { source: "/devis-gratuit/", destination: "/contact/", permanent: true },
      { source: "/nos-realisations/", destination: "/realisations/", permanent: true },
      { source: "/portfolio/", destination: "/realisations/", permanent: true },
      { source: "/nos-services/", destination: "/services/", permanent: true },
      { source: "/blog/category/:slug/", destination: "/blog/", permanent: true },
      { source: "/blog/tag/:slug/", destination: "/blog/", permanent: true },
      { source: "/category/:slug/", destination: "/blog/", permanent: true },
      { source: "/tag/:slug/", destination: "/blog/", permanent: true },

      // Catch-all for old WordPress pagination
      { source: "/page/:num/", destination: "/", permanent: true },
      { source: "/blog/page/:num/", destination: "/blog/", permanent: true },

      // Common WordPress homepage slugs (FR + EN)
      { source: "/accueil/", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },

      // Common WP service-list aliases
      { source: "/solutions/", destination: "/services/", permanent: true },
      { source: "/prestations/", destination: "/services/", permanent: true },
      { source: "/nos-prestations/", destination: "/services/", permanent: true },

      // Old EN slugs sometimes left over from WP themes
      { source: "/solar-panels/", destination: "/services/panneaux-photovoltaiques/", permanent: true },
      { source: "/heat-pump/", destination: "/services/", permanent: true },
      { source: "/heat-pumps/", destination: "/services/", permanent: true },
      { source: "/ev-charger/", destination: "/services/bornes-de-recharge/", permanent: true },
      { source: "/ev-charging/", destination: "/services/bornes-de-recharge/", permanent: true },

      // Common legal-page slugs
      { source: "/cgv/", destination: "/mentions-legales/", permanent: true },
      { source: "/cgu/", destination: "/mentions-legales/", permanent: true },
      { source: "/conditions-generales/", destination: "/mentions-legales/", permanent: true },
      { source: "/confidentialite/", destination: "/politique-de-confidentialite/", permanent: true },
      { source: "/vie-privee/", destination: "/politique-de-confidentialite/", permanent: true },
      { source: "/cookies/", destination: "/politique-de-confidentialite/", permanent: true },

      // Route old "analyse de devis" intents to the new dedicated landing
      { source: "/analyse-devis/", destination: "/devis-analyse/", permanent: true },
      { source: "/verification-devis/", destination: "/devis-analyse/", permanent: true },
      { source: "/avis-devis/", destination: "/devis-analyse/", permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
