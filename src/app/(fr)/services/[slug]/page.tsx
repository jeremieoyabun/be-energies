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
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { PiegesCarousel } from "@/components/sections/PiegesCarousel";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { RealizationGrid } from "@/components/sections/RealizationGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon } from "@/lib/icons";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
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
        ctaLabel="Diagnostic gratuit"
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

      {/* Hero image placeholder */}
      {service.heroImage && (
        <section className="container-be -mt-2 mb-8">
          <div className="rounded-2xl overflow-hidden border border-cloud shadow-sm aspect-[21/9] relative bg-ivory">
            <Image
              src={service.heroImage}
              alt={`${service.title} — Be'energies`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-transparent" />
          </div>
        </section>
      )}

      {/* Deep content sections — with alternating backgrounds */}
      {content?.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${index % 2 === 1 ? "bg-ivory" : ""}`}
        >
          <div className="container-be max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6">
              {section.title}
            </h2>
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
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
        title={`Diagnostic ${service.title.toLowerCase()} gratuit`}
        description={`Benoît se déplace chez vous pour analyser votre situation. Devis détaillé sous 48h avec les vrais tarifs 2026.`}
        variant="default"
      />

      {servicePieges.length > 0 && (
        <PiegesCarousel pieges={servicePieges} maxItems={3} />
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
        title={content?.ctaTitle ?? `Diagnostic ${service.title.toLowerCase()} gratuit`}
        description={content?.ctaDescription}
        ctaLabel={content?.ctaLabel ?? "Demander mon diagnostic gratuit"}
        variant="dark"
      />
    </>
  );
}
