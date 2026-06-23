import Image from "next/image";
import Link from "next/link";
import { CheckIcon, CloseIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";

interface ComparisonPair {
  classique: string;
  beEnergies: string;
}

interface ComparisonTableProps {
  pairs?: ComparisonPair[];
  title?: string;
}

const defaultPairs: ComparisonPair[] = [
  {
    classique: "Dimensionnement basé sur la surface disponible",
    beEnergies: "Dimensionnement basé sur votre consommation réelle",
  },
  {
    classique: "Hypothèses tarifaires génériques",
    beEnergies: "Tarifs GRD vérifiés ligne par ligne",
  },
  {
    classique: "Batterie proposée par défaut",
    beEnergies: "Batterie recommandée uniquement si elle est rentable",
  },
  {
    classique: "Conformité vérifiée tardivement",
    beEnergies: "Conformité anticipée dès la conception",
  },
];

export function ComparisonTable({
  pairs = defaultPairs,
  title = "Deux façons de poser des panneaux. Une seule passe le contrôle.",
}: ComparisonTableProps) {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-be max-w-5xl">
        <SectionLabel>Pourquoi nous différons</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-3 text-balance">
          {title}
        </h2>
        <p className="text-steel mb-10 max-w-2xl">
          Voici quatre points où la différence se joue, entre une installation standard et une installation pensée pour durer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* LEFT — L'installateur classique */}
          <div className="rounded-2xl bg-cloud/40 border border-cloud p-6 md:p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-danger/10">
                <CloseIcon size={16} className="text-danger" />
              </span>
              <h3 className="text-lg font-semibold text-charcoal">
                L&apos;installateur classique
              </h3>
            </div>
            <ul className="space-y-3.5">
              {pairs.map((pair, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm">
                  <CloseIcon
                    size={14}
                    className="text-danger shrink-0 mt-1"
                  />
                  <span className="text-steel">{pair.classique}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Be'energies */}
          <div className="relative rounded-2xl bg-midnight text-white p-6 md:p-7 overflow-hidden shadow-lg">
            <span
              aria-hidden="true"
              className="absolute top-4 right-4 w-2 h-2 rounded-full bg-amber"
            />
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber/20">
                <CheckIcon size={16} className="text-amber" />
              </span>
              <h3 className="text-lg font-bold text-white">Be&apos;energies</h3>
            </div>
            <ul className="space-y-3.5">
              {pairs.map((pair, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon
                    size={14}
                    className="text-amber shrink-0 mt-1"
                  />
                  <span className="text-white/95">{pair.beEnergies}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="relative shrink-0 w-[88px] h-[88px] rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/img/services/benoit-inspection-tableau.png"
                  alt="Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT"
                  width={176}
                  height={176}
                  sizes="88px"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs leading-relaxed text-white/85">
                Benoît Dezso, ancien inspecteur.
                <br />
                Certifié RESCERT.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pieges-a-eviter/"
            className="inline-flex items-center gap-2 text-sm font-medium text-midnight underline underline-offset-4 decoration-amber/60 hover:decoration-amber transition-colors"
          >
            Voir la grille complète, chapitre par chapitre
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
