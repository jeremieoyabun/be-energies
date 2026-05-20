"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MenuIcon, CloseIcon, ChevronDownIcon, getServiceIcon } from "@/lib/icons";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cloud/50"
          : "bg-white border-b border-cloud/30"
      }`}
    >
      <div className="container-be flex items-center justify-between h-16 md:h-[4.5rem]">
        {/* Logo */}
        <Link href={locale === "nl" ? "/nl/" : "/"} className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Logo_Be-energies-02.png"
            alt="Be'energies"
            width={180}
            height={45}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navigation.map((item) => (
            <div
              key={item.href}
              className="relative"
              // Single hover container so the cursor can travel from the
              // trigger to the panel without crossing a "dead zone" that would
              // close the dropdown.
              onMouseEnter={
                item.children ? () => setOpenDropdown(item.href) : undefined
              }
              onMouseLeave={
                item.children ? () => setOpenDropdown(null) : undefined
              }
            >
              {item.children ? (
                <>
                  <button
                    className="flex items-center gap-1 text-[13px] font-medium text-charcoal hover:text-midnight px-3 py-2 rounded-lg hover:bg-ivory transition-colors"
                    onFocus={() => setOpenDropdown(item.href)}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.href ? null : item.href,
                      )
                    }
                    aria-expanded={openDropdown === item.href}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDownIcon size={13} className="text-steel" />
                  </button>
                  {/* Invisible bridge between trigger and panel so hover never breaks */}
                  <div
                    className={`absolute top-full left-0 right-0 h-2 ${
                      openDropdown === item.href ? "" : "pointer-events-none"
                    }`}
                    aria-hidden="true"
                  />
                  <div
                    role="menu"
                    className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-cloud/60 py-2 min-w-56 transition-all duration-200 ${
                      openDropdown === item.href
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child) => {
                      const Icon = child.icon ? getServiceIcon(child.icon) : null;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="group/item flex items-center gap-3 mx-1.5 px-3 py-2.5 text-sm text-charcoal rounded-lg hover:bg-ivory hover:text-midnight transition-all hover:translate-x-0.5"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {Icon && (
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-midnight/5 text-amber-dark shrink-0 group-hover/item:bg-amber group-hover/item:text-midnight transition-colors">
                              <Icon size={16} />
                            </span>
                          )}
                          <span className="flex-1">{child.label}</span>
                          <ChevronDownIcon
                            size={12}
                            className="text-cloud -rotate-90 opacity-0 group-hover/item:opacity-100 group-hover/item:text-amber transition-opacity"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-[13px] font-medium text-charcoal hover:text-midnight px-3 py-2 rounded-lg hover:bg-ivory transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Phone (all sizes) */}
          <a
            href={`tel:${siteConfig.contact.phones[0].raw}`}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-charcoal hover:text-midnight transition-colors px-2"
            aria-label="Appeler"
          >
            <PhoneIcon size={16} className="text-amber" />
            <span className="hidden xl:inline data-figure text-[13px]">{siteConfig.contact.phones[0].label}</span>
          </a>

          {/* CTA button (desktop) */}
          <Link
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold text-[13px] px-5 py-2.5 rounded-xl transition-colors"
          >
            {ctaLabel}
          </Link>

          {/* Phone (mobile) */}
          <a
            href={`tel:${siteConfig.contact.phones[0].raw}`}
            className="sm:hidden p-2 text-midnight"
            aria-label="Appeler"
          >
            <PhoneIcon size={20} />
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-midnight rounded-lg hover:bg-ivory transition-colors"
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
                    <summary className="flex items-center justify-between py-3 text-base font-medium text-midnight cursor-pointer list-none rounded-lg px-3 hover:bg-ivory">
                      {item.label}
                      <ChevronDownIcon size={16} className="transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => {
                        const Icon = child.icon ? getServiceIcon(child.icon) : null;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 py-2.5 px-3 text-sm text-charcoal hover:text-midnight rounded-lg hover:bg-ivory transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {Icon && (
                              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-midnight/5 text-amber-dark shrink-0">
                                <Icon size={15} />
                              </span>
                            )}
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 px-3 text-base font-medium text-midnight rounded-lg hover:bg-ivory transition-colors"
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
                className="block w-full text-center bg-amber hover:bg-amber-dark text-midnight font-bold py-3.5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {ctaLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
