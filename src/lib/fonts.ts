import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

// Heading: Space Grotesk -- technical geometric sans, bold, highly legible
// Distinctive without being decorative. Precision feel matching inspector brand.
export const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Body: Plus Jakarta Sans -- geometric, modern, excellent legibility
// Clean, professional, great for long-form service descriptions
export const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Data: JetBrains Mono -- technical precision for stats, prices, figures
// Rapport de Terrain design language: inspector-grade data display
export const fontData = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-data",
  display: "swap",
});
