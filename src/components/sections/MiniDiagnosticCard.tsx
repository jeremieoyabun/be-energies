"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@/lib/icons";

/**
 * MiniDiagnosticCard — short triage card.
 *
 * Three light-weight questions (postal code, project type, situation) that
 * pre-populate the full /contact/ form. The goal is to capture intent
 * cheaply from visitors who are not yet ready to commit to the full
 * multi-step form. Designed to sit on bg-white or bg-ivory sections without
 * shouting — no heavy backgrounds, no decorative gradients.
 *
 * Submission is a client-side router.push() so we can build a clean URL
 * with only the params that actually carry value (empty fields are dropped,
 * "no intent" branches never inject an `intent` key, etc.).
 */

type ProjectChoice =
  | "panneaux-photovoltaiques"
  | "batteries-domestiques"
  | "bornes-de-recharge"
  | "conformite-electrique"
  | "autre";

type SituationChoice = "start" | "quote" | "rentability";

interface ProjectOption {
  value: ProjectChoice;
  label: string;
}

interface SituationOption {
  value: SituationChoice;
  label: string;
  hint?: string;
}

const PROJECT_OPTIONS: readonly ProjectOption[] = [
  { value: "panneaux-photovoltaiques", label: "Panneaux photovoltaïques" },
  { value: "batteries-domestiques", label: "Batterie domestique" },
  { value: "bornes-de-recharge", label: "Borne de recharge" },
  { value: "conformite-electrique", label: "Conformité électrique" },
  { value: "autre", label: "Je ne sais pas encore" },
];

const SITUATION_OPTIONS: readonly SituationOption[] = [
  { value: "start", label: "Je démarre un projet" },
  { value: "quote", label: "J'ai déjà un devis à vérifier" },
  { value: "rentability", label: "Je veux savoir si c'est rentable" },
];

interface MiniDiagnosticCardProps {
  /** Override the eyebrow / kicker text. Defaults to "Premier avis". */
  eyebrow?: string;
  /** Override the H3 headline. Defaults to a generic triage prompt. */
  headline?: string;
  /** Override the sub-line below the H3. */
  subline?: string;
  /** Pre-fill the project radio. Useful when dropping on a service page. */
  defaultProject?: ProjectChoice;
}

export function MiniDiagnosticCard({
  eyebrow = "Premier avis",
  headline = "Pas encore prêt à remplir le formulaire complet ?",
  subline = "Trois questions rapides. Benoît vous renvoie un premier avis personnel sous 24 h ouvrées.",
  defaultProject,
}: MiniDiagnosticCardProps) {
  const router = useRouter();
  const postalId = useId();
  const headingId = useId();
  const sublineId = useId();

  const [postal, setPostal] = useState("");
  const [project, setProject] = useState<ProjectChoice | "">(
    defaultProject ?? "",
  );
  const [situation, setSituation] = useState<SituationChoice | "">("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    if (!project) {
      setError("Choisissez le type de projet qui vous intéresse.");
      return;
    }
    if (!situation) {
      setError("Indiquez où vous en êtes dans votre réflexion.");
      return;
    }
    setError(null);

    const params = new URLSearchParams();
    if (situation === "quote") params.set("intent", "devis");
    params.set("projet", project);
    const trimmedPostal = postal.trim();
    if (trimmedPostal.length > 0) params.set("cp", trimmedPostal);

    setSubmitting(true);
    router.push(`/contact/?${params.toString()}`);
  }

  return (
    <section
      className="section-padding"
      aria-labelledby={headingId}
    >
      <div className="container-be max-w-3xl">
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-describedby={sublineId}
          className="card p-6 md:p-9"
        >
          {/* Header — eyebrow + headline + soft subline */}
          <div className="mb-7 md:mb-8">
            <div className="eyebrow mb-3">{eyebrow}</div>
            <h2
              id={headingId}
              className="text-2xl md:text-[28px] font-[family-name:var(--font-heading)] text-midnight leading-[1.2] text-balance"
            >
              {headline}
            </h2>
            <p
              id={sublineId}
              className="mt-3 text-[15px] text-charcoal leading-relaxed"
            >
              {subline}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-7">
            {/* Q1 — Code postal */}
            <div>
              <label htmlFor={postalId} className="form-label">
                Votre code postal
              </label>
              <input
                id={postalId}
                type="text"
                inputMode="numeric"
                pattern="\d{4}"
                autoComplete="postal-code"
                placeholder="4000"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                maxLength={10}
                className="form-input h-12"
              />
              <p className="mt-1.5 text-[12.5px] text-steel">
                Belgique : 4 chiffres. Pour cibler la réponse à votre commune.
              </p>
            </div>

            {/* Q2 — Type de projet */}
            <fieldset>
              <legend className="form-label mb-3">
                Type de projet
              </legend>
              <div
                role="radiogroup"
                aria-label="Type de projet"
                className="flex flex-col gap-2"
              >
                {PROJECT_OPTIONS.map((opt) => {
                  const checked = project === opt.value;
                  return (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3 min-h-12 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                        checked
                          ? "border-amber bg-amber/12 shadow-[0_1px_2px_rgba(245,158,11,0.08)]"
                          : "border-cloud bg-ivory hover:border-amber/60 hover:bg-amber/[0.04]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="project"
                        value={opt.value}
                        checked={checked}
                        onChange={() => {
                          setProject(opt.value);
                          if (error) setError(null);
                        }}
                        className="h-5 w-5 shrink-0 accent-amber cursor-pointer"
                      />
                      <span
                        className={`text-[15px] leading-snug ${
                          checked
                            ? "font-semibold text-midnight"
                            : "text-charcoal"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Q3 — Situation */}
            <fieldset>
              <legend className="form-label mb-3">
                Où en êtes-vous ?
              </legend>
              <div
                role="radiogroup"
                aria-label="Votre situation actuelle"
                className="flex flex-col gap-2"
              >
                {SITUATION_OPTIONS.map((opt) => {
                  const checked = situation === opt.value;
                  return (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3 min-h-12 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                        checked
                          ? "border-amber bg-amber/12 shadow-[0_1px_2px_rgba(245,158,11,0.08)]"
                          : "border-cloud bg-ivory hover:border-amber/60 hover:bg-amber/[0.04]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="situation"
                        value={opt.value}
                        checked={checked}
                        onChange={() => {
                          setSituation(opt.value);
                          if (error) setError(null);
                        }}
                        className="h-5 w-5 shrink-0 accent-amber cursor-pointer"
                      />
                      <span
                        className={`text-[15px] leading-snug ${
                          checked
                            ? "font-semibold text-midnight"
                            : "text-charcoal"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-lg border border-danger/30 bg-danger/5 text-danger text-sm px-4 py-3"
            >
              {error}
            </p>
          )}

          <div className="mt-7 flex flex-col gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="cta-glow inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark disabled:bg-amber/60 disabled:cursor-not-allowed text-midnight font-bold px-7 py-3.5 rounded-xl transition-colors text-[15px]"
            >
              {submitting ? "Préparation…" : "Recevoir un premier avis"}
              {!submitting && <ArrowRightIcon size={16} />}
            </button>
            <p className="text-[12.5px] text-steel leading-relaxed">
              Sans engagement. Réponse personnelle de Benoît sous 24 h ouvrées.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
