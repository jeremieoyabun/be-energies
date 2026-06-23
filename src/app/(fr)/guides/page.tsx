import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import {
  JsonLd,
  localBusinessSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { getAllPillarGuides } from "@/data/pillar-guides";
import { ArrowRightIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Guides longs -- Tout savoir avant d'investir",
  description:
    "Guides longs pour décider en connaissance de cause : prix panneaux solaires en Wallonie, prime borne, tarif IMPACT, certificats verts Bruxelles 2026. Données sourcées, mises à jour.",
  path: "/guides/",
});

export default function GuidesIndexPage() {
  const guides = getAllPillarGuides();

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Guides" },
  ];

  return (
    <>
      <JsonLd
        data={[localBusinessSchema(), breadcrumbSchema(breadcrumbItems)]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <HeroSection
        headline="Tout savoir avant d'investir"
        subheadline="Quatre guides longs, sourcés et mis à jour, pour décider en connaissance de cause. Ce qu'un installateur honnête vous dirait si vous aviez deux heures avec lui."
        ctaLabel="Mon diagnostic gratuit"
        ctaHref="/contact/"
        secondaryCta={{
          label: "Analyser mon devis",
          href: "/devis-analyse/",
        }}
        variant="compact"
      />

      <section className="section-padding">
        <div className="container-be max-w-5xl">
          <p className="text-xs font-[family-name:var(--font-data)] text-amber-dark uppercase tracking-[0.14em] mb-3">
            Guides longs
          </p>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-4 leading-tight">
            Lecture profonde, sources officielles, sans bullshit
          </h2>
          <p className="text-charcoal leading-relaxed max-w-2xl mb-12">
            Chaque guide reprend les textes officiels (CWaPE, Brugel, SPF
            Finances, ORES, Sibelga), explique ce qui a changé en 2026, et
            traduit les chiffres en décisions concrètes pour votre maison ou
            votre entreprise.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}/`}
                className="group block bg-white border border-cloud rounded-2xl p-6 md:p-7 hover:border-amber/60 hover:shadow-lg transition-all"
              >
                <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
                  Mis à jour {g.lastUpdated}
                </p>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-3 leading-tight group-hover:text-amber-dark transition-colors">
                  {g.h1}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed mb-5 line-clamp-4">
                  {g.metaDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-amber-dark font-medium text-sm group-hover:gap-2.5 transition-all">
                  Lire le guide
                  <ArrowRightIcon size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom row reminding visitors of the analytical next step */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-4">
            Un guide ne remplace pas une analyse
          </h2>
          <p className="text-charcoal max-w-xl mx-auto mb-7">
            Vous avez déjà un devis en main, ou vous voulez un avis sur votre
            situation précise ? On regarde, on dit ce qui va, ce qui ne va
            pas, et ce qu&apos;il faut négocier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/devis-analyse/"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Faire analyser mon devis
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 border border-cloud hover:border-midnight/40 text-charcoal hover:text-midnight font-medium px-7 py-3.5 rounded-xl transition-colors"
            >
              Demander un diagnostic
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
