# Be'energies 2026 -- Information Architecture

> Complete sitemap, route map, page templates, navigation, internal linking, and breadcrumb logic.
> Date: 2026-03-06
> Inputs: PROJECT_BOOTSTRAP.md, COMPETITOR_BENCHMARK.md, REGULATORY_INTELLIGENCE.md, POSITIONING_MESSAGING.md

---

## 1. URL Conventions

### Rules

| Rule | Convention | Example |
|------|-----------|---------|
| Language | FR at root (no prefix), NL under `/nl/` | `/services/` (FR), `/nl/diensten/` (NL) |
| Slug format | Lowercase, hyphenated, no accents, no trailing slash enforced by middleware | `panneaux-photovoltaiques`, not `Panneaux_Photovoltaïques` |
| Service pages | Under `/services/[slug]/` | `/services/panneaux-photovoltaiques/` |
| Local pages | At root: `/[service-slug]/[city-slug]/` | `/panneaux-photovoltaiques/liege/` |
| Blog | Under `/blog/[slug]/` | `/blog/tarif-prosumer-2026/` |
| Realizations | Under `/realisations/[slug]/` | `/realisations/riemst-32-panneaux/` |
| Legal | Flat at root level | `/mentions-legales/` |
| Canonical | Self-referencing on every page | `<link rel="canonical" href="https://be-energies.be/..." />` |
| Trailing slash | Consistent: always with OR always without (pick one in next.config) | Recommend: WITH trailing slash |

### Why Local Pages Are NOT Under /services/

`/panneaux-photovoltaiques/liege/` ranks better than `/services/panneaux-photovoltaiques/liege/` for "panneaux photovoltaiques liege" because:
- Shorter URL with higher keyword density in path
- The service slug appears as a top-level directory, signaling topical authority
- Matches user search patterns: "[service] [city]"

The potential collision between `/services/panneaux-photovoltaiques/` (service page) and `/panneaux-photovoltaiques/liege/` (local page) is resolved by the route structure: service pages always have `/services/` prefix, local pages never do.

---

## 2. Final Sitemap

### 2.1 French (Default Locale -- No Prefix)

```
be-energies.be
|
|-- /                                         HOMEPAGE
|
|-- /a-propos/                                ABOUT / FOUNDER
|
|-- /services/                                SERVICES HUB
|   |-- /panneaux-photovoltaiques/            Service: Solar Panels
|   |-- /batteries-domestiques/               Service: Home Batteries
|   |-- /bornes-de-recharge/                  Service: EV Charging
|   |-- /conformite-electrique/               Service: Electrical Compliance
|   |-- /nettoyage-toiture/                   Service: Roof Cleaning & Painting
|   |-- /pompes-a-chaleur/                    Service: Heat Pumps & AC
|
|-- /pieges-a-eviter/                         PILLAR: Traps to Avoid
|
|-- /realisations/                            REALIZATIONS INDEX
|   |-- /riemst-32-panneaux/                  Realization detail
|   |-- /[slug]/                              (8-15 projects)
|
|-- /blog/                                    BLOG INDEX
|   |-- /panneaux-solaires-rentables-2026/    Blog article
|   |-- /tarif-prosumer-2026/                 Blog article
|   |-- /[slug]/                              (10-20 articles)
|
|-- /panneaux-photovoltaiques/                LOCAL PAGES: Solar
|   |-- /liege/
|   |-- /namur/
|   |-- /bruxelles/
|   |-- /charleroi/
|   |-- /mons/
|   |-- /wavre/
|   |-- /nivelles/
|   |-- /verviers/
|   |-- /arlon/
|   |-- /tournai/
|   |-- /la-louviere/
|
|-- /batteries-domestiques/                   LOCAL PAGES: Batteries
|   |-- /liege/
|   |-- /namur/
|   |-- /bruxelles/
|   |-- /charleroi/
|   |-- /mons/
|   |-- /wavre/
|   |-- (... same T1+T2 cities)
|
|-- /bornes-de-recharge/                      LOCAL PAGES: EV Charging
|   |-- /liege/
|   |-- /namur/
|   |-- (... same cities)
|
|-- /conformite-electrique/                   LOCAL PAGES: Compliance
|   |-- /liege/
|   |-- /namur/
|   |-- (... same cities)
|
|-- /nettoyage-toiture/                       LOCAL PAGES: Roof
|   |-- /liege/
|   |-- /namur/
|   |-- (... same cities)
|
|-- /pompes-a-chaleur/                        LOCAL PAGES: Heat Pumps
|   |-- /liege/
|   |-- /namur/
|   |-- (... same cities)
|
|-- /contact/                                 CONTACT
|-- /pro/                                     PRO / B2B (P1)
|-- /guide-pieges-a-eviter/                   LEAD MAGNET LANDING (P1)
|
|-- /mentions-legales/                        LEGAL: Mentions legales
|-- /politique-de-confidentialite/            LEGAL: Privacy policy
|
|-- /sitemap.xml                              GENERATED
|-- /robots.txt                               GENERATED
```

### 2.2 Dutch (Under /nl/ Prefix)

