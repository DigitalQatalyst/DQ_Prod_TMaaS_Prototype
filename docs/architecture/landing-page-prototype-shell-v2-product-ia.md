# Feature: Landing Page — Feature Specific (v2 Product IA)

> **Draft duplicate.** Not yet implemented. Active build follows v1: `landing-page-prototype-shell.md`. Archive: `landing-page-prototype-shell-v1-corp-mirror.md`.

## 1. Platform Context

- Platform: DQ Digital Experience Platform (DXP)
- Type: Generalised
- Prototype Stage: Feature Specific
- Stage Coverage: Stage 00
- Industry: Cross-industry
- Solution Outcomes:
  - Validate the primary entry point for unauthenticated Exploring Users.
  - Communicate the TMaaS value proposition and service model without requiring sign-in.
  - Drive traffic to the Transformation Marketplace and Contact Us enquiry flow.
  - Share DQ parent-brand tokens and components while presenting a **product landing**, not a corp-web homepage reskin.

## 2. Build Approach & References

- Mode: Evolution (IA revision from v1 corp-mirror layout)
- Reference Builds (Internal):
  - **Design system:** `DQ_CORPWEB_PROTOTYPE` (tokens, mesh, buttons, cards, footer patterns)
  - **Product page pattern:** `DQ_CORPWEB_PROTOTYPE` product detail (`ProductHero`, badge row, back-to-ecosystem link) — for sub-brand treatment, not homepage section stack
- Reference Builds (External): N/A
- Base Shell: `IndexTraditional` page composition (`/`)
- Input Documents: 26.05_tmaas_complete_brs_v2.md (F-S0-01), FEATURE_FLAGS.md, landing components under `src/components/site/landing/`

### 2.1 Design Strategy — Branded House

| Layer                                                     | Align with corp web? | Notes                                            |
| --------------------------------------------------------- | -------------------- | ------------------------------------------------ |
| Tokens (colour, type, spacing, radii)                     | **Yes**              | DQ Orange, DQ Navy, Plus Jakarta Sans, mesh vars |
| Components (buttons, cards, mesh, marquee)                | **Yes**              | Reuse `MeshSection`, pill CTAs, glass cards      |
| Page section stack                                        | **No**               | Product journey, not corp credibility homepage   |
| Hero visual & primary CTA                                 | **No**               | Marketplace mockup; orange primary CTA           |
| Corp-only sections (team, FAQ, framework, ecosystem grid) | **No**               | Remain on `DQ_CORPWEB_PROTOTYPE` only            |

### 2.2 Section Order Change (v1 → v2)

| v1 (corp-mirror) | v2 (product IA)         | Rationale                                         |
| ---------------- | ----------------------- | ------------------------------------------------- |
| Hero             | Hero (enhanced)         | Add product badge + optional DQ lineage link      |
| Trusted By       | Marketplace Preview     | Lead with product capability before social proof  |
| Challenge        | Trusted By (compact)    | Social proof supports, does not open, the story   |
| Solution         | Why TMaaS               | Single dark problem section; product-framed pains |
| Offerings        | How It Works            | TMaaS journey (Discover → Evaluate → Engage)      |
| Outcomes         | Service Categories      | Marketplace category entry points                 |
| Stats            | Client Outcomes         | Product-specific proof metrics                    |
| Closing CTA      | DQ Lineage + Stats band | Parent trust without duplicating corp homepage    |
| —                | Closing CTA             | Marketplace-led conversion                        |

## 3. DevOps

- Prototype Tool: React / Vite (local prototype repo)
- Prototype Repo: DQ_Prod_TMaaS_Prototype
- Prototype Link: <fill after deploy>

## 4. Specification

### 4.1 Brand & Visual System

