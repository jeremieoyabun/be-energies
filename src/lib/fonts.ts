import { DM_Serif_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

// Heading: DM Serif Display -- distinctive editorial serif
// Not Inter, not Roboto -- a bold serif that feels premium and expert
export const fontHeading = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
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