```
be-energies.be/nl/
|
|-- /nl/                                      HOMEPAGE NL
|
|-- /nl/diensten/                             SERVICES HUB NL
|   |-- /nl/diensten/zonnepanelen/            Service: Zonnepanelen
|   |-- /nl/diensten/thuisbatterijen/         Service: Thuisbatterijen
|   |-- /nl/diensten/laadpalen/              Service: Laadpalen
|   |-- /nl/diensten/elektrische-conformiteit/ Service: Elektrische conformiteit
|   |-- /nl/diensten/dakreiniging/           Service: Dakreiniging
|   |-- /nl/diensten/warmtepompen/           Service: Warmtepompen
|
|-- /nl/zonnepanelen/                         LOCAL PAGES NL: Solar
|   |-- /nl/zonnepanelen/riemst/
|   |-- /nl/zonnepanelen/tongeren/
|   |-- /nl/zonnepanelen/bilzen/
|   |-- /nl/zonnepanelen/hasselt/
|
|-- /nl/laadpalen/                            LOCAL PAGES NL: EV Charging
|   |-- /nl/laadpalen/riemst/
|   |-- /nl/laadpalen/tongeren/
|   |-- /nl/laadpalen/bilzen/
|   |-- /nl/laadpalen/hasselt/
|
|-- /nl/thuisbatterijen/                      LOCAL PAGES NL: Batteries
|   |-- /nl/thuisbatterijen/riemst/
|   |-- /nl/thuisbatterijen/tongeren/
|   |-- /nl/thuisbatterijen/bilzen/
|   |-- /nl/thuisbatterijen/hasselt/
|
|-- /nl/contact/                              CONTACT NL
```

### 2.3 Page Count Summary

| Category | FR Pages | NL Pages | Total |
|----------|----------|----------|-------|
| Homepage | 1 | 1 | 2 |
| About | 1 | 0 | 1 |
| Services hub | 1 | 1 | 2 |
| Service pages | 6 | 6 | 12 |
| Pieges a eviter | 1 | 0 | 1 |
| Realizations index | 1 | 0 | 1 |
| Realization details | 8-15 | 0 | 8-15 |
| Blog index | 1 | 0 | 1 |
| Blog articles | 10-20 | 0 | 10-20 |
| Local pages (T1: 6 cities) | 36 | 0 | 36 |
| Local pages (T2: 5 cities) | 30 | 0 | 30 |
| Local pages (Limburg: 4 cities) | 0 | 12 | 12 |
| Contact | 1 | 1 | 2 |
| Pro | 1 | 0 | 1 |
| Lead magnet | 1 | 0 | 1 |
| Legal | 2 | 0 | 2 |
| **Total** | **~101-132** | **~21** | **~122-153** |

### 2.4 City Tiers

**T1 -- Launch (FR)**

| City | Province | GRD |
|------|----------|-----|
| Liege | Liege | RESA |
| Namur | Namur | ORES |
| Bruxelles | Bruxelles-Capitale | Sibelga |
| Charleroi | Hainaut | ORES |
| Mons | Hainaut | ORES |
| Wavre | Brabant wallon | ORES |

**T2 -- Post-Launch +2 Weeks (FR)**

| City | Province | GRD |
|------|----------|-----|
| Nivelles | Brabant wallon | ORES |
| Verviers | Liege | RESA |
| Arlon | Luxembourg | AIEG |
| Tournai | Hainaut | ORES |
| La Louviere | Hainaut | ORES |

**T3 -- Limburg (NL)**

| City | Province | GRD |
|------|----------|-----|
| Riemst | Limburg | Fluvius |
| Tongeren | Limburg | Fluvius |
| Bilzen | Limburg | Fluvius |
| Hasselt | Limburg | Fluvius |

---

## 3. Page Purpose, Keyword Intent & Conversion Goal

### 3.1 Core Pages

| Page | Purpose | Primary Keyword Intent | Search Intent | Conversion Goal | Priority |
|------|---------|----------------------|---------------|-----------------|----------|
| **Homepage** | Brand introduction + trust anchor + navigation hub | "be energies belgique", branded queries | Navigational | Diagnostic CTA, service exploration | P0 |
| **About** | Founder story + credibility proof + RESCERT authority | "be energies avis", "benoit dezso" | Informational | Trust building -> Diagnostic CTA | P0 |
| **Services Hub** | Overview of all 6 services + cross-navigation | "installateur energie belgique" | Informational | Route to individual service pages | P0 |
| **Contact** | Conversion endpoint, form + phone + WhatsApp + map | "be energies contact" | Transactional | Form submission, phone call, WhatsApp | P0 |

### 3.2 Service Pages

| Page | Primary Keyword Intent | Search Intent | Conversion Goal |
|------|----------------------|---------------|-----------------|
| **Panneaux photovoltaiques** | "installation panneaux solaires belgique wallonie" | Commercial investigation | Diagnostic CTA + local page exploration |
| **Batteries domestiques** | "batterie domestique belgique installation" | Commercial investigation | Diagnostic CTA + honest battery advice |
| **Bornes de recharge** | "installation borne recharge domicile belgique" | Commercial investigation | Diagnostic CTA |
| **Conformite electrique** | "mise en conformite electrique belgique" | Informational/Commercial | Diagnostic CTA (unique: inspector angle) |
| **Nettoyage toiture** | "nettoyage toiture belgique prix" | Commercial investigation | Devis CTA |
| **Pompes a chaleur** | "installation pompe a chaleur wallonie" | Commercial investigation | Diagnostic CTA |

All service pages: P0. Target word count: 3,000-4,000 words.

### 3.3 Content Pages