- Design System Reference: DQ Corp Web Tokens (shared with `DQ_CORPWEB_PROTOTYPE`)
- Product differentiation (within shared system):
  - TMaaS logo in navbar; optional mono product code badge in hero (`TMaaS · Managed Transformation`)
  - Hero primary CTA: **orange** (`bg-dq-orange`) — marketplace conversion; corp homepage uses navy primary
  - Hero visual: marketplace dashboard mockup (product signature; not corp ecosystem pathway card)
  - One dark mesh section only (`Why TMaaS`); avoid alternating dark/light rhythm that mirrors corp homepage
- Colours:
  - Primary accent: DQ Orange `#FB5535` (hover: `#E04020`)
  - Primary text / brand: DQ Navy `#030F35`
  - Background: `#FFFFFF`
  - Surface alternate: Gray 50 (`oklch(0.98 0.005 264)`)
  - Text primary: DQ Navy, Text body: Gray 600, Text muted: Gray 400–500
  - Border: Gray 100–200 (`#E5E7EB` range)
  - Dark section surfaces: Navy mesh (`--mesh-hero-dark`), CTA mesh (`--mesh-cta-orange`)
  - Glass / overlay: `white/60`, `white/10`, `white/5` with backdrop blur on secondary actions
- Typography:
  - UI font: **Plus Jakarta Sans** via Tailwind `font-sans`, weights 400–700
  - Mono font: `font-mono` — eyebrows, step numbers, metric tags, mockup chrome, product badge
  - Eyebrow pattern: 10–11px, uppercase, wide letter-spacing, accent colour
  - Page headings: 4xl–8xl responsive scale, semibold, tight tracking
- Radii: Section cards 16px (`rounded-2xl`), icon containers 12px (`rounded-xl`), buttons pill (`rounded-full`)
- Spacing: Responsive horizontal padding `px-5` → `md:px-8` → `lg:px-10`; section vertical rhythm `py-12` to `py-24`
- Effects:
  - Mesh gradient backgrounds via `MeshSection` variants: `heroLight`, `heroDark`, `ctaOrange`
  - Optional hero grid overlay on light mesh sections
  - Orange glow on primary CTAs (`--glow-orange-md`)
  - Fade-in-up entrance animations on hero content (staggered delays)
  - Infinite horizontal marquee for trust logos (`marquee-track`, ~35s cycle)
- Logo: TMaaS logo component, left-aligned in top bar; links to `/`

### 4.2 Layout Shell

- Viewport target: Desktop-first, responsive from mobile through 1440px+
- Top bar (Landing Navbar): 64px (`h-16`), sticky, white background, bottom border Gray 100
  - Left: Logo + primary nav links (desktop `lg+`)
  - Right: Contact CTA (feature-flagged), mobile menu toggle (`< lg`)
  - Optional: subtle external link `DigitalQatalyst` → corp web URL (new tab); not in primary nav
- Left sidebar: None
- Main content: Full-width stacked sections, max content width 1200px (`max-w-[1200px]`) or 1280px (`max-w-7xl`) for hero / marketplace preview
- Footer: Full-width, white, top border, four-column grid on desktop collapsing to single column on mobile
- Scroll anchors: `#marketplace-preview`, `#how-it-works`, `#categories`, `#outcomes`

### 4.3 Personas

| #   | Name           | Role                             | Landing Page | Nav Scope                                                                      |
| --- | -------------- | -------------------------------- | ------------ | ------------------------------------------------------------------------------ |
| 1   | Exploring User | Unregistered / anonymous visitor | `/`          | Public routes only: Landing, Marketplace (if enabled), Contact Us (if enabled) |

### 4.4 Navigation Structure

- Global (feature-flag controlled)
  - Logo → `/`
  - Marketplace → `/marketplace` (flag: `marketplace`)
  - Contact Us → `/contact` (flag: `contactUs`; navbar CTA + repeated section CTAs)
- Persona-restricted items: Log in, Get Started, sign-in, dashboard, cart, onboarding, and authenticated workspace routes are not exposed on the landing page in MVP
- Active state: Current route highlighted in accent colour
- Mobile: Hamburger opens full-screen overlay menu below header with the same flag-filtered links

