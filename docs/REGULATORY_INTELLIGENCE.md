# Regulatory & Customer Objection Analysis: Photovoltaic in Wallonia (2026)

> Source of truth for all regulatory content on the Be'energies website.
> Last updated: 2026-03-06
> Must be reviewed quarterly (tariffs, primes, and rules change).

---

## 1. The Regulatory Landscape -- What Changed and Where We Are

### Timeline of Key Changes

```
Oct 2020    Prosumer tariff introduced (100% compensated by regional prime)
2022-2023   Compensation reduced to 54.27%
Dec 2023    Last date for new installations to qualify for compensation mechanism
Jan 2024    New installations require smart meter, no compensation, pay real consumption
Jan 2024    Prosumer tariff compensation drops to 0% -- full cost for existing owners
2025        Smart meter rollout accelerates (150,000 installed by ORES alone)
Jan 2026    New IMPACT tariff (tri-hourly) enters force
Jan 2026    Bi-hourly tariff hours change (off-peak now 22h-07h + 11h-17h)
2026-2029   Prosumer tariff increases +3% to +9% depending on GRD
Dec 2029    Full smart meter deployment deadline (1.5M meters)
Dec 2030    ALL compensation ends, even for pre-2024 installations
```

### The Two Regimes (Critical Distinction)

**Regime 1: Pre-2024 installations (with analog or hybrid meter)**
- Compensation continues until December 31, 2030 (per time band)
- Prosumer tariff applies as a flat annual fee based on installed capacity
- Self-consumption still partially masked by the compensation mechanism
- After 2030: everyone moves to Regime 2

