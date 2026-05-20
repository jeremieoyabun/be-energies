import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Contact | Diagnostic énergétique gratuit en Wallonie",
  description:
    "Diagnostic énergétique gratuit en Wallonie : visite technique sur site, devis détaillé sous 48 h. Réponse personnelle de Benoît Dezso, certifié RESCERT. Pas de call center, pas de pression commerciale.",
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
      "Benoît Dezso lui-même. Pas un call center, pas un sous-traitant commercial. Quand vous appelez ou envoyez un message, c\u2019est le fondateur — ancien inspecteur en installation électrique, certifié RESCERT — qui prend en charge votre demande du début à la fin.",
  },
  {
    question: "Combien de temps pour recevoir un devis ?",
    answer:
      "Maximum 48 heures après la visite technique sur site. Votre devis sera détaillé, avec les tarifs réels, les marques et modèles recommandés, les spécifications techniques et une estimation du retour sur investissement adaptée à votre situation.",
  },
  {
    question: "Intervenez-vous dans ma région ?",
    answer:
      "Nous intervenons dans toute la Wallonie, à Bruxelles, et dans le Limbourg flamand : Riemst, Tongeren, Hasselt, Bilzen et les communes environnantes. Contactez-nous pour confirmer votre zone — dans la grande majorité des cas, nous couvrons votre secteur.",
  },
  {
    question: "Que comprend le diagnostic énergétique ?",
    answer:
      "Le diagnostic comprend : une analyse de votre consommation électrique actuelle, une évaluation de votre toiture (orientation, inclinaison, ombrage), un contrôle de votre tableau électrique et de la tension réseau, et un calcul de rentabilité personnalisé basé sur vos données réelles — pas sur des moyennes génériques.",
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

      {/* Hero */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-be">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
              Parlons de votre projet
            </h1>
            <p className="mt-4 text-lg text-charcoal leading-relaxed">
              Benoît vous répond personnellement. Diagnostic énergétique gratuit, sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-padding">
        <div className="container-be">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-xl font-[family-name:var(--font-heading)] text-midnight mb-1">
                Demandez votre diagnostic gratuit
              </h2>
              <p className="text-sm text-steel mb-8">
                Quelques précisions nous permettent de préparer un rendez-vous utile. Comptez moins de 2 minutes.
              </p>

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
                  <li>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors">
                      <PhoneIcon size={17} className="text-amber" />
                      <span className="data-figure">{siteConfig.contact.phone}</span>
                    </a>
                  </li>
                  {siteConfig.contact.mobiles.map((m) => (
                    <li key={m.raw}>
                      <a
                        href={`tel:${m.raw}`}
                        className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors"
                      >
                        <PhoneIcon size={17} className="text-amber" />
                        <span className="data-figure">{m.label}</span>
                        <span className="text-[10px] uppercase tracking-wider text-silver/60 ml-auto">
                          GSM
                        </span>
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
                <div className="pt-3 mt-3 border-t border-charcoal text-xs text-silver/80">
                  <p className="font-semibold text-white mb-1.5">
                    Horaires
                  </p>
                  <p>Lundi – vendredi : 8 h – 17 h</p>
                  <p className="text-silver/60">Samedi &amp; dimanche : fermé</p>
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
