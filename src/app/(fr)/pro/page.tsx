import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema, personSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { FAQSection } from "@/components/sections/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  MailIcon,
  SolarIcon,
  ComplianceIcon,
  AlertTriangleIcon,
  StarIcon,
  getServiceIcon,
} from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Espace Pro : solutions énergétiques pour PME, entreprises et institutions",
  description:
    "PME, grandes entreprises, syndics et institutions en Belgique et au Luxembourg : panneaux solaires, batteries, bornes de recharge, conformité électrique. Étude sur mesure par Benoît Dezso, certifié RESCERT.",
  path: "/pro/",
});

// Services dispo pour les pros (l'ancien site n'incluait pas pompes-à-chaleur sur l'espace pro)
const PRO_SERVICE_SLUGS = [
  "panneaux-photovoltaiques",
  "batteries-domestiques",
  "bornes-de-recharge",
  "conformite-electrique",
];

const proServices = services.filter(
  (s) => PRO_SERVICE_SLUGS.includes(s.slug) && !s.hidden,
);

// 4 raisons ancrées dans le terrain d'inspecteur - voix Benoît Dezso
const reasons: { icon: typeof SolarIcon; title: string; body: string }[] = [
  {
    icon: SolarIcon,
    title: "Lecture courbe de charge avant lecture toiture",
    body: "Le dimensionnement part de votre profil de consommation horaire, pas d'une surface disponible. C'est la seule façon d'éviter le PV qui produit quand l'entreprise ne consomme pas.",
  },
  {
    icon: ComplianceIcon,
    title: "Conformité RGIE pensée dès l'étude",
    body: "Un PV pro qui passe le contrôle au premier essai, c'est une coordination tableau, protection AC et parafoudre DC pensée avant chiffrage, pas découverte le jour de la pose.",
  },
  {
    icon: StarIcon,
    title: "Un seul interlocuteur, du diagnostic au passage du contrôle",
    body: "Vous ne courez pas après trois sous-traitants. Étude, devis, pose, déclaration GRD, contrôle organisme agréé : Benoît reste le point de contact unique.",
  },
  {
    icon: AlertTriangleIcon,
    title: "Anciennement inspecteur, donc anciennement client de l'erreur",
    body: "J'ai inspecté des installations PME qui ne tenaient pas le contrôle. Aujourd'hui je conçois en sens inverse : je commence par ce qui aurait fait échouer le contrôle, je le règle, puis je conçois autour.",
  },
];

interface ProUseCase {
  sector: string;
  scope: string;
  body: string;
}

