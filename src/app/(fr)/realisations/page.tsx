import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { RealizationFeaturedGrid } from "@/components/sections/RealizationFeaturedGrid";
import { RealizationsClient } from "@/components/sections/RealizationsClient";
import { realizations } from "@/data/realizations";

// Hand-picked featured projects, in display order. Each must point at a
// realization that carries at least one real photo — otherwise the trio
// falls back to the same /img/misc/realisation-hero.jpg placeholder and
// visibly screams "template". Trust angles covered:
// 1. Charleroi correction: shows we are called in to fix dangerous installs.
// 2. Riemst 11.36 kWc: premium PV install with brands + kWc.
// 3. Nivelles PV PME: B2B breadth, 30 kWc, professional client type.
const FEATURED_SLUGS = [
  "charleroi-conformite",
  "riemst-32-panneaux",
  "nivelles-pv-pme",
];

// Only count + show projects with at least one photo in the public-facing
// list. The placeholder-only slugs stay in the data file (we keep them in
// /realisations/[slug]/ deep pages) but they don't get to drag the index
// down to "template territory".
const documentedRealizations = realizations.filter(
  (r) => r.images.length > 0,
);

export const metadata = generatePageMetadata({
  title:
    "Nos réalisations | Installations solaires, batteries et bornes en Belgique",
  description: `Projets réalisés en Wallonie, à Bruxelles et en Flandre. Panneaux photovoltaïques, batteries, bornes de recharge, pompes à chaleur et mises en conformité. Découvrez le travail de terrain de Be'energies.`,
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

      {/* Hero — aerial banner over a Walloon residential neighbourhood
          gives an immediate "we install here" cue before the H1. */}
      <section className="bg-ivory pt-8 md:pt-12">
        <div className="container-be max-w-5xl">
          <figure className="relative aspect-[21/9] rounded-2xl overflow-hidden ring-1 ring-midnight/8 shadow-[0_8px_28px_-12px_rgba(12,18,32,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/guides/guide-pv-drone.webp"
              alt="Vue aérienne d'un quartier résidentiel wallon avec installation photovoltaïque"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-midnight/40 to-transparent"
            />
          </figure>
        </div>
      </section>
      <section className="pt-10 md:pt-14 pb-10 md:pb-16 bg-ivory">
        <div className="container-be">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
              Nos réalisations sur le terrain
            </h1>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              Installations neuves, corrections d&apos;installations
              défaillantes, mises en conformité. Chaque chantier est conçu
              pour passer le contrôle du premier coup.
            </p>
          </div>
        </div>
      </section>

      {/* Featured: 3 hand-picked projects above the filterable index.
          Server-rendered, no client JS, no filtering: pure proof. */}
      <RealizationFeaturedGrid
        realizations={documentedRealizations}
        featuredSlugs={FEATURED_SLUGS}
      />

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="container-be">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
              Tous les projets
            </h2>
            <p className="mt-3 text-charcoal/85 text-[15px] leading-relaxed">
              Filtrez par service pour explorer les chantiers
              correspondants.
            </p>
          </div>
          <RealizationsClient realizations={documentedRealizations} />
        </div>
      </section>

      <CTADiagnostic
        title="Votre projet mérite le même niveau d'exigence"
        variant="dark"
      />
    </>
  );
}
