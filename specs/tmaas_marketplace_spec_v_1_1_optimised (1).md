# Specification: Marketplace (Stage 01) — DQ TMaaS Platform

---

## Story: The Productized Services Catalog

As a prospective client or enterprise user, I want to browse digital transformation services structured like an e-commerce catalog rather than a vague consulting menu, so that I can easily find, filter, compare, and discover fixed-scope transformation services and bundles tailored to my industry and business goals.

### The Productization Backbone

To move away from opaque consulting sales cycles, the marketplace models transformation services as tangible, structured offerings:

1. **Fixed Constraints (The Product Model)**
   - Every service is displayed with a standardized delivery timeline, transparent pricing, and explicit delivery scope.
   - Design services follow a standard 4-week delivery model.
   - Deploy services follow a standard 12-week delivery model.
   - This eliminates the traditional "it depends" consulting experience and builds immediate trust.

2. **Contextual Remixing (Economy 4.0 Sector Mapping Layer)**
   - Service names dynamically update ("remix") based on the selected Economy 4.0 sector.
   - Example: "Customer Portal Setup" automatically becomes "Patient Portal Setup" if the Wellness 4.0 sector is selected.
   - This increases contextual relevance without duplicating services across the catalogue.

3. **Multi-Dimensional Taxonomy**
   - Services are organized across multiple discovery layers:
     - **Categories** (Customer Experience, AI & Analytics, Digital Workspace, SecDevOps)
     - **Service Types** (Design, Deploy)
     - **Business Goals** (e.g., Automate Processes, Launch New Product)
     - **Economy 4.0 Sectors** (e.g., Retail 4.0, Logistics 4.0, Wellness 4.0)

4. **Bundle Discovery Layer**
   - Services can be grouped into curated transformation bundles.
   - Bundles allow users to progressively discover broader transformation pathways rather than isolated services.
   - Example bundles include:
     - Customer Experience Bundle
     - Intelligence & Analytics Bundle
     - Digital Workspace Bundle
     - SecDevOps Bundle

---

## Purpose (Why):

The TMaaS Marketplace transforms service discovery from a relationship-driven sales process into a self-service transformation commerce experience:
- **Democratize Transformation Services**: Make enterprise transformation accessible through a familiar e-commerce-style interface.
- **Speed to Solution**: Users can identify relevant services in minutes instead of lengthy discovery cycles.
- **Guided Navigation**: Use AI Guidance and intelligent filters to help non-technical users discover relevant transformation pathways.
- **Structured Delivery Positioning**: Reinforce that TMaaS services follow standardized and architecture-led delivery models.
- **Cross-Service Discovery**: Encourage users to explore related services and bundles as part of broader transformation journeys.

---

## Offering (What):

The Marketplace feature provides a full-page catalog experience comprising:
1. **Header & Global Search** (with AI Guidance fallback)
2. **Best Sellers Section** (dynamically contextualized)
3. **Primary Category Navigation** (Horizontal tabs)
4. **Faceted Sidebar Filters** (Economy Sectors, Goals, Service Types)
5. **Catalog Grid** (Sorting, active chips, and service cards)
6. **Bundle Discovery** (related and recommended transformation bundles)

---

## 1. Header & Global Search

The entry point for targeted discovery.

### 1.1 Messaging & AI Guidance
- **Title**: "Marketplace"
- **Subtitle**: "Structured transformation services with transparent pricing and delivery timelines."
- **AI Assist Link**: "Need help choosing? Use AI Guidance". Clicking this opens the `DiagnoseDialog` modal.

### 1.2 Global Search Bar
- Input field that filters the entire catalog in real-time.
- Searches across:
  - Service Title
  - Description
  - Tags
  - Features
  - Economy 4.0 Sector Remix Name
  - Related bundle names.
- Includes a clear ("X") button when text is present.

---

## 2. Dynamic Best Sellers

A promotional row to highlight top-performing services.

### 2.1 Visibility Logic
- **Condition**: Only visible when no refinement filters (Search, Goals, Economy Sector, Service Type) are applied.
- Hides automatically when the user actively filters to maximize vertical space for specific search results.

### 2.2 Content
- Displays the top 4 services ranked by `popularityRank`.
- Reacts to the active Category tab.
- Can optionally surface related transformation bundles.

---

## 3. Marketplace Category Navigation

The primary macro-filter for the catalog.

### 3.1 Horizontal Tabs
- **Tabs**:
  - All
  - Customer Experience
  - AI & Analytics
  - Digital Workspace
  - SecDevOps
- Selecting a tab sets the `category` URL parameter.
- Clicking a tab immediately scrolls the user down to the catalog grid.

---

## 4. Faceted Sidebar Filters

