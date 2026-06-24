# TMaaS → Next.js Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the TMaaS prototype from Vite + React Router to Next.js App Router, adopting the file tree, tooling, and AI rules conventions of the `dxp_fe_iac` template.

**Architecture:** Next.js App Router with route groups mirroring the current page hierarchy; components reorganised into `features/`, `foundation/`, and `ui/` layers; lib consolidated under versioned API client, hooks, types, and utils. Auth stays Supabase-based but moves to server-side session handling via Next.js middleware.

**Tech Stack:** Next.js 16 · React 19 · TypeScript 5 strict · Tailwind CSS 4 · shadcn/ui (base-nova, RSC) · Supabase · Vitest 4 + React Testing Library · ESLint 9 + Prettier · Vercel (standalone)

**Branch:** `claude/nextjs-migration-sharavi`

---

## Target File Tree

```
DQ_Prod_TMaaS_Prototype/
├── .ai/
│   ├── CLAUDE.md
│   ├── AGENTS.md
│   ├── PROJECT_AI_STANDARDS.md
│   ├── context.md
│   ├── .ai-version
│   └── priming/
│       ├── priming-accepted-tech-stack.md
│       ├── priming-development-rules.md
│       ├── priming-target-architecture.md
│       ├── priming-database-architecture.md
│       └── priming-nonfunctional-specs.md
├── .cursor/rules/
│   └── dq-ai-standards.mdc          (consolidated from existing 7 .mdc files)
├── .github/
│   └── copilot-instructions.md
├── .kiro/steering/
│   └── dq-ai-standards.md
├── app/
│   ├── layout.tsx                   (root layout: fonts, providers, global nav)
│   ├── page.tsx                     (home/landing — maps to IndexProductLanding)
│   ├── globals.css
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── favicon.ico
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   └── sign-in/page.tsx
│   ├── (onboarding)/
│   │   ├── layout.tsx
│   │   ├── profile/page.tsx
│   │   ├── organisation/page.tsx
│   │   ├── access/page.tsx
│   │   └── complete/page.tsx
│   ├── (legal)/
│   │   ├── layout.tsx
│   │   ├── legal/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── faq/page.tsx
│   ├── explore/
│   │   └── page.tsx
│   ├── marketplace/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx          (service detail)
│   ├── contact/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── butler/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx               (auth-gated, DashboardLayout shell)
│   │   ├── overview/page.tsx
│   │   ├── active-services/page.tsx
│   │   ├── engagements/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── service-orders/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── (account)/
│   │   │   ├── profile/page.tsx
│   │   │   ├── organisation/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── (comms)/
│   │   │   ├── inbox/page.tsx
│   │   │   ├── notifications/page.tsx
│   │   │   └── calendar/page.tsx
│   │   ├── (docs)/
│   │   │   └── documents/page.tsx
│   │   ├── (admin)/
│   │   │   ├── organisations/page.tsx
│   │   │   ├── users/page.tsx
│   │   │   ├── catalogue/page.tsx
│   │   │   └── org-admin/page.tsx
│   │   ├── (support)/
│   │   │   ├── support/page.tsx
│   │   │   ├── help/page.tsx
│   │   │   └── help-content/page.tsx
│   │   └── dq/
│   │       ├── portfolio/page.tsx
│   │       ├── finance/page.tsx
│   │       ├── support-ops/page.tsx
│   │       ├── queue/page.tsx
│   │       ├── invoices/page.tsx
│   │       └── onboarding/page.tsx
│   └── api/
│       ├── health/route.ts
│       └── contact/route.ts
├── components/
│   ├── features/
│   │   ├── landing/index.ts         (HeroSection, HowItWorks, ValueProps, etc.)
│   │   ├── marketplace/index.ts     (ServiceProductCard, Filters, CategoryNav, etc.)
│   │   ├── service-detail/index.ts  (ServiceDetailHero, Tabs, sections)
│   │   ├── engagements/index.ts     (tabs, health indicators, dashboards)
│   │   ├── dashboard/index.ts       (shared dashboard widgets)
│   │   └── cart/index.ts            (CartDrawer, CartNavButton)
│   ├── foundation/
│   │   ├── layouts/index.ts         (DashboardLayout, LegalPageLayout)
│   │   ├── navigation/index.ts      (Navbar, NavLink, ContextSwitcher)
│   │   ├── auth/index.ts            (AuthProvider, ProtectedRoute wrappers)
│   │   ├── providers/index.ts       (QueryClientProvider, CartContext, CatalogContext)
│   │   ├── seo/index.ts             (JsonLd, structured data helpers)
│   │   └── notifications/index.ts   (Sonner/toasts)
│   └── ui/                          (shadcn/ui components — regenerated)
│       └── index.ts
├── lib/
│   ├── api/
│   │   └── v1/
│   │       ├── client.ts            (Supabase client + typed query helpers)
│   │       └── index.ts
│   ├── auth/
│   │   └── index.ts                 (session helpers, useAuth hook)
│   ├── catalog/
│   │   └── index.ts                 (catalog filters, display labels, query keys)
│   ├── config/
│   │   └── index.ts                 (env config, feature flags)
│   ├── hooks/
│   │   └── index.ts                 (useCart, useCatalog, useFeatureFlags)
│   ├── observability/
│   │   ├── logger.ts
│   │   └── index.ts
│   ├── seo/
│   │   └── index.ts                 (seoHead, structuredData, variantSeoCopy)
│   ├── types/
│   │   ├── database.types.ts        (Supabase auto-generated — copy as-is)
│   │   └── index.ts
│   └── utils/
│       └── index.ts                 (cn, brandAccent, brandLinks, etc.)
├── middleware.ts                    (auth guards: /dashboard requires session)
├── tests/
│   ├── unit/
│   └── integration/
│       └── contact.test.ts
├── docs/
│   ├── README.md
│   ├── SETUP.md
│   ├── CHANGELOG.md
│   ├── architecture/
│   └── superpowers/plans/           (this file lives here)
├── public/                          (favicon, og-image, robots.txt, sitemap.xml — unchanged)
├── supabase/                        (migrations, seed-data.sql — unchanged)
├── scripts/                         (catalog, SEO generation scripts — unchanged)
├── scratch/                         (WIP files — move root-level .md clutter here)
├── .ai-version
├── AGENTS.md                        (alias → .ai/PROJECT_AI_STANDARDS.md)
├── CLAUDE.md                        (alias → .ai/PROJECT_AI_STANDARDS.md)
├── components.json
├── eslint.config.mjs
├── middleware.ts
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── prettier.rc.json
├── tsconfig.json
├── vercel.json
├── vitest.config.ts
├── vitest.setup.ts
└── .env.example
```

