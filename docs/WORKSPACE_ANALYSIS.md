# Workspace Analysis: DQ Projects

## Overview

This workspace contains two distinct projects:

1. **DQ_Prod_TMaaS_Prototype** - The main TMaaS (Talent Management as a Service) prototype application
2. **dq_corp_web-feat-design-system-preview-phase1** - The reference design system for DQ corporate web

---

## 1. DQ_Prod_TMaaS_Prototype (Main Project)

### Technology Stack

- **Framework**: React 18.3.1 with Vite
- **Language**: TypeScript 5.8.3
- **Routing**: React Router DOM 6.30.1
- **UI Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS 3.4.17
- **State Management**: TanStack React Query 5.83.0
- **Forms**: React Hook Form 7.61.1 with Zod validation
- **Animation**: Framer Motion 12.34.0
- **Testing**: Vitest 3.2.4 with Testing Library
- **Build Tool**: Vite 5.4.19

### Project Structure

```
DQ_Prod_TMaaS_Prototype/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui primitives (40+ components)
│   │   ├── engagements/    # Engagement-specific components
│   │   └── *.tsx           # Feature components (Hero, Navbar, etc.)
│   ├── pages/              # Route pages
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── legal/          # Legal pages
│   │   └── onboarding/     # Onboarding flow
│   ├── contexts/           # React contexts (AuthContext)
│   ├── data/               # Mock data and types
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and helpers
│   ├── utils/              # Utility functions
│   └── test/               # Test utilities
├── public/                 # Static assets
├── specs/                  # Project specifications
└── [config files]          # Various config files
```

### Key Features Implemented

#### 1. **Service Marketplace**

- Service discovery and exploration
- Service detail pages
- Service ordering workflow
- Multi-step order stepper

#### 2. **Dashboard System**

- Overview dashboard
- Active services management
- Engagement tracking with detail views
- Service order management (provider & customer views)
- Organization profile management

#### 3. **Authentication & Onboarding**

- Sign-in flow
- Multi-step onboarding:
  - Profile setup
  - Organization access
  - Organization setup
  - Completion confirmation

#### 4. **Butler AI Integration**

- AI-powered chat assistant
- Transact AI Mode 01
- Escalation handling
- Static prototype implementation

#### 5. **Service Order Management** (Enhanced)

- **Data Models**:
  - ServiceSession (meetings with attendees, notes, status)
  - AuditLogEntry (activity tracking)
  - Permissions (access control)
  - Enhanced deliverables with acceptance tracking
- **Features**:
  - Real-time countdown for review deadlines
  - Session management with attendees
  - Audit trail/activity log
  - Permission-based UI controls
  - Urgency indicators and alerts

#### 6. **Legal & Compliance**

- Terms of service
- Privacy policy
- FAQ section

### Design System (Current)

#### Color Palette

```css
Primary (Brand Orange): hsl(11 96% 60%)
Secondary (Navy): hsl(222 47% 11%)
Background: hsl(220 20% 97%)
Foreground: hsl(222 47% 11%)
```

#### Custom Brand Tokens

- `--brand`: Orange brand color
- `--navy`: Navy brand color
- `--gradient-brand`: Orange gradient
- `--gradient-navy`: Navy gradient
- Custom shadows: `shadow-brand`, `shadow-card`, `shadow-elevated`

#### Typography

- Font: Inter (300-800 weights)
- Custom utility: `.text-gradient-brand`

### Routing Structure

```
/ (Index)
/explore
/marketplace
/service/:id
/butler-demo
/sign-in
/onboarding/* (profile, organisation-access, organisation-setup, complete)
/dashboard/* (overview, services, engagement/:id, orders, orders/:id, profile)
/dashboard/customer/* (orders, orders/:id)
/legal/* (terms, privacy, faq)
```

### Documentation Files

The project includes extensive documentation:

- `BUTLER_AI_*.md` - Butler AI implementation guides
- `FEATURES_IMPLEMENTED.md` - Detailed feature documentation
- `IMPLEMENTATION_*.md` - Various implementation guides
- `TRANSACT_AI_*.md` - Transact AI integration
- `WORKING_SESSIONS_IMPLEMENTATION.md` - Session management
- `WF-4_SETUP_GUIDE.md` - Workflow setup

### Testing

- Vitest configured with jsdom
- Component tests for Navbar and DiagnoseDialog
- Test utilities in `src/test/`

---

## 2. dq_corp_web-feat-design-system-preview-phase1 (Design System Reference)

### Technology Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript 5
- **UI Library**: shadcn 4.4.0 with Base UI
- **Styling**: Tailwind CSS 4 (latest)
- **Animation**: Framer Motion 12.38.0
- **Testing**: Vitest 4.1.5 with Testing Library
- **Icons**: Lucide React 1.9.0

### Project Structure

