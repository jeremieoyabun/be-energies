"use client";

import { useSyncExternalStore, useCallback } from "react";
import Link from "next/link";

const STORAGE_KEY = "be-energies-cookie-consent";

type Consent = "accepted" | "rejected";

/**
 * Minimal, GDPR-friendly cookie banner.
 *
 * The site doesn't currently load any tracking / analytics scripts, so this
 * banner is mainly a transparency notice. When the user accepts or refuses,
 * we store the choice in localStorage and stop showing it.
 *
 * To wire a future analytics tool: read `getCookieConsent()` before loading
 * the script.
 */

// useSyncExternalStore subscribers (so SSR renders nothing and the banner
// pops in once hydrated — no React 19 setState-in-effect warning).
function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readSnapshot(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

const readServerSnapshot = (): Consent | null => null;

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    readSnapshot,
    readServerSnapshot,
  );

  const persist = useCallback((value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
      // Trigger same-tab listeners so the banner hides immediately.
      window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
    } catch {
      /* ignore */
    }
  }, []);

  // Server render + hydrated client with prior choice → no banner.
  if (consent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Préférences de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] md:bottom-4 md:left-4 md:right-4 md:max-w-xl md:mx-auto"
    >
      <div className="m-3 md:m-0 bg-midnight text-silver border border-charcoal rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span
            aria-hidden="true"
            className="shrink-0 w-9 h-9 rounded-lg bg-amber/15 text-amber flex items-center justify-center text-base"
          >
            🍪
          </span>
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              Cookies &amp; vie privée
            </p>
            <p className="text-xs text-silver/80 leading-relaxed">
              Ce site utilise uniquement des cookies strictement nécessaires
              à son fonctionnement. Aucun cookie de suivi publicitaire
              n&apos;est déposé. Voir notre{" "}
              <Link
                href="/politique-de-confidentialite/"
                className="underline hover:text-white"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="cta-glow flex-1 inline-flex items-center justify-center bg-amber hover:bg-amber-dark text-midnight font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            J&apos;accepte
          </button>
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white/85 hover:text-white px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Refuser
          </button>
          <Link
            href="/politique-de-confidentialite/"
            className="hidden sm:inline-flex items-center justify-center text-silver/70 hover:text-white text-xs underline self-center px-3"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Public helper for future analytics scripts. */
export function getCookieConsent(): Consent | null {
  return readSnapshot();
}
