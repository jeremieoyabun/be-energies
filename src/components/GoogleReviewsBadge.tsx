import { siteConfig } from "@/lib/site-config";
import { StarIcon } from "@/lib/icons";

interface GoogleReviewsBadgeProps {
  /** Visual variant.
   *  - inline: small chip for header/hero, single line.
   *  - card:   bigger block for form sidebar / homepage hero.
   *  - dark:   for use on a dark background.
   */
  variant?: "inline" | "card" | "dark";
  className?: string;
}

/**
 * Single source of truth for the Google rating display.
 * Only renders if siteConfig.reviews has a verified rating + count + GBP URL.
 * Click-through opens the public Google Business Profile in a new tab.
 */
export function GoogleReviewsBadge({
  variant = "inline",
  className = "",
}: GoogleReviewsBadgeProps) {
  const { googleBusinessProfileUrl, rating, count } = siteConfig.reviews;
  if (!googleBusinessProfileUrl || rating == null || count == null) return null;

  // Match Google's locale-aware decimal separator.
  const ratingLabel = rating.toLocaleString("fr-BE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const fullStars = Math.round(rating);

  if (variant === "inline") {
    return (
      <a
        href={googleBusinessProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Note Google : ${ratingLabel} sur 5 — ${count} avis. Ouvrir dans Google.`}
        className={`inline-flex items-center gap-1.5 text-[12px] font-medium hover:opacity-80 transition-opacity ${className}`}
      >
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              size={12}
              className={i < fullStars ? "text-amber" : "text-cloud"}
            />
          ))}
        </span>
        <span className="data-figure font-bold">{ratingLabel}</span>
        <span className="text-steel/80">·</span>
        <span className="text-steel">{count} avis</span>
      </a>
    );
  }

  if (variant === "dark") {
    return (
      <a
        href={googleBusinessProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Note Google : ${ratingLabel} sur 5 — ${count} avis. Ouvrir dans Google.`}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/15 hover:bg-white/10 transition-colors text-[12px] ${className}`}
      >
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              size={11}
              className={i < fullStars ? "text-amber" : "text-white/20"}
            />
          ))}
        </span>
        <span className="data-figure font-bold text-white">{ratingLabel}</span>
        <span className="text-white/70">·</span>
        <span className="text-white/85">{count} avis Google</span>
      </a>
    );
  }

  // card
  return (
    <a
      href={googleBusinessProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Note Google : ${ratingLabel} sur 5 — ${count} avis. Ouvrir dans Google.`}
      className={`group flex items-center gap-3 bg-white border border-cloud rounded-xl px-4 py-3 hover:border-amber/40 transition-colors ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="data-figure text-xl font-bold text-midnight leading-none">
            {ratingLabel}
          </span>
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                size={13}
                className={i < fullStars ? "text-amber" : "text-cloud"}
              />
            ))}
          </span>
        </div>
        <span className="text-[11px] text-steel mt-1 tracking-wide uppercase">
          {count} avis Google vérifiés
        </span>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="ml-auto opacity-90"
      >
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20.4H24v7.1h11.3c-1.5 4.1-5.4 7-10.3 7-6 0-10.9-4.9-10.9-10.9S19 12.7 25 12.7c2.7 0 5.2 1 7.1 2.8l5-5C33.7 7.4 29.6 5.5 25 5.5 14.8 5.5 6.5 13.8 6.5 24S14.8 42.5 25 42.5c10.2 0 18.5-7.3 18.5-17.5 0-1.5-.2-3-.4-4.5z"
        />
        <path
          fill="#FF3D00"
          d="M8.3 14.7l5.8 4.3C15.7 15.1 19.9 12.7 25 12.7c2.7 0 5.2 1 7.1 2.8l5-5C33.7 7.4 29.6 5.5 25 5.5 17.7 5.5 11.4 9.6 8.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M25 42.5c4.6 0 8.7-1.8 11.7-4.7l-5.4-4.6c-1.8 1.3-4 2.1-6.3 2.1-4.8 0-8.8-3-10.3-7.1L9 32.7c3.1 5.1 9.3 9.8 16 9.8z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20.4H24v7.1h11.3c-.7 2-2 3.7-3.6 4.9l5.4 4.6c-.4.4 5.9-4.3 5.9-13.5 0-1.5-.2-3-.4-4.5z"
        />
      </svg>
    </a>
  );
}
