import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { PDFLeadMagnetCard } from "@/components/sections/PDFLeadMagnetCard";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import {
  CheckIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  ComplianceIcon,
  MailIcon,
  PhoneIcon,
} from "@/lib/icons";
import { siteConfig } from "@/lib/site-config";
import type { FAQItem } from "@/lib/types";

export const metadata = generatePageMetadata({
  title:
    "Faire vérifier mon devis solaire, par un ancien inspecteur",
  description:
    "Un devis photovoltaïque, batterie ou borne de recharge sur la table ? Benoît Dezso, ancien inspecteur en installation électrique certifié RESCERT, l'analyse personnellement et vous renvoie un avis écrit sous 48 h. Sans pression commerciale. Sans engagement.",
  path: "/devis-analyse/",
  alternates: { fr: "/devis-analyse/" },
});

const checks: { title: string; detail: string }[] = [
  {
    title: "Hypothèses tarifaires",
    detail:
      "Prix d'achat, tarif d'injection, prosumer, IMPACT 2026, scénarios futurs : on vérifie que les chiffres tiennent face à votre GRD et votre fournisseur réel.",
  },
  {
    title: "Dimensionnement réel",
    detail:
      "Surface, orientation, ombrages, consommation annuelle, profil horaire, projet véhicule électrique ou pompe à chaleur. On dit ce qui est sur- ou sous-dimensionné.",
  },
  {
    title: "Matériel et protections",
    detail:
      "Panneaux, onduleur (string, hybride, micro-onduleurs), parafoudre DC, protection AC, mise à la terre des cadres, qualité des connecteurs.",
  },
  {
    title: "Garanties et SAV",
    detail:
      "Garanties produit, rendement et main-d'œuvre : ce qui est inclus, ce qui est exclu, qui intervient en cas de panne, qui paie quoi.",
  },
];

const process: { step: string; title: string; detail: string }[] = [
  {
    step: "1",
    title: "Vous envoyez le devis",
    detail:
      "PDF, photo, scan, capture : le format n'a pas d'importance. Joignez aussi votre dernière facture d'électricité si vous l'avez sous la main.",
  },
  {
    step: "2",
    title: "Benoît l'analyse personnellement",
    detail:
      "Pas un commercial. Pas un sous-traitant. Le fondateur, ancien inspecteur en installation électrique, certifié RESCERT, lit le devis ligne par ligne.",
  },
  {
    step: "3",
    title: "Vous recevez un avis écrit sous 48 h",
    detail:
      "Points solides, points à clarifier, signaux d'alerte éventuels, questions à poser à l'installateur. Vous décidez en connaissance de cause.",
  },
];

const deliverables = [
  "Un avis écrit clair, structuré point par point",
  "Les signaux d'alerte techniques ou commerciaux éventuels",
  "Les questions précises à poser à votre installateur",
  "Un ordre de grandeur réaliste face au prix du marché belge actuel",
  "Aucune obligation de travailler avec Be'energies ensuite",
];

const reassurances = [
  "Réponse écrite sous 48 h ouvrées",
  "Pas de pression commerciale, pas de relances",
  "Vos données ne sont pas revendues",
  "Avis honnête, y compris si le devis est correct",
];

