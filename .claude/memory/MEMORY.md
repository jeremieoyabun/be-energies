# Be'energies Project Memory

## Project Status
- Bootstrap: `docs/PROJECT_BOOTSTRAP.md`
- Benchmark: `docs/COMPETITOR_BENCHMARK.md`
- Regulatory: `docs/REGULATORY_INTELLIGENCE.md`
- Positioning: `docs/POSITIONING_MESSAGING.md`
- IA: `docs/INFORMATION_ARCHITECTURE.md`
- **Phase: 0-3 complete. Next.js site scaffolded and building.**

## Tech Stack (Implemented)
- Next.js 16 (latest) + React 19 + TypeScript + Tailwind CSS 4
- Fonts: DM Serif Display (headings) + Plus Jakarta Sans (body)
- Colors: midnight/slate/charcoal base, amber accent, electric secondary
- All server components (only Header, FAQ use "use client")
- Trailing slashes enabled, AVIF+WebP images

## Codebase Structure
- `src/lib/` -- site-config, types, metadata, schema (tsx), fonts, icons
- `src/data/` -- services, cities, pieges, testimonials, realizations, blog, faq, navigation
- `src/components/layout/` -- Header, Footer, CTASticky, Breadcrumbs
- `src/components/sections/` -- 14 reusable sections (Hero, TrustBar, Founder, ServicesGrid, PiegesCarousel, Process, FAQ, CTADiag, Testimonials, RealizationGrid, Comparison, LocalProof, BlogPreview, RelatedServices)
- `src/app/(fr)/` -- all FR routes (homepage, services, local, about, pieges, realisations, blog, contact, pro, guide, legal)
- `src/app/nl/` -- NL routes (homepage, diensten, local, contact)
- `src/app/sitemap.ts`, `robots.ts`, `not-found.tsx`

## Build Output
- 66+ FR local pages (6 services x 11 cities)
- 24 NL local pages (6 services x 4 cities)
- 6 FR service pages + 6 NL service pages
- 4 realizations + 3 blog articles (sample)
- Static pages: homepage, about, pieges, services hub, blog index, realisations, contact, pro, guide, legal, privacy
- Build: CLEAN, all SSG

## Key Route Decisions (from IA)
- FR: route group `(fr)` = no URL prefix
- NL: `/nl/` real segment
- Services: `/services/[slug]/`
- Local pages: `/[serviceSlug]/[citySlug]/` (root level)
- Pieges: `/pieges-a-eviter/`
- 301 redirects configured in next.config.ts

## Execution Order
1. ~~`/competitor-benchmark`~~ DONE
2. ~~`/information-architecture`~~ DONE
3. ~~`/build-nextjs-site`~~ DONE
4. `/content-engine` (NEXT)
5. `/seo-local-programmatic`
6. `/perf-seo-qa`
