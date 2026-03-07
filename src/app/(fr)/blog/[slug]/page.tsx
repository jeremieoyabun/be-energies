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
          {/* Article header */}
          <header className="mb-12 pb-10 border-b border-cloud">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-cyan/10 text-cyan-dark text-xs font-[family-name:var(--font-data)] font-medium px-3 py-1 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-midnight leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-lg text-steel leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-steel">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-midnight text-white flex items-center justify-center text-xs font-semibold">BD</div>
                <span className="font-medium text-midnight">{article.author}</span>
              </div>
              <span className="text-cloud">&middot;</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("fr-BE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-cloud">&middot;</span>
              <span className="data-figure">{article.readingTime} min</span>
            </div>
          </header>

          {/* Article body */}
          {article.body ? (
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          ) : (
            <div className="article-prose">
              <p className="lead">{article.excerpt}</p>
              <p>Contenu en cours de r&eacute;daction.</p>
            </div>
          )}
        </div>
      </article>

      <RelatedServices services={relatedServices} />

      <CTADiagnostic variant="dark" />
    </>
  );
}
