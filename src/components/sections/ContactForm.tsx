"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  validateContact,
  type FieldErrors,
  PROJECT_LABELS,
  BUILDING_LABELS,
  TIMELINE_LABELS,
} from "@/lib/contact-form";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  defaultProjectType?: string;
}

export function ContactForm({ defaultProjectType }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const liveRegionId = useId();

  const fieldError = (name: string) =>
    errors[name] ? (
      <p
        id={`${name}-error`}
        role="alert"
        className="mt-1 text-xs text-danger"
      >
        {errors[name]}
      </p>
    ) : null;

  const ariaProps = (name: string) =>
    errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` }
      : {};

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setGlobalError(null);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      postal: formData.get("postal"),
      projectType: formData.get("projectType"),
      buildingType: formData.get("buildingType"),
      timeline: formData.get("timeline"),
      existingQuote: formData.get("existingQuote") === "yes",
      message: formData.get("message"),
      gdpr: formData.get("gdpr") === "on",
      company: formData.get("company"), // honeypot
    };

    // Client-side validation first to avoid a round trip for obvious mistakes.
    const local = validateContact(payload);
    if (!local.ok) {
      setErrors(local.errors);
      setStatus("error");
      // Focus the first invalid field.
      const firstField = Object.keys(local.errors)[0];
      const el = formRef.current?.querySelector<HTMLElement>(
        `[name="${firstField}"]`,
      );
      el?.focus();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(local.data),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        return;
      }

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        errors?: FieldErrors;
      };
      if (json.errors) {
        setErrors(json.errors);
        const firstField = Object.keys(json.errors)[0];
        const el = formRef.current?.querySelector<HTMLElement>(
          `[name="${firstField}"]`,
        );
        el?.focus();
      }
      setGlobalError(
        json.error ??
          "Une erreur est survenue. Merci de réessayer ou de nous appeler.",
      );
      setStatus("error");
    } catch {
      setGlobalError(
        "Connexion impossible. Vérifiez votre réseau, puis réessayez.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border border-success/30 rounded-2xl p-7 md:p-9"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-[11px] font-semibold tracking-[0.12em] uppercase mb-4">
          Demande envoyée
        </div>
        <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] text-midnight mb-3">
          Merci, votre message est bien arrivé.
        </h3>
        <p className="text-charcoal leading-relaxed mb-4">
          Benoît analyse votre demande personnellement et vous recontacte
          sous 24&nbsp;h ouvrées. Si vous avez déjà un devis à faire analyser,
          vous pouvez nous le transférer en réponse à l&apos;email de
          confirmation.
        </p>
        <ul className="text-sm text-charcoal/70 leading-relaxed mb-4 space-y-1">
          <li>· Pas d&apos;appel surprise dans l&apos;heure</li>
          <li>· Pas de revente de vos données</li>
          <li>· Pas de relance hebdomadaire</li>
        </ul>
        <p className="text-sm text-steel leading-relaxed mb-4">
          Si vraiment urgent, appelez Benoît au{" "}
          <a
            href={`tel:${siteConfig.contact.phones[0].raw}`}
            className="font-semibold text-amber-dark hover:text-amber underline"
          >
            {siteConfig.contact.phones[0].label}
          </a>
          <span className="text-xs text-steel/80 ml-2">
            (Lun – Ven : 8 h – 17 h)
          </span>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center text-sm font-semibold text-amber-dark hover:text-amber transition-colors"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-describedby={liveRegionId}
    >
      {/* Honeypot - hidden from sighted users and screen readers.
          Off-screen positioning (instead of display:none) keeps the input in
          the accessibility tree disabled by aria-hidden, while still being
          invisible and unfocusable. Belt-and-suspenders against bots that
          ignore display:none. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Ne pas remplir</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Block 1: vous */}
      <fieldset className="space-y-5">
        <legend className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-3">
          1 · Vous
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="form-label">
              Nom complet <span className="text-amber">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Jean Dupont"
              className="form-input"
              {...ariaProps("name")}
            />
            {fieldError("name")}
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email <span className="text-amber">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="jean@exemple.be"
              className="form-input"
              {...ariaProps("email")}
            />
            {fieldError("email")}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="form-label">
              Téléphone <span className="text-amber">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="+32 4XX XX XX XX"
              className="form-input"
              {...ariaProps("phone")}
            />
            {fieldError("phone")}
          </div>
          <div>
            <label htmlFor="postal" className="form-label">
              Code postal / ville <span className="text-amber">*</span>
            </label>
            <input
              type="text"
              id="postal"
              name="postal"
              required
              autoComplete="postal-code"
              placeholder="4000 Liège"
              className="form-input"
              {...ariaProps("postal")}
            />
            {fieldError("postal")}
          </div>
        </div>
      </fieldset>

      {/* Block 2: votre projet */}
      <fieldset className="space-y-5">
        <legend className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-3">
          2 · Votre projet
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="projectType" className="form-label">
              Type de projet <span className="text-amber">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue={defaultProjectType ?? ""}
              className="form-input"
              {...ariaProps("projectType")}
            >
              <option value="">Sélectionnez...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {PROJECT_LABELS[
                    s.slug as keyof typeof PROJECT_LABELS
                  ] ?? s.title}
                </option>
              ))}
              <option value="devis-analyse">
                Analyse d&apos;un devis existant
              </option>
              <option value="autre">Autre</option>
            </select>
            {fieldError("projectType")}
          </div>
          <div>
            <label htmlFor="buildingType" className="form-label">
              Type de bâtiment
            </label>
            <select
              id="buildingType"
              name="buildingType"
              className="form-input"
              {...ariaProps("buildingType")}
            >
              <option value="">Sélectionnez...</option>
              {Object.entries(BUILDING_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {fieldError("buildingType")}
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className="form-label">
            Délai envisagé
          </label>
          <select
            id="timeline"
            name="timeline"
            className="form-input"
            {...ariaProps("timeline")}
          >
            <option value="">Sélectionnez...</option>
            {Object.entries(TIMELINE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {fieldError("timeline")}
        </div>

        <div className="flex items-start gap-3 bg-ivory border border-cloud rounded-lg p-3.5">
          <input
            type="checkbox"
            id="existingQuote"
            name="existingQuote"
            value="yes"
            className="mt-1 accent-amber"
          />
          <label
            htmlFor="existingQuote"
            className="text-sm text-charcoal leading-relaxed"
          >
            <span className="font-semibold text-midnight">
              J&apos;ai déjà reçu un devis
            </span>{" "}
            et je souhaite un avis avant de signer. Vous pourrez nous l&apos;envoyer
            en réponse au mail de confirmation.
          </label>
        </div>
      </fieldset>

      {/* Block 3: message libre */}
      <fieldset>
        <legend className="text-[11px] font-semibold tracking-[0.12em] uppercase text-amber-dark mb-3">
          3 · Précisions (facultatif)
        </legend>
        <label htmlFor="message" className="form-label">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={4000}
          placeholder="Surface de toiture, orientation, consommation annuelle, contraintes particulières..."
          className="form-input resize-y"
          {...ariaProps("message")}
        />
        {fieldError("message")}
      </fieldset>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="gdpr"
            name="gdpr"
            required
            className="mt-0.5 h-5 w-5 shrink-0 accent-amber cursor-pointer"
            {...ariaProps("gdpr")}
          />
          <label
            htmlFor="gdpr"
            className="text-sm text-charcoal leading-relaxed cursor-pointer"
          >
            J&apos;accepte que mes données soient utilisées pour me recontacter
            dans le cadre de ma demande.{" "}
            <Link
              href="/politique-de-confidentialite/"
              className="underline hover:text-midnight"
            >
              Politique de confidentialité
            </Link>
          </label>
        </div>
        {fieldError("gdpr")}
      </div>

      {globalError && (
        <div
          role="alert"
          className="rounded-lg border border-danger/30 bg-danger/5 text-danger text-sm p-4"
        >
          {globalError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark disabled:bg-amber/60 disabled:cursor-not-allowed text-midnight font-bold px-10 py-4 rounded-xl transition-colors text-base"
        >
          {status === "submitting" && (
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                opacity="0.25"
              />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
          {status === "submitting" ? "Envoi en cours…" : "Envoyer"}
        </button>
        <p className="text-xs text-steel leading-relaxed">
          Benoît reprend chaque demande personnellement. Vous recevez une
          réponse claire, un calcul réaliste, aucune pression commerciale.
        </p>
      </div>

      <p id={liveRegionId} aria-live="polite" className="sr-only">
        {status === "submitting"
          ? "Envoi du formulaire en cours."
          : status === "error"
            ? "Le formulaire contient des erreurs."
            : ""}
      </p>
    </form>
  );
}