const devisAnalyseFAQ: FAQItem[] = [
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui. L'analyse d'un premier devis est gratuite et sans engagement. C'est une façon de vous montrer notre sérieux avant même de parler chiffrage. Vous n'avez aucune obligation de travailler avec nous ensuite : beaucoup de personnes nous écrivent simplement pour avoir un avis avant de signer ailleurs, et c'est très bien comme ça.",
  },
  {
    question: "Qui analyse réellement mon devis ?",
    answer:
      "Benoît Dezso lui-même. Ancien inspecteur en installation électrique, certifié RESCERT. C'est précisément parce qu'il a vu sur le terrain des installations mal dimensionnées, mal protégées ou survendues qu'il propose ce regard avant signature. Pas de call center, pas d'algorithme générique.",
  },
  {
    question: "Et si le devis qu'on m'a fait est correct ?",
    answer:
      "Alors on vous le dit. L'objectif n'est pas de vous faire douter de votre installateur : c'est de vous donner les éléments pour décider. Si le dimensionnement est cohérent, le matériel sérieux et les garanties claires, vous repartez rassuré et vous pouvez signer en confiance.",
  },
  {
    question: "Combien de devis puis-je faire analyser ?",
    answer:
      "Un premier devis, gratuitement. Si vous en avez plusieurs en parallèle (ce qui est plutôt malin), on vous propose un comparatif rapide à un tarif transparent. Vous saurez le prix avant de commencer, pas de surprise.",
  },
  {
    question: "Mes données restent-elles confidentielles ?",
    answer:
      "Oui. Votre devis et les informations transmises ne sortent pas du périmètre de Be'energies, ne sont pas revendues, et ne servent qu'à vous répondre. Vous pouvez nous demander de tout supprimer à n'importe quel moment.",
  },
  {
    question: "Et si je suis hors de Belgique ?",
    answer:
      "On analyse le devis quoi qu'il en soit : la lecture technique vaut partout. En revanche, on ne pourra pas commenter le cadre tarifaire ou réglementaire si vous êtes hors Wallonie, Bruxelles ou Limbourg flamand. On vous le signalera honnêtement.",
  },
];

