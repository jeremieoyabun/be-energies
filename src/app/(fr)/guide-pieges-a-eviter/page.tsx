import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Guide gratuit -- Les 7 pièges à éviter avant de signer",
  description:
    "Téléchargez le guide gratuit par Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT. 7 pièges concrets, la checklist des 10 questions à poser, et les vrais chiffres 2026. PDF immédiat.",
  path: "/guide-pieges-a-eviter/",
});

const guideFaq: FAQItem[] = [
  {
    question: "Pourquoi ce guide est-il gratuit ?",
    answer:
      "Parce qu'un client bien informé fait de meilleurs choix. Et parce que les installateurs qui surfacturent ou dimensionnent mal ne supportent pas qu'on explique leurs pratiques. Ce guide est notre meilleure carte de visite.",
  },
  {
    question: "Qui a rédigé ce guide ?",
    answer:
      "Benoît Dezso, fondateur de Be'energies, ancien inspecteur en installation électrique et certifié RESCERT. Il a constaté ces 7 pièges sur le terrain, dans des centaines d'installations qu'il a inspectées.",
  },
  {
    question: "Est-ce que je vais recevoir du spam ?",
    answer:
      "Non. Vous recevez le guide par email, puis éventuellement 2-3 conseils complémentaires. Désinscription en un clic à tout moment. On ne revend pas vos données.",
  },
];

export default function LeadMagnetPage() {
  const piegesPreviews = [
    { number: 1, title: "Le retour sur investissement en 2 ans", teaser: "Mathématiquement impossible en 2026. Voici pourquoi." },
    { number: 2, title: "L'installation gratuite", teaser: "Un financement prédatoire déguisé en cadeau." },
    { number: 3, title: "Le surdimensionnement", teaser: "Plus de panneaux = plus de marge pour l'installateur, pas pour vous." },
    { number: 4, title: "Le devis sans visite technique", teaser: "Un devis par téléphone est une devinette, pas une proposition." },
    { number: 5, title: "L'onduleur sous-dimensionné", teaser: "10-20% de production perdue sans que vous le sachiez." },
    { number: 6, title: "La batterie dont vous n'avez pas besoin", teaser: "5 000 à 8 000 EUR pour un équipement parfois non rentable." },
    { number: 7, title: "L'installation non conforme", teaser: "Le risque invisible qui annule votre assurance." },
  ];

  const guideIncludes = [
    "Les 7 pièges détaillés avec exemples réels",
    "La checklist des 10 questions à poser à votre installateur",
    "Les vrais chiffres de rentabilité 2026 (tarifs prosumer, injection, autoconsommation)",
    "Le comparatif des pratiques courantes vs. les bonnes pratiques",
    "Les signaux d'alerte à détecter dans un devis",
  ];

  return (
    <>
      <JsonLd data={faqSchema(guideFaq)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Guide gratuit" },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-midnight">
        <div className="container-be max-w-4xl">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-amber text-sm font-semibold uppercase tracking-wider mb-3">
                Guide gratuit — PDF immédiat
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-white leading-tight">
                Les 7 pièges à éviter avant de signer avec un installateur
              </h1>
              <p className="mt-5 text-lg text-silver leading-relaxed">
                Rédigé par Benoît Dezso, ancien inspecteur en installation électrique,
                certifié RESCERT. Il a constaté ces 7 erreurs des centaines de fois
                sur le terrain. Ce guide vous montre exactement quoi vérifier
                avant de signer quoi que ce soit.
              </p>
              <ul className="mt-6 space-y-2">
                {guideIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-silver text-sm">
                    <CheckIcon size={14} className="text-amber shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form card */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <p className="text-midnight font-semibold text-center mb-1">
                  Recevez le guide par email
                </p>
                <p className="text-steel text-xs text-center mb-6">
                  PDF de 12 pages + checklist imprimable
                </p>
                <form className="space-y-3">
                  <div>
                    <label htmlFor="lead-name" className="sr-only">Prénom</label>
                    <input
                      type="text"
                      id="lead-name"
                      name="name"
                      placeholder="Votre prénom"
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="lead-email"
                      name="email"
                      placeholder="Votre adresse email"
                      required
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber hover:bg-amber-dark text-midnight font-semibold py-3.5 rounded-lg transition-colors text-sm"
                  >
                    Télécharger le guide gratuit
                  </button>
                  <p className="text-xs text-steel text-center">
                    Pas de spam. Désinscription en un clic.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 pièges preview */}
      <section className="section-padding">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-3">
            Ce que vous allez découvrir
          </h2>
          <p className="text-steel text-center mb-10 max-w-xl mx-auto">
            7 pratiques courantes dans le marché belge du photovoltaïque.
            Certaines sont des erreurs honnêtes, d&apos;autres sont délibérées.
            Les deux vous coûtent cher.
          </p>
          <div className="space-y-4">
            {piegesPreviews.map((piege) => (
              <div
                key={piege.number}
                className="flex items-start gap-4 p-5 border border-cloud rounded-xl hover:border-amber/40 transition-colors"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center bg-amber/10 text-amber font-bold rounded-full text-sm">
                  {piege.number}
                </span>
                <div>
                  <h3 className="font-semibold text-midnight">
                    {piege.title}
                  </h3>
                  <p className="text-sm text-steel mt-0.5">
                    {piege.teaser}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who wrote this */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-16 h-16 bg-midnight rounded-full flex items-center justify-center text-amber font-bold text-xl font-[family-name:var(--font-heading)]">
              BD
            </div>
            <div>
              <h2 className="text-xl font-[family-name:var(--font-heading)] text-midnight mb-2">
                Pourquoi j&apos;ai écrit ce guide
              </h2>
              <p className="text-charcoal leading-relaxed">
                Pendant mes années d&apos;inspection, j&apos;ai vu des installations
                surdimensionnées, des calculs de rentabilité gonflés, des onduleurs
                sous-dimensionnés, et des tableaux électriques non conformes. Les
                propriétaires ne savaient pas quoi vérifier. Ce guide contient
                exactement ce que j&apos;aurais voulu que chaque client lise avant
                de signer.
              </p>
              <p className="text-steel text-sm mt-2">
                — Benoît Dezso, ancien inspecteur, certifié RESCERT, fondateur de Be&apos;energies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="section-padding">
        <div className="container-be max-w-md text-center">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-4">
            Prêt à éviter les erreurs qui coûtent cher ?
          </h2>
          <form className="space-y-3">
            <div>
              <label htmlFor="lead-email-2" className="sr-only">Email</label>
              <input
                type="email"
                id="lead-email-2"
                name="email"
                placeholder="Votre adresse email"
                required
                className="w-full border border-cloud rounded-lg px-4 py-3.5 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors text-center"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber hover:bg-amber-dark text-midnight font-semibold py-4 rounded-lg transition-colors"
            >
              Recevoir le guide gratuit
            </button>
            <p className="text-xs text-steel">
              Gratuit. 12 pages. PDF immédiat. Pas de spam.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