```
dq_corp_web-feat-design-system-preview-phase1/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes
│   ├── about/
│   ├── api/
│   ├── design-preview/    # Design system preview
│   ├── discover/
│   ├── help/
│   ├── onboarding/
│   ├── ops/
│   ├── services/
│   └── workspace/
├── components/
│   ├── ui/                # shadcn/ui primitives (30+ components)
│   ├── foundation/        # Platform-wide components
│   │   ├── analytics/
│   │   ├── auth/
│   │   ├── layouts/
│   │   ├── navigation/
│   │   ├── notifications/
│   │   └── observability/
│   ├── features/          # Stage-scoped feature components
│   │   ├── stage-0/
│   │   ├── stage-1/
│   │   ├── stage-2/
│   │   ├── stage-3/
│   │   └── stage-4/
│   └── site/              # Site-specific components
├── lib/                   # Utilities and libraries
│   ├── api/
│   ├── auth/
│   ├── config/
│   ├── hooks/
│   ├── observability/
│   ├── types/
│   └── utils/
├── docs/                  # Comprehensive documentation
│   ├── architecture/
│   ├── configuration/
│   ├── database/
│   ├── features/
│   ├── guides/
│   └── iam/
├── k8s/                   # Kubernetes configurations
├── tests/                 # Test suites
└── workspace/             # Research and design docs
```

### Design System v1.2.0

#### Brand Identity

- **Primary Navy**: `oklch(0.12 0.082 264)` - #030f35
- **Primary Orange**: `oklch(0.65 0.208 29)` - #fb5535
- **White**: #ffffff

#### Color System

The design system uses **OKLCH color space** for perceptually uniform colors:

**Navy Scale** (950-50):

- 950: `oklch(0.12 0.082 264)` - Darkest
- 500: `oklch(0.35 0.160 264)` - Mid
- 50: `oklch(0.96 0.012 264)` - Lightest

**Orange Scale** (950-50):

- 950: `oklch(0.30 0.140 29)` - Darkest
- 500: `oklch(0.65 0.208 29)` - Brand orange
- 50: `oklch(0.97 0.020 29)` - Lightest

**Gray Scale** (950-50):

- Neutral grays with slight navy tint

**Semantic Colors**:

- Success: `oklch(0.55 0.158 145)` (green)
- Warning: `oklch(0.62 0.140 72)` (yellow)
- Info: `oklch(0.55 0.180 255)` (blue)

#### Typography

- **Primary**: Plus Jakarta Sans (variable 200-800)
- **Mono**: JetBrains Mono
- **Fallback**: Inter, Space Grotesk

#### Dynamic Tokens (v1.2.0 Features)

**1. Mesh Gradients**

- `--mesh-hero-light`: Navy/orange brand mesh for light mode
- `--mesh-hero-dark`: Subtle mesh for dark mode
- `--mesh-cta-orange`: Orange-focused mesh for CTAs

**2. Glass Surfaces**

- `surface-glass-light`: Frosted glass effect (light mode)
- `surface-glass-dark`: Frosted glass effect (dark mode)
- Backdrop blur: 8px, 16px, 24px options

**3. Glow Effects**

- `--glow-orange-sm/md`: Orange glow for interactive elements
- `--glow-navy-md`: Navy glow for emphasis

**4. Motion System**

- Duration tokens: instant (75ms) → very-slow (600ms)
- Easing functions: default, out, in, spring
- Respects `prefers-reduced-motion`

**5. Marquee Animation**

- Three speed presets: slow (60s), mid (35s), fast (18s)
- Auto-pause on hover
- Gradient mask for seamless loop

#### Dark Mode

- Navy becomes the canvas background
- Orange remains the primary accent
- Elevated contrast for readability
- Glass surfaces with reduced opacity

#### Radius System

- Base: 8px (0.5rem)
- Scale: sm (4px) → 4xl (32px)

### Component Architecture

#### Foundation Components

Platform-wide building blocks:

- Navigation systems
- Auth wrappers
- Observability hooks
- Notification systems
- Analytics integration

#### Feature Components

Stage-scoped components organized by development stage (0-4):

- Modular feature development
- Clear ownership boundaries
- Progressive enhancement

#### UI Primitives

30+ shadcn/ui components:

- Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Dialog, Dropdown, Input, Label, Pagination, Popover, Progress, Radio, ScrollArea, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toggle, Tooltip

### Infrastructure

#### Docker Support

- Dockerfile included
- docker-compose.yml for local development
- Multi-stage builds

#### Kubernetes

- Base configurations in `k8s/base/`
- Environment overlays in `k8s/overlays/`
- Production-ready manifests

#### Documentation

Comprehensive docs covering:

- Architecture decisions (ADRs)
- Setup and deployment guides
- IAM and auth patterns
- Database integration
- Feature specifications
- Configuration management

### AI/Agent Integration

Multiple AI tool configurations:

