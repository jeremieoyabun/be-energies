"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Tiny client island mounted in Header. Listens for route changes via
 * usePathname() and drops the active-element focus on every navigation
 * so the desktop dropdown menu (driven by .group-focus-within CSS)
 * doesn't stay stuck open after the user clicks a link inside it.
 *
 * Renders nothing.
 */
export function CloseMenuOnNavigate() {
  const pathname = usePathname();
  useEffect(() => {
    const el = document.activeElement;
    if (el instanceof HTMLElement) el.blur();
  }, [pathname]);
  return null;
}
