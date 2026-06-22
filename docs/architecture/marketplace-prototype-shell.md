# Feature: Marketplace Page — Feature Specific

## 1. Platform Context

- Platform: DQ Digital Experience Platform (DXP)
- Type: Generalised
- Prototype Stage: Feature Specific
- Stage Coverage: Stage 01
- Industry: Cross-industry
- Solution Outcomes:
  - Validate service discovery and comparison for unauthenticated Exploring Users.
  - Exercise marketplace taxonomy, filtering, and catalogue browsing against fixture service data.
  - Drive navigation from catalogue cards to Service Detail pages.
  - Ensure visual alignment with DigitalQatalyst / TMaaS brand and design system.

## 2. Build Approach & References

- Mode: New Build
- Reference Builds (Internal): DQ_CORPWEB_PROTOTYPE (mesh backgrounds, corp web tokens), Landing Page spec (`landing-page-prototype-shell.md`)
- Reference Builds (External): N/A
- Base Shell: `Marketplace` page composition (`/marketplace`)
- Input Documents: 26.05_tmaas_complete_brs_v2.md (F-S1-01 Transformation Marketplace, F-S1-02 Service Blueprint Catalogue), FEATURE_FLAGS.md, `src/pages/Marketplace.tsx`, `src/data/marketplaceNavigation.ts`, `src/data/services.ts`

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
  - Background: `#FFFFFF` / `bg-background`
  - Surface: White cards on light background; filter panel white with card shadow
  - Text primary: DQ Navy, Text body: Gray 600, Text muted: Gray 400–500
  - Border: Gray 100–200
  - Active nav / pagination accent: DQ Orange underline or border
  - Icon wells: Navy 50 background with navy 500 icon (list/shelf); Orange 50 with orange icon (grid)
- Typography:
  - UI font: System sans stack via Tailwind `font-sans`, weights 400–700
  - Mono font: `font-mono` — eyebrows, filter section labels, category tags on cards
  - Page hero eyebrow: 11px uppercase, wide letter-spacing, accent colour
  - Section headings: 2xl–5xl responsive, semibold, tight tracking
- Radii: Search input and filter panel 12px (`rounded-xl`); service cards 12px; pill chips `rounded-full`; view-toggle container 8px (`rounded-lg`)
- Spacing: Horizontal padding `px-5` → `md:px-8` → `lg:px-10`; catalogue max-width 1280px
- Effects:
  - Hero: `MeshSection` variant `heroLight` with grid overlay
  - Card shadows: `--shadow-card` default, `--shadow-elevated` on hover
  - Smooth scroll to `#catalog-grid` on collection change and pagination
- Logo: TMaaS logo via shared `LandingNavbar`; links to `/`

### 4.2 Layout Shell

- Viewport target: Desktop-first, responsive from mobile through 1440px+
- Top bar: Shared `LandingNavbar` — 64px sticky, white, bottom border Gray 100
  - Left: Logo + Marketplace nav link (active state on `/marketplace`)
  - Right: Contact CTA (feature-flagged), mobile menu toggle (`< lg`)
- Left sidebar: Filter panel — 240px width on `lg+`, collapsible on mobile via Filters toggle
- Main content: Two-column layout on `lg+` (filters + catalogue); single column stacked on smaller viewports
- Footer: Shared `Footer` component
- Scroll anchor: `#catalog-grid` with `scroll-mt-32` offset for sticky headers

### 4.3 Personas

| #   | Name           | Role                             | Landing Page   | Nav Scope                                                                                                   |
| --- | -------------- | -------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| 1   | Exploring User | Unregistered / anonymous visitor | `/marketplace` | Public routes only: Landing (if enabled), Marketplace, Service Detail (if enabled), Contact Us (if enabled) |

### 4.4 Navigation Structure

