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

- Client tier only; domain logic belongs to Supabase/API layer.
- Tests under `tests/`; docs under `docs/`; WIP under `scratch/`.
- DQ brand: navy `#030F35` + orange `#FB5535`. No sparkles icon (✨).
- Deployment commit email: `dq.demo.a@digitalqatalyst.com`
