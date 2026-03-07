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
  title: "Benoit Dezso, ancien inspecteur devenu installateur",
  description:
    "Ancien inspecteur en conformite electrique certifie RESCERT, Benoit Dezso fonde Be&apos;energies pour installer ce qu&apos;il aurait approuve. Decouvrez son parcours.",
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
          { name: "A propos" },
        ]}
      />

      <HeroSection
        headline="L&apos;installateur qui a d&apos;abord ete l&apos;inspecteur"
        subheadline="Benoit Dezso a passe plus de 10 ans a inspecter des installations electriques et photovoltaiques en Belgique. Il a vu ce qui casse, ce qui brule, ce qui coute cher. Aujourd&apos;hui, il installe ce qu&apos;il aurait approuve."
        ctaLabel="Diagnostic gratuit"
        ctaHref="/contact/"
        variant="compact"
      />

      <FounderCredibility variant="full" />

      {/* Section 1: L'histoire de Benoit */}
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h2>D&apos;inspecteur a installateur : pourquoi Benoit a change de camp</h2>

          <p>
            Pendant plus de dix ans, Benoit Dezso a travaille comme inspecteur en
            conformite electrique pour des organismes agrees en Belgique. Son
            metier : verifier que les installations electriques et photovoltaiques
            respectaient les normes de securite. Chaque jour, il entrait dans des
            maisons, ouvrait des coffrets, analysait des schemas, et redigeait des
            rapports. Conformes ou non conformes.
          </p>

          <p>
            La realite du terrain l&apos;a marque. Pas parce que tout etait
            catastrophique -- beaucoup d&apos;installations etaient correctes. Mais
            parce que les erreurs qu&apos;il constatait suivaient toujours les
            memes schemas. Des onduleurs sous-dimensionnes pour gagner quelques
            centaines d&apos;euros. Des cables mal sectionnes. Des protections
            absentes. Des installations photovoltaiques dimensionnees pour gonfler
            un devis, pas pour correspondre a la consommation reelle du menage.
          </p>

          <p>
            Et surtout, des proprietaires qui ne savaient pas. Qui avaient fait
            confiance. Qui avaient signe un devis, paye une facture, et pensaient
            que tout etait en ordre. Jusqu&apos;au passage de l&apos;inspecteur.
          </p>

          <p>
            Au fil des annees, Benoit a developpe une conviction : le probleme
            n&apos;etait pas que les normes etaient trop strictes. Le probleme
            etait que trop d&apos;installateurs les ignoraient, par manque de
            formation, par facilite, ou par calcul commercial. Et la personne qui
            payait les consequences, c&apos;etait toujours le proprietaire.
          </p>

          <p>
            En fondant Be&apos;energies, Benoit a decide d&apos;appliquer de
            l&apos;autre cote du metier tout ce qu&apos;il avait appris en tant
            qu&apos;inspecteur. Non pas parce qu&apos;il voulait prouver que les
            autres avaient tort. Mais parce qu&apos;il savait a quoi ressemble une
            installation bien faite -- et qu&apos;il voulait n&apos;en produire
            que de celles-la.
          </p>
        </div>
      </section>

      {/* Section 2: Ce que Benoit a constate en tant qu'inspecteur */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight mb-4">
            Ce que Benoit a constate sur le terrain
          </h2>
          <p className="text-charcoal leading-relaxed mb-8">
            Pas pour faire peur. Pour que vous compreniez pourquoi nous
            travaillons comme nous travaillons. Voici quatre situations que Benoit
            a documentees a de nombreuses reprises pendant ses annees
            d&apos;inspection.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                L&apos;onduleur qui ne pouvait pas suivre
              </h3>
              <p className="text-charcoal leading-relaxed">
                Un proprietaire a Liege avait fait installer 18 panneaux de
                425 Wc sur son toit. Puissance crete theorique : 7.65 kWc.
                L&apos;onduleur installe etait un modele de 5 kW. Resultat :
                chaque jour ensoleille, l&apos;onduleur ecretait la production.
                Le client perdait entre 15 et 20% de rendement sans le savoir.
                L&apos;installateur avait economise 400 euros. Le client en
                perdait plusieurs centaines par an.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Le coffret qui n&apos;avait jamais ete adapte
              </h3>
              <p className="text-charcoal leading-relaxed">
                Dans un quartier residentiel de Charleroi, Benoit a inspecte une
                maison ou des panneaux photovoltaiques avaient ete raccordes au
                tableau electrique existant, sans aucune modification. Pas de
                disjoncteur dedie. Pas de protection differentielle adaptee.
                Le coffret datait de 1987. L&apos;installateur avait branche
                l&apos;onduleur sur un circuit existant et etait reparti.
                L&apos;installation etait dangereuse et l&apos;assurance
                habitation du proprietaire ne couvrait plus rien.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Le surdimensionnement calcule
              </h3>
              <p className="text-charcoal leading-relaxed">
                Une famille a Namur consommait 3 500 kWh par an. L&apos;installateur
                avait propose un systeme de 9.6 kWc -- soit une production annuelle
                estimee de 8 600 kWh. Plus du double de la consommation. Pourquoi ?
                Parce que le devis etait plus eleve, et parce que l&apos;installateur
                avait promis que le surplus serait &quot;revendu au reseau&quot;.
                Ce qu&apos;il n&apos;avait pas dit : le tarif d&apos;injection
                oscille entre 1 et 6 centimes le kWh, contre 38 centimes
                d&apos;economie pour chaque kWh autoconsomme. Le client avait
                finance un systeme dont pres de la moitie ne servait presque a rien.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Le devis signe sans visite technique
              </h3>
              <p className="text-charcoal leading-relaxed">
                Plusieurs proprietaires ont montre a Benoit des devis signes
                apres un simple echange telephonique, sans qu&apos;aucun
                technicien ne soit jamais venu sur place. Pas de verification
                de l&apos;orientation du toit. Pas de mesure de l&apos;ombrage.
                Pas d&apos;analyse du coffret electrique existant. Pas de
                calcul de la distance entre le toit et le local technique. Un
                dimensionnement fait depuis un bureau, sans donnees reelles,
                c&apos;est une estimation deguisee en proposition technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Nos valeurs, en pratique */}
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h2>Nos valeurs -- pas des slogans, des methodes de travail</h2>

          <h3>Rigueur technique : chaque installation est concue pour le controle</h3>
          <p>
            Chez Be&apos;energies, chaque installation est concue comme si elle
            allait etre inspectee le lendemain. Parce que c&apos;est litteralement
            le cas -- et parce que Benoit sait exactement ce que l&apos;inspecteur
            va verifier. Sections de cables, protections differentielles, mise a
            la terre, schemas unifilaires, etiquetage : tout est fait pour passer
            le controle du premier coup, sans reserve, sans remarque.
          </p>
          <p>
            Concretement, cela signifie qu&apos;on ne choisit jamais un composant
            pour son prix en catalogue. Chaque onduleur, chaque panneau, chaque
            cable est selectionne pour sa fiabilite reelle, sa compatibilite avec
            le reste du systeme, et sa tenue dans le temps. Pas de raccourcis. Pas
            de sous-dimensionnement. Pas de compromis sur les protections.
          </p>

          <h3>Honnetete radicale : les vrais chiffres, meme quand ils ne vendent pas</h3>
          <p>
            On ne vous vendra jamais une batterie si elle n&apos;est pas rentable
            pour votre profil de consommation. On ne vous promettra jamais un
            retour sur investissement en deux ans. On ne gonflera pas les chiffres
            pour que le devis soit plus facile a signer.
          </p>
          <p>
            Chaque proposition Be&apos;energies inclut un calcul de rentabilite
            base sur les tarifs 2026 reels de votre gestionnaire de reseau, votre
            consommation mesuree, et un taux d&apos;autoconsommation realiste.
            Quand le retour se situe entre 5 et 7 ans, on vous le dit. Et on vous
            explique pourquoi c&apos;est un excellent investissement a environ 12%
            de rendement annuel -- sans mentir sur le delai.
          </p>
          <p>
            Si apres analyse, un projet n&apos;est pas rentable dans votre
            situation, on vous le dit aussi. Vous ne nous devez rien pour le
            diagnostic. Et vous repartez avec des informations fiables, que vous
            fassiez appel a nous ou non.
          </p>

          <h3>Accompagnement continu : apres l&apos;installation, on ne disparait pas</h3>
          <p>
            Beaucoup de proprietaires decouvrent apres l&apos;installation que
            leur installateur est devenu injoignable. Benoit a vu cette situation
            des dizaines de fois en inspection : un client qui a un probleme, qui
            cherche son installateur, et qui ne trouve personne.
          </p>
          <p>
            Chez Be&apos;energies, le suivi post-installation n&apos;est pas une
            option. Il est inclus dans chaque projet. Monitoring de votre
            production, verification de conformite, assistance en cas de panne,
            mise a jour de vos parametres si les tarifs changent. Votre
            investissement est protege sur le long terme.
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
            Pas des promesses. Des regles de fonctionnement que nous appliquons
            sur chaque chantier, sans exception.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Visite technique obligatoire
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Aucun devis n&apos;est emis sans visite sur place. On analyse
                votre toiture, votre coffret electrique, votre compteur, votre
                exposition, et vos habitudes de consommation. Un
                dimensionnement correct exige des donnees reelles.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Calcul de rentabilite transparent
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Chaque proposition inclut un calcul base sur les tarifs 2026
                reels de votre GRD, votre tarif prosumer, votre taux
                d&apos;autoconsommation estime et le tarif d&apos;injection de
                votre fournisseur. Vous voyez les vrais chiffres.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Suivi post-installation inclus
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Monitoring de votre production, verification de conformite,
                assistance technique. Apres le chantier, on reste votre
                interlocuteur. Pas de numero de service client automatise.
                Benoit repond personnellement.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Conformite garantie au premier passage
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Chaque installation est concue pour passer le controle de
                conformite du premier coup. Benoit sait exactement ce que
                l&apos;inspecteur va chercher. Schemas, protections, sections,
                etiquetage -- tout est prepare.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Conseil honnete, meme si ca ne vend pas
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Si une batterie n&apos;est pas rentable pour vous, on vous le
                dit. Si votre toiture ne se prete pas au photovoltaique, on
                vous le dit aussi. Vous etes libre de votre decision, avec les
                bonnes informations.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-2">
                Un seul interlocuteur du debut a la fin
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Benoit intervient personnellement sur chaque chantier.
                Pas de sous-traitance. Pas de commercial qui disparait apres
                la signature. La personne qui concoit votre installation est
                celle qui la realise et la suit.
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
            Les certifications ne sont pas des logos decoratifs. Elles
            engagent notre responsabilite et garantissent un niveau de
            competence verifiable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-3">
                Certification RESCERT
              </h3>
              <p className="text-sm text-steel leading-relaxed mb-3">
                RESCERT est le referentiel de certification des installateurs
                en electricite residentielle en Belgique. Cette certification
                atteste que Benoit maitrise les normes RGIE, les schemas
                unifilaires, les protections differentielles, les mises a la
                terre, et l&apos;ensemble des exigences reglementaires
                applicables aux installations domestiques.
              </p>
              <p className="text-sm text-steel leading-relaxed">
                Pour un ancien inspecteur, cette certification confirme
                officiellement ce que son experience prouvait deja : une
                connaissance approfondie des normes, vue des deux cotes --
                celui qui verifie et celui qui installe.
              </p>
            </div>

            <div className="bg-white border border-cloud rounded-xl p-6">
              <h3 className="font-semibold text-midnight mb-3">
                Partenaires fabricants : pourquoi ces marques
              </h3>
              <p className="text-sm text-steel leading-relaxed mb-3">
                SunPower, Longi, SolarEdge, Huawei, Enphase, Wallbox. Ce ne
                sont pas les marques les moins cheres. Ce sont les marques que
                Benoit recommande apres avoir vu, en tant qu&apos;inspecteur,
                ce qui tient dans le temps et ce qui ne tient pas.
              </p>
              <p className="text-sm text-steel leading-relaxed mb-3">
                Les panneaux tier-1 (Longi, SunPower) offrent des garanties
                de production lineaire sur 25 a 30 ans, soutenues par des
                fabricants financierement stables. Les onduleurs SolarEdge et
                Enphase permettent un monitoring panneau par panneau -- si un
                panneau faiblit, on le voit immediatement.
              </p>
              <p className="text-sm text-steel leading-relaxed">
                En matiere de bornes de recharge, Wallbox est un standard
                europeen eprouve, compatible avec tous les vehicules et
                integrable a votre installation photovoltaique existante.
                Chaque composant est choisi pour sa fiabilite reelle, pas
                pour une marge plus confortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Couverture geographique */}
      <section className="section-padding">
        <div className="container-be max-w-3xl prose prose-lg text-charcoal">
          <h2>Ou nous intervenons</h2>
          <p>
            Be&apos;energies est basee a Riemst, en Limbourg flamand, et
            intervient dans toute la Belgique francophone et dans les communes
            flamandes limitrophes.
          </p>
          <p>
            Nos zones d&apos;intervention principales : la Wallonie (Liege,
            Namur, Charleroi, Mons, Wavre, Brabant wallon), Bruxelles, et le
            Limbourg flamand (Riemst, Tongeren, Bilzen, Hasselt). Benoit se
            deplace personnellement pour chaque diagnostic et supervise chaque
            chantier.
          </p>
          <p>
            Parce que nous travaillons localement, les proprietaires qui nous
            font confiance ne sont pas des numeros de dossier. Ce sont des
            voisins. Et nos installations, on les croise tous les jours.
          </p>
        </div>
      </section>

      <TestimonialBlock testimonials={testimonials.slice(0, 4)} />

      <CTADiagnostic
        title="Vous avez un projet ? Parlons-en."
        description="Benoit vous repond personnellement. Diagnostic energetique gratuit, sans engagement, base sur les tarifs 2026 reels de votre gestionnaire de reseau."
        variant="dark"
      />
    </>
  );
}
