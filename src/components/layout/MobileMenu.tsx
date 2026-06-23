"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon, ChevronDownIcon, getServiceIcon } from "@/lib/icons";
import type { NavItem } from "@/data/navigation";

interface MobileMenuProps {
  navigation: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Minimal client component owning the mobile slide-down panel toggle.
 * Sub-section expand/collapse uses native <details> - no React state.
 * Closing the panel happens on any Link / CTA click.
 */
export function MobileMenu({ navigation, ctaLabel, ctaHref }: MobileMenuProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <>
      {/* Hamburger - visible below xl (matches the desktop nav threshold) */}
      <button
        className="xl:hidden p-2 text-midnight rounded-lg hover:bg-ivory transition-colors"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
      </button>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-cloud bg-white absolute left-0 right-0 top-full">
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
                            onClick={close}
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
                    onClick={close}
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
                onClick={close}
              >
                {ctaLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
