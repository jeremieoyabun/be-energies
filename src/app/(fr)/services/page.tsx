import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";

export const metadata = generatePageMetadata({
  title: "Nos services",
  description:
    "Panneaux solaires, batteries, bornes de recharge, pompes a chaleur, conformite electrique, nettoyage toiture. Un seul interlocuteur pour votre systeme energetique.",
  path: "/services/",
  alternates: { fr: "/services/", nl: "/nl/diensten/" },
});

export default function ServicesHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services" },
        ]}
      />
      <HeroSection
        headline="Tous nos services"
        subheadline="Un seul interlocuteur pour l'ensemble de votre systeme energetique. Panneaux solaires, batteries, bornes de recharge, pompes a chaleur, conformite electrique, et nettoyage toiture."
        ctaLabel="Diagnostic gratuit"
        ctaHref="/contact/"
        variant="compact"
      />
      <ServiceCardGrid />
      <CTADiagnostic />
    </>
  );
}
