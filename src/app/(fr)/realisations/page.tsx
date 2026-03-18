import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { RealizationsClient } from "@/components/sections/RealizationsClient";
import { realizations } from "@/data/realizations";

export const metadata = generatePageMetadata({
  title:
    "Nos réalisations | Installations solaires, batteries et bornes en Belgique",
  description: `Plus de ${realizations.length} projets réalisés en Wallonie, à Bruxelles et en Flandre. Panneaux photovoltaïques, batteries, bornes de recharge, pompes à chaleur et mises en conformité. Découvrez le travail de terrain de Be'energies.`,
  path: "/realisations/",
});

export default function RealizationsPage() {
  return (
    <>
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

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="container-be">
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