export default function DevisAnalysePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(devisAnalyseFAQ)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Faire vérifier mon devis" },
        ]}
      />

      {/* Hero - premium, asymmetric, dense above-the-fold */}
      <section className="relative overflow-hidden bg-deep pt-8 md:pt-12 pb-16 md:pb-20">
        <div
          className="absolute inset-0 texture-dots opacity-60"
          aria-hidden="true"
        />
        <div className="container-be relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 border border-amber/25 text-amber-light text-[10.5px] font-semibold tracking-[0.14em] uppercase mb-6">
                <AlertTriangleIcon size={13} />
                Avant de signer
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-[family-name:var(--font-heading)] text-white leading-[1.08] text-balance">
                Faites vérifier votre devis solaire par un ancien inspecteur.
              </h1>

              <p className="mt-5 text-[16px] md:text-[17px] text-white/90 leading-relaxed max-w-2xl">
                Benoît Dezso, ancien inspecteur en installation électrique,
                certifié RESCERT, analyse personnellement votre devis
                photovoltaïque, batterie ou borne de recharge. Vous recevez un
                avis écrit sous 48&nbsp;h. Sans pression commerciale. Sans
                engagement.
              </p>

              <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl">
                {reassurances.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2.5 text-[14px] text-white/90"
                  >
                    <CheckIcon
                      size={15}
                      className="shrink-0 mt-0.5 text-success"
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3.5 items-start sm:items-center">
                <a
                  href="#form"
                  className="cta-glow inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-midnight font-bold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Envoyer mon devis
                  <ArrowRightIcon size={17} />
                </a>
                <GoogleReviewsBadge variant="inline" className="shrink-0" />
              </div>
            </div>

            {/* Illustration - reuses the searching character used on the homepage CTA */}
            <div className="hidden lg:flex items-center justify-center">
              <Image
                src="/img/Mascotte.png"
                alt="Personnage à la loupe inspectant un devis solaire"
                width={360}
                height={612}
                priority
                className="w-full max-w-[320px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 points we check */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-5xl">
          <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
            Ce qu&apos;on regarde
          </p>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance max-w-3xl">
            4 axes de lecture, ceux qui font la différence entre un bon devis
            et un devis qui semble bon.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {checks.map((c) => (
              <article
                key={c.title}
                className="bg-ivory border border-cloud rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-start gap-3">
                  <ComplianceIcon
                    size={22}
                    className="text-amber-dark shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-semibold text-midnight text-[17px] leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-charcoal leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="section-padding bg-ivory">
        <div className="container-be max-w-5xl">
          <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
            Comment ça marche
          </p>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance max-w-3xl">
            Trois étapes. Pas de cinquième relance commerciale.
          </h2>

          <ol className="mt-10 grid md:grid-cols-3 gap-5">
            {process.map((p) => (
              <li
                key={p.step}
                className="relative bg-white border border-cloud rounded-2xl p-6 md:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-4 left-6 inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber text-midnight font-bold text-sm shadow-sm"
                >
                  {p.step}
                </span>
                <h3 className="mt-3 font-semibold text-midnight text-[17px] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] text-charcoal leading-relaxed">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables - what you get */}
      <section className="section-padding bg-white">
        <div className="container-be max-w-5xl grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">
          <div>
            <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
              Ce que vous recevez
            </p>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
              Un avis écrit, utile, honnête.
            </h2>
            <p className="mt-4 text-[15px] text-charcoal leading-relaxed">
              Pas un PDF marketing. Pas un argumentaire pour vous vendre Be&apos;energies.
              Un document qui vous aide à parler à votre installateur en posant
              les bonnes questions.
            </p>
          </div>
          <ul className="space-y-3">
            {deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-[15px] text-charcoal bg-ivory border border-cloud rounded-xl p-4"
              >
                <CheckIcon
                  size={17}
                  className="text-success shrink-0 mt-0.5"
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form - anchored target of the hero CTA */}
      <section id="form" className="section-padding bg-ivory scroll-mt-24">
        <div className="container-be max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
            <div>
              <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-amber-dark mb-3">
                Envoyer le devis
              </p>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-midnight leading-tight text-balance">
                On vous répond personnellement.
              </h2>
              <p className="mt-3 text-[15px] text-charcoal leading-relaxed max-w-2xl">
                Remplissez le formulaire : moins de 2 minutes. Vous pourrez
                joindre votre devis (PDF, photo, capture) en réponse à
                l&apos;email de confirmation. Benoît reprend chaque demande
                personnellement.
              </p>

              <div className="mt-6 mb-7 bg-white border border-cloud rounded-xl p-4 md:p-5">
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] text-charcoal">
                  {[
                    "Analyse gratuite, sans engagement",
                    "Réponse de Benoît sous 24 h",
                    "Avis écrit sous 48 h",
                    "Honnête, y compris si tout va bien",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon
                        size={14}
                        className="text-success shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ContactForm defaultProjectType="devis-analyse" />
            </div>

            {/* Sidebar - direct contact + RESCERT */}
            <aside className="space-y-5">
              <div className="bg-midnight rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-white text-sm">
                  Préférez parler directement ?
                </h3>
                <ul className="space-y-3">
                  {siteConfig.contact.phones.map((p) => (
                    <li key={p.raw}>
                      <a
                        href={`tel:${p.raw}`}
                        className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors"
                      >
                        <PhoneIcon size={17} className="text-amber" />
                        <span className="data-figure">{p.label}</span>
                        <span className="text-xs text-white/60 hidden sm:inline">Lun – Ven : 8 h – 17 h</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-3 text-sm text-silver hover:text-white transition-colors"
                    >
                      <MailIcon size={17} className="text-amber" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                </ul>
                <p className="pt-3 mt-3 border-t border-charcoal text-xs text-white/85 leading-relaxed">
                  Joignez votre devis directement à l&apos;email, il atterrit
                  dans la boîte de Benoît.
                </p>
              </div>

              <div className="bg-white border border-cloud rounded-xl p-5 flex items-center gap-4">
                <Image
                  src="/RESCERT.png"
                  alt="Certification RESCERT"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain shrink-0"
                />
                <div>
                  <p className="text-[13px] font-semibold text-midnight leading-snug">
                    Ancien inspecteur, certifié RESCERT
                  </p>
                  <p className="text-[12px] text-steel mt-1 leading-snug">
                    L&apos;analyse est faite par l&apos;installateur lui-même.
                  </p>
                </div>
              </div>

              {/* Upgrades the weakest CTA in the sidebar into a direct PDF
                  download - high-intent quote-checkers are primed for it. */}
              <PDFLeadMagnetCard variant="compact" />
            </aside>
          </div>
        </div>
      </section>

      <FAQSection
        items={devisAnalyseFAQ}
        title="Questions fréquentes sur l'analyse de devis"
      />
    </>
  );
}
