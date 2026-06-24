import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  signLeadToken,
  verifyLeadToken,
  buildDownloadUrl,
} from "./lead-token";

const SECRET = "abcdefghij0123456789abcdef01234567";
const ORIGINAL = process.env.LEAD_MAGNET_TOKEN_SECRET;

beforeEach(() => {
  process.env.LEAD_MAGNET_TOKEN_SECRET = SECRET;
});

afterEach(() => {
  process.env.LEAD_MAGNET_TOKEN_SECRET = ORIGINAL;
});

describe("signLeadToken / verifyLeadToken", () => {
  it("round-trips a valid token", () => {
    const now = 1_700_000_000_000;
    const { exp, sig } = signLeadToken("pieges-a-eviter", { now });
    expect(exp).toBe(now + 30 * 60 * 1000);
    const result = verifyLeadToken("pieges-a-eviter", String(exp), sig, {
      now: now + 1_000,
    });
    expect(result.ok).toBe(true);
  });

  it("rejects an expired token", () => {
    const now = 1_700_000_000_000;
    const { exp, sig } = signLeadToken("pieges-a-eviter", { now });
    const result = verifyLeadToken("pieges-a-eviter", String(exp), sig, {
      now: now + 60 * 60 * 1000, // 1h later, token TTL is 30 min
    });
    expect(result.ok).toBe(false);
    expect(result.reason).toBe("expired");
  });

  it("rejects a tampered signature", () => {
    const now = 1_700_000_000_000;
    const { exp, sig } = signLeadToken("pieges-a-eviter", { now });
    const tampered = sig.slice(0, -1) + "_";
    const result = verifyLeadToken(
      "pieges-a-eviter",
      String(exp),
      tampered,
      { now: now + 1_000 },
    );
    expect(result.ok).toBe(false);
    expect(["tampered", "malformed"]).toContain(result.reason);
  });

  it("rejects when verifying with a different slug", () => {
    // We only have one slug today; emulate by signing with a fake one and
    // verifying against the real one. The secret is the same — only the
    // payload changes — so the signature should mismatch.
    const now = 1_700_000_000_000;
    const exp = now + 60_000;
    const sig = (signLeadToken as unknown as (
      s: string,
      o: { now?: number; ttlMs?: number },
    ) => { exp: number; sig: string })("other-slug", { now });
    const result = verifyLeadToken(
      "pieges-a-eviter",
      String(sig.exp),
      sig.sig,
      { now: now + 1_000 },
    );
    void exp; // explicit ignore
    expect(result.ok).toBe(false);
  });

  it("rejects missing exp or sig", () => {
    expect(
      verifyLeadToken("pieges-a-eviter", undefined, "abc").ok,
    ).toBe(false);
    expect(verifyLeadToken("pieges-a-eviter", "123", undefined).ok).toBe(
      false,
    );
  });

  it("rejects a malformed exp (non-numeric)", () => {
    const result = verifyLeadToken("pieges-a-eviter", "not-a-number", "x");
    expect(result.ok).toBe(false);
    expect(result.reason).toBe("malformed");
  });

  it("falls back to an ephemeral process secret if the env secret is missing or too short", () => {
    // Without an env secret, sign+verify should still round-trip
    // using a process-lifetime fallback. This keeps the download flow
    // working in environments where the env var hasn't been set yet.
    process.env.LEAD_MAGNET_TOKEN_SECRET = undefined;
    const a = signLeadToken("pieges-a-eviter");
    expect(a.sig.length).toBeGreaterThan(20);
    expect(
      verifyLeadToken("pieges-a-eviter", String(a.exp), a.sig).ok,
    ).toBe(true);

    process.env.LEAD_MAGNET_TOKEN_SECRET = "short";
    const b = signLeadToken("pieges-a-eviter");
    expect(b.sig.length).toBeGreaterThan(20);
    expect(
      verifyLeadToken("pieges-a-eviter", String(b.exp), b.sig).ok,
    ).toBe(true);
  });
});

describe("buildDownloadUrl", () => {
  it("appends exp and sig query parameters", () => {
    const now = 1_700_000_000_000;
    const url = buildDownloadUrl(
      "pieges-a-eviter",
      "/api/guide/pieges/",
      { now },
    );
    expect(url).toMatch(/\/api\/guide\/pieges\/\?exp=\d+&sig=/);
  });

  it("uses & if the path already has a query string", () => {
    const url = buildDownloadUrl(
      "pieges-a-eviter",
      "/api/guide/pieges/?ref=footer",
    );
    expect(url).toMatch(/\?ref=footer&exp=\d+&sig=/);
  });
});