- Global (feature-flag controlled)
  - Logo → `/`
  - Marketplace → `/marketplace` (flag: `marketplace`; active on this page)
  - Contact Us → `/contact` (flag: `contactUs`)
  - Service card click → `/service/:id` (flag: `serviceDetail`)
- Persona-restricted items: Log in, Get Started, sign-in, cart, dashboard, onboarding, and authenticated workspace routes are not exposed in MVP
- URL query parameters:
  - `collection` — syncs active category tab (omitted when `all`)
  - `q` — optional initial search string (read on load; live search is client-side state)
- Deep link behaviour: Valid `collection` param sets active tab and scrolls to catalogue grid

### 4.5 Feature Specification

- Screens in scope this iteration: `/marketplace` (route flag: `marketplace`)
- Demo Storyline: Exploring User arrives from Landing Page or direct URL, searches or filters the service catalogue, browses best sellers and paginated results, and opens a Service Detail page to learn more
- Components per screen:

| Screen         | Components                  | Primary Action                 | States Required                                                     |
| -------------- | --------------------------- | ------------------------------ | ------------------------------------------------------------------- |
| `/marketplace` | Landing Navbar              | Navigate / open mobile menu    | Default / Mobile menu open / Marketplace active                     |
| `/marketplace` | Page Hero                   | Search input filters catalogue | Default / Search active / Clear search                              |
| `/marketplace` | Best Sellers Carousel       | Card click → Service Detail    | Default / Hidden when filters active or Bundles tab                 |
| `/marketplace` | Category Tab Nav            | Switch collection filter       | Default / Active tab / Sticky below navbar                          |
| `/marketplace` | Filter Sidebar              | Refine catalogue               | Default / Collapsed (mobile) / Expanded (mobile) / Sticky (desktop) |
| `/marketplace` | Results Toolbar             | Sort + view mode toggle        | Default / Grid view / List view                                     |
| `/marketplace` | Active Filter Chips         | Remove individual filters      | Default / One or more chips / Clear all                             |
| `/marketplace` | Service Catalogue Grid/List | Card click → Service Detail    | Default / Empty / Paginated                                         |
| `/marketplace` | Pagination                  | Change page                    | Default / First / Middle / Last / Hidden (≤1 page)                  |
| `/marketplace` | Footer                      | External and flag-gated links  | Default                                                             |

#### 4.5.1 Page Hero

- Visual: Centred content on `heroLight` mesh with grid; max-width ~768px
- Content structure (no fixed copy):
  - Eyebrow label (mono, accent)
  - Page title (h1)
  - Supporting paragraph
  - Full-width search field with leading search icon
- Search behaviour:
  - Filters catalogue by service name, description, remixed display name, tags, and features (case-insensitive)
  - Clear button visible when query non-empty
  - Resets pagination to page 1 on change

#### 4.5.2 Best Sellers Section

- Visibility: Shown only when no refinement filters are active AND active tab is not Bundles
- Content structure:
  - Eyebrow label (mono, accent)
  - Section heading (contextual to active collection — all vs collection-specific)
  - Supporting line
  - Horizontal carousel of up to 6 top-ranked services by `popularityRank`
- Card variant: `shelf` — compact tile with icon, category tag, optional featured badge on first item or items with top-pick badge
- Carousel controls: Previous / Next buttons above carousel track
- Catalogue deduplication: Best-seller IDs are excluded from the main grid below to avoid duplicates

#### 4.5.3 Category Tab Navigation

- Sticky below navbar (`top-16`, z-30)
- Tabs: All + five capability collections (four service categories + Bundles)
- Horizontal scroll on narrow viewports
- Active tab: Orange bottom border and text
- Interaction: Updates `collection` URL param; scrolls to `#catalog-grid`
- Collection filter logic:
  - `all` — all non-bundle services
  - Capability IDs — services matching `collection` field
  - `bundles` — only items with `serviceType: bundle`

#### 4.5.4 Filter Sidebar

