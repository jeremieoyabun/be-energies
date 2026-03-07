import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { blogArticles } from "@/data/blog";

interface BlogPreviewProps {
  maxItems?: number;
}

export function BlogPreview({ maxItems = 3 }: BlogPreviewProps) {
  const articles = blogArticles.slice(0, maxItems);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-be">
        <SectionLabel>Blog</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-10">
          Nos derniers articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}/`}
              className="group bg-white border border-cloud rounded-xl p-6 card-lift hover:border-amber/30"
            >
              <div className="flex items-center gap-2 text-xs mb-3">
                <time dateTime={article.date} className="text-steel">
                  {new Date(article.date).toLocaleDateString("fr-BE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-cloud">&middot;</span>
                <span className="data-figure text-steel">{article.readingTime} min</span>
              </div>
              <h3 className="text-lg font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">
                {article.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                Lire l&apos;article
                <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-medium transition-colors"
          >
            Tous nos articles
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
