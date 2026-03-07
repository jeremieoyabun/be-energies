import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerNavFr } from "@/data/navigation";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="bg-midnight text-silver relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 hatch-pattern opacity-30" />
      <div className="container-be section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerNavFr.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-silver hover:text-amber-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Informations
            </h3>
            <ul className="space-y-2.5">
              {footerNavFr.informations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-silver hover:text-amber-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-silver hover:text-amber-light transition-colors"
                >
                  <PhoneIcon size={16} />
                  <span className="data-figure">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-silver hover:text-amber-light transition-colors"
                >
                  <MailIcon size={16} />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-silver hover:text-amber-light transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPinIcon size={16} className="shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-cyan/10 rounded-md px-3 py-2 text-xs font-medium text-cyan border border-cyan/20">
                RESCERT
              </div>
              <p className="text-xs text-steel leading-relaxed">
                {siteConfig.founder.name}, {siteConfig.founder.credential}
              </p>
            </div>

            {/* Logo in footer */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/Logo_Be-energies-w.png"
              alt="Be'energies"
              width={120}
              height={30}
              className="mt-6 h-7 w-auto opacity-60"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-charcoal flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-steel">
            &copy; {new Date().getFullYear()} {siteConfig.name} SARL. Tous droits réservés.
          </p>
          <p className="text-xs text-steel italic font-[family-name:var(--font-heading)]">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
