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
