# Feature: Contact Us Page -- Prototype Shell

## 1. Platform Context
- Platform: DQ Digital Experience Platform (DXP)
- Type: Generalised
- Prototype Stage: Shell
- Stage Coverage: End-to-end page
- Industry: Cross-industry
- Solution Outcomes: 
  - Validate public lead capture workflow for unregistered users.
  - Test CRM integration for submission routing.
  - Ensure page aligns visually with DQ branding and design system.

## 2. Build Approach & References
- Mode: New Build
- Reference Builds (Internal): N/A
- Reference Builds (External): N/A
- Base Shell: N/A
- Input Documents: DQ_DXP_BRS_v1.7.md, Contact Us screenshot (uploaded), Magic Patterns anatomy reference

## 3. DevOps
- Prototype Tool: Magic Patterns
- Prototype Repo: <fill after build>
- Prototype Link: <fill after build>

## 4. Specification

### 4.1 Brand & Visual System
- Design System Reference: DQ Shell Design Tokens
- Colours:
  - Primary: DQ Blue #0052CC
  - Secondary: DQ Teal #00BFA6
  - Background: #FFFFFF, Surface: #F8F9FA, Surface 2: #E5E5E5
  - Text primary: #111111, Text muted: #6B7280, Text disabled: #9CA3AF
  - Border: #D1D5DB
  - Status: Success #22C55E, Warning #FACC15, Danger #EF4444, Info #3B82F6
- Typography:
  - UI font: Inter, weights 400,500,600,700
  - Mono font: Fira Code -- used for IDs, codes, technical values
- Radii: Card 12px, Modal 12px, Button 8px, Badge/pill 999px
- Spacing: Base grid 8px. Standard card padding 16px.
- Logo: lowercase "dq" in Primary Blue, 600 weight, single line, left-aligned in top bar

### 4.2 Layout Shell
- Viewport target: 1440px+
- Top bar: 64px, sticky, Background #FFFFFF, Border #D1D5DB. Left: Logo. Centre: Navigation. Right: Role Lens Selector (default Unregistered)
- Left sidebar: None for public page
- Main content: Background #F8F9FA, Padding 32px top/bottom, 64px left/right, max-width 1024px, centered, scrollable

### 4.3 Personas
| # | Name | Role | Landing Page | Nav Scope |
|---|------|------|-------------|-----------|
| 1 | Public Explorer | Unregistered User | /contact-us | Brand Authority, Smart Funnel, Engagement Continuity |

### 4.4 Navigation Structure
- Global
  - Home -> /
  - About DQ -> /about
  - Services -> /services
  - Products -> /products
  - Contact Us -> /contact-us
- Persona-restricted items: None for Unregistered

### 4.5 Feature Specification
- Screens in scope this iteration: /contact-us
- Demo Storyline: Unregistered user lands on Contact Us, fills form, submits, and receives confirmation routed to inbuilt CRM
- Components per screen:
  | Screen | Components | Primary Action | States Required |
  |--------|------------|----------------|-----------------|
  | /contact-us | Hero Section | N/A | Default |
  | /contact-us | Contact Form | Submit -> Create CRM Lead | Default / Validation Error / Success / Loading |
  | /contact-us | Map / Address Info | N/A | Default |
  | /contact-us | CTA Section | N/A | Default |

## 5. User Journeys

### 5.1 Primary Flow
1. Unregistered user navigates to `/contact-us`
2. Views page header/hero
3. Completes form: Name, Email, Organization, Message
4. Clicks Submit
5. Submission creates a record in `s2_account.requests` in CRM frontend
6. Confirmation toast appears: "Thank you! Your inquiry has been submitted."
7. User may continue browsing other public pages

### 5.2 Alternate Flows
- User submits incomplete form → validation errors shown inline
- Network delay → Loading spinner appears on Submit button

