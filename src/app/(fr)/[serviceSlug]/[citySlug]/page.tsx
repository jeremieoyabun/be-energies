import { notFound } from "next/navigation";
import Link from "next/link";
import { visibleServices as services, getServiceBySlugFr } from "@/data/services";
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
import { LocalContextBlock } from "@/components/sections/LocalContextBlock";
import { LocalCityDeepDive } from "@/components/sections/LocalCityDeepDive";
import { RealisationsLocales } from "@/components/sections/RealisationsLocales";
import { PiegesCarousel } from "@/components/sections/PiegesCarousel";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { PDFLeadMagnetCard } from "@/components/sections/PDFLeadMagnetCard";
import { ArrowRightIcon } from "@/lib/icons";
import {
  getCityIntro,
  getServiceLocalContent,
  getGrdTariff,
  generateLocalFaq,
  getLocalHeadline,
  getLocalMetaDescription,
} from "@/data/local-content";
import { getCityContext } from "@/data/city-context";
import { getCityDeepDive } from "@/data/city-deep-dive";

interface LocalPageProps {
  params: Promise<{ serviceSlug: string; citySlug: string }>;
}

// Any FR service × city combination that is NOT in generateStaticParams
// returns 404 instead of rendering with fallback content. Prevents
// thin FR pages from being generated on-demand for NL-only cities
// (Riemst, Tongeren, Hasselt, Bilzen) which used to be indexed via
// hreflang alternates and drag SEO quality down.
export const dynamicParams = false;

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
  const cityContext = getCityContext(citySlug);
  const cityDeepDive = getCityDeepDive(citySlug);

  const headline = getLocalHeadline(service, city.name, "fr");
  const subheadline = `Installation de ${service.title.toLowerCase()} à ${city.name} (${city.province}) par Be'energies. Visite technique, calcul de rentabilité réaliste et conformité pensée dès la conception par Benoît Dezso, certifié RESCERT.`;

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
        ctaLabel={`Demander un diagnostic gratuit à ${city.name}`}
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
                Chaque installation est conçue pour passer le contrôle du premier
                coup : sections de câbles vérifiées, mise à la terre conforme,
                schéma unifilaire à jour. Pas de surprise au moment du contrôle,
                pas de contre-visite à payer.
              </p>
            )}
          </div>

          {cityContext && (
            <LocalContextBlock
              cityName={city.name}
              province={city.province}
              housingNote={cityContext.housingNote}
              contextNote={cityContext.contextNote}
              positioningNote={cityContext.positioningNote}
              locale="fr"
            />
          )}

          <LocalProof city={city} locale="fr" />
        </div>
      </section>

      {cityDeepDive && cityDeepDive.locale === "fr" && (
        <LocalCityDeepDive
          cityName={city.name}
          cityDeepDive={cityDeepDive}
          locale="fr"
        />
      )}

      {/* Bundle pièges teaser + PDF lead magnet so density stays low on
          SEO-heavy local pages. If there are no pièges for this service,
          we still surface the lead magnet on its own. */}
      {servicePieges.length > 0 ? (
        <section>
          <PiegesCarousel pieges={servicePieges} maxItems={2} />
          <div className="bg-midnight pb-12 md:pb-16 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-white/5" aria-hidden="true" />
            <div className="container-be relative z-10">
              <PDFLeadMagnetCard variant="compact" className="max-w-2xl mx-auto" />
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding bg-midnight">
          <div className="container-be">
            <PDFLeadMagnetCard variant="compact" className="max-w-2xl mx-auto" />
          </div>
        </section>
      )}

      <RealisationsLocales
        citySlug={citySlug}
        provinceName={city.province}
        serviceSlug={serviceSlug}
        maxItems={4}
        locale="fr"
      />

      <TestimonialBlock
        testimonials={cityTestimonials}
        fallbackContext={{
          citySlug,
          provinceName: city.province,
          serviceSlug,
        }}
      />

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

            {/* Contextual pillar-guide links — push authority from the
                local pages to the cornerstone guides, chosen by region. */}
            {(() => {
              const guides: { label: string; href: string }[] = [];
              if (city.region === "bruxelles") {
                guides.push({
                  label: "Certificats verts à Bruxelles en 2026",
                  href: "/guides/certificats-verts-bruxelles-2026/",
                });
              } else if (city.region === "wallonie") {
                guides.push({
                  label: "Prix des panneaux solaires en Wallonie en 2026",
                  href: "/guides/prix-panneaux-solaires-wallonie-2026/",
                });
                guides.push({
                  label: "Tarif IMPACT Wallonie : ce qui change",
                  href: "/guides/tarif-impact-wallonie-explication/",
                });
              }
              if (service.slug === "bornes-de-recharge") {
                guides.push({
                  label: "Prime borne de recharge en Belgique 2026",
                  href: "/guides/prime-borne-recharge-belgique-2026/",
                });
              }
              if (guides.length === 0) return null;
              return (
                <div className="mt-8 pt-6 border-t border-cloud">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-amber-dark mb-3">
                    Pour aller plus loin
                  </h3>
                  <ul className="space-y-2">
                    {guides.map((g) => (
                      <li key={g.href}>
                        <Link
                          href={g.href}
                          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-midnight hover:text-amber-dark transition-colors underline underline-offset-4 decoration-amber/40 hover:decoration-amber"
                        >
                          {g.label}
                          <ArrowRightIcon size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      <CTADiagnostic
        title={`Un avis honnête sur votre projet à ${city.name}`}
        description={`Visite technique sur place, devis détaillé sous 48 h avec les tarifs réels de ${city.grd}. Gratuit, sans engagement.`}
        ctaLabel={`Demander un diagnostic gratuit à ${city.name}`}
        variant="dark"
      />
    </>
  );
}
