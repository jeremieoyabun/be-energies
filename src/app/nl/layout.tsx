import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASticky } from "@/components/layout/CTASticky";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { mainNavNl } from "@/data/navigation";

export default function NlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="nl-BE">
      <Header
        navigation={mainNavNl}
        locale="nl"
        ctaLabel="Gratis diagnose"
        ctaHref="/nl/contact/"
      />
      <main>{children}</main>
      <Footer />
      <CTASticky ctaLabel="Gratis diagnose" ctaHref="/nl/contact/" />
      <WhatsAppFab label="Chat op WhatsApp" />
      <CookieBanner locale="nl" />
    </div>
  );
}
