# Be'energies 2026 - Project Bootstrap

> Opinionated strategic foundation for the full website rebuild.
> Date: 2026-03-06

---

## 1. Strategic Summary

Be'energies is a one-man Belgian energy services company with a rare competitive angle: the founder, Benoit Dezso, is a former electrical inspection officer (RESCERT certified). He has personally seen the damage that bad installers cause. This is not marketing spin -- it is a lived, verifiable credential that none of his competitors can claim.

The current website does not communicate this. It sits on a generic WordPress/Elementor stack, loads slowly, has no local SEO footprint, no structured content strategy, and blends into a market full of identical green-gradient solar installer sites.

**The rebuild must do three things:**

1. **Make Benoit's inspection background the first thing people see, feel, and trust.** Not buried in an "about" page. Front and center. On every service page, every local page, every CTA.

2. **Own the "pieges a eviter" (traps to avoid) content territory.** No Belgian competitor produces structured, authoritative educational content on what goes wrong with installations. This is a wide-open SEO and trust opportunity. We must claim it aggressively.

3. **Build a local SEO machine.** CB Energy already has city-level pages across Wallonia. Vectura dominates Liege/Namur. Be'energies has zero local pages. This gap must be closed with genuinely useful, non-thin city x service content.

**What this is NOT:**
- Not a brochure site refresh
- Not a WordPress-to-Next.js port
- Not a design exercise

This is a ground-up repositioning and lead generation system.

---

## 2. Current Site Diagnosis

### What exists at be-energies.be

| Attribute | Finding |
|-----------|---------|
| CMS | WordPress + Astra theme + Elementor |
| Performance | WP Rocket for lazy loading, but heavy inline CSS, custom fonts (NoirPro), Elementor runtime JS. Expect Lighthouse mobile < 60. |
| Google Analytics | G-CV43FCCBCW (active) |
| Schema | Basic Organization + WebSite only. No LocalBusiness, no Service, no FAQ, no Review schema. |
| Colors | Teal #055056, Yellow accent #fdc608, Dark navy footer #000422 |
| Font | NoirPro (Regular, Medium, Bold) -- self-hosted TTF |
| Indexed pages | Only 3 pages appear in `site:be-energies.be`: homepage, /services/, /contact/ |
| Service pages | Listed on /services/ hub but not individual pages with dedicated URLs |
| Realizations | /realisation/ page exists but content is JS-rendered (not indexable without JS) |
| Local pages | Zero. None. |
| Blog | No blog detected |
| "Pieges a eviter" | Mentioned in founder pitch but no dedicated content, no pillar page, no structured snippets |
| Bilingual | No Dutch version |
| CTAs | "Demandez un diagnostique gratuit!" -- good offer, weak execution (single button, no sticky CTA, no WhatsApp) |
| Contact | /contact/ exists, form details JS-rendered |
| Mobile UX | Responsive via Elementor breakpoints (544px, 921px) but likely sluggish |

### Indexed URL inventory (for 301 planning)

Based on search indexing, the minimal footprint means low redirect complexity:
- `be-energies.be/` (homepage)
- `be-energies.be/services/`
- `be-energies.be/contact/`
- `be-energies.be/realisation/`
- Possibly individual realization posts (e.g., Riemst 32-panel project)

**This is actually an advantage.** Few indexed URLs means low risk of SEO regression during migration. We can go aggressive with new URL structure without worrying about preserving old equity.

### Critical weaknesses (ranked by business impact)

