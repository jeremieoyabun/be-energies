import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlugNl, getRelatedServices } from "@/data/services";
import { getDutchCities } from "@/data/cities";
import { faqByServiceNl } from "@/data/faq.nl";
import { getServiceContentNl } from "@/data/service-content.nl";
import { generatePageMetadata } from "@/lib/metadata";
import {
  JsonLd,
  serviceSchema,
  howToSchema,
  faqSchema,
} from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { DataSources } from "@/components/sections/DataSources";
import { ServiceTOC } from "@/components/sections/ServiceTOC";
import { GlossaryInline } from "@/components/sections/GlossaryInline";
import { ReadMore } from "@/components/ReadMore";

interface NlServicePageProps {
  params: Promise<{ slug: string }>;
}

// Glossary keys per NL slug (mirrors the FR mapping).
const GLOSSARY_KEYS_BY_NL_SLUG: Record<string, string[]> = {
  zonnepanelen: [
    "prosumer",
    "grd",
    "autoconsommation",
    "kwc",
    "kwh",
    "impact",
    "onduleur",
    "cwape",
  ],
  thuisbatterijen: ["prosumer", "impact", "autoconsommation", "kwh"],
  laadpalen: ["rgie", "impact", "rescert"],
  "elektrische-conformiteit": ["rescert", "rgie"],
  warmtepompen: ["impact", "kwh", "autoconsommation"],
};

const CHIFFRE_SLUGS_NL = new Set([
  "zonnepanelen",
  "thuisbatterijen",
  "laadpalen",
  "warmtepompen",
  "elektrische-conformiteit",
]);

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slugNl }));
}

export async function generateMetadata({ params }: NlServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlugNl(slug);
  if (!service) return {};
  const content = getServiceContentNl(slug);
  return generatePageMetadata({
    title:
      content?.seoTitle ?? `${service.titleNl} -- Installatie in België`,
    description: content?.metaDescription ?? service.shortDescriptionNl,
    path: `/nl/diensten/${service.slugNl}/`,
    locale: "nl-BE",
    alternates: {
      fr: `/services/${service.slug}/`,
      nl: `/nl/diensten/${service.slugNl}/`,
    },
  });
}

export default async function NlServicePage({ params }: NlServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlugNl(slug);
  if (!service) notFound();

  const content = getServiceContentNl(slug);
  const related = getRelatedServices(service);
  const nlCities = getDutchCities();
  // FAQ data is keyed on the FR slug (single source of truth across locales).
  const serviceFaq = faqByServiceNl[service.slug] ?? [];

  const processSteps = [
    {
      name: "Diagnose ter plaatse",
      text: "Technisch bezoek aan uw installatie en verbruiksanalyse.",
    },
    {
      name: "Gedetailleerd voorstel",
      text: "Offerte met rentabiliteitsberekening op basis van de werkelijke tarieven 2026.",
    },
    {
      name: "Professionele installatie",
      text: "Installatie door ons team, ontworpen om de keuring te doorstaan.",
    },
    {
      name: "Opvolging en onderhoud",
      text: "Conformiteitscontrole, indienstelling en opvolging inbegrepen.",
    },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={howToSchema(
          `Installatie van ${service.titleNl.toLowerCase()}`,
          processSteps,
        )}
      />
      {serviceFaq.length > 0 && <JsonLd data={faqSchema(serviceFaq)} />}

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Diensten", href: "/nl/diensten/" },
          { name: service.titleNl },
        ]}
      />

      <HeroSection
        headline={
          content?.headline ??
          `Installatie van ${service.titleNl.toLowerCase()} in België`
        }
        subheadline={content?.subheadline ?? service.shortDescriptionNl}
        ctaLabel="Mijn gratis diagnose"
        ctaHref="/nl/contact/"
        variant="service"
        image={service.heroImage}
      />

      <TrustBar locale="nl" />

      <section className="section-padding">
        <div className="container-be max-w-3xl">
          <FounderCredibility variant="compact" locale="nl" />
        </div>
      </section>

      {/* Deep content sections */}
      {content?.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${
            index % 2 === 1 ? "bg-ivory" : ""
          } scroll-mt-24`}
        >
          <div className="container-be">
            <div className="xl:grid xl:grid-cols-[220px_1fr] xl:gap-12">
              {index === 0 && content && (
                <ServiceTOC
                  locale="nl"
                  sections={content.sections.map((s) => ({
                    id: s.id,
                    title: s.title,
                  }))}
                />
              )}
              {index !== 0 && (
                <div className="hidden xl:block" aria-hidden="true" />
              )}

              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6 scroll-mt-24">
                  {section.title}
                </h2>
                <ReadMore collapsedHeight={420} locale="nl">
                  <div
                    className="article-prose"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </ReadMore>
                {content.sections.length > 0 &&
                  index === content.sections.length - 1 && (
                    <>
                      {GLOSSARY_KEYS_BY_NL_SLUG[slug] && (
                        <GlossaryInline
                          locale="nl"
                          keys={GLOSSARY_KEYS_BY_NL_SLUG[slug]}
                        />
                      )}
                      {CHIFFRE_SLUGS_NL.has(slug) && (
                        <DataSources locale="nl" />
                      )}
                    </>
                  )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Fallback when no deep content yet (nettoyage-toiture / dakreiniging) */}
      {!content && (
        <section className="section-padding">
          <div className="container-be max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6">
              Waarom {service.titleNl.toLowerCase()} met Be&apos;energies?
            </h2>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>{service.shortDescriptionNl}</p>
              <p>
                Geen loze beloftes, geen opgeblazen berekeningen. De
                werkelijke cijfers, gebaseerd op de tarieven 2026 van uw
                netbeheerder.
              </p>
            </div>
          </div>
        </section>
      )}

      <ProcessTimeline locale="nl" />

      {content?.comparisonRows && content.comparisonRows.length > 0 && (
        <ComparisonTable rows={content.comparisonRows} />
      )}

      {serviceFaq.length > 0 && (
        <FAQSection items={serviceFaq} title="Veelgestelde vragen" />
      )}

      {/* NL city grid */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight text-center mb-8">
            {service.titleNl} in uw stad
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
            {nlCities.map((city) => (
              <Link
                key={city.slug}
                href={`/nl/${service.slugNl}/${city.slug}/`}
                className="text-center py-3 px-4 bg-white border border-cloud rounded-lg text-sm font-medium text-charcoal hover:border-amber hover:text-midnight transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices
        services={related}
        locale="nl"
        title="Aanvullende diensten"
      />

      <CTADiagnostic
        locale="nl"
        title={content?.ctaTitle}
        description={content?.ctaDescription}
        ctaLabel={content?.ctaLabel}
        variant="dark"
      />
    </>
  );
}
