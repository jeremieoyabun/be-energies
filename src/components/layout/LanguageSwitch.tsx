"use client";

import Link from "next/link";

/**
 * Footer language switcher. Writes a long-lived `be-locale` cookie so the
 * middleware respects the user's explicit choice and never re-redirects
 * based on the browser's Accept-Language header.
 */
export function LanguageSwitch() {
  function lock(locale: "fr" | "nl") {
    document.cookie = `be-locale=${locale};path=/;max-age=31536000;samesite=lax`;
  }

  return (
    <div className="inline-flex items-center gap-1">
      <Link
        href="/"
        onClick={() => lock("fr")}
        className="font-semibold text-silver hover:text-white transition-colors uppercase"
      >
        FR
      </Link>
      <span className="text-charcoal">/</span>
      <Link
        href="/nl/"
        onClick={() => lock("nl")}
        className="font-semibold text-steel hover:text-white transition-colors uppercase"
      >
        NL
      </Link>
    </div>
  );
}