| # | Weakness | Impact | Evidence |
|---|----------|--------|----------|
| 1 | **No local SEO footprint** | Cannot be found for "[service] + [city]" queries | 0 local pages indexed. CB Energy has 10+. Vectura owns Liege/Namur. |
| 2 | **No individual service pages** | Cannot rank for service-specific queries | All services on one /services/ page. No dedicated URLs. |
| 3 | **"Pieges a eviter" content does not exist** | The #1 differentiator is invisible | Mentioned in founder bio only. No pillar page, no snippets, no FAQ. |
| 4 | **JS-rendered content** | Google may not index key content | Elementor widgets render via JS. Realizations page returned empty to our crawler. |
| 5 | **No schema beyond basics** | Missing SERP features (FAQ rich results, reviews, local pack) | Only Organization + WebSite schema. No FAQPage, Service, LocalBusiness, Review. |
| 6 | **No blog / content engine** | Zero topical authority signal | No articles, no guides, no comparison content. |
| 7 | **No testimonials / social proof** | Trust gap on conversion pages | Search snippets mention customer testimonials exist, but they are not structured or prominent. |
| 8 | **Elementor performance overhead** | Bad CWV = lower rankings, higher bounce | WP Rocket attempts to mitigate, but inline CSS alone is massive. |
| 9 | **No bilingual content** | Missing Flemish Limburg market entirely | Riemst is literally where a project was done, but no NL content. |
| 10 | **Generic visual identity** | Indistinguishable from dozens of green-energy sites | Teal + yellow is the most common energy company palette. |

---

## 3. Competitive Landscape (Evidence-Based)

### Competitor Matrix

| Competitor | Local Pages | Service Depth | Schema | Trust Signals | Content | Design |
|------------|-------------|---------------|--------|---------------|---------|--------|
| **CB Energy** | Yes (10+ region/city pages) | Good (subcategories) | WebPage + Breadcrumb | 15+ years, testimonials | Blog (8+ articles) | Elementor, clean |
| **Vectura** | No dedicated city pages | Good (segmented by customer type) | FAQPage + LocalBusiness + AggregateRating | 4.71/5 (100 reviews), 30+ partner logos | Blog, FAQ, ebook lead magnet | Professional, blue |
| **Green SA** | No city pages | Good (solar + EV + batteries + maintenance) | Basic (WebSite, Organization) | "Since 2007", partner logos | Blog (sparse) | Squarespace, clean |
| **Green Energy 4 Seasons** | Unknown | Unknown (Divi, JS-heavy) | None detected | Unclear | Minimal visible content | Divi template |
| **Eco Energies** | Unknown | Solar + EV | Unknown | Unknown | Unknown | Unknown |
| **Be'energies (current)** | **None** | **One page for all** | **Basic only** | **Founder bio only** | **None** | **Elementor generic** |

### What competitors do NOT do (= our opportunities)

1. **Nobody owns "pieges a eviter" content.** The "traps to avoid" angle exists on French sites (nouvelr-energie.com, conseils-thermiques.org) but NO Belgian installer produces this content. Wide open.

2. **Nobody has founder-as-inspector credibility.** CB Energy says "15 years". Vectura shows reviews. Green says "since 2007". None of them have a founder who literally inspected bad installations for a living.

3. **Nobody does deep service x city content.** CB Energy has region pages but they're thin. Vectura claims provinces but has no city pages. Real, useful, city-specific content with local proof is missing across the market.

4. **Nobody combines FAQ schema + local schema + service schema properly.** Vectura is closest with FAQPage schema, but it's shallow (5 generic questions). Massive SERP feature opportunity.

5. **Nobody has a structured comparison / education approach.** All competitors sell. Nobody teaches. Be'energies can own the "trusted advisor" positioning.

---

## 4. Future-State Architecture

### 4.1 Information Architecture