const useCases: ProUseCase[] = [
  {
    sector: "PME logistique",
    scope: "Entrepôt en zoning wallon",
    body: "PME logistique en zoning wallon. Toiture entrepôt 1 200 m², profil de consommation très diurne (8h-18h). Installation type : 50 à 80 kWc en surimposition, sans batterie (consommation diurne suffit), onduleurs string redondants. Le ROI ressort généralement entre 4 et 6 ans dans ce profil, parce que l'autoconsommation directe dépasse 80 %. La déduction pour investissement 40 % accélère encore l'amortissement.",
  },
  {
    sector: "PME agro-alimentaire",
    scope: "Atelier avec poste de froid",
    body: "PME agro-alimentaire ou atelier avec poste de froid. Consommation diurne soutenue, courbe quasi-constante. Installation type : 30 à 60 kWc, onduleur hybride si la chambre froide tourne aussi de nuit (batterie ciblée), monitoring détaillé pour suivre la part PV utilisée par le froid. Le ROI sectoriel observé tourne autour de 5 à 7 ans, selon le ratio chambre froide / consommation totale.",
  },
  {
    sector: "Tertiaire",
    scope: "Bureau, cabinet libéral, immeuble tertiaire",
    body: "Bureau, cabinet libéral, immeuble tertiaire. Consommation très tertiaire (8h-19h, week-end faible), souvent bornes VE en parallèle. Installation type : 20 à 40 kWc, intégration avec bornes intelligentes, monitoring partagé locataire / propriétaire. Le ROI dépend largement de l'arbitrage usage privé vs accessible au public : sur usage privé pur, généralement 5 à 7 ans avec la déduction pour investissement et la TVA 6 % si éligible.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit énergétique",
    description:
      "Analyse de votre consommation réelle, de votre infrastructure électrique, et de vos objectifs. Nous partons de vos données, pas d'un modèle générique.",
  },
  {
    step: "02",
    title: "Étude technique détaillée",
    description:
      "Dimensionnement précis, choix de matériel professionnel, plan d'implantation. Chaque élément est justifié techniquement et financièrement.",
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
      "Le délai dépend de l'ampleur du projet. Pour une installation photovoltaïque standard sur toiture existante, comptez 2 à 4 semaines entre l'audit et la mise en service. Pour un projet plus complexe (bornes de recharge, pompe à chaleur, mise en conformité), le délai peut atteindre 6 à 8 semaines. Nous établissons un planning précis dès la validation de l'étude technique.",
  },
  {
    question: "Travaillez-vous avec des syndics ?",
    answer:
      "Oui. Nous gérons les spécificités techniques des immeubles à appartements : bornes de recharge en parking souterrain, comptage individuel, conformité avec le gestionnaire de réseau, coordination avec le syndic et le conseil de copropriété. Nous fournissons aussi la documentation nécessaire pour les assemblées générales.",
  },
  {
    question: "Quelles primes sont disponibles pour les entreprises ?",
    answer:
      "Les primes varient selon la région (Wallonie, Bruxelles, Flandre), le type d'installation et la taille de votre entreprise. Nous intégrons systématiquement le calcul des primes dans l'étude technique et gérons l'ensemble du processus administratif pour vous.",
  },
  {
    question: "Intervenez-vous au Luxembourg ?",
    answer:
      "Oui, nous intervenons sur certains projets professionnels au Grand-Duché de Luxembourg. Contactez-nous pour vérifier que votre localisation entre dans notre zone d'intervention et obtenir un devis adapté à la réglementation luxembourgeoise.",
  },
  {
    question: "Pouvez-vous intervenir sans interrompre notre activité ?",
    answer:
      "Oui, c'est un point que nous intégrons systématiquement dans la planification. Nous pouvons travailler le week-end, en dehors des heures d'ouverture, ou par phases pour minimiser l'impact sur votre activité. Le planning d'intervention est défini en amont avec vous.",
  },
  {
    question: "Proposez-vous un contrat de maintenance ?",
    answer:
      "Oui. Cela inclut le monitoring de la production, le nettoyage des panneaux, la vérification des connexions et l'intervention rapide en cas de baisse de performance. Un système de surveillance bien configuré permet de détecter les anomalies avant qu'elles ne deviennent coûteuses.",
  },
];

