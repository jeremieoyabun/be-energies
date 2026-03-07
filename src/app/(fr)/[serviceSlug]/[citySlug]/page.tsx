import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlugFr } from "@/data/services";
import { getCityBySlug, getNearbyCities, getFrenchCities } from "@/data/cities";
import { getPiegesForService } from "@/data/pieges";
import { getTestimonialsForCity } from "@/data/testimonials";
import { generateLocalPageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { LocalProof } from "@/components/sections/LocalProof";
import { PiegesCarousel } from "@/components/sections/PiegesCarousel";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
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

interface LocalPageProps {
  params: Promise<{ serviceSlug: string; citySlug: string }>;
}

export async function generateStaticParams() {
  const frCities = getFrenchCities();
  return services.flatMap((service) =>
    frCities.map((city) => ({
      serviceSlug: service.slug,
      citySlug: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: LocalPageProps) {
  const { serviceSlug, citySlug } = await params;
  const service = getServiceBySlugFr(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  return generateLocalPageMetadata(service, city, "fr-BE", {
    titleOverride: getLocalHeadline(service, city.name, "fr"),
    descriptionOverride: getLocalMetaDescription(service, city, "fr"),
  });
}

export default async function LocalPage({ params }: LocalPageProps) {
  const { serviceSlug, citySlug } = await params;
  const service = getServiceBySlugFr(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) notFound();

  const nearbyCities = getNearbyCities(city);
  const servicePieges = getPiegesForService(serviceSlug).slice(0, 2);
  const cityTestimonials = getTestimonialsForCity(citySlug);
  const otherServices = services.filter((s) => s.slug !== serviceSlug);

  // Local content system
  const cityIntro = getCityIntro(city, service, "fr");
  const localContent = getServiceLocalContent(serviceSlug, "fr");
  const grd = getGrdTariff(city.grd);
  const localFaqs = generateLocalFaq(city, service, "fr");

  const headline = getLocalHeadline(service, city.name, "fr");
  const subheadline = `Installation de ${service.title.toLowerCase()} à ${city.name} (${city.province}) par Be'énergies. Benoît Dezso, ancien inspecteur, certifié RESCERT. Diagnostic énergétique gratuit.`;

  return (
    <>
      <JsonLd data={localBusinessSchema(city)} />
      <JsonLd data={serviceSchema(service)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: service.title, href: `/services/${service.slug}/` },
          { name: city.name },
        ]}
      />

      <HeroSection
        headline={headline}
        subheadline={subheadline}
        ctaLabel={`Diagnostic gratuit à ${city.name}`}
        ctaHref="/contact/"
        variant="local"
      />

      <TrustBar />

      <section className="section-padding">
        <div className="container-be max-w-3xl space-y-8">
          <FounderCredibility variant="local" cityName={city.name} />

          {/* City-specific intro (unique per city x service) */}
          <div className="prose prose-lg max-w-none text-charcoal">
            <h2>{localContent?.whyTitle(city.name) ?? `${service.title} à ${city.name}`}</h2>
            <p>{cityIntro}</p>
            {localContent && (
              <p>{localContent.whyBody(city, grd)}</p>
            )}
            {grd && grd.prosumerEurPerKweYear > 0 && serviceSlug === "panneaux-photovoltaiques" && (
              <p>
                En tant qu&apos;ancien inspecteur en conformité électrique, Benoît
                conçoit chaque installation pour qu&apos;elle passe le contrôle du
                premier coup. Pas de surprises, pas de frais supplémentaires.
              </p>
            )}
          </div>

          <LocalProof city={city} locale="fr" />
        </div>
      </section>

      {servicePieges.length > 0 && (
        <PiegesCarousel pieges={servicePieges} maxItems={2} />
      )}

      {cityTestimonials.length > 0 && (
        <TestimonialBlock testimonials={cityTestimonials} />
      )}

      {localFaqs.length > 0 && (
        <FAQSection
          items={localFaqs}
          title={`Questions fréquentes : ${service.title.toLowerCase()} à ${city.name}`}
        />
      )}

      {/* Cross-service links (dynamic heading per service) */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-xl font-semibold text-midnight mb-4">
            {localContent?.crossServiceHeading(city.name) ?? `Autres services à ${city.name} :`}
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherServices.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/${city.slug}/`}
                className="inline-flex items-center gap-1 bg-white border border-cloud rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:border-amber hover:text-midnight transition-colors"
              >
                {s.title} à {city.name}
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
              Nous intervenons aussi à :
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nc) => (
                <Link
                  key={nc.slug}
                  href={`/${service.slug}/${nc.slug}/`}
                  className="inline-flex items-center gap-1 bg-white border border-cloud rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:border-amber hover:text-midnight transition-colors"
                >
                  {service.title} à {nc.name}
                  <ArrowRightIcon size={14} className="text-amber" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTADiagnostic
        title={`Diagnostic énergétique gratuit à ${city.name}`}
        variant="dark"
      />
    </>
  );
}
