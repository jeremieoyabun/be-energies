"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import {
  validateLeadMagnet,
  LEAD_MAGNETS,
  type LeadMagnetSlug,
  type FieldErrors,
} from "@/lib/lead-magnet";

type Status = "idle" | "submitting" | "success" | "error";

interface SuccessState {
  downloadUrl: string;
  title: string;
  filename: string;
}

interface LeadMagnetModalProps {
  open: boolean;
  onClose: () => void;
  leadMagnetSlug: LeadMagnetSlug;
  /** Optional path of the page that triggered this modal (e.g. "/services/..."). */
  sourcePage?: string;
}

/**
 * LeadMagnetModal — premium email-gate for PDF lead magnets.
 *
 * State machine (lives inside ModalContent so it's reset by unmount when
 * the modal closes):
 *   idle → submitting → (error | success)
 *
 * In success state the form is replaced by a download CTA (the token-
 * signed URL returned by /api/lead-magnet). The same URL is also emailed
 * to the user as a 7-day fallback so they can re-download from their
 * inbox.
 */
export function LeadMagnetModal({
  open,
  onClose,
  leadMagnetSlug,
  sourcePage,
}: LeadMagnetModalProps) {
  if (!open) return null;
  return (
    <ModalContent
      onClose={onClose}
      leadMagnetSlug={leadMagnetSlug}
      sourcePage={sourcePage}
    />
  );
}

interface ModalContentProps {
  onClose: () => void;
  leadMagnetSlug: LeadMagnetSlug;
  sourcePage?: string;
}

function ModalContent({
  onClose,
  leadMagnetSlug,
  sourcePage,
}: ModalContentProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [success, setSuccess] = useState<SuccessState | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  const magnet = LEAD_MAGNETS[leadMagnetSlug];

  // ModalContent only mounts when the modal is open. Setup runs once on
  // mount; cleanup runs on unmount (which happens when the parent closes
  // the modal). No need to branch on `open` here.
  useEffect(() => {
    const t = setTimeout(() => emailInputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrors({});
    setGlobalError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      email: fd.get("email"),
      firstName: fd.get("firstName"),
      leadMagnetSlug,
      sourcePage,
      consentMarketing: fd.get("consentMarketing") === "yes",
      company: fd.get("company"),
    };

    const local = validateLeadMagnet(payload);
    if (!local.ok) {
      setErrors(local.errors);
      setStatus("error");
      const firstField = Object.keys(local.errors)[0];
      if (firstField && firstField !== "_form") {
        const el =
          (document.getElementById(firstField) as HTMLElement | null) ??
          null;
        el?.focus();
      }
      return;
    }

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(local.data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
        downloadUrl?: string;
        title?: string;
        filename?: string;
      };
      if (res.ok && json.ok && json.downloadUrl) {
        setSuccess({
          downloadUrl: json.downloadUrl,
          title: json.title ?? magnet.title,
          filename: json.filename ?? magnet.downloadFilename,
        });
        setStatus("success");
        return;
      }
      if (json.errors) setErrors(json.errors);
      setGlobalError(
        json.error ??
          "Une erreur est survenue. Merci de réessayer ou de nous écrire.",
      );
      setStatus("error");
    } catch {
      setGlobalError(
        "Connexion impossible. Vérifiez votre réseau, puis réessayez.",
      );
      setStatus("error");
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-3 sm:p-4 lead-magnet-modal-fade"
    >
      <div
        className="absolute inset-0 bg-midnight/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl ring-1 ring-midnight/10 p-6 md:p-7 max-h-[92dvh] overflow-y-auto lead-magnet-modal-card">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-md text-steel hover:text-midnight hover:bg-ivory transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {status === "success" && success ? (
          <SuccessView
            id={titleId}
            success={success}
            magnetDescription={magnet.description}
          />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-amber"
                />
                Téléchargement gratuit
              </span>
              <h2
                id={titleId}
                className="mt-2 text-xl md:text-[22px] font-[family-name:var(--font-heading)] text-midnight leading-tight"
              >
                {magnet.title}
              </h2>
              <p className="mt-2 text-[13.5px] text-charcoal leading-relaxed">
                {magnet.description}
              </p>
            </div>

            {/* Honeypot */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
            >
              <label htmlFor="lm-company">Ne pas remplir</label>
              <input
                type="text"
                id="lm-company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-amber">*</span>
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="jean@exemple.be"
                  className="form-input"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1 text-xs text-danger"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="firstName" className="form-label">
                  Prénom <span className="text-steel/70">(optionnel)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Jean"
                  className="form-input"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="consentMarketing"
                name="consentMarketing"
                value="yes"
                className="mt-0.5 h-5 w-5 shrink-0 accent-amber cursor-pointer"
              />
              <span className="text-[12.5px] text-charcoal leading-relaxed">
                Je veux aussi recevoir, de temps en temps, les nouveaux
                guides et conseils techniques de Be&apos;energies. Décochez
                pour recevoir uniquement le guide demandé.
              </span>
            </label>

            <p className="text-[11.5px] text-steel leading-relaxed">
              Recevez le guide par email. Vous ne serez pas inscrit·e à une
              newsletter sans avoir explicitement coché l&apos;option
              ci-dessus.{" "}
              <Link
                href="/politique-de-confidentialite/"
                className="underline hover:text-midnight"
                onClick={onClose}
              >
                Politique de confidentialité
              </Link>
              .
            </p>

            {globalError && (
              <div
                role="alert"
                className="rounded-lg border border-danger/30 bg-danger/5 text-danger text-[13px] p-3"
              >
                {globalError}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark disabled:bg-amber/60 disabled:cursor-not-allowed text-midnight font-bold px-6 py-3 rounded-xl transition-colors text-[15px]"
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
              {status === "submitting"
                ? "Envoi en cours…"
                : "Recevoir le guide"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function SuccessView({
  id,
  success,
  magnetDescription,
}: {
  id: string;
  success: SuccessState;
  magnetDescription: string;
}) {
  return (
    <div role="status" aria-live="polite">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-success/10 text-success text-[11px] font-semibold tracking-[0.12em] uppercase mb-3">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12l4 4L19 7" />
        </svg>
        Guide prêt
      </div>
      <h2
        id={id}
        className="text-xl md:text-[22px] font-[family-name:var(--font-heading)] text-midnight leading-tight"
      >
        Merci, le guide est prêt.
      </h2>
      <p className="mt-2 text-[13.5px] text-charcoal leading-relaxed">
        {magnetDescription} Un email de confirmation arrive avec un second
        lien de téléchargement (valable 7 jours).
      </p>
      <a
        href={success.downloadUrl}
        download={success.filename}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-6 py-3 rounded-xl transition-colors text-[15px]"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
        </svg>
        Télécharger maintenant
      </a>
      <p className="mt-3 text-[11.5px] text-steel">
        Pas reçu l&apos;email ? Vérifiez les indésirables, ou répondez
        directement à info@be-energies.be.
      </p>
    </div>
  );
}
