import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata = generatePageMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles de Be'energies. RGPD, cookies, durée de conservation et exercice des droits.",
  path: "/politique-de-confidentialite/",
});

export default function PrivacyPolicyPage() {
  const { email } = siteConfig.contact;
  const { companyName, vatNumber, privacyAsOf } = siteConfig.legal;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Politique de confidentialité" },
        ]}
      />

      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h1>Politique de confidentialité</h1>
          <p className="text-sm text-steel">
            Dernière mise à jour : {privacyAsOf}
          </p>

          <h2>Qui sommes-nous ?</h2>
          <p>
            L&apos;adresse de notre site Web est :{" "}
            <a href={siteConfig.url} className="underline">
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </a>
            . L&apos;éditeur du site est {companyName} (TVA {vatNumber}).
            Pour toute question relative à la présente politique, vous pouvez
            nous écrire à{" "}
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
            .
          </p>

          <h2>Données personnelles</h2>

          <h3>Définitions</h3>
          <ul>
            <li>
              <strong>L&apos;Éditeur</strong> : la personne, physique ou morale,
              qui édite les services de communication au public en ligne.
            </li>
            <li>
              <strong>Le Site</strong> : l&apos;ensemble des pages internet et
              services en ligne proposés par l&apos;Éditeur.
            </li>
            <li>
              <strong>L&apos;Utilisateur</strong> : la personne utilisant le
              Site et les services.
            </li>
          </ul>

          <h3>1. Nature des données collectées</h3>
          <p>
            Dans le cadre de l&apos;utilisation du Site, l&apos;Éditeur est
            susceptible de collecter les catégories de données suivantes
            concernant ses Utilisateurs :
          </p>
          <ul>
            <li>
              Données d&apos;identification fournies via le formulaire de
              contact : nom, email, téléphone, code postal / ville.
            </li>
            <li>
              Données relatives à votre projet : type de projet, type de
              bâtiment, délai envisagé, message libre, mention « j&apos;ai
              déjà reçu un devis ».
            </li>
          </ul>
          <p>
            Aucune donnée sensible (origine, opinions, santé, vie sexuelle,
            convictions religieuses ou philosophiques) n&apos;est collectée.
          </p>

          <h3>2. Communication des données personnelles à des tiers</h3>
          <p>
            <strong>Pas de communication à des tiers.</strong> Vos données ne
            font l&apos;objet d&apos;aucune communication à des tiers à des
            fins commerciales. Vous êtes toutefois informé qu&apos;elles
            pourront être divulguées en application d&apos;une loi, d&apos;un
            règlement ou en vertu d&apos;une décision d&apos;une autorité
            réglementaire ou judiciaire compétente.
          </p>
          <p>
            Le service de transport des emails du formulaire de contact est
            assuré par notre prestataire <strong>Resend</strong> (sous-traitant
            au sens du RGPD), qui ne conserve ces données que le temps
            strictement nécessaire à l&apos;acheminement du message.
          </p>
          <p>
            <strong>Téléchargements de guides PDF.</strong> Lorsque vous
            demandez l&apos;un de nos guides gratuits (par exemple « 7 pièges
            à éviter »), votre email et, le cas échéant, votre prénom sont
            transmis à notre prestataire <strong>Brevo</strong> (sous-traitant
            au sens du RGPD, serveurs situés dans l&apos;Union européenne)
            qui héberge la liste de contacts et envoie le mail de
            confirmation contenant le lien de téléchargement. Vous
            n&apos;êtes pas inscrit·e à une newsletter sans avoir explicitement
            coché la case correspondante dans le formulaire. Vous pouvez
            demander à tout moment la suppression de votre adresse en
            écrivant à {""}
            <a href="mailto:info@be-energies.be">info@be-energies.be</a>.
          </p>

          <h3>
            3. Information préalable en cas de fusion / absorption
          </h3>
          <p>
            Dans le cas où l&apos;Éditeur prendrait part à une opération de
            fusion, d&apos;acquisition ou à toute autre forme de cession
            d&apos;actifs, il s&apos;engage à garantir la confidentialité de
            vos données personnelles et à vous informer avant que celles-ci ne
            soient transférées ou soumises à de nouvelles règles de
            confidentialité.
          </p>

          <h3>4. Agrégation des données</h3>
          <p>
            <strong>Agrégation avec des données non personnelles.</strong> Nous
            pouvons publier, divulguer et utiliser des informations agrégées
            (informations relatives à tous nos Utilisateurs ou à des groupes
            ou catégories spécifiques d&apos;Utilisateurs, combinées de
            manière à ce qu&apos;un Utilisateur individuel ne puisse plus être
            identifié) et des informations non personnelles à des fins
            d&apos;analyse du secteur et du marché, de profilage démographique
            et à d&apos;autres fins commerciales.
          </p>

          <h3>5. Collecte des données d&apos;identité</h3>
          <p>
            <strong>Consultation libre.</strong> La consultation du Site ne
            nécessite pas d&apos;inscription ni d&apos;identification
            préalable. Elle peut s&apos;effectuer sans que vous ne
            communiquiez de données nominatives vous concernant. Nous ne
            procédons à aucun enregistrement de données nominatives pour la
            simple consultation du Site.
          </p>

          <h3>6. Collecte des données d&apos;identification</h3>
          <p>
            Vos identifiants électroniques (email, téléphone) sont utilisés
            uniquement pour répondre à votre demande de diagnostic ou de devis
            et, le cas échéant, pour l&apos;exécution du contrat qui en
            découle.
          </p>

          <h3>7. Collecte des données du terminal</h3>
          <p>
            Nous ne collectons ni ne conservons aucune donnée technique de
            votre appareil (adresse IP, fournisseur d&apos;accès internet,
            empreinte navigateur). L&apos;hébergement Vercel peut conserver
            des journaux techniques pour la sécurité de l&apos;infrastructure,
            pendant une durée limitée.
          </p>

          <h3>8. Cookies</h3>
          <p>
            <strong>Durée de conservation.</strong> Conformément aux
            recommandations de l&apos;Autorité de protection des données
            (APD), la durée maximale de conservation des cookies est de
            13 mois après leur premier dépôt sur le terminal de
            l&apos;Utilisateur.
          </p>
          <p>
            <strong>Finalités.</strong> Le site n&apos;utilise pas de cookies
            de suivi publicitaire ou de profilage. Seuls des cookies
            strictement nécessaires au fonctionnement du site et à la
            mémorisation de vos préférences (consentement cookies, choix de
            langue) sont déposés.
          </p>
          <p>
            <strong>Droit de refuser les cookies.</strong> Vous reconnaissez
            avoir été informé que l&apos;Éditeur peut avoir recours à des
            cookies. Si vous ne souhaitez pas que des cookies soient utilisés
            sur votre terminal, la plupart des navigateurs vous permettent de
            les désactiver dans leurs paramètres.
          </p>

          <h3>9. Conservation des données techniques</h3>
          <p>
            Les données techniques éventuellement conservées par
            l&apos;hébergeur sont conservées pour la durée strictement
            nécessaire à la sécurité de l&apos;infrastructure et aux finalités
            visées ci-avant.
          </p>

          <h3>
            10. Délai de conservation des données personnelles
          </h3>
          <p>
            Conformément au Règlement général sur la protection des données
            (RGPD, UE 2016/679) et à la loi belge du 30 juillet 2018 relative
            à la protection des personnes physiques à l&apos;égard des
            traitements de données à caractère personnel, vos données ne sont
            pas conservées au-delà du temps nécessaire à l&apos;exécution des
            finalités décrites ci-dessus.
          </p>
          <p>
            En pratique, les données collectées via le formulaire sont
            conservées <strong>jusqu&apos;à 24 mois</strong> après votre
            dernière interaction avec nous, puis supprimées ou anonymisées.
          </p>

          <h3>
            11. Suppression à la demande
          </h3>
          <p>
            Vous avez la possibilité de demander la suppression de vos données
            à tout moment en écrivant à{" "}
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
            . Nous traiterons votre demande dans le délai d&apos;un mois.
          </p>

          <h3>
            12. Failles de sécurité
          </h3>
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles
            appropriées afin de garantir un niveau de sécurité adapté au
            regard des risques d&apos;accès non autorisés, de divulgation,
            d&apos;altération, de perte ou de destruction des données
            personnelles vous concernant. Dans l&apos;éventualité où nous
            prendrions connaissance d&apos;un incident affectant vos données,
            nous nous engageons à vous notifier dans les meilleurs délais
            conformément à l&apos;article 34 du RGPD.
          </p>

          <h3>
            13. Transfert des données personnelles hors UE
          </h3>
          <p>
            L&apos;Éditeur s&apos;engage à ne pas transférer les données
            personnelles de ses Utilisateurs en dehors de l&apos;Union
            européenne, sauf à recourir à un sous-traitant offrant des
            garanties appropriées (clauses contractuelles types de la
            Commission européenne ou décision d&apos;adéquation).
          </p>

          <h3>
            14. Vos droits RGPD
          </h3>
          <p>
            Vous disposez à tout moment des droits suivants sur vos données
            personnelles : accès, rectification, effacement, limitation,
            opposition, portabilité, retrait du consentement. Vous pouvez
            exercer ces droits à l&apos;adresse{" "}
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
            . Vous avez également le droit d&apos;introduire une réclamation
            auprès de l&apos;Autorité de protection des données (APD) :{" "}
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              autoriteprotectiondonnees.be
            </a>
            .
          </p>

          <h3>
            15. Modification de la politique
          </h3>
          <p>
            Nous nous engageons à vous informer en cas de modification
            substantielle de la présente Politique de confidentialité, et à ne
            pas baisser le niveau de confidentialité de vos données de manière
            substantielle sans vous en informer.
          </p>

          <h3>
            16. Droit applicable
          </h3>
          <p>
            La présente Politique de confidentialité et l&apos;utilisation du
            Site sont régies et interprétées conformément au droit belge,
            notamment au RGPD (UE 2016/679) et à la loi belge du 30 juillet
            2018 relative à la protection des personnes physiques à
            l&apos;égard des traitements de données à caractère personnel. En
            cas de litige, les parties chercheront une solution amiable avant
            toute action judiciaire. À défaut, les juridictions belges sont
            seules compétentes.
          </p>

          <p className="mt-8 text-sm text-steel">
            Voir aussi nos{" "}
            <Link href="/mentions-legales/" className="underline">
              mentions légales
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
