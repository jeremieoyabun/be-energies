import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon, AlertTriangleIcon } from "@/lib/icons";

interface QuoteCheckCTAProps {
  variant?: "light" | "dark";
  className?: string;
}

const checks = [
  "Hypothèses tarifaires : prix d'électricité, injection, prosumer",
  "Dimensionnement réel face à votre consommation",
  "Choix de matériel, onduleur, protection AC, parafoudre DC",
  "Garanties séparées : produit, rendement, main-d'œuvre",
];

export function QuoteCheckCTA({
  variant = "dark",
  className = "",
}: QuoteCheckCTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding ${
        isDark ? "bg-deep" : "bg-ivory"
      } relative overflow-hidden ${className}`}
    >
      {isDark && <div className="absolute inset-0 texture-dots opacity-60" aria-hidden="true" />}
      <div className="container-be relative z-10 max-w-5xl">
        <div
          className={`rounded-2xl border ${
            isDark
              ? "bg-white/[0.04] border-white/10"
              : "bg-white border-cloud shadow-sm"
          } p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center`}
        >
          <div>
            <div className="flex items-start gap-3 mb-5">
              <AlertTriangleIcon
                size={20}
                className={isDark ? "text-amber" : "text-amber-dark"}
              />
              <span
                className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
                  isDark ? "text-amber-light" : "text-amber-dark"
                }`}
              >
                Avant de signer un devis
              </span>
            </div>

            <h2
              className={`text-2xl md:text-3xl lg:text-[2.25rem] font-[family-name:var(--font-heading)] leading-[1.15] text-balance ${
                isDark ? "text-white" : "text-midnight"
              }`}
            >
              Avant de signer un devis solaire, faites-le vérifier par un ancien inspecteur.
            </h2>

            <p
              className={`mt-5 text-[15px] md:text-base leading-relaxed max-w-2xl ${
                isDark ? "text-silver/90" : "text-charcoal"
              }`}
            >
              Envoyez-nous votre devis (PDF, photo, peu importe). Benoît l&apos;analyse
              personnellement et vous renvoie un avis écrit, sans pression commerciale.
              Vous gardez la décision : on vous donne juste les éléments pour la prendre
              en connaissance de cause.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {checks.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2.5 text-sm ${
                    isDark ? "text-silver/85" : "text-charcoal"
                  }`}
                >
                  <CheckIcon
                    size={15}
                    className="shrink-0 mt-0.5 text-success"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 items-start sm:items-center">
              <Link
                href="/devis-analyse/"
                className="cta-glow inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                Faire analyser mon devis
                <ArrowRightIcon size={17} />
              </Link>
              <span
                className={`text-xs ${
                  isDark ? "text-silver/60" : "text-steel"
                }`}
              >
                Réponse écrite sous 48 h · Pas de pression commerciale
              </span>
            </div>
          </div>

          {/* Illustration — character with magnifying glass */}
          <div className="hidden md:flex items-center justify-center shrink-0 w-[180px] lg:w-[210px]">
            <Image
              src="/img/searching.png"
              alt="Personnage à la loupe qui inspecte un devis"
              width={210}
              height={357}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
