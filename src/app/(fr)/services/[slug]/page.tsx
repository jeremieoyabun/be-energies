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
import { JsonLd, serviceSchema, howToSchema } from "@/lib/schema";
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
import { DataSources } from "@/components/sections/DataSources";
import { ServiceTOC } from "@/components/sections/ServiceTOC";
import { GlossaryInline } from "@/components/sections/GlossaryInline";
import { ReadMore } from "@/components/ReadMore";
import { PVRegimesSummary } from "@/components/sections/PVRegimesSummary";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon } from "@/lib/icons";
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
      description: "Visite technique, mesure d'ombrage, calcul basé sur votre consommation réelle et les tarifs 2026 de votre GRD. Vous repartez avec des chiffres défendables, pas une promesse.",
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
      description: "Inspection toiture, nettoyage, traitement et — si pertinent — peinture. Une visite suffit pour évaluer.",
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

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={howToSchema(`Installation de ${service.title.toLowerCase()}`, processSteps)} />

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
        ctaLabel="Mon diagnostic gratuit"
        ctaHref="/contact/"
        variant="service"
        image={service.heroImage}
      />

      <TrustBar />

      {/* RESCERT Credibility Bar — highly visible */}
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

      {/* Deep content sections — with alternating backgrounds */}
      {content?.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${index % 2 === 1 ? "bg-ivory" : ""} scroll-mt-24`}
        >
          <div className="container-be">
            <div className="xl:grid xl:grid-cols-[220px_1fr] xl:gap-12">
              {/* Sticky TOC — only render on the first section so it doesn't duplicate */}
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
                <ReadMore collapsedHeight={420}>
                  <div
                    className="article-prose"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </ReadMore>
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
      ))}

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
        rows={content?.comparisonRows}
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

      <CTADiagnostic
        title={content?.ctaTitle ?? midCta.title}
        description={content?.ctaDescription ?? midCta.description}
        ctaLabel={content?.ctaLabel ?? midCta.label}
        variant="dark"
      />
    </>
  );
}