| Page | Primary Keyword Intent | Search Intent | Conversion Goal |
|------|----------------------|---------------|-----------------|
| **Pieges a eviter** | "arnaques panneaux solaires belgique", "pieges installation photovoltaique" | Informational (high trust) | Lead magnet download + Diagnostic CTA |
| **Realizations index** | "installations be energies", "realisations panneaux solaires" | Informational/Social proof | Service page + contact exploration |
| **Realization detail** | Long-tail: "[X] panneaux [city]" | Informational | Trust -> local page or contact |
| **Blog index** | Content hub | Navigational | Article exploration |
| **Blog article** | Varies per article (regulatory, educational, comparison) | Informational | Service page link + Diagnostic CTA |

Pieges: P0. Realizations: P1 (need photos). Blog: P1.

### 3.4 Local Pages

| Page Pattern | Primary Keyword Intent | Search Intent | Conversion Goal |
|-------------|----------------------|---------------|-----------------|
| **/panneaux-photovoltaiques/[city]/** | "panneaux solaires [city]", "installateur photovoltaique [city]" | Commercial / Local | Diagnostic CTA (city-specific) |
| **/batteries-domestiques/[city]/** | "batterie domestique [city]", "batterie solaire [city]" | Commercial / Local | Diagnostic CTA |
| **/bornes-de-recharge/[city]/** | "borne recharge [city]", "installateur borne [city]" | Commercial / Local | Diagnostic CTA |
| **/conformite-electrique/[city]/** | "conformite electrique [city]", "controle electrique [city]" | Commercial / Local | Diagnostic CTA |
| **/nettoyage-toiture/[city]/** | "nettoyage toiture [city]" | Commercial / Local | Devis CTA |
| **/pompes-a-chaleur/[city]/** | "pompe a chaleur [city]", "installateur PAC [city]" | Commercial / Local | Diagnostic CTA |

All T1 local pages: P0. T2: P1. NL Limburg: P1.
Target word count: 1,500-2,000 words per local page.

### 3.5 Utility Pages

| Page | Purpose | Conversion Goal |
|------|---------|-----------------|
| **Pro / B2B** | Secondary audience: businesses, syndics, property managers | Contact form variant |
| **Lead magnet landing** | Gate "7 pieges" PDF behind email capture | Email capture |
| **Mentions legales** | Legal compliance | None |
| **Politique de confidentialite** | GDPR compliance | None |
| **404** | Recover lost visitors | Redirect to homepage/services |

---

## 4. Reusable Sections Per Page Type

### 4.1 Section Library

| Section ID | Component | Description |
|-----------|-----------|-------------|
| `HERO` | HeroSection | Full-width hero with headline, subheadline, CTA, optional image/background |
| `TRUST_BAR` | TrustBar | Horizontal bar: RESCERT badge + X installations + X ans + ROI stat |
| `FOUNDER` | FounderCredibility | Benoit photo + title + 2-line credential + optional longer bio |
| `SERVICES_GRID` | ServiceCardGrid | 6 service cards with icons, titles, short descriptions, links |
| `PIEGE_CARDS` | PiegesCarousel | 2-3 trap cards with severity badge, problem/solution, link to pillar |
| `PROCESS` | ProcessTimeline | 4-step: Diagnostic > Proposition > Installation > Suivi |
| `FAQ` | FAQSection | Accordion with FAQPage schema injection |
| `CTA_DIAG` | CTADiagnostic | Primary CTA block: "Diagnostic energetique gratuit" + form or link |
| `CTA_STICKY` | CTASticky | Fixed mobile bottom bar: phone + WhatsApp + "Devis gratuit" |
| `TESTIMONIALS` | TestimonialBlock | Quote + name + city + service + optional savings outcome |
| `REALIZATIONS` | RealizationGrid | Filterable project card grid |
| `BLOG_PREVIEW` | BlogPreview | 3 latest articles |
| `LOCAL_PROOF` | LocalProof | "X installations a [city]" + nearest realization link |
| `COMPARISON` | ComparisonTable | "Ce que d'autres font vs Ce que Be'energies fait" |
| `RELATED_SERVICES` | RelatedServices | 2-3 service cards cross-linking related services |
| `BREADCRUMB` | Breadcrumbs | Schema-injected breadcrumb navigation |
| `SCHEMA` | SchemaScript | JSON-LD script tag (varies per page type) |
| `HREFLANG` | AlternateLinks | `<link rel="alternate" hreflang="...">` tags |

### 4.2 Section Assembly Per Page Type

#### Homepage

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `HERO` | Identity-led headline: "J'ai inspecte des centaines d'installations..." + Benoit photo |
| 2 | `TRUST_BAR` | RESCERT + installations count + years + payback stat |
| 3 | `SERVICES_GRID` | 6 services, icon + title + 1-line + CTA link |
| 4 | `FOUNDER` | Extended bio block with photo |
| 5 | `PIEGE_CARDS` | 3 traps preview + link to pillar page |
| 6 | `TESTIMONIALS` | 3 outcome-based testimonials with city attribution |
| 7 | `REALIZATIONS` | 3-4 featured projects |
| 8 | `PROCESS` | 4-step how-it-works |
| 9 | `BLOG_PREVIEW` | 3 latest articles |
| 10 | `CTA_DIAG` | Full-width CTA block |
| -- | `CTA_STICKY` | Mobile only, persistent |
| -- | `SCHEMA` | Organization + LocalBusiness + WebSite + AggregateRating + SiteNavigationElement |
| -- | `HREFLANG` | FR <-> NL homepage |

#### Service Page (Template)

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > Services > [Service Name] |
| 2 | `HERO` | Service-specific headline + Benoit credential line |
| 3 | `TRUST_BAR` | Same as homepage |
| 4 | Content: "Pourquoi [service]" | MDX body: benefits, current situation (2026 regulatory context for PV) |
| 5 | `FOUNDER` | Compact: photo + 1-line credential |
| 6 | `PIEGE_CARDS` | 2-3 service-specific traps |
| 7 | `PROCESS` | Service-specific 4-step process |
| 8 | Content: Technical details | MDX body: brands, specs, how it works, what to expect |
| 9 | `COMPARISON` | "Ce que d'autres font vs Be'energies" (service-specific) |
| 10 | `TESTIMONIALS` | 2-3 testimonials for this service |
| 11 | `REALIZATIONS` | Filtered: only this service's projects |
| 12 | `FAQ` | 8-12 questions with FAQPage schema |
| 13 | `RELATED_SERVICES` | 2-3 related services |
| 14 | `CTA_DIAG` | Service-contextualized CTA |
| -- | `CTA_STICKY` | Mobile persistent |
| -- | `SCHEMA` | Service + FAQPage + BreadcrumbList + HowTo |
| -- | `HREFLANG` | FR <-> NL (if NL equivalent exists) |

#### Local Page (Template)

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > [Service Name] > [City] |
| 2 | `HERO` | "[Service] a [City] -- votre installateur certifie" |
| 3 | `TRUST_BAR` | Same + city-specific stat if available |
| 4 | Content: City introduction | Unique paragraph about [service] in [city], mentioning GRD, local context |
| 5 | `FOUNDER` | Compact: "Votre installateur a [City]: Benoit Dezso, ancien inspecteur RESCERT" |
| 6 | `LOCAL_PROOF` | "X installations dans la province de [province]" + nearest realization |
| 7 | Content: Why [service] in [city] | City-specific benefits, subsidies, GRD tariff, local energy context |
| 8 | `PIEGE_CARDS` | 2 service-specific traps (subset of service page) |
| 9 | `TESTIMONIALS` | 1-2 testimonials, preferring same city or province |
| 10 | `FAQ` | 5-8 questions (mix of service + city-specific) with FAQPage schema |
| 11 | Content: Cross-service links | "Vous installez des panneaux? Pensez aussi a la batterie et a la borne." |
| 12 | `CTA_DIAG` | "Diagnostic energetique gratuit a [City]" |
| -- | `CTA_STICKY` | Mobile persistent |
| -- | `SCHEMA` | LocalBusiness (city coordinates) + Service + FAQPage + BreadcrumbList |
| -- | `HREFLANG` | FR <-> NL (if NL local page exists for same city) |

#### Pieges a Eviter (Pillar Page)

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > Pieges a eviter |
| 2 | `HERO` | "Les pieges a eviter avant de signer avec un installateur" |
| 3 | `FOUNDER` | Extended: "En tant qu'ancien inspecteur..." context |
| 4 | Content: Introduction | Why this page exists, Benoit's authority to write it |
| 5 | Content: 7 Traps | Each trap: problem, why it exists, how to spot it, Be'energies difference |
| 6 | `COMPARISON` | Full comparison table |
| 7 | Content: Checklist | "10 questions a poser a votre installateur" |
| 8 | CTA: Lead Magnet | "Telechargez le guide complet (PDF)" with email capture |
| 9 | `CTA_DIAG` | "Benoit peut verifier votre devis gratuitement" |
| -- | `SCHEMA` | Article + FAQPage + BreadcrumbList |

#### Blog Article (Template)

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > Blog > [Article Title] |
| 2 | Article header | Title + date + author (Benoit) + reading time |
| 3 | Content: Article body | MDX content with embedded components |
| 4 | `FAQ` | 3-5 article-specific questions with schema |
| 5 | `RELATED_SERVICES` | Links to relevant service pages |
| 6 | CTA: Lead Magnet or Diagnostic | Contextual per article topic |
| -- | `SCHEMA` | Article + FAQPage + BreadcrumbList |

#### About Page

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > A propos |
| 2 | `HERO` | "L'installateur qui a d'abord ete l'inspecteur" |
| 3 | Content: Benoit's full story | From inspector to installer. Why he started Be'energies. |
| 4 | Content: Values / Approach | Technical excellence, radical honesty, ongoing protection |
| 5 | `TRUST_BAR` | Full credential bar |
| 6 | Content: Certifications | RESCERT details, manufacturer partnerships, insurance |
| 7 | `TESTIMONIALS` | 3-4 best testimonials |
| 8 | `CTA_DIAG` | "Travaillons ensemble" variant |
| -- | `SCHEMA` | Person + Organization + BreadcrumbList |

#### Contact Page

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > Contact |
| 2 | `HERO` | "Parlons de votre projet" (compact hero) |
| 3 | Contact form | Name, email, phone, service dropdown, city, message, GDPR checkbox |
| 4 | Contact info | Phone, email, WhatsApp, address, opening hours |
| 5 | Map | Embedded static map or interactive |
| 6 | `FOUNDER` | Compact: "Benoit vous repond personnellement" |
| -- | `SCHEMA` | ContactPage + LocalBusiness + BreadcrumbList |

#### Realizations Index

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > Realisations |
| 2 | `HERO` | "Nos realisations" (compact) |
| 3 | `REALIZATIONS` | Full grid, filterable by service and city |
| 4 | `CTA_DIAG` | "Votre projet sera le prochain" |
| -- | `SCHEMA` | CollectionPage + BreadcrumbList |

#### Realization Detail

| Order | Section | Content Notes |
|-------|---------|--------------|
| 1 | `BREADCRUMB` | Accueil > Realisations > [Project Title] |
| 2 | Image gallery | Project photos (exterior, equipment, details) |
| 3 | Content: Project specs | City, service, panel count, kWc, brands used, date |
| 4 | Content: Project story | Description, challenges, outcome |
| 5 | `TESTIMONIALS` | Client testimonial if available |
| 6 | `RELATED_SERVICES` | Related service page link |
| 7 | `CTA_DIAG` | |
| -- | `SCHEMA` | Article + ImageGallery + BreadcrumbList |

---

## 5. Internal Linking Architecture

### 5.1 Link Flow Diagram

```
                         HOMEPAGE
                        /   |    \
                       /    |     \
               SERVICES   PIEGES   ABOUT
              HUB         PILLAR
             / | \          |
            /  |  \         |
     SERVICE SERVICE SERVICE |
     PAGE 1  PAGE 2  ...    |
       |  \    |  \         |
       |   \   |   \        |
     LOCAL  LOCAL  LOCAL  LOCAL
     /city1 /city2 /city1 /city2
       |       |
       +-------+--- (nearby city links)
       |       |
    REALIZATIONS
       |
    BLOG ARTICLES
```

### 5.2 Linking Rules

#### Rule 1: Homepage Links Out to Everything

| From Homepage | To | Link Type |
|--------------|-----|-----------|
| Service cards | Each service page | Direct navigation |
| Pieges preview | Pillar page | CTA link |
| Realization cards | Realization details | Direct |
| Blog preview | Blog articles | Direct |
| Trust bar | About page | RESCERT badge link |
| Footer | All service pages, contact, about, legal | Navigation |

#### Rule 2: Service Pages Link Down and Across

| From Service Page | To | Link Type | Implementation |
|------------------|-----|-----------|---------------|
| "In your city" section | All local pages for this service | City link grid | Auto-generated from city data |
| Related services | 2-3 other service pages | Card links | Manual in MDX frontmatter |
| Piege cards | Pillar page | "Voir tous les pieges" link | Component default |
| Realizations | Filtered realization details | Card links | Filtered by service slug |
| FAQ answers | Other service pages, blog articles | Inline text links | Manual in FAQ content |
| Breadcrumb | Services hub, homepage | Structured | Auto-generated |

#### Rule 3: Local Pages Link in All Directions

| From Local Page | To | Link Type | Implementation |
|----------------|-----|-----------|---------------|
| Service reference | Parent service page | Inline link in intro | Template |
| Nearby cities | 3-5 other local pages (same service, nearby cities) | Link list | Auto from `nearbyCities` data |
| Other services in this city | Local pages for other services in same city | Cross-service block | Auto from city + services data |
| Realization | Nearest realization (same city or province) | Card link | Filtered by city/province |
| Breadcrumb | Service, homepage | Structured | Auto-generated |

**Nearby cities example for `/panneaux-photovoltaiques/liege/`:**
> Nous intervenons aussi a : [Verviers](/panneaux-photovoltaiques/verviers/), [Namur](/panneaux-photovoltaiques/namur/), [Wavre](/panneaux-photovoltaiques/wavre/)

**Cross-service example for `/panneaux-photovoltaiques/liege/`:**
> Vous installez des panneaux solaires a Liege ? Pensez aussi a :
> [Batterie domestique a Liege](/batteries-domestiques/liege/) | [Borne de recharge a Liege](/bornes-de-recharge/liege/) | [Conformite electrique a Liege](/conformite-electrique/liege/)

#### Rule 4: Pillar Page Links to All Service Pages

| From Pillar Page | To | Link Type |
|-----------------|-----|-----------|
| Each trap | Relevant service page(s) | Inline link in trap content |
| Comparison table | Service pages | Row links |
| "En savoir plus" per trap | Blog article (if exists) | CTA link |
| Checklist items | Service pages, contact | Inline links |

#### Rule 5: Blog Articles Link Back to Service + Local Pages

| From Blog Article | To | Link Type |
|------------------|-----|-----------|
| Body text | Relevant service page(s) | Inline contextual links |
| Body text | Pillar page (when mentioning traps) | Inline link |
| Related services | Service page cards | Component at article bottom |
| Local mentions | Local pages (when mentioning specific cities) | Inline link |

#### Rule 6: Realizations Link to Service + Local Pages

| From Realization | To | Link Type |
|-----------------|-----|-----------|
| Service badge | Service page | Tag link |
| City reference | Local page (same service + city) | Inline link |
| Related projects | Other realizations | Card links |

### 5.3 Link Equity Flow

The internal linking creates intentional equity flow:

```
High equity pages (many inbound links):
  1. Homepage (linked from everything)
  2. Service pages (linked from local pages, blog, realizations, pillar, homepage)
  3. Pillar page (linked from all service pages, blog articles, homepage)

Medium equity pages:
  4. Local T1 pages (linked from service page, nearby cities, cross-service)
  5. Blog articles (linked from homepage, service pages, other articles)

Growing equity pages:
  6. Local T2 pages (linked from nearby T1 cities, service pages)
  7. Realization details (linked from service pages, local pages)
```

### 5.4 Orphan Page Prevention

Every page must have at least 3 inbound internal links. Verification checklist:

| Page Type | Inbound Sources | Minimum |
|-----------|----------------|---------|
| Service page | Homepage + services hub + local pages + blog + pillar | 10+ |
| Local page | Service page city grid + nearby cities + cross-service + realization | 5+ |
| Blog article | Homepage preview + blog index + service page FAQ + other articles | 3+ |
| Realization | Realizations index + service page + local page + other realizations | 3+ |
| Pillar page | Homepage + all service page piege cards + blog articles | 8+ |

---

## 6. Breadcrumb Logic

### 6.1 Breadcrumb Patterns

| Page Type | Breadcrumb | Schema |
|-----------|-----------|--------|
| Homepage | (none -- no breadcrumb on homepage) | -- |
| About | Accueil > A propos | BreadcrumbList |
| Services Hub | Accueil > Services | BreadcrumbList |
| Service Page | Accueil > Services > [Service Name] | BreadcrumbList |
| Local Page | Accueil > [Service Name] > [City] | BreadcrumbList |
| Pillar Page | Accueil > Pieges a eviter | BreadcrumbList |
| Realizations Index | Accueil > Realisations | BreadcrumbList |
| Realization Detail | Accueil > Realisations > [Project Title] | BreadcrumbList |
| Blog Index | Accueil > Blog | BreadcrumbList |
| Blog Article | Accueil > Blog > [Article Title] | BreadcrumbList |
| Contact | Accueil > Contact | BreadcrumbList |
| Legal | Accueil > [Page Title] | BreadcrumbList |

### 6.2 Local Page Breadcrumb: Why Not Under /services/

The breadcrumb for `/panneaux-photovoltaiques/liege/` reads:
> Accueil > Panneaux photovoltaiques > Liege

NOT:
> Accueil > Services > Panneaux photovoltaiques > Liege

This is intentional. The breadcrumb "Panneaux photovoltaiques" links to the service page at `/services/panneaux-photovoltaiques/`. The URL path and the breadcrumb path don't need to match literally -- the breadcrumb shows the semantic hierarchy, not the URL structure.

### 6.3 NL Breadcrumb

| Page Type | Breadcrumb |
|-----------|-----------|
| NL Homepage | (none) |
| NL Services Hub | Home > Diensten |
| NL Service Page | Home > Diensten > [Service Name NL] |
| NL Local Page | Home > [Service Name NL] > [City] |
| NL Contact | Home > Contact |

### 6.4 BreadcrumbList Schema Implementation

Every breadcrumb generates a `BreadcrumbList` JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://be-energies.be/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Panneaux photovoltaiques",
      "item": "https://be-energies.be/services/panneaux-photovoltaiques/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Liege",
      "item": "https://be-energies.be/panneaux-photovoltaiques/liege/"
    }
  ]
}
```

---

## 7. Navigation Structure

### 7.1 Desktop Header

```
[Logo]  Services v   Pieges a eviter   Realisations   Blog   A propos   Contact   [CTA: Diagnostic gratuit]
          |
          +-- Panneaux photovoltaiques
          +-- Batteries domestiques
          +-- Bornes de recharge
          +-- Conformite electrique
          +-- Nettoyage toiture
          +-- Pompes a chaleur
          +-- --------
          +-- Tous nos services
```

**Key decisions:**
- "Pieges a eviter" is a TOP-LEVEL nav item, not buried in a submenu. This signals its importance and drives traffic to the trust anchor.
- Services dropdown shows all 6 services + a "Tous nos services" link to the hub.
- CTA button is always visible in the header (amber accent color).
- Language switcher (FR | NL) appears at the far right, small but accessible.
- Phone number visible in a thin pre-header bar: `+32 (0) 12 39 42 37`

### 7.2 Mobile Navigation

```
[Logo]                    [Phone icon] [Hamburger]

--- Slide-out menu ---
Services                  [expand arrow]
  Panneaux photovoltaiques
  Batteries domestiques
  Bornes de recharge
  Conformite electrique
  Nettoyage toiture
  Pompes a chaleur
Pieges a eviter
Realisations
Blog
A propos
Contact
---
[FR | NL]
---
[CTA: Diagnostic energetique gratuit]  (full-width button)
```

**Key decisions:**
- Phone icon in mobile header links to `tel:+3212394237` -- one-tap calling.
- The CTA appears at the BOTTOM of the mobile menu, full-width, prominent.
- Services expands as an accordion within the slide-out.
- No nested sub-menus beyond one level. Mobile nav must be flat and fast.

### 7.3 Mobile Sticky Bar

Fixed at bottom of viewport on all pages (mobile only):

```
[Phone icon]  [WhatsApp icon]  [   Diagnostic gratuit   ]
```

- Phone links to `tel:` (one tap)
- WhatsApp links to `https://wa.me/3212394237`
- Button links to `/contact/` or opens a mini-form modal

This bar is ABOVE the fold on mobile and persists across all pages. It replaces the need for scroll-to-contact.

### 7.4 Footer

```
SERVICES                    INFORMATIONS              CONTACT
Panneaux photovoltaiques    Pieges a eviter           +32 (0) 12 39 42 37
Batteries domestiques       Realisations              info@be-energies.be
Bornes de recharge          Blog                      WhatsApp
Conformite electrique       A propos                  [Address]
Nettoyage toiture
Pompes a chaleur            Mentions legales          CERTIFICATIONS
                            Politique de              [RESCERT badge]
                            confidentialite           [Partner logos]

                     (c) 2026 Be'energies SARL
            L'installateur qui a d'abord ete l'inspecteur.
```

**Key decisions:**
- Tagline appears in footer: "L'installateur qui a d'abord ete l'inspecteur."
- RESCERT badge + manufacturer partner logos in footer (persistent trust signal).
- No "cities we serve" link dump in footer -- that's what local pages and sitemap.xml are for.
- Contact column includes all conversion paths (phone, email, WhatsApp, address).

---

## 8. Schema Strategy Per Page Type

| Page Type | Schema Types | Notes |
|-----------|-------------|-------|
| Homepage | `Organization`, `LocalBusiness` (with `AggregateRating`), `WebSite`, `SiteNavigationElement`, `BreadcrumbList` | LocalBusiness: main address, phone, hours, coordinates |
| Service Page | `Service`, `FAQPage`, `HowTo`, `BreadcrumbList` | HowTo: 4-step installation process |
| Local Page | `LocalBusiness` (city coordinates), `Service`, `FAQPage`, `BreadcrumbList` | LocalBusiness scoped to city |
| Pillar Page | `Article`, `FAQPage`, `BreadcrumbList` | Article with author: Benoit Dezso |
| Blog Article | `Article`, `FAQPage`, `BreadcrumbList` | datePublished, dateModified, author |
| Realization Detail | `Article`, `ImageGallery`, `BreadcrumbList` | |
| About Page | `Person`, `Organization`, `BreadcrumbList` | Person: Benoit Dezso with credentials |
| Contact Page | `ContactPage`, `LocalBusiness`, `BreadcrumbList` | |
| Services Hub | `CollectionPage`, `BreadcrumbList` | |
| Realizations Index | `CollectionPage`, `BreadcrumbList` | |

---

## 9. Duplicate Intent Prevention

### Potential Conflicts and Resolution

| Risk | Example | Resolution |
|------|---------|------------|
| Service page vs local page | `/services/panneaux-photovoltaiques/` vs `/panneaux-photovoltaiques/liege/` | Different intent: service page targets national "installation panneaux solaires belgique", local page targets "panneaux solaires liege". Different keyword focus. |
| Local pages cannibalizing each other | `/panneaux-photovoltaiques/liege/` vs `/panneaux-photovoltaiques/namur/` | Each page has unique H1, unique intro paragraph, city-specific FAQ, city-specific GRD tariff. No template swapping. |
| Blog article vs service page | Blog: "Tarif prosumer 2026" vs PV service page prosumer section | Blog targets informational "tarif prosumer wallonie 2026". Service page integrates the tariff into a commercial decision. Blog links to service page as "next step." |
| Blog article vs pillar page | Blog: "7 arnaques panneaux solaires" vs Pillar: "Pieges a eviter" | Blog article is time-specific ("en 2026"), pillar is evergreen. Blog targets "arnaque" keywords, pillar targets "pieges a eviter". Blog links to pillar for comprehensive view. |
| Service page vs pillar page | PV page "pieges" section vs Pillar page trap #1 | Service page shows 2-3 compact PiegeCards. Pillar page has full-depth treatment. No duplicate content: service page is a teaser, pillar is the deep dive. Service page links to pillar. |
| FR local page vs NL local page | `/panneaux-photovoltaiques/tongeren/` vs `/nl/zonnepanelen/tongeren/` | Different languages serve different audiences. `hreflang` tags connect them. Both are canonical for their language. |

### The H1 Uniqueness Rule

Every page MUST have a unique H1. No two pages share the same H1.

| Page Type | H1 Pattern |
|-----------|-----------|
| Homepage | "J'ai inspecte des centaines d'installations. Aujourd'hui, je les construis." |
| Service page | "Installation de [service] en Belgique" |
| Local page | "[Service] a [City] : votre installateur certifie" |
| Blog article | Article title (unique per article) |
| Realization | Project title (unique per project) |
| Pillar page | "Les pieges a eviter avant de signer avec un installateur" |

---

## 10. Hreflang Implementation

### Pages With FR/NL Equivalents

| FR URL | NL URL | Notes |
|--------|--------|-------|
| `/` | `/nl/` | Homepages |
| `/services/` | `/nl/diensten/` | Services hubs |
| `/services/panneaux-photovoltaiques/` | `/nl/diensten/zonnepanelen/` | Service pages (all 6) |
| `/services/batteries-domestiques/` | `/nl/diensten/thuisbatterijen/` | |
| `/services/bornes-de-recharge/` | `/nl/diensten/laadpalen/` | |
| `/services/conformite-electrique/` | `/nl/diensten/elektrische-conformiteit/` | |
| `/services/nettoyage-toiture/` | `/nl/diensten/dakreiniging/` | |
| `/services/pompes-a-chaleur/` | `/nl/diensten/warmtepompen/` | |
| `/contact/` | `/nl/contact/` | Contact pages |
| `/panneaux-photovoltaiques/tongeren/` | `/nl/zonnepanelen/tongeren/` | Limburg local pages |
| `/panneaux-photovoltaiques/riemst/` | `/nl/zonnepanelen/riemst/` | |
| (etc. for bilzen, hasselt) | | |

### Pages Without NL Equivalent (FR only)

These pages get a self-referencing hreflang only:
- `/a-propos/`
- `/pieges-a-eviter/`
- `/realisations/` and all realization details
- `/blog/` and all blog articles
- `/pro/`
- `/mentions-legales/`
- `/politique-de-confidentialite/`
- All T1 and T2 French local pages (non-Limburg cities)

### Implementation

```html
<!-- On /services/panneaux-photovoltaiques/ -->
<link rel="alternate" hreflang="fr-BE" href="https://be-energies.be/services/panneaux-photovoltaiques/" />
<link rel="alternate" hreflang="nl-BE" href="https://be-energies.be/nl/diensten/zonnepanelen/" />
<link rel="alternate" hreflang="x-default" href="https://be-energies.be/services/panneaux-photovoltaiques/" />
```

`x-default` always points to the FR version.

---

## 11. Next.js Route Map

### App Directory Structure

```
src/app/
|
|-- (fr)/                              # Route group (no URL segment)
|   |-- layout.tsx                     # FR layout (html lang="fr-BE")
|   |-- page.tsx                       # / (Homepage FR)
|   |-- a-propos/page.tsx             # /a-propos/
|   |-- services/
|   |   |-- page.tsx                  # /services/
|   |   |-- [slug]/page.tsx           # /services/[slug]/
|   |-- pieges-a-eviter/page.tsx      # /pieges-a-eviter/
|   |-- realisations/
|   |   |-- page.tsx                  # /realisations/
|   |   |-- [slug]/page.tsx           # /realisations/[slug]/
|   |-- blog/
|   |   |-- page.tsx                  # /blog/
|   |   |-- [slug]/page.tsx           # /blog/[slug]/
|   |-- [serviceSlug]/
|   |   |-- [citySlug]/page.tsx       # /[serviceSlug]/[citySlug]/ (local pages)
|   |-- contact/page.tsx              # /contact/
|   |-- pro/page.tsx                  # /pro/
|   |-- guide-pieges-a-eviter/page.tsx # /guide-pieges-a-eviter/
|   |-- mentions-legales/page.tsx     # /mentions-legales/
|   |-- politique-de-confidentialite/page.tsx
|
|-- nl/                                # Real URL segment
|   |-- layout.tsx                     # NL layout (html lang="nl-BE")
|   |-- page.tsx                       # /nl/ (Homepage NL)
|   |-- diensten/
|   |   |-- page.tsx                  # /nl/diensten/
|   |   |-- [slug]/page.tsx           # /nl/diensten/[slug]/
|   |-- [serviceSlug]/
|   |   |-- [citySlug]/page.tsx       # /nl/[serviceSlug]/[citySlug]/ (NL local pages)
|   |-- contact/page.tsx              # /nl/contact/
|
|-- sitemap.ts                         # Dynamic sitemap generator
|-- robots.ts                          # Robots.txt generator
|-- not-found.tsx                      # 404 page
```

### Route Disambiguation: `[serviceSlug]/[citySlug]` vs Named Routes

The `[serviceSlug]/[citySlug]` catch-all could conflict with named routes like `/contact/` or `/services/`. Resolution:

In `[serviceSlug]/[citySlug]/page.tsx`:
```typescript
export async function generateStaticParams() {
  // Only return valid service-slug + city-slug combinations
  // This prevents route collisions with /contact/, /services/, etc.
  return services.flatMap(service =>
    cities.map(city => ({
      serviceSlug: service.slug,
      citySlug: city.slug,
    }))
  )
}
```

Named routes (`contact`, `services`, `a-propos`, etc.) take priority over dynamic routes in Next.js App Router. The `[serviceSlug]` dynamic segment only matches slugs that are NOT already claimed by named route folders.

---

## 12. 301 Redirect Map (WordPress -> New Site)

| Old URL | New URL | Status |
|---------|---------|--------|
| `be-energies.be/` | `be-energies.be/` | No redirect needed |
| `be-energies.be/services/` | `be-energies.be/services/` | No redirect needed |
| `be-energies.be/contact/` | `be-energies.be/contact/` | No redirect needed |
| `be-energies.be/realisation/` | `be-energies.be/realisations/` | 301 (singular -> plural) |
| `be-energies.be/realisation/[any-slug]/` | `be-energies.be/realisations/[mapped-slug]/` | 301 per project |
| `be-energies.be/wp-content/*` | -- | Return 410 Gone |
| `be-energies.be/?p=*` | -- | Catch-all 301 to homepage |
| `be-energies.be/wp-admin/*` | -- | Return 410 Gone |

Implementation in `next.config.ts`:
```typescript
redirects: async () => [
  { source: '/realisation/', destination: '/realisations/', permanent: true },
  { source: '/realisation/:slug/', destination: '/realisations/:slug/', permanent: true },
  { source: '/wp-content/:path*', destination: '/', permanent: true },
  { source: '/wp-admin/:path*', destination: '/', permanent: true },
]
```

---

## 13. Checklist Before Build

- [ ] City data file confirmed with Benoit (T1 + T2 + T3 cities with GRD mapping)
- [ ] Service slugs finalized (FR + NL)
- [ ] Benoit's professional photo available
- [ ] At least 3 testimonials collected (with city attribution)
- [ ] Riemst 32-panel project photos available
- [ ] RESCERT certification scan available
- [ ] WordPress site crawled for any unlisted URLs
- [ ] Google Analytics/Search Console access confirmed

---

## 14. What This Document Feeds Into

| Next Step | Uses From This IA |
|-----------|------------------|
| `/build-nextjs-site` | Route map (Section 11), folder structure, component list (Section 4), schema strategy (Section 8) |
| `/content-engine` | Page purposes (Section 3), section assembly (Section 4), H1 patterns (Section 9), keyword intents |
| `/seo-local-programmatic` | City tiers (Section 2.4), local page template (Section 4.2), linking rules (Section 5.3), URL pattern |
| `/perf-seo-qa` | Schema requirements (Section 8), hreflang (Section 10), redirect map (Section 12), orphan check (Section 5.4) |
