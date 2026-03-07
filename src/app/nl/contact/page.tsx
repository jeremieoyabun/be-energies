import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon } from "@/lib/icons";

export const metadata = generatePageMetadata({
  title: "Contact -- Gratis energiediagnose",
  description:
    "Neem contact op met Be'energies voor een gratis energiediagnose. Benoît Dezso antwoordt persoonlijk.",
  path: "/nl/contact/",
  locale: "nl-BE",
  alternates: { fr: "/contact/", nl: "/nl/contact/" },
});

export default function NlContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/nl/" },
          { name: "Contact" },
        ]}
      />

      <HeroSection
        headline="Laten we praten over uw project"
        subheadline="Benoît antwoordt persoonlijk. Gratis energiediagnose, zonder verplichting."
        ctaLabel="Nu bellen"
        ctaHref={`tel:${siteConfig.contact.phoneRaw}`}
        variant="compact"
      />

      <section className="section-padding">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] text-midnight mb-6">
            Vraag uw gratis diagnose aan
          </h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name-nl" className="block text-sm font-medium text-midnight mb-1.5">
                  Naam *
                </label>
                <input type="text" id="name-nl" name="name" required className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="email-nl" className="block text-sm font-medium text-midnight mb-1.5">
                  E-mail *
                </label>
                <input type="email" id="email-nl" name="email" required className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone-nl" className="block text-sm font-medium text-midnight mb-1.5">
                  Telefoon
                </label>
                <input type="tel" id="phone-nl" name="phone" className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="service-nl" className="block text-sm font-medium text-midnight mb-1.5">
                  Gewenste dienst
                </label>
                <select id="service-nl" name="service" className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors bg-white">
                  <option value="">Selecteer een dienst</option>
                  {services.map((s) => (
                    <option key={s.slugNl} value={s.slugNl}>{s.titleNl}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message-nl" className="block text-sm font-medium text-midnight mb-1.5">
                Bericht
              </label>
              <textarea id="message-nl" name="message" rows={5} className="w-full border border-cloud rounded-lg px-4 py-3 text-sm focus:border-amber focus:ring-1 focus:ring-amber outline-none transition-colors resize-y" />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="gdpr-nl" name="gdpr" required className="mt-1 accent-amber" />
              <label htmlFor="gdpr-nl" className="text-xs text-steel">
                Ik ga ermee akkoord dat mijn gegevens worden gebruikt om contact met mij op te nemen.
              </label>
            </div>
            <button type="submit" className="w-full sm:w-auto bg-amber hover:bg-amber-dark text-midnight font-semibold px-8 py-4 rounded-lg transition-colors">
              Verstuur mijn aanvraag
            </button>
          </form>

          <div className="mt-10 bg-ivory border border-cloud rounded-xl p-6 space-y-3">
            <h3 className="font-semibold text-midnight">Direct contact</h3>
            <ul className="space-y-3">
              <li><a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-3 text-sm text-charcoal hover:text-midnight"><PhoneIcon size={18} className="text-amber" />{siteConfig.contact.phone}</a></li>
              <li><a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm text-charcoal hover:text-midnight"><MailIcon size={18} className="text-amber" />{siteConfig.contact.email}</a></li>
              <li><a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-charcoal hover:text-midnight"><WhatsAppIcon size={18} className="text-amber" />WhatsApp</a></li>
              <li className="flex items-start gap-3 text-sm text-charcoal"><MapPinIcon size={18} className="text-amber shrink-0 mt-0.5" /><span>{siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
