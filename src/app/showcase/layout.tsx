import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Be'energies Design Showcase",
    default: "Be'energies Design Showcase",
  },
  description:
    "Internal design direction showcase for the Be'energies website rebuild. Browse 3 homepage concepts and compare creative directions.",
  robots: { index: false, follow: false },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
