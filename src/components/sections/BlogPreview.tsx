import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/lib/icons";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { blogArticles } from "@/data/blog";

interface BlogPreviewProps {
  maxItems?: number;
  showFooterLink?: boolean;
  tightTop?: boolean;
}

export function BlogPreview({
  maxItems = 3,
  showFooterLink = true,
  tightTop = false,
}: BlogPreviewProps) {
  const articles =
    typeof maxItems === "number" ? blogArticles.slice(0, maxItems) : blogArticles;

  return (
    <section
      className={`${tightTop ? "pb-20 md:pb-24 pt-8 md:pt-10" : "section-padding"} bg-ivory`}
    >
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
              className="group bg-white border border-cloud rounded-xl overflow-hidden card-lift hover:border-amber/30 flex flex-col"
            >
              {article.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs mb-3">
                  <time dateTime={article.date} className="text-steel">
                    {new Date(article.date).toLocaleDateString("fr-BE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-cloud">&middot;</span>
                  <span className="data-figure text-steel">
                    {article.readingTime} min
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-midnight group-hover:text-amber-dark transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-dark">
                  Lire l&apos;article
                  <ArrowRightIcon
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
        {showFooterLink && (
          <div className="mt-8 text-center">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-medium transition-colors"
            >
              Tous nos articles
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
