# Be'energies -- Design Direction

## Asset audit

### Logo
- Globe/sun icon with geometric faceted pattern, navy core with cyan gradient rays
- Wordmark in bold rounded sans-serif, navy
- White-on-dark variant available
- Icon-only variant (HW) with tagline "Energies renouvelables, avenir durable"
- **Assessment**: The icon is distinctive and modern. The faceted globe motif is unique in the Belgian energy market. Keep and integrate prominently. The tagline on the icon variant is generic -- do not reuse.

### Photography
- `Be-energies_video_header.png` -- Real crew on a rooftop, red helmets, sunny day. **Strong**. Use for hero or about. Shows real fieldwork.
- `Batterie.webp` / `Be-energies_batteries-02.webp` -- SolarEdge batteries in-situ. Clean, professional product shots. **Good** for service pages.
- `Borne_smappee.webp` / `Smappee_charge.jpeg` -- EV charging station. Architectural, modern. **Strong** for borne service page.
- `Be-energies_batteries_toiture.webp` -- Roof cleaning before/after. **Useful** but low resolution/quality. Recommend re-shooting or using only at small sizes.
- `Be-energies_video_header.mp4` -- Video of rooftop installation. **High value** for hero if lightweight.

### What's missing
- Professional portrait of Benoit Dezso (critical for trust)
- Belgian residential context shots (typical Walloon/Brussels houses with panels)
- Close-up of electrical panel / compliance inspection work
- Before/after realization comparison photos
- Team on-site branded (uniform, vehicle)

---

## 3 Creative Directions

---

### Direction A: "Rapport de Terrain" (Field Report)

**Mood**: Technical documentation meets editorial authority. Like an inspector's detailed report turned into a website -- precise, factual, authoritative, with the warmth of someone who genuinely cares about getting it right.

**Reference vibe**: Patagonia's environmental essays + Dyson's engineering storytelling + a Belgian building inspection report.

**Typography**:
- Headings: **DM Serif Display** (keep current) -- editorial authority, not corporate
- Body: **Plus Jakarta Sans** (keep current) -- clean, geometric, modern
- Data/stats: **JetBrains Mono** or system monospace -- for figures, kWh, EUR values, tariff tables. Creates "inspection document" feel.