---

## Task 1: Create the branch and archive root clutter

**Files:**

- Move: all root-level `*.md` implementation docs → `scratch/archive/`
- Move: `butler_ai_spec_faithful_prototype.html`, `test-marketplace.tsx`, `check-page.mjs`, `generate_services.*`, `update_descriptions.*`, `update_prices.*` → `scratch/archive/`
- Keep at root: `README.md`, `CLAUDE.md`, `AGENTS.md`, `package.json`, and all config files

- [ ] **Step 1: Move root-level markdown clutter to scratch/archive**

```bash
mkdir -p scratch/archive
git mv BUTLER_AI_README.md scratch/archive/
git mv BUTLER_AI_ESCALATION_SPEC.md scratch/archive/
git mv BUTLER_STATIC_PROTOTYPE_IMPLEMENTATION.md scratch/archive/
git mv CUSTOMER_SERVICE_ORDERS_IMPLEMENTATION.md scratch/archive/
git mv END_DATE_IMPLEMENTATION.md scratch/archive/
git mv ENGAGEMENT_OVERVIEW_OPTIMIZATION.md scratch/archive/
git mv ENHANCED_FEATURES_COMPLETED.md scratch/archive/
git mv FEATURE_FLAGS.md scratch/archive/
git mv FEATURES_IMPLEMENTED.md scratch/archive/
git mv IMPLEMENTATION_PLAN.md scratch/archive/
git mv IMPLEMENTATION_SUMMARY.md scratch/archive/
git mv MY_CHANGES_SUMMARY.md scratch/archive/
git mv NAVIGATION_IMPROVEMENTS.md scratch/archive/
git mv REPOSITORY_MIGRATION.md scratch/archive/
git mv SERVICE_ROUTING_FIX.md scratch/archive/
git mv TRANSACT_AI_INTEGRATION_GUIDE.md scratch/archive/
git mv TRANSACT_AI_MODE_01_README.md scratch/archive/
git mv WF-4_SETUP_GUIDE.md scratch/archive/
git mv WORKING_SESSIONS_IMPLEMENTATION.md scratch/archive/
git mv WORKSPACE_ANALYSIS.md scratch/archive/
git mv WF-4_Daily_Story_Pipeline_Manager.json scratch/archive/
git mv butler_ai_spec_faithful_prototype.html scratch/archive/
git mv test-marketplace.tsx scratch/archive/
git mv check-page.mjs scratch/archive/
git mv generate_services.py scratch/archive/ 2>/dev/null || true
git mv update_descriptions.py scratch/archive/ 2>/dev/null || true
git mv update_prices.py scratch/archive/ 2>/dev/null || true
```

- [ ] **Step 2: Move specs to docs/architecture**

```bash
mkdir -p docs/architecture
git mv specs/* docs/architecture/
rmdir specs
```

- [ ] **Step 3: Verify root is clean (only config + README + CLAUDE.md + AGENTS.md)**

```bash
ls -1 *.md *.json *.ts *.js *.html *.mjs 2>/dev/null | sort
```

Expected: only `README.md`, `package.json`, `vite.config.ts`, `vitest.config.ts`, `tailwind.config.ts`, `eslint.config.js`, `postcss.config.js`, `vercel.json`, `components.json`, `tsconfig*.json`, `index.html`, `middleware.ts`

- [ ] **Step 4: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "chore: archive root-level markdown clutter to scratch/archive"
```

---

## Task 2: Install Next.js and new dependencies

**Files:**

- Modify: `package.json`
- Create: `next.config.ts`, `postcss.config.mjs`, `.prettierrc.json`, `eslint.config.mjs`, `vitest.setup.ts`
- Delete: `vite.config.ts`, `tsconfig.app.json`, `tsconfig.node.json`

- [ ] **Step 1: Uninstall Vite and React Router**

```bash
npm uninstall vite @vitejs/plugin-react vite-plugin-react react-router-dom lovable-tagger
```

- [ ] **Step 2: Install Next.js and updated tooling**

```bash
npm install next@16 react@19 react-dom@19
npm install --save-dev @types/react@19 @types/react-dom@19 @types/node@20 typescript@5
npm install --save-dev @tailwindcss/postcss@4 tailwindcss@4
npm install --save-dev eslint@9 eslint-config-next eslint-config-prettier eslint-plugin-prettier prettier
npm install --save-dev vitest@4 @vitejs/plugin-react@6 @testing-library/react@16 @testing-library/jest-dom jsdom
```

- [ ] **Step 3: Create `next.config.ts`**

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

- [ ] **Step 4: Create `postcss.config.mjs`**

```javascript
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 5: Create `.prettierrc.json`**

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100
}
```

- [ ] **Step 6: Replace `eslint.config.js` with `eslint.config.mjs`**

Delete the old `eslint.config.js`, then create:

```javascript
// eslint.config.mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

- [ ] **Step 7: Replace tsconfig**