export default function ProPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={personSchema()} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Espace Pro" },
        ]}
      />

      {/* Hero - direct quote from the founder, on a dark surface */}
      <section className="relative overflow-hidden bg-midnight">
        {/* Background photo (industrial PV roof) - subtle, behind dark overlay */}
        <Image
          src="/img/pro/hero.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,18,32,0.75) 0%, rgba(12,18,32,0.82) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, var(--brand-amber) 0%, transparent 60%)",
          }}
        />
        <div className="container-be relative z-10 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-amber" />
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-light">
                  Espace Pro · PME · Syndics · Institutions
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-[family-name:var(--font-heading)] text-white leading-[1.1] text-balance">
                Optimisez votre retour sur investissement énergétique
              </h1>
              <p className="mt-7 text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl">
                PME, grandes entreprises, syndics et institutions en Belgique
                et au Luxembourg : un seul interlocuteur technique pour des
                installations conformes, dimensionnées juste et rentables.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4">
                <Link
                  href="/contact/?type=pro-etude"
                  className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-7 py-3.5 rounded-xl transition-colors text-[15px] whitespace-nowrap"
                >
                  Demander une étude sur mesure
                  <ArrowRightIcon size={17} />
                </Link>
                <p className="text-sm text-white/70 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>Préférez parler directement ?</span>
                  <a
                    href={`tel:${siteConfig.contact.phones[0].raw}`}
                    className="inline-flex items-center gap-1.5 text-amber-light hover:text-amber underline-offset-4 hover:underline"
                  >
                    <PhoneIcon size={14} />
                    <span className="data-figure">
                      {siteConfig.contact.phones[0].label}
                    </span>
                  </a>
                  <span className="text-xs text-white/50 hidden sm:inline">Lun – Ven : 8 h – 17 h</span>
                  <span aria-hidden="true" className="text-white/30">·</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-1.5 text-amber-light hover:text-amber underline-offset-4 hover:underline"
                  >
                    <MailIcon size={14} />
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/85">
                {[
                  "Visite technique réelle",
                  "Étude sur mesure",
                  "Un seul interlocuteur expert",
                ].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <CheckIcon size={14} className="text-amber-light shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Founder quote card */}
            <figure className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-8 backdrop-blur-sm">
              <span
                className="text-amber text-5xl leading-none font-[family-name:var(--font-heading)] block mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="text-white/90 text-[15px] md:text-base leading-relaxed">
                Sur les chantiers professionnels, ce qui plante le plus souvent
                c&apos;est le côté AC après compteur. Le PV est calibré pour la
                production, pas pour le profil de consommation de la PME.
                Résultat : on installe une puissance qui n&apos;est jamais
                autoconsommée et un onduleur qui se traîne. Mon premier
                réflexe, c&apos;est de regarder la courbe de charge avant de
                regarder la toiture.
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber/30 shrink-0">
                  <Image
                    src="/img/misc/worker.webp"
                    alt={siteConfig.founder.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {siteConfig.founder.name}
                  </p>
                  <p className="text-amber-light text-xs">
                    Directeur de Be&apos;energies · Certifié RESCERT
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber to-transparent opacity-40"
          aria-hidden="true"
        />
      </section>

      {/* Pro services */}
      <section className="section-padding">
        <div className="container-be">
          <div className="section-label">
            <span>Nos services pour les pros</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
            Cinq expertises, un seul interlocuteur
          </h2>
          <p className="mt-4 text-charcoal max-w-2xl">
            Chaque projet professionnel a ses contraintes : budget, délais,
            conformité réglementaire, continuité d&apos;activité. Nous adaptons
            nos services à votre contexte, pas l&apos;inverse.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {proServices.map((s) => {
              const Icon = getServiceIcon(s.icon);
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="group card p-6 hover:border-amber/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber/10 text-amber-dark">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-semibold text-midnight text-[17px]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-steel leading-relaxed">
                    {s.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-dark group-hover:text-amber transition-colors">
                    Voir le service
                    <ArrowRightIcon size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Be'energies for your company - 7 reasons */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <div className="section-label">
            <span>Pourquoi Be&apos;energies</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance max-w-2xl">
            Pourquoi choisir Be&apos;energies pour votre entreprise ?
          </h2>
          <p className="mt-4 text-charcoal max-w-2xl">
            Ce qui fait la différence : la rigueur technique d&apos;un ancien
            inspecteur appliquée à chaque projet, du dimensionnement au
            contrôle.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className="bg-white rounded-2xl border border-cloud p-6 md:p-7 flex flex-col hover:border-amber/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber/10 text-amber-dark flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="stat-value text-xs font-bold text-amber-dark tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-midnight text-lg leading-snug mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-charcoal leading-relaxed">
                    {r.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases - structured studies (real numbers stay confidential until shared in private) */}
      <section className="section-padding">
        <div className="container-be">
          <div className="section-label">
            <span>Cas concrets</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
            Trois profils B2B représentatifs
          </h2>
          <p className="mt-4 text-charcoal max-w-2xl">
            Plutôt que des chiffres clients confidentiels, voici les
            fourchettes de dimensionnement et de ROI que nous observons
            réellement sur ces profils sectoriels. À adapter à votre courbe de
            charge.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {useCases.map((useCase, idx) => (
              <article
                key={`${useCase.sector}-${idx}`}
                className="bg-white rounded-2xl border border-cloud overflow-hidden flex flex-col"
              >
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  {/* Sector chip */}
                  <div className="flex items-center justify-end mb-3">
                    <span className="text-[11px] font-medium text-amber-dark bg-amber/8 border border-amber/20 px-2 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wider">
                      {useCase.sector}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-heading)] text-midnight text-lg leading-snug">
                    {useCase.scope}
                  </h3>

                  <p className="mt-4 text-[13.5px] text-charcoal leading-relaxed">
                    {useCase.body}
                  </p>

                  <p className="mt-5 pt-4 border-t border-cloud text-[11.5px] text-steel leading-relaxed">
                    Données indicatives. Le ROI réel d&apos;un projet B2B se
                    calcule sur la base d&apos;une étude technique et d&apos;un
                    audit de consommation.{" "}
                    <Link
                      href="/devis-analyse/"
                      className="text-amber-dark hover:text-amber underline underline-offset-2"
                    >
                      Demander une analyse
                    </Link>
                    .
                  </p>

                  <Link
                    href="/contact/?type=pro-etude"
                    className="mt-auto pt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-amber-dark hover:text-amber transition-colors"
                  >
                    Demander une étude similaire
                    <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client sector wall - anonymized B2B breadth proof */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <div className="section-label">
            <span>Ils nous font confiance</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance">
            Quelques secteurs où nous intervenons en B2B
          </h2>
          <p className="mt-4 text-charcoal max-w-2xl">
            Nous ne diffusons pas les noms de nos clients professionnels. Voici
            les profils que nous accompagnons régulièrement.
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "PME agro-alimentaire, Hainaut",
              "Cabinet médical, Brabant wallon",
              "Atelier mécanique, Province de Liège",
              "Coopérative agricole, Namur",
              "Petite copropriété tertiaire, Bruxelles",
              "Cabinet d'avocats, Wavre",
            ].map((label) => (
              <li
                key={label}
                className="bg-white rounded-xl border border-cloud px-4 py-3.5 flex items-center gap-3 text-[14px] text-charcoal"
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-amber shrink-0"
                  aria-hidden="true"
                />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-steel">
            Liste illustrative des secteurs, non exhaustive.
          </p>
        </div>
      </section>

      {/* Process timeline (dark) */}
      <section className="section-padding bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 texture-dots" aria-hidden="true" />
        <div className="container-be relative z-10">
          <div className="section-label section-label-dark">
            <span>Notre approche</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-balance">
            Un processus structuré, transparent, adapté aux pros
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative p-6 rounded-xl border border-charcoal bg-slate/50"
              >
                <span className="stat-value text-3xl font-bold text-amber/30 block mb-3">
                  {step.step}
                </span>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-charcoal"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct lines (visible reassurance for B2B who prefer phone) */}
      <section className="py-12 md:py-14 bg-ivory">
        <div className="container-be">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center max-w-4xl mx-auto bg-white border border-cloud rounded-2xl p-6 md:p-7">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-2">
                Ligne directe
              </p>
              <h3 className="text-lg md:text-xl font-[family-name:var(--font-heading)] text-midnight leading-snug">
                Vous préférez parler à un humain avant d&apos;envoyer un mail ?
              </h3>
              <p className="mt-2 text-sm text-charcoal leading-relaxed">
                Appelez l&apos;une de nos lignes directes. C&apos;est Benoît ou
                l&apos;un de ses associés qui répond.
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-steel">
              {siteConfig.contact.phones.map((m) => (
                <li key={m.raw}>
                  <a
                    href={`tel:${m.raw}`}
                    className="inline-flex items-center gap-2 text-amber-dark hover:text-amber underline-offset-4 hover:underline"
                  >
                    <PhoneIcon size={15} />
                    <span className="data-figure">{m.label}</span>
                    <span className="text-xs text-steel/80 ml-1 no-underline hidden sm:inline">Lun – Ven : 8 h – 17 h</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-amber-dark hover:text-amber underline-offset-4 hover:underline"
                >
                  <MailIcon size={15} />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQSection
        items={faqItems}
        title="Questions fréquentes : projets professionnels"
      />

      <CTADiagnostic
        title="Un projet énergétique pour votre entreprise ?"
        description="Benoît analyse votre infrastructure et vos besoins. Étude technique gratuite, sans engagement, livrée sous 48 h après visite sur site."
        ctaLabel="Demander une étude sur mesure"
        ctaHref="/contact/?type=pro-etude"
        variant="dark"
      />
    </>
  );
}
