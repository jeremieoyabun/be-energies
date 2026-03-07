import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { RealizationGrid } from "@/components/sections/RealizationGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { realizations } from "@/data/realizations";

export const metadata = generatePageMetadata({
  title:
    "Nos réalisations | Installations solaires, batteries et bornes en Belgique",
  description: `Plus de ${realizations.length} projets réalisés en Wallonie, à Bruxelles et en Flandre. Panneaux photovoltaïques, batteries, bornes de recharge, pompes à chaleur et mises en conformité. Découvrez le travail de terrain de Be'énergies.`,
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
          { name: "Réalisations" },
        ]}
      />
      <HeroSection
        headline="Nos réalisations sur le terrain"
        subheadline={`${realizations.length} projets documentés à travers la Belgique. Des installations neuves, des corrections d\u0027installations défaillantes, des mises en conformité après contrôle échoué. Chaque chantier est conçu pour passer le contrôle du premier coup -- parce que notre fondateur sait exactement ce que les contrôleurs vérifient.`}
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
              Conformité (
              {
                realizations.filter(
                  (r) => r.service === "conformite-electrique"
                ).length
              }
              )
            </span>
            <span className="bg-ivory/60 px-3 py-1.5 rounded-full">
              Pompes à chaleur (
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
              défaillantes réalisées par d&apos;autres entreprises -- un travail
              que seul un ancien contrôleur sait diagnostiquer avec précision.
            </p>
          )}
        </div>
      </section>

      <RealizationGrid realizations={realizations} />

      <CTADiagnostic
        title="Votre projet mérite le même niveau d'exigence"
        variant="dark"
      />
    </>
  );
}