Delete `tsconfig.app.json` and `tsconfig.node.json`. Rewrite `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 8: Replace `vitest.config.ts`**

```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  test: {
    include: ["tests/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

- [ ] **Step 9: Create `vitest.setup.ts`**

```typescript
// vitest.setup.ts
import "@testing-library/jest-dom";
```

- [ ] **Step 10: Update `package.json` scripts**

Replace the scripts block:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage",
  "format": "prettier . --write",
  "format:check": "prettier . --check",
  "typecheck": "tsc --noEmit",
  "db:seed": "tsx scripts/seed-catalog-from-fixture.ts",
  "catalog:import": "tsx scripts/import-catalog-csv.ts"
}
```

- [ ] **Step 11: Delete the Vite entry point and old Vite config**

```bash
git rm index.html vite.config.ts tsconfig.app.json tsconfig.node.json eslint.config.js postcss.config.js tailwind.config.ts 2>/dev/null || true
```

Note: Tailwind 4 config moves into `globals.css` with `@import "tailwindcss"` — no separate `tailwind.config.ts` required for basic usage; custom tokens go in CSS.

- [ ] **Step 12: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "chore: replace Vite/React Router tooling with Next.js 16 + Tailwind 4"
```

---

## Task 3: Initialise the AI rules (.ai/ structure)

**Files:**

- Create: `.ai/CLAUDE.md`, `.ai/AGENTS.md`, `.ai/PROJECT_AI_STANDARDS.md`, `.ai/context.md`, `.ai/.ai-version`
- Create: `.ai/priming/priming-development-rules.md`, `priming-accepted-tech-stack.md`, `priming-target-architecture.md`, `priming-database-architecture.md`, `priming-nonfunctional-specs.md`
- Create: `CLAUDE.md` (root alias), `AGENTS.md` (root alias)
- Create: `.cursor/rules/dq-ai-standards.mdc` (consolidate existing 7 .mdc files)
- Create: `.github/copilot-instructions.md`
- Create: `.kiro/steering/dq-ai-standards.md`

- [ ] **Step 1: Create `.ai/` directory structure**

```bash
mkdir -p .ai/priming
mkdir -p .github
mkdir -p .kiro/steering
```

- [ ] **Step 2: Create `.ai/.ai-version`**

```
1.0.0
```

- [ ] **Step 3: Create `.ai/context.md`**

```markdown
# Project context

- Repository: `DQ_Prod_TMaaS_Prototype`
- Platform: TMaaS (Technology Management as a Service) marketplace prototype
- Tier: Client tier — public marketplace + auth-gated delivery dashboard
- Stack: Next.js App Router, TypeScript strict, Tailwind CSS 4, shadcn/ui, Supabase
- Testing: Vitest + React Testing Library in `tests/{unit,integration}`
- Deploy: Vercel (standalone output)

## Route map

- Public: `/`, `/explore`, `/marketplace`, `/marketplace/[slug]`, `/contact`, `/cart`, `/butler`
- Auth: `/(auth)/sign-in`
- Onboarding: `/(onboarding)/profile|organisation|access|complete`
- Legal: `/(legal)/legal|terms|privacy|faq`
- Dashboard: `/dashboard/**` (session-gated)
- API: `/api/contact`, `/api/health`
```

- [ ] **Step 4: Create `.ai/PROJECT_AI_STANDARDS.md`**

```markdown
# PROJECT AI STANDARDS

## Core rules

1. Follow Spec → Plan → Implement → Verify.
2. Do not invent scope; ask when constraints are ambiguous.
3. Prime with `.ai/priming/*` before substantial work.
4. Prioritize readability, DRY without over-abstraction, YAGNI, SRP.
5. Keep TypeScript strict — no `any`, typed handlers, explicit shape types.
6. Use conventional commits and small focused changes.
7. Fail fast; never leak internals in user-facing errors.
8. Keep docs and implementation synchronized.
9. Repository hygiene: `package-lock` committed, `.env.example` current, no temp files in src.
10. Complete discovered dependent fixes before marking done.

## Project constraints

- Client tier only: business/domain logic belongs to Supabase/API layer.
- Tests must live under `tests/` only.
- Docs live under `docs/`; WIP goes to `scratch/`.
- DQ brand: navy (`#030F35`) + orange (`#FB5535`). No sparkles icons.

## References

- `.ai/AGENTS.md`
- `.ai/context.md`
- `.ai/priming/priming-development-rules.md`
```

- [ ] **Step 5: Create `.ai/AGENTS.md`**

```markdown
# AGENTS index

## Always read

- `./PROJECT_AI_STANDARDS.md`
- `./context.md`
- `./priming/priming-development-rules.md`
- `./priming/priming-target-architecture.md`

## Agent-determined

- `./priming/priming-accepted-tech-stack.md`
- `./priming/priming-database-architecture.md`
- `./priming/priming-nonfunctional-specs.md`

## Scope-based references

- `app/` work: Next.js App Router, route groups, RSC vs client components.
- `components/foundation/` work: platform shell and shared boundary rules.
- `lib/api/v1/` work: Supabase typed client and versioned contract discipline.
- `middleware.ts` work: session-based auth guards for `/dashboard`.
- `components/features/` work: feature boundary rules (no cross-feature imports).
```

- [ ] **Step 6: Create `.ai/CLAUDE.md`**

```markdown
Use this file as the repo entrypoint for Claude-compatible agents.

Read in order:

1. `./AGENTS.md`
2. `./PROJECT_AI_STANDARDS.md`
3. `./context.md`
4. `./priming/priming-development-rules.md`
```

- [ ] **Step 7: Create `.ai/priming/priming-development-rules.md`**

```markdown
# Development Rules

## Plan-first

Spec → Plan → Implement → Verify. Never implement without a plan for non-trivial changes.

## TypeScript

- Strict mode; no `any`; interfaces for component props; typed event handlers.
- Use `unknown` for truly unknown shapes, narrow with type guards.

## Naming

- Components, types, interfaces: `PascalCase`
- Functions, variables, hooks: `camelCase` (hooks prefixed `use`)
- Constants: `UPPER_SNAKE_CASE`
- Booleans: prefix `is`, `has`, `should`, `can`

## Components

- Server Components by default in `app/`; add `"use client"` only when needed.
- Feature components do not import from other feature directories.
- Foundation components are shared across all features.

## Git

- Conventional commits: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
- Commit each successful change before moving to the next.
- DQ deployment commits: `git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit ...`

## Error handling

- Fail fast; validate at boundaries (API routes, form submissions).
- Never expose stack traces or internals in user-facing errors.
- Use Next.js `error.tsx` for unexpected render errors.

## Testing

- Tests live in `tests/unit/` and `tests/integration/`.
- Test behaviour, not implementation.
- Each public function/component has at least a smoke test.
```

- [ ] **Step 8: Create `.ai/priming/priming-accepted-tech-stack.md`**

```markdown
# Accepted Tech Stack

## Core

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript 5 strict
- **Runtime:** Node.js 20+
- **Package manager:** npm

## Styling

- **CSS:** Tailwind CSS 4 (config via `globals.css`, no `tailwind.config.ts`)
- **Components:** shadcn/ui base-nova style (RSC-enabled)
- **Icons:** Lucide React
- **Animations:** tw-animate-css + Framer Motion (existing animations)

## Data & State

- **Database:** Supabase (PostgreSQL + RLS)
- **Server state:** TanStack React Query v5
- **Client state:** React Context (Auth, Cart, Catalog)
- **Forms:** React Hook Form + Zod

## Testing

- **Runner:** Vitest 4
- **DOM:** React Testing Library + jsdom
- **Assertions:** @testing-library/jest-dom

## Tooling

- **Linting:** ESLint 9 + eslint-config-next + prettier
- **Formatting:** Prettier 3
- **Type checking:** tsc --noEmit

## Deployment

- **Host:** Vercel (standalone Next.js output)
- **CI trigger email:** dq.demo.a@digitalqatalyst.com
```

- [ ] **Step 9: Create `.ai/priming/priming-target-architecture.md`**

```markdown
# Target Architecture

## Layers
```

Client tier (Next.js App Router, no business logic)
└── app/ Route handlers, layouts, pages (RSC by default)
└── components/ UI + feature components
└── lib/ Supabase client, hooks, utils, types
└── middleware.ts Auth guards

Supabase tier (PostgreSQL + RLS + PostgREST)
└── supabase/ Migrations, seed data

```

## Component hierarchy
```

components/foundation/ Shared across all features (nav, layout, auth, providers)
components/features/ Feature-scoped (landing, marketplace, service-detail, etc.)
components/ui/ shadcn/ui base primitives

```

## Data flow
- Pages (RSC) fetch from Supabase server-side where possible.
- Client components use TanStack Query + Supabase client for interactive data.
- API routes (`app/api/`) for side-effects (contact form, health check).

## Auth
- Session stored in cookie (`session_token`).
- `middleware.ts` guards `/dashboard/**`.
- `AuthContext` provides session state to client components.
- Supabase Auth for sign-in, session management.

## SEO
- Next.js `metadata` export per page (replaces React Helmet Async).
- JSON-LD via `<JsonLd>` server component.
- `generateStaticParams` for `/marketplace/[slug]` pre-rendering.
```

- [ ] **Step 10: Create `.ai/priming/priming-database-architecture.md`**

```markdown
# Database Architecture

## Supabase PostgreSQL

- All schema changes via migrations in `supabase/migrations/`.
- Types auto-generated in `lib/types/database.types.ts`.
- Row Level Security (RLS) enforced at the database level.

## Client access

- `lib/api/v1/client.ts` exports the typed Supabase client.
- Use typed query helpers — never cast to `any` when reading Supabase results.
- Server Components access Supabase via server-side client (no anon key exposure).

## Key tables (catalog)

- Services, variants, pricing in the catalog schema.
- Engagements, milestones, service orders in the delivery schema.
- Users, organisations, roles in the auth/IAM schema.
```

- [ ] **Step 11: Create `.ai/priming/priming-nonfunctional-specs.md`**

```markdown
# Non-Functional Specifications

## Performance

- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Marketplace and landing pages pre-rendered (SSG/ISR).
- Dashboard pages server-rendered per request (SSR).

## Accessibility

- WCAG 2.1 AA minimum.
- Radix UI / shadcn/ui primitives handle keyboard and ARIA.
- Colour contrast: DQ navy + white ≥ 7:1.

## Security

- No secrets in client bundles — env vars prefixed `NEXT_PUBLIC_` only for safe values.
- Contact form server-side validated before any external call.
- Dashboard routes server-side session-checked in middleware.

## SEO

- All public pages have canonical `<meta>` + OG tags via Next.js metadata API.
- JSON-LD structured data on service detail pages.
- `/sitemap.xml` and `/robots.txt` served from `public/`.
```

- [ ] **Step 12: Create root alias `CLAUDE.md`**

```markdown
<!-- Generated from .ai/PROJECT_AI_STANDARDS.md -->

When working in this repository, read `.ai/AGENTS.md` and `.ai/PROJECT_AI_STANDARDS.md` first.

## Core rules

1. Follow Spec → Plan → Implement → Verify.
2. Prime with `.ai/priming/*` before substantial work.
3. Keep changes in scope and ask when ambiguous.
4. Prefer readable, explicit code over clever shortcuts.
5. Keep TypeScript strict and avoid `any`.
6. Use small, focused commits with conventional commit messages.
7. Fail fast and never leak internals in user-facing errors.
8. Keep docs synchronized with implementation behavior.
9. Respect repo hygiene and deterministic build files.
10. Complete linked task chains before concluding work.

## Project constraints

- Route prefixes: `/discover` → `/explore`, `/workspace` → `/dashboard`.
- Client tier only; domain logic belongs to Supabase/API layer.
- Tests under `tests/`; docs under `docs/`; WIP under `scratch/`.
- DQ brand: navy `#030F35` + orange `#FB5535`. No ✨ sparkles icon.
- Deployment commit email: `dq.demo.a@digitalqatalyst.com`
```

- [ ] **Step 13: Create root alias `AGENTS.md`**

```markdown
<!-- Generated from .ai/PROJECT_AI_STANDARDS.md -->

This repository is the TMaaS client-tier prototype using Next.js App Router, TypeScript strict mode, and route-grouped navigation.

## Core rules

1. Follow Spec → Plan → Implement → Verify.
2. Do not invent scope; ask when constraints are ambiguous.
3. Prime with `.ai/priming/*` before substantial work.
4. Prioritize readability, DRY without over-abstraction, YAGNI, SRP.
5. Keep TypeScript strict and avoid `any`.
6. Use conventional commits and small focused changes.
7. Fail fast; avoid leaking implementation internals.
8. Keep docs and implementation synchronized.
9. Keep repository hygiene (`package-lock`, `.env.example`, no temp trees).
10. Complete discovered dependent fixes before marking done.

## Project constraints

- Client tier only: no business logic in UI routes.
- Tests live under `tests/` only.
- Docs live under `docs/`; WIP goes to `scratch/`.

## References

- `.ai/AGENTS.md`
- `.ai/PROJECT_AI_STANDARDS.md`
- `.ai/context.md`
```

- [ ] **Step 14: Create `.cursor/rules/dq-ai-standards.mdc`**

Consolidate the existing 7 `.mdc` files into one. Read each existing file in `.cursor/rules/` and merge all content under named sections, then delete the originals:

```
---
description: DQ TMaaS AI coding standards (consolidated)
globs: ["**/*.ts", "**/*.tsx", "**/*.css"]
alwaysApply: true
---

[Consolidated content from: catalog-csv.mdc, contact-api-dev.mdc, corp-web-design.mdc,
marketplace-catalog.mdc, pdp-copy-style.mdc, react-state-naming.mdc, seo-mvp.mdc]
```

(Read each existing .mdc file and merge all sections into the above template before writing.)

- [ ] **Step 15: Create `.github/copilot-instructions.md`**

```markdown
# GitHub Copilot Instructions

This is the TMaaS client-tier prototype. Read `.ai/PROJECT_AI_STANDARDS.md` for full rules.

- Framework: Next.js 16 App Router
- TypeScript strict — no `any`
- Tailwind CSS 4 — utility classes only, no inline styles
- shadcn/ui base-nova components
- Conventional commits
- Tests in `tests/unit/` and `tests/integration/`
- DQ brand: navy `#030F35` + orange `#FB5535`
```

- [ ] **Step 16: Create `.kiro/steering/dq-ai-standards.md`**

```markdown
# DQ AI Standards

See `.ai/PROJECT_AI_STANDARDS.md` for the full rule set.

Quick reference:

- Strict TypeScript, no `any`
- Next.js App Router, RSC by default
- Tailwind 4 utility classes
- Conventional commits
- Tests in `tests/`; docs in `docs/`; WIP in `scratch/`
```

- [ ] **Step 17: Delete the 7 old individual .mdc files after consolidation**

```bash
git rm .cursor/rules/catalog-csv.mdc
git rm .cursor/rules/contact-api-dev.mdc
git rm .cursor/rules/corp-web-design.mdc
git rm .cursor/rules/marketplace-catalog.mdc
git rm .cursor/rules/pdp-copy-style.mdc
git rm .cursor/rules/react-state-naming.mdc
git rm .cursor/rules/seo-mvp.mdc
```

- [ ] **Step 18: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat(ai): initialise .ai/ rules structure and consolidate cursor rules"
```

---

## Task 4: Scaffold the Next.js app shell

**Files:**

- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/error.tsx`, `app/loading.tsx`, `app/not-found.tsx`
- Create: `app/api/health/route.ts`
- Migrate: `src/index.css` → `app/globals.css` (Tailwind 4 format)

- [ ] **Step 1: Create `app/globals.css`**

Tailwind 4 uses a single `@import` — no `@tailwind base/components/utilities` directives:

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-dq-navy: #030f35;
  --color-dq-orange: #fb5535;
  --font-sans: "Plus Jakarta Sans", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

/* Copy CSS custom properties (navy-*, orange-*, gray-* scales) from src/index.css verbatim */
```

(Read `src/index.css` to extract all `:root` CSS variable declarations and copy them into the `@theme {}` block or as `:root {}` below the import.)

- [ ] **Step 2: Create `app/layout.tsx`**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TMaaS | Digital Qatalyst",
  description: "Technology Management as a Service marketplace by Digital Qatalyst.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Create `app/page.tsx` (stub — full migration in Task 6)**

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <p>TMaaS — migration in progress</p>
    </main>
  );
}
```

- [ ] **Step 4: Create `app/error.tsx`**

```tsx
// app/error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <button onClick={reset} className="rounded bg-dq-orange px-4 py-2 text-white">
        Try again
      </button>
    </div>
  );
}
```

- [ ] **Step 5: Create `app/loading.tsx`**

```tsx
// app/loading.tsx
export default function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-dq-orange border-t-transparent" />
    </div>
  );
}
```

- [ ] **Step 6: Create `app/not-found.tsx`**

```tsx
// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-dq-navy">404</h1>
      <p className="text-gray-600">Page not found.</p>
      <Link href="/" className="text-dq-orange underline">
        Go home
      </Link>
    </div>
  );
}
```

- [ ] **Step 7: Create `app/api/health/route.ts`**

```typescript
// app/api/health/route.ts
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
}
```

- [ ] **Step 8: Run `next dev` and verify the shell renders**

```bash
npm run dev
```

Expected: `http://localhost:3000` shows "TMaaS — migration in progress" without errors in the terminal.

