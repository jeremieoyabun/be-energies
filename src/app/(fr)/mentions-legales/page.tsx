import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = generatePageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Be'energies — éditeur, hébergeur et propriété intellectuelle.",
  path: "/mentions-legales/",
});

export default function MentionsLegalesPage() {
  const { address, phones, email } = siteConfig.contact;
  const { companyName, vatNumber } = siteConfig.legal;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Mentions légales" },
        ]}
      />
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h1>Mentions légales</h1>

          <h2>Éditeur du site internet</h2>
          <p>
            {companyName}
            <br />
            {address.streetAddress}
            <br />
            {address.postalCode} {address.addressLocality}, Belgique
            <br />
            <br />
            Téléphone : {phones[0].label}
            {phones[1] && (
              <>
                {" "}
                / {phones[1].label}
              </>
            )}
            <br />
            Email :{" "}
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
            <br />
            TVA : {vatNumber}
          </p>

          <h2>Hébergeur du site internet</h2>
          <p>
            Vercel Inc.
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              vercel.com
            </a>
          </p>

          <h2>Directeur de la publication</h2>
          <p>{siteConfig.founder.name}, fondateur et gérant de {companyName}.</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, photographies,
            visuels, logos, vidéos, schémas, codes) est la propriété exclusive
            de {companyName} ou de ses partenaires et est protégé par le droit
            d&apos;auteur belge et international. Toute reproduction,
            représentation, modification ou exploitation, totale ou partielle,
            sans autorisation écrite préalable est strictement interdite et
            constitue une contrefaçon sanctionnée par le Livre XI du Code de
            droit économique.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données collectées via ce site est détaillé dans
            notre{" "}
            <Link
              href="/politique-de-confidentialite/"
              className="underline"
            >
              Politique de confidentialité
            </Link>
            . Conformément au RGPD, vous disposez d&apos;un droit
            d&apos;accès, de rectification, d&apos;effacement et de portabilité
            de vos données. Vous pouvez exercer ces droits en écrivant à{" "}
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
            .
          </p>

          <h2>Litiges</h2>
          <p>
            Le présent site et son contenu sont régis par le droit belge. Tout
            litige relatif à l&apos;utilisation du site relève de la
            compétence exclusive des tribunaux belges.
          </p>
        </div>
      </section>
    </>
  );
}
