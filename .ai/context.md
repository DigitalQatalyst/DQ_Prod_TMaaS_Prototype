# Project context

- Repository: `DQ_Prod_TMaaS_Prototype`
- Platform: TMaaS (Transformation Management as a Service) marketplace prototype
- Tier: Client tier — public marketplace + auth-gated delivery dashboard
- Stack: Next.js App Router, TypeScript strict, Tailwind CSS 4, shadcn/ui, Supabase
- Testing: Vitest + React Testing Library in `tests/{unit,integration}`
- Deploy: Vercel (standalone output)

## Route map

- Public: `/`, `/explore`, `/marketplace`, `/marketplace/[slug]`, `/contact`, `/cart`, `/butler`
- Auth: `/(auth)/sign-in`
- Onboarding: `/(onboarding)/profile|organisation|access|complete`
- Legal (MVP): `/(legal)/legal/privacy`, `/(legal)/legal/terms` (always public)
- Legal (flag `legal`): `/(legal)/legal` hub, `/(legal)/legal/faq`
- Dashboard: `/dashboard/**` (session-gated)
- API: `/api/contact`, `/api/health`
