import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { FAQSection } from "@/components/sections/FAQSection";
import { CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Solutions énergétiques pour professionnels et entreprises",
  description:
    "Panneaux solaires, bornes de recharge, conformité électrique pour entreprises, syndics et collectivités en Belgique. Un seul interlocuteur technique, du dimensionnement au contrôle.",
  path: "/pro/",
});

const advantages = [
  {
    title: "Un seul interlocuteur",
    description:
      "De l\u0027étude technique au contrôle de conformité. Pas de sous-traitance en cascade, pas de dilution de responsabilité.",
  },
  {
    title: "Dimensionnement technique, pas commercial",
    description:
      "Benoît calcule vos besoins réels. Pas de surdimensionnement pour gonfler la facture. Chaque kWc est justifié par votre consommation.",
  },
  {
    title: "Conformité garantie dès le premier contrôle",
    description:
      "Ancien inspecteur en installation électrique et certifié RESCERT, Benoît conçoit chaque installation pour passer le contrôle du premier coup. Zéro surprise, zéro frais supplémentaires.",
  },
  {
    title: "Accompagnement administratif complet",
    description:
      "Primes, autorisations, déclarations, raccordement : nous gérons les démarches pour que vous puissiez vous concentrer sur votre activité.",
  },
];

const useCases = [
  {
    title: "PME industrielle",
    location: "Nivelles",
    description:
      "Installation de 30 kWc sur toiture plate avec optimiseurs de puissance. Dimensionnement basé sur le profil de consommation réel de l\u0027entreprise, pas sur une estimation standard.",
    keyFigure: "Retour sur investissement < 5 ans",
    keyResult: "Réduction de 40% de la facture énergétique",
  },
  {
    title: "Syndic d\u0027immeuble",
    location: "Bruxelles",
    description:
      "Installation de 8 bornes de recharge en parking souterrain. Conformité triphasé Sibelga, gestion de charge partagée entre copropriétaires, et comptage individuel.",
    keyFigure: "8 bornes en parking souterrain",
    keyResult: "Gestion de charge partagée conforme",
  },
  {
    title: "Cabinet médical",
    location: "Namur",
    description:
      "Pompe à chaleur Daikin couplée à des panneaux solaires. Autoconsommation optimisée pour les heures d\u0027ouverture du cabinet, avec suivi de performance en temps réel.",
    keyFigure: "Autoconsommation optimisée",
    keyResult: "Chauffage + climatisation solaire",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit énergétique",
    description:
      "Analyse de votre consommation réelle, de votre infrastructure électrique, et de vos objectifs. Nous partons de vos données, pas d\u0027un modèle générique.",
  },
  {
    step: "02",
    title: "Étude technique détaillée",
    description:
      "Dimensionnement précis, choix de matériel professionnel, plan d\u0027implantation. Chaque élément est justifié techniquement et financièrement.",
  },
  {
    step: "03",
    title: "Installation et mise en service",
    description:
      "Équipe interne, respect des délais, coordination avec votre activité. Pas de sous-traitance, pas de mauvaises surprises.",
  },
  {
    step: "04",
    title: "Contrôle et suivi",
    description:
      "Contrôle de conformité, documentation technique complète, suivi de performance. Vous recevez un dossier complet, pas juste une facture.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Quel est le délai pour un projet professionnel ?",
    answer:
      "Le délai dépend de l\u0027ampleur du projet. Pour une installation photovoltaïque standard sur toiture existante, comptez 2 à 4 semaines entre l\u0027audit et la mise en service. Pour un projet plus complexe impliquant des bornes de recharge, une pompe à chaleur, ou des travaux de mise en conformité, le délai peut atteindre 6 à 8 semaines. Nous établissons un planning précis dès la validation de l\u0027étude technique.",
  },
  {
    question: "Travaillez-vous avec des syndics ?",
    answer:
      "Oui, nous avons l\u0027expérience des projets en copropriété. Nous gérons les spécificités techniques des immeubles à appartements : bornes de recharge en parking souterrain, comptage individuel, conformité avec le gestionnaire de réseau, et coordination avec le syndic et le conseil de copropriété. Nous fournissons également la documentation nécessaire pour les assemblées générales.",
  },
  {
    question: "Quelles primes sont disponibles pour les entreprises ?",
    answer:
      "Les primes varient selon la région (Wallonie, Bruxelles, Flandre), le type d\u0027installation, et la taille de votre entreprise. En Wallonie et à Bruxelles, des primes existent pour le photovoltaïque, les bornes de recharge, et les pompes à chaleur. Nous intégrons le calcul des primes dans chaque étude technique et nous gérons l\u0027ensemble du processus administratif pour vous.",
  },
  {
    question: "Pouvez-vous intervenir sans interrompre notre activité ?",
    answer:
      "Oui, c\u0027est un point que nous intégrons systématiquement dans la planification. Nous pouvons travailler le week-end, en dehors des heures d\u0027ouverture, ou par phases pour minimiser l\u0027impact sur votre activité. Le planning d\u0027intervention est défini en amont avec vous et adapté à vos contraintes opérationnelles.",
  },
  {
    question: "Proposez-vous un contrat de maintenance ?",
    answer:
      "Oui, nous proposons des formules de suivi et de maintenance préventive. Cela inclut le monitoring de la production, le nettoyage des panneaux, la vérification des connexions, et l\u0027intervention rapide en cas de baisse de performance. Un système de surveillance bien configuré permet de détecter les anomalies avant qu\u0027elles ne deviennent coûteuses.",
  },
];

