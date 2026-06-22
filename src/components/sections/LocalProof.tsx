import Link from "next/link";
import { MapPinIcon, CheckIcon, ArrowRightIcon } from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import type { City } from "@/lib/types";
import { getRealizationsForCity, realizations } from "@/data/realizations";
import { getCityBySlug } from "@/data/cities";
import { getGrdTariff } from "@/data/local-content";

interface LocalProofProps {
  city: City;
  locale?: "fr" | "nl";
}

const REGION_LABEL: Record<City["region"], { fr: string; nl: string }> = {
  wallonie: { fr: "la Wallonie", nl: "Wallonië" },
  bruxelles: { fr: "Bruxelles", nl: "Brussel" },
  flandre: { fr: "la Flandre", nl: "Vlaanderen" },
};

export function LocalProof({ city, locale = "fr" }: LocalProofProps) {
  const cityRealizations = getRealizationsForCity(city.slug);
  const hasRealizations = cityRealizations.length > 0;
  const grd = getGrdTariff(city.grd);

  const isFr = locale === "fr";
  const { installations } = siteConfig.stats;

  // Province-level fallback: only computed when the city itself has no tagged
  // realizations. We derive each realization's province from its city slug via
  // the cities dataset (realizations carry only a city slug, no province field).
  // Numbers and years are read straight from the dataset -- never invented.
  let provinceCount = 0;
  let provinceEarliestYear: string | null = null;
  if (!hasRealizations) {
    const sameProvince = realizations.filter((r) => {
      const c = getCityBySlug(r.city);
      return c?.province === city.province;
    });
    provinceCount = sameProvince.length;
    if (provinceCount > 0) {
      const earliest = sameProvince
        .map((r) => r.date)
        .sort()[0]; // YYYY-MM strings sort lexicographically
      provinceEarliestYear = earliest.slice(0, 4);
    }
  }
  const regionLabel = REGION_LABEL[city.region][isFr ? "fr" : "nl"];

  return (
    <div className="bg-ivory border border-cloud rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPinIcon size={20} className="text-amber" />
        <h3 className="text-lg font-semibold text-midnight">
          Be&apos;energies {isFr ? "à" : "in"} {city.name}
        </h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-charcoal">
          <CheckIcon size={14} className="text-success shrink-0" />
          <span>
            {installations.verified
              ? `${installations.value} installations ${isFr ? "dans la province de" : "in de provincie"} ${city.province}`
              : isFr
                ? `Installations résidentielles et professionnelles en province de ${city.province}`
                : `Residentiële en professionele installaties in de provincie ${city.province}`}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-charcoal">
          <CheckIcon size={14} className="text-success shrink-0" />
          <span>
            {isFr ? "Gestionnaire de réseau" : "Netbeheerder"} : {city.grd}
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

      {hasRealizations ? (
        <div className="mt-4 pt-4 border-t border-cloud">
          <p className="text-sm font-medium text-midnight mb-2">
            {isFr ? "Réalisation récente :" : "Recente realisatie :"}
          </p>
          <Link
            href={`${isFr ? "" : "/nl"}/realisations/${cityRealizations[0].slug}/`}
            className="inline-flex items-center gap-1 text-sm text-amber hover:text-amber-dark font-medium transition-colors"
          >
            {cityRealizations[0].title}
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      ) : provinceCount > 0 ? (
        <div className="mt-4 pt-4 border-t border-cloud">
          <p className="text-sm font-medium text-midnight mb-2">
            {isFr ? "Proximité régionale :" : "Regionale aanwezigheid :"}
          </p>
          <p className="text-sm text-charcoal">
            {isFr
              ? `${provinceCount} projet${provinceCount > 1 ? "s" : ""} vérifié${provinceCount > 1 ? "s" : ""} en province de ${city.province} depuis ${provinceEarliestYear}.`
              : `${provinceCount} geverifieerd${provinceCount > 1 ? "e" : ""} project${provinceCount > 1 ? "en" : ""} in de provincie ${city.province} sinds ${provinceEarliestYear}.`}
          </p>
        </div>
      ) : (
        <div className="mt-4 pt-4 border-t border-cloud">
          <p className="text-sm font-medium text-midnight mb-2">
            {isFr ? "Zone d'intervention :" : "Werkgebied :"}
          </p>
          <p className="text-sm text-charcoal">
            {isFr
              ? `Équipe basée à Riemst, intervenant dans toute ${regionLabel}.`
              : `Team gevestigd in Riemst, actief in heel ${regionLabel}.`}
          </p>
        </div>
      )}
    </div>
  );
}
