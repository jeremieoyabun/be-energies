import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  async redirects() {
    return [
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
      { source: "/pompe-a-chaleur/", destination: "/services/pompes-a-chaleur/", permanent: true },
      { source: "/pompes-a-chaleur/", destination: "/services/pompes-a-chaleur/", permanent: true },
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
    ];
  },
};

export default nextConfig;
