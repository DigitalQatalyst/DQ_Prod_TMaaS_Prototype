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
