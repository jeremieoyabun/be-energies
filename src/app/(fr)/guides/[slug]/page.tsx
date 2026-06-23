import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPillarGuides,
  getPillarGuide,
  type PillarGuideSection,
} from "@/data/pillar-guides";
import { generatePageMetadata } from "@/lib/metadata";
import {
  JsonLd,
  articleSchema,
  faqSchema,
  localBusinessSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ChevronDownIcon } from "@/lib/icons";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPillarGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getPillarGuide(slug);
  if (!guide) return {};
  return generatePageMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}/`,
  });
}

// ---------------------------------------------------------------------------
// Render helpers
// ---------------------------------------------------------------------------

/** Split the body on blank lines and render each block as its own <p>. */
function renderBody(body: string) {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return paragraphs.map((p, i) => (
    <p key={i} className="text-charcoal leading-relaxed mb-5 last:mb-0">
      {p}
    </p>
  ));
}

function GuideTable({ data }: { data: NonNullable<PillarGuideSection["tableData"]> }) {
  return (
    <figure className="mt-8 mb-2">
      <div className="overflow-x-auto rounded-2xl border border-cloud">
        <table className="w-full text-sm">
          <thead className="bg-ivory text-midnight">
            <tr>
              {data.headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="text-left font-semibold px-4 py-3 border-b border-cloud"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => (
              <tr
                key={ri}
                className="odd:bg-white even:bg-ivory/40 border-b border-cloud/70 last:border-b-0"
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-4 py-3 align-top text-charcoal leading-relaxed"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-xs text-steel italic leading-relaxed">
        {data.caption}
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getPillarGuide(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}/`;
  // Pillar pages always carry a meaningful 1st-of-month date so Article
  // schema validates. `lastUpdated` is "YYYY-MM"; we anchor to day 01.
  const dateModified = `${guide.lastUpdated}-01`;

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Guides", href: "/guides/" },
    { name: guide.h1 },
  ];

  return (
    <>
      {/* Schemas: Article + FAQPage + LocalBusiness + Breadcrumb */}
      <JsonLd
        data={[
          articleSchema({
            title: guide.title,
            description: guide.metaDescription,
            url: path,
            // Publication date is unknown; use the same anchor as modified.
            // Pillar pages are updated regularly so dateModified is what
            // actually matters for freshness signals.
            datePublished: dateModified,
            dateModified,
          }),
          faqSchema(guide.faq),
          localBusinessSchema(),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <HeroSection
        headline={guide.h1}
        subheadline={guide.introduction}
        ctaLabel="Demander un diagnostic gratuit"
        ctaHref="/contact/"
        secondaryCta={{
          label: "Faire vérifier mon devis",
          href: "/devis-analyse/",
        }}
        variant="compact"
      />

      {/* Last-updated stamp + table of contents */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <p className="text-xs font-[family-name:var(--font-data)] text-steel uppercase tracking-[0.12em] mb-6">
            Mise à jour&nbsp;: {guide.lastUpdated}
          </p>
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
            Sommaire
          </h2>
          <nav aria-label="Sommaire de l'article">
            <ol className="space-y-2">
              {guide.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <span className="shrink-0 w-7 h-7 flex items-center justify-center bg-midnight text-white text-xs font-bold rounded-full mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-charcoal group-hover:text-midnight transition-colors leading-snug">
                      {s.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Sections */}
      {guide.sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section-padding ${i % 2 === 0 ? "" : "bg-ivory"}`}
        >
          <div className="container-be max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-midnight text-white font-bold rounded-full">
                {i + 1}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-6 leading-tight">
              {s.title}
            </h2>
            <div className="text-lg">{renderBody(s.body)}</div>
            {s.tableData && <GuideTable data={s.tableData} />}
          </div>
        </section>
      ))}

      {/* Sources */}
      {guide.sources_cited && guide.sources_cited.length > 0 && (
        <section className="py-10 bg-ivory">
          <div className="container-be max-w-3xl">
            <details className="group border border-cloud rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between w-full text-left p-5 hover:bg-ivory transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-midnight">
                  Sources et références ({guide.sources_cited.length})
                </span>
                <ChevronDownIcon
                  size={18}
                  className="shrink-0 text-steel transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <ul className="px-5 pb-5 pt-4 border-t border-cloud space-y-2 text-sm">
                {guide.sources_cited.map((src) => (
                  <li key={src} className="break-words">
                    <a
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-steel hover:text-midnight underline underline-offset-2 decoration-cloud hover:decoration-amber"
                    >
                      {src}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection items={guide.faq} title="Questions fréquentes" />

      {/* Bottom CTA row */}
      <section className="section-padding bg-midnight">
        <div className="container-be max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-white text-center mb-3">
            Prochaine étape
          </h2>
          <p className="text-silver text-center mb-10 max-w-2xl mx-auto">
            Un guide ne remplace pas une analyse de votre cas. Faites lire
            votre devis ou demandez un diagnostic gratuit sans engagement.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/devis-analyse/"
              className="block bg-white/5 border border-white/10 hover:border-amber/60 rounded-2xl p-6 transition-colors group"
            >
              <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber mb-2">
                Analyse de devis
              </p>
              <h3 className="text-xl font-[family-name:var(--font-heading)] text-white mb-2 group-hover:text-amber-light transition-colors">
                Faites lire votre devis solaire
              </h3>
              <p className="text-sm text-silver leading-relaxed">
                Un ancien inspecteur passe le devis au crible : matériel,
                garanties, conformité, rentabilité. Gratuit et sans
                engagement.
              </p>
            </Link>
            <Link
              href="/pieges-a-eviter/"
              className="block bg-white/5 border border-white/10 hover:border-amber/60 rounded-2xl p-6 transition-colors group"
            >
              <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber mb-2">
                Pour aller plus loin
              </p>
              <h3 className="text-xl font-[family-name:var(--font-heading)] text-white mb-2 group-hover:text-amber-light transition-colors">
                Les 10 pièges à éviter avant de signer
              </h3>
              <p className="text-sm text-silver leading-relaxed">
                Le guide complet des erreurs les plus coûteuses, vues sur le
                terrain par un ancien inspecteur certifié RESCERT.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
