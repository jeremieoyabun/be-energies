import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { FAQSection } from "@/components/sections/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon, CheckIcon } from "@/lib/icons";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title: "Contact -- Diagnostic energetique gratuit",
  description:
    "Contactez Benoit Dezso pour un diagnostic energetique gratuit en Belgique. Reponse personnelle, visite sur site, devis detaille sous 48h. Ancien inspecteur RESCERT.",
  path: "/contact/",
  alternates: { fr: "/contact/", nl: "/nl/contact/" },
});

const contactFAQ: FAQItem[] = [
  {
    question: "Le diagnostic est-il vraiment gratuit ?",
    answer:
      "Oui, le diagnostic energetique est 100 % gratuit et sans engagement. Il comprend une visite sur site, une analyse de votre situation et un rapport personnalise. Aucun frais cache, aucune obligation de signer quoi que ce soit. C\u2019est notre facon de vous montrer notre serieux avant meme de commencer.",
  },
  {
    question: "Qui me repondra ?",
    answer:
      "Benoit Dezso lui-meme. Pas un call center, pas un sous-traitant commercial. Quand vous appelez ou envoyez un message, c\u2019est le fondateur -- ancien inspecteur electrique RESCERT -- qui prend en charge votre demande du debut a la fin.",
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

const processSteps = [
  {
    number: 1,
    title: "Prise de contact",
    description:
      "Vous nous contactez par telephone, formulaire ou WhatsApp. Benoit vous repond personnellement pour comprendre votre projet et planifier la visite.",
  },
  {
    number: 2,
    title: "Visite technique sur site",
    description:
      "Benoit se deplace chez vous pour analyser votre toiture, votre tableau electrique, votre consommation et vos objectifs. Gratuit, sans engagement.",
  },
  {
    number: 3,
    title: "Proposition chiffree personnalisee",
    description:
      "Sous 48h, vous recevez un devis detaille avec les solutions adaptees a votre situation, les tarifs reels et le retour sur investissement calcule.",
  },
];

const reassuranceItems = [
  {
    text: "Benoit vous repond personnellement",
    detail: "Pas de call center, pas d\u2019intermediaire",
  },
  {
    text: "Diagnostic gratuit, sans engagement",
    detail: "Visite sur site + rapport personnalise inclus",
  },
  {
    text: "Devis detaille sous 48h apres visite",
    detail: "Tarifs reels, marques, specifications et ROI",
  },
  {
    text: "Ancien inspecteur RESCERT",
    detail: "Votre garantie de conformite et de securite",
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

      <HeroSection
        headline="Parlons de votre projet"
        subheadline="Benoit vous repond personnellement. Diagnostic energetique gratuit, sans engagement."
        ctaLabel="Appeler maintenant"
        ctaHref={`tel:${siteConfig.contact.phoneRaw}`}
        variant="compact"
      />

      {/* Form + Sidebar */}
      <section className="section-padding">
        <div className="container-be">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
                Demandez votre diagnostic gratuit
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-midnight mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-midnight mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-midnight mb-1.5">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-midnight mb-1.5">
                      Ville
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-midnight mb-1.5">
                    Service souhaite
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors bg-white"
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
                  <label htmlFor="message" className="block text-sm font-medium text-midnight mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors resize-y"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    className="mt-1 accent-amber"
                  />
                  <label htmlFor="gdpr" className="text-xs text-steel">
                    J&apos;accepte que mes donnees soient utilisees pour me recontacter dans le cadre de ma demande.
                    Consultez notre{" "}
                    <Link href="/politique-de-confidentialite/" className="underline hover:text-midnight">
                      politique de confidentialite
                    </Link>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FounderCredibility variant="compact" />

              <div className="bg-ivory border border-cloud rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-midnight">Contact direct</h3>
                <ul className="space-y-3">
                  <li>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-3 text-sm text-charcoal hover:text-midnight transition-colors">
                      <PhoneIcon size={18} className="text-amber" />
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-charcoal hover:text-midnight transition-colors">
                      <MailIcon size={18} className="text-amber" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-charcoal hover:text-midnight transition-colors">
                      <WhatsAppIcon size={18} className="text-amber" />
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-charcoal">
                    <MapPinIcon size={18} className="text-amber shrink-0 mt-0.5" />
                    <span>
                      {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-ivory">
        <div className="container-be">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-4">
            Comment ca se passe
          </h2>
          <p className="text-center text-steel max-w-2xl mx-auto mb-12">
            De votre premier appel a la proposition chiffree : un processus simple, transparent, sans surprise.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 md:gap-0">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex-1 flex flex-col md:flex-row items-center md:items-start">
                <div className="flex flex-col items-center text-center flex-1">
                  {/* Step number */}
                  <div className="w-14 h-14 rounded-full bg-amber text-midnight font-[family-name:var(--font-heading)] text-xl font-bold flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-midnight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>

                {/* Connector line between steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center px-4 pt-7">
                    <div className="w-12 h-0.5 bg-amber/40" />
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-amber/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance Blocks */}
      <section className="section-padding">
        <div className="container-be">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reassuranceItems.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 p-5 bg-ivory border border-cloud rounded-xl"
              >
                <CheckIcon size={20} className="text-amber shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-midnight text-sm leading-snug">
                    {item.text}
                  </p>
                  <p className="text-xs text-steel mt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
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
