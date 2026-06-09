# Feature: Landing Page — Feature Specific

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
  - Ensure visual alignment with DigitalQatalyst / TMaaS brand and design system.

## 2. Build Approach & References
- Mode: New Build
- Reference Builds (Internal): DQ_CORPWEB_PROTOTYPE (mesh backgrounds, corp web tokens)
- Reference Builds (External): N/A
- Base Shell: IndexTraditional page composition (`/`)
- Input Documents: 26.05_tmaas_complete_brs_v2.md (F-S0-01 Landing Page Experience), FEATURE_FLAGS.md, implemented landing components under `src/components/site/landing/`

## 3. DevOps
- Prototype Tool: React / Vite (local prototype repo)
- Prototype Repo: DQ_Prod_TMaaS_Prototype
- Prototype Link: <fill after deploy>

## 4. Specification

### 4.1 Brand & Visual System
- Design System Reference: TMaaS Corp Web Tokens (aligned with DQ_CORPWEB_PROTOTYPE)
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
  - UI font: System sans stack via Tailwind `font-sans`, weights 400–700
  - Mono font: `font-mono` — used for eyebrow labels, step numbers, metric tags, and mockup UI chrome
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
- Left sidebar: None
- Main content: Full-width stacked sections, max content width 1200px (`max-w-[1200px]`) or 1280px (`max-w-7xl`) for hero
- Footer: Full-width, white, top border, four-column grid on desktop collapsing to single column on mobile
- Scroll anchors: `#offerings`, `#outcomes` (section IDs for in-page / footer deep links)

### 4.3 Personas
| # | Name | Role | Landing Page | Nav Scope |
|---|------|------|-------------|-----------|
| 1 | Exploring User | Unregistered / anonymous visitor | `/` | Public routes only: Landing, Marketplace (if enabled), Contact Us (if enabled) |

### 4.4 Navigation Structure
- Global (feature-flag controlled)
  - Logo → `/`
  - Marketplace → `/marketplace` (flag: `marketplace`)
  - Contact Us → `/contact` (flag: `contactUs`; navbar CTA + repeated section CTAs)
- Persona-restricted items: Log in, Get Started, sign-in, dashboard, cart, onboarding, and authenticated workspace routes are not exposed on the landing page in MVP
- Active state: Current route highlighted in accent colour (e.g. Marketplace nav link when on `/marketplace`, Contact CTA filled state when on `/contact`)
- Mobile: Hamburger opens full-screen overlay menu below header with the same flag-filtered links

### 4.5 Feature Specification
- Screens in scope this iteration: `/` (route flag: `homepage`)
- Demo Storyline: Unauthenticated visitor lands on the homepage, scans value proposition sections, and navigates to the Marketplace or Contact Us to continue their journey
- Components per screen:

| Screen | Components | Primary Action | States Required |
|--------|------------|----------------|-----------------|
| `/` | Landing Navbar | Navigate / open mobile menu | Default / Mobile menu open / Active route highlight |
| `/` | Hero Section | Primary CTA → Marketplace; Secondary CTA → Contact | Default (animated entrance) |
| `/` | Hero Dashboard Mockup | N/A (decorative) | Default |
| `/` | Trusted By Section | N/A | Default (marquee animation) |
| `/` | Challenge Section | N/A | Default |
| `/` | Solution Section (3-step model) | Per-step link → Marketplace or Contact | Default / Hover on links |
| `/` | Offerings Section | Card click → Marketplace | Default / Hover / Focus-visible |
| `/` | Outcomes Section | N/A | Default / Card hover |
| `/` | Stats Section | N/A | Default |
| `/` | Closing CTA Section | Primary CTA → Marketplace; Secondary CTA → Contact | Default |
| `/` | Footer | External DQ links; internal flag-gated links | Default |

