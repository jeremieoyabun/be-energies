import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { footerNavFr } from "@/data/navigation";
import { PhoneIcon, MailIcon, WhatsAppIcon, MapPinIcon } from "@/lib/icons";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

export function Footer() {
  return (
    <footer className="bg-midnight text-silver relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 texture-dots" />
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

            {/* Lead magnet - compact PDF capture, sits under Services */}
            <div className="mt-6">
              <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-light">
                Checklist gratuite
              </p>
              {/* API route returning a PDF - keep <a> for direct download (no client nav). */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/api/guide/pieges/"
                className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-white hover:text-amber-light transition-colors font-semibold"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber shrink-0"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6m0 6l-3-3m3 3l3-3" />
                </svg>
                Télécharger le PDF (10 pièges)
              </a>
            </div>
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
              {siteConfig.contact.phones.map((p) => (
                <li key={p.raw}>
                  <a
                    href={`tel:${p.raw}`}
                    className="flex items-center gap-2 text-sm text-silver hover:text-amber-light transition-colors"
                  >
                    <PhoneIcon size={16} />
                    <span className="data-figure">{p.label}</span>
                  </a>
                </li>
              ))}
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
              <li className="text-xs text-white/80 pt-1">
                Lun – ven : 8 h – 17 h
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

            {/* Social links */}
            {(siteConfig.social.facebookUrl ||
              siteConfig.social.googleBusinessProfileUrl) && (
              <div className="mt-5 flex items-center gap-3">
                {siteConfig.social.facebookUrl && (
                  <a
                    href={siteConfig.social.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Be'energies sur Facebook"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-charcoal text-silver hover:text-white hover:border-white/30 transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.57V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
                    </svg>
                  </a>
                )}
                {siteConfig.social.googleBusinessProfileUrl && (
                  <a
                    href={siteConfig.social.googleBusinessProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Be'energies sur Google"
                    className="inline-flex items-center gap-2 text-xs text-silver hover:text-white px-3 h-8 rounded-md border border-charcoal hover:border-white/30 transition-colors"
                  >
                    <span className="text-amber">★</span>
                    Avis Google
                  </a>
                )}
              </div>
            )}

            {/* Logo in footer */}
            <Image
              src="/img/Logo_Be-energies-w.png"
              alt="Be'energies"
              width={180}
              height={45}
              loading="lazy"
              className="mt-6 h-10 w-auto"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-charcoal flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-steel">
            &copy; {new Date().getFullYear()} {siteConfig.name} SARL. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-steel">
            <span className="italic font-[family-name:var(--font-heading)]">
              {siteConfig.tagline}
            </span>
            <span className="text-charcoal">·</span>
            {/* Language switcher - sets a long-lived cookie so the
                middleware never re-detects the browser language after an
                explicit choice. */}
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
