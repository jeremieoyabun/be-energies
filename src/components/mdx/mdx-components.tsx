import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import Link from "next/link";
import { Term } from "@/components/Term";

/**
 * MDX component mappings for Be'energies editorial content.
 *
 * Aligns with the existing `.article-prose` design language in
 * `src/app/globals.css`: serif headings, generous line-height, amber accents,
 * and structured lists. Headings are tuned for in-article hierarchy
 * (h1 reserved for the page shell — MDX content usually starts at h2).
 *
 * Usage:
 *   import { mdxComponents } from "@/components/mdx/mdx-components";
 *   <MDXRemote {...source} components={mdxComponents} />
 *
 * Or for the App Router `mdx-components.tsx` convention, re-export
 * `useMDXComponents` from the project root.
 */

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

function MdxAnchor({ href = "", children, className, ...rest }: AnchorProps) {
  const isExternal = /^https?:\/\//i.test(href) || href.startsWith("//");
  const isHash = href.startsWith("#");
  const cls =
    className ??
    "text-amber-dark underline decoration-amber/40 underline-offset-[3px] hover:decoration-amber-dark transition-colors";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={
        className ??
        "font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.01em] text-midnight mt-12 mb-6"
      }
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={
        className ??
        "font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.15] tracking-[-0.01em] text-midnight mt-14 mb-4 first:mt-0"
      }
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={
        className ??
        "font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.25] tracking-[-0.005em] text-midnight mt-10 mb-3"
      }
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={
        className ??
        "font-sans text-[1.0625rem] font-semibold uppercase tracking-[0.06em] text-midnight mt-8 mb-2"
      }
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={
        className ??
        "text-[17px] leading-[1.75] text-charcoal/90 my-5 [&_strong]:font-semibold [&_strong]:text-midnight"
      }
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={
        className ??
        "my-6 space-y-2 text-[17px] leading-[1.7] text-charcoal/90 [&>li]:relative [&>li]:pl-6 [&>li:before]:content-[''] [&>li:before]:absolute [&>li:before]:left-1 [&>li:before]:top-[0.7em] [&>li:before]:w-2 [&>li:before]:h-px [&>li:before]:bg-amber-dark"
      }
      {...props}
    />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={
        className ??
        "my-6 space-y-2 text-[17px] leading-[1.7] text-charcoal/90 list-decimal pl-6 marker:text-amber-dark marker:font-semibold"
      }
      {...props}
    />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li className={className} {...props} />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={
        className ??
        "my-8 border-l-2 border-amber-dark pl-6 py-2 font-serif text-[1.25rem] leading-[1.55] text-midnight italic"
      }
      {...props}
    />
  ),
  hr: ({ className, ...props }: HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={className ?? "my-12 border-0 h-px bg-charcoal/15"}
      {...props}
    />
  ),
  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong
      className={className ?? "font-semibold text-midnight"}
      {...props}
    />
  ),
  em: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <em className={className ?? "italic"} {...props} />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className={
        className ??
        "font-mono text-[0.92em] bg-charcoal/8 text-midnight px-1.5 py-0.5 rounded"
      }
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={
        className ??
        "my-6 overflow-x-auto rounded-lg bg-midnight text-silver p-4 text-[14px] leading-[1.6] font-mono"
      }
      {...props}
    />
  ),
  a: MdxAnchor,
  // Custom components available inside MDX content.
  Term,
};

/**
 * App Router convention helper. Re-export from the project root
 * `mdx-components.tsx` if you want Next.js to auto-discover these
 * mappings for .mdx pages:
 *
 *   // /mdx-components.tsx
 *   export { useMDXComponents } from "@/components/mdx/mdx-components";
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}

export default mdxComponents;
