import type { Metadata } from "next";
import { fontHeading, fontBody, fontData } from "@/lib/fonts";
import { AnalyticsGate } from "@/components/layout/AnalyticsGate";
import { ScrollObserver } from "@/components/animations/ScrollObserver";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.be-energies.be"),
  icons: {
    icon: "/logos/Favicon_Be-energies.webp",
    apple: "/logos/Favicon_Be-energies.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE" suppressHydrationWarning>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${fontData.variable} antialiased`}
      >
        {children}
        <ScrollObserver />
        <AnalyticsGate />
      </body>
    </html>
  );
}