- [ ] **Step 9: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: scaffold Next.js app shell with root layout, globals, and error boundaries"
```

---

## Task 5: Set up lib/ layer

**Files:**

- Create: `lib/api/v1/client.ts`, `lib/api/v1/index.ts`
- Create: `lib/auth/index.ts`
- Create: `lib/config/index.ts`
- Create: `lib/hooks/index.ts`
- Create: `lib/observability/logger.ts`, `lib/observability/index.ts`
- Create: `lib/seo/index.ts`
- Create: `lib/catalog/index.ts`
- Migrate: `lib/types/database.types.ts` (copy from `src/lib/database.types.ts`)
- Create: `lib/types/index.ts`
- Migrate: `lib/utils/index.ts` (from `src/lib/utils.ts`)

- [ ] **Step 1: Create lib directories**

```bash
mkdir -p lib/api/v1 lib/auth lib/catalog lib/config lib/hooks lib/observability lib/seo lib/types lib/utils
```

- [ ] **Step 2: Create `lib/api/v1/client.ts`**

Read `src/lib/supabase.ts` and copy the client setup, then adapt to Next.js (server vs client):

```typescript
// lib/api/v1/client.ts
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
```

- [ ] **Step 3: Create `lib/api/v1/index.ts`**

```typescript
// lib/api/v1/index.ts
export { supabase } from "./client";
```

- [ ] **Step 4: Copy `database.types.ts`**

```bash
cp src/lib/database.types.ts lib/types/database.types.ts
```

- [ ] **Step 5: Create `lib/types/index.ts`**

```typescript
// lib/types/index.ts
export type { Database } from "./database.types";
```

- [ ] **Step 6: Create `lib/utils/index.ts`**

Read `src/lib/utils.ts` and copy its `cn` utility, plus collect the following from `src/lib/`:

- `brandAccent.ts` content
- `brandLinks.ts` content

```typescript
// lib/utils/index.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Copy brandAccent and brandLinks exports here (read src/lib/brandAccent.ts and src/lib/brandLinks.ts)
```

- [ ] **Step 7: Create `lib/config/index.ts`**

Read `src/lib/featureFlags.ts` and adapt:

```typescript
// lib/config/index.ts
export const config = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? "TMaaS",
  env: process.env.NEXT_PUBLIC_ENV ?? "development",
} as const;

