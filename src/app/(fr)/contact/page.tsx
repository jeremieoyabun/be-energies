import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Contact | Diagnostic énergétique gratuit",
  description:
    "Diagnostic énergétique gratuit en Belgique et au Luxembourg : visite technique sur site, devis détaillé sous 48 h. Réponse personnelle de Benoît Dezso, certifié RESCERT. Pas de call center, pas de pression commerciale.",
  path: "/contact/",
  alternates: { fr: "/contact/", nl: "/nl/contact/" },
});

const contactFAQ: FAQItem[] = [
  {
    question: "Le diagnostic est-il vraiment gratuit ?",
    answer:
      "Oui, le diagnostic énergétique est 100 % gratuit et sans engagement. Il comprend une visite sur site, une analyse de votre situation et un rapport personnalisé. Aucun frais caché, aucune obligation de signer quoi que ce soit. C\u2019est notre façon de vous montrer notre sérieux avant même de commencer.",
  },
  {
    question: "Qui me répondra ?",
    answer:
      "Benoît Dezso lui-même. Pas un call center, pas un sous-traitant commercial. Quand vous appelez ou envoyez un message, c\u2019est le fondateur, ancien inspecteur en installation électrique, certifié RESCERT, qui prend en charge votre demande du début à la fin.",
  },
  {
    question: "Combien de temps pour recevoir un devis ?",
    answer:
      "Maximum 48 heures après la visite technique sur site. Votre devis sera détaillé, avec les tarifs réels, les marques et modèles recommandés, les spécifications techniques et une estimation du retour sur investissement adaptée à votre situation.",
  },
  {
    question: "Intervenez-vous dans ma région ?",
    answer:
      "Nous intervenons dans toute la Wallonie, à Bruxelles, et dans le Limbourg flamand : Riemst, Tongeren, Hasselt, Bilzen et les communes environnantes. Contactez-nous pour confirmer votre zone : dans la grande majorité des cas, nous couvrons votre secteur.",
  },
  {
    question: "Que comprend le diagnostic énergétique ?",
    answer:
      "Le diagnostic comprend : une analyse de votre consommation électrique actuelle, une évaluation de votre toiture (orientation, inclinaison, ombrage), un contrôle de votre tableau électrique et de la tension réseau, et un calcul de rentabilité personnalisé basé sur vos données réelles, pas sur des moyennes génériques.",
  },
];