### 4.5 Feature Specification

- Screens in scope this iteration: `/` (route flag: `homepage`)
- Demo Storyline: Visitor lands on TMaaS product homepage, sees the marketplace proposition immediately, understands why TMaaS exists and how the journey works, browses service categories, reviews outcomes, and converts via Marketplace or Contact
- Components per screen:

| Screen | Components                  | Primary Action                                     | States Required                                     |
| ------ | --------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| `/`    | Landing Navbar              | Navigate / open mobile menu                        | Default / Mobile menu open / Active route highlight |
| `/`    | Hero Section                | Primary CTA → Marketplace; Secondary CTA → Contact | Default (animated entrance)                         |
| `/`    | Hero Dashboard Mockup       | N/A (decorative)                                   | Default                                             |
| `/`    | Marketplace Preview Section | Category chip or card → Marketplace                | Default / Hover / Focus-visible                     |
| `/`    | Trusted By Section          | N/A                                                | Default (marquee animation)                         |
| `/`    | Why TMaaS Section           | Inline link → Marketplace                          | Default                                             |
| `/`    | How It Works Section        | Per-step link → Marketplace or Contact             | Default / Hover on links                            |
| `/`    | Service Categories Section  | Card click → Marketplace                           | Default / Hover / Focus-visible                     |
| `/`    | Client Outcomes Section     | N/A                                                | Default / Card hover                                |
| `/`    | DQ Lineage + Stats Band     | External link → DQ corp site                       | Default                                             |
| `/`    | Closing CTA Section         | Primary CTA → Marketplace; Secondary CTA → Contact | Default                                             |
| `/`    | Footer                      | External DQ links; internal flag-gated links       | Default                                             |

#### 4.5.1 Hero Section

- Layout: Two-column grid on `lg+` (copy left, mockup right); single column stacked on smaller viewports
- Content structure (no fixed copy):
  - Product badge row: mono code + status chip (e.g. `TMaaS · Live`); pattern from corp web `ProductBadgeRow`
  - Optional lineage link: `Part of DigitalQatalyst` → external corp URL (new tab)
  - Eyebrow label (mono, accent)
  - Primary headline (two lines; second line in accent colour)
  - Supporting paragraph (max-width constrained; marketplace- and service-led)
  - Action row: primary orange pill → Marketplace; secondary glass pill → Contact
- Visual: `MeshSection` variant `heroLight` with grid overlay

#### 4.5.2 Hero Dashboard Mockup

- Decorative 3D-perspective card simulating a marketplace catalogue UI
- Contains: sidebar icon rail, header with mono label + title, three mini stat tiles, featured service list (3 items), goal filter chips (3 items)
- Non-interactive in prototype; no navigation on click

#### 4.5.3 Marketplace Preview Section (`#marketplace-preview`)

- Background: Gray 50
- Purpose: Show product substance before generic trust — **TMaaS-specific; no corp web equivalent**
- Eyebrow + section headline (marketplace-led)
- Layout: horizontal category chips on mobile; `md+` grid of 3–4 featured category tiles with icon, label, service count placeholder
- Each tile/chip routes to `/marketplace` (optionally with category query in future; prototype: `/marketplace` only)
- Footer row: text link `Browse all services →` → `/marketplace`
- Hover: border accent, subtle shadow lift

#### 4.5.4 Trusted By Section

- Compact band: white background, border-y Gray 100
- Eyebrow label centred above marquee
- Horizontally scrolling logo strip (org name placeholders; duplicated for seamless loop)
- Hover: individual logo text darkens to navy
- Positioned **after** marketplace preview so trust reinforces product credibility

#### 4.5.5 Why TMaaS Section (`#why`)