export default function ProPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Professionnels" },
        ]}
      />

      {/* Hero */}
      <HeroSection
        headline="Un partenaire énergétique pour votre entreprise"
        subheadline="PME, syndics, gestionnaires de biens, collectivités : Benoît Dezso conçoit et réalise vos installations avec la même rigueur qu&apos;il appliquait en tant qu&apos;inspecteur. Un seul interlocuteur technique pour des projets conformes, dimensionnés juste, et rentables."
        ctaLabel="Demander une étude sur mesure"
        ctaHref="/contact/"
        variant="compact"
      />

      {/* Pourquoi les professionnels nous choisissent */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center">
            Pourquoi les professionnels nous choisissent
          </h2>
          <p className="mt-4 text-center text-steel max-w-2xl mx-auto">
            Ce qui fait la différence avec Be&apos;energies, ce n&apos;est pas le discours commercial.
            C&apos;est la rigueur technique d&apos;un ancien inspecteur appliquée à chaque projet.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-white rounded-xl border border-cloud p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-amber/15 flex items-center justify-center">
                    <CheckIcon size={16} className="text-amber" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] text-midnight">
                      {advantage.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos services pour les professionnels */}
      <section className="section-padding">
        <div className="container-be">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center">
            Nos services pour les professionnels
          </h2>
          <p className="mt-4 text-center text-steel max-w-2xl mx-auto mb-10">
            Chaque projet professionnel a ses contraintes : budget, délais, conformité réglementaire,
            continuité d&apos;activité. Nous adaptons nos services à votre contexte, pas l&apos;inverse.
          </p>
        </div>
        <ServiceCardGrid />
      </section>

      {/* Cas concrets */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center">
            Cas concrets
          </h2>
          <p className="mt-4 text-center text-steel max-w-2xl mx-auto">
            Des projets réels, dimensionnés sur mesure, conformes du premier coup.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white rounded-xl border border-cloud overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm text-steel mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber" />
                    {useCase.location}
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] text-midnight">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-sm text-charcoal leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="mt-5 pt-5 border-t border-cloud space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckIcon size={14} className="text-amber shrink-0" />
                      <span className="text-midnight font-medium">{useCase.keyFigure}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckIcon size={14} className="text-amber shrink-0" />
                      <span className="text-midnight font-medium">{useCase.keyResult}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche pour les projets professionnels */}
      <section className="section-padding bg-midnight">
        <div className="container-be">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-center">
            Notre approche pour les projets professionnels
          </h2>
          <p className="mt-4 text-center text-silver max-w-2xl mx-auto">
            Un processus structuré, transparent, et adapté aux exigences des professionnels.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-4xl font-[family-name:var(--font-heading)] text-amber/30 mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-silver leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={faqItems}
        title="Questions fréquentes -- Projets professionnels"
      />

      {/* CTA */}
      <CTADiagnostic
        title="Un projet énergétique pour votre entreprise ?"
        description="Benoît analyse votre infrastructure et vos besoins. Étude technique gratuite, sans engagement."
        ctaLabel="Demander une étude sur mesure"
        variant="dark"
      />
    </>
  );
}
