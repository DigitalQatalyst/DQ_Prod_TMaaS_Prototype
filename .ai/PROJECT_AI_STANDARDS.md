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
- DQ brand: navy (`#030F35`) + orange (`#FB5535`). No sparkles icons (✨).
- Deployment commits must use: `git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit ...`

## References

- `.ai/AGENTS.md`
- `.ai/context.md`
- `.ai/priming/priming-development-rules.md`
