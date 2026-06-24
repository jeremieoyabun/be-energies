import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WarrantyLadder } from "@/components/sections/WarrantyLadder";
import { DataSources } from "@/components/sections/DataSources";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRightIcon, CheckIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title:
    "Garanties panneaux solaires et onduleurs 2026 | Tableaux complets par marque",
  description:
    "Quelles garanties exiger sur un devis photovoltaïque en 2026 ? Performance, produit, onduleur, main d'œuvre : durées, plafonds, chiffres extraits des fiches techniques constructeur, lus par un ancien inspecteur certifié RESCERT.",
  path: "/guides/garanties-panneaux-solaires-onduleurs/",
});

const PAGE_URL = "/guides/garanties-panneaux-solaires-onduleurs/";
const PAGE_TITLE =
  "Garanties panneaux solaires et onduleurs 2026 : tableaux complets";
const PAGE_DESCRIPTION =
  "Durées, plafonds et conditions des garanties panneaux et onduleurs en 2026, lus ligne par ligne sur les fiches techniques constructeur.";

const REDFLAGS: string[] = [
  "Une garantie panneau annoncée \"30 ans\" sans préciser si c'est performance ou produit.",
  "Une garantie onduleur de 5 ans seulement, sans option d'extension.",
  "Aucune mention de la garantie installation / main d'œuvre dans le devis.",
  "Une référence panneau qui n'apparaît pas sur le site du constructeur (importation grise).",
  "Un \"Tier 1\" affirmé sans nom de marque vérifiable.",
];