- Visual: `MeshSection` variant `heroDark` with subtle grid mask overlay — **only dark narrative section on page**
- Content structure:
  - Eyebrow label (product-framed; not corp "Why DQ exists" copy)
  - Section headline focused on transformation **service discovery and delivery** gaps
  - Supporting paragraph
  - Three equal-width cards (icon, card title, card body) on `md+` — pains specific to buying/managing transformation services, not generic DT failure stats
  - Closing line with inline link → `/marketplace`
- Card style: glass border (`white/10`), semi-transparent background, icon in accent-tinted container
- Replaces v1 separate Challenge section; does not duplicate corp web Problem section copy

#### 4.5.6 How It Works Section (`#how-it-works`)

- White background section
- Eyebrow: `The TMaaS Journey` (or equivalent product label)
- Section headline: journey-oriented, not methodology-oriented (contrast corp web "The DQ Method")
- Three step columns (`sm`: 2-col, `lg`: 3-col), each containing:
  - Large faded step number
  - Suite label (mono eyebrow): Discover / Evaluate / Engage
  - Step title
  - Step description (marketplace- and engagement-specific)
  - Text link with arrow → Marketplace (steps 1–2) or Contact (step 3)
- Optional: horizontal connector line between steps on `lg+` (corp web pattern acceptable here as shared component vocabulary)

#### 4.5.7 Service Categories Section (`#categories`)

- Background: Gray 50
- Eyebrow + section headline
- Grid of five clickable cards (`md`: 2-col, `lg`: 3-col) — each card: icon, category title, short description, trailing arrow
- All cards route to `/marketplace`
- Hover: border accent, shadow lift, icon container inverts to accent fill
- Renamed from v1 "Offerings" to signal marketplace taxonomy, not corp "Capabilities"

#### 4.5.8 Client Outcomes Section (`#outcomes`)

- Background: white
- Eyebrow + section headline (client/programme outcomes, not corp case-study placeholders)
- Three outcome cards (`md`: 3-col), each containing:
  - Category tag (mono)
  - Prominent metric value + metric descriptor
  - Outcome title
  - Outcome body paragraph
- Hover: border accent, shadow, metric colour shifts to accent

#### 4.5.9 DQ Lineage + Stats Band

- Background: Gray 50
- Two-column layout on `lg+`; stacked on mobile
- **Left — Product stats:** four stat blocks (`md`: 2×2 or 4-col), each with left accent border (4px orange), large value, short descriptor — metrics must be TMaaS/programme-specific, not copied corp homepage stats
- **Right — DQ lineage card:** white card, rounded-2xl, border Gray 200
  - Eyebrow: `Part of DigitalQatalyst`
  - Short body: one-line parent brand positioning
  - Link: `Explore DigitalQatalyst →` external corp URL (new tab)
- Replaces v1 standalone Stats section; avoids a separate stats band that mirrors corp web section 8 verbatim

#### 4.5.10 Closing CTA Section

- Visual: `MeshSection` variant `ctaOrange` with grid mask overlay; centred content, max-width ~720px
- Content structure:
  - Eyebrow label
  - Headline (inline accent span permitted)
  - Supporting paragraph (marketplace-first)
  - Dual CTAs: primary filled orange → Marketplace; secondary ghost/outline → Contact

#### 4.5.11 Footer (shared)

- Brand column: logo + one-line product descriptor
- Link columns (flag-gated where noted):
  - External DigitalQatalyst links (always)
  - Legal links (flag: `legal`)
  - TMaaS internal links: About (flag: `explore`), AI entry (flag: `chatAssistant`), Marketplace (flag: `marketplace`), Contact (flag: `contactUs`)
  - Social links: LinkedIn, Instagram, YouTube (external, new tab)
- Bottom bar: copyright year + optional Privacy/Terms (flag: `legal`)

## 5. User Journeys

### 5.1 Primary Flow

