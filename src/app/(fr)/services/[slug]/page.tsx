import { notFound } from "next/navigation";
import Image from "next/image";
import { services, getServiceBySlugFr, getRelatedServices } from "@/data/services";
import { getPiegesForService } from "@/data/pieges";
import { getTestimonialsForService } from "@/data/testimonials";
import { getRealizationsForService } from "@/data/realizations";
import { faqByService } from "@/data/faq";
import { getFrenchCities } from "@/data/cities";
import { getServiceContent } from "@/data/service-content";
import { generateServiceMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, howToSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { PiegesCarousel } from "@/components/sections/PiegesCarousel";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { RealizationGrid } from "@/components/sections/RealizationGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { QuoteCheckCTA } from "@/components/sections/QuoteCheckCTA";
import { PDFLeadMagnetCard } from "@/components/sections/PDFLeadMagnetCard";
import { DataSources } from "@/components/sections/DataSources";
import { ServiceTOC } from "@/components/sections/ServiceTOC";
import { GlossaryInline } from "@/components/sections/GlossaryInline";
import { ReadMore } from "@/components/ReadMore";
import { PVRegimesSummary } from "@/components/sections/PVRegimesSummary";
import { WarrantyLadder } from "@/components/sections/WarrantyLadder";
import { PVSectionSummary } from "@/components/sections/PVSectionSummary";
import { PVWhatThisMeans } from "@/components/sections/PVWhatThisMeans";
import { PVInlineNextStep } from "@/components/sections/PVInlineNextStep";
import { RentabilityObjection2026 } from "@/components/sections/RentabilityObjection2026";
import { ProofSystem } from "@/components/sections/ProofSystem";
import { PVMethodPanel } from "@/components/sections/PVMethodPanel";
import { PVWarrantyTeaser } from "@/components/sections/PVWarrantyTeaser";
import { MiniDiagnosticCard } from "@/components/sections/MiniDiagnosticCard";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ArrowRightIcon } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon, AlertTriangleIcon } from "@/lib/icons";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Glossary keys to surface per-service at the end of the deep content.
// Keep short and topical: only the terms actually used in the body.
const GLOSSARY_KEYS_BY_SERVICE: Record<string, string[]> = {
  "panneaux-photovoltaiques": [
    "prosumer",
    "grd",
    "autoconsommation",
    "kwc",
    "kwh",
    "impact",
    "onduleur",
    "cwape",
  ],
  "batteries-domestiques": ["prosumer", "impact", "autoconsommation", "kwh"],
  "bornes-de-recharge": ["rgie", "impact", "rescert"],
  "conformite-electrique": ["rescert", "rgie"],
  "pompes-a-chaleur": ["impact", "kwh", "autoconsommation"],
};

/**
 * PV-only scannability augmentations.
 *
 * For each long-form section of the photovoltaic service body, we may inject:
 *   - `summary`     : 3 bullets shown at the top ("En 30 secondes")
 *   - `whatThisMeans`: an amber-bordered "Pour vous, concrètement" callout
 *                     placed after the section body
 *   - `inlineCta`   : a single-row "next step" CTA placed after the body,
 *                     right after a natural decision point
 *
 * Keys match the FR section ids declared in service-content.ts.
 */
const PV_SECTION_AUGMENTATIONS: Record<
  string,
  {
    summary?: string[];
    whatThisMeans?: { title?: string; html: string };
    inlineCta?: { prompt: string; label: string; href: string };
  }