```
be-energies.be/
|
|-- /fr/                                    (French - primary)
|   |-- /                                   Homepage
|   |-- /a-propos/                          Founder + company story
|   |-- /services/                          Services hub
|   |   |-- /panneaux-photovoltaiques/      Individual service
|   |   |-- /batteries-domestiques/
|   |   |-- /bornes-de-recharge/
|   |   |-- /conformite-electrique/
|   |   |-- /nettoyage-toiture/
|   |   |-- /pompes-a-chaleur/
|   |-- /pieges-a-eviter/                   Pillar page (trust + SEO anchor)
|   |-- /realisations/                      Project portfolio
|   |   |-- /[slug]/                        Individual project
|   |-- /blog/                              Articles index
|   |   |-- /[slug]/                        Individual article
|   |-- /panneaux-photovoltaiques/[city]/   Local landing (service x city)
|   |-- /batteries-domestiques/[city]/
|   |-- /bornes-de-recharge/[city]/
|   |-- /conformite-electrique/[city]/
|   |-- /nettoyage-toiture/[city]/
|   |-- /pompes-a-chaleur/[city]/
|   |-- /contact/
|   |-- /mentions-legales/
|   |-- /politique-de-confidentialite/
|
|-- /nl/                                    (Dutch - Limburg subset)
|   |-- /                                   Homepage NL
|   |-- /diensten/                          Services hub NL
|   |   |-- /zonnepanelen/
|   |   |-- /thuisbatterijen/
|   |   |-- /laadpalen/
|   |   |-- /elektrische-conformiteit/
|   |   |-- /dakreiniging/
|   |   |-- /warmtepompen/
|   |-- /zonnepanelen/[city]/              Local NL (Riemst, Tongeren, etc.)
|   |-- /laadpalen/[city]/
|   |-- /contact/
```

