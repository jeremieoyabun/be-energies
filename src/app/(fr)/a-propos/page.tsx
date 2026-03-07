import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, personSchema, organizationSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HeroSection } from "@/components/sections/HeroSection";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import { TrustBar } from "@/components/sections/TrustBar";
import { TestimonialBlock } from "@/components/sections/TestimonialBlock";
import { CTADiagnostic } from "@/components/sections/CTADiagnostic";
import { testimonials } from "@/data/testimonials";

export const metadata = generatePageMetadata({
  title: "Benoît Dezso, ancien inspecteur en installation électrique, certifié RESCERT",
  description:
    "Ancien inspecteur en installation électrique et certifié RESCERT, Benoît Dezso fonde Be'energies pour installer ce qu'il aurait approuvé. Découvrez son parcours.",
  path: "/a-propos/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={organizationSchema()} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "À propos" },
        ]}
      />

      <HeroSection
        headline="L&apos;installateur qui a d&apos;abord été l&apos;inspecteur"
        subheadline="Benoît Dezso a passé plus de 10 ans à inspecter des installations électriques et photovoltaïques en Belgique. Il a vu ce qui casse, ce qui brûle, ce qui coûte cher. Aujourd&apos;hui, il installe ce qu&apos;il aurait approuvé."
        ctaLabel="Diagnostic gratuit"
        ctaHref="/contact/"
        variant="compact"
      />

      <FounderCredibility variant="full" />

      {/* Section 1: L'histoire de Benoît */}
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h2>D&apos;inspecteur à installateur : pourquoi Benoît a changé de camp</h2>

          <p>
            Pendant plus de dix ans, Benoît Dezso a travaillé comme inspecteur en
            conformité électrique pour des organismes agréés en Belgique. Son
            métier : vérifier que les installations électriques et photovoltaïques
            respectaient les normes de sécurité. Chaque jour, il entrait dans des
            maisons, ouvrait des coffrets, analysait des schémas, et rédigeait des
            rapports. Conformes ou non conformes.
          </p>

          <p>
            La réalité du terrain l&apos;a marqué. Pas parce que tout était
            catastrophique -- beaucoup d&apos;installations étaient correctes. Mais
            parce que les erreurs qu&apos;il constatait suivaient toujours les
            mêmes schémas. Des onduleurs sous-dimensionnés pour gagner quelques
            centaines d&apos;euros. Des câbles mal sectionnés. Des protections
            absentes. Des installations photovoltaïques dimensionnées pour gonfler
            un devis, pas pour correspondre à la consommation réelle du ménage.
          </p>

          <p>
            Et surtout, des propriétaires qui ne savaient pas. Qui avaient fait
            confiance. Qui avaient signé un devis, payé une facture, et pensaient
            que tout était en ordre. Jusqu&apos;au passage de l&apos;inspecteur.
          </p>

          <p>
            Au fil des années, Benoît a développé une conviction : le problème
            n&apos;était pas que les normes étaient trop strictes. Le problème
            était que trop d&apos;installateurs les ignoraient, par manque de
            formation, par facilité, ou par calcul commercial. Et la personne qui
            payait les conséquences, c&apos;était toujours le propriétaire.
          </p>

          <p>
            En fondant Be&apos;energies, Benoît a décidé d&apos;appliquer de
            l&apos;autre côté du métier tout ce qu&apos;il avait appris en tant
            qu&apos;inspecteur. Non pas parce qu&apos;il voulait prouver que les
            autres avaient tort. Mais parce qu&apos;il savait à quoi ressemble une
            installation bien faite -- et qu&apos;il voulait n&apos;en produire
            que de celles-là.
          </p>
        </div>
      </section>

      {/* Section 2: Ce que Benoît a constaté en tant qu'inspecteur */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-4">
            Ce que Benoît a constaté sur le terrain
          </h2>
          <p className="text-charcoal leading-relaxed mb-8">
            Pas pour faire peur. Pour que vous compreniez pourquoi nous
            travaillons comme nous travaillons. Voici quatre situations que Benoît
            a documentées à de nombreuses reprises pendant ses années
            d&apos;inspection.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                L&apos;onduleur qui ne pouvait pas suivre
              </h3>
              <p className="text-charcoal leading-relaxed">
                Un propriétaire à Liège avait fait installer 18 panneaux de
                425 Wc sur son toit. Puissance crête théorique : 7.65 kWc.
                L&apos;onduleur installé était un modèle de 5 kW. Résultat :
                chaque jour ensoleillé, l&apos;onduleur écrêtait la production.
                Le client perdait entre 15 et 20% de rendement sans le savoir.
                L&apos;installateur avait économisé 400 euros. Le client en
                perdait plusieurs centaines par an.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Le coffret qui n&apos;avait jamais été adapté
              </h3>
              <p className="text-charcoal leading-relaxed">
                Dans un quartier résidentiel de Charleroi, Benoît a inspecté une
                maison où des panneaux photovoltaïques avaient été raccordés au
                tableau électrique existant, sans aucune modification. Pas de
                disjoncteur dédié. Pas de protection différentielle adaptée.
                Le coffret datait de 1987. L&apos;installateur avait branché
                l&apos;onduleur sur un circuit existant et était reparti.
                L&apos;installation était dangereuse et l&apos;assurance
                habitation du propriétaire ne couvrait plus rien.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Le surdimensionnement calculé
              </h3>
              <p className="text-charcoal leading-relaxed">
                Une famille à Namur consommait 3 500 kWh par an. L&apos;installateur
                avait proposé un système de 9.6 kWc -- soit une production annuelle
                estimée de 8 600 kWh. Plus du double de la consommation. Pourquoi ?
                Parce que le devis était plus élevé, et parce que l&apos;installateur
                avait promis que le surplus serait &quot;revendu au réseau&quot;.
                Ce qu&apos;il n&apos;avait pas dit : le tarif d&apos;injection
                oscille entre 1 et 6 centimes le kWh, contre 38 centimes
                d&apos;économie pour chaque kWh autoconsommé. Le client avait
                financé un système dont près de la moitié ne servait presque à rien.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Le devis signé sans visite technique
              </h3>
              <p className="text-charcoal leading-relaxed">
                Plusieurs propriétaires ont montré à Benoît des devis signés
                après un simple échange téléphonique, sans qu&apos;aucun
                technicien ne soit jamais venu sur place. Pas de vérification
                de l&apos;orientation du toit. Pas de mesure de l&apos;ombrage.
                Pas d&apos;analyse du coffret électrique existant. Pas de
                calcul de la distance entre le toit et le local technique. Un
                dimensionnement fait depuis un bureau, sans données réelles,
                c&apos;est une estimation déguisée en proposition technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Nos valeurs, en pratique */}
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h2>Nos valeurs -- pas des slogans, des méthodes de travail</h2>

          <h3>Rigueur technique : chaque installation est conçue pour le contrôle</h3>
          <p>
            Chez Be&apos;energies, chaque installation est conçue comme si elle
            allait être inspectée le lendemain. Parce que c&apos;est littéralement
            le cas -- et parce que Benoît sait exactement ce que l&apos;inspecteur
            va vérifier. Sections de câbles, protections différentielles, mise à
            la terre, schémas unifilaires, étiquetage : tout est fait pour passer
            le contrôle du premier coup, sans réserve, sans remarque.
          </p>
          <p>
            Concrètement, cela signifie qu&apos;on ne choisit jamais un composant
            pour son prix en catalogue. Chaque onduleur, chaque panneau, chaque
            câble est sélectionné pour sa fiabilité réelle, sa compatibilité avec
            le reste du système, et sa tenue dans le temps. Pas de raccourcis. Pas
            de sous-dimensionnement. Pas de compromis sur les protections.
          </p>

          <h3>Honnêteté radicale : les vrais chiffres, même quand ils ne vendent pas</h3>
          <p>
            On ne vous vendra jamais une batterie si elle n&apos;est pas rentable
            pour votre profil de consommation. On ne vous promettra jamais un
            retour sur investissement en deux ans. On ne gonflera pas les chiffres
            pour que le devis soit plus facile à signer.
          </p>
          <p>
            Chaque proposition Be&apos;energies inclut un calcul de rentabilité
            basé sur les tarifs 2026 réels de votre gestionnaire de réseau, votre
            consommation mesurée, et un taux d&apos;autoconsommation réaliste.
            Quand le retour se situe entre 5 et 7 ans, on vous le dit. Et on vous
            explique pourquoi c&apos;est un excellent investissement à environ 12%
            de rendement annuel -- sans mentir sur le délai.
          </p>
          <p>
            Si après analyse, un projet n&apos;est pas rentable dans votre
            situation, on vous le dit aussi. Vous ne nous devez rien pour le
            diagnostic. Et vous repartez avec des informations fiables, que vous
            fassiez appel à nous ou non.
          </p>

          <h3>Accompagnement continu : après l&apos;installation, on ne disparaît pas</h3>
          <p>
            Beaucoup de propriétaires découvrent après l&apos;installation que
            leur installateur est devenu injoignable. Benoît a vu cette situation
            des dizaines de fois en inspection : un client qui a un problème, qui
            cherche son installateur, et qui ne trouve personne.
          </p>
          <p>
            Chez Be&apos;energies, le suivi post-installation n&apos;est pas une
            option. Il est inclus dans chaque projet. Monitoring de votre
            production, vérification de conformité, assistance en cas de panne,
            mise à jour de vos paramètres si les tarifs changent. Votre
            investissement est protégé sur le long terme.
          </p>
        </div>
      </section>

      {/* Section 4: Nos engagements concrets */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-4">
            Nos engagements concrets
          </h2>
          <p className="text-charcoal leading-relaxed text-center mb-8 max-w-2xl mx-auto">
            Pas des promesses. Des règles de fonctionnement que nous appliquons
            sur chaque chantier, sans exception.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Visite technique obligatoire
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Aucun devis n&apos;est émis sans visite sur place. On analyse
                votre toiture, votre coffret électrique, votre compteur, votre
                exposition, et vos habitudes de consommation. Un
                dimensionnement correct exige des données réelles.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Calcul de rentabilité transparent
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Chaque proposition inclut un calcul basé sur les tarifs 2026
                réels de votre GRD, votre tarif prosumer, votre taux
                d&apos;autoconsommation estimé et le tarif d&apos;injection de
                votre fournisseur. Vous voyez les vrais chiffres.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Suivi post-installation inclus
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Monitoring de votre production, vérification de conformité,
                assistance technique. Après le chantier, on reste votre
                interlocuteur. Pas de numéro de service client automatisé.
                Benoît répond personnellement.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Conformité garantie au premier passage
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Chaque installation est conçue pour passer le contrôle de
                conformité du premier coup. Benoît sait exactement ce que
                l&apos;inspecteur va chercher. Schémas, protections, sections,
                étiquetage -- tout est préparé.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Conseil honnête, même si ça ne vend pas
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Si une batterie n&apos;est pas rentable pour vous, on vous le
                dit. Si votre toiture ne se prête pas au photovoltaïque, on
                vous le dit aussi. Vous êtes libre de votre décision, avec les
                bonnes informations.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Un seul interlocuteur du début à la fin
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Benoît intervient personnellement sur chaque chantier.
                Pas de sous-traitance. Pas de commercial qui disparaît après
                la signature. La personne qui conçoit votre installation est
                celle qui la réalise et la suit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Section 5: Certifications et partenariats enrichis */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight text-center mb-4">
            Certifications et partenariats
          </h2>
          <p className="text-charcoal leading-relaxed text-center mb-8 max-w-2xl mx-auto">
            Les certifications ne sont pas des logos décoratifs. Elles
            engagent notre responsabilité et garantissent un niveau de
            compétence vérifiable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-3">
                Certification RESCERT
              </h3>
              <p className="text-sm text-steel leading-relaxed mb-3">
                RESCERT est le référentiel de certification des installateurs
                en électricité résidentielle en Belgique. Cette certification
                atteste que Benoît maîtrise les normes RGIE, les schémas
                unifilaires, les protections différentielles, les mises à la
                terre, et l&apos;ensemble des exigences réglementaires
                applicables aux installations domestiques.
              </p>
              <p className="text-sm text-steel leading-relaxed">
                Pour un ancien inspecteur, cette certification confirme
                officiellement ce que son expérience prouvait déjà : une
                connaissance approfondie des normes, vue des deux côtés --
                celui qui vérifie et celui qui installe.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-3">
                Partenaires fabricants : pourquoi ces marques
              </h3>
              <p className="text-sm text-steel leading-relaxed mb-3">
                SunPower, Longi, SolarEdge, Huawei, Enphase, Wallbox. Ce ne
                sont pas les marques les moins chères. Ce sont les marques que
                Benoît recommande après avoir vu, en tant qu&apos;inspecteur,
                ce qui tient dans le temps et ce qui ne tient pas.
              </p>
              <p className="text-sm text-steel leading-relaxed mb-3">
                Les panneaux tier-1 (Longi, SunPower) offrent des garanties
                de production linéaire sur 25 à 30 ans, soutenues par des
                fabricants financièrement stables. Les onduleurs SolarEdge et
                Enphase permettent un monitoring panneau par panneau -- si un
                panneau faiblit, on le voit immédiatement.
              </p>
              <p className="text-sm text-steel leading-relaxed">
                En matière de bornes de recharge, Wallbox est un standard
                européen éprouvé, compatible avec tous les véhicules et
                intégrable à votre installation photovoltaïque existante.
                Chaque composant est choisi pour sa fiabilité réelle, pas
                pour une marge plus confortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Couverture géographique */}
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h2>Où nous intervenons</h2>
          <p>
            Be&apos;energies est basée à Riemst, en Limbourg flamand, et
            intervient dans toute la Belgique francophone et dans les communes
            flamandes limitrophes.
          </p>
          <p>
            Nos zones d&apos;intervention principales : la Wallonie (Liège,
            Namur, Charleroi, Mons, Wavre, Brabant wallon), Bruxelles, et le
            Limbourg flamand (Riemst, Tongeren, Bilzen, Hasselt). Benoît se
            déplace personnellement pour chaque diagnostic et supervise chaque
            chantier.
          </p>
          <p>
            Parce que nous travaillons localement, les propriétaires qui nous
            font confiance ne sont pas des numéros de dossier. Ce sont des
            voisins. Et nos installations, on les croise tous les jours.
          </p>
        </div>
      </section>

      <TestimonialBlock testimonials={testimonials.slice(0, 4)} />

      <CTADiagnostic
        title="Vous avez un projet ? Parlons-en."
        description="Benoît vous répond personnellement. Diagnostic énergétique gratuit, sans engagement, basé sur les tarifs 2026 réels de votre gestionnaire de réseau."
        variant="dark"
      />
    </>
  );
}
