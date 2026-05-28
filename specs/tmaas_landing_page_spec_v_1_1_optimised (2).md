# Specification: Landing Page (Stage 00) — DQ TMaaS Platform

---

## Story: The AI-Driven Transformation Entrypoint

As a prospective client or returning enterprise user, I want a frictionless, value-oriented entry point into the DigitalQatalyst ecosystem, so that I can immediately articulate my business problem using natural language (Butler AI), browse transformation services by strategic goal, discover related services and bundles, and understand the core value proposition of TMaaS without navigating complex enterprise sales menus.

### The Conversion & Navigation Backbone

To move away from traditional, brochure-ware consulting websites, the landing page is modeled around immediate action and guided discovery:

1. **Intent Capture (Butler AI Layer)**
   - Replaces the traditional "Contact Us" form with an intelligent natural-language prompt box.
   - Allows the user to describe their raw business problem, instantly bridging the gap between their non-technical problem and the TMaaS service catalogue.
   - Butler AI acts as a guided transformation advisor, helping users navigate services, bundles, and transformation pathways.

2. **Strategic Browsing (Goal-Oriented Navigation Layer)**
   - Users often know their desired outcome but not the exact service required.
   - The page provides immediate jump-links to the marketplace pre-filtered by specific Business Goals (e.g., "Grow My Business", "Launch AI").
   - The experience encourages progressive service discovery rather than isolated service browsing.

3. **Trust & Proof (Validation Layer)**
   - Surfacing featured "Best Seller" services and bundles directly on the homepage with transparent pricing and timelines to immediately establish the productized value proposition of TMaaS.
   - Related services and bundle recommendations encourage users to understand how services work together as part of a broader transformation journey.
   - Core methodology and FAQ sections build confidence in the structured delivery approach.

---

## Purpose (Why):

The TMaaS landing page must immediately differentiate itself from traditional IT consulting by emphasizing productization, guided discovery, and structured delivery:
- **Immediate Value Demonstration**: Show, don't tell, the productized nature of services by displaying actual offerings with transparent pricing and durations.
- **Frictionless Onboarding**: Reduce the barrier to entry by using conversational AI to map vague business problems to concrete digital services.
- **Outcome-First Orientation**: Encourage users to think about what they want to achieve rather than what technology they want to buy.
- **Guided Transformation Discovery**: Help users discover related services, bundles, and recommended transformation paths rather than isolated service purchases.
- **Structured Delivery Positioning**: Reinforce that TMaaS follows a defined and architecture-led delivery approach rather than ad-hoc consulting execution.

---

## Offering (What):

The Landing Page feature provides a single-page scrolling experience comprising:
1. **Hero Section** (with integrated Butler AI Prompt)
2. **Shop by Business Goal** (horizontal pill navigation)
3. **Featured Services** (tabbed showcase of best sellers)
4. **Recommended Bundles** (grouped service combinations)
5. **How It Works** (methodology and proof points)
6. **FAQ** (accordion-style common questions)
7. **Global Navigation & Footer**

---

## 1. Hero Section (Butler AI Entrypoint)

The primary above-the-fold experience focused on capturing user intent.

### 1.1 Layout & Messaging
- **Headline**: "Find the right transformation services for your business"
- **Visuals**: Clean, white/sky-blue gradient with subtle mesh gradients.
- **Badge**: "Butler mode" with sparkle icon to signify AI assistance.

### 1.2 Butler AI Prompt Card
- **Input Area**: A large, inviting textarea for natural language input (max 4000 characters).
- **Placeholder**: "Describe your business challenge and Butler will guide you to the right services."
- **Interactions**:
  - `Enter` key (without shift) submits the prompt.
  - Character counter for input validation.
  - Submission opens the `DiagnoseDialog` modal, passing the prompt payload to the AI agent.
- **Secondary Action**: A "Browse marketplace" link for users who prefer manual discovery.

### 1.3 Quick Prompts
- A horizontal list of predefined, clickable prompt chips (e.g., "Launch AI capabilities", "Modernize operations").
- Clicking a chip instantly populates the Butler AI and triggers the diagnosis modal.

### 1.4 Butler Guidance Positioning
- Butler AI should position itself as:
  - a transformation advisor
  - a service discovery assistant
  - a bundle recommendation guide
  - and a navigation layer for users who are unsure which services they require.

---

## 2. Shop by Business Goal

A streamlined navigation component directing users to the marketplace.

### 2.1 Section Details
- **Title**: "Shop by business goal"
- **Subtitle**: "Browse services aligned to your priority outcomes."
- **Component**: Renders the `ShopByGoalChips` component in "link" mode.
- **Action**: Clicking any chip redirects the user to `/marketplace?goal=[goal_id]`, instantly applying the relevant filter.

