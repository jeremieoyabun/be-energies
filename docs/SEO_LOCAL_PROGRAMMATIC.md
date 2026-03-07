# SEO Local Programmatic Strategy -- Be'energies

> Last updated: 2026-03-06

## 1. URL Structure

### French (primary)
```
/{service-slug}/{city-slug}/
```
Examples:
- `/panneaux-photovoltaiques/liege/`
- `/batteries-domestiques/namur/`
- `/conformite-electrique/bruxelles/`

### Dutch (Limburg)
```
/nl/{service-slug-nl}/{city-slug}/
```
Examples:
- `/nl/zonnepanelen/riemst/`
- `/nl/thuisbatterijen/tongeren/`

### Page count
- FR: 6 services x 11 cities = **66 pages**
- NL: 6 services x 4 cities = **24 pages**
- **Total: 90 local landing pages**

---

## 2. Content Template Blocks

Each local page contains these sections in order:

1. **JSON-LD** -- LocalBusiness (city-specific coords), Service, FAQPage (city-specific)
2. **Breadcrumbs** -- Home > Service > City
3. **Hero** -- Service-specific headline variant per city
4. **TrustBar** -- Certifications, stats
5. **Founder Credibility** -- Local variant with city name
6. **City-specific intro** -- Unique paragraph per city x service (from `cityIntrosFr/Nl`)
7. **Service-specific local copy** -- Why choose us for *this service* in *this city* (GRD tariff data injected)
8. **LocalProof** -- GRD name + tariff amount + postal codes + recent realization
9. **Pieges Carousel** -- Service-relevant traps (FR only, 2 items)
10. **Testimonials** -- City-specific if available
11. **FAQ Section** -- City x service specific, with FAQPage schema
12. **Cross-service links** -- Dynamic heading per service type
13. **Nearby cities** -- Internal linking mesh
14. **CTA Diagnostic** -- City name in title

---

## 3. Dynamic Fields

| Field | Source | Varies by |
|-------|--------|-----------|
| Headline | `getLocalHeadline()` | Service + City |
| Meta description | `getLocalMetaDescription()` | Service + City + GRD |
| City intro paragraph | `getCityIntro()` | City + Service |
| Service-specific body | `getServiceLocalContent()` | Service + City + GRD tariff |
| GRD tariff amount | `getGrdTariff()` | City (via GRD) |
| Prosumer cost for 5kWc | `grdTariffs[grd].cost5kwp` | City (via GRD) |
| FAQ questions + answers | `generateLocalFaq()` | City + Service + GRD |
| Cross-service heading | `serviceLocalContent.crossServiceHeading()` | Service + City |

---

## 4. Uniqueness Strategy

### Problem solved
Without this system, all 90 pages would have identical 2-paragraph intros with only city name swapped = thin content penalty risk.

### Solution layers

1. **City-level uniqueness** -- Each of 15 cities has a hand-written intro generator that references local geography, GRD specifics, and Benoit's coverage area
2. **Service-level uniqueness** -- Each of 6 services has distinct copy explaining *why this service* matters in the city context (battery rentability logic differs from PV logic)
3. **GRD tariff injection** -- Real prosumer tariff numbers from ORES/RESA/AIEG/AIESH/REW/Sibelga/Fluvius are interpolated into copy and FAQs
4. **Region-specific content** -- Brussels gets green certificate copy, Flanders gets no-prosumer-tariff copy, Wallonia gets tariff amount + IMPACT tariff context
5. **City-specific FAQs** -- Each page gets 3-5 FAQs with city name, GRD name, and tariff amounts interpolated
6. **Testimonials** -- Shown only when real testimonials exist for that city (no faking)

### Uniqueness matrix
- 15 city intros x 6 services = 90 unique intro paragraphs
- 6 service body variants x 3 GRD tariff contexts = 18 body text variants
- 6 service FAQ templates x 15 cities = 90 unique FAQ sets
- 6 headline variants x 15 cities = 90 unique headlines
- 6 meta description variants x 15 cities = 90 unique meta descriptions

---

## 5. Local Proof Modules

