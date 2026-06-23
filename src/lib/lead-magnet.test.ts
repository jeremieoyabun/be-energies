import { describe, it, expect } from "vitest";
import { validateLeadMagnet, LEAD_MAGNETS } from "./lead-magnet";

const valid = {
  email: "jean.dupont@exemple.be",
  firstName: "Jean",
  leadMagnetSlug: "pieges-a-eviter",
  sourcePage: "/services/panneaux-photovoltaiques/",
  consentMarketing: false,
};

describe("validateLeadMagnet", () => {
  it("accepts a minimal valid payload (email + slug only)", () => {
    const result = validateLeadMagnet({
      email: "anna@be.be",
      leadMagnetSlug: "pieges-a-eviter",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.email).toBe("anna@be.be");
    expect(result.data.firstName).toBeUndefined();
    expect(result.data.consentMarketing).toBe(false);
  });

  it("accepts a full valid payload", () => {
    const result = validateLeadMagnet(valid);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.firstName).toBe("Jean");
    expect(result.data.sourcePage).toBe(
      "/services/panneaux-photovoltaiques/",
    );
  });

  it("normalises the email to lowercase", () => {
    const result = validateLeadMagnet({
      email: "  Mixed.Case@Example.BE  ",
      leadMagnetSlug: "pieges-a-eviter",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.email).toBe("mixed.case@example.be");
  });

  it("rejects a missing email", () => {
    const result = validateLeadMagnet({
      ...valid,
      email: "",
    });
    expect(result.ok).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("rejects an obviously malformed email", () => {
    const result = validateLeadMagnet({ ...valid, email: "not-an-email" });
    expect(result.ok).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("rejects an unknown lead magnet slug", () => {
    const result = validateLeadMagnet({
      ...valid,
      leadMagnetSlug: "guide-secret",
    });
    expect(result.ok).toBe(false);
    expect(result.errors.leadMagnetSlug).toBeDefined();
  });

  it("treats a filled honeypot as an invalid request", () => {
    const result = validateLeadMagnet({
      ...valid,
      company: "Bots Inc.",
    });
    expect(result.ok).toBe(false);
    expect(result.errors._form).toBeDefined();
  });

  it("accepts checkbox-style consent values", () => {
    for (const truthy of [true, "on", "true", "yes"]) {
      const result = validateLeadMagnet({
        ...valid,
        consentMarketing: truthy,
      });
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.data.consentMarketing).toBe(true);
    }
  });

  it("rejects non-object input", () => {
    expect(validateLeadMagnet(null).ok).toBe(false);
    expect(validateLeadMagnet("string").ok).toBe(false);
    expect(validateLeadMagnet(42).ok).toBe(false);
  });

  it("truncates very long firstName and sourcePage", () => {
    const result = validateLeadMagnet({
      ...valid,
      firstName: "x".repeat(500),
      sourcePage: "y".repeat(500),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.firstName!.length).toBeLessThanOrEqual(60);
    expect(result.data.sourcePage!.length).toBeLessThanOrEqual(200);
  });
});

describe("LEAD_MAGNETS catalog", () => {
  it("has a pieges-a-eviter entry with a working PDF path", () => {
    const entry = LEAD_MAGNETS["pieges-a-eviter"];
    expect(entry).toBeDefined();
    expect(entry.pdfPath).toMatch(/^\/api\/guide\//);
    expect(entry.title.length).toBeGreaterThan(10);
  });
});
