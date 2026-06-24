# Target Architecture

## Layers

```
Client tier (Next.js App Router, no business logic)
  app/             Route handlers, layouts, pages (RSC by default)
  components/      UI + feature components
  lib/             Supabase client, hooks, utils, types
  middleware.ts    Auth guards

Supabase tier (PostgreSQL + RLS + PostgREST)
  supabase/        Migrations, seed data
```

## Component hierarchy

```
components/foundation/   Shared across all features (nav, layout, auth, providers)
components/features/     Feature-scoped (landing, marketplace, service-detail, etc.)
components/ui/           shadcn/ui base primitives
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
