import { notFound } from "next/navigation";
import { services, getServiceBySlugNl, getRelatedServices } from "@/data/services";
import { getDutchCities } from "@/data/cities";
import { faqByService } from "@/data/faq";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQSection } from "@/components/sections/FAQSection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import Link from "next/link";

interface NlServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slugNl }));
}

export async function generateMetadata({ params }: NlServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlugNl(slug);
  if (!service) return {};
  return generatePageMetadata({
    title: `${service.titleNl} -- Installatie in Belgie`,
    description: service.shortDescriptionNl,
    path: `/nl/diensten/${service.slugNl}/`,
    locale: "nl-BE",
    alternates: { fr: `/services/${service.slug}/`, nl: `/nl/diensten/${service.slugNl}/` },
  });
}

export default async function NlServicePage({ params }: NlServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlugNl(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const nlCities = getDutchCities();
  const serviceFaq = faqByService[service.slug] ?? [];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Diensten", href: "/nl/diensten/" },
          { name: service.titleNl },
        ]}
      />

      <HeroSection
        headline={`Installatie van ${service.titleNl.toLowerCase()} in Belgie`}
        subheadline={service.shortDescriptionNl}
        ctaLabel="Gratis diagnose"
        ctaHref="/nl/contact/"
        variant="service"
      />

      <TrustBar />

      <section className="section-padding">
        <div className="container-be max-w-3xl">
          <FounderCredibility variant="compact" />
        </div>
      </section>

      <ProcessTimeline />

      {serviceFaq.length > 0 && <FAQSection items={serviceFaq} title="Veelgestelde vragen" />}

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

      <RelatedServices services={related} locale="nl" title="Aanvullende diensten" />

      <CTADiagnostic
        title={`Gratis ${service.titleNl.toLowerCase()} diagnose`}
        ctaLabel="Vraag uw diagnose aan"
        ctaHref="/nl/contact/"
        variant="dark"
      />
    </>
  );
}