**Opinionated URL decisions:**
- Local pages live at `/[service-slug]/[city-slug]/`, NOT under `/services/`. This gives each local page maximum URL authority for "[service] [city]" queries.
- No `/fr/` prefix in production for French (it's the default locale with middleware redirect). Only `/nl/` gets a prefix. This keeps French URLs clean.
- Service pages under `/services/` for navigation, but local pages are siblings at root level for SEO weight.

### 4.2 Page Types & Counts

| Page Type | FR Count | NL Count | Generation Method |
|-----------|----------|----------|-------------------|
| Homepage | 1 | 1 | Hardcoded + data |
| Service pages | 6 | 6 | MDX content |
| About page | 1 | 0 | Hardcoded |
| Pieges a eviter (pillar) | 1 | 0 | MDX |
| Realizations index | 1 | 0 | Auto-generated |
| Realization details | 8-15 | 0 | MDX per project |
| Blog index | 1 | 0 | Auto-generated |
| Blog articles | 10-20 | 0 | MDX |
| Local pages (T1 cities) | ~36 (6 services x 6 cities) | 0 | generateStaticParams |
| Local pages (T2 cities) | ~30 (6 x 5) | 0 | generateStaticParams |
| Local pages (Limburg) | 0 | ~12 (3 services x 4 cities) | generateStaticParams |
| Contact | 1 | 1 | Hardcoded |
| Legal | 2 | 0 | Hardcoded |
| **Total** | **~100-130** | **~20** | |

### 4.3 Data Model

```typescript
// Core entities
interface Service {
  slug: string              // "panneaux-photovoltaiques"
  slugNl?: string           // "zonnepanelen"
  title: string
  titleNl?: string
  shortDescription: string
  icon: string              // Lucide icon name
  heroImage: string
  pieges: Piege[]           // Traps specific to this service
  faq: FAQItem[]
  relatedServices: string[] // slugs
  schema: ServiceSchemaData
}

interface City {
  slug: string              // "liege"
  name: string              // "Liege"
  nameNl?: string           // "Luik" (if bilingual)
  province: string
  region: "wallonie" | "bruxelles" | "flandre"
  language: "fr" | "nl"
  tier: 1 | 2 | 3
  population: number
  postalCodes: string[]
  coordinates: { lat: number; lng: number }
  localProof?: string       // "32 panneaux installes a Riemst en 2024"
  nearbyCities: string[]    // slugs for internal linking
}

interface Piege {
  slug: string
  title: string             // "Le sous-dimensionnement de l'onduleur"
  service: string           // service slug
  severity: "critique" | "important" | "attention"
  problem: string           // What goes wrong
  consequence: string       // What it costs you
  solution: string          // How Be'energies does it right
  founderInsight?: string   // "En tant qu'ancien inspecteur, j'ai vu..."
}

interface Realization {
  slug: string
  title: string
  date: string
  service: string           // primary service slug
  city: string              // city slug
  images: string[]
  description: string
  specs: Record<string, string> // "Puissance": "11.36 kWc"
  testimonial?: { text: string; author: string }
}
```

### 4.4 Reusable Content Blocks

These are not "components" in the UI sense -- they are **content modules** that assemble pages:

| Block | Purpose | Appears On |
|-------|---------|------------|
| **FounderCredibility** | Photo + "Ancien inspecteur RESCERT" + 2-line pitch | Homepage hero, service pages, local pages, about |
| **PiegeCard** | Single trap with severity badge + problem/solution | Service pages, pillar page, homepage |
| **PiegesCarousel** | 3 rotating traps as trust hooks | Homepage, service pages |
| **TrustBar** | RESCERT cert + years experience + projects count + satisfaction % | Below every hero |
| **LocalProof** | "X installations in [city]" + nearest realization link | Local pages |
| **FAQSection** | Accordion with FAQPage schema injection | Service pages, local pages |
| **CTADiagnostic** | Primary conversion block: "Diagnostic energetique gratuit" | Every page, above footer |
| **CTASticky** | Fixed bottom bar: phone + WhatsApp + "Devis gratuit" | Mobile sitewide |
| **ProcessTimeline** | 4-step: Diagnostic > Proposition > Installation > Suivi | Service pages, homepage |
| **RealizationGrid** | Filterable project cards | Realizations index, service pages |
| **ComparisonTable** | "Ce que d'autres font vs ce que Be'energies fait" | Pillar page, service pages |
| **TestimonialBlock** | Star rating + quote + city attribution | Homepage, service pages, local pages |
| **BlogPreview** | 3 latest articles | Homepage |
| **ServiceCardGrid** | 6 services with icons | Homepage, services hub |

### 4.5 Schema Strategy

Every page type gets specific structured data:

| Page Type | Schema Types |
|-----------|-------------|
| All pages | Organization, WebSite, BreadcrumbList |
| Homepage | LocalBusiness (with AggregateRating), SiteNavigationElement |
| Service pages | Service, FAQPage, HowTo (process steps) |
| Local pages | LocalBusiness (city-specific), Service, FAQPage |
| Realizations | Article (or CreativeWork), ImageGallery |
| Blog articles | Article, FAQPage (if has FAQ section) |
| Pieges pillar | Article, FAQPage |
| Contact | ContactPage, LocalBusiness |

---

## 5. Phased Implementation Roadmap

### Phase 0: Strategy Lock (THIS DOCUMENT + competitor benchmark)
**Duration: Now**
- [x] Project bootstrap
- [ ] Run `/competitor-benchmark` for deeper intel
- [ ] Lock design direction, typography, color palette
- [ ] Lock city priority list with Benoit
- [ ] Export Google Analytics + Search Console data from WordPress
- [ ] Crawl WordPress for exhaustive 301 map

### Phase 1: Foundation
**Depends on: Phase 0 complete**
- [ ] `npx create-next-app` with TypeScript + Tailwind
- [ ] Design system: tokens, typography, color, spacing
- [ ] Layout shell: Header, Footer, MobileNav, Breadcrumbs
- [ ] Metadata factory (`generateMetadata` helper per page type)
- [ ] Schema utility (JSON-LD generators)
- [ ] i18n middleware + locale routing
- [ ] Sitemap.ts + robots.ts
- [ ] Content loader (MDX pipeline or content utilities)

### Phase 2: Core Pages (FR)
**Depends on: Phase 1 design system**
- [ ] Homepage (hero, trust bar, services, pieges preview, founder block, CTA)
- [ ] 6 individual service pages with full content
- [ ] About / Founder page
- [ ] Contact page with Server Action form
- [ ] Legal pages (mentions legales, confidentialite)
- [ ] Pieges a eviter pillar page

### Phase 3: Proof & Trust Content
**Depends on: Phase 2 service pages**
- [ ] Realization template + 5-8 projects (use Riemst 32-panel as first)
- [ ] FAQ content per service (8-12 questions each)
- [ ] Testimonial collection and integration
- [ ] ComparisonTable content ("nous vs le marche")

### Phase 4: Local SEO Machine
**Depends on: Phase 2 service pages + Phase 3 FAQ/proof**
- [ ] City data file (T1 + T2 + T3 cities)
- [ ] Local page template with all content modules
- [ ] Generate T1 French city pages (~36 pages)
- [ ] Internal linking system (service <-> city <-> nearby city)
- [ ] Generate T2 French city pages (~30 pages)

### Phase 5: Dutch + Growth
**Depends on: Phase 2-4 French complete**
- [ ] NL homepage + service pages + contact
- [ ] NL local pages for Limburg (Riemst, Tongeren, Hasselt, Bilzen)
- [ ] hreflang implementation
- [ ] Blog system + first 5 articles
- [ ] Lead magnet landing page

### Phase 6: QA + Launch
**Depends on: All above**
- [ ] Lighthouse audit (target: 95+ mobile)
- [ ] Schema validation (all page types)
- [ ] Accessibility audit (contrast, focus, screen reader)
- [ ] 301 redirect implementation
- [ ] DNS cutover plan
- [ ] Vercel production deployment
- [ ] Search Console submission + sitemap ping

---

## 6. Prioritized Backlog

### P0 -- Ship or Don't Launch

| # | Item | Why P0 |
|---|------|--------|
| 1 | Homepage with founder credibility block | First impression. Must communicate USP immediately. |
| 2 | 6 individual service pages (FR) | Currently all on one page. Each service needs its own URL for ranking. |
| 3 | Pieges a eviter pillar page | The #1 differentiator. Must exist at launch to start ranking. |
| 4 | Contact page with working form | Conversion endpoint. Non-negotiable. |
| 5 | T1 local pages (6 services x 6 major cities = ~36 pages) | The biggest SEO gap vs competitors. Must close it. |
| 6 | About / Founder page | Trust and authority page. Benoit's story is the moat. |
| 7 | Metadata + schema on every page | Invisible but critical. No page ships without proper meta + JSON-LD. |
| 8 | Sitemap.xml + robots.txt | Indexability basics. |
| 9 | 301 redirects from WordPress URLs | Preserve whatever little equity exists. |
| 10 | Sticky mobile CTA (phone + WhatsApp) | Mobile conversion layer. Most competitors lack this. |
| 11 | Performance: Lighthouse 90+ mobile | CWV is a ranking factor. The whole point of ditching WordPress. |
| 12 | Legal pages | Legal compliance for Belgium. |

### P1 -- High Impact, Launch+2 Weeks

| # | Item | Why P1 |
|---|------|--------|
| 1 | T2 local pages (~30 more French pages) | Expand local footprint aggressively. |
| 2 | 5-8 realization pages with photos | Social proof. Use Riemst project as flagship. |
| 3 | FAQ content per service (with FAQPage schema) | Rich results opportunity. Direct answers to search queries. |
| 4 | NL homepage + key service pages | Unlock Flemish Limburg market. Riemst is home territory. |
| 5 | NL local pages (Riemst, Tongeren, Hasselt, Bilzen) | Local dominance in Benoit's backyard. |
| 6 | Testimonial integration | Google Reviews or manual curation. Needs real quotes. |
| 7 | Blog system + first 5 articles | Start building topical authority. |
| 8 | Google Business Profile optimization | Off-site but critical for local pack visibility. |

### P2 -- Growth Engine

| # | Item | Why P2 |
|---|------|--------|
| 1 | 10+ additional blog articles | Content velocity for authority. |
| 2 | Lead magnet: "Guide des pieges a eviter" (PDF) | Email capture. Reuse pillar page content. |
| 3 | Comparison content: "panneaux solaires: que choisir en 2026" | Transactional intent capture. |
| 4 | Pro/B2B page | Secondary audience. |
| 5 | Interactive solar savings calculator | Engagement + lead qualification. |
| 6 | Video testimonials | Highest-trust content format. |
| 7 | A/B test CTA variants | Data-driven conversion optimization. |
| 8 | T3 cities + additional NL expansion | Long-tail geographic growth. |

---

## 7. Strategic Decisions to Lock Before Design & Development

These must be decided NOW. Changing them later is expensive.

### Decision 1: French URL structure -- NO /fr/ prefix
**Recommendation:** French pages live at root (`be-energies.be/services/...`). Only Dutch gets a prefix (`be-energies.be/nl/diensten/...`). Middleware handles locale detection.
**Why:** Cleaner URLs, shorter, better for sharing. French is the overwhelming primary language.
**Impact if changed later:** Every URL changes, all internal links break, 301 hell.

### Decision 2: Local pages at root, not under /services/
**Recommendation:** `/panneaux-photovoltaiques/liege/` NOT `/services/panneaux-photovoltaiques/liege/`
**Why:** Shorter URL, maximum keyword density in path, matches search intent structure.
**Risk:** Could collide with service page URLs. Mitigated by service pages living under `/services/[slug]/` explicitly.

### Decision 3: MDX file-based content, no CMS at launch
**Recommendation:** All content in the repo as MDX/JSON files. No Sanity, no Contentful, no Strapi.
**Why:** Zero latency, full static generation, no subscription cost, no API dependency, full version control. Benoit edits via GitHub or we handle it.
**When to revisit:** If a non-technical person needs to edit content regularly (P2 timeline).

### Decision 4: Typography -- NOT NoirPro
**Recommendation:** Replace NoirPro with a distinctive, modern font pairing. Candidates:
- Headings: **Bricolage Grotesque** or **Cabinet Grotesk** (geometric, authoritative, not overused)
- Body: **General Sans** or **Satoshi** (clean, legible, distinctive)
**Why:** NoirPro is an obscure font with no Google Fonts CDN option and mediocre web rendering. We need something that signals premium expertise, not generic SMB. Self-host with subset for performance.

### Decision 5: Color palette -- NOT teal + yellow
**Recommendation:** Move away from #055056 teal + #fdc608 yellow. This is the default "eco company" palette.
**Proposed direction:**
- Primary: Deep navy or charcoal (authority, seriousness)
- Accent: Electric amber or warm copper (energy, premium)
- Secondary: Cool slate for backgrounds
- Success/eco: Muted sage green (present but not dominant)
**Why:** Every solar installer in Belgium uses teal/green/yellow. Be'energies needs to look like an expert, not another eco startup.

### Decision 6: Founder block is NOT optional
**Recommendation:** Every service page and every local page must include a FounderCredibility block: photo of Benoit + "Ancien inspecteur en conformite electrique, certifie RESCERT" + 1-2 lines.
**Why:** This is the moat. If it's only on the About page, 90% of visitors never see it.

### Decision 7: "Pieges a eviter" appears on EVERY service page
**Recommendation:** Each service page includes 2-3 service-specific traps (PiegeCard components) with a link to the full pillar page.
**Why:** This creates the trust-through-education pattern at every conversion point. Also drives internal links to the pillar page.

### Decision 8: Server Actions for forms, NOT a third-party service
**Recommendation:** Contact form and diagnostic request form use Next.js Server Actions + Resend (or similar email API).
**Why:** No Typeform/JotForm/HubSpot embed. Zero extra JS. Full control over the UX. GDPR compliant.

### Decision 9: No animation library
**Recommendation:** CSS-only animations (transitions, @keyframes). No Framer Motion, no GSAP, no AOS.
**Why:** Every KB matters for Lighthouse. CSS animations are GPU-accelerated. We need subtle entrance animations and hover states, not a motion design portfolio.

### Decision 10: Image strategy -- WebP with blur placeholders
**Recommendation:** All images served via `next/image` with WebP/AVIF. Blur placeholder generated at build time. No lazy-loading library.
**Why:** next/image handles responsive sizing, format negotiation, and lazy loading natively. Adding a library on top is pure bloat.

---

## 8. Proposed Folder Structure

```
be-energies/
|-- public/
|   |-- images/
|   |   |-- hero/
|   |   |-- services/
|   |   |-- realizations/
|   |   |-- team/
|   |   |-- og/                          # Pre-generated OG images
|   |-- fonts/                           # Self-hosted WOFF2 subsets
|
|-- content/
|   |-- services/
|   |   |-- fr/
|   |   |   |-- panneaux-photovoltaiques.mdx
|   |   |   |-- batteries-domestiques.mdx
|   |   |   |-- bornes-de-recharge.mdx
|   |   |   |-- conformite-electrique.mdx
|   |   |   |-- nettoyage-toiture.mdx
|   |   |   +-- pompes-a-chaleur.mdx
|   |   +-- nl/
|   |       |-- zonnepanelen.mdx
|   |       +-- ...
|   |-- realizations/
|   |   +-- [slug].mdx
|   |-- blog/
|   |   +-- [slug].mdx
|   |-- pieges/
|   |   +-- [slug].mdx
|   +-- faq/
|       +-- [service-slug].json
|
|-- data/
|   |-- cities.ts                        # All city definitions
|   |-- services.ts                      # Service registry
|   |-- navigation.ts                    # Menu structure FR + NL
|   |-- testimonials.ts                  # Curated reviews
|   +-- redirects.ts                     # WordPress 301 map
|
|-- messages/
|   |-- fr.json                          # UI strings FR
|   +-- nl.json                          # UI strings NL
|
|-- src/
|   |-- app/
|   |   |-- (fr)/                        # French route group (default locale)
|   |   |   |-- layout.tsx
|   |   |   |-- page.tsx                 # Homepage FR
|   |   |   |-- a-propos/page.tsx
|   |   |   |-- services/
|   |   |   |   |-- page.tsx             # Hub
|   |   |   |   +-- [slug]/page.tsx      # Individual service
|   |   |   |-- pieges-a-eviter/page.tsx
|   |   |   |-- realisations/
|   |   |   |   |-- page.tsx
|   |   |   |   +-- [slug]/page.tsx
|   |   |   |-- blog/
|   |   |   |   |-- page.tsx
|   |   |   |   +-- [slug]/page.tsx
|   |   |   |-- [service-slug]/
|   |   |   |   +-- [city-slug]/page.tsx # Local landing FR
|   |   |   |-- contact/page.tsx
|   |   |   |-- mentions-legales/page.tsx
|   |   |   +-- politique-de-confidentialite/page.tsx
|   |   |
|   |   |-- nl/                          # Dutch routes
|   |   |   |-- layout.tsx
|   |   |   |-- page.tsx                 # Homepage NL
|   |   |   |-- diensten/
|   |   |   |   |-- page.tsx
|   |   |   |   +-- [slug]/page.tsx
|   |   |   |-- [service-slug]/
|   |   |   |   +-- [city-slug]/page.tsx # Local landing NL
|   |   |   +-- contact/page.tsx
|   |   |
|   |   |-- sitemap.ts
|   |   |-- robots.ts
|   |   +-- not-found.tsx
|   |
|   |-- components/
|   |   |-- layout/
|   |   |   |-- Header.tsx
|   |   |   |-- Footer.tsx
|   |   |   |-- MobileNav.tsx
|   |   |   +-- Breadcrumbs.tsx
|   |   |-- sections/
|   |   |   |-- HeroSection.tsx
|   |   |   |-- FounderCredibility.tsx
|   |   |   |-- TrustBar.tsx
|   |   |   |-- PiegeCard.tsx
|   |   |   |-- PiegesCarousel.tsx
|   |   |   |-- ServiceCardGrid.tsx
|   |   |   |-- FAQSection.tsx
|   |   |   |-- CTADiagnostic.tsx
|   |   |   |-- CTASticky.tsx
|   |   |   |-- ProcessTimeline.tsx
|   |   |   |-- TestimonialBlock.tsx
|   |   |   |-- LocalProof.tsx
|   |   |   |-- RealizationGrid.tsx
|   |   |   |-- ComparisonTable.tsx
|   |   |   +-- BlogPreview.tsx
|   |   |-- ui/
|   |   |   |-- Button.tsx
|   |   |   |-- Card.tsx
|   |   |   |-- Badge.tsx
|   |   |   |-- Container.tsx
|   |   |   +-- Input.tsx
|   |   +-- seo/
|   |       |-- SchemaScript.tsx
|   |       +-- AlternateLinks.tsx
|   |
|   |-- lib/
|   |   |-- content.ts                   # MDX loading + parsing
|   |   |-- schema.ts                    # JSON-LD factory functions
|   |   |-- metadata.ts                  # generateMetadata helpers
|   |   |-- i18n.ts                      # Locale detection + routing
|   |   |-- local-pages.ts              # City x Service matrix + params
|   |   +-- utils.ts
|   |
|   +-- styles/
|       +-- globals.css                  # Tailwind + CSS custom properties
|
|-- tailwind.config.ts
|-- next.config.ts
|-- tsconfig.json
|-- package.json
+-- .env.local
```

**Key structural decision:** French uses a route group `(fr)` instead of a `/fr/` segment. This means French URLs have no prefix. The `nl/` folder is a real route segment. Middleware redirects based on Accept-Language header for first visit only.

---

## 9. Risks & Mitigation

| Risk | Severity | Mitigation |
|------|----------|------------|
| **No project photos available** | High | Design components to work with icons + illustrations first. Add photo slots as progressive enhancement. Use the Riemst project (32 panels, 5 heat pumps) as the flagship -- Benoit must have photos. |
| **Thin local pages trigger Google penalty** | High | Each local page must have: unique intro paragraph, city-specific FAQ (min 3), local realization link if available, nearby city links, unique meta description. NO city-name-swap templates. |
| **Benoit doesn't provide content/testimonials** | Medium | Write all content ourselves from CLAUDE.md context. Mark testimonial blocks as "coming soon" with real CTA to collect reviews post-launch. |
| **Scope creep delays launch** | Medium | P0 is the hard line. Blog, NL pages, T2 cities are P1. Launch without them. |
| **NoirPro font licensing issue** | Low | Replace it entirely (Decision 4). Self-host new fonts. |
| **WordPress site goes down before 301 crawl** | Medium | Crawl it NOW. Use Wayback Machine as backup. The indexed footprint is tiny (3-4 pages), so risk is manageable. |

---

## 10. What Happens Next

```
NOW:
  [x] This bootstrap document
  [ ] Run /competitor-benchmark (deeper competitive intel)
  [ ] Benoit: provide photos, testimonials, city priority list
  [ ] Lock Decisions 1-10 above

THEN:
  [ ] /information-architecture  -> final sitemap + URL map
  [ ] /build-nextjs-site         -> scaffold + design system + layout
  [ ] /content-engine            -> homepage + service page copy
  [ ] /seo-local-programmatic    -> local page system
  [ ] /perf-seo-qa               -> final audit

LAUNCH.
```