- Panel: White card, rounded, bordered, shadow; sticky at `top-32` on desktop
- Header row: Reset-all control (disabled when no filters active) + filter icon
- Collapsible sections (checkbox groups):
  | Section | Filter dimension | Option count |
  |---------|------------------|--------------|
  | Category | Service collection (4 capability IDs) | 4 |
  | Services Included | Single-service vs multi-service bundles | 2 |
  | Economy 4.0 Sector | Industry remix dimension | 9 (4 visible + show more) |
  | Service Type | Delivery type taxonomy | 6 (collapsed by default) |
- Sector expand: Show more / show less toggles full sector list
- Sector helper note: Displayed when one or more sectors selected (indicates display-name remix behaviour)
- Mobile: Hidden by default; toggled via Filters button in results toolbar; full-width Reset button at panel bottom when filters active

#### 4.5.5 Results Toolbar

- Left cluster:
  - Mobile Filters toggle (`< lg`)
  - Result count line: “Showing X–Y of Z services” (or zero state copy slots)
- Right cluster:
  - Sort dropdown: Most popular (default) | Fastest delivery | Lowest price
  - View mode toggle: Grid (default) | List (icon buttons with `aria-pressed`)

#### 4.5.6 Active Filter Chips

- Rendered when any collection tab (non-all), sidebar filter, or search query is active
- Each chip: label slot + remove (X) — clicking removes that filter
- Clear all link resets all filters, search, sort, collection tab, and URL params

#### 4.5.7 Service Product Card (catalogue)

- Variants used on this page: `grid` | `list` | `shelf` (best sellers only)
- Card content structure (no fixed copy):
  - Collection/category tag (mono)
  - Service title (optionally remixed by selected sector)
  - Description (3-line clamp in grid/list)
  - Price + duration
  - Optional badges: best seller, top pick, high-impact (title suffix stripped from display)
  - Trailing arrow affordance when detail navigation enabled
- Grid layout: `sm` 2-col, `xl` 3-col, gap 20px
- List layout: Full-width horizontal rows
- Primary action: Navigate to `/service/:id` when `serviceDetail` flag enabled; non-linking static card when disabled

#### 4.5.8 Empty State

- Shown when filtered catalogue length is zero
- Content structure: search icon, heading slot, helper text slot, Reset filters button
- Action: Clears all filters and search

#### 4.5.9 Pagination

- Page size: 15 services per page
- Resets to page 1 when any filter, search, sort, or tab changes
- Clamps current page if results shrink
- Controls: Previous, numbered pages with ellipsis for long ranges, Next
- Active page: Orange border highlight
- Hidden when total pages ≤ 1
- Page change scrolls to `#catalog-grid`

#### 4.5.10 Sort Logic

| Sort key  | Behaviour                        |
| --------- | -------------------------------- |
| popular   | Descending `popularityRank`      |
| fastest   | Ascending parsed `duration`      |
| price-low | Ascending parsed numeric `price` |

## 5. User Journeys

### 5.1 Primary Flow

1. Exploring User navigates to `/marketplace` (from Landing Page CTA, navbar, or direct URL)
2. User views page hero and optional best sellers carousel
3. User browses category tabs or enters a search term
4. User optionally refines via sidebar filters (category, included type, sector, service type)
5. User reviews paginated results in grid or list view; changes sort order as needed
6. User clicks a service card → navigates to `/service/:id`
7. User may use navbar Contact CTA to switch to enquiry flow

### 5.2 Alternate Flows

- User lands with `?collection=<id>` → tab pre-selected, catalogue scrolled into view
- User lands with `?q=<term>` → search field pre-filled, catalogue filtered
- User removes individual filter chips without clearing all
- User switches to Bundles tab → best sellers hidden; only bundle-type services shown
- User selects Economy 4.0 sector → service card titles update via remix mapping where defined
- User toggles list view for denser horizontal scan
- User paginates through large result sets

### 5.3 Edge Cases

