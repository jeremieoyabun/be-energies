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
                Parlons de votre projet
              </h1>
              <p className="mt-5 text-[17px] md:text-lg text-charcoal leading-relaxed max-w-2xl">
                Benoît vous répond personnellement. Diagnostic gratuit,
                calcul de rentabilité basé sur vos vraies données. Moins de
                2 minutes pour remplir.
              </p>

              {/* Reassurance row + Google rating — visible BEFORE the
                  fields so the visitor knows what they're committing to. */}
              <div className="mt-7 mb-7 bg-ivory border border-cloud rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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

              <ContactForm />
            </div>

            {/* Sidebar — two blocks only: founder identity + direct
                contact channels. Reassurance + RESCERT cards removed
                because the left column already carries them. */}
            <div className="space-y-5 lg:sticky lg:top-24 self-start">
              <FounderCredibility variant="compact" />

              <div className="bg-midnight rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-white text-sm tracking-wide">
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
