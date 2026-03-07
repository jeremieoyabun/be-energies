import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = generatePageMetadata({
  title: "Politique de confidentialite",
  description: "Politique de confidentialite et de protection des donnees personnelles de Be'energies.",
  path: "/politique-de-confidentialite/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Politique de confidentialite" },
        ]}
      />
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h1>Politique de confidentialite</h1>
          <p>Derniere mise a jour : mars 2026</p>

          <h2>Responsable du traitement</h2>
          <p>
            {siteConfig.name} SARL<br />
            Email : {siteConfig.contact.email}
          </p>

          <h2>Donnees collectees</h2>
          <p>
            Nous collectons les donnees que vous nous fournissez via le formulaire
            de contact : nom, email, telephone, ville, service souhaite, et message.
          </p>

          <h2>Finalite du traitement</h2>
          <p>
            Vos donnees sont utilisees exclusivement pour repondre a votre demande
            de diagnostic ou de devis. Elles ne sont ni vendues ni partagees avec des tiers.
          </p>

          <h2>Duree de conservation</h2>
          <p>
            Vos donnees sont conservees pendant 24 mois apres votre derniere interaction
            avec nous, puis supprimees.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de
            rectification, de suppression et de portabilite de vos donnees. Contactez-nous
            a {siteConfig.contact.email} pour exercer vos droits.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi ou de publicite.
            Des cookies techniques strictement necessaires au fonctionnement du
            site peuvent etre deposes.
          </p>
        </div>
      </section>
    </>
  );
}
