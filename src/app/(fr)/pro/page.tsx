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
  title: "Solutions energetiques pour professionnels et entreprises",
  description:
    "Panneaux solaires, bornes de recharge, conformite electrique pour entreprises, syndics et collectivites en Belgique. Un seul interlocuteur technique, du dimensionnement au controle.",
  path: "/pro/",
});

const advantages = [
  {
    title: "Un seul interlocuteur",
    description:
      "De l\u0027etude technique au controle de conformite. Pas de sous-traitance en cascade, pas de dilution de responsabilite.",
  },
  {
    title: "Dimensionnement technique, pas commercial",
    description:
      "Benoit calcule vos besoins reels. Pas de surdimensionnement pour gonfler la facture. Chaque kWc est justifie par votre consommation.",
  },
  {
    title: "Conformite garantie des le premier controle",
    description:
      "Ancien inspecteur RESCERT, Benoit concoit chaque installation pour passer le controle du premier coup. Zero surprise, zero frais supplementaires.",
  },
  {
    title: "Accompagnement administratif complet",
    description:
      "Primes, autorisations, declarations, raccordement : nous gerons les demarches pour que vous puissiez vous concentrer sur votre activite.",
  },
];

const useCases = [
  {
    title: "PME industrielle",
    location: "Nivelles",
    description:
      "Installation de 30 kWc sur toiture plate avec optimiseurs de puissance. Dimensionnement base sur le profil de consommation reel de l\u0027entreprise, pas sur une estimation standard.",
    keyFigure: "Retour sur investissement < 5 ans",
    keyResult: "Reduction de 40% de la facture energetique",
  },
  {
    title: "Syndic d\u0027immeuble",
    location: "Bruxelles",
    description:
      "Installation de 8 bornes de recharge en parking souterrain. Conformite triphase Sibelga, gestion de charge partagee entre copropietaires, et comptage individuel.",
    keyFigure: "8 bornes en parking souterrain",
    keyResult: "Gestion de charge partagee conforme",
  },
  {
    title: "Cabinet medical",
    location: "Namur",
    description:
      "Pompe a chaleur Daikin couplee a des panneaux solaires. Autoconsommation optimisee pour les heures d\u0027ouverture du cabinet, avec suivi de performance en temps reel.",
    keyFigure: "Autoconsommation optimisee",
    keyResult: "Chauffage + climatisation solaire",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit energetique",
    description:
      "Analyse de votre consommation reelle, de votre infrastructure electrique, et de vos objectifs. Nous partons de vos donnees, pas d\u0027un modele generique.",
  },
  {
    step: "02",
    title: "Etude technique detaillee",
    description:
      "Dimensionnement precis, choix de materiel professionnel, plan d\u0027implantation. Chaque element est justifie techniquement et financierement.",
  },
  {
    step: "03",
    title: "Installation et mise en service",
    description:
      "Equipe interne, respect des delais, coordination avec votre activite. Pas de sous-traitance, pas de mauvaises surprises.",
  },
  {
    step: "04",
    title: "Controle et suivi",
    description:
      "Controle de conformite, documentation technique complete, suivi de performance. Vous recevez un dossier complet, pas juste une facture.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Quel est le delai pour un projet professionnel ?",
    answer:
      "Le delai depend de l\u0027ampleur du projet. Pour une installation photovoltaique standard sur toiture existante, comptez 2 a 4 semaines entre l\u0027audit et la mise en service. Pour un projet plus complexe impliquant des bornes de recharge, une pompe a chaleur, ou des travaux de mise en conformite, le delai peut atteindre 6 a 8 semaines. Nous etablissons un planning precis des la validation de l\u0027etude technique.",
  },
  {
    question: "Travaillez-vous avec des syndics ?",
    answer:
      "Oui, nous avons l\u0027experience des projets en copropriete. Nous gerons les specificites techniques des immeubles a appartements : bornes de recharge en parking souterrain, comptage individuel, conformite avec le gestionnaire de reseau, et coordination avec le syndic et le conseil de copropriete. Nous fournissons egalement la documentation necessaire pour les assemblees generales.",
  },
  {
    question: "Quelles primes sont disponibles pour les entreprises ?",
    answer:
      "Les primes varient selon la region (Wallonie, Bruxelles, Flandre), le type d\u0027installation, et la taille de votre entreprise. En Wallonie et a Bruxelles, des primes existent pour le photovoltaique, les bornes de recharge, et les pompes a chaleur. Nous integrons le calcul des primes dans chaque etude technique et nous gerons l\u0027ensemble du processus administratif pour vous.",
  },
  {
    question: "Pouvez-vous intervenir sans interrompre notre activite ?",
    answer:
      "Oui, c\u0027est un point que nous integrons systematiquement dans la planification. Nous pouvons travailler le week-end, en dehors des heures d\u0027ouverture, ou par phases pour minimiser l\u0027impact sur votre activite. Le planning d\u0027intervention est defini en amont avec vous et adapte a vos contraintes operationnelles.",
  },
  {
    question: "Proposez-vous un contrat de maintenance ?",
    answer:
      "Oui, nous proposons des formules de suivi et de maintenance preventive. Cela inclut le monitoring de la production, le nettoyage des panneaux, la verification des connexions, et l\u0027intervention rapide en cas de baisse de performance. Un systeme de surveillance bien configure permet de detecter les anomalies avant qu\u0027elles ne deviennent couteuses.",
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
        headline="Un partenaire energetique pour votre entreprise"
        subheadline="PME, syndics, gestionnaires de biens, collectivites : Benoit Dezso concoit et realise vos installations avec la meme rigueur qu&apos;il appliquait en tant qu&apos;inspecteur. Un seul interlocuteur technique pour des projets conformes, dimensionnes juste, et rentables."
        ctaLabel="Demander une etude sur mesure"
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
            Ce qui fait la difference avec Be&apos;energies, ce n&apos;est pas le discours commercial.
            C&apos;est la rigueur technique d&apos;un ancien inspecteur appliquee a chaque projet.
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
            Chaque projet professionnel a ses contraintes : budget, delais, conformite reglementaire,
            continuite d&apos;activite. Nous adaptons nos services a votre contexte, pas l&apos;inverse.
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
            Des projets reels, dimensionnes sur mesure, conformes du premier coup.
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
            Un processus structure, transparent, et adapte aux exigences des professionnels.
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
        title="Questions frequentes -- Projets professionnels"
      />

      {/* CTA */}
      <CTADiagnostic
        title="Un projet energetique pour votre entreprise ?"
        description="Benoit analyse votre infrastructure et vos besoins. Etude technique gratuite, sans engagement."
        ctaLabel="Demander une etude sur mesure"
        variant="dark"
      />
    </>
  );
}
