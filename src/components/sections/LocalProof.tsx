import Link from "next/link";
import { MapPinIcon, CheckIcon, ArrowRightIcon } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import type { City } from "@/lib/types";
import { getRealizationsForCity } from "@/data/realizations";
import { getGrdTariff } from "@/data/local-content";

interface LocalProofProps {
  city: City;
  locale?: "fr" | "nl";
}

export function LocalProof({ city, locale = "fr" }: LocalProofProps) {
  const cityRealizations = getRealizationsForCity(city.slug);
  const hasRealizations = cityRealizations.length > 0;
  const grd = getGrdTariff(city.grd);

  const isFr = locale === "fr";

  return (
    <div className="bg-ivory border border-cloud rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPinIcon size={20} className="text-amber" />
        <h3 className="text-lg font-semibold text-midnight">
          Be&apos;energies {isFr ? "a" : "in"} {city.name}
        </h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-charcoal">
          <CheckIcon size={14} className="text-success shrink-0" />
          <span>
            {siteConfig.stats.installations} installations {isFr ? "dans la province de" : "in de provincie"}{" "}
            {city.province}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-charcoal">
          <CheckIcon size={14} className="text-success shrink-0" />
          <span>
            {isFr ? "Gestionnaire de reseau" : "Netbeheerder"} : {city.grd}
          </span>
        </div>

        {/* GRD tariff detail */}
        {grd && grd.prosumerEurPerKweYear > 0 && (
          <div className="flex items-center gap-2 text-sm text-charcoal">
            <CheckIcon size={14} className="text-success shrink-0" />
            <span>
              {isFr ? "Tarif prosumer" : "Prosumententarief"} : {grd.prosumerEurPerKweYear} EUR/kWe/{isFr ? "an" : "jaar"}{" "}
              (~{grd.cost5kwp} EUR/{isFr ? "an" : "jaar"} {isFr ? "pour" : "voor"} 5 kWc)
            </span>
          </div>
        )}
        {grd?.note && (
          <div className="flex items-center gap-2 text-sm text-charcoal">
            <CheckIcon size={14} className="text-success shrink-0" />
            <span>{grd.note}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-charcoal">
          <CheckIcon size={14} className="text-success shrink-0" />
          <span>
            {isFr ? "Codes postaux desservis" : "Postcodes"} : {city.postalCodes.join(", ")}
          </span>
        </div>
      </div>

      {hasRealizations && (
        <div className="mt-4 pt-4 border-t border-cloud">
          <p className="text-sm font-medium text-midnight mb-2">
            {isFr ? "Realisation recente :" : "Recente realisatie:"}
          </p>
          <Link
            href={`${isFr ? "" : "/nl"}/realisations/${cityRealizations[0].slug}/`}
            className="inline-flex items-center gap-1 text-sm text-amber hover:text-amber-dark font-medium transition-colors"
          >
            {cityRealizations[0].title}
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
