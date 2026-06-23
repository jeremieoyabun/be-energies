import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, ChevronDownIcon, getServiceIcon } from "@/lib/icons";
import type { NavItem } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  navigation: NavItem[];
  locale: "fr" | "nl";
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Server component. The previous version used three client-only states:
 *   - `scrolled`  → now replaced by a permanent backdrop-blur + bg-white/95
 *                   look (the original two states differed only by opacity
 *                   100→95, a faint blur, and shadow-sm).
 *   - `openDropdown` → replaced by pure-CSS group hover/focus-within so
 *                      desktop dropdowns need zero JS.
 *   - `mobileOpen` → isolated inside the tiny <MobileMenu /> client island.
 *
 * Net: header shell, logo, desktop nav, and desktop CTA all render on the
 * server with no client JS.
 */
export function Header({ navigation, locale, ctaLabel, ctaHref }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-cloud/50"
    >
      <div className="container-be flex items-center justify-between h-16 md:h-[4.5rem]">
        {/* Logo */}
        <Link
          href={locale === "nl" ? "/nl/" : "/"}
          className="flex items-center shrink-0"
        >
          <Image
            src="/img/Logo_Be-energies-02.png"
            alt="Be'energies"
            width={180}
            height={45}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav - show only at xl+ so the row never tries to fit at the
            cross-over breakpoint where labels wrap mid-word. Below xl, the
            hamburger takes over. ml-10 pushes the nav away from the logo so
            "Services" doesn't visually stick to the brand. */}
        <nav className="hidden xl:flex items-center gap-1 ml-10" aria-label="Main navigation">
          {navigation.map((item) => (
            <div
              key={item.href}
              // `group` enables pure-CSS hover/focus-within dropdown reveal -
              // no React state, no JS, no `openDropdown`.
              className="relative group"
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[13px] font-medium text-charcoal hover:text-midnight px-3 py-2 rounded-lg hover:bg-ivory transition-colors whitespace-nowrap"
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDownIcon size={13} className="text-steel" />
                  </button>
                  {/* Invisible bridge between trigger and panel so hover never breaks */}
                  <div
                    className="absolute top-full left-0 right-0 h-2"
                    aria-hidden="true"
                  />
                  <div
                    role="menu"
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-cloud/60 py-2 min-w-56 transition-all duration-200 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
                  >
                    {item.children.map((child) => {
                      const Icon = child.icon ? getServiceIcon(child.icon) : null;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="group/item flex items-center gap-3 mx-1.5 px-3 py-2.5 text-sm text-charcoal rounded-lg hover:bg-ivory hover:text-midnight transition-all hover:translate-x-0.5"
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
                  className="text-[13px] font-medium text-charcoal hover:text-midnight px-3 py-2 rounded-lg hover:bg-ivory transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right side - Google reviews badge and inline phone number moved
            out of the header to leave room for the nav. Reviews are still
            visible on the homepage hero + contact form; phone is still in
            footer and on every mobile screen via the icon link below. */}
        <div className="flex items-center gap-2">
          {/* CTA button (desktop) - whitespace-nowrap so the label can never
              split across two lines even when the surrounding row is tight. */}
          <Link
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold text-[13px] px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            {ctaLabel}
          </Link>

          {/* Phone (mobile only - small icon for one-tap call) */}
          <a
            href={`tel:${siteConfig.contact.phones[0].raw}`}
            className="md:hidden p-2 text-midnight"
            aria-label="Appeler — Lun – Ven : 8 h – 17 h"
            title="Lun – Ven : 8 h – 17 h"
          >
            <PhoneIcon size={20} />
          </a>

          {/* Mobile menu - the only client-side island in the header */}
          <MobileMenu
            navigation={navigation}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        </div>
      </div>
    </header>
  );
}
