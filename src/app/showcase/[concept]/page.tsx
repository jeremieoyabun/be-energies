import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { concepts } from "../data";
import RapportDeTerrain from "./concepts/RapportDeTerrain";
import AtelierSolaire from "./concepts/AtelierSolaire";
import ControleTechnique from "./concepts/ControleTechnique";

const conceptComponents: Record<string, React.ComponentType> = {
  "rapport-de-terrain": RapportDeTerrain,
  "atelier-solaire": AtelierSolaire,
  "controle-technique": ControleTechnique,
};

export async function generateStaticParams() {
  return concepts.map((c) => ({ concept: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ concept: string }>;
}): Promise<Metadata> {
  const { concept: slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);
  if (!concept) return {};
  return {
    title: `${concept.title} — Concept Preview`,
  };
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ concept: string }>;
}) {
  const { concept: slug } = await params;
  const Component = conceptComponents[slug];
  if (!Component) notFound();
  return <Component />;
}
