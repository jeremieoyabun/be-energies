"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MenuIcon, CloseIcon, ChevronDownIcon } from "@/lib/icons";
import type { NavItem } from "@/data/navigation";

interface HeaderProps {
  navigation: NavItem[];
  locale: "fr" | "nl";
  ctaLabel: string;
  ctaHref: string;
}

export function Header({ navigation, locale, ctaLabel, ctaHref }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Pre-header: phone bar */}
      <div className="bg-midnight text-white text-sm py-1.5 hidden md:block">
        <div className="container-be flex justify-between items-center">
          <span className="text-silver">{siteConfig.tagline}</span>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="text-amber-light hover:text-white transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cloud">
        <div className="container-be flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href={locale === "nl" ? "/nl/" : "/"} className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/Logo_Be-energies-02.png"
              alt="Be'energies"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-midnight transition-colors py-2"
                      onMouseEnter={() => setOpenDropdown(item.href)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      aria-expanded={openDropdown === item.href}
                    >
                      {item.label}
                      <ChevronDownIcon size={14} className="text-steel" />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg border border-cloud py-2 min-w-56 transition-all ${
                        openDropdown === item.href
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.href)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-ivory hover:text-midnight transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-charcoal hover:text-midnight transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <Link
              href={locale === "fr" ? "/nl/" : "/"}
              className="text-xs font-medium text-steel hover:text-midnight transition-colors uppercase"
            >
              {locale === "fr" ? "NL" : "FR"}
            </Link>

            {/* CTA button (desktop) */}
            <Link
              href={ctaHref}
              className="hidden md:inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              {ctaLabel}
            </Link>

            {/* Phone (mobile) */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="lg:hidden p-2 text-midnight"
              aria-label="Appeler"
            >
              <PhoneIcon size={20} />
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 text-midnight"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-cloud bg-white">
            <nav className="container-be py-4 space-y-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between py-3 text-base font-medium text-midnight cursor-pointer list-none">
                        {item.label}
                        <ChevronDownIcon size={16} className="transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-charcoal hover:text-midnight"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-midnight"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-cloud">
                <Link
                  href={ctaHref}
                  className="block w-full text-center bg-amber hover:bg-amber-dark text-midnight font-semibold py-3 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {ctaLabel}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