- `.ai/` - AI priming and standards
- `.claude/` - Claude-specific configs
- `.codex/` - Codex skills
- `.cursor/` - Cursor rules
- `.kiro/` - Kiro steering files
- `.github/copilot-instructions.md`

---

## Key Differences

| Aspect             | DQ_Prod_TMaaS_Prototype | dq_corp_web (Design System)           |
| ------------------ | ----------------------- | ------------------------------------- |
| **Framework**      | React + Vite            | Next.js 16 (App Router)               |
| **Purpose**        | TMaaS application       | Corporate web + design system         |
| **Tailwind**       | v3.4.17                 | v4 (latest)                           |
| **Color Space**    | HSL                     | OKLCH (perceptually uniform)          |
| **Design System**  | Basic (custom tokens)   | Advanced v1.2.0 (mesh, glass, glow)   |
| **Architecture**   | SPA with client routing | SSR/SSG with App Router               |
| **Infrastructure** | Basic (Vercel)          | Full (Docker, K8s)                    |
| **Documentation**  | Feature-focused         | Comprehensive (architecture, ops)     |
| **Component Org**  | Flat structure          | Hierarchical (foundation/features/ui) |
| **Testing**        | Vitest 3.2.4            | Vitest 4.1.5                          |
| **Deployment**     | Vercel                  | Kubernetes-ready                      |

---

## Design System Migration Opportunities

### 1. Color System Upgrade

**Current (TMaaS)**: HSL-based colors

```css
--primary: 11 96% 60%;
--navy: 222 47% 11%;
```

**Target (Design System)**: OKLCH-based colors

```css
--dq-orange: oklch(0.65 0.208 29);
--dq-navy: oklch(0.12 0.082 264);
```

**Benefits**:

- Perceptually uniform color scales
- Better color interpolation
- Consistent brightness across hues
- More predictable gradients

### 2. Advanced Visual Effects

**Available from Design System**:

- **Mesh gradients**: Hero backgrounds with navy/orange brand mesh
- **Glass surfaces**: Frosted glass cards with backdrop blur
- **Glow effects**: Interactive element highlights
- **Motion system**: Standardized durations and easing
- **Marquee animations**: Smooth infinite scrolling

### 3. Typography Enhancement

**Current**: Inter only
**Target**: Plus Jakarta Sans (primary) + JetBrains Mono (code)

### 4. Component Architecture

**Current**: Flat component structure

```
components/
├── ui/
└── *.tsx (all feature components)
```

**Target**: Hierarchical organization

```
components/
├── ui/           # Primitives
├── foundation/   # Platform-wide
├── features/     # Stage-scoped
└── site/         # Site-specific
```

### 5. Dark Mode Enhancement

**Current**: Basic dark mode support
**Target**: Navy-as-canvas dark mode with refined contrast

---

## Recommendations

### Immediate Actions

1. **Adopt OKLCH Color System**
   - Migrate color tokens to OKLCH
   - Update Tailwind config
   - Maintain visual consistency during transition

2. **Integrate Advanced Visual Effects**
   - Add mesh gradient backgrounds to hero sections
   - Implement glass surface cards for dashboard
   - Add glow effects to interactive elements

3. **Standardize Motion**
   - Adopt motion duration tokens
   - Use standardized easing functions
   - Ensure reduced-motion support

4. **Enhance Typography**
   - Consider Plus Jakarta Sans for headings
   - Add proper font feature settings
   - Improve letter-spacing for large text

### Medium-term Goals

5. **Reorganize Component Structure**
   - Separate foundation components
   - Create feature-scoped folders
   - Improve component discoverability

6. **Improve Dark Mode**
   - Implement navy-as-canvas approach
   - Refine contrast ratios
   - Add glass surfaces for depth

7. **Documentation Alignment**
   - Create design system documentation
   - Document component usage patterns
   - Add Storybook or similar

### Long-term Considerations

8. **Infrastructure Parity**
   - Consider Docker containerization
   - Evaluate Kubernetes deployment
   - Add comprehensive monitoring

9. **Testing Enhancement**
   - Increase test coverage
   - Add visual regression tests
   - Implement E2E testing

10. **Design System Package**
    - Extract shared components
    - Create npm package
    - Version and publish design system

---

## Conclusion

The **DQ_Prod_TMaaS_Prototype** is a well-structured React application with comprehensive features for talent management services. The **dq_corp_web design system** provides a mature, production-ready design foundation with advanced visual effects and infrastructure support.

The main opportunity is to **gradually adopt the design system's advanced features** while maintaining the TMaaS application's functionality. The OKLCH color system, mesh gradients, glass surfaces, and motion system would significantly enhance the visual quality and brand consistency of the TMaaS prototype.

The migration can be done incrementally, starting with color tokens and visual effects, then moving to component architecture and infrastructure improvements over time.