### 5.3 Edge Cases
- Empty fields trigger inline errors
- Email format invalid → validation error
- Message > 1000 characters → truncated or show tooltip

## 6. Fixture Data
| Entity | ID | Field 1 | Field 2 | Field 3 | Links to |
|--------|----|---------|---------|---------|---------|
| ContactFormSubmission | CTS-001 | Name: "Alice Smith" | Email: "alice@example.com" | Message: "Interested in DQ services." | s2_account.requests |

## 7. Shared Components
- ButtonPrimary: Height 48px, radius 8px, Primary color bg, white text, hover: darker shade, disabled: muted gray
- InputField: Height 40px, border 1px #D1D5DB, radius 8px, padding 8px
- TextAreaField: Height 120px, border 1px #D1D5DB, radius 8px, padding 8px
- ToastNotification: Top-right, auto-dismiss 3s, Background #22C55E, white text
- HeroSection: Background #F8F9FA, padding 32px, centered heading
- MapEmbed: 100% width, 320px height, border radius 12px

## 8. Scope
### In Scope
- Contact Us page layout and visual design
- Form submission to inbuilt CRM
- Validation and success states
### Out of Scope
- Registered user variations
- Multi-language / localization
- Analytics tracking (planned future)
- Map interaction beyond display

## 9. Assumptions
- Only Unregistered users access this page
- CRM frontend is live and available for lead creation
- Desktop-first layout; responsive handled separately
- Form fields limited to Name, Email, Organization, Message
- Toast appears on successful submission

## 10. Prototype Build Prompt
```
Build a high-fidelity clickable prototype of DQ Contact Us — a Magic Patterns Shell platform for Unregistered Users integrating with inbuilt CRM.

Colours
Primary: DQ Blue #0052CC
Secondary: DQ Teal #00BFA6
Background: #FFFFFF, Surface: #F8F9FA, Surface 2: #E5E5E5
Text primary: #111111, Text muted: #6B7280, Text disabled: #9CA3AF
Border: #D1D5DB
Status: Success #22C55E, Warning #FACC15, Danger #EF4444, Info #3B82F6

Typography
UI font: Inter, weights 400,500,600,700
Mono font: Fira Code

Radii
Card: 12px, Modal: 12px, Button: 8px, Badge/pill: 999px
Spacing
Base grid: 8px. Standard card padding 16px.
Logo: lowercase "dq" in Primary Blue, 600 weight, single line, top-left

Layout
Viewport 1440px+
Top bar: 64px, sticky, white bg, bottom border #D1D5DB. Left: logo. Centre: navigation. Right: role selector
Left sidebar: none
Main content: #F8F9FA, padding 32px top/bottom, 64px left/right, max-width 1024px, centered, scrollable

Persona / Segment System
# | Name | Role | Landing
1 | Public Explorer | Unregistered User | /contact-us
Active indicator: highlight nav item in Primary Blue
Nav scoping: only Brand Authority, Smart Funnel, Engagement Continuity

Navigation Structure
Global
  Home -> /
  About DQ -> /about
  Services -> /services
  Products -> /products
  Contact Us -> /contact-us

Fixture Data
ContactFormSubmission
ID: CTS-001
Name: "Alice Smith"
Email: "alice@example.com"
Message: "Interested in DQ services."
Links to: s2_account.requests

Pages to Build
/contact-us
  Hero Section
  Contact Form: fields Name, Email, Organization, Message, Submit button
  Map / Address info
  CTA section
  Interactions: submit -> CRM lead, show toast

Shared Components
ButtonPrimary, InputField, TextAreaField, ToastNotification, HeroSection, MapEmbed

Interaction Notes
Form validation: inline errors for empty/invalid fields
Submit button: creates s2_account.requests record in CRM, triggers toast
Toast: auto-dismiss 3s, top-right
No API calls beyond CRM frontend
```

STATUS: READY FOR APPROVAL
Saved: contact-us-prototype-shell.md
