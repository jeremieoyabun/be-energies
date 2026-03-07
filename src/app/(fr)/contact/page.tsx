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
  title: "Contact -- Diagnostic énergétique gratuit",
  description:
    "Contactez Benoît Dezso pour un diagnostic énergétique gratuit en Belgique. Réponse personnelle, visite sur site, devis détaillé sous 48h. Ancien inspecteur, certifié RESCERT.",
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
      "Benoît Dezso lui-même. Pas un call center, pas un sous-traitant commercial. Quand vous appelez ou envoyez un message, c\u2019est le fondateur -- ancien inspecteur en installation électrique, certifié RESCERT -- qui prend en charge votre demande du début à la fin.",
  },
  {
    question: "Combien de temps pour recevoir un devis ?",
    answer:
      "Maximum 48 heures après la visite technique sur site. Votre devis sera détaillé, avec les tarifs réels, les marques et modèles recommandés, les spécifications techniques et une estimation du retour sur investissement adaptée à votre situation.",
  },
  {
    question: "Intervenez-vous dans ma région ?",
    answer:
      "Nous intervenons dans toute la Wallonie, à Bruxelles, et dans le Limbourg flamand : Riemst, Tongeren, Hasselt, Bilzen et les communes environnantes. Contactez-nous pour confirmer votre zone -- dans la grande majorité des cas, nous couvrons votre secteur.",
  },
  {
    question: "Que comprend le diagnostic énergétique ?",
    answer:
      "Le diagnostic comprend : une analyse de votre consommation électrique actuelle, une évaluation de votre toiture (orientation, inclinaison, ombrage), un contrôle de votre tableau électrique et de la tension réseau, et un calcul de rentabilité personnalisé basé sur vos données réelles -- pas sur des moyennes génériques.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Prise de contact",
    description:
      "Vous nous contactez par téléphone, formulaire ou WhatsApp. Benoît vous répond personnellement pour comprendre votre projet et planifier la visite.",
  },
  {
    number: 2,
    title: "Visite technique sur site",
    description:
      "Benoît se déplace chez vous pour analyser votre toiture, votre tableau électrique, votre consommation et vos objectifs. Gratuit, sans engagement.",
  },
  {
    number: 3,
    title: "Proposition chiffrée personnalisée",
    description:
      "Sous 48h, vous recevez un devis détaillé avec les solutions adaptées à votre situation, les tarifs réels et le retour sur investissement calculé.",
  },
];

const reassuranceItems = [
  {
    text: "Benoît vous répond personnellement",
    detail: "Pas de call center, pas d\u2019intermédiaire",
  },
  {
    text: "Diagnostic gratuit, sans engagement",
    detail: "Visite sur site + rapport personnalisé inclus",
  },
  {
    text: "Devis détaillé sous 48h après visite",
    detail: "Tarifs réels, marques, spécifications et ROI",
  },
  {
    text: "Ancien inspecteur | Certifié RESCERT",
    detail: "Votre garantie de conformité et de sécurité",
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
        subheadline="Benoît vous répond personnellement. Diagnostic énergétique gratuit, sans engagement."
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
              <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-2">
                Demandez votre diagnostic gratuit
              </h2>
              <p className="text-steel mb-8">Remplissez le formulaire et Benoît vous recontacte personnellement sous 24h.</p>
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
                      placeholder="Jean Dupont"
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
                      placeholder="jean@exemple.be"
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-midnight mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+32 4XX XX XX XX"
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
                      placeholder="Liège, Namur, Bruxelles..."
                      className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-midnight mb-1.5">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
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
                    placeholder="Décrivez votre projet : type de logement, surface, consommation actuelle, ce qui vous intéresse..."
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
                    J&apos;accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
                    Consultez notre{" "}
                    <Link href="/politique-de-confidentialite/" className="underline hover:text-midnight">
                      politique de confidentialité
                    </Link>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto cta-glow bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FounderCredibility variant="compact" />

              <div className="bg-midnight border border-cloud rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-white">Contact direct</h3>
                <ul className="space-y-3">
                  <li>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors">
                      <PhoneIcon size={18} className="text-amber" />
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors">
                      <MailIcon size={18} className="text-amber" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors">
                      <WhatsAppIcon size={18} className="text-amber" />
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-silver">
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
            Comment ça se passe
          </h2>
          <p className="text-center text-steel max-w-2xl mx-auto mb-12">
            De votre premier appel à la proposition chiffrée : un processus simple, transparent, sans surprise.
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
                className="flex items-start gap-3 p-5 bg-white border border-cloud/60 shadow-sm rounded-2xl"
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
