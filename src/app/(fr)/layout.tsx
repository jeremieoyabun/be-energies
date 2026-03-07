import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASticky } from "@/components/layout/CTASticky";
import { mainNavFr } from "@/data/navigation";

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="fr-BE">
      <Header
        navigation={mainNavFr}
        locale="fr"
        ctaLabel="Diagnostic gratuit"
        ctaHref="/contact/"
      />
      <main>{children}</main>
      <Footer />
      <CTASticky />
    </div>
  );
}