The `LocalProof` component displays:
- Installation count in the province
- GRD name (gestionnaire de reseau / netbeheerder)
- Prosumer tariff amount (if applicable) with annual cost for 5kWc
- Special notes (Brussels green certs, Flanders no-prosumer)
- Postal codes served
- Most recent realization link (if exists for city)

---

## 6. FAQ Modules

### Generation logic (`generateLocalFaq()`)
1. Service-specific questions with city/GRD interpolation (1-2 questions)
2. GRD tariff FAQ for PV/battery in Wallonia (if prosumer tariff applies)
3. Brussels-specific green certificate FAQ (if Brussels + PV)
4. Universal "why choose Be'energies" FAQ with city name

### Schema
Every local page injects `FAQPage` JSON-LD with the generated FAQ items.

---

## 7. Schema Implementation

| Schema type | Scope | Data source |
|-------------|-------|-------------|
| `LocalBusiness` | Per city | City coordinates, postal codes, GRD |
| `Service` | Per service | Service title + description |
| `FAQPage` | Per page | `generateLocalFaq()` output |
| `BreadcrumbList` | Per page | Breadcrumbs component (auto-injected) |

---

## 8. Metadata Generation

- **Title**: Service-specific headline variant (`getLocalHeadline`)
- **Description**: Includes GRD tariff snippet for Wallonia, green cert mention for Brussels
- **Canonical**: Self-referencing (`/{service}/{city}/`)
- **Hreflang**: FR<>NL alternates only for Limburg cities that exist in both languages
- **OG locale**: `fr_BE` or `nl_BE`

---

## 9. Internal Linking Rules

### From local pages
- **Breadcrumbs**: Home > Service hub > City (2 upward links)
- **Cross-service**: 3 other services in same city (horizontal links)
- **Nearby cities**: 2-4 neighboring cities for same service (geographic mesh)
- **CTA**: Links to contact page

### To local pages
- **Service pages**: City grid with all cities for that service
- **Homepage**: No direct links (too many)
- **Sitemap**: All 90 pages included

### Link topology
Each local page has:
- 2 upward links (breadcrumbs)
- 3 horizontal links (cross-service)
- 2-4 geographic links (nearby cities)
- 1 CTA link
= **8-10 internal links per page**, all contextual

---

## 10. Bilingual Hreflang Strategy

### Rules
- Limburg cities (Riemst, Tongeren, Bilzen, Hasselt) exist in both FR and NL
- Only these cities get `hreflang` alternates
- Wallonia/Brussels cities are FR-only (no NL alternate)
- `x-default` points to FR version

### Implementation
```
generateLocalPageMetadata(service, city, locale)
```
Automatically sets alternates when `city.language === "nl"`.

---

## 11. Duplication Guardrails

1. **No identical content**: Every page has unique intro (city-specific), unique body (service x GRD), unique FAQs (city x service x GRD), unique headline, unique meta description
2. **No thin pages**: Each page has 5+ substantive content blocks (intro, body, local proof, FAQs, cross-links)
3. **Canonical self-reference**: Every page declares its own canonical URL
4. **No cross-language duplication**: FR and NL pages have entirely different copy generators
5. **Testimonials conditional**: Only shown when real data exists -- no fake or duplicated testimonials
6. **GRD tariff freshness**: All tariff numbers sourced from `docs/REGULATORY_INTELLIGENCE.md` -- single source of truth, reviewed quarterly

---

## File Map

| File | Purpose |
|------|---------|
| `src/data/local-content.ts` | GRD tariffs, city intros, service copy variants, FAQ generators, headline/meta generators |
| `src/data/cities.ts` | City data (15 cities, 3 tiers) |
| `src/data/services.ts` | Service data (6 services, FR + NL) |
| `src/app/(fr)/[serviceSlug]/[citySlug]/page.tsx` | FR local page template |
| `src/app/nl/[serviceSlug]/[citySlug]/page.tsx` | NL local page template |
| `src/components/sections/LocalProof.tsx` | Local proof block with GRD tariff display |
| `src/lib/metadata.ts` | Metadata generation with override support |
| `src/lib/schema.tsx` | JSON-LD generators |
| `docs/REGULATORY_INTELLIGENCE.md` | Source of truth for tariff numbers |
