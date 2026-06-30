# TMaaS Prototype

Transformation Management as a Service marketplace by Digital Qatalyst:

## Stack

- Next.js 16 · React 19 · TypeScript 5 (strict)
- Tailwind CSS 4 · shadcn/ui (base-nova)
- Supabase (PostgreSQL + RLS)
- Vitest + React Testing Library
- Vercel (standalone)

## Development

```bash
npm install
cp .env.example .env.local  # fill in Supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command             | Description                 |
| ------------------- | --------------------------- |
| `npm run dev`       | Start dev server            |
| `npm run build`     | Production build            |
| `npm start`         | Start production server     |
| `npm test`          | Run tests                   |
| `npm run typecheck` | Type-check without emitting |
| `npm run lint`      | Lint                        |
| `npm run format`    | Format with Prettier        |
| `npm run db:seed`   | Seed catalog data           |

## Structure

```
app/             Next.js App Router pages + API routes
components/
  features/      Feature-scoped components (landing, marketplace, etc.)
  foundation/    Shared platform components (nav, layouts, seo, providers)
  ui/            shadcn/ui base components
lib/             Utilities, Supabase client, hooks, types
middleware.ts    Auth guard for /dashboard
tests/           Vitest unit + integration tests
supabase/        Database migrations + seed data
scripts/         Catalog and SEO generation scripts
.ai/             AI agent rules and priming documents
```

## AI Rules

See [`.ai/PROJECT_AI_STANDARDS.md`](.ai/PROJECT_AI_STANDARDS.md) and [`.ai/priming/`](.ai/priming/) for agent context.
