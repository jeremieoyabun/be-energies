import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlugNl } from "@/data/services";
import { getCityBySlug, getNearbyCities, getDutchCities } from "@/data/cities";
import { generateLocalPageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { LocalProof } from "@/components/sections/LocalProof";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { ArrowRightIcon } from "@/lib/icons";
import {
  getCityIntro,
  getServiceLocalContent,
  getGrdTariff,
  generateLocalFaq,
  getLocalHeadline,
  getLocalMetaDescription,
} from "@/data/local-content";

interface NlLocalPageProps {
  params: Promise<{ serviceSlug: string; citySlug: string }>;
}

export async function generateStaticParams() {
  const nlCities = getDutchCities();
  return services.flatMap((service) =>
    nlCities.map((city) => ({
      serviceSlug: service.slugNl,
      citySlug: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: NlLocalPageProps) {
  const { serviceSlug, citySlug } = await params;
  const service = getServiceBySlugNl(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  return generateLocalPageMetadata(service, city, "nl-BE", {
    titleOverride: getLocalHeadline(service, city.name, "nl"),
    descriptionOverride: getLocalMetaDescription(service, city, "nl"),
  });
}

export default async function NlLocalPage({ params }: NlLocalPageProps) {
  const { serviceSlug, citySlug } = await params;
  const service = getServiceBySlugNl(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) notFound();

  const nearbyCities = getNearbyCities(city);
  const otherServices = services.filter((s) => s.slugNl !== serviceSlug);

  // Local content system
  const cityIntro = getCityIntro(city, service, "nl");
  const localContent = getServiceLocalContent(service.slugNl, "nl");
  const grd = getGrdTariff(city.grd);
  const localFaqs = generateLocalFaq(city, service, "nl");

  const headline = getLocalHeadline(service, city.name, "nl");
  const subheadline = `Installatie van ${service.titleNl.toLowerCase()} in ${city.name} (${city.province}) door Be'energies. Benoît Dezso, voormalig inspecteur, RESCERT-gecertificeerd.`;

  return (
    <>
      <JsonLd data={localBusinessSchema(city)} />
      <JsonLd data={serviceSchema(service)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: service.titleNl, href: `/nl/diensten/${service.slugNl}/` },
          { name: city.name },
        ]}
      />

      <HeroSection
        headline={headline}
        subheadline={subheadline}
        ctaLabel={`Gratis diagnose in ${city.name}`}
        ctaHref="/nl/contact/"
        variant="local"
      />

      <TrustBar />

      <section className="section-padding">
        <div className="container-be max-w-3xl space-y-8">
          <FounderCredibility variant="local" cityName={city.name} />

          {/* City-specific intro (unique per city x service) */}
          <div className="prose prose-lg max-w-none text-charcoal">
            <h2>{localContent?.whyTitle(city.name) ?? `${service.titleNl} in ${city.name}`}</h2>
            <p>{cityIntro}</p>
            {localContent && (
              <p>{localContent.whyBody(city, grd)}</p>
            )}
          </div>

          <LocalProof city={city} locale="nl" />
        </div>
      </section>

      {localFaqs.length > 0 && (
        <FAQSection
          items={localFaqs}
          title={`Veelgestelde vragen: ${service.titleNl.toLowerCase()} in ${city.name}`}
        />
      )}

      {/* Cross-service links */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-xl font-semibold text-midnight mb-4">
            {localContent?.crossServiceHeading(city.name) ?? `Andere diensten in ${city.name}:`}
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherServices.slice(0, 3).map((s) => (
              <Link
                key={s.slugNl}
                href={`/nl/${s.slugNl}/${city.slug}/`}
                className="inline-flex items-center gap-1 bg-white border border-cloud rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:border-amber hover:text-midnight transition-colors"
              >
                {s.titleNl} in {city.name}
                <ArrowRightIcon size={14} className="text-amber" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="section-padding">
          <div className="container-be max-w-3xl">
            <h2 className="text-xl font-semibold text-midnight mb-4">
              We werken ook in:
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nc) => (
                <Link
                  key={nc.slug}
                  href={`/nl/${service.slugNl}/${nc.slug}/`}
                  className="inline-flex items-center gap-1 bg-white border border-cloud rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:border-amber hover:text-midnight transition-colors"
                >
                  {service.titleNl} in {nc.name}
                  <ArrowRightIcon size={14} className="text-amber" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTADiagnostic
        title={`Gratis energiediagnose in ${city.name}`}
        ctaLabel="Vraag uw diagnose aan"
        ctaHref="/nl/contact/"
        variant="dark"
      />
    </>
  );
}