- `marketplace` flag disabled → route redirects to first enabled route
- `serviceDetail` flag disabled → cards render without navigation link or arrow affordance
- No results after filtering → empty state with reset action
- Best sellers hidden when any sidebar filter or search is active, or on Bundles tab
- Both single and multi-service included filters selected → no additional included-type constraint
- Mobile filter panel overlays content flow; desktop panel always visible
- Pagination previous/next disabled at first/last page

## 6. Fixture Data

| Entity                | ID     | Field 1                         | Field 2                      | Field 3                                   | Links to                      |
| --------------------- | ------ | ------------------------------- | ---------------------------- | ----------------------------------------- | ----------------------------- |
| ServiceCatalogue      | SC-001 | Source: `initialServices` array | ~50+ service records         | —                                         | Catalogue grid                |
| MarketplaceCapability | MC-001 | id: `experience`                | label slot                   | collection filter                         | Category nav + filters        |
| MarketplaceCapability | MC-002 | id: `operations`                | label slot                   | collection filter                         | Category nav + filters        |
| MarketplaceCapability | MC-003 | id: `security`                  | label slot                   | collection filter                         | Category nav + filters        |
| MarketplaceCapability | MC-004 | id: `ai`                        | label slot                   | collection filter                         | Category nav + filters        |
| MarketplaceCapability | MC-005 | id: `bundles`                   | label slot                   | bundle-only tab                           | Category nav                  |
| EconomySector         | ES-001 | id: `farming-4-0`               | label slot                   | remix key                                 | Sector filter                 |
| EconomySector         | ES-002 | id: `plant-4-0`                 | label slot                   | remix key                                 | Sector filter                 |
| ServiceType           | ST-001 | id: `advisory`                  | label slot                   | type filter                               | Filter sidebar                |
| ServiceType           | ST-002 | id: `design`                    | label slot                   | type filter                               | Filter sidebar                |
| ServiceType           | ST-003 | id: `deploy`                    | label slot                   | type filter                               | Filter sidebar                |
| ServiceRecord         | SR-001 | id: numeric                     | standardName slot            | collection + serviceType + popularityRank | `/service/:id`                |
| ServiceRecord         | SR-002 | id: numeric                     | remixName map (sector keys)  | price + duration slots                    | Display name remix            |
| BestSellerSet         | BS-001 | Top N by popularityRank         | N = 6 carousel / 4 dedup set | —                                         | Best sellers + grid exclusion |

## 7. Shared Components

- **LandingNavbar**: Same as Landing Page; Marketplace link active on this route
- **MeshSection**: `heroLight` variant for page hero
- **Footer**: Shared site footer with flag-gated links
- **MarketplaceCategoryNav**: Sticky horizontal tab bar for collection switching
- **MarketplaceFilters**: Collapsible checkbox filter panel with reset
- **MarketplaceBestSellers**: Carousel section with `shelf` cards
- **ServiceProductCard**: Grid, list, and shelf variants; links to service detail when enabled
- **MarketplacePagination**: Numbered pagination with ellipsis
- **SearchInput**: Icon-leading search with clear control
- **SortSelect**: Dropdown for sort options
- **ViewModeToggle**: Grid / list icon toggle group
- **FilterChip**: Removable active-filter pill
- **EmptyStatePanel**: Zero-results message and reset CTA

## 8. Scope

### In Scope

- Full `/marketplace` page layout and visual design
- Page hero with live search filtering
- Category tab navigation with URL sync
- Sidebar filter panel (four dimensions)
- Best sellers carousel with deduplicated catalogue grid
- Grid and list view modes
- Sort (popular, fastest, lowest price)
- Pagination (15 per page)
- Active filter chips and clear-all
- Empty state
- Navigation to Service Detail (`/service/:id`)
- Shared navbar and footer
- Feature-flag visibility for MVP launch configuration
- Responsive layout (mobile filter drawer, sticky tab bar)

### Out of Scope