1. Exploring User navigates to `/`
2. Page renders navbar and hero with marketplace mockup and product badge
3. User scans marketplace preview categories and trusts marquee
4. User reads Why TMaaS (problem) and How It Works (journey)
5. User browses service category cards and client outcome metrics
6. User sees DQ lineage band (parent trust) with optional link to corp site
7. User clicks primary CTA (hero or closing section) → `/marketplace`
8. User may alternatively click Contact CTA → `/contact`

### 5.2 Alternate Flows

- User clicks marketplace preview tile/chip → `/marketplace`
- User clicks service category card → `/marketplace`
- User clicks How It Works step links → `/marketplace` or `/contact` per step
- User clicks DQ lineage external link → corp web (new tab)
- User opens mobile menu → selects link → menu closes, navigates

### 5.3 Edge Cases

- `homepage` flag disabled → route redirects to first enabled route per `getFirstEnabledRoute()`
- `marketplace` flag disabled → Marketplace nav, hero/CTA primary buttons, marketplace preview, category cards, journey steps 1–2 links, and footer marketplace link hidden or route-guarded
- `contactUs` flag disabled → all Contact CTAs hidden
- Viewport `< lg` → desktop nav hidden; hamburger menu required
- Decorative mockup and marquee content are not keyboard-interactive targets

## 6. Fixture Data

| Entity                | ID         | Field 1                        | Field 2                     | Field 3                   | Links to                   |
| --------------------- | ---------- | ------------------------------ | --------------------------- | ------------------------- | -------------------------- |
| TrustLogo             | TL-001     | Display name (org placeholder) | —                           | —                         | Marquee strip              |
| TrustLogo             | TL-002     | Display name (org placeholder) | —                           | —                         | Marquee strip              |
| MarketplaceCategory   | MC-001     | Icon slot                      | Category label              | Service count placeholder | Marketplace preview        |
| MarketplaceCategory   | MC-002     | Icon slot                      | Category label              | Service count placeholder | Marketplace preview        |
| MarketplaceCategory   | MC-003     | Icon slot                      | Category label              | Service count placeholder | Marketplace preview        |
| MarketplaceCategory   | MC-004     | Icon slot                      | Category label              | Service count placeholder | Marketplace preview        |
| WhyCard               | WC-001     | Icon: Search                   | Card title slot             | Card body slot            | Why TMaaS section          |
| WhyCard               | WC-002     | Icon: Scale                    | Card title slot             | Card body slot            | Why TMaaS section          |
| WhyCard               | WC-003     | Icon: Handshake                | Card title slot             | Card body slot            | Why TMaaS section          |
| JourneyStep           | JS-001     | Step: 01 / Discover            | Destination: `/marketplace` | —                         | How It Works section       |
| JourneyStep           | JS-002     | Step: 02 / Evaluate            | Destination: `/marketplace` | —                         | How It Works section       |
| JourneyStep           | JS-003     | Step: 03 / Engage              | Destination: `/contact`     | —                         | How It Works section       |
| CategoryCard          | CC-001     | Icon: Monitor                  | Category slot               | `/marketplace`            | Service Categories section |
| CategoryCard          | CC-002     | Icon: Workflow                 | Category slot               | `/marketplace`            | Service Categories section |
| CategoryCard          | CC-003     | Icon: Shield                   | Category slot               | `/marketplace`            | Service Categories section |
| CategoryCard          | CC-004     | Icon: BarChart2                | Category slot               | `/marketplace`            | Service Categories section |
| CategoryCard          | CC-005     | Icon: Package                  | Category slot               | `/marketplace`            | Service Categories section |
| OutcomeCard           | OC-OUT-001 | Tag: Cost                      | Metric + descriptor slots   | —                         | Client Outcomes section    |
| OutcomeCard           | OC-OUT-002 | Tag: Speed                     | Metric + descriptor slots   | —                         | Client Outcomes section    |
| OutcomeCard           | OC-OUT-003 | Tag: Success                   | Metric + descriptor slots   | —                         | Client Outcomes section    |
| StatBlock             | ST-001     | Value slot                     | Label slot                  | —                         | DQ Lineage + Stats band    |
| StatBlock             | ST-002     | Value slot                     | Label slot                  | —                         | DQ Lineage + Stats band    |
| StatBlock             | ST-003     | Value slot                     | Label slot                  | —                         | DQ Lineage + Stats band    |
| StatBlock             | ST-004     | Value slot                     | Label slot                  | —                         | DQ Lineage + Stats band    |
| MockupFeaturedService | MFS-001    | Service name slot              | Category tag slot           | —                         | Hero mockup                |
| MockupFeaturedService | MFS-002    | Service name slot              | Category tag slot           | —                         | Hero mockup                |
| MockupFeaturedService | MFS-003    | Service name slot              | Category tag slot           | —                         | Hero mockup                |