### 2.2 Progressive Discovery Logic
- Business goal navigation should encourage users to progressively discover:
  - related services
  - recommended next services
  - and transformation bundles.

---

## 3. Featured Services

A showcase of the marketplace's top-tier offerings to prove the TMaaS model immediately.

### 3.1 Tabbed Navigation
- Filters featured services by strategic transformation area.
- Example Tabs:
  - AI & Automation
  - Customer Experience
  - Operations
  - Security & Delivery

### 3.2 Best Sellers Grid
- Dynamically fetches the top 3 best-selling services for the active tab from the catalogue.
- **Card Format**: Uses the `ServiceProductCard` component in `variant="full"`.
- **Display Data**:
  - Category and "Best seller" badge.
  - Service Title and Description snippet.
  - Bulleted list of top 3 features.
  - Price and Duration.
  - Cart button to add directly from the homepage.

### 3.3 Related Service Discovery
- Service cards should support lightweight discovery relationships including:
  - "Often paired with"
  - "Recommended next"
  - "Commonly bundled with"
- Clicking a related recommendation should redirect users into the relevant service detail or bundle view.

---

## 4. Recommended Bundles

Highlights grouped transformation offerings designed to solve broader business challenges.

### 4.1 Bundle Showcase
- Displays curated bundles of related services.
- Example categories:
  - AI Readiness Bundle
  - Digital Operations Bundle
  - Customer Growth Bundle

### 4.2 Bundle Cards
- Each bundle card displays:
  - Bundle name
  - Short transformation outcome statement
  - Included services count
  - Indicative timeline
  - Starting price
  - CTA to explore bundle details.

### 4.3 Bundle Discovery Logic
- Bundles should reinforce the idea that services can work together as part of a broader transformation journey.
- Butler AI should also recommend bundles dynamically based on user intent.

---

## 5. How It Works Section

Explains the TMaaS operational model and provides statistical proof.

### 5.1 Step-by-Step Methodology
Three distinct cards explaining the journey:
1. **Describe your goal**: Use Butler or browse strategic outcomes.
2. **Choose your services**: Explore services and recommended bundles.
3. **Launch structured delivery**: Activate implementation with guided delivery and tracked milestones.

### 5.2 Statistical Proof Points
A horizontal divider displaying core metrics:
- **50%**: Faster delivery
- **40%**: Lower tech spend
- **98%**: SLA success rate

### 5.3 Structured Delivery Positioning
- Messaging should reinforce:
  - phased implementation
  - guided transformation
  - structured delivery governance
  - and measurable outcomes.

### 5.4 Call to Action (CTA)
- Primary Button: "Browse marketplace" (Routes to `/marketplace`)
- Secondary Button: "Ask Butler" (Triggers the global `openDiagnoseAI` event)

---

## 6. FAQ Section

Addresses common objections and explains the TMaaS paradigm.

### 6.1 Accordion Component
- Renders 8 predefined questions and answers.
- Topics cover: What is TMaaS, difference from traditional consulting, the Digital Business Platform (DBP), the 4D Framework, service types, bundles, timelines, and industry applicability.
- **Interaction**: Single-select collapsible accordion (opening one closes others).

---

## 7. Roles & Responsibilities

### Unauthenticated Visitor / Prospective Client
- Primary consumer of this page.
- Expected to use Butler AI, browse goals, or explore bundles to find relevant services.

---

## 8. Navigation & UX Principles
- **Action-Biased**: The hero section focuses on text input rather than passive reading, encouraging immediate interaction.
- **Progressive Discovery**: Users are guided toward related services, bundles, and recommended next steps rather than isolated service pages.
- **AI-Guided Navigation**: Butler AI acts as a transformation advisor helping users navigate uncertainty and discover relevant services.
- **Structured Delivery Positioning**: The page subtly reinforces that TMaaS follows a structured and guided delivery model.
- **Consistent Branding**: Uses the DQ navy and orange color palette with modern, glass-morphic elements and subtle animations (Framer Motion) to feel like a premium SaaS product rather than a consulting brochure.

---

## 9. Out of Scope
- Direct checkout or payment processing from the landing page.
- User authentication/login flows (handled by separate top-nav logic).
- Deep configuration of services (pushed to the Service Detail page).

---

## 10. Expected Outcomes
- **Higher Conversion to Catalogue**: Users are directed to the marketplace with pre-filtered context rather than bouncing from a generic homepage.
- **Immediate Understanding**: Visitors immediately grasp that DQ offers structured transformation services and bundles rather than traditional consulting.
- **AI Engagement**: High utilization of the Butler AI prompt to capture nuanced user problems for downstream service discovery.
- **Bundle Discovery**: Increased visibility and adoption of grouped transformation offerings.
- **Cross-Service Navigation**: Improved discovery of related services and transformation pathways.

