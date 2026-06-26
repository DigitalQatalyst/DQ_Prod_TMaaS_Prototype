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

## Cursor Cloud specific instructions

- Stack is **Next.js 16 (App Router) + React 19**, despite the `package.json` name `vite_react_shadcn_ts`. The dev server is Next.js/Turbopack, not Vite.
- Dependencies require `--legacy-peer-deps` (CI uses `npm ci --legacy-peer-deps`); a plain `npm install` will fail on peer-dependency conflicts. The startup update script already runs `npm install --legacy-peer-deps`.
- No env vars are required to run locally. Supabase is optional: `lib/supabase.ts` returns `null` when `NEXT_PUBLIC_SUPABASE_*` are unset, and the catalog falls back to the static fixture, so `/marketplace` and service detail pages render fully without any credentials. Copy `.env.example` to `.env.local` only when you need live Supabase or MS Graph contact-email sending.
- Standard commands are in `package.json` / `README.md`: `npm run dev` (port 3000), `npm run lint`, `npm run typecheck`, `npm test` (Vitest), `npm run build`. `npm run lint` currently reports warnings only (0 errors); some Vitest suites are intentionally skipped (live Supabase/contact integration) when env vars are absent.
- The contact form POSTs to the App Router route `app/api/contact/route.ts`; without MS Graph env vars it will not actually send email. Browse/marketplace flows are the best no-credentials smoke test.