## 7. Shared Components

- **LandingNavbar**: Sticky 64px header; flag-filtered links; mobile overlay menu; focus rings
- **ProductBadgeRow** (new): Mono product code + status chip; hero only
- **MeshSection**: Reusable section wrapper with `heroLight` / `heroDark` / `ctaOrange` backgrounds and optional grid
- **TMaaSLogo**: Brand mark, links to `/`
- **ButtonPrimary (pill)**: Rounded-full, DQ Orange fill, white text, orange glow shadow, hover darken
- **ButtonSecondary (pill)**: Outlined or glass style; navy or white text depending on section background
- **MarketplacePreviewSection** (new): Category tiles/chips + browse-all link
- **IconCard**: Rounded card with lucide icon, title, body — Why TMaaS and Service Categories
- **StepColumn**: Number + suite label + title + body + text link — How It Works section
- **OutcomeCard**: Tag + metric block + title + body with hover elevation
- **StatBlock**: Left orange border + large value + descriptor
- **DqLineageCard** (new): Parent brand trust card with external link
- **MarqueeStrip**: Overflow-hidden horizontal scroll of duplicated logo items
- **HeroDashboardMockup**: Static perspective marketplace preview card
- **Footer**: Multi-column link grid with external and flag-gated internal routes

### 7.1 Component Migration (v1 → v2)

| v1 component             | v2 action                                                                |
| ------------------------ | ------------------------------------------------------------------------ |
| `ChallengeSection`       | Rename/reframe → `WhyTmaasSection` (product copy, single dark section)   |
| `SolutionSection`        | Rename → `HowItWorksSection` (journey labels)                            |
| `OfferingsSection`       | Rename → `ServiceCategoriesSection` (`#categories`)                      |
| `LandingOutcomesSection` | Keep; anchor `#outcomes`                                                 |
| `StatsSection`           | Merge into `DqLineageStatsBand`                                          |
| —                        | **New:** `MarketplacePreviewSection`, `ProductBadgeRow`, `DqLineageCard` |

## 8. Scope

### In Scope

- Revised `/` landing page IA (v2 section order and product differentiation)
- Eleven content sections plus navbar and footer
- Navigation to Marketplace and Contact Us
- Feature-flag visibility for MVP launch configuration
- Responsive layout (mobile menu, stacked grids)
- Hero product badge and optional DQ lineage link
- Marketplace preview section (new)
- DQ lineage + stats combined band (new)
- Entrance animations on hero content
- Marquee animation on trust section

### Out of Scope

- Alternate landing at `/home` (flag: `alternateLanding`)
- Corp-web-only sections: Team, FAQ, Framework deep-dive, full product ecosystem grid
- AI chat assistant on landing (flag: `chatAssistant` — footer link only when enabled)
- Log in, Get Started, and all authentication flows
- Cart, dashboard, onboarding, and legal page content
- Analytics / conversion tracking
- CMS-driven or localised copy management
- Interactive behaviour on hero dashboard mockup
- Form submission (handled on Contact Us page)
- Deep-linking marketplace preview tiles to filtered `/marketplace` views (future)

