import { describe, it, expect } from "vitest";
import { validateContact } from "./contact-form";

const validPayload = {
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
  phone: "+32 470 12 34 56",
  postal: "1000 Bruxelles",
  projectType: "panneaux-photovoltaiques",
  buildingType: "maison",
  timeline: "3-months",
  existingQuote: false,
  message: "Bonjour, je souhaite un diagnostic.",
  gdpr: true,
};

describe("validateContact", () => {
  it("accepts a fully populated valid payload", () => {
    const result = validateContact(validPayload);
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual({});
    expect(result.data).toMatchObject({
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      phone: "+32 470 12 34 56",
      postal: "1000 Bruxelles",
      projectType: "panneaux-photovoltaiques",
      buildingType: "maison",
      timeline: "3-months",
      existingQuote: false,
      message: "Bonjour, je souhaite un diagnostic.",
      gdpr: true,
    });
  });

  it("rejects non-object input", () => {
    const result = validateContact("not an object");
    expect(result.ok).toBe(false);
    expect(result.errors._form).toBeDefined();
  });

  it("rejects null input", () => {
    const result = validateContact(null);
    expect(result.ok).toBe(false);
    expect(result.errors._form).toBeDefined();
  });

  it("fails when name is missing", () => {
    const result = validateContact({ ...validPayload, name: "" });
    expect(result.ok).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it("fails when name is a single character", () => {
    const result = validateContact({ ...validPayload, name: "A" });
    expect(result.ok).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it("fails when email is missing", () => {
    const result = validateContact({ ...validPayload, email: "" });
    expect(result.ok).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("fails on invalid email format (no @)", () => {
    const result = validateContact({ ...validPayload, email: "not-an-email" });
    expect(result.ok).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("fails on invalid email format (no TLD)", () => {
    const result = validateContact({ ...validPayload, email: "user@host" });
    expect(result.ok).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("fails when phone is missing", () => {
    const result = validateContact({ ...validPayload, phone: "" });
    expect(result.ok).toBe(false);
    expect(result.errors.phone).toBeDefined();
  });

  it("fails when phone is too short", () => {
    const result = validateContact({ ...validPayload, phone: "+3247" });
    expect(result.ok).toBe(false);
    expect(result.errors.phone).toBeDefined();
  });

  it("fails when phone contains letters", () => {
    const result = validateContact({ ...validPayload, phone: "+32abcdefgh" });
    expect(result.ok).toBe(false);
    expect(result.errors.phone).toBeDefined();
  });

  it("accepts a Belgian phone starting with 0", () => {
    const result = validateContact({ ...validPayload, phone: "0470123456" });
    expect(result.ok).toBe(true);
  });

  it("fails when postal/city is missing", () => {
    const result = validateContact({ ...validPayload, postal: "" });
    expect(result.ok).toBe(false);
    expect(result.errors.postal).toBeDefined();
  });

  it("fails when projectType is missing", () => {
    const result = validateContact({ ...validPayload, projectType: "" });
    expect(result.ok).toBe(false);
    expect(result.errors.projectType).toBeDefined();
  });

  it("fails when projectType is outside the whitelist", () => {
    const result = validateContact({
      ...validPayload,
      projectType: "rocket-science",
    });
    expect(result.ok).toBe(false);
    expect(result.errors.projectType).toBeDefined();
  });

  it("fails when gdpr is unchecked", () => {
    const result = validateContact({ ...validPayload, gdpr: false });
    expect(result.ok).toBe(false);
    expect(result.errors.gdpr).toBeDefined();
  });

  it("accepts gdpr as the string 'on' (HTML checkbox value)", () => {
    const result = validateContact({ ...validPayload, gdpr: "on" });
    expect(result.ok).toBe(true);
    expect(result.data?.gdpr).toBe(true);
  });

  it("silently rejects when the honeypot 'company' field is filled", () => {
    const result = validateContact({
      ...validPayload,
      company: "Acme Spam Co.",
    });
    expect(result.ok).toBe(false);
    expect(result.errors._form).toBeDefined();
    // No field-level errors leaked back to the bot.
    expect(result.errors.name).toBeUndefined();
    expect(result.errors.email).toBeUndefined();
  });

  it("accepts the payload when buildingType and timeline are omitted", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { buildingType, timeline, ...rest } = validPayload;
    const result = validateContact(rest);
    expect(result.ok).toBe(true);
    expect(result.data?.buildingType).toBeUndefined();
    expect(result.data?.timeline).toBeUndefined();
  });

  it("fails when buildingType is provided but invalid", () => {
    const result = validateContact({
      ...validPayload,
      buildingType: "chateau",
    });
    expect(result.ok).toBe(false);
    expect(result.errors.buildingType).toBeDefined();
  });

  it("fails when timeline is provided but invalid", () => {
    const result = validateContact({ ...validPayload, timeline: "someday" });
    expect(result.ok).toBe(false);
    expect(result.errors.timeline).toBeDefined();
  });

  it("coerces existingQuote: 'yes' to boolean true, anything else to false", () => {
    const yes = validateContact({ ...validPayload, existingQuote: "yes" });
    expect(yes.ok).toBe(true);
    expect(yes.data?.existingQuote).toBe(true);

    const no = validateContact({ ...validPayload, existingQuote: "no" });
    expect(no.ok).toBe(true);
    expect(no.data?.existingQuote).toBe(false);

    const missing = validateContact({
      ...validPayload,
      existingQuote: undefined,
    });
    expect(missing.ok).toBe(true);
    expect(missing.data?.existingQuote).toBe(false);
  });

  it("accepts a message at the 4000-character boundary", () => {
    const result = validateContact({
      ...validPayload,
      message: "x".repeat(4000),
    });
    expect(result.ok).toBe(true);
    expect(result.data?.message?.length).toBe(4000);
  });

  it("rejects a message over 4000 characters", () => {
    const result = validateContact({
      ...validPayload,
      message: "x".repeat(4001),
    });
    expect(result.ok).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it("ignores unknown extra fields", () => {
    const result = validateContact({
      ...validPayload,
      utmSource: "google",
      sneakyAdmin: true,
      __proto__: { polluted: true },
    });
    expect(result.ok).toBe(true);
    expect(result.data).toBeDefined();
    expect((result.data as Record<string, unknown>).utmSource).toBeUndefined();
    expect((result.data as Record<string, unknown>).sneakyAdmin).toBeUndefined();
  });

  it("aggregates multiple errors in one pass", () => {
    const result = validateContact({
      name: "",
      email: "bad",
      phone: "nope",
      postal: "",
      projectType: "invalid",
      gdpr: false,
    });
    expect(result.ok).toBe(false);
    expect(Object.keys(result.errors).length).toBeGreaterThanOrEqual(5);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.phone).toBeDefined();
    expect(result.errors.postal).toBeDefined();
    expect(result.errors.projectType).toBeDefined();
    expect(result.errors.gdpr).toBeDefined();
  });
});
