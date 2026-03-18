import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { FAQSection } from "@/components/sections/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Contact -- Diagnostic energetique gratuit",
  description:
    "Contactez Benoit Dezso pour un diagnostic energetique gratuit en Belgique. Reponse personnelle, visite sur site, devis detaille sous 48h. Ancien inspecteur, certifie RESCERT.",
  path: "/contact/",
  alternates: { fr: "/contact/", nl: "/nl/contact/" },
});

const contactFAQ: FAQItem[] = [
  {
    question: "Le diagnostic est-il vraiment gratuit ?",
    answer:
      "Oui, le diagnostic energetique est 100 % gratuit et sans engagement. Il comprend une visite sur site, une analyse de votre situation et un rapport personnalise. Aucun frais cache, aucune obligation de signer quoi que ce soit. C\u2019est notre façon de vous montrer notre serieux avant meme de commencer.",
  },
  {
    question: "Qui me repondra ?",
    answer:
      "Benoit Dezso lui-meme. Pas un call center, pas un sous-traitant commercial. Quand vous appelez ou envoyez un message, c\u2019est le fondateur -- ancien inspecteur en installation electrique, certifie RESCERT -- qui prend en charge votre demande du debut a la fin.",
  },
  {
    question: "Combien de temps pour recevoir un devis ?",
    answer:
      "Maximum 48 heures apres la visite technique sur site. Votre devis sera detaille, avec les tarifs reels, les marques et modeles recommandes, les specifications techniques et une estimation du retour sur investissement adaptee a votre situation.",
  },
  {
    question: "Intervenez-vous dans ma region ?",
    answer:
      "Nous intervenons dans toute la Wallonie, a Bruxelles, et dans le Limbourg flamand : Riemst, Tongeren, Hasselt, Bilzen et les communes environnantes. Contactez-nous pour confirmer votre zone -- dans la grande majorite des cas, nous couvrons votre secteur.",
  },
  {
    question: "Que comprend le diagnostic energetique ?",
    answer:
      "Le diagnostic comprend : une analyse de votre consommation electrique actuelle, une evaluation de votre toiture (orientation, inclinaison, ombrage), un controle de votre tableau electrique et de la tension reseau, et un calcul de rentabilite personnalise base sur vos donnees reelles -- pas sur des moyennes generiques.",
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
              Benoit vous repond personnellement. Diagnostic energetique gratuit, sans engagement.
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
              <p className="text-sm text-steel mb-8">Benoit vous recontacte personnellement sous 24h.</p>

              <form className="space-y-5">
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
                      placeholder="Jean Dupont"
                      className="form-input"
                    />
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
                      placeholder="jean@exemple.be"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+32 4XX XX XX XX"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="form-label">
                      Ville
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Liege, Namur, Bruxelles..."
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="form-label">
                    Service souhaite
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-input"
                  >
                    <option value="">Selectionnez un service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Decrivez votre projet : type de logement, surface, consommation actuelle..."
                    className="form-input resize-y"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    className="mt-1 accent-amber"
                  />
                  <label htmlFor="gdpr" className="text-xs text-steel leading-relaxed">
                    J&apos;accepte que mes donnees soient utilisees pour me recontacter dans le cadre de ma demande.{" "}
                    <Link href="/politique-de-confidentialite/" className="underline hover:text-midnight">
                      Politique de confidentialite
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto cta-glow bg-amber hover:bg-amber-dark text-midnight font-bold px-10 py-4 rounded-xl transition-colors text-base"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs text-steel">Reponse personnelle sous 24h. Pas de call center.</p>
              </form>
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
                      {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Reassurance */}
              <div className="space-y-3">
                {[
                  "Diagnostic gratuit, sans engagement",
                  "Devis detaille sous 48h",
                  "Ancien inspecteur, certifie RESCERT",
                  "Un seul interlocuteur du debut a la fin",
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
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold text-midnight">Certifie RESCERT</p>
                  <p className="text-[11px] text-steel">Installateur agree</p>
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