// Feature flags (copy from src/lib/featureFlags.ts)
```

- [ ] **Step 8: Create `lib/observability/logger.ts`**

```typescript
// lib/observability/logger.ts
const logLevel = process.env.LOG_LEVEL ?? "info";

export const logger = {
  info: (msg: string, ctx?: Record<string, unknown>) =>
    console.log(JSON.stringify({ level: "info", msg, ...ctx })),
  warn: (msg: string, ctx?: Record<string, unknown>) =>
    console.warn(JSON.stringify({ level: "warn", msg, ...ctx })),
  error: (msg: string, ctx?: Record<string, unknown>) =>
    console.error(JSON.stringify({ level: "error", msg, ...ctx })),
};
```

- [ ] **Step 9: Create `lib/observability/index.ts`**

```typescript
export { logger } from "./logger";
```

- [ ] **Step 10: Create `lib/seo/index.ts`**

Read `src/lib/seoHead.ts`, `src/lib/structuredData.ts`, `src/lib/variantSeoCopy.ts` and re-export as a unified module:

```typescript
// lib/seo/index.ts
// Copy structured data builders and variant SEO copy from src/lib/
// Remove React Helmet Async usage — these become plain data objects for Next.js metadata API
```

- [ ] **Step 11: Create `lib/catalog/index.ts`**

Read `src/lib/catalogQueryKeys.ts`, `src/lib/marketplaceCatalogFilters.ts`, `src/lib/marketplaceDisplayLabels.ts`, `src/lib/serviceProductUtils.ts` and re-export:

```typescript
// lib/catalog/index.ts
// Copy and re-export catalog query keys, filters, display labels, service product utils
```

- [ ] **Step 12: Create `lib/auth/index.ts`**

Read `src/contexts/AuthContext.tsx` and extract the non-JSX logic:

```typescript
// lib/auth/index.ts
// Session helpers, auth state types, useAuth hook (mark "use client" on the hook file if needed)
export type { User, Session } from "@supabase/supabase-js";
```

- [ ] **Step 13: Create `lib/hooks/index.ts`**

```typescript
// lib/hooks/index.ts
// Re-export useAuth, useCart from their respective source files
export { useAuth } from "@/lib/auth";
```

- [ ] **Step 14: Run typecheck**

```bash
npm run typecheck
```

Expected: Errors only from missing imports in `src/` (acceptable — src is being replaced). `lib/` itself should be clean.

- [ ] **Step 15: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: add lib/ layer (api client, auth, catalog, config, observability, seo, utils)"
```