**Color palette**:
- Primary: Midnight navy (#0c1220) dominant. Most sections sit on white or ivory, but the dark palette creates weight and authority.
- Accent: Warm amber (#f59e0b) -- used surgically for CTAs, key figures, active states. Never decorative.
- Secondary: Cyan from the logo (#00d4ff) -- used as a subtle highlight for technical elements: table headers, schema badges, compliance checkmarks. Connects to the logo without overwhelming.
- Neutral scale: The existing cloud/ivory/steel scale. Clean, no noise.
- New addition: A "safety green" (#22c55e) for conformity/passed states, and "danger red" (#ef4444) for warnings/failed states -- makes inspection/compliance visual language tangible.

**Visual motifs**:
- Diagonal hatch pattern (from the hero gradient lines) used as a signature background texture -- evokes roof lines and architectural drawings
- Thin 1px data lines separating content blocks, reminiscent of form field separators in technical documents
- Left-aligned amber vertical rules on quote blocks and case study sections (already used on realization detail pages)
- Numbers and data presented large, in monospace, amber -- the "inspector's findings" motif
- The faceted globe pattern from the logo abstracted into subtle section dividers or card corner decorations

**Motion language**:
- Minimal, purposeful. Content fades in on scroll (existing `fadeInUp`), no gratuitous animation.
- Hover on cards: subtle border-amber transition + slight shadow lift (already implemented)
- Data counters: numbers count up on first viewport entry (for key stats like 487 installations, 12 years)
- No parallax, no particle effects, no animated backgrounds

**Component behavior**:
- Cards feel like "filed documents" -- clean border, structured data, amber accent line on hover
- CTAs are always amber with midnight text -- unmissable, consistent
- Forms feel precise -- larger input fields, clear labels above (not floating), amber focus ring
- Comparison tables use alternating subtle backgrounds with bold amber for "Be'energies" column
- FAQ items feel like expandable inspection findings -- click to reveal the detail

**Why this works**: It turns Benoit's inspector background into the visual language itself. The site looks like it was designed by someone who documents everything precisely. It creates trust through structure and clarity, not through decoration.

---

### Direction B: "Atelier Solaire" (Solar Workshop)

**Mood**: Warm, artisanal craftsmanship. Like a master craftsman's workshop -- tools are visible, work is tangible, quality is evident in every joint and connection. Think Belgian artisan tradition applied to energy.

**Reference vibe**: Aesop retail spaces + Vitsoe furniture + Belgian brickwork vernacular.

**Typography**:
- Headings: **Fraunces** -- a soft, variable-axis serif with optical sizing. Warm, organic, distinctive. Not corporate. Feels like a craftsman who reads.
- Body: **Satoshi** (or keep Plus Jakarta Sans) -- clean geometric sans with warmth
- Data: Regular body font, but bold amber figures in the heading font for warmth

**Color palette**:
- Primary: Warm charcoal (#2a3444) instead of pure midnight -- softer, less corporate
- Accent: Deeper amber/golden (#d97706) -- more like aged brass than traffic-light yellow
- Warmth layer: A new terracotta/clay (#c2703a) for Belgian rooftop associations. Used sparingly for section backgrounds and border accents.
- Background: Linen white (#faf8f5) instead of pure white -- warmer, less sterile
- The cyan from the logo appears only in the logo itself -- the warm palette takes over

**Visual motifs**:
- Rounded, generous spacing -- cards with 24px radius, large internal padding
- Photography-forward: every section leads with a real photo, not an icon
- Texture: subtle paper-grain noise overlay on light backgrounds (CSS-only, no images)
- Grid lines: thin warm-gray construction lines visible in the background, like graph paper
- Belgian vernacular: shapes inspired by row houses, pitched roofs, dormer windows

**Motion language**:
- Generous, smooth transitions (400-600ms cubic-bezier)
- Cards on hover: gentle scale(1.02) with shadow deepening
- Page transitions: content sections reveal with slight parallax offset (image behind, text in front)
- Founder photo: subtle Ken Burns slow-zoom on scroll

**Component behavior**:
- Cards feel handcrafted -- larger radius, more padding, softer shadows
- Trust elements use photography instead of icons where possible
- Process timeline uses a continuous line connecting steps, like a wiring diagram
- Testimonials feel like handwritten notes -- slightly rotated cards, quotation marks in the heading font

**Why this works**: It humanizes the technical expertise. Benoit isn't just an inspector -- he's a craftsman who builds with care. The warmth invites homeowners who might be intimidated by technical solar content.

**Risk**: Could feel too soft for the "technical credibility" positioning. May not differentiate enough from warm-fuzzy-eco competitors.

---

### Direction C: "Controle Technique" (Technical Control)

**Mood**: Engineering precision meets Belgian pragmatism. Like the dashboard of a well-engineered German car -- everything has a purpose, nothing is decorative, quality is felt in the fit and finish. The confidence of someone who knows the regulations better than anyone.

**Reference vibe**: Porsche configurator + Linear.app + Belgian RGIE documentation.

**Typography**:
- Headings: **Space Grotesk** -- geometric, wide, confident. Technical but not cold. Has character that Inter/Roboto lack.
- Body: **General Sans** (or keep Plus Jakarta Sans) -- clean, professional
- Data/stats: Headings font at larger weight -- numbers are first-class citizens in this direction

**Color palette**:
- Primary: Deep navy (#0c1220) -- even darker and more authoritative
- Accent: Electric cyan (#00d4ff) from the logo as the PRIMARY accent instead of amber -- sharper, more technical, more distinctive in the market
- Secondary: Amber (#f59e0b) ONLY for CTAs and conversion elements -- creates powerful contrast against the cyan informational elements
- Status colors: Green (#22c55e) / amber / red for compliance states
- Surfaces: Pure white (#ffffff) cards on light gray (#f1f5f9) backgrounds -- high contrast, clinical precision
- Dark mode sections use the midnight gradient -- dramatic, confident

**Visual motifs**:
- Precision lines: 1px borders everywhere. Cards are defined by their edges, not their shadows.
- Data-first layouts: key numbers are always the largest element in any section
- Compliance badge system: green checkmark badges for "conforme", red alert badges for "non-conforme" -- making the inspection metaphor literal
- Grid: strict 8px grid visible in spacing consistency. Every element aligns.
- The logo's faceted globe pattern rendered as a large, subtle background watermark on dark sections
- Specification tables styled like actual technical datasheets

**Motion language**:
- Crisp, fast transitions (150-250ms). No lingering animations.
- Hover states: instant border-color change, no transform
- Scroll reveals: sharp fade-in (no translateY), staggered by 50ms per element
- Data visualization: progress bars fill on viewport entry

**Component behavior**:
- Cards are sharp -- 8px radius max, 1px borders, no soft shadows
- Buttons: sharp corners (8px), high contrast, clear hierarchy (primary amber, secondary outlined)
- Tables: technical datasheet style -- dense, well-aligned, with highlighted rows
- FAQ: clean disclosure, no decorative elements
- Hero: split layout (text left, key stat/figure right) instead of full-width centered text

**Why this works**: Maximum differentiation from every solar installer website in Belgium. While competitors use green gradients and stock photos of happy families, this looks like a precision engineering firm. It attracts homeowners who want to be sure, not charmed.

**Risk**: Could feel cold or intimidating for less technical homeowners. The cyan accent diverges from the warm amber brand that's already established.

---

## Recommendation: Direction A -- "Rapport de Terrain"

### Why Direction A wins

1. **Stays true to what's built**: The current codebase already implements 80% of this direction. DM Serif Display + Plus Jakarta Sans, the midnight/amber palette, rounded-2xl cards, the content-first approach. Direction A refines and elevates what exists rather than scrapping it.

2. **The inspector story IS the design**: The visual language of technical documentation, precise data presentation, and structured proof is Benoit's actual competitive advantage made visible. It's not a metaphor -- it's the truth.

3. **Balances warmth and authority**: The serif headings provide warmth and editorial quality. The amber accent is inviting. But the data-forward layouts and structured cards maintain technical credibility. It works for both a nervous homeowner and a detail-oriented engineer.

4. **Logo integration is natural**: The existing cyan from the logo works as a secondary accent for technical elements without fighting the amber primary. The faceted globe pattern becomes an abstract decorative motif.

5. **Performance-friendly**: No heavy fonts to load, no complex animations, no image-dependent layouts. Everything can be CSS + existing fonts.

6. **Market differentiation**: No Belgian solar installer currently uses an editorial/inspection aesthetic. They all use either generic SaaS layouts or overproduced corporate green-energy clichés.

### What Direction A needs that isn't already built

1. **Logo integration**: Replace the text-only "Be'energies" in the header with the actual SVG logo mark + wordmark
2. **Monospace accent font** for data/stats (system monospace or a lightweight font)
3. **Cyan secondary accent** for technical badges, table headers, compliance indicators
4. **The diagonal hatch pattern** as a subtle signature background
5. **Photography integration** in the hero and key sections
6. **Richer shadow/elevation system** for card hierarchy
7. **A "data callout" component** for presenting key figures prominently

---

## Design System Foundation (Direction A: "Rapport de Terrain")

### Colors

```
// Brand core
midnight:        #0c1220    // Primary background, text
slate:           #1a2332    // Dark surfaces, footer
charcoal:        #2a3444    // Secondary text
steel:           #64748b    // Tertiary text, labels
silver:          #94a3b8    // Muted text on dark
cloud:           #e2e8f0    // Borders, dividers
ivory:           #f8fafc    // Light surface
white:           #ffffff    // Cards, main background

// Action accent
amber:           #f59e0b    // Primary CTA, key data
amber-light:     #fbbf24    // Hover on dark
amber-dark:      #d97706    // Hover on light
amber-glow:      rgba(245,158,11,0.15)  // Selection, focus ring bg

// Technical accent (from logo)
cyan:            #06b6d4    // Technical badges, links in dark mode, table headers
cyan-light:      #22d3ee    // Hover state
cyan-dark:       #0891b2    // Active state

// Semantic
success:         #22c55e    // Conforme, passed
warning:         #f59e0b    // Attention
danger:          #ef4444    // Non-conforme, critique
```

### Typography

```
Heading:    DM Serif Display, 400 weight
            - h1: 3rem / 3.75rem (mobile / desktop), line-height 1.1, tracking -0.02em
            - h2: 1.5rem / 1.875rem, line-height 1.15
            - h3: 1.125rem / 1.25rem, line-height 1.2
            Color: midnight (default), white (on dark)

Body:       Plus Jakarta Sans, 400/500/600/700
            - Base: 1rem, line-height 1.6
            - Small: 0.875rem, line-height 1.5
            - XS: 0.75rem, line-height 1.4
            Color: charcoal (default), silver (on dark)

Data:       System monospace (ui-monospace, 'SF Mono', 'Cascadia Mono', monospace)
            - Used for: prices, kWh figures, percentages, tariff values
            - Size: 1 step larger than surrounding text
            - Color: amber (for emphasis) or midnight (neutral)
            - Weight: 700
```

### Spacing

```
Base unit: 4px (0.25rem)

Spacing scale:
  1:   4px     (0.25rem)   -- icon internal padding
  2:   8px     (0.5rem)    -- tight gaps
  3:   12px    (0.75rem)   -- compact element spacing
  4:   16px    (1rem)      -- default gap
  5:   20px    (1.25rem)   -- card internal padding (mobile)
  6:   24px    (1.5rem)    -- card internal padding (desktop), container padding
  8:   32px    (2rem)      -- section internal gaps
  10:  40px    (2.5rem)    -- between major elements
  12:  48px    (3rem)      -- section padding (mobile)
  16:  64px    (4rem)      -- between sections
  20:  80px    (5rem)      -- section padding (desktop)

Container: max-width 1280px, padding-inline 1.5rem (1rem on mobile)
```

### Border Radius

```
none:   0px      -- tables, datasheet elements
sm:     4px      -- badges, small chips
md:     8px      -- buttons, inputs, small cards
lg:     12px     -- dropdown menus, tooltips
xl:     16px     -- standard cards
2xl:    24px     -- hero cards, featured sections, images
full:   9999px   -- pills, avatars, rounded badges
```

### Shadows

```
none:    none
sm:      0 1px 2px rgba(12, 18, 32, 0.04)           -- subtle lift
md:      0 4px 12px rgba(12, 18, 32, 0.06)           -- cards at rest
lg:      0 8px 24px rgba(12, 18, 32, 0.08)           -- cards on hover
xl:      0 16px 48px rgba(12, 18, 32, 0.12)          -- modals, dropdowns
amber:   0 4px 16px rgba(245, 158, 11, 0.25)         -- CTA glow on hover
inner:   inset 0 1px 2px rgba(12, 18, 32, 0.06)      -- input fields
```

### Icon Style

```
Stroke-based, 24px default, 2px stroke, round caps and joins.
Current icon set is correct.
Color: inherit from parent text color.
Accent state: amber.
Size variants: 14px (inline), 18px (small), 24px (default), 32px (feature).
```

### Cards

```
Standard card:
  - bg-white, border 1px cloud, radius 16px (xl)
  - padding: 24px (6) desktop, 20px (5) mobile
  - shadow: md at rest
  - hover: border-amber, shadow-lg, transition 250ms

Featured card (dark):
  - bg-midnight, radius 16px
  - padding: 32px (8) desktop
  - text: white headings, silver body
  - amber accent elements inside

Data card (stats):
  - bg-ivory, border 1px cloud, radius 16px
  - centered layout
  - large monospace number in amber
  - small label text in steel

Service card:
  - as standard card
  - icon in 48x48 amber/10 rounded-xl container
  - hover: border-amber, icon container shifts to amber/20
  - "En savoir plus" link in amber with arrow

Realization card:
  - image fills top, radius 16px overflow hidden
  - content below with structured data (city, kWc, panels)
  - badges for category/client type
```

### Buttons

```
Primary (CTA):
  - bg-amber, text-midnight, font-semibold
  - px-8 py-4 (large) or px-5 py-2.5 (compact)
  - radius: md (8px)
  - hover: bg-amber-dark
  - includes ArrowRight icon (18px)
  - shadow-amber on hover for emphasis

Secondary:
  - bg-transparent, border 1px cloud, text-charcoal
  - same sizing as primary
  - hover: bg-ivory, border-steel

Ghost (on dark):
  - bg-transparent, border 1px charcoal, text-silver
  - hover: border-silver, text-white

Text link:
  - text-amber, font-medium
  - hover: text-amber-dark
  - with ArrowRight icon on interactive links
  - underline for inline text links
```

### Forms

```
Input fields:
  - border 1px cloud, radius md (8px)
  - px-4 py-3, text-sm
  - focus: border-amber, ring 1px amber, shadow-inner removed
  - label: above field, text-sm font-medium text-midnight, mb-1.5
  - placeholder: text-steel
  - error state: border-danger, text-danger below

Select:
  - same as input, bg-white
  - custom chevron via ChevronDown icon

Checkbox:
  - accent-amber
  - label text-xs text-steel, inline

Textarea:
  - same border/focus as input
  - resize-y, min-height via rows

Submit button:
  - primary button style
  - full-width on mobile (w-full sm:w-auto)
```

### Callouts / Alert blocks

```
Info callout:
  - bg-cyan/5, border-l-4 border-cyan, p-6
  - heading in midnight, body in charcoal
  - cyan icon (info circle) top-left

Warning callout:
  - bg-amber/5, border-l-4 border-amber, p-6
  - AlertTriangle icon in amber

Danger callout:
  - bg-danger/5, border-l-4 border-danger, p-6

Success callout:
  - bg-success/5, border-l-4 border-success, p-6
  - CheckIcon in success green

Inspector insight (unique to Be'energies):
  - bg-midnight/5, border-l-4 border-amber, p-6 md:p-8
  - Small avatar of Benoit top-left
  - "Point de vue de l'inspecteur" label in amber, uppercase, text-xs
  - Quote text in charcoal, italic
```

### Review / Testimonial blocks

```
Testimonial card:
  - bg-white, border 1px cloud, radius xl
  - 5 amber stars top (StarIcon filled)
  - Quote text in charcoal, leading-relaxed
  - Divider line
  - Name (font-medium midnight), city (text-steel text-sm)
  - Optional: measurable outcome badge (e.g., "Facture: 185 -> 38 EUR/mois")
    in bg-success/10 text-success rounded-full px-3 py-1 text-xs

Compact testimonial (inline):
  - No card border
  - Stars + quote + name on one block
  - Used in sidebars
```

### FAQ blocks

```
Already well-implemented via FAQSection component:
  - Accordion with ChevronDown rotation
  - border 1px cloud, radius xl
  - Hover: bg-ivory
  - Open: border-t separator, content in text-sm text-charcoal
  - Auto-generates FAQPage schema

Enhancement:
  - Add subtle amber left-border on the open item
  - Transition height with CSS (max-height animation)
```

### Trust badges

```
Credential badge:
  - bg-midnight, text-amber-light, text-xs font-medium
  - px-3 py-1.5, radius sm (4px)
  - e.g., "RESCERT", "Ancien inspecteur"

Stat badge:
  - bg-ivory, border 1px cloud, radius full (pill)
  - text-sm text-charcoal
  - CheckIcon or StarIcon prefix in amber
  - e.g., "487 installations", "4.8/5 satisfaction"

Conformity badge:
  - Passed: bg-success/10 text-success, CheckIcon
  - Failed: bg-danger/10 text-danger, AlertTriangle
  - Pending: bg-amber/10 text-amber-dark

Brand trust bar:
  - bg-ivory, border-y 1px cloud
  - Horizontal row of stat badges, centered
  - py-4, wraps on mobile
```

---

## Homepage Wireframe Logic (Direction A)

### Section 1: Hero -- "The Inspector's Promise"
```
[DARK GRADIENT BACKGROUND -- midnight to slate, diagonal hatch pattern overlay]

LEFT SIDE (60%):
  [Pre-headline, text-xs uppercase tracking-wider text-amber]
  "Fonde par un ancien inspecteur electrique agree RESCERT"

  [H1, DM Serif Display, 3.75rem, text-white]
  "J'ai inspecte des centaines d'installations.
   Aujourd'hui, je les construis."

  [Subheadline, text-xl, text-silver, max-w-2xl]
  "Panneaux solaires, batteries, bornes de recharge, pompes a chaleur,
   conformite electrique. Un seul interlocuteur pour votre systeme energetique."

  [CTA row, mt-8]
  [PRIMARY BUTTON: "Diagnostic energetique gratuit" -> /contact/]
  [SECONDARY BUTTON: "Nos realisations" -> /realisations/]

RIGHT SIDE (40%) -- desktop only:
  [Hero image: rooftop crew photo from Be-energies_video_header.png]
  [Overlaid floating data card, bg-white/10 backdrop-blur:]
    "487 installations"
    "12 ans d'experience"
    "4.8/5 satisfaction"
  [Or: embedded video with play button overlay using .mp4 asset]
```

### Section 2: Trust Bar
```
[bg-ivory, border-y cloud, py-4]
[Horizontal flex, centered, wrap on mobile]
  [CheckIcon amber] Certifie RESCERT
  [CheckIcon amber] 487 installations
  [CheckIcon amber] 12 ans d'experience
  [CheckIcon amber] Retour en 5-7 ans
```

### Section 3: Rentability Proof -- "Kill the #1 Doubt"
```
[bg-white, section-padding]

[H2, centered] "Le photovoltaique en 2026 : toujours rentable"
[Subtitle] "Les panneaux coutent 5x moins cher. Le calcul n'a jamais ete aussi favorable."

[4-column stat grid, data cards:]
  5-7 ans retour | ~12% rendement | 38c/kWh economise | 25+ ans duree

[Dark callout card, bg-midnight, rounded-2xl, mt-8:]
  LEFT: "Le chiffre cle" -> 38c autoconsomme vs 1-6c injecte
  RIGHT: CTA "Voir le calcul complet"

  NEW: Below the callout, add a "Source: tarifs CWaPE 2026, GRD ORES/RESA"
  text-xs text-steel -- adds credibility through citation
```

### Section 4: Services Grid
```
[bg-white, section-padding]

[H2, centered] "Nos services"
[Subtitle] "Un seul interlocuteur pour l'ensemble de votre systeme energetique."

[3-column grid of 6 service cards:]
  Each: icon (amber/10 container) + title + short description + "En savoir plus" link
  Staggered fade-in animation on scroll

  Enhancement: Add a subtle "populaire" badge on panneaux-photovoltaiques card
```

### Section 5: Founder Credibility -- "The Inspector Story"
```
[bg-ivory, section-padding]

[2-column layout: photo LEFT (280px), content RIGHT]

  LEFT:
    [Benoit portrait photo, rounded-2xl, aspect 3:4]
    [Below: credential badge "RESCERT" + "Ancien inspecteur"]

  RIGHT:
    [H2] "Benoit Dezso"
    [Subtitle, text-amber] "Ancien inspecteur en conformite electrique"
    [2-3 paragraphs of founder story]
    [Link: "En savoir plus sur notre histoire" -> /a-propos/]

  Enhancement: Add a pull-quote in the heading font, large, amber border-left:
  "Je ne fais aucune installation que je ne signerais pas en tant qu'inspecteur."
```

### Section 6: Pieges Preview -- "What Others Won't Tell You"
```
[bg-white, section-padding]

[H2, centered] "Les pieges que d'autres ne vous montrent pas"
[Subtitle] "En tant qu'ancien inspecteur, Benoit a vu les erreurs les plus frequentes."

[3 piege cards in a row:]
  Each: severity badge (critique/important/attention) + title + 2-line excerpt
  CTA line: "Voir les 10 pieges" -> /pieges-a-eviter/

[Below: Lead magnet callout]
  "Telechargez notre guide gratuit : les 7 pieges a eviter avant de signer"
  -> /guide-pieges-a-eviter/
```

### Section 7: Comparison Table -- "Us vs. The Market"
```
[bg-white, section-padding]

[H2, centered] "Ce qui nous differencie"

[2-column comparison table:]
  LEFT column header: "Pratique courante" (text-steel, bg-ivory)
  RIGHT column header: "Be'energies" (text-amber, bg-midnight)

  Rows: 6-8 comparison points
  Be'energies column: CheckIcon in amber for each
  Market column: X or minus icon in steel

  Enhancement: amber left border on the "Be'energies" column
```

### Section 8: Testimonials -- "Proof From the Field"
```
[bg-ivory, section-padding]

[H2, centered] "Ils nous ont fait confiance"

[3 testimonial cards in a row:]
  Each: 5 stars + quote + name + city
  Featured testimonials with measurable outcomes first
  (Marie D. facture reduction, Catherine R. conformite, Laurent M. recharge)

  Enhancement: Add outcome badge below each quote
  e.g., "Facture: 185 -> 38 EUR/mois" in success badge
```

### Section 9: Process Timeline
```
[bg-white, section-padding]

[H2, centered] "Comment ca se passe"

[4-step horizontal timeline:]
  1. Contact -> 2. Visite technique -> 3. Proposition -> 4. Installation

  Each step: numbered circle (amber) + title + description
  Connected by dashed/solid lines between steps

  Enhancement: Below the timeline, add reassurance:
  "Pas d'acompte avant la visite. Pas d'engagement avant le devis."
  in a centered text-steel italic line
```

### Section 10: Realizations Grid -- "Real Projects, Real Numbers"
```
[bg-ivory, section-padding]

[H2, centered] "Nos realisations sur le terrain"
[Subtitle] "X projets documentes a travers la Belgique"

[4 realization cards, 2x2 grid:]
  Each: image + city + service type + key figure
  Priority: show diversity (1 PV, 1 battery, 1 borne, 1 conformite/correction)

[CTA: "Voir toutes les realisations" -> /realisations/]
```

### Section 11: FAQ
```
[bg-white, section-padding]

[H2, centered] "Questions frequentes"

[5 accordion items from homepageFaq]
  FAQPage schema auto-generated

[Below: "Vous avez une autre question ?" + link to /contact/]
```

### Section 12: Blog Preview
```
[bg-ivory, section-padding]

[H2, centered] "Articles recents"

[3 latest blog cards:]
  Each: title + excerpt + date + reading time + tag badges
  Link to full article

[CTA: "Tous les articles" -> /blog/]
```

### Section 13: Final CTA -- "The Close"
```
[bg-midnight, section-padding, full-width]

[H2, text-white, centered]
"Diagnostic energetique gratuit"

[Description, text-silver]
"Benoit analyse votre consommation, votre toiture, et votre reseau electrique.
 Vous recevez un calcul de rentabilite reel. Pas une estimation generique."

[PRIMARY BUTTON: "Demander mon diagnostic gratuit" -> /contact/]

Enhancement: Add a small trust line below the button:
"487 diagnostics realises -- reponse sous 24h" in text-xs text-steel
```

---

## Implementation Priority

1. **Integrate logo SVG** into header (replace text-only logo)
2. **Add cyan accent** to CSS variables and @theme block
3. **Add monospace data styling** utility class
4. **Refine hero** with split layout and real photography
5. **Add diagonal hatch pattern** as reusable CSS background
6. **Enhance card hover states** with shadow-lg and border-amber
7. **Add outcome badges** to testimonial cards
8. **Add source citations** below data sections
9. **Create "Inspector Insight" callout** component
10. **Enhance comparison table** with amber column highlight
