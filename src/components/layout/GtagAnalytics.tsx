"use client";

import Script from "next/script";

const GA_ID = "G-1BJCEPF4MK";

/**
 * Google Analytics (gtag) — mounted only after the visitor accepts the
 * cookie banner. Owned by AnalyticsGate, which handles the consent
 * gating. We use Next/Script with strategy="afterInteractive" so the
 * tag loads after the page is interactive (does not block FCP / LCP).
 */
export function GtagAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
