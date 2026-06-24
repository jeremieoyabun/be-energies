"use client";

import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GtagAnalytics } from "./GtagAnalytics";

/**
 * Privacy-aware analytics gate.
 *
 * - SpeedInsights collects anonymous Core Web Vitals (no PII, no cookies).
 *   Mounted unconditionally - legal under GDPR/Belgian APD recommendations.
 * - Analytics (page-view tracking) is gated behind the cookie banner choice.
 *   Only mounts after the user clicks "J'accepte" in the cookie banner.
 *
 * The cookie banner stores its choice in localStorage under
 * `be-energies-cookie-consent`. This component subscribes to it via the same
 * useSyncExternalStore pattern so the gate flips on/off live when the user
 * changes their mind.
 */

const STORAGE_KEY = "be-energies-cookie-consent";
type Consent = "accepted" | "rejected" | null;

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function read(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

const readServer = (): Consent => null;

export function AnalyticsGate() {
  const consent = useSyncExternalStore(subscribe, read, readServer);
  return (
    <>
      <SpeedInsights />
      {consent === "accepted" && (
        <>
          <Analytics />
          <GtagAnalytics />
        </>
      )}
    </>
  );
}
