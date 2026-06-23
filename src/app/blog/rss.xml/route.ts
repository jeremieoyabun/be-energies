import { siteConfig } from "@/lib/site-config";
import { blogArticles } from "@/data/blog";

export const runtime = "nodejs";
// Re-generate at most once per hour.
export const revalidate = 3600;

const BASE = siteConfig.url;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toUTCString();
}

export async function GET() {
  const items = blogArticles
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((a) => {
      const url = `${BASE}/blog/${a.slug}/`;
      // Plain-text excerpt for description; same as content:encoded since the
      // full body lives in MDX files (/src/content/blog/*.mdx) and isn't
      // available as raw HTML at runtime. Feed readers fall back to the
      // article URL for full content, which is the expected pattern.
      const description = escapeXml(a.excerpt);
      const contentHtml = `<![CDATA[<p>${escapeXml(a.excerpt)}</p><p><a href="${url}">Lire l'article complet</a></p>]]>`;
      const imageEnclosure = a.image
        ? `\n      <enclosure url="${BASE}${a.image}" type="image/webp" />`
        : "";
      const categories = a.tags
        .map((t) => `      <category>${escapeXml(t)}</category>`)
        .join("\n");

      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(a.date)}</pubDate>
      <author>noreply@be-energies.be (${escapeXml(a.author)})</author>
${categories}
      <description>${description}</description>
      <content:encoded>${contentHtml}</content:encoded>${imageEnclosure}
    </item>`;
    })
    .join("\n");

  const lastBuildDate = blogArticles[0]
    ? rfc822(
        blogArticles.reduce((max, a) => (a.date > max ? a.date : max), "1970-01-01"),
      )
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)} - Blog</title>
    <link>${BASE}/blog/</link>
    <description>${escapeXml(
      "Articles sur le photovoltaïque, les batteries, les bornes de recharge, et la réglementation énergétique en Belgique. Par " +
        siteConfig.founder.name +
        ".",
    )}</description>
    <language>fr-BE</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <generator>Next.js / be-energies.be</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