interface ContactPageProps {
  searchParams: Promise<{ intent?: string; projet?: string; cp?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  // ?intent=devis from any "Faire vérifier mon devis" CTA across the
  // site lands here with the existingQuote checkbox pre-checked and the
  // amber callout highlighted.
  const intentDevis = params.intent === "devis";
  const defaultProjectType = params.projet;
  // ?cp=4000 from the MiniDiagnosticCard pre-fills the postal field so
  // the visitor doesn't retype it after the triage step.
  const defaultPostal = params.cp?.trim();

  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Contact" },
        ]}
      />

      {/* Hero + form — single tight section so the form sits above the
          fold. Right column carries the founder identity + direct contact
          channels (one block each), left column the H1 + reassurance row
          + form. The previous layout duplicated Benoît's identity, the
          reassurance list, and RESCERT across both columns — removed. */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-20">
        <div className="container-be">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
            {/* Form column */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-[1.05] text-balance">
                {intentDevis
                  ? "Faites vérifier votre devis avant de signer"
                  : "Parlons de votre projet"}
              </h1>
              <p className="mt-5 text-[17px] md:text-lg text-charcoal leading-relaxed max-w-2xl">
                {intentDevis
                  ? "Joignez votre devis ci-dessous, Benoît le relit avec son œil d'ancien inspecteur et vous renvoie une analyse écrite sous 48 h. Sans engagement."
                  : "Benoît vous répond personnellement. Diagnostic gratuit, calcul de rentabilité basé sur vos vraies données. Moins de 2 minutes pour remplir."}
              </p>

              {/* Entry choice — 2 visible paths so the visitor knows
                  which mode the form is in (start project vs. quote
                  check). The pair acts as a tab control: clicking
                  switches between /contact/ and /contact/?intent=devis.
                  The form below adapts via the `defaultExistingQuote`
                  prop. */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3" role="tablist" aria-label="Type de demande">
                <Link
                  href="/contact/"
                  role="tab"
                  aria-selected={!intentDevis}
                  className={`flex items-start gap-3 rounded-xl p-4 md:p-5 border-[1.5px] transition-colors ${
                    !intentDevis
                      ? "bg-amber/10 border-amber/45 shadow-[0_1px_2px_rgba(245,158,11,0.08)]"
                      : "bg-white border-midnight/12 hover:border-amber/40"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 -my-1 rounded-lg ring-1 ${
                      !intentDevis
                        ? "bg-amber/20 ring-amber/45 text-amber-dark"
                        : "bg-ivory ring-midnight/15 text-midnight/70"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-midnight text-[15px] leading-tight">
                      Je démarre un projet
                    </p>
                    <p className="mt-1 text-[13.5px] text-charcoal/85 leading-relaxed">
                      Diagnostic gratuit sur place, devis sous 48 h.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/contact/?intent=devis"
                  role="tab"
                  aria-selected={intentDevis}
                  className={`flex items-start gap-3 rounded-xl p-4 md:p-5 border-[1.5px] transition-colors ${
                    intentDevis
                      ? "bg-amber/10 border-amber/45 shadow-[0_1px_2px_rgba(245,158,11,0.08)]"
                      : "bg-white border-midnight/12 hover:border-amber/40"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 -my-1 rounded-lg ring-1 ${
                      intentDevis
                        ? "bg-amber/20 ring-amber/45 text-amber-dark"
                        : "bg-ivory ring-midnight/15 text-midnight/70"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-midnight text-[15px] leading-tight">
                      J&apos;ai déjà un devis
                    </p>
                    <p className="mt-1 text-[13.5px] text-charcoal/85 leading-relaxed">
                      Benoît le relit en 48 h, points d&apos;attention
                      écrits.
                    </p>
                  </div>
                </Link>
              </div>

              {intentDevis && (
                <div className="mt-6 flex items-start gap-3 bg-amber/10 border-[1.5px] border-amber/40 rounded-xl p-4 md:p-5 shadow-[0_1px_2px_rgba(245,158,11,0.08)]">
                  <span
                    aria-hidden="true"
                    className="shrink-0 inline-flex items-center justify-center w-9 h-9 -my-1 rounded-lg bg-amber/20 ring-1 ring-amber/40 text-amber-dark"
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  </span>
                  <div className="text-[14.5px] text-charcoal leading-relaxed">
                    <strong className="font-bold text-midnight">
                      Analyse de devis activée.
                    </strong>{" "}
                    Le bloc &laquo;&nbsp;J&apos;ai déjà reçu un devis&nbsp;&raquo; est
                    pré-coché plus bas. Joignez votre devis en pièce jointe
                    (PDF, photo) à l&apos;étape 3.
                  </div>
                </div>
              )}

              {/* Reassurance row + Google rating — visible BEFORE the
                  fields so the visitor knows what they're committing to. */}
              <div className="mt-7 mb-7 card border-l-4 border-l-amber p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <ul className="space-y-1.5 text-[13.5px] text-charcoal">
                  {[
                    "Diagnostic gratuit, sans engagement",
                    "Calcul de rentabilité réaliste, pas d'estimation marketing",
                    "Devis détaillé sous 48 h",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon
                        size={14}
                        className="text-success shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <GoogleReviewsBadge variant="card" className="shrink-0" />
              </div>

              <ContactForm
                defaultProjectType={defaultProjectType}
                defaultExistingQuote={intentDevis}
                defaultPostal={defaultPostal}
              />
            </div>

            {/* Sidebar — two blocks only: founder identity + direct
                contact channels. Reassurance + RESCERT cards removed
                because the left column already carries them. */}
            <div className="space-y-5 lg:sticky lg:top-24 self-start">
              <FounderCredibility variant="compact" />

              <div className="bg-midnight rounded-xl p-6 space-y-4 ring-1 ring-white/10 shadow-[0_8px_24px_-12px_rgba(12,18,32,0.4)]">
                <h3 className="text-[12px] font-bold tracking-[0.16em] uppercase text-amber-light">
                  Contact direct
                </h3>
                <ul className="space-y-3">
                  {siteConfig.contact.phones.map((p) => (
                    <li key={p.raw}>
                      <a
                        href={`tel:${p.raw}`}
                        className="flex flex-col gap-0.5 text-sm text-white hover:text-amber-light transition-colors"
                      >
                        <span className="inline-flex items-center gap-3">
                          <PhoneIcon size={17} className="text-amber" />
                          <span className="data-figure font-semibold">
                            {p.label}
                          </span>
                        </span>
                        <span className="text-[12px] text-white/65 ml-7">
                          Lun – Ven : 8 h – 17 h
                        </span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-3 text-sm text-white hover:text-amber-light transition-colors"
                    >
                      <MailIcon size={17} className="text-amber" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white hover:text-amber-light transition-colors"
                    >
                      <WhatsAppIcon size={17} className="text-amber" />
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/90 pt-3 border-t border-white/10">
                    <MapPinIcon
                      size={17}
                      className="text-amber shrink-0 mt-0.5"
                    />
                    <span>
                      {siteConfig.contact.address.streetAddress && (
                        <>
                          {siteConfig.contact.address.streetAddress}
                          <br />
                        </>
                      )}
                      {siteConfig.contact.address.postalCode}{" "}
                      {siteConfig.contact.address.addressLocality}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={contactFAQ}
        title="Questions sur votre prise de contact"
      />
    </>
  );
}
