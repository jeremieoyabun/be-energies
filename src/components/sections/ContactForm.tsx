"use client";

import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
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
  /** Pre-checks the "J'ai déjà reçu un devis" box on mount. Used when
   *  the visitor lands on /contact/?intent=devis from a "Faire vérifier
   *  mon devis" CTA elsewhere on the site. */
  defaultExistingQuote?: boolean;
  /** Pre-fills the postal code / city field on mount. Used when the
   *  visitor arrives from the MiniDiagnosticCard with ?cp=4000. The
   *  underlying input remains free-form ("4000" or "4000 Liège"). */
  defaultPostal?: string;
}

// Keep in sync with the server-side limits in /api/contact/route.ts.
// 3 MB total raw size leaves comfortable headroom under Vercel's ~4.5 MB
// serverless body limit once we factor in multipart boundaries and the
// other form fields.
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 3 * 1024 * 1024;
const ACCEPTED_MIME = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
]);
const ACCEPTED_ATTR =
  ".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

export function ContactForm({
  defaultProjectType,
  defaultExistingQuote = false,
  defaultPostal,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const liveRegionId = useId();

  const totalAttachmentBytes = attachments.reduce((s, f) => s + f.size, 0);

  function handleFilesPicked(e: ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? []);
    if (picked.length === 0) return;

    setFileError(null);
    const accepted: File[] = [];
    for (const f of picked) {
      // Some browsers leave .type empty for niche cases; fall back to extension.
      const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
      const okType =
        ACCEPTED_MIME.has(f.type) ||
        ["pdf", "jpg", "jpeg", "png", "webp"].includes(ext);
      if (!okType) {
        setFileError(
          `Format non supporté pour "${f.name}". PDF, JPG, PNG ou WebP uniquement.`,
        );
        continue;
      }
      accepted.push(f);
    }

    const combined = [...attachments, ...accepted];
    if (combined.length > MAX_FILES) {
      setFileError(`Maximum ${MAX_FILES} fichiers par envoi.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    const combinedSize = combined.reduce((s, f) => s + f.size, 0);
    if (combinedSize > MAX_TOTAL_BYTES) {
      setFileError(
        `Taille totale dépassée (max ${formatBytes(MAX_TOTAL_BYTES)}). ` +
          "Compressez le PDF ou réduisez les photos.",
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setAttachments(combined);
    // Reset the input so the same file can be re-selected after removal.
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
    setFileError(null);
  }

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

    const rawForm = new FormData(e.currentTarget);
    const payload = {
      name: rawForm.get("name"),
      email: rawForm.get("email"),
      phone: rawForm.get("phone"),
      postal: rawForm.get("postal"),
      projectType: rawForm.get("projectType"),
      buildingType: rawForm.get("buildingType"),
      timeline: rawForm.get("timeline"),
      existingQuote: rawForm.get("existingQuote") === "yes",
      message: rawForm.get("message"),
      gdpr: rawForm.get("gdpr") === "on",
      company: rawForm.get("company"), // honeypot
    };

    // Client-side validation first to avoid a round trip for obvious mistakes.
    const local = validateContact(payload);
    if (!local.ok || !local.data) {
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
    const clean = local.data;

    // Build a fresh multipart payload from the validated scalars + curated
    // file list. We do NOT submit the form's own FormData because the native
    // <input type="file"> reflects the last picker selection, not the user's
    // curated state (after removals or repeated picks).
    const body = new FormData();
    body.append("name", clean.name);
    body.append("email", clean.email);
    body.append("phone", clean.phone);
    body.append("postal", clean.postal);
    body.append("projectType", clean.projectType);
    if (clean.buildingType) body.append("buildingType", clean.buildingType);
    if (clean.timeline) body.append("timeline", clean.timeline);
    body.append("existingQuote", clean.existingQuote ? "yes" : "no");
    if (clean.message) body.append("message", clean.message);
    body.append("gdpr", "on");
    for (const f of attachments) {
      body.append("attachments", f, f.name);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        // Do NOT set Content-Type — the browser writes the multipart boundary.
        body,
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        setAttachments([]);
        setFileError(null);
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
          sous 24&nbsp;h ouvrées. Si vous voulez ajouter un devis ou des
          photos après coup, il suffit de répondre au mail de confirmation.
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
        <legend className="text-[12.5px] font-bold tracking-[0.18em] uppercase text-amber-dark mb-4 inline-flex items-center gap-2 before:content-[''] before:w-6 before:h-[2px] before:bg-amber">
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
              defaultValue={defaultPostal}
              className="form-input"
              {...ariaProps("postal")}
            />
            {fieldError("postal")}
          </div>
        </div>
      </fieldset>

      {/* Block 2: votre projet */}
      <fieldset className="space-y-5">
        <legend className="text-[12.5px] font-bold tracking-[0.18em] uppercase text-amber-dark mb-4 inline-flex items-center gap-2 before:content-[''] before:w-6 before:h-[2px] before:bg-amber">
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

        <div
          className={`flex items-start gap-3 rounded-lg p-3.5 transition-colors ${
            defaultExistingQuote
              ? "bg-amber/10 border-[1.5px] border-amber/40 shadow-[0_1px_2px_rgba(245,158,11,0.08)]"
              : "bg-ivory border border-cloud"
          }`}
        >
          <input
            type="checkbox"
            id="existingQuote"
            name="existingQuote"
            value="yes"
            defaultChecked={defaultExistingQuote}
            className="mt-1 h-5 w-5 accent-amber cursor-pointer"
          />
          <label
            htmlFor="existingQuote"
            className="text-sm text-charcoal leading-relaxed cursor-pointer"
          >
            <span className="font-semibold text-midnight">
              J&apos;ai déjà reçu un devis
            </span>{" "}
            et je souhaite un avis avant de signer. Joignez-le ci-dessous, ou
            envoyez-le en réponse au mail de confirmation.
          </label>
        </div>
      </fieldset>

      {/* Block 3: pieces jointes */}
      <fieldset>
        <legend className="text-[12.5px] font-bold tracking-[0.18em] uppercase text-amber-dark mb-4 inline-flex items-center gap-2 before:content-[''] before:w-6 before:h-[2px] before:bg-amber">
          3 · Pièces jointes (facultatif)
        </legend>
        <p className="text-[13px] text-steel leading-relaxed mb-3">
          Devis solaire, photos de toiture, factures d&apos;électricité, plan
          de coffret… Tout document utile à l&apos;analyse.
        </p>

        <label
          htmlFor="attachments"
          className="group flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl border-2 border-dashed border-cloud bg-ivory/60 hover:border-amber hover:bg-amber/5 transition-colors px-4 py-6 text-center"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6 text-amber-dark"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l8.57-8.57a4 4 0 0 1 5.66 5.66L9.41 17.41a2 2 0 1 1-2.83-2.83l7.07-7.07" />
          </svg>
          <span className="text-[14px] font-semibold text-midnight">
            Cliquer pour joindre des fichiers
          </span>
          <span className="text-[11.5px] text-steel">
            PDF, JPG, PNG, WebP · {MAX_FILES} fichiers max · {formatBytes(MAX_TOTAL_BYTES)} au total
          </span>
          <input
            ref={fileInputRef}
            id="attachments"
            name="attachments"
            type="file"
            multiple
            accept={ACCEPTED_ATTR}
            onChange={handleFilesPicked}
            className="sr-only"
          />
        </label>

        {attachments.length > 0 && (
          <ul className="mt-3 space-y-2" aria-label="Fichiers joints">
            {attachments.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="flex items-center gap-3 rounded-lg border border-cloud bg-white px-3 py-2"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-amber-dark shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                <span className="flex-1 min-w-0 text-[13px] text-midnight truncate">
                  {f.name}
                </span>
                <span className="text-[11.5px] text-steel font-[family-name:var(--font-mono)] tabular-nums">
                  {formatBytes(f.size)}
                </span>
                <button
                  type="button"
                  onClick={() => removeAttachment(i)}
                  aria-label={`Retirer ${f.name}`}
                  className="text-steel hover:text-danger transition-colors p-1 -m-1 rounded"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        {attachments.length > 0 && (
          <p className="mt-2 text-[11.5px] text-steel">
            {attachments.length} fichier{attachments.length > 1 ? "s" : ""} ·{" "}
            {formatBytes(totalAttachmentBytes)} / {formatBytes(MAX_TOTAL_BYTES)}
          </p>
        )}

        {fileError && (
          <p role="alert" className="mt-2 text-xs text-danger">
            {fileError}
          </p>
        )}
      </fieldset>

      {/* Block 4: message libre */}
      <fieldset>
        <legend className="text-[12.5px] font-bold tracking-[0.18em] uppercase text-amber-dark mb-4 inline-flex items-center gap-2 before:content-[''] before:w-6 before:h-[2px] before:bg-amber">
          4 · Précisions (facultatif)
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