> = {
  "rentabilite-2026": {
    summary: [
      "Sans aide publique, le PV reste l'un des meilleurs placements pour un ménage belge en 2026.",
      "Exemple chiffré : <strong>4,7 kWc, ~9 700 EUR TTC, retour en 5 à 7 ans</strong>.",
      "Rendement annualisé d'environ <strong>12 %</strong>, contre ~2 % pour un compte épargne.",
    ],
    whatThisMeans: {
      html: "Le bon réflexe n'est plus de chasser la prime, mais de vérifier que le <strong>dimensionnement colle à votre consommation réelle</strong>. C'est là que les promesses de retour en 2 ans s'effondrent, et que les calculs honnêtes tiennent.",
    },
    inlineCta: {
      prompt: "Vous voulez vérifier la rentabilité réelle de votre projet ?",
      label: "Demander un calcul personnalisé",
      href: "/contact/",
    },
  },
  "deux-regimes": {
    summary: [
      "<strong>Régime 1 (avant 2024)</strong> : compteur à l'envers maintenu jusqu'au 31/12/2030, tarif prosumer payé annuellement.",
      "<strong>Régime 2 (depuis 2024)</strong> : compteur communicant, pas de prosumer, mais surplus revendu 7 à 46x moins cher.",
      "Dans les deux cas, le dimensionnement reste la variable qui décide de la rentabilité.",
    ],
    whatThisMeans: {
      html: "Si vous êtes en <strong>régime 1</strong>, ne payez pas pour une batterie : le réseau fait déjà le travail gratuitement jusqu'en 2030. Si vous êtes en <strong>régime 2</strong>, chaque kWh autoconsommé vaut 7 à 46 fois plus que ce qu'il rapporterait injecté. Le calcul change tout.",
    },
  },
  "tarif-prosumer": {
    summary: [
      "Le tarif prosumer est un <strong>frais de réseau</strong>, pas une taxe punitive.",
      "Montants 2026 selon votre GRD : entre <strong>81 et 99 EUR/kWe/an</strong> TTC.",
      "Les installations <strong>post-2024 avec compteur communicant ne paient pas</strong> ce tarif.",
    ],
    whatThisMeans: {
      html: "Si vous installez aujourd'hui, le tarif prosumer ne vous concerne pas : vous payez votre consommation réelle, point. Si vous êtes installé avant 2024, le prosumer est intégré au calcul de retour et reste rentable dans la majorité des cas. Demandez les montants exacts de <strong>votre</strong> GRD avant de signer.",
    },
    inlineCta: {
      prompt: "Vous avez déjà un devis avec un calcul prosumer flou ?",
      label: "Faire vérifier mon devis ligne par ligne",
      href: "/devis-analyse/",
    },
  },
  autoconsommation: {
    summary: [
      "Prix d'achat moyen : <strong>~38 c/kWh</strong>. Meilleur tarif d'injection : <strong>5,58 c/kWh</strong>.",
      "Chaque kWh autoconsommé vaut donc <strong>7 à 46x plus</strong> qu'un kWh injecté.",
      "Le choix du fournisseur (et de son tarif d'injection) pèse autant que celui de l'installateur.",
    ],
    whatThisMeans: {
      html: "Le dimensionnement honnête vise <strong>l'autoconsommation maximale</strong>, pas le plus grand nombre de panneaux possible. Un système trop gros vend son surplus à perte. Un système bien calibré couvre votre courbe de charge réelle, heure par heure.",
    },
  },
  "tarif-impact": {
    summary: [
      "Trois plages : <strong>ECO, MEDIUM, PIC</strong>. Le pic solaire tombe en plein ECO.",
      "Économies CWaPE : <strong>~14 %</strong> en ménage adapté, <strong>jusqu'à 28 %</strong> avec véhicule électrique.",
      "Pour les ~350 000 prosumers encore en régime de compensation : bihoraire classique souvent plus sûr (BeProsumer, mars 2026).",
    ],
    whatThisMeans: {
      html: "Le tarif IMPACT n'est pas une bonne idée par défaut : il dépend de votre courbe de consommation et de votre régime. Avant de basculer, faites simuler les deux scénarios sur <strong>vos</strong> données de comptage. C'est là qu'une batterie commence vraiment à se justifier.",
    },
    inlineCta: {
      prompt: "Vous hésitez entre bihoraire classique et tarif IMPACT ?",
      label: "Simuler les deux sur ma situation",
      href: "/contact/",
    },
  },
};

/**
 * Adds `data-label="<th text>"` to every `<td>` in the rendered HTML so the
 * `.article-prose-mobile-stack` CSS can render labels next to each value on
 * mobile (the desktop layout is untouched).
 *
 * Server-side, runs once at build time. We intentionally keep this regex-based
 * because the body HTML is hand-authored, small, and well-formed.
 */
