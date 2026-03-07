import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = generatePageMetadata({
  title: "Mentions legales",
  description: "Mentions legales du site Be'energies.",
  path: "/mentions-legales/",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Mentions legales" },
        ]}
      />
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h1>Mentions legales</h1>
          <h2>Editeur du site</h2>
          <p>
            {siteConfig.name} SARL<br />
            {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, Belgique<br />
            Email : {siteConfig.contact.email}<br />
            Telephone : {siteConfig.contact.phone}
          </p>
          <h2>Hebergement</h2>
          <p>
            Ce site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
          <h2>Propriete intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriete
            de {siteConfig.name} et protege par le droit d&apos;auteur. Toute reproduction
            sans autorisation est interdite.
          </p>
        </div>
      </section>
    </>
  );
}
