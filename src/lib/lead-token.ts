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

function getSecret(): string {
  const s = process.env.LEAD_MAGNET_TOKEN_SECRET;
  if (!s || s.length < 16) {
    throw new Error(
      "LEAD_MAGNET_TOKEN_SECRET is not configured (need at least 16 chars).",
    );
  }
  return s;
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
