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
