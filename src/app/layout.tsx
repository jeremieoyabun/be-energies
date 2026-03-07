import type { Metadata } from "next";
import { fontHeading, fontBody, fontData } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://be-energies.be"),
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
      </body>
    </html>
  );
}