#### 4.5.1 Hero Section
- Layout: Two-column grid on `lg+` (copy left, mockup right); single column stacked on smaller viewports
- Content structure (no fixed copy):
  - Eyebrow label (mono, accent)
  - Primary headline (two lines; second line in accent colour)
  - Supporting paragraph (max-width constrained)
  - Action row: primary pill button with arrow icon; secondary outlined/glass pill button
- Visual: `MeshSection` variant `heroLight` with grid overlay

#### 4.5.2 Hero Dashboard Mockup
- Decorative 3D-perspective card simulating a marketplace catalogue UI
- Contains: sidebar icon rail, header with mono label + title, three mini stat tiles, featured service list (3 items), goal filter chips (3 items)
- Non-interactive in prototype; no navigation on click

#### 4.5.3 Trusted By Section
- Eyebrow label centred above marquee
- Horizontally scrolling logo strip (organisation names as text placeholders; duplicated for seamless loop)
- Hover: individual logo text darkens to navy

#### 4.5.4 Challenge Section
- Visual: `MeshSection` variant `heroDark` with subtle grid mask overlay
- Content structure:
  - Eyebrow label
  - Section headline
  - Supporting paragraph
  - Three equal-width cards (icon, card title, card body) on `md+`
  - Closing centred paragraph below cards
- Card style: glass border (`white/10`), semi-transparent background, icon in accent-tinted container

#### 4.5.5 Solution Section (TMaaS Model)
- White background section
- Eyebrow + section headline
- Three step columns (`sm`: 2-col, `lg`: 3-col), each containing:
  - Large faded step number
  - Suite label (mono eyebrow)
  - Step title
  - Step description
  - Text link with arrow → Marketplace (steps 1–2) or Contact (step 3)

#### 4.5.6 Offerings Section
- Background: Gray 50; `id="offerings"`
- Eyebrow + section headline
- Grid of five clickable cards (`md`: 2-col, `lg`: 3-col) — each card: icon, category title, short description, trailing arrow
- All cards route to `/marketplace`
- Hover: border accent, shadow lift, icon container inverts to accent fill

#### 4.5.7 Outcomes Section
- Background: Gray 50; `id="outcomes"`
- Eyebrow + section headline
- Three outcome cards (`md`: 3-col), each containing:
  - Category tag (mono)
  - Prominent metric value + metric descriptor
  - Outcome title
  - Outcome body paragraph
- Hover: border accent, shadow, metric colour shifts to accent

#### 4.5.8 Stats Section
- White background
- Four stat blocks in a row (`md`: 4-col), each with:
  - Left accent border (4px orange)
  - Large numeric/value display
  - Short descriptor label

#### 4.5.9 Closing CTA Section
- Visual: `MeshSection` variant `ctaOrange` with grid mask overlay; centred content, max-width ~720px
- Content structure:
  - Eyebrow label
  - Headline (inline accent span permitted)
  - Supporting paragraph
  - Dual CTAs: primary filled → Marketplace; secondary ghost/outline → Contact

#### 4.5.10 Footer (shared)
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
2. Page renders landing navbar and scrollable section stack
3. User reads hero value proposition and views dashboard mockup
4. User scrolls through trust, challenge, solution, offerings, outcomes, and stats sections
5. User clicks primary CTA (hero or closing section) → navigates to `/marketplace`
6. User may alternatively click Contact CTA at any exposed point → navigates to `/contact`

### 5.2 Alternate Flows
- User clicks an offerings card → `/marketplace`
- User clicks solution step links → `/marketplace` or `/contact` per step
- User clicks footer Marketplace or Contact link → respective route
- User opens mobile menu → selects a visible link → menu closes, navigates

### 5.3 Edge Cases
- `homepage` flag disabled → route redirects to first enabled route per `getFirstEnabledRoute()`
- `marketplace` flag disabled → Marketplace nav link, hero/CTA primary buttons, offerings cards, solution steps 1–2 links, and footer marketplace link hidden or route-guarded
- `contactUs` flag disabled → all Contact CTAs hidden
- Viewport `< lg` → desktop nav hidden; hamburger menu required for navigation
- Decorative mockup and marquee content are not keyboard-interactive targets

