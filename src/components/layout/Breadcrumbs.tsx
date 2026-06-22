import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/types";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Fil d'Ariane" className="container-be py-3">
        {/* items-baseline + leading-snug avoids the staggered look when one
            item (the current page) is `font-medium` and the others aren't —
            baselines align cleanly regardless of weight. */}
        <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-sm text-steel leading-snug">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-baseline gap-1.5">
                {index > 0 && (
                  <span className="text-cloud" aria-hidden="true">/</span>
                )}
                {isLast || !item.href ? (
                  <span className="text-midnight font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-midnight transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