Deep, multi-select refinement using a vertical sidebar layout.

### 4.1 Filter Taxonomies
- **Economy 4.0 Sector**:
  - Farming 4.0
  - Plant 4.0
  - Infrastructure 4.0
  - Government 4.0
  - Hospitality 4.0
  - Retail 4.0
  - Service 4.0
  - Logistics 4.0
  - Wellness 4.0

- **Business Goal**:
  - Launch AI
  - Automate Processes
  - Improve Customer Experience
  - Modernize Operations
  - Improve Delivery Governance

- **Service Type**:
  - Design
  - Deploy

### 4.2 Service Type Delivery Standards
- Design services should consistently display:
  - 4-week timeline
  - architecture and strategy-oriented outcomes
  - blueprint and operating model positioning.

- Deploy services should consistently display:
  - 12-week timeline
  - implementation-oriented outcomes
  - delivery and activation positioning.

### 4.3 UI Components
- **Checkbox Design**: Uses clean, square checkboxes allowing multi-select within categories.
- Filters are synchronized with the browser URL for shareable search states.

---

## 5. Catalog Grid & Sorting

The core product display area.

### 5.1 Controls & Metadata
- **Result Count**: Dynamic count of matching services.
- **Mobile Filter Toggle**: Button to slide out the sidebar on smaller viewports.
- **Sort Dropdown**:
  - Most popular
  - Fastest delivery
  - Lowest price

### 5.2 Active Filter Chips
- A horizontal scrollable row showing all active constraints.
- Users can remove individual filters directly from chips.
- Includes a global "Clear all" action.

### 5.3 Service Cards
- Services are rendered using the `ServiceProductCard` component in `variant="grid"`.

### 5.4 Display Logic
- Displays:
  - Title
  - Description
  - Key features
  - Service Type (Design / Deploy)
  - Timeline
  - Pricing
  - Complexity
  - Related bundle references
  - Related service recommendations.

- Service cards should support progressive discovery through:
  - "Often paired with"
  - "Recommended next"
  - "Part of bundle"
  - "Related services"

### 5.5 Zero State
- If filters result in 0 items, displays an empty state container with:
  - informative messaging
  - AI Guidance suggestion
  - and a "Reset filters" action.

---

## 6. Bundle Discovery

Dedicated marketplace support for grouped transformation offerings.

### 6.1 Bundle Categories
- Customer Experience Bundle
- Intelligence & Analytics Bundle
- Digital Workspace Bundle
- SecDevOps Bundle

### 6.2 Bundle Positioning
- Bundles should represent grouped transformation capabilities rather than arbitrary promotional groupings.
- Bundles should encourage broader transformation discovery across related services.

### 6.3 Bundle Recommendations
- The marketplace should dynamically recommend:
  - related bundles
  - complementary services
  - and common transformation pathways.

- AI Guidance should also recommend bundles based on user intent and browsing patterns.

---

## 7. Roles & Responsibilities

### Unauthenticated Visitor / Prospective Client
- Can browse the entire catalog, apply filters, and view pricing.
- Can use AI Guidance for service discovery.
- Can explore related services and bundles.
- Purchasing or cart actions may trigger authentication flows.

---

## 8. Navigation & UX Principles
- **URL-Driven State**: Filters and category navigation reflect in the URL for shareable views.
- **Instant Filtering**: The grid updates immediately as filters are selected.
- **Economy 4.0 Alignment**: The marketplace reflects the Economy 4.0 sector structure throughout the browsing experience.
- **Progressive Discovery**: Users are guided toward related services, bundles, and transformation pathways.
- **AI-Guided Navigation**: AI Guidance acts as a marketplace advisor helping users navigate uncertainty.
- **Structured Delivery Positioning**: Marketplace messaging subtly reinforces standardized and architecture-led delivery models.
- **Clean Ecommerce Experience**: The marketplace should feel modern, fast, and productized rather than like a traditional consulting portal.

---

## 9. Out of Scope
- Service detail pages (handled separately).
- Cart management and checkout flows.
- Dynamic pricing calculators.
- Fully automated AI bundle generation.

---

## 10. Expected Outcomes
- **Self-Service Discovery**: Users can independently identify relevant transformation services without requiring lengthy discovery workshops.
- **Trust via Transparency**: Standardized pricing and delivery timelines reduce consulting ambiguity.
- **Structured Transformation Navigation**: Users understand that services follow standardized and governed delivery approaches.
- **Bundle Adoption**: Increased discovery and adoption of grouped transformation offerings.
- **Cross-Service Exploration**: Users progressively discover related services and broader transformation pathways.
- **AI-Assisted Navigation**: AI Guidance reduces friction for users unsure where to start.

