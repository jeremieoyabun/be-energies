import crypto from "node:crypto";
import type { LeadMagnetSlug } from "./lead-magnet";

/**
 * HMAC-signed short-lived tokens for lead-magnet PDF downloads.
 *
 * The signed payload is `${slug}.${expEpochMs}` — both values are then
 * passed through the URL as ?exp= and ?sig=. The token only proves
 * "someone went through the lead form within the last 30 minutes for
 * this slug" — it intentionally does NOT carry the email so the URL can
 * be shared without leaking personal data.
 *
 * Anyone with LEAD_MAGNET_TOKEN_SECRET can mint tokens, so keep it server-
 * only. The secret is never sent to the client.
 */

const ALG = "sha256";
const DEFAULT_TTL_MS = 30 * 60 * 1000;

// Process-lifetime fallback secret. Used only when LEAD_MAGNET_TOKEN_SECRET
// is not configured on the host — keeps the download flow working in
// pre-launch / staging environments. Tokens minted with this secret are
// valid only within the same Node.js process; deploys invalidate them,
// which is fine since modal-flow tokens are used within seconds anyway.
let RUNTIME_FALLBACK_SECRET: string | null = null;
function getSecret(): string {
  const env = process.env.LEAD_MAGNET_TOKEN_SECRET;
  if (env && env.length >= 16) return env;
  if (!RUNTIME_FALLBACK_SECRET) {
    RUNTIME_FALLBACK_SECRET = crypto.randomBytes(32).toString("hex");
    console.warn(
      "[lead-token] LEAD_MAGNET_TOKEN_SECRET not set on host — minting an ephemeral process secret. Set the env var on Vercel for cross-deploy stability.",
    );
  }
  return RUNTIME_FALLBACK_SECRET;
}

function sign(payload: string, secret: string): string {
  return crypto.createHmac(ALG, secret).update(payload).digest("base64url");
}

export interface SignedLeadToken {
  exp: number;
  sig: string;
}

export function signLeadToken(
  slug: LeadMagnetSlug,
  options: { ttlMs?: number; now?: number } = {},
): SignedLeadToken {
  const now = options.now ?? Date.now();
  const ttl = options.ttlMs ?? DEFAULT_TTL_MS;
  const exp = now + ttl;
  const sig = sign(`${slug}.${exp}`, getSecret());
  return { exp, sig };
}

export interface VerifyResult {
  ok: boolean;
  reason?: "missing" | "malformed" | "expired" | "tampered";
}

export function verifyLeadToken(
  slug: LeadMagnetSlug,
  exp: unknown,
  sig: unknown,
  options: { now?: number } = {},
): VerifyResult {
  if (typeof exp !== "string" || typeof sig !== "string") {
    return { ok: false, reason: "missing" };
  }
  const expNum = Number(exp);
  if (!Number.isFinite(expNum) || expNum <= 0) {
    return { ok: false, reason: "malformed" };
  }
  const now = options.now ?? Date.now();
  if (now > expNum) {
    return { ok: false, reason: "expired" };
  }
  const expected = sign(`${slug}.${expNum}`, getSecret());

  // Timing-safe comparison — both buffers must be the same length, so
  // fail fast on length mismatch (a typical tampered-with sig would be
  // the wrong length anyway).
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { ok: false, reason: "tampered" };
  }
  return { ok: true };
}

export function buildDownloadUrl(
  slug: LeadMagnetSlug,
  pdfPath: string,
  options: { ttlMs?: number; now?: number } = {},
): string {
  const { exp, sig } = signLeadToken(slug, options);
  const sep = pdfPath.includes("?") ? "&" : "?";
  return `${pdfPath}${sep}exp=${exp}&sig=${encodeURIComponent(sig)}`;
}
