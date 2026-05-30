import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASticky } from "@/components/layout/CTASticky";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
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
        ctaLabel="Mon diagnostic gratuit"
        ctaHref="/contact/"
      />
      <main>{children}</main>
      <Footer />
      <CTASticky />
      <WhatsAppFab />
      <CookieBanner />
    </div>
  );
}
