import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { RealizationsClient } from "@/components/sections/RealizationsClient";
import { realizations } from "@/data/realizations";

export const metadata = generatePageMetadata({
  title:
    "Nos realisations | Installations solaires, batteries et bornes en Belgique",
  description: `Plus de ${realizations.length} projets realises en Wallonie, a Bruxelles et en Flandre. Panneaux photovoltaiques, batteries, bornes de recharge, pompes a chaleur et mises en conformite. Decouvrez le travail de terrain de Be'energies.`,
  path: "/realisations/",
});

export default function RealizationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Realisations" },
        ]}
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-be">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
              Nos realisations sur le terrain
            </h1>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              {realizations.length} projets documentes a travers la Belgique. Installations neuves,
              corrections d&apos;installations defaillantes, mises en conformite. Chaque chantier
              est conçu pour passer le controle du premier coup.
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
        title="Votre projet merite le meme niveau d'exigence"
        variant="dark"
      />
    </>
  );
}
