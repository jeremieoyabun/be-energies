import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { realizations, getRealizationBySlug } from "@/data/realizations";
import { getServiceBySlugFr } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { MapPinIcon } from "@/lib/icons";

interface RealizationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return realizations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: RealizationPageProps) {
  const { slug } = await params;
  const realization = getRealizationBySlug(slug);
  if (!realization) return {};
  return generatePageMetadata({
    title: realization.title,
    description: realization.description.slice(0, 160),
    path: `/realisations/${realization.slug}/`,
  });
}

const categoryLabels: Record<string, string> = {
  standard: "Installation standard",
  correction: "Correction / reprise",
  renovation: "Renovation",
  premium: "Installation premium",
};

const clientTypeLabels: Record<string, string> = {
  residential: "Residentiel",
  professional: "Professionnel",
};

export default async function RealizationDetailPage({ params }: RealizationPageProps) {
  const { slug } = await params;
  const realization = getRealizationBySlug(slug);
  if (!realization) notFound();

  const service = getServiceBySlugFr(realization.service);
  const relatedServices = service ? [service] : [];

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: realization.title,
          description: realization.description,
          url: `/realisations/${realization.slug}/`,
          datePublished: realization.date,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Realisations", href: "/realisations/" },
          { name: realization.title },
        ]}
      />

      <section className="section-padding">
        <div className="container-be max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-midnight">
            {realization.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-steel">
            <span className="flex items-center gap-1">
              <MapPinIcon size={14} />
              {realization.city}
            </span>
            {realization.kwc && <span>{realization.kwc} kWc</span>}
            {realization.panelCount && <span>{realization.panelCount} panneaux</span>}
            {realization.clientType && (
              <span className="bg-ivory px-2 py-0.5 rounded text-xs font-medium">
                {clientTypeLabels[realization.clientType]}
              </span>
            )}
            {realization.category && (
              <span className="bg-ivory px-2 py-0.5 rounded text-xs font-medium">
                {categoryLabels[realization.category]}
              </span>
            )}
            {realization.brands?.map((b) => (
              <span key={b} className="bg-ivory px-2 py-0.5 rounded text-xs font-medium">{b}</span>
            ))}
          </div>

          {/* Image gallery */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {realization.images.map((img, i) => (
              <div key={i} className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate/10 relative">
                <Image
                  src={img}
                  alt={`${realization.title} -- photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-8 prose prose-lg max-w-none text-charcoal">
            <p>{realization.description}</p>
          </div>

          {/* Case study sections */}
          {realization.caseStudy && (
            <div className="mt-12 space-y-10">
              {/* Challenge */}
              <div className="border-l-4 border-amber pl-6">
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-3">
                  Le defi
                </h2>
                <p className="text-charcoal leading-relaxed">
                  {realization.caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="border-l-4 border-emerald-600 pl-6">
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-3">
                  Notre solution
                </h2>
                <p className="text-charcoal leading-relaxed">
                  {realization.caseStudy.solution}
                </p>
              </div>

              {/* Result */}
              <div className="border-l-4 border-sky-600 pl-6">
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-3">
                  Le resultat
                </h2>
                <p className="text-charcoal leading-relaxed">
                  {realization.caseStudy.result}
                </p>
              </div>

              {/* Technical details */}
              {realization.caseStudy.technicalDetails &&
                realization.caseStudy.technicalDetails.length > 0 && (
                  <div className="bg-midnight/5 rounded-2xl p-6 md:p-8">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] text-midnight mb-4">
                      Details techniques
                    </h3>
                    <ul className="space-y-2">
                      {realization.caseStudy.technicalDetails.map(
                        (detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-charcoal"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                            {detail}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </div>
          )}

          {service && (
            <div className="mt-10">
              <Link
                href={`/services/${service.slug}/`}
                className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-medium transition-colors"
              >
                En savoir plus sur {service.title.toLowerCase()}
              </Link>
            </div>
          )}
        </div>
      </section>

      <RelatedServices services={relatedServices} title="Service associe" />

      <CTADiagnostic variant="dark" />
    </>
  );
}