---

## Task 6: Scaffold app route groups and stub pages

**Goal:** Create all route files as stubs (no content migration yet) so Next.js routing is fully wired. Each stub renders its page name. Migration of actual component content happens in Task 7.

**Files:** All files listed in the Target File Tree under `app/`

- [ ] **Step 1: Create auth route group**

```bash
mkdir -p "app/(auth)/sign-in"
```

`app/(auth)/layout.tsx`:

```tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-dq-navy">{children}</div>;
}
```

`app/(auth)/sign-in/page.tsx`:

```tsx
export default function SignInPage() {
  return <div>Sign In — TODO</div>;
}
```

- [ ] **Step 2: Create onboarding route group**

```bash
mkdir -p "app/(onboarding)/profile" "app/(onboarding)/organisation" "app/(onboarding)/access" "app/(onboarding)/complete"
```

Stub each with `export default function XPage() { return <div>X — TODO</div>; }`

- [ ] **Step 3: Create legal route group**

```bash
mkdir -p "app/(legal)/legal" "app/(legal)/terms" "app/(legal)/privacy" "app/(legal)/faq"
```

- [ ] **Step 4: Create public pages**

```bash
mkdir -p app/explore app/marketplace/"[slug]" app/contact app/cart app/butler
```

`app/marketplace/[slug]/page.tsx`:

```tsx
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <div>Service: {params.slug} — TODO</div>;
}
```

- [ ] **Step 5: Create dashboard route group with sub-groups**

```bash
mkdir -p app/dashboard/overview app/dashboard/active-services
mkdir -p "app/dashboard/engagements/[id]"
mkdir -p "app/dashboard/service-orders/[id]"
mkdir -p "app/dashboard/(account)/profile" "app/dashboard/(account)/organisation" "app/dashboard/(account)/settings"
mkdir -p "app/dashboard/(comms)/inbox" "app/dashboard/(comms)/notifications" "app/dashboard/(comms)/calendar"
mkdir -p "app/dashboard/(docs)/documents"
mkdir -p "app/dashboard/(admin)/organisations" "app/dashboard/(admin)/users" "app/dashboard/(admin)/catalogue" "app/dashboard/(admin)/org-admin"
mkdir -p "app/dashboard/(support)/support" "app/dashboard/(support)/help" "app/dashboard/(support)/help-content"
mkdir -p app/dashboard/dq/portfolio app/dashboard/dq/finance app/dashboard/dq/support-ops app/dashboard/dq/queue app/dashboard/dq/invoices app/dashboard/dq/onboarding
```

`app/dashboard/layout.tsx`:

```tsx
// Protected layout — session check enforced by middleware.ts
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-dq-navy">{children}</div>;
}
```

Stub all dashboard page files with `export default function XPage() { return <div>X — TODO</div>; }`

- [ ] **Step 6: Create `app/api/contact/route.ts`**

Read `api/contact.js` and port to Next.js Route Handler:

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as unknown;
  // Port validation logic from api/contact.js and api/contact-security.js
  // Return NextResponse.json({ success: true }) on success
  // Return NextResponse.json({ error: "..." }, { status: 400 }) on failure
  return NextResponse.json({ success: true });
}
```

- [ ] **Step 7: Run `next build` to verify all routes resolve**

```bash
npm run build
```

Expected: Build succeeds, all routes listed in the output. No 404s on known routes.

- [ ] **Step 8: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: scaffold all app/ route stubs for full Next.js routing"
```

---

## Task 7: Set up middleware and auth providers

**Files:**

- Create: `middleware.ts` (root)
- Create: `components/foundation/providers/index.ts`, `components/foundation/providers/Providers.tsx`
- Create: `components/foundation/auth/index.ts`

- [ ] **Step 1: Create `middleware.ts`**

```typescript
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

function hasSession(request: NextRequest): boolean {
  return Boolean(request.cookies.get("session_token")?.value);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/dashboard") && !hasSession(request)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
```

Note: The existing `middleware.ts` at root (Vite version) should be deleted first — it handles different logic.

- [ ] **Step 2: Create `components/foundation/providers/Providers.tsx`**

Read `src/contexts/AuthContext.tsx`, `src/contexts/CartContext.tsx`, `src/contexts/CatalogContext.tsx`, and the TanStack Query setup:

```tsx
// components/foundation/providers/Providers.tsx
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner";
// Import CartProvider and CatalogProvider from their migrated locations

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      {/* <AuthProvider> */}
      {/* <CartProvider> */}
      {/* <CatalogProvider> */}
      {children}
      {/* </CatalogProvider> */}
      {/* </CartProvider> */}
      {/* </AuthProvider> */}
      <Toaster />
    </QueryClientProvider>
  );
}
```

- [ ] **Step 3: Create `components/foundation/providers/index.ts`**

```typescript
export { Providers } from "./Providers";
```

- [ ] **Step 4: Add `<Providers>` to `app/layout.tsx`**

```tsx
// app/layout.tsx — update body:
import { Providers } from "@/components/foundation/providers";

// Inside RootLayout body:
<body className="...">
  <Providers>{children}</Providers>
</body>;
```