## 9. Assumptions

- Only Exploring Users (unauthenticated) access the landing page in MVP
- Navbar and mobile menu do not expose Log in or Get Started in MVP
- `homepage` flag is on by default alongside `marketplace` and `contactUs`
- Desktop-first design; mobile breakpoints follow Tailwind `sm` / `md` / `lg` conventions
- All marketing copy is supplied separately; this spec defines structure and behaviour only
- DQ corp web URL for external links is configurable (env or constant); prototype may use placeholder
- Footer external links open in a new tab with `rel="noopener noreferrer"`
- No API calls originate from the landing page itself

## 10. Prototype Build Prompt

```
Build a high-fidelity clickable prototype of the TMaaS Landing Page (v2 Product IA) — a public product landing for Exploring Users at route `/`.

Design strategy: share DQ corp web tokens and components; do NOT mirror the corp homepage section stack.

Colours
Primary accent: DQ Orange #FB5535 (hover #E04020)
Brand / text: DQ Navy #030F35
Background: #FFFFFF, alternate sections Gray 50
Body text: Gray 600, muted labels Gray 400–500
Borders: Gray 100–200
Dark section: mesh-hero-dark (Why TMaaS only); CTA: mesh-cta-orange

Typography
Plus Jakarta Sans for UI; mono for eyebrows, badge, step numbers, tags, mockup chrome
Eyebrows: ~10–11px uppercase wide-tracked accent labels
Headings: semibold, tight tracking, responsive 4xl–8xl scale

Radii & spacing
Cards: 16px; icon wells: 12px; buttons: pill (rounded-full)
Section padding: py-12–24; horizontal px-5 → lg:px-10
Content max-width: 1200px (1280px hero / marketplace preview)

Layout
Viewport 1440px+ desktop-first, responsive mobile
Top bar: 64px sticky white, TMaaS logo left, nav centre-left, Contact CTA right, hamburger below lg
No sidebar
Stacked full-width sections with centred content containers
Footer: 4-column grid collapsing on mobile

Persona
1 | Exploring User | Unregistered | Landing: /

Navigation (feature-flag filtered)
Logo → /
Marketplace → /marketplace
Contact Us → /contact
(No Log in or Get Started in MVP)

Section order — /
  1. Landing Navbar
  2. Hero: product badge, eyebrow, two-line headline, body, dual CTAs (orange primary → marketplace); heroLight mesh + grid; marketplace mockup right
  3. Marketplace Preview (#marketplace-preview): category tiles/chips + browse-all link → marketplace
  4. Trusted By: compact marquee logo strip
  5. Why TMaaS (#why): heroDark mesh, 3 glass pain cards, closing link → marketplace
  6. How It Works (#how-it-works): 3 journey steps (Discover, Evaluate, Engage) → marketplace/contact
  7. Service Categories (#categories): 5 icon cards → marketplace
  8. Client Outcomes (#outcomes): 3 metric cards
  9. DQ Lineage + Stats band: 4 product stats + parent brand card with external DQ link
  10. Closing CTA: ctaOrange mesh, dual CTAs
  11. Footer

Shared Components
LandingNavbar, ProductBadgeRow, MeshSection, TMaaSLogo, pill CTAs, MarketplacePreviewSection, IconCard, StepColumn, OutcomeCard, StatBlock, DqLineageCard, MarqueeStrip, HeroDashboardMockup, Footer

Interaction Notes
Primary CTAs and category/preview tiles navigate to /marketplace
Contact CTAs navigate to /contact
DQ lineage link opens corp site in new tab
Feature flags hide unavailable routes and links
No auth entry points in navbar or mobile menu
Hero staggered fade-in-up; marquee auto-scrolls; mockup non-interactive
No form submission on landing page
Do NOT add Team, FAQ, Framework, or corp ecosystem grid sections
```

STATUS: READY FOR APPROVAL
Saved: landing-page-prototype-shell.md
