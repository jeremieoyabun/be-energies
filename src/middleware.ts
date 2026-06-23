import { NextResponse, type NextRequest } from "next/server";

/**
 * Browser-language detection.
 *
 * - First visit on a /fr-rooted path (i.e. NOT starting with /nl): if the
 *   browser's preferred language is Dutch and the user hasn't opted out,
 *   redirect once to the /nl/ equivalent.
 * - We persist a "locale" cookie so a Walloon visitor with a Dutch browser
 *   header can stay on FR after their first redirect (we never re-redirect
 *   once the cookie is set).
 * - The cookie is also set when the user opens the language switcher in the
 *   footer (read by an inline script, see Footer.tsx) - but for now the
 *   middleware writes it on first NL detection.
 *
 * Matcher (config below) excludes API routes, static assets, the showcase
 * playground and the sitemap so the middleware only runs on real pages.
 */

const LOCALE_COOKIE = "be-locale";

function preferredIsNl(acceptLanguage: string | null): boolean {
  if (!acceptLanguage) return false;
  // "nl-BE,nl;q=0.9,fr;q=0.7" → "nl"
  const first = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0].toLowerCase())[0];
  return first.startsWith("nl");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on a NL path - nothing to do.
  if (pathname === "/nl" || pathname.startsWith("/nl/")) {
    return NextResponse.next();
  }

  // User locked their language explicitly - never override.
  const stored = request.cookies.get(LOCALE_COOKIE)?.value;
  if (stored === "fr" || stored === "nl") {
    // If they explicitly chose NL but landed on FR (e.g. via direct URL),
    // do NOT redirect: respect the URL they typed.
    return NextResponse.next();
  }

  // First visit. Honour the browser preference.
  if (preferredIsNl(request.headers.get("accept-language"))) {
    const nlUrl = request.nextUrl.clone();
    nlUrl.pathname = `/nl${pathname === "/" ? "/" : pathname}`;
    const response = NextResponse.redirect(nlUrl);
    // Lock the choice for 1 year so the redirect happens only once.
    response.cookies.set(LOCALE_COOKIE, "nl", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // Default - keep them on FR and remember it so future Accept-Language
  // changes don't ping-pong them.
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, "fr", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    // Run on everything EXCEPT: api/*, _next/*, static files, sitemap.xml,
    // robots.txt, favicons, the showcase, and the PDF guide route.
    "/((?!api|_next|showcase|sitemap.xml|robots.txt|favicon.ico|icon|img|vds|RESCERT|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