- Log in, Get Started, and all authentication flows (`/sign-in`, `auth` flag)
- Cart, add-to-cart, and checkout (`cart` flag, F-S1-04)
- AI service recommendations (F-S1-03)
- Shop-by-goal chips (data exists; not rendered on this page)
- Service Detail page content (separate spec)
- Contact form submission (Contact Us page)
- Marketplace taxonomy admin (F-S1-05)
- Analytics / conversion tracking
- CMS-driven catalogue management
- Server-side search or filter APIs (client-side fixture data only)
- Writing search query back to URL on keystroke

## 9. Assumptions

- Only Exploring Users (unauthenticated) access the marketplace in MVP
- Navbar and mobile menu do not expose Log in or Get Started in MVP
- `marketplace`, `serviceDetail`, and `contactUs` flags are on by default for MVP
- Service catalogue is served from static fixture data (`initialServices`)
- Desktop-first design; mobile breakpoints follow Tailwind `sm` / `md` / `lg` / `xl` conventions
- All marketing copy and service names are supplied separately; this spec defines structure and behaviour only
- Sector filter affects display name only where `remixName` mapping exists on a service record
- Footer external links open in a new tab with `rel="noopener noreferrer"`

## 10. Prototype Build Prompt

```
Build a high-fidelity clickable prototype of the TMaaS Marketplace Page — a DXP feature-specific shell for Exploring Users at route `/marketplace` (Stage 01).

Colours
Primary accent: DQ Orange #FB5535 (hover #E04020)
Brand / text: DQ Navy #030F35
Background: #FFFFFF
Cards: white, border gray-200, shadow-card / shadow-elevated on hover
Text body: Gray 600; muted: Gray 400–500

Typography
Sans for UI; mono for eyebrows, filter labels, card category tags
Hero eyebrow: 11px uppercase accent
Headings: semibold, tight tracking, 2xl–5xl

Layout
Viewport 1440px+ desktop-first, responsive mobile
Top bar: shared LandingNavbar, 64px sticky (Marketplace active, Contact CTA, no auth)
Hero: heroLight mesh, centred eyebrow + title + body + search
Catalogue: max-width 1280px, #catalog-grid anchor
lg+: 240px sticky filter sidebar + flexible main column
Category tabs: sticky below navbar
Footer: shared site footer

Persona / Segment
1 | Exploring User | Unregistered | Landing: /marketplace

Navigation (feature-flag filtered)
Logo → /
Marketplace → /marketplace (active)
Contact Us → /contact
Service card → /service/:id (serviceDetail flag)
(No Log in, Get Started, or cart in MVP)

URL params
collection → active category tab (omit when all)
q → initial search string on load

Pages to Build — /marketplace
  Page Hero: eyebrow, title, body, search input with clear
  Best Sellers: carousel of top 6 by popularity (hidden when filtered or Bundles tab)
  Category Tab Nav: All + 4 capabilities + Bundles; syncs collection param
  Filter Sidebar: Category, Services Included, Economy 4.0 Sector (9), Service Type (6)
  Results Toolbar: count, sort (popular/fastest/price-low), grid/list toggle, mobile Filters btn
  Active Filter Chips + Clear all
  Service Grid/List: ServiceProductCard variants, 15 per page
  Pagination with scroll-to-catalogue
  Empty state with reset
  Footer

Shared Components
LandingNavbar, MeshSection, Footer, MarketplaceCategoryNav, MarketplaceFilters, MarketplaceBestSellers, ServiceProductCard, MarketplacePagination

Interaction Notes
All filtering and sort client-side against initialServices fixture
Best-seller IDs excluded from main grid when carousel visible
Bundles tab shows only serviceType bundle items
Sector selection remaps card titles via remixName
Cards link to /service/:id when serviceDetail enabled
No cart, auth, or API calls on this page
collection param updates on tab change; smooth scroll to catalogue
```

STATUS: READY FOR APPROVAL
Saved: marketplace-prototype-shell.md
