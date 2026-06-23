import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon, CheckIcon, AlertTriangleIcon, ArrowRightIcon } from "@/lib/icons";
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

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Contact" },
        ]}
      />

      {/* Hero + form - merged into one tight section so the form is visible
          above the fold. Previous layout stacked a tall hero (py-20) on top
          of section-padding which buried the fields. */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-20">
        <div className="container-be">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
            {/* Form column */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
                Parlons de votre projet
              </h1>
              <p className="mt-3 text-base md:text-[17px] text-charcoal leading-relaxed">
                Benoît vous répond personnellement, pas un call center, pas
                de pression commerciale. Diagnostic gratuit, calcul de
                rentabilité basé sur vos vraies données. Moins de 2 minutes
                pour remplir.
              </p>

              {/* Founder strip - reinforces "Benoît répond personnellement"
                  at the top of the form column, right where the user is about
                  to commit time to filling fields. */}
              <div className="mt-6 flex items-center gap-4 bg-white border border-cloud rounded-xl p-4 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-slate/20 shrink-0 overflow-hidden ring-2 ring-amber/25">
                  <Image
                    src="/img/misc/worker.webp"
                    alt={siteConfig.founder.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-sm text-charcoal leading-snug">
                  <p className="font-semibold text-midnight">
                    {siteConfig.founder.name}, ancien inspecteur en
                    installation électrique, certifié RESCERT.
                  </p>
                  <p className="text-steel mt-0.5">
                    Il reprend personnellement chaque demande sous 24 h
                    ouvrées. Pas de call center.
                  </p>
                </div>
              </div>

              {/* Reassurance row + Google rating - visible BEFORE the form fields */}
              <div className="mt-4 mb-5 bg-ivory border border-cloud rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <ul className="space-y-1.5 text-[13px] text-charcoal">
                  {[
                    "Diagnostic gratuit, sans engagement",
                    "Benoît reprend chaque demande personnellement",
                    "Calcul de rentabilité réaliste, pas d'estimation marketing",
                    "Devis détaillé sous 48 h",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon size={14} className="text-success shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <GoogleReviewsBadge variant="card" className="shrink-0" />
              </div>

              {/* Existing-quote alert - faster path for users already mid-funnel.
                  Visually distinct from the reassurance card so it reads as a
                  contextual side-door, not part of the form. */}
              <Link
                href="/devis-analyse/"
                className="group mb-7 flex items-start gap-3 rounded-xl border border-amber/40 bg-warm-gradient p-4 md:p-5 transition-colors hover:border-amber"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber-dark">
                  <AlertTriangleIcon size={18} />
                </span>
                <span className="flex-1 text-sm leading-relaxed text-charcoal">
                  <span className="block font-semibold text-midnight">
                    Vous avez déjà un devis sur la table ?
                  </span>
                  Demandez plutôt une analyse de devis gratuite. Benoît
                  relit le détail technique avant que vous ne signiez.
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.08em] text-amber-dark transition-transform group-hover:translate-x-0.5">
                  Analyser
                  <ArrowRightIcon size={14} />
                </span>
              </Link>

              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Founder card */}
              <FounderCredibility variant="compact" />

              {/* Contact direct */}
              <div className="bg-midnight rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-white text-sm">Contact direct</h3>
                <ul className="space-y-3">
                  {siteConfig.contact.phones.map((p) => (
                    <li key={p.raw}>
                      <a
                        href={`tel:${p.raw}`}
                        className="flex flex-col gap-0.5 text-sm text-silver hover:text-white transition-colors"
                      >
                        <span className="inline-flex items-center gap-3">
                          <PhoneIcon size={17} className="text-amber" />
                          <span className="data-figure">{p.label}</span>
                        </span>
                        <span className="text-xs text-silver/65 ml-7">Lun – Ven : 8 h – 17 h</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors">
                      <MailIcon size={17} className="text-amber" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors">
                      <WhatsAppIcon size={17} className="text-amber" />
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-silver pt-2 border-t border-charcoal">
                    <MapPinIcon size={17} className="text-amber shrink-0 mt-0.5" />
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
                <div className="pt-3 mt-3 border-t border-charcoal text-xs text-white/85">
                  <p className="font-semibold text-white mb-1.5">
                    Horaires
                  </p>
                  <p>Lundi – vendredi : 8 h – 17 h</p>
                  <p className="text-white/75">Samedi &amp; dimanche : fermé</p>
                </div>
              </div>

              {/* Reassurance */}
              <div className="space-y-3">
                {[
                  "Diagnostic gratuit, sans engagement",
                  "Devis détaillé sous 48h",
                  "Ancien inspecteur, certifié RESCERT",
                  "Un seul interlocuteur du début à la fin",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-charcoal">
                    <CheckIcon size={15} className="text-success shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* RESCERT */}
              <div className="flex items-center gap-3 bg-ivory border border-cloud rounded-xl p-4">
                <Image
                  src="/RESCERT.png"
                  alt="Certification RESCERT"
                  width={100}
                  height={100}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold text-midnight">Certifié RESCERT</p>
                  <p className="text-[11px] text-steel">Installateur agréé</p>
                </div>
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
