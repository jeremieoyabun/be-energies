import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { RealizationFeaturedGrid } from "@/components/sections/RealizationFeaturedGrid";
import { RealizationsClient } from "@/components/sections/RealizationsClient";
import { realizations } from "@/data/realizations";

// Hand-picked featured projects, in display order. Each one was chosen for a
// distinct trust angle so the trio reads as a complete pitch on its own:
// 1. Tournai correction: shows we are called in to fix dangerous installs.
// 2. Wavre premium 28 panneaux: premium proof, full case study, brands, kWc.
// 3. Nivelles PV PME: B2B breadth, 30 kWc, professional client type.
const FEATURED_SLUGS = [
  "tournai-correction-installation-defaillante",
  "wavre-pv-premium-28-panneaux",
  "nivelles-pv-pme",
];

export const metadata = generatePageMetadata({
  title:
    "Nos réalisations | Installations solaires, batteries et bornes en Belgique",
  description: `Plus de ${realizations.length} projets réalisés en Wallonie, à Bruxelles et en Flandre. Panneaux photovoltaïques, batteries, bornes de recharge, pompes à chaleur et mises en conformité. Découvrez le travail de terrain de Be'energies.`,
  path: "/realisations/",
});

export default function RealizationsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Réalisations" },
        ]}
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-be">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
              Nos réalisations sur le terrain
            </h1>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              {realizations.length} projets documentés à travers la Belgique. Installations neuves,
              corrections d&apos;installations défaillantes, mises en conformité. Chaque chantier
              est conçu pour passer le contrôle du premier coup.
            </p>
          </div>
        </div>
      </section>

      {/* Featured: 3 hand-picked projects above the filterable index.
          Server-rendered, no client JS, no filtering: pure proof. */}
      <RealizationFeaturedGrid
        realizations={realizations}
        featuredSlugs={FEATURED_SLUGS}
      />

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="container-be">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-balance">
              Tous les projets
            </h2>
            <p className="mt-2 text-steel text-sm">
              Filtrez par service pour explorer les chantiers correspondants.
            </p>
          </div>
          <RealizationsClient realizations={realizations} />
        </div>
      </section>

      <CTADiagnostic
        title="Votre projet mérite le même niveau d'exigence"
        variant="dark"
      />
    </>
  );
}