- [ ] **Step 5: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: add middleware auth guard and client providers wrapper"
```

---

## Task 8: Migrate components to new structure

**Files:**

- Create: `components/foundation/navigation/Navbar.tsx`, `components/foundation/navigation/index.ts`
- Create: `components/foundation/layouts/DashboardLayout.tsx`, `components/foundation/layouts/LegalPageLayout.tsx`, `components/foundation/layouts/index.ts`
- Create: `components/foundation/seo/JsonLd.tsx`, `components/foundation/seo/index.ts`
- Migrate: `components/ui/` (run shadcn init fresh)
- Create: `components/features/landing/`, `components/features/marketplace/`, `components/features/service-detail/`, `components/features/engagements/`, `components/features/cart/`, `components/features/dashboard/`

- [ ] **Step 1: Reinitialise shadcn/ui for Next.js**

```bash
npx shadcn@latest init
```

When prompted:

- Style: base-nova
- Base color: neutral
- CSS variables: yes
- RSC: yes

This regenerates `components/ui/` and `components.json` for Next.js.

Then re-add any components currently used. List used components:

```bash
grep -r "from.*components/ui" src/components --include="*.tsx" | grep -oP '"@/components/ui/[^"]*"' | sort -u
```

Install each: `npx shadcn@latest add button card dialog sheet tabs select ...`

- [ ] **Step 2: Create `components/foundation/navigation/`**

Read `src/components/Navbar.tsx` and `src/components/NavLink.tsx` and copy them:

```bash
mkdir -p components/foundation/navigation
```

Port each file, replacing:

- React Router `<Link to="...">` → Next.js `<Link href="...">`
- React Router `useNavigate` → `useRouter` from `next/navigation`
- React Router `useLocation` → `usePathname` from `next/navigation`
- Add `"use client"` directive at top of any component using hooks

Create `components/foundation/navigation/index.ts` with barrel exports.

- [ ] **Step 3: Create `components/foundation/layouts/`**

```bash
mkdir -p components/foundation/layouts
```

Read `src/components/DashboardLayout.tsx` and `src/components/LegalPageLayout.tsx`, port them (swap React Router for Next.js navigation), add `"use client"` if needed.

Create `components/foundation/layouts/index.ts`.

- [ ] **Step 4: Create `components/foundation/seo/JsonLd.tsx`**

```bash
mkdir -p components/foundation/seo
```

Read `src/components/JsonLd.tsx` and port — this can be a pure RSC (no `"use client"`):

```tsx
// components/foundation/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
```

Create `components/foundation/seo/index.ts`.

- [ ] **Step 5: Create feature component directories with barrel files**

```bash
mkdir -p components/features/landing
mkdir -p components/features/marketplace
mkdir -p components/features/service-detail
mkdir -p components/features/engagements
mkdir -p components/features/cart
mkdir -p components/features/dashboard
```

For each directory:

1. Copy relevant component files from `src/components/<domain>/`
2. Swap all React Router APIs for Next.js equivalents
3. Add `"use client"` to any component using hooks, event handlers, or browser APIs
4. Create `index.ts` with barrel exports

Mapping:

- `src/components/site/` + `src/components/site/landing/` → `components/features/landing/`
- `src/components/marketplace/` → `components/features/marketplace/`
- `src/components/service-detail/` → `components/features/service-detail/`
- `src/components/engagements/` → `components/features/engagements/`
- `src/components/cart/` → `components/features/cart/`
- Dashboard components from `src/components/` → `components/features/dashboard/`

- [ ] **Step 6: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: migrate components to features/foundation structure with Next.js navigation"
```

---

## Task 9: Wire up pages with real components

**Files:** All `app/**/page.tsx` stubs — replace `TODO` with real component composition

- [ ] **Step 1: Wire `app/page.tsx` (landing)**

Read `src/pages/IndexProductLanding.tsx` and compose using migrated feature components:

```tsx
// app/page.tsx
import { LandingHeroSection } from "@/components/features/landing";
// ... other landing sections
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TMaaS | Digital Qatalyst",
  description: "...",
};

export default function HomePage() {
  return (
    <main>
      <LandingHeroSection />
      {/* other sections */}
    </main>
  );
}
```

- [ ] **Step 2: Wire `app/marketplace/page.tsx`**

Read `src/pages/Marketplace.tsx` and compose. This page uses TanStack Query → `"use client"` or wrap in a client boundary component.

- [ ] **Step 3: Wire `app/marketplace/[slug]/page.tsx`**

Read `src/pages/ServiceDetail.tsx`. Add `generateStaticParams` for pre-rendering known slugs:

```tsx
export async function generateStaticParams() {
  // Fetch slugs from Supabase at build time
  const { data } = await supabase.from("services").select("slug");
  return (data ?? []).map((s) => ({ slug: s.slug }));
}
```

- [ ] **Step 4: Wire remaining public pages**

Wire `explore`, `contact`, `cart`, `butler` pages from their `src/pages/` counterparts.

- [ ] **Step 5: Wire auth pages**

Read `src/pages/auth/SignIn.tsx` → wire `app/(auth)/sign-in/page.tsx`.

- [ ] **Step 6: Wire onboarding pages**

Read `src/pages/onboarding/*.tsx` → wire each onboarding page.

- [ ] **Step 7: Wire legal pages**

Read `src/pages/legal/*.tsx` → wire each legal page.

- [ ] **Step 8: Wire dashboard pages**

Read each `src/pages/dashboard/*.tsx` file and wire its corresponding `app/dashboard/**` stub.

- [ ] **Step 9: Update `app/api/contact/route.ts` with full validation**

Read `api/contact.js` and `api/contact-security.js` for the complete validation logic and port it into the route handler. Add Zod schema validation:

```typescript
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});
```

- [ ] **Step 10: Run `next build`**

```bash
npm run build
```

Expected: Build succeeds. Fix any TypeScript or import errors before proceeding.

- [ ] **Step 11: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: wire all app/ pages with real components and data fetching"
```

---

## Task 10: Replace `src/` metadata with Next.js metadata API

**Files:** Each `app/**/page.tsx` that has SEO content, `app/layout.tsx`

React Helmet Async is no longer needed. Replace with Next.js `metadata` exports.

- [ ] **Step 1: Add per-page metadata to public pages**

For each public page, add:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | TMaaS",
  description: "...",
  openGraph: { title: "...", description: "...", images: ["/og-image.png"] },
};
```

Copy the title/description/OG values from the corresponding `src/lib/seoHead.ts` calls in the existing page components.

- [ ] **Step 2: Add dynamic metadata for service detail**

```tsx
// app/marketplace/[slug]/page.tsx
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data } = await supabase
    .from("services")
    .select("name, description")
    .eq("slug", params.slug)
    .single();
  return {
    title: data ? `${data.name} | TMaaS` : "Service | TMaaS",
    description: data?.description ?? "",
  };
}
```

- [ ] **Step 3: Remove `react-helmet-async` dependency**

```bash
npm uninstall react-helmet-async
```

Remove all `<Helmet>` / `<HelmetProvider>` usage from migrated components.

