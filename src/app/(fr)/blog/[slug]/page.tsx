import { notFound } from "next/navigation";
import { blogArticles, getBlogArticleBySlug } from "@/data/blog";
import { getServiceBySlugFr } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, articleSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};
  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}/`,
  });
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) notFound();

  const relatedServices = article.relatedServices
    .map((s) => getServiceBySlugFr(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlugFr>>[];

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          url: `/blog/${article.slug}/`,
          datePublished: article.date,
          author: article.author,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: article.title },
        ]}
      />

      <article className="section-padding">
        <div className="container-be max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-midnight leading-tight">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-steel">
              <span>Par {article.author}</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("fr-BE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{article.readingTime} min de lecture</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-ivory text-steel text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {article.body ? (
            <div
              className="prose prose-lg max-w-none text-charcoal"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          ) : (
            <div className="prose prose-lg max-w-none text-charcoal">
              <p className="lead">{article.excerpt}</p>
              <p>Contenu en cours de redaction.</p>
            </div>
          )}
        </div>
      </article>

      <RelatedServices services={relatedServices} />

      <CTADiagnostic variant="dark" />
    </>
  );
}