function labelTableCellsForMobile(html: string): string {
  return html.replace(
    /<table([^>]*)>([\s\S]*?)<\/table>/g,
    (full, tableAttrs, inner) => {
      const headers: string[] = [];
      const headRegex = /<th[^>]*>([\s\S]*?)<\/th>/g;
      let m: RegExpExecArray | null;
      while ((m = headRegex.exec(inner)) !== null) {
        // Strip inner tags from the header text, keep plain text only.
        const text = m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        headers.push(text);
      }
      if (headers.length === 0) return full;
      const labelledInner = inner.replace(
        /<tr>([\s\S]*?)<\/tr>/g,
        (rowFull: string, rowInner: string) => {
          // Skip header rows (those that contain <th>).
          if (/<th[\s>]/.test(rowInner)) return rowFull;
          let cellIdx = 0;
          const newRow = rowInner.replace(
            /<td([^>]*)>/g,
            (_tdFull: string, tdAttrs: string) => {
              const label = headers[cellIdx] ?? "";
              cellIdx += 1;
              // Don't double-label if already present.
              if (/data-label=/.test(tdAttrs)) return `<td${tdAttrs}>`;
              return `<td${tdAttrs} data-label="${label.replace(/"/g, "&quot;")}">`;
            }
          );
          return `<tr>${newRow}</tr>`;
        }
      );
      return `<table${tableAttrs}>${labelledInner}</table>`;
    }
  );
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlugFr(slug);
  if (!service) return {};
  const content = getServiceContent(slug);
  return generateServiceMetadata(service, content ? {
    seoTitle: content.seoTitle,
    metaDescription: content.metaDescription,
  } : undefined);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlugFr(slug);
  if (!service) notFound();

  const content = getServiceContent(slug);
  const servicePieges = getPiegesForService(slug);
  const serviceTestimonials = getTestimonialsForService(slug);
  const serviceRealizations = getRealizationsForService(slug);
  const serviceFaq = faqByService[slug] ?? [];
  const related = getRelatedServices(service);
  const frCities = getFrenchCities();

  const processSteps = [
    { name: "Diagnostic sur site", text: "Visite technique de votre installation et analyse de consommation." },
    { name: "Proposition détaillée", text: "Devis avec calcul de rentabilité basé sur les tarifs 2026 réels." },
    { name: "Installation professionnelle", text: "Installation par notre équipe, conçue pour passer le contrôle." },
    { name: "Suivi et maintenance", text: "Vérification de conformité, mise en service, suivi inclus." },
  ];

  // Service-specific mid-page CTA (avoid repeating "Diagnostic gratuit" everywhere)
  const ctaByService: Record<string, { title: string; description: string; label: string }> = {
    "panneaux-photovoltaiques": {
      title: "Vérifier la rentabilité réelle de votre projet solaire",
      description: "Concrètement : visite technique, mesure d'ombrage, calcul basé sur votre consommation réelle et les tarifs 2026 de votre GRD. Vous repartez avec des chiffres défendables, pas une promesse.",
      label: "Vérifier la rentabilité de mon projet",
    },
    "batteries-domestiques": {
      title: "Avant d'acheter une batterie, vérifions si elle est rentable",
      description: "On ne vend une batterie que quand le calcul tient debout. Analyse de votre profil d'autoconsommation, de votre tarif, de votre installation actuelle.",
      label: "Recevoir un avis avant devis",
    },
    "bornes-de-recharge": {
      title: "Une borne pensée avec votre installation, pas à côté",
      description: "Intégration au tableau, conformité, optimisation solaire si vous avez des panneaux. Visite technique avant devis.",
      label: "Faire analyser mon installation",
    },
    "conformite-electrique": {
      title: "Préparez le contrôle avant qu'il ne vous tombe dessus",
      description: "Pré-audit de votre installation, plan de mise en conformité, accompagnement jusqu'au passage du contrôle.",
      label: "Faire analyser mon installation",
    },
    "pompes-a-chaleur": {
      title: "Un dimensionnement sérieux avant l'investissement",
      description: "Calcul de déperditions, compatibilité émetteurs existants, intégration solaire. Évitez la pompe qui tourne à l'appoint électrique tout l'hiver.",
      label: "Vérifier la rentabilité de mon projet",
    },
    "nettoyage-toiture": {
      title: "Toiture en bon état, panneaux qui produisent",
      description: "Inspection toiture, nettoyage, traitement et, si pertinent, peinture. Une visite suffit pour évaluer.",
      label: "Demander un devis nettoyage",
    },
  };

  const midCta = ctaByService[slug] ?? {
    title: `Avis technique sur votre projet ${service.title.toLowerCase()}`,
    description: "Visite sur site, dimensionnement réel, devis détaillé sous 48 h avec les tarifs 2026 de votre GRD.",
    label: "Parler à un expert",
  };
  const midCtaTitle = midCta.title;
  const midCtaDescription = midCta.description;
  const midCtaLabel = midCta.label;

  // ---------------------------------------------------------------------------
  // PV — dedicated 7-section structure
  // ---------------------------------------------------------------------------
  // The photovoltaic page was rendering ~21 stacked sections (TrustBar, RESCERT
  // strip, regimes summary, warranty ladder, five deep content sections with
  // sticky TOC, mid-page CTA, piège carousel, PDF magnet, quote-check, process
  // timeline, comparison table, testimonials, realizations, FAQ, city grid,
  // related services). The deep editorial content now lives in the dedicated
  // pillar guides (prix-panneaux-solaires-wallonie-2026, tarif-impact-wallonie-
  // explication, garanties-panneaux-solaires-onduleurs). The service page is
  // now a clean 7-section conversion path. Non-PV services keep the previous
  // long structure untouched below.
  // ---------------------------------------------------------------------------
  // BATTERIES DOMESTIQUES — decision-first 7-section structure
  // ---------------------------------------------------------------------------
  // The old long-article version is preserved in service-content.ts for SEO,
  // but the visible page is now a decision tool: hero -> fit cards -> no-fit
  // cards -> method -> real figures -> double CTA -> short FAQ. The proof
  // strip features PV-with-battery realisations only.
  if (slug === "batteries-domestiques") {
    const battFaq = serviceFaq.slice(0, 5);

    const FIT_ITEMS: { title: string; detail: string }[] = [
      {
        title: "Vous produisez plus que vous ne consommez en journée",
        detail:
          "Votre installation solaire couvre largement la consommation diurne, et le surplus part au réseau pour presque rien.",
      },
      {
        title: "Votre consommation du soir est importante",
        detail:
          "Cuisson, machines, télévision, chauffage électrique d'appoint, recharge VE : la courbe 17h-22h pèse lourd sur la facture.",
      },
      {
        title: "Votre installation photovoltaïque est déjà bien dimensionnée",
        detail:
          "Panneaux et onduleur calibrés sur votre profil réel, pas surdimensionnés pour gonfler un devis.",
      },
      {
        title: "Vous cherchez plus d'autonomie",
        detail:
          "Réduire votre exposition aux hausses de tarif réseau et aux coupures ponctuelles compte autant que le retour comptable.",
      },
      {
        title: "Le calcul économique reste cohérent",
        detail:
          "Le retour sur investissement ne dépasse pas la durée de vie de la batterie, dans votre situation précise, pas dans un cas générique.",
      },
    ];

    const NO_FIT_ITEMS: { title: string; detail: string }[] = [
      {
        title: "Votre consommation est surtout en journée",
        detail:
          "Vous autoconsommez déjà la majorité de votre production en direct. La batterie n'aurait presque rien à stocker.",
      },
      {
        title: "Votre installation est trop petite",
        detail:
          "Sans surplus solaire significatif, la batterie reste vide la plupart des soirs. L'investissement ne se justifie pas.",
      },
      {
        title: "Le retour est trop long",
        detail:
          "Quand le retour estimé dépasse la durée de vie réelle de la batterie, le calcul ne tient pas, peu importe le discours commercial.",
      },
      {
        title: "Le devis est basé sur des promesses floues",
        detail:
          "Autonomie totale annoncée sans chiffres, économies estimées sans lire votre consommation : c'est un signal de vente, pas une étude.",
      },
      {
        title: "La batterie est vendue comme solution automatique",
        detail:
          "Si elle est proposée avant même de regarder votre facture, votre profil et votre installation, ce n'est pas un conseil technique.",
      },
    ];

    const METHOD_STEPS: { title: string; detail: string }[] = [
      {
        title: "Analyse de la facture",
        detail:
          "Lecture détaillée de votre facture d'électricité : consommation totale, répartition jour-nuit, tarif et régime GRD.",
      },
      {
        title: "Lecture du profil de consommation",
        detail:
          "Identification de la courbe horaire réelle : quand vous tirez du réseau, quand vous injectez, et de combien.",
      },
      {
        title: "Vérification de la production photovoltaïque",
        detail:
          "Contrôle du dimensionnement actuel, du rendement de l'onduleur, et du surplus réellement disponible pour une batterie.",
      },
      {
        title: "Calcul du taux d'autoconsommation",
        detail:
          "Estimation précise du gain qu'apporterait une batterie sur votre profil, avant et après installation.",
      },
      {
        title: "Estimation du retour réaliste",
        detail:
          "Calcul du retour sur investissement basé sur les tarifs 2026 réels de votre GRD, pas sur une moyenne nationale.",
      },
      {
        title: "Recommandation honnête : installer, attendre ou refuser",
        detail:
          "Trois sorties possibles. Si le calcul ne tient pas, on vous le dit clairement, plutôt que de vendre un équipement qui ne se justifie pas.",
      },
    ];

    return (
      <>
        <JsonLd data={serviceSchema(service)} />
        <JsonLd
          data={howToSchema(
            `Diagnostic batterie domestique`,
            METHOD_STEPS.map((s) => ({ name: s.title, text: s.detail })),
          )}
        />
        {battFaq.length > 0 && <JsonLd data={faqSchema(battFaq)} />}

        <Breadcrumbs
          items={[
            { name: "Accueil", href: "/" },
            { name: "Services", href: "/services/" },
            { name: service.title },
          ]}
        />

        {/* 1. HERO */}
        <HeroSection
          headline="Batterie domestique : rentable seulement dans certains cas"
          subheadline="Avant de recommander une batterie, on vérifie votre consommation, votre profil horaire, votre installation existante, votre tarif et le retour réel. Si le calcul ne tient pas, on vous le dit."
          ctaLabel="Demander un diagnostic gratuit"
          ctaHref="/contact/?projet=batteries-domestiques"
          secondaryCta={{
            label: "Faire vérifier mon devis batterie",
            href: "/contact/?intent=devis&projet=batteries-domestiques",
          }}
          badge={`Certifié RESCERT · ${siteConfig.founder.credential}`}
          variant="service"
          image={service.heroImage}
        />

        {/* 2. UNE BATTERIE PEUT ÊTRE INTÉRESSANTE SI... */}
        <section className="section-padding bg-white">
          <div className="container-be">
            <SectionLabel>Décision</SectionLabel>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
                Une batterie peut être intéressante si…
              </h2>
              <p className="text-charcoal/85 text-[15.5px] leading-relaxed max-w-prose">
                Cinq situations dans lesquelles le stockage domestique a une
                vraie utilité technique et financière. Pas une promesse,
                cinq vérifications.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {FIT_ITEMS.map((item) => (
                <li key={item.title} className="card p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 inline-flex items-center justify-center w-9 h-9 -my-1 rounded-lg bg-success/15 ring-1 ring-success/35 text-success"
                    >
                      <CheckIcon size={18} />
                    </span>
                    <h3 className="text-[16.5px] md:text-[17.5px] font-semibold text-midnight leading-[1.3] pt-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14.5px] text-charcoal/85 leading-relaxed">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. ELLE EST SOUVENT INUTILE SI... — caution tone */}
        <section className="section-padding bg-ivory">
          <div className="container-be">
            <SectionLabel>Cas où ça ne se justifie pas</SectionLabel>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
                Elle est souvent inutile si…
              </h2>
              <p className="text-charcoal/85 text-[15.5px] leading-relaxed max-w-prose">
                Cinq signaux qui devraient faire reposer un devis batterie.
                Si l&apos;un d&apos;eux correspond à votre cas, le calcul
                ne tient pas, peu importe l&apos;argumentaire commercial.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {NO_FIT_ITEMS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl bg-white border border-cloud/80 p-5 md:p-6 ring-1 ring-charcoal/[0.04]"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 inline-flex items-center justify-center w-9 h-9 -my-1 rounded-lg bg-danger/12 ring-1 ring-danger/30 text-danger"
                    >
                      <AlertTriangleIcon size={18} />
                    </span>
                    <h3 className="text-[16.5px] md:text-[17.5px] font-semibold text-midnight leading-[1.3] pt-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[14.5px] text-charcoal/85 leading-relaxed">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. LE TEST BE'ENERGIES AVANT DE VENDRE — numbered method */}
        <section className="section-padding bg-white">
          <div className="container-be">
            <SectionLabel>Méthode Be&apos;energies</SectionLabel>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
                Le test Be&apos;energies avant de vendre
              </h2>
              <p className="text-charcoal/85 text-[15.5px] leading-relaxed max-w-prose">
                Six étapes obligatoires avant de proposer une batterie.
                À la fin, trois sorties possibles : installer, attendre,
                ou refuser.
              </p>
            </div>

            <ol className="grid md:grid-cols-2 gap-4 md:gap-5">
              {METHOD_STEPS.map((step, idx) => {
                const number = String(idx + 1).padStart(2, "0");
                return (
                  <li
                    key={step.title}
                    className="card p-5 md:p-6 flex items-start gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="step-badge step-badge-on-white shrink-0"
                    >
                      {number}
                    </span>
                    <div>
                      <h3 className="text-[16.5px] md:text-[17.5px] font-semibold text-midnight leading-[1.3]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] text-charcoal/85 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* 5. LES VRAIS CHIFFRES — only existing figures from service-content.ts */}
        <section className="section-padding bg-ivory">
          <div className="container-be">
            <SectionLabel>Les vrais chiffres</SectionLabel>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight text-balance leading-[1.1]">
                Coût, économies, durée de vie
              </h2>
              <p className="text-charcoal/85 text-[15.5px] leading-relaxed max-w-prose">
                Ordres de grandeur observés sur des installations réelles
                en Belgique. Les chiffres exacts pour votre situation
                arrivent à la fin du diagnostic.
              </p>
            </div>

            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              <div className="card p-5 md:p-6">
                <dt className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber-dark">
                  Investissement
                </dt>
                <dd className="mt-3 text-2xl md:text-[28px] font-[family-name:var(--font-heading)] text-midnight leading-[1.1]">
                  5 000 à 8 000 EUR
                </dd>
                <p className="mt-3 text-[13.5px] text-charcoal/85 leading-relaxed">
                  TTC pour une batterie lithium fer-phosphate (LFP) de 5 à
                  10 kWh.
                </p>
              </div>

              <div className="card p-5 md:p-6">
                <dt className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber-dark">
                  Économies annuelles
                </dt>
                <dd className="mt-3 text-2xl md:text-[28px] font-[family-name:var(--font-heading)] text-midnight leading-[1.1]">
                  220 à 600 EUR
                </dd>
                <p className="mt-3 text-[13.5px] text-charcoal/85 leading-relaxed">
                  220 à 400 EUR/an sans véhicule électrique, 400 à 600
                  EUR/an avec VE et tarif IMPACT.
                </p>
              </div>

              <div className="card p-5 md:p-6">
                <dt className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber-dark">
                  Retour sur investissement
                </dt>
                <dd className="mt-3 text-2xl md:text-[28px] font-[family-name:var(--font-heading)] text-midnight leading-[1.1]">
                  10 à 15 ans
                </dd>
                <p className="mt-3 text-[13.5px] text-charcoal/85 leading-relaxed">
                  Selon votre profil. Sur certains cas, le retour dépasse
                  la durée de vie : on vous le dit avant de vendre.
                </p>
              </div>

              <div className="card p-5 md:p-6">
                <dt className="text-[11.5px] font-bold tracking-[0.18em] uppercase text-amber-dark">
                  Durée de vie
                </dt>
                <dd className="mt-3 text-2xl md:text-[28px] font-[family-name:var(--font-heading)] text-midnight leading-[1.1]">
                  10 à 15 ans
                </dd>
                <p className="mt-3 text-[13.5px] text-charcoal/85 leading-relaxed">
                  Garantie constructeur de 10 ans minimum sur la capacité
                  résiduelle.
                </p>
              </div>
            </dl>
          </div>
        </section>

        {/* PROOF — PV-with-battery realisations only */}
        <ProofSystem
          testimonials={[]}
          featuredSlugs={[
            "liege-installation-pv-batterie",
            "charleroi-batterie-pv-tarif-capacitaire",
            "riemst-32-panneaux",
          ]}
          title="Batteries installées, chiffres mesurés"
          intro="Trois projets où la batterie a été dimensionnée après lecture du profil de consommation, pas avant."
        />

        {/* 6. CTA DOUBLE — quote check vs. fresh diagnostic */}
        <section className="section-padding bg-midnight text-white">
          <div className="container-be max-w-5xl">
            <div className="text-center mb-10 md:mb-14">
              <div className="section-label justify-center">
                <span>Prochaine étape</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white text-balance">
                Vous êtes à quel moment ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <div className="p-7 md:p-9 flex flex-col rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70 mb-3 font-[family-name:var(--font-mono)]">
                  Deuxième avis
                </div>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                  J&apos;ai déjà un devis batterie à vérifier
                </h3>
                <p className="text-white/85 leading-relaxed mb-7 flex-1">
                  Envoyez-nous le devis batterie reçu d&apos;un autre
                  installateur. Benoît le lit avec son œil d&apos;ancien
                  inspecteur et vous renvoie une analyse écrite sous 48 h
                  ouvrées.
                </p>
                <Link
                  href="/contact/?intent=devis&projet=batteries-domestiques"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-white text-white font-semibold px-6 py-3 rounded-md hover:border-amber hover:text-amber hover:bg-white/5 transition-colors"
                >
                  Faire vérifier mon devis batterie
                  <ArrowRightIcon size={16} />
                </Link>
              </div>

              <div className="p-7 md:p-9 flex flex-col rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-amber mb-3 font-[family-name:var(--font-mono)]">
                  Étape 1
                </div>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                  Je veux un diagnostic gratuit
                </h3>
                <p className="text-white/85 leading-relaxed mb-7 flex-1">
                  Visite technique, lecture de votre consommation réelle,
                  calcul de rentabilité sur les tarifs 2026 de votre GRD.
                  Vous repartez avec une réponse claire : installer,
                  attendre ou refuser.
                </p>
                <Link
                  href="/contact/?projet=batteries-domestiques"
                  className="inline-flex items-center justify-center gap-2 bg-amber text-midnight font-semibold px-6 py-3 rounded-md hover:bg-amber-light transition-colors"
                >
                  Demander un diagnostic gratuit
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ COURTE — 5 max */}
        {battFaq.length > 0 && <FAQSection items={battFaq} />}

        <RelatedServices services={related} />
      </>
    );
  }

  if (slug === "panneaux-photovoltaiques") {
    const pvTestimonials = serviceTestimonials.slice(0, 2);
    const pvFaq = serviceFaq.slice(0, 5);
    return (
      <>
        <JsonLd data={serviceSchema(service)} />
        <JsonLd
          data={howToSchema(
            `Installation de ${service.title.toLowerCase()}`,
            processSteps,
          )}
        />
        {pvFaq.length > 0 && <JsonLd data={faqSchema(pvFaq)} />}

        <Breadcrumbs
          items={[
            { name: "Accueil", href: "/" },
            { name: "Services", href: "/services/" },
            { name: service.title },
          ]}
        />

        {/* 1. HERO */}
        <HeroSection
          headline={
            content?.headline ??
            `Installation de ${service.title.toLowerCase()} en Belgique`
          }
          subheadline={content?.subheadline ?? service.shortDescription}
          ctaLabel="Demander un diagnostic gratuit"
          ctaHref="/contact/"
          secondaryCta={{
            label: "Faire vérifier mon devis",
            href: "/contact/?intent=devis",
          }}
          badge={`Certifié RESCERT · ${siteConfig.founder.credential}`}
          variant="service"
          image={service.heroImage}
        />

        {/* 2. BLOC DÉCISION 2026 — answers the prosumer / smart-meter
                objection head-on, with links into the pillar guides for
                visitors who want to dig deeper. */}
        <RentabilityObjection2026 />

        {/* 3. MÉTHODE BE'ENERGIES — the six pre-quote checks. Replaces the
                old TrustBar + RESCERT strip + ProcessTimeline trio. */}
        <PVMethodPanel />

        {/* 4. MATÉRIEL ET GARANTIES — three-line synthesis, links to the
                dedicated guide that hosts the full WarrantyLadder tables. */}
        <PVWarrantyTeaser />

        {/* 5. PREUVE TERRAIN — unified proof block: strip + 3 PV projects
                + up to 2 reviews. Replaces the previous TerrainStrip +
                RealizationGrid + TestimonialBlock stack. */}
        <ProofSystem
          testimonials={pvTestimonials}
          // Strict rule: every slug here MUST point at a realization with
          // at least one real photo, otherwise the trio collapses to the
          // shared placeholder and reads as template content.
          featuredSlugs={[
            "riemst-32-panneaux",
            "liege-installation-pv-batterie",
            "nivelles-pv-pme",
          ]}
          title="La preuve, sur le terrain"
          intro="Chantiers PV récents, projets phares, avis vérifiés."
        />

        {/* 6. CTA DOUBLE CHEMIN — start a project vs. already hold a quote */}
        <section className="section-padding bg-midnight text-white">
          <div className="container-be max-w-5xl">
            <div className="text-center mb-10 md:mb-14">
              <div className="section-label justify-center">
                <span>Prochaine étape</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white text-balance">
                Vous êtes à quel moment ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <div className="p-7 md:p-9 flex flex-col rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-amber mb-3 font-[family-name:var(--font-mono)]">
                  Étape 1
                </div>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                  Je veux un diagnostic gratuit
                </h3>
                <p className="text-white/85 leading-relaxed mb-7 flex-1">
                  Visite technique sur site, lecture de votre consommation
                  réelle, calcul de rentabilité sur les tarifs 2026 de
                  votre GRD. Vous repartez avec des chiffres défendables.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-amber text-midnight font-semibold px-6 py-3 rounded-md hover:bg-amber-light transition-colors"
                >
                  Demander un diagnostic gratuit
                  <ArrowRightIcon size={16} />
                </Link>
              </div>

              <div className="p-7 md:p-9 flex flex-col rounded-lg bg-white/[0.03] border border-white/10">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70 mb-3 font-[family-name:var(--font-mono)]">
                  Deuxième avis
                </div>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                  J&apos;ai déjà un devis à vérifier
                </h3>
                <p className="text-white/85 leading-relaxed mb-7 flex-1">
                  Un installateur vous a déjà remis une offre. Envoyez-la,
                  Benoît la lit avec son œil d&apos;ancien inspecteur et
                  vous renvoie une analyse écrite sous 48 h ouvrées.
                </p>
                <Link
                  href="/contact/?intent=devis"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-white text-white font-semibold px-6 py-3 rounded-md hover:border-amber hover:text-amber hover:bg-white/5 transition-colors"
                >
                  Faire vérifier mon devis
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6b. MINI DIAGNOSTIC — one last triage opportunity before the
                FAQ. PV is pre-selected so the visitor only has to indicate
                where they are in their reflection. */}
        <MiniDiagnosticCard
          eyebrow="Avant de partir"
          headline="Un doute sur votre projet photovoltaïque ?"
          subline="Trois questions rapides, et Benoît vous renvoie un premier avis personnel sous 24 h ouvrées. Sans engagement."
          defaultProject="panneaux-photovoltaiques"
        />

        {/* 7. FAQ COURTE — 5 questions max, with a link to the full set in
                the pillar guides for visitors who want more. */}
        {pvFaq.length > 0 && <FAQSection items={pvFaq} />}

        <RelatedServices services={related} />
      </>
    );
  }

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={howToSchema(`Installation de ${service.title.toLowerCase()}`, processSteps)} />
      {serviceFaq.length > 0 && (
        <JsonLd data={faqSchema(serviceFaq)} />
      )}

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services/" },
          { name: service.title },
        ]}
      />

      <HeroSection
        headline={content?.headline ?? `Installation de ${service.title.toLowerCase()} en Belgique`}
        subheadline={content?.subheadline ?? service.shortDescription}
        ctaLabel="Demander un diagnostic gratuit"
        ctaHref="/contact/"
        variant="service"
        image={service.heroImage}
      />

      <TrustBar />

      {/* RESCERT Credibility Bar - highly visible */}
      <section className="section-padding-sm bg-warm-gradient">
        <div className="container-be">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 shrink-0">
              <Image
                src="/RESCERT.png"
                alt="Certification RESCERT"
                width={200}
                height={200}
                className="h-[120px] w-[120px] object-contain"
              />
              <div>
                <p className="font-semibold text-midnight">{siteConfig.founder.name}</p>
                <p className="text-sm text-amber-dark font-medium">{siteConfig.founder.credential}</p>
              </div>
            </div>
            <div className="h-px md:h-12 md:w-px bg-cloud w-full md:w-auto" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
              {[
                "Visite technique obligatoire",
                "Calcul de rentabilité réel",
                "Conçu pour passer le contrôle",
                "Suivi post-installation inclus",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-charcoal">
                  <CheckIcon size={15} className="text-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PV-only: regimes summary above the long-form content for fast
          decision-making before the deep reading. */}
      {slug === "panneaux-photovoltaiques" && <PVRegimesSummary />}

      {/* PV-only: warranty ladder - concrete trust block with sourced figures
          from panel and inverter datasheets. Sits right after the regime
          framing so the trust signals are grouped before the deep content. */}
      {slug === "panneaux-photovoltaiques" && <WarrantyLadder />}

      {/* Deep content sections - with alternating backgrounds */}
      {content?.sections.map((section, index) => {
        const isPV = slug === "panneaux-photovoltaiques";
        const augment = isPV ? PV_SECTION_AUGMENTATIONS[section.id] : undefined;
        // PV-only: pre-process tables so each <td> carries a data-label
        // matching its <th>, which the .article-prose-mobile-stack CSS uses
        // to render each row as a card on mobile.
        const renderedBody = isPV
          ? labelTableCellsForMobile(section.body)
          : section.body;
        const proseClass = isPV
          ? "article-prose article-prose-mobile-stack"
          : "article-prose";

        return (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding ${index % 2 === 1 ? "bg-ivory" : ""} scroll-mt-24`}
          >
            <div className="container-be">
              <div className="xl:grid xl:grid-cols-[220px_1fr] xl:gap-12">
                {/* Sticky TOC - only render on the first section so it doesn't duplicate */}
                {index === 0 && content && (
                  <ServiceTOC
                    sections={content.sections.map((s) => ({
                      id: s.id,
                      title: s.title,
                    }))}
                  />
                )}
                {/* Spacer column for non-first sections so content keeps the same right offset */}
                {index !== 0 && <div className="hidden xl:block" aria-hidden="true" />}

                <div className="max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6 scroll-mt-24">
                    {section.title}
                  </h2>
                  {/* PV-only: scannable 3-bullet recap above the dense body */}
                  {augment?.summary && (
                    <PVSectionSummary bullets={augment.summary} />
                  )}
                  <ReadMore collapsedHeight={420}>
                    <div
                      className={proseClass}
                      dangerouslySetInnerHTML={{ __html: renderedBody }}
                    />
                  </ReadMore>
                  {/* PV-only: amber-bordered translation of the technical
                      content into a personal implication for the reader */}
                  {augment?.whatThisMeans && (
                    <PVWhatThisMeans title={augment.whatThisMeans.title}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: augment.whatThisMeans.html,
                        }}
                      />
                    </PVWhatThisMeans>
                  )}
                  {/* PV-only: single-row inline next-step after a natural
                      decision point in the body */}
                  {augment?.inlineCta && (
                    <PVInlineNextStep
                      prompt={augment.inlineCta.prompt}
                      label={augment.inlineCta.label}
                      href={augment.inlineCta.href}
                    />
                  )}
                  {/* After the last content section: glossary + data sources for chiffrée services */}
                  {content.sections.length > 0 &&
                    index === content.sections.length - 1 && (
                      <>
                        {GLOSSARY_KEYS_BY_SERVICE[slug] && (
                          <GlossaryInline keys={GLOSSARY_KEYS_BY_SERVICE[slug]} />
                        )}
                        {(slug === "panneaux-photovoltaiques" ||
                          slug === "batteries-domestiques" ||
                          slug === "bornes-de-recharge" ||
                          slug === "pompes-a-chaleur" ||
                          slug === "conformite-electrique") && <DataSources />}
                      </>
                    )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Fallback if no deep content exists */}
      {!content && (
        <section className="section-padding">
          <div className="container-be max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6">
              Pourquoi {service.title.toLowerCase()} avec Be&apos;energies ?
            </h2>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>
                En tant qu&apos;ancien inspecteur en conformité électrique, Benoît conçoit chaque
                installation de {service.title.toLowerCase()} pour qu&apos;elle soit conforme,
                correctement dimensionnée, et rentable sur le long terme.
              </p>
              <p>
                Pas de promesses en l&apos;air, pas de calculs gonflés. Les vrais chiffres,
                basés sur les tarifs 2026 réels de votre GRD.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Mid-page CTA */}
      <CTADiagnostic
        title={midCtaTitle}
        description={midCtaDescription}
        ctaLabel={midCtaLabel}
        variant="default"
      />

      {servicePieges.length > 0 && (
        <PiegesCarousel pieges={servicePieges} maxItems={3} />
      )}

      {/* PDF lead magnet - the natural next step right after the piège teasers */}
      <PDFLeadMagnetCard variant="card" />

      {/* Pre-signature analysis (only relevant on services where the user shops around) */}
      {(slug === "panneaux-photovoltaiques" ||
        slug === "batteries-domestiques" ||
        slug === "bornes-de-recharge" ||
        slug === "conformite-electrique") && (
        <QuoteCheckCTA variant="light" />
      )}

      <ProcessTimeline />

      {/* Custom comparison rows from deep content, or defaults */}
      <ComparisonTable
        pairs={content?.comparisonRows?.map((r) => ({
          classique: r.others,
          beEnergies: r.beEnergies,
        }))}
        title={content ? `Ce que d'autres font vs. ce que Be'energies fait pour vos ${service.title.toLowerCase()}` : undefined}
      />

      {serviceTestimonials.length > 0 && (
        <TestimonialBlock testimonials={serviceTestimonials} />
      )}

      {serviceRealizations.length > 0 && (
        <RealizationGrid realizations={serviceRealizations} maxItems={3} showViewAll />
      )}

      {serviceFaq.length > 0 && <FAQSection items={serviceFaq} />}

      {/* City grid */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-8">
            {service.title} dans votre ville
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {frCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${service.slug}/${city.slug}/`}
                className="text-center py-3 px-4 bg-white border border-cloud rounded-lg text-sm font-medium text-charcoal hover:border-amber hover:text-midnight transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={related} />
    </>
  );
}
