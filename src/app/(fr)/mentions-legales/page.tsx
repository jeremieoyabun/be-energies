import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = generatePageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Be'energies.",
  path: "/mentions-legales/",
});

export default function MentionsLegalesPage() {
  const street = siteConfig.contact.address.streetAddress;
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
          <h2>Éditeur du site</h2>
          <p>
            {siteConfig.name} SARL<br />
            {street && (
              <>
                {street}
                <br />
              </>
            )}
            {siteConfig.contact.address.postalCode}{" "}
            {siteConfig.contact.address.addressLocality}, Belgique<br />
            Email : {siteConfig.contact.email}<br />
            Téléphone : {siteConfig.contact.phone}
          </p>
          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété
            de {siteConfig.name} et protégé par le droit d&apos;auteur. Toute reproduction
            sans autorisation est interdite.
          </p>
        </div>
      </section>
    </>
  );
}