const RELATED = [
  {
    title: "Prix panneaux solaires Wallonie 2026",
    href: "/guides/prix-panneaux-solaires-wallonie-2026/",
    description:
      "Coûts réels, primes restantes, retour sur investissement sous le nouveau régime.",
  },
  {
    title: "Tarif IMPACT Wallonie : explication complète",
    href: "/guides/tarif-impact-wallonie-explication/",
    description:
      "Comment le tarif IMPACT change la rentabilité d'un système photovoltaïque.",
  },
  {
    title: "7 pièges à éviter avant un devis solaire",
    href: "/pieges-a-eviter/",
    description:
      "Checklist de l'inspecteur : ce qu'un devis honnête doit montrer.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          url: PAGE_URL,
          datePublished: "2026-04-15",
          dateModified: "2026-06-23",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", href: "/" },
          { name: "Guides", href: "/guides/" },
          { name: "Garanties panneaux et onduleurs 2026", href: PAGE_URL },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Guides", href: "/guides/" },
          { name: "Garanties panneaux et onduleurs 2026" },
        ]}
      />

      <section className="bg-ivory pt-8 md:pt-12">
        <div className="container-be max-w-5xl">
          <figure className="relative aspect-[21/9] rounded-2xl overflow-hidden ring-1 ring-midnight/8 shadow-[0_8px_28px_-12px_rgba(12,18,32,0.25)] image-reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/guides/guide-inverter-mural.webp"
              alt="Onduleur photovoltaïque mural dans une cave technique"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-midnight/35 to-transparent"
            />
          </figure>
        </div>
      </section>

      {/* HERO */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-4xl">
          <SectionLabel>Guide technique</SectionLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.05]">
            Garanties panneaux solaires et onduleurs en 2026 : ce qu&apos;il
            faut exiger, ce qu&apos;il faut éviter
          </h1>
          <p className="mt-6 text-[17px] text-charcoal leading-relaxed">
            Une installation photovoltaïque sérieuse ne se juge pas à son
            prix au panneau, mais à ce qui se passe à l&apos;année 11, 18 ou
            25. Ce guide rassemble les durées, plafonds et conditions
            réelles des garanties constructeur — les chiffres viennent des
            fiches techniques officielles, pas des plaquettes commerciales.
          </p>
          <p className="mt-4 text-[15px] text-charcoal/85 leading-relaxed">
            Lecture par Benoît Dezso, ancien inspecteur en installation
            électrique, certifié RESCERT. C&apos;est exactement la grille
            qu&apos;on applique en interne avant de retenir un panneau ou
            un onduleur pour un chantier.
          </p>
        </div>
      </section>

      {/* WARRANTY LADDER - the full tables */}
      <WarrantyLadder />

      {/* HOW TO READ - reading instructions for non-technical visitors */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <SectionLabel>Comment lire ce tableau</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-6">
            Quatre lignes à pointer avant de signer
          </h2>
          <ol className="space-y-5 text-[15px] text-charcoal leading-relaxed">
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-midnight text-ivory text-[12px] font-semibold tabular-nums">
                01
              </span>
              <span>
                <strong className="text-midnight">
                  Performance vs. produit.
                </strong>{" "}
                La garantie performance dit que le panneau produira encore
                X % de sa puissance nominale à l&apos;année Y. La garantie
                produit couvre les défauts physiques. Les deux durées
                peuvent être très différentes — exigez les deux explicitement.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-midnight text-ivory text-[12px] font-semibold tabular-nums">
                02
              </span>
              <span>
                <strong className="text-midnight">L&apos;onduleur d&apos;abord.</strong>{" "}
                C&apos;est la pièce qui lâche en premier. Une garantie 10
                ans est un strict minimum en 2026. Vérifiez si une
                extension à 20 ou 25 ans est possible et à quel prix —
                certains constructeurs l&apos;offrent à l&apos;enregistrement
                en ligne, d&apos;autres la facturent lourd.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-midnight text-ivory text-[12px] font-semibold tabular-nums">
                03
              </span>
              <span>
                <strong className="text-midnight">
                  La main d&apos;œuvre installateur.
                </strong>{" "}
                Indépendante des garanties constructeur. Une couverture 10
                ans sur l&apos;étanchéité du calepinage et le câblage est
                attendue d&apos;un installateur sérieux. Si ce n&apos;est
                pas dans le devis, demandez-le par écrit.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md bg-midnight text-ivory text-[12px] font-semibold tabular-nums">
                04
              </span>
              <span>
                <strong className="text-midnight">
                  L&apos;importation officielle.
                </strong>{" "}
                Une garantie ne vaut que si la référence panneau / onduleur
                est importée par le canal officiel européen du
                constructeur. Vérifiez le numéro de modèle exact sur le
                site du fabricant avant de signer.
              </span>
            </li>
          </ol>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-3xl">
          <SectionLabel>Drapeaux rouges</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-6">
            Cinq formulations qui doivent vous alerter
          </h2>
          <ul className="space-y-3">
            {REDFLAGS.map((flag) => (
              <li
                key={flag}
                className="flex items-start gap-3 bg-ivory border border-cloud rounded-lg p-4"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md bg-danger/10 text-danger mt-0.5"
                >
                  <CheckIcon size={14} />
                </span>
                <span className="text-[14.5px] text-charcoal leading-snug">
                  {flag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DataSources />

      <CTADiagnostic
        title="Un devis solaire à faire vérifier ligne par ligne ?"
        description="Envoyez votre devis : Benoît le lit avec son œil d'ancien inspecteur, vérifie les garanties annoncées contre les fiches techniques constructeur, et vous renvoie une analyse écrite sous 48 h ouvrées."
        ctaLabel="Faire vérifier mon devis"
        ctaHref="/devis-analyse/"
        variant="dark"
      />

      {/* RELATED GUIDES */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <SectionLabel>Guides liés</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mt-3 mb-8">
            Continuer la lecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-white border border-cloud rounded-2xl p-6 hover:border-amber/40 transition-colors flex flex-col"
              >
                <h3 className="text-[16px] font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-charcoal/85 leading-relaxed flex-1">
                  {r.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-amber-dark group-hover:gap-2.5 transition-all">
                  Lire le guide
                  <ArrowRightIcon size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