## 6. Fixture Data
| Entity | ID | Field 1 | Field 2 | Field 3 | Links to |
|--------|----|---------|---------|---------|----------|
| TrustLogo | TL-001 | Display name (org placeholder) | — | — | Marquee strip |
| TrustLogo | TL-002 | Display name (org placeholder) | — | — | Marquee strip |
| ChallengeCard | CC-001 | Icon: FileX | Card title slot | Card body slot | Challenge section |
| ChallengeCard | CC-002 | Icon: Layers | Card title slot | Card body slot | Challenge section |
| ChallengeCard | CC-003 | Icon: Unlink | Card title slot | Card body slot | Challenge section |
| SolutionStep | SS-001 | Step: 01 / Discover suite | Destination: `/marketplace` | — | Solution section |
| SolutionStep | SS-002 | Step: 02 / Evaluate suite | Destination: `/marketplace` | — | Solution section |
| SolutionStep | SS-003 | Step: 03 / Engage suite | Destination: `/contact` | — | Solution section |
| OfferingCard | OC-001 | Icon: Monitor | Category slot | `/marketplace` | Offerings section |
| OfferingCard | OC-002 | Icon: Workflow | Category slot | `/marketplace` | Offerings section |
| OfferingCard | OC-003 | Icon: Shield | Category slot | `/marketplace` | Offerings section |
| OfferingCard | OC-004 | Icon: BarChart2 | Category slot | `/marketplace` | Offerings section |
| OfferingCard | OC-005 | Icon: Package | Category slot | `/marketplace` | Offerings section |
| OutcomeCard | OC-OUT-001 | Tag: Cost | Metric + descriptor slots | — | Outcomes section |
| OutcomeCard | OC-OUT-002 | Tag: Speed | Metric + descriptor slots | — | Outcomes section |
| OutcomeCard | OC-OUT-003 | Tag: Success | Metric + descriptor slots | — | Outcomes section |
| StatBlock | ST-001 | Value slot | Label slot | — | Stats section |
| StatBlock | ST-002 | Value slot | Label slot | — | Stats section |
| StatBlock | ST-003 | Value slot | Label slot | — | Stats section |
| StatBlock | ST-004 | Value slot | Label slot | — | Stats section |
| MockupFeaturedService | MFS-001 | Service name slot | Category tag slot | — | Hero mockup |
| MockupFeaturedService | MFS-002 | Service name slot | Category tag slot | — | Hero mockup |
| MockupFeaturedService | MFS-003 | Service name slot | Category tag slot | — | Hero mockup |

## 7. Shared Components
- **LandingNavbar**: Sticky 64px header; flag-filtered links; mobile overlay menu; focus rings on interactive elements
- **MeshSection**: Reusable section wrapper with `heroLight` / `heroDark` / `ctaOrange` backgrounds and optional grid
- **TMaaSLogo**: Brand mark, links to `/`
- **ButtonPrimary (pill)**: Rounded-full, DQ Orange fill, white text, orange glow shadow, hover darken
- **ButtonSecondary (pill)**: Outlined or glass style; navy or white text depending on section background
- **IconCard**: Rounded card with lucide icon, title, body — used in Challenge and Offerings patterns
- **StepColumn**: Number + suite label + title + body + text link — Solution section
- **OutcomeCard**: Tag + metric block + title + body with hover elevation
- **StatBlock**: Left orange border + large value + descriptor
- **MarqueeStrip**: Overflow-hidden horizontal scroll of duplicated logo items
- **HeroDashboardMockup**: Static perspective marketplace preview card
- **Footer**: Multi-column link grid with external and flag-gated internal routes

## 8. Scope
### In Scope
- Full `/` landing page layout and visual design
- All ten content sections plus navbar and footer
- Navigation to Marketplace and Contact Us
- Feature-flag visibility for MVP launch configuration
- Responsive layout (mobile menu, stacked grids)
- Entrance animations on hero content
- Marquee animation on trust section

