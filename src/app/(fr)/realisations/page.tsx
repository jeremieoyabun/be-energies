import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { RealizationGrid } from "@/components/sections/RealizationGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { realizations } from "@/data/realizations";

export const metadata = generatePageMetadata({
  title:
    "Nos realisations | Installations solaires, batteries et bornes en Belgique",
  description: `Plus de ${realizations.length} projets realises en Wallonie, a Bruxelles et en Flandre. Panneaux photovoltaiques, batteries, bornes de recharge, pompes a chaleur et mises en conformite. Decouvrez le travail de terrain de Be'energies.`,
  path: "/realisations/",
});

export default function RealizationsPage() {
  const correctionCount = realizations.filter(
    (r) => r.category === "correction"
  ).length;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Realisations" },
        ]}
      />
      <HeroSection
        headline="Nos realisations sur le terrain"
        subheadline={`${realizations.length} projets documentes a travers la Belgique. Des installations neuves, des corrections d\u0027installations defaillantes, des mises en conformite apres controle echoue. Chaque chantier est concu pour passer le controle du premier coup -- parce que notre fondateur sait exactement ce que les controleurs verifient.`}
        ctaLabel="Demander un diagnostic gratuit"
        ctaHref="/contact/"
        variant="compact"
      />

      {/* Filter context */}
      <section className="section-padding pt-0">
        <div className="container-be">
          <div className="flex flex-wrap gap-3 text-sm text-steel">
            <span className="bg-ivory px-3 py-1.5 rounded-full font-medium">
              Tous les projets ({realizations.length})
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Panneaux solaires (
              {
                realizations.filter(
                  (r) => r.service === "panneaux-photovoltaiques"
                ).length
              }
              )
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Batteries (
              {
                realizations.filter(
                  (r) => r.service === "batteries-domestiques"
                ).length
              }
              )
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Bornes de recharge (
              {
                realizations.filter(
                  (r) => r.service === "bornes-de-recharge"
                ).length
              }
              )
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Conformite (
              {
                realizations.filter(
                  (r) => r.service === "conformite-electrique"
                ).length
              }
              )
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Pompes a chaleur (
              {
                realizations.filter(
                  (r) => r.service === "pompes-a-chaleur"
                ).length
              }
              )
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Nettoyage toiture (
              {
                realizations.filter(
                  (r) => r.service === "nettoyage-toiture"
                ).length
              }
              )
            </span>
          </div>
          {correctionCount > 0 && (
            <p className="mt-4 text-sm text-steel/80">
              Dont {correctionCount} corrections d&apos;installations
              defaillantes realisees par d&apos;autres entreprises -- un travail
              que seul un ancien controleur sait diagnostiquer avec precision.
            </p>
          )}
        </div>
      </section>

      <RealizationGrid realizations={realizations} />

      <CTADiagnostic
        title="Votre projet merite le meme niveau d'exigence"
        variant="dark"
      />
    </>
  );
}