- [ ] **Step 4: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat(seo): replace react-helmet-async with Next.js metadata API"
```

---

## Task 11: Migrate tests and delete src/

**Files:**

- Create: `tests/unit/` and `tests/integration/` (move from `src/`)
- Delete: `src/` directory after all content is migrated

- [ ] **Step 1: Move unit tests**

```bash
mkdir -p tests/unit tests/integration
```

Copy all `*.test.ts` and `*.test.tsx` files from `src/` to their appropriate location in `tests/unit/` or `tests/integration/`. Update import paths from `src/` to their new `@/lib/` or `@/components/` equivalents.

- [ ] **Step 2: Move the contact integration test**

Read `src/pages/Contact.integration.test.tsx` and port to `tests/integration/contact.test.ts`, updating imports.

- [ ] **Step 3: Run tests**

```bash
npm test
```

Expected: All tests pass (or fail for known reasons that are documented). Fix import errors.

- [ ] **Step 4: Delete src/ after all content is migrated**

```bash
git rm -r src/
git rm -r api/
git rm middleware/ 2>/dev/null || true
git rm index.html 2>/dev/null || true
```

Verify nothing in `src/` was missed:

```bash
git status
```

- [ ] **Step 5: Run final build and tests**

```bash
npm run build && npm test && npm run typecheck
```

Expected: All three pass cleanly.

- [ ] **Step 6: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "feat: migrate tests to tests/ and remove legacy src/ directory"
```

---

## Task 12: Update vercel.json and env config

**Files:**

- Modify: `vercel.json`
- Modify: `.env.example`

- [ ] **Step 1: Update `vercel.json` for Next.js standalone**

The current `vercel.json` has SPA rewrites for Vite. Next.js handles routing natively:

```json
{
  "framework": "nextjs"
}
```

(Vercel auto-detects Next.js — minimal config needed.)

- [ ] **Step 2: Update `.env.example`**

```
NEXT_PUBLIC_APP_NAME=tmaas
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_ENV=development
LOG_LEVEL=info
```

- [ ] **Step 3: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "chore: update vercel.json and .env.example for Next.js deployment"
```

---

## Task 13: Update docs and README

**Files:**

- Modify: `README.md`
- Create: `docs/SETUP.md`, `docs/CHANGELOG.md`

- [ ] **Step 1: Update README.md**

```markdown
# TMaaS Prototype

Technology Management as a Service marketplace by Digital Qatalyst.

## Stack

- Next.js 16 · React 19 · TypeScript 5 (strict)
- Tailwind CSS 4 · shadcn/ui (base-nova)
- Supabase (PostgreSQL + RLS)
- Vitest + React Testing Library
- Vercel (standalone)

## Development

\`\`\`bash
npm install
cp .env.example .env.local # fill in Supabase credentials
npm run dev
\`\`\`

## Commands

| Command             | Description                 |
| ------------------- | --------------------------- |
| `npm run dev`       | Start dev server            |
| `npm run build`     | Production build            |
| `npm test`          | Run tests                   |
| `npm run typecheck` | Type-check without emitting |
| `npm run lint`      | Lint                        |
| `npm run format`    | Format with Prettier        |

## AI Rules

See `.ai/PROJECT_AI_STANDARDS.md` and `.ai/priming/` for agent context.
```

- [ ] **Step 2: Create `docs/SETUP.md`**

```markdown
# Setup Guide

## Prerequisites

- Node.js 20+
- npm 10+
- Supabase project (or local Supabase via `supabase start`)

## Installation

\`\`\`bash
npm install
cp .env.example .env.local

# Fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

\`\`\`

## Database

\`\`\`bash
npx supabase db push # apply migrations
npm run db:seed # seed catalog data
\`\`\`

## Development

\`\`\`bash
npm run dev # http://localhost:3000
\`\`\`
```

- [ ] **Step 3: Commit**

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "docs: update README and add SETUP.md for Next.js project"
```

---

## Self-Review

### Spec coverage checklist

- [x] Clean file tree — root clutter archived to `scratch/archive/` (Task 1)
- [x] Next.js App Router — installed and configured (Task 2)
- [x] Tailwind 4 — replaces Tailwind 3 (Task 2)
- [x] TypeScript strict mode — tsconfig rewritten (Task 2)
- [x] AI rules (.ai/ structure) — full priming docs, CLAUDE.md, AGENTS.md, Cursor/Kiro/Copilot rules (Task 3)
- [x] App shell — layout, globals, error/loading/not-found (Task 4)
- [x] lib/ layer — api/v1, auth, catalog, config, observability, seo, types, utils (Task 5)
- [x] All routes scaffolded — matches current page inventory (Task 6)
- [x] Middleware auth guard — /dashboard protected (Task 7)
- [x] Components migrated — features/, foundation/, ui/ (Task 8)
- [x] Pages wired with real components (Task 9)
- [x] SEO — Next.js metadata API replaces React Helmet (Task 10)
- [x] Tests migrated, src/ deleted (Task 11)
- [x] Vercel deployment config updated (Task 12)
- [x] Docs updated (Task 13)

### Placeholder scan

- All tasks have concrete commands and code blocks.
- Task 8 Step 5 says "copy relevant component files" — this is intentionally high-level because the file count is large; the mapping table specifies exactly which `src/` directories map to which `components/features/` directories. The engineer should read each source file and port it.

### Type consistency

- `Database` type imported from `lib/types/database.types.ts` throughout
- `supabase` client always imported from `@/lib/api/v1`
- `cn` utility always from `@/lib/utils`
- `"use client"` required on any component using: `useState`, `useEffect`, `useRouter`, `usePathname`, `useSearchParams`, event handlers, browser APIs

---

## Notes for executor

1. **React Router → Next.js navigation swap** is the most pervasive change. Every `<Link to>`, `useNavigate`, `useLocation`, `useParams` must become the Next.js equivalent. A global grep before starting Task 8 is recommended:

   ```bash
   grep -r "react-router-dom" src/ --include="*.tsx" -l
   ```

2. **RSC vs Client Components:** Default to Server Components. Only add `"use client"` when a component uses hooks, browser APIs, or event listeners. This will be the biggest judgment call in Task 8.

3. **Contexts/Providers** wrap at the layout level in a `"use client"` Providers component (Task 7). Individual context consumers can remain client components.

4. **Space Grotesk font** — used in the current design but not in the initial layout. Add it to `app/layout.tsx` after the initial scaffold if still needed.

5. **Framer Motion in RSC** — Framer Motion requires `"use client"`. Any animated component needs the directive.

6. **`next-themes`** for dark mode — already a dependency. Add `ThemeProvider` to the Providers component in Task 7.