### Out of Scope
- Alternate landing at `/home` (flag: `alternateLanding`)
- AI chat assistant on landing (flag: `chatAssistant` — footer link only when enabled)
- Log in, Get Started, and all authentication flows (`/sign-in`, `auth` flag)
- Cart, dashboard, onboarding, and legal page content
- Analytics / conversion tracking
- CMS-driven or localised copy management
- Interactive behaviour on hero dashboard mockup
- Form submission (handled on Contact Us page)

## 9. Assumptions
- Only Exploring Users (unauthenticated) access the landing page in MVP
- Navbar and mobile menu do not expose Log in or Get Started in MVP
- `homepage` flag is on by default alongside `marketplace` and `contactUs`
- Desktop-first design; mobile breakpoints follow Tailwind `sm` / `md` / `lg` conventions
- All marketing copy is supplied separately; this spec defines structure and behaviour only
- Footer external links open in a new tab with `rel="noopener noreferrer"`
- No API calls originate from the landing page itself

## 10. Prototype Build Prompt
```
Build a high-fidelity clickable prototype of the TMaaS Landing Page — a public shell for Exploring Users at route `/`.

Colours
Primary accent: DQ Orange #FB5535 (hover #E04020)
Brand / text: DQ Navy #030F35
Background: #FFFFFF, alternate sections Gray 50
Body text: Gray 600, muted labels Gray 400–500
Borders: Gray 100–200
Dark sections: mesh-hero-dark; CTA section: mesh-cta-orange

Typography
Sans for UI; mono for eyebrows, step numbers, tags, mockup chrome
Eyebrows: ~10–11px uppercase wide-tracked accent labels
Headings: semibold, tight tracking, responsive 4xl–8xl scale

Radii & spacing
Cards: 16px; icon wells: 12px; buttons: pill (rounded-full)
Section padding: py-12–24; horizontal px-5 → lg:px-10
Content max-width: 1200px (1280px hero)

Layout
Viewport 1440px+ desktop-first, responsive mobile
Top bar: 64px sticky white, logo left, nav centre-left, Contact CTA right (no auth actions), hamburger below lg
No sidebar
Stacked full-width sections with centred content containers
Footer: 4-column grid collapsing on mobile

Persona / Segment
1 | Exploring User | Unregistered | Landing: /

Navigation (feature-flag filtered)
Logo → /
Marketplace → /marketplace
Contact Us → /contact
(No Log in or Get Started in MVP)

Pages to Build — /
  Landing Navbar (sticky, mobile menu, active states)
  Hero Section: eyebrow, two-line headline, body, dual CTAs → marketplace + contact; heroLight mesh + grid
  Hero Dashboard Mockup (decorative 3D marketplace preview)
  Trusted By Section (marquee logo strip)
  Challenge Section: heroDark mesh, headline, 3 icon cards, closing line
  Solution Section: 3 steps (Discover, Evaluate, Engage) with links to marketplace/contact
  Offerings Section (#offerings): 5 icon cards → marketplace
  Outcomes Section (#outcomes): 3 metric cards
  Stats Section: 4 bordered stat blocks
  Closing CTA Section: ctaOrange mesh, headline, dual CTAs
  Footer: brand, DQ external links, flag-gated TMaaS links, social icons

Shared Components
LandingNavbar, MeshSection, TMaaSLogo, pill CTAs, IconCard, StepColumn, OutcomeCard, StatBlock, MarqueeStrip, HeroDashboardMockup, Footer

Interaction Notes
All primary CTAs and offering cards navigate to /marketplace
All contact CTAs navigate to /contact
Feature flags hide unavailable routes and links
No Log in, Get Started, or /sign-in entry points in navbar or mobile menu
Hero content uses staggered fade-in-up animation
Marquee auto-scrolls trust logos
Mockup is non-interactive
No form submission on landing page
```

STATUS: READY FOR APPROVAL
Saved: landing-page-prototype-shell.md
