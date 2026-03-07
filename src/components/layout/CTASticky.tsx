import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, WhatsAppIcon } from "@/lib/icons";

interface CTAStickyProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export function CTASticky({
  ctaLabel = "Diagnostic gratuit",
  ctaHref = "/contact/",
}: CTAStickyProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-midnight/95 backdrop-blur-sm border-t border-charcoal">
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center justify-center w-12 h-12 bg-charcoal hover:bg-slate rounded-lg text-white transition-colors"
          aria-label="Appeler"
        >
          <PhoneIcon size={20} />
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#20BD5A] rounded-lg text-white transition-colors"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={20} />
        </a>
        <a
          href={ctaHref}
          className="flex-1 text-center bg-amber hover:bg-amber-dark text-midnight font-semibold py-3 rounded-lg transition-colors text-sm"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
