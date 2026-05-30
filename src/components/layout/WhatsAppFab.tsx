import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/lib/icons";

/**
 * Floating WhatsApp button — circular, mobile-only.
 * Sits above the CTASticky bar (which itself is 72 px tall + safe area)
 * so neither overlaps the other on small screens.
 *
 * Hidden on desktop where the WhatsApp link is surfaced in the footer
 * and contact sidebar.
 */
export function WhatsAppFab({ label = "Discuter sur WhatsApp" }: { label?: string } = {}) {
  return (
    <a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="md:hidden fixed right-4 bottom-[88px] z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl ring-1 ring-black/10 transition-transform active:scale-95"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
