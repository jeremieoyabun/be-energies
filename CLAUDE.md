# Project Context - Be'energies 2026

## Mission
Rebuild the entire Be'energies website as a modern, ultra-fast, SEO-first, conversion-oriented Next.js 15 website deployed on Vercel.

## Business
Be'energies is a Belgian services company focused on:
- Photovoltaic panels
- Domestic batteries
- EV charging stations
- Electrical compliance
- Roof cleaning and roof painting
- Heat pumps / air conditioning

## Core positioning
The founder, Benoît Dezso, is a former electrical inspection professional. This is the main trust differentiator.
He has seen poor installations, false promises, dangerous dimensioning choices, and low-quality work in the field.
The website must strongly communicate:
- technical credibility
- transparency
- safety
- local expertise
- premium seriousness without corporate coldness

## Main USP
The content pillar "Pièges à éviter" is a major strategic asset.
It must be transformed into:
- a trust section on the homepage
- a pillar SEO page
- reusable snippets on service pages
- lead magnet opportunities
- comparison content versus bad market practices

## Languages
Primary language: French (fr-BE)
Secondary language: Dutch (nl-BE) for Riemst / Tongeren / Hasselt / Bilzen local SEO
Architecture must support bilingual expansion cleanly.

## Geographic SEO focus
Primary:
- Wallonia
- Brussels
- Riemst and nearby Flemish Limburg

Important:
- local service pages by city
- strong internal linking
- local proof
- LocalBusiness and Service schema
- FAQ schema
- review integration
- bilingual hreflang-ready architecture

## Performance goals
- Mobile-first
- Lighthouse 95+ where realistically possible
- very low JS
- static generation wherever possible
- image optimization
- font optimization
- SEO-first rendering
- accessibility-first
- avoid bloat and visual gimmicks that hurt performance

## Design direction
Avoid generic AI aesthetics.
Do not produce a bland SaaS site.
We want a distinctive, premium, trustworthy, technical, field-expert look.

Apply these frontend aesthetics rules:
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design,this creates what users call the "AI slop" aesthetic. Avoid this: make creative,distinctive frontends that surprise and delight. Focus on:
- Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.
- Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.
- Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.
- Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.
Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
Interpret creatively and make unexpected choices that feel genuinely designed for the context.
</frontend_aesthetics>

## Technical stack
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- MDX or headless CMS-ready content architecture
- Vercel deployment
- next-seo style metadata patterns
- schema.org structured data
- scalable local landing page generation

## Conversion goals
Primary CTA:
- Diagnostic énergétique gratuit

Secondary CTAs:
- Call now
- WhatsApp
- Ask for a quote

## Non-negotiables
- No WordPress patterns
- No Elementor-like design
- No generic stock-copy tone
- No thin local pages
- No fake claims
- No bloated animation libraries unless justified
- No duplicated mobile/desktop markup
- No inaccessible contrast or weak hierarchy

## Deliverables expected from Claude
1. Competitor benchmark
2. Positioning and messaging refinement
3. Full sitemap and IA
4. Wireframe logic
5. Design system
6. Content strategy
7. SEO architecture
8. Programmatic local page strategy
9. Full implementation in code
10. Technical SEO and performance QA
11. 301 migration map from WordPress URLs
12. Launch checklist

## How to work
Always work in phases.
At each phase:
- analyze
- propose
- justify
- then implement

When researching:
- benchmark direct competitors in Belgium first
- benchmark best-in-class energy / home services websites second
- identify weak patterns to avoid
- identify trust and conversion opportunities

When coding:
- create production-grade code
- prefer reusable components
- keep semantic HTML
- ensure metadata and schema are implemented
- keep code clean and well-organized