**Regime 2: Post-2024 installations (mandatory smart meter)**
- NO prosumer tariff (it doesn't apply)
- You pay only for energy actually withdrawn from the grid
- You can sell surplus at an injection tariff (varies by supplier)
- Self-consumption is directly rewarded -- every kWh you use yourself saves ~38c, vs selling surplus for 1-6c

**This distinction is the #1 thing the current site fails to explain.** Most homeowners don't know which regime applies to them, and competitors blur them together.

---

## 2. Prosumer Tariff -- Real Numbers for 2026

### Cost by Grid Operator (TTC)

| GRD | EUR/kWe/year | 5 kWp system | 10 kWp system |
|-----|-------------|-------------|---------------|
| ORES | 85.84 | ~429 EUR/year | ~858 EUR/year |
| RESA | 84.22 | ~421 EUR/year | ~842 EUR/year |
| AIEG | 81.04 | ~405 EUR/year | ~810 EUR/year |
| AIESH | 99.29 | ~496 EUR/year | ~993 EUR/year |
| REW | 93.00 | ~465 EUR/year | ~930 EUR/year |

### The CWaPE Assumption
The tariff assumes 37.76% self-consumption. Meaning: CWaPE assumes you use 37.76% of your production directly, and the remaining 62.24% uses the grid (inject then withdraw). You pay the tariff on your installed capacity regardless of your actual self-consumption rate.

### 2026-2029 Outlook
CWaPE approved distribution tariff increases on June 26, 2025:
- Overall distribution tariff: **+13%** over the period
- Prosumer capacitive tariff: **+3% to +9%** depending on GRD
- Average household distribution cost in 2026: ~327 EUR HTVA/year (+8% vs 2025)

---

## 3. Smart Meters -- Status and Impact

### Deployment Numbers (February 2026)

| Operator | Meters installed | % of network | Prosumers equipped |
|----------|-----------------|-------------|-------------------|
| ORES | 429,272 | 28% | ~280,000 (of 300,000) |
| RESA | 111,457 | -- | 22,148 (of 88,353) |
| **Total** | **~540,000+** | -- | ~302,000 |

### What Smart Meters Mean for Solar Owners

**For pre-2024 installations:** Even with a smart meter, compensation is maintained until December 31, 2030. The smart meter records more precise data but the financial treatment stays the same.

**For post-2024 installations:** The smart meter is mandatory. It separately records:
- Energy withdrawn from the grid (you pay for this)
- Energy injected into the grid (you can sell this)
- Self-consumed energy (free -- this is where the real value is)

### The IMPACT Tariff (New in 2026)

Since January 1, 2026, smart meter owners can opt for three-hourly pricing:

| Period | Hours | Cost Level | Solar Relevance |
|--------|-------|------------|-----------------|
| ECO | 01:00-07:00, 11:00-17:00 | Cheapest | Solar production peak aligns with ECO hours |
| MEDIUM | 07:00-11:00, 22:00-01:00 | Mid | Morning ramp-up, late evening |
| PIC | 17:00-22:00 | Most expensive | Post-solar, high demand -- use battery here |

**CWaPE simulation:** 14% savings with adapted consumption patterns, up to 28% with EV.

**BeProsumer warning (March 2026):** For most of ~350,000 prosumers still under compensation, switching to tri-hourly or "hybrid" supplier formulas carries risks. Hidden balancing taxes and unclear sub-pricing within tariff categories can undermine the 1:1 compensation principle. A straightforward bi-hourly tariff remains safer for most.

---

## 4. Injection Tariffs -- The Hidden Variable

When you sell surplus electricity back to the grid, what do you actually get?

### Injection Rates (March 2026)

| Supplier | c EUR/kWh |
|----------|-----------|
| Energie.be | 5.58 |
| Trevion Flex | 4.63 |
| EnergyVision | 4.00 |
| Frank Energie | 3.86 |
| Engie | 3.69 |
| Octa+ | 2.93 |
| Luminus | 2.37-2.89 |
| TotalEnergies | 0.93 |
| Mega | 0.82 |

### The Critical Math

- Average purchase price of electricity: **~38 c/kWh**
- Best injection tariff: **5.58 c/kWh** (Energie.be)
- Worst injection tariff: **0.82 c/kWh** (Mega)

**Every kWh you self-consume saves you ~38c. Every kWh you inject earns you 1-6c.** Self-consumed electricity is worth **7x to 46x more** than injected electricity. This is the single most important number for the website.

**Content implication:** This reframes the entire solar conversation from "selling electricity" to "avoiding buying electricity." The installer who communicates this clearly wins the trust war.

---

## 5. Available Subsidies and Financial Incentives (March 2026)

### What No Longer Exists
- Prime de compensation du tarif prosumer (ended 2024)
- Prime compteur double flux (ended 2024)
- Qualiwatt (ended years ago)
- Green certificates for new residential PV <10 kWc (ended)

### What Still Exists

| Incentive | Details | Savings |
|-----------|---------|---------|
| **TVA 6%** (instead of 21%) | Homes aged 10+ years. Applies to labor + materials. | ~15% on total installation cost |
| **Renopret a taux zero** | Zero-interest loan via SWCS, up to 60,000 EUR over 30 years. Homes 15+ years. **Status uncertain for 2026** (suspended Jul-Dec 2025). | Eliminates interest costs |
| **Communal primes** | Some communes offer small subsidies (~150 EUR). Varies by location. | Minor |
| **Brussels green certificates** | New installations in Brussels still qualify. ~500 EUR/year for 5 kWc over 10 years. | ~5,000 EUR over 10 years |

### The Real Financial Case (No Subsidies Needed)

| Parameter | Value |
|-----------|-------|
| Typical 12-panel system (4.7 kWc) | ~9,000-10,000 EUR TTC (with 6% TVA) |
| Annual electricity savings (50% self-consumption) | 1,200-1,600 EUR |
| Prosumer tariff (ORES, 5 kWp, pre-2024) | -430 EUR/year |
| Net annual savings | ~800-1,200 EUR/year |
| Payback period | **5-7 years** |
| System lifespan | 25-30 years |
| Total return over lifetime | ~20,000-35,000 EUR |
| Annual ROI | **~12%** |

**Content implication:** Solar doesn't need subsidies to be profitable. The ROI is comparable to the best financial products available to households. Frame it as an investment comparison, not a subsidy discussion.

---

## 6. Customer Fears -- Ranked by Impact on Conversion

### Fear 1: "Solar panels are no longer profitable" (HIGHEST IMPACT)

**Why they think this:** End of subsidies + prosumer tariff + end of spinning meter = "the government keeps changing the deal."

**The truth:** Installation costs dropped 5x in 10 years. A 12-panel system at ~9,700 EUR pays itself back in 5-7 years and generates ~20,000-35,000 EUR in lifetime savings. ROI of ~12% annually -- better than most investments.

**How Benoit should address it:** "En tant qu'ancien inspecteur, j'ai vu des installations surdimensionnees qui ne seront jamais rentables. Je dimensionne votre installation pour maximiser l'autoconsommation, pas pour injecter du surplus a perte."

---

### Fear 2: "The prosumer tariff is a hidden tax" (HIGH IMPACT)

**Why they think this:** It appeared after they installed. It increases every year. It feels like punishment for going solar.

**The truth:** It's a network usage fee, not a tax. It compensates for grid maintenance costs that non-solar households were bearing alone. For post-2024 installations with smart meters, it doesn't even apply.

**How Benoit should address it:** Transparent table with exact 2026 amounts per GRD. Show the math: even with the prosumer tariff, net savings remain 800-1,200 EUR/year.

---

### Fear 3: "The end of the spinning meter kills solar" (HIGH IMPACT)

**Why they think this:** The spinning meter was the symbol of solar profitability. Its end feels like the end of the deal.

**The truth:** The spinning meter was an anomaly that gave free grid storage. The new system is more transparent and actually rewards real self-consumption. Pre-2024 installations keep compensation until 2030. Post-2024 installations pay only for what they actually withdraw.

**How Benoit should address it:** "Le compteur qui tourne a l'envers etait un avantage temporaire, pas le fondement de la rentabilite. Le vrai avantage, c'est l'autoconsommation : chaque kWh que vous consommez vous-meme vous fait economiser 38 centimes au lieu de vendre a 1-6 centimes."

---

### Fear 4: "Scam installers and false promises" (MEDIUM-HIGH IMPACT)

**Why they think this:** Well-founded. The Walloon government has issued official warnings. Test-Achats regularly reports. "Victimes du Photovoltaique" association exists for fraud victims.

**Common scam patterns:**
- Prices 2-3x above market
- Unrealistic payback promises (1-2 years vs realistic 5-7)
- "Free installation" hiding predatory financing
- "Zero electricity bill" guarantees
- Oversized battery upselling
- No pre-installation site visit
- Aggressive door-to-door/phone sales

**How Benoit should address it:** This is the CORE of the "Pieges a eviter" content. "J'ai inspecte des centaines d'installations. Voici les 7 signaux d'alarme que j'ai identifies..." His inspection background makes this uniquely credible.

---

### Fear 5: "Inverter disconnections from grid overvoltage" (MEDIUM IMPACT)

**Why they think this:** It's a real and growing problem. When solar production peaks (sunny midday), massive grid injection causes overvoltage. Inverters disconnect at 253V (sustained) or 264.5V (instantaneous), causing 15-minute production losses.

**The truth:** This is a grid infrastructure problem, not a panel problem. The CWaPE is preparing an indemnification scheme based on smart meter data.

**How Benoit should address it:** "Quand je dimensionne votre installation, je verifie la tension du reseau local. C'est une etape que beaucoup d'installateurs sautent. Si le reseau est sature, je vous le dis avant de signer."

---

### Fear 6: "Battery storage is not worth it" (MEDIUM IMPACT)

**Why they think this:** The math is marginal. A 7 kWh battery costs ~7,000 EUR and saves 220-600 EUR/year. Payback: 10-15 years vs 12-15 year lifespan.

**The truth:** For pre-2024 installations with compensation until 2030, a battery is generally NOT justified (the grid acts as free virtual storage). For post-2024 installations, battery ROI improves with EV ownership, heat pump usage, or IMPACT tariff optimization.

**How Benoit should address it:** Honest dimensioning advice. "Je ne vous vends pas une batterie si elle n'est pas rentable pour votre situation. Voici le calcul."

---

### Fear 7: "Regulations keep changing" (LOW-MEDIUM IMPACT)

**Why they think this:** Qualiwatt ended. Green certificates reduced. Prosumer tariff appeared. Spinning meter ended. Compensation reduced. It's a pattern of erosion.

**The truth:** The fundamental economics of solar (cheap panels, expensive electricity) are getting BETTER, not worse. Subsidies disappear because they're no longer needed.

**How Benoit should address it:** Timeline visualization showing both regulatory changes AND cost reductions. The net trend is positive.

---

## 7. How Competitors Handle This (And Where They Fail)

### Competitor Content Audit

| Competitor | Prosumer Explained | Smart Meter Content | "Still Worth It?" | Fear Addressed | Last Updated |
|-----------|-------------------|--------------------|--------------------|----------------|-------------|
| **CB Energy** | Basic, outdated | No | No | No | Feb 2023 |
| **Vectura** | Mentions in blog | End of spinning meter article | Partially | Partially | 2023-2024 |
| **Energreen** | Knowledge base, basic | FAQ entry | No | No | Unknown |
| **Green SA** | No | No | No | No | N/A |
| **Reno.energy** | Best: IMPACT tariff explained | Yes | Partially | No | Jan 2026 |

### What NO Competitor Has

1. A comprehensive, March 2026-current "Is solar still worth it?" page with real numbers
2. An injection tariff comparison table (7x spread between best and worst supplier)
3. A worked financial example for a typical Walloon household
4. A clear explanation of the two regimes (pre-2024 vs post-2024)
5. An honest treatment of when batteries ARE and ARE NOT worth it
6. The IMPACT tariff explained with solar optimization tips
7. A regulatory timeline visualization
8. Content tied to a founder's inspection expertise

**This is a content fortress waiting to be built. First mover takes the entire search territory.**

---

## 8. Where This Content Should Appear on the New Site

### Homepage

**What appears:** A brief trust block, not the full regulatory breakdown.

```
Section: "Le photovoltaique en 2026 : toujours rentable, voici pourquoi"
- One stat: "Retour sur investissement moyen : 5-7 ans, soit ~12% par an"
- One quote from Benoit: "Les subventions ont disparu parce que les panneaux
  sont devenus 5x moins chers. Le solaire n'a jamais ete aussi rentable."
- CTA: "Decouvrir le vrai calcul" -> links to service page
```

**Format:** 3-column stat block (payback period / ROI % / system lifespan) + founder quote + CTA. No more than 4 lines of text. This is a hook, not the explanation.

---

### Photovoltaic Service Page (`/services/panneaux-photovoltaiques/`)

**This is the primary regulatory content page.** It must be the most complete, honest, and current resource on solar profitability in Wallonia.

**Required sections:**

1. **Hero + founder credibility**
   - "Panneaux photovoltaiques en Wallonie : le guide honnete par un ancien inspecteur"

2. **"Est-ce encore rentable en 2026?" section**
   - Worked financial example: 4.7 kWc system, 4-person household
   - Cost: ~9,700 EUR TTC (with 6% TVA)
   - Annual savings: 1,200-1,600 EUR
   - Prosumer tariff impact: -430 EUR (if applicable)
   - Net payback: 5-7 years
   - Lifetime return: 20,000-35,000 EUR
   - ROI comparison: ~12% vs savings account (~2%) vs stock market (~7%)

3. **"Les deux regimes" section**
   - Clear table: pre-2024 vs post-2024
   - Compensation mechanism explained
   - When each regime applies
   - 2030 deadline for compensation end

4. **"Tarif prosumer demystifie" section**
   - Definition (network fee, not tax)
   - 2026 amounts by GRD (table)
   - CWaPE assumptions explained
   - How smart meter eliminates fixed fee

5. **"L'autoconsommation, la vraie rentabilite" section**
   - Self-consumed = 38c saved vs injected = 1-6c earned
   - The 7x-46x multiplier explained
   - Tips to maximize self-consumption
   - When a battery makes sense (and when it doesn't)

6. **"Tarif IMPACT : ce que ca change" section**
   - ECO/MEDIUM/PIC hours table
   - How solar production aligns with ECO hours
   - Battery strategy for PIC hours
   - BeProsumer warning about premature switching

7. **Injection tariff comparison table**
   - Full supplier comparison (Energie.be 5.58c to Mega 0.82c)
   - Recommendation: choose supplier based on injection rate, not just purchase price

8. **"Pieges a eviter" section (service-specific)**
   - 3 traps: oversized systems, unrealistic promises, no-site-visit quotes
   - Each with Benoit's inspector perspective
   - Link to pillar page

9. **FAQ section (8-12 questions, with FAQPage schema)**
   - "Les panneaux solaires sont-ils encore rentables en Wallonie en 2026?"
   - "Qu'est-ce que le tarif prosumer et combien ca coute?"
   - "Le compteur qui tourne a l'envers, c'est fini?"
   - "Faut-il une batterie avec des panneaux solaires?"
   - "Quelles primes existent encore pour le photovoltaique en Wallonie?"
   - "Quel est le tarif IMPACT et comment en profiter?"
   - "Combien de panneaux faut-il pour une maison de 4 personnes?"
   - "Que se passe-t-il si mon onduleur decroche?"
   - "Comment choisir un bon installateur?"
   - "Mon installation est-elle conforme aux normes electriques?"

10. **CTA: "Diagnostic energetique gratuit"**
    - "Benoit analyse votre situation, votre consommation, et votre reseau. Pas de promesses en l'air : un calcul reel."

**Target word count:** 3,500-4,000 words (matching/beating Vectura's depth).

---

### FAQ System (Global, with FAQPage Schema)

**Dedicated FAQ items that should appear in multiple locations:**

| Question | Primary Location | Also On |
|----------|-----------------|---------|
| "Les panneaux solaires sont-ils encore rentables en 2026?" | PV service page | Homepage, local PV pages |
| "Qu'est-ce que le tarif prosumer?" | PV service page | Battery page, blog |
| "Le compteur qui tourne a l'envers, c'est vraiment fini?" | PV service page | Local pages, blog |
| "Faut-il une batterie domestique?" | Battery service page | PV page, local pages |
| "Comment fonctionne le tarif IMPACT?" | PV service page | Blog, battery page |
| "Quelles primes existent encore en 2026?" | PV service page | Local pages (with commune-specific notes) |
| "Comment verifier la conformite de mon installation?" | Compliance service page | PV page, local pages |
| "Que se passe-t-il si mon onduleur decroche?" | PV service page | Blog |
| "Quel fournisseur offre le meilleur tarif d'injection?" | PV service page | Battery page, blog |
| "Mon installation de panneaux solaires a 10 ans, dois-je la mettre a jour?" | Compliance page | PV page, blog |

**Schema requirement:** Every FAQ section must inject `FAQPage` structured data. This is the single highest-value schema type for rich results in this market.

---

### Blog Articles (Priority Regulatory Content)

These articles should be published in the first 4 weeks after launch:

| # | Title | Target Query | Word Count |
|---|-------|-------------|------------|
| 1 | "Panneaux solaires en Wallonie en 2026 : encore rentables ? Le calcul honnete" | "panneaux solaires rentable wallonie 2026" | 2,500 |
| 2 | "Tarif prosumer 2026 : montants par GRD, calcul, et comment le reduire" | "tarif prosumer wallonie 2026 montant" | 2,000 |
| 3 | "Fin du compteur qui tourne a l'envers : ce que ca change vraiment" | "fin compteur qui tourne a l'envers wallonie" | 2,000 |
| 4 | "Tarif IMPACT 2026 : comment en profiter avec vos panneaux solaires" | "tarif IMPACT wallonie panneaux solaires" | 1,800 |
| 5 | "Batterie domestique en Wallonie : quand ca vaut le coup (et quand non)" | "batterie domestique wallonie rentable" | 2,000 |
| 6 | "Les 7 arnaques photovoltaiques les plus courantes en Belgique" | "arnaque panneaux solaires belgique" | 2,500 |
| 7 | "Comparatif tarifs d'injection 2026 : quel fournisseur paye le mieux?" | "tarif injection electricite wallonie comparatif" | 1,500 |
| 8 | "Decrochage onduleur et surtension : que faire quand vos panneaux s'arretent" | "decrochage onduleur surtension wallonie" | 1,800 |

**Each article must include:**
- Benoit's expert perspective (not generic writing)
- Current numbers (2026 tariffs, injection rates)
- CTA toward free diagnostic
- Internal links to service pages + pillar page
- FAQ section with schema (3-5 questions per article)

---

### Local Landing Pages (`/panneaux-photovoltaiques/[city]/`)

**Required regulatory content on each local PV page:**

1. **City-specific profitability hook** (unique per city, not template-swapped):
   - "A [City], les installations photovoltaiques ont un retour sur investissement moyen de 5-7 ans. Voici pourquoi."
   - Mention the relevant GRD (ORES vs RESA vs AIEG) and the exact prosumer tariff
   - If the commune offers a local prime, mention it specifically

2. **Compact regulatory summary** (3-4 bullet points):
   - Current prosumer tariff for the city's GRD
   - Smart meter status (is it already installed in this area?)
   - Available primes (regional + communal if any)
   - Relevant link to the full service page for details

3. **Local FAQ** (3-5 questions with schema, at least 1 regulatory):
   - "Combien coute le tarif prosumer a [City] en 2026?"
   - "Quelles primes sont disponibles pour le photovoltaique a [City]?"
   - "Quel installateur choisir a [City]?" (positions Be'energies with the inspector credential)

4. **CTA with regulatory urgency** (if applicable):
   - For Brussels: "A Bruxelles, vous beneficiez encore de certificats verts (~500 EUR/an pendant 10 ans). Demandez votre diagnostic gratuit."
   - For Wallonia: "Avec le tarif IMPACT, optimiser votre autoconsommation n'a jamais ete aussi important. Benoit analyse votre situation."

---

### "Pieges a Eviter" Pillar Page (`/pieges-a-eviter/`)

**Regulatory traps to include:**

| Trap | Severity | Content |
|------|----------|---------|
| "L'installateur qui promet un retour en 2 ans" | Critique | Realistic payback is 5-7 years. Anyone promising less is lying or using outdated subsidy assumptions. |
| "Le surdimensionnement pour 'vendre plus au reseau'" | Critique | Injection pays 1-6c/kWh. Self-consumption saves 38c/kWh. Oversizing to inject is a trap -- you want to SIZE for autoconsommation. |
| "L'installation 'gratuite' avec financement integre" | Critique | Predatory financing that costs 2-3x the market price. SPF Economie has issued warnings. |
| "Le devis sans visite technique" | Important | Grid voltage, roof orientation, shading, electrical panel condition -- all require on-site assessment. Remote quotes are guesses. |
| "La batterie dont vous n'avez pas besoin" | Important | For pre-2024 installations with compensation until 2030, the grid IS your battery. A 7,000 EUR battery may not pay for itself before its lifespan ends. |
| "L'onduleur sous-dimensionne" | Important | Saves the installer money, costs you production. Benoit has inspected hundreds with this defect. |
| "Le vendeur qui ne parle pas du tarif prosumer" | Attention | If your installer doesn't explain the prosumer tariff and its impact on your return, they're hiding the real numbers. |

---

## 9. Content Maintenance Schedule

This content MUST be updated:

| Trigger | What to Update |
|---------|---------------|
| **January each year** | Prosumer tariff amounts, IMPACT tariff rates, injection rate comparison |
| **CWaPE tariff decisions** | Distribution tariff numbers, prosumer tariff adjustments |
| **Prime changes** | Subsidies page, local page commune primes, service page financial case |
| **Smart meter milestone** | Deployment numbers, coverage percentage |
| **Regulatory announcement** | Blog article within 1 week, service page update within 2 weeks |

**Assign a quarterly review task.** Outdated regulatory content destroys credibility faster than anything else. CB Energy's February 2023 prosumer content is actively harmful to their brand.

---

## 10. Conversion Strategy: How Regulation Becomes a Sales Advantage

### The Reframe

Most competitors treat regulation as a problem to minimize. Be'energies should treat it as a **trust opportunity:**

| Competitor Approach | Be'energies Approach |
|--------------------|---------------------|
| Avoid mentioning prosumer tariff | Show exact amounts, do the math, prove it's still profitable |
| Vaguely say "solar is still worth it" | Provide a worked financial example with real 2026 numbers |
| Don't mention injection tariff variations | Show the full comparison table -- help the customer choose the best supplier |
| Push batteries regardless of situation | Honestly explain when a battery IS and ISN'T worth it |
| Use outdated content (2023 numbers) | Update quarterly, display "last updated" date prominently |
| Hide behind "request a quote" | Show indicative pricing, then offer free diagnostic for precision |

### The Benoit Advantage

Every piece of regulatory content should connect back to Benoit's inspection background:

- "J'ai inspecte des installations ou l'onduleur etait sous-dimensionne de 30%. L'installateur avait economise 400 EUR. Le client perdait 1,200 EUR par an."
- "En tant qu'ancien inspecteur, je sais exactement ce que le controleur va verifier. Votre installation sera conforme du premier coup."
- "J'ai vu des contrats de 'panneaux gratuits' qui coutaient le double du prix du marche. Voici comment les reperer."

This is not marketing. This is a former regulator explaining the system from the inside. Nobody else can do this.

---

## Sources

### Official / Regulatory
- [CWaPE - Tarifs prosumer](https://www.cwape.be/node/151)
- [Wallonie.be - S'informer sur le tarif prosumer](https://www.wallonie.be/fr/demarches/photovoltaique-sinformer-sur-le-tarif-prosumer)
- [Wallonie.be - Fin du compteur qui tourne a l'envers](https://www.wallonie.be/fr/actualites/panneaux-photovoltaiques-fin-du-compteur-qui-tourne-lenvers)
- [Wallonie.be - Le bihoraire change d'horaire (Jan 2026)](https://www.wallonie.be/fr/actualites/le-1er-janvier-2026-le-bihoraire-change-dhoraire)
- [Wallonie.be - Attention aux arnaques photovoltaiques](https://www.wallonie.be/fr/actualites/photovoltaique-attention-aux-arnaques)
- [ORES - Prosumer a partir de 2024](https://www.ores.be/particulier/prosumer-a-partir-de-2024)
- [ORES - Tarifs de distribution 2026](https://www.ores.be/comprendre-ma-facture/tarifs-distribution-2026)
- [Energie Wallonie - Fini la compensation, vive l'autoconsommation](https://energie.wallonie.be/fr/20-10-2023-photovoltaique-fini-la-compensation-vive-l-autoconsommation.html?IDD=172713&IDC=8187)

### Consumer / Analysis
- [Test-Achats - Tarif prosumer](https://www.test-achats.be/maison-energie/energie-renouvelable/dossier/tarif-prosumer)
- [Test-Achats - Panneaux solaires toujours rentables](https://www.test-achats.be/maison-energie/energie-renouvelable/news/panneaux-solaires-toujour-rentables)
- [Test-Achats - Fin compteur qui tourne a l'envers](https://www.test-achats.be/maison-energie/energie-renouvelable/news/fin-compteur-qui-tourne-a-l-envers-wallonie)
- [Test-Achats - Batteries et decrochage onduleur](https://www.test-achats.be/maison-energie/energie-renouvelable/news/batteries-eviter-decrochage-onduleur-wallonie-fausse-bonne-idee)
- [BeProsumer - Tarifs 2026-2029](https://www.beprosumer.be/2025/07/02/tarifs-de-distribution-2026-2029/)
- [BeProsumer - Compteurs communicants 2026](https://www.beprosumer.be/2026/02/24/etat-des-lieux-compteurs-communicants-wallonie-2026/)
- [BeProsumer - Bihoraire 2026 et tarif IMPACT](https://www.beprosumer.be/2026/03/03/bihoraire-2026-tarif-impact/)
- [CallMePower - Tarif prosumer 2026](https://callmepower.be/fr/energie/guides/tarifs/prosumer)
- [OserComparer - Tarifs d'injection Mars 2026](https://www.osercomparer.be/energie/injection)

### Industry / Media
- [RTBF - Compteur intelligent en Wallonie](https://www.rtbf.be/article/quand-est-ce-que-les-wallons-auront-leur-compteur-electrique-intelligent-11602997)
- [RTBF - Surtensions et decrochages onduleurs](https://www.rtbf.be/article/nouvelle-tuile-pour-le-photovoltaique-les-surtensions-sur-le-reseau-paralysent-certaines-installations-10850410)
- [Luminus - Panneaux solaires rentables en 2026](https://lumiworld.luminus.be/fr/investissements-malins/les-panneaux-solaires-sont-ils-rentables-en-2026/)
- [Lisa Energie - Rentabilite Wallonie 2026](https://www.lisaenergie.be/guides-rentabilite-panneaux-solaires-en-wallonie-2026)

### Competitor Content (for gap analysis)
- [CB Energy - Tarif prosumer 2023 (outdated)](https://cb-energy-photovoltaique.be/tarif-prosumer-ce-qui-change-en-wallonie-en-2023/)
- [Vectura - Compteur qui tourne a l'envers](https://vectura.be/compteur-qui-tourne-a-lenvers-en-wallonie/)
- [Reno.energy - Tarifs electricite 2026](https://reno.energy/blog/actu-energie/tarifs-electricite-2026-en-wallonie/)
