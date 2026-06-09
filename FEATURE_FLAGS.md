# Feature Flag System

TMaaS uses a client-side feature flag system (ported from DQ_CORPWEB_PROTOTYPE) to control which pages and features are visible at launch.

## MVP Default Configuration

By default, only these four features are enabled:

- **Landing page** (`/`) — `homepage`
- **Marketplace** (`/marketplace`) — `marketplace`
- **Service details** (`/service/:id`) — `serviceDetail`
- **Contact us** (`/contact`) — `contactUs`

All other routes redirect to the first enabled page. Navigation links and global UI (cart, chat, auth) are hidden when their flags are off.

## Available Flags

### MVP Pages

| Flag | Route | Default |
|------|-------|---------|
| `homepage` | `/` | on |
| `marketplace` | `/marketplace` | on |
| `serviceDetail` | `/service/:id` | on |
| `contactUs` | `/contact` | on |

### Additional Pages

| Flag | Route | Default |
|------|-------|---------|
| `explore` | `/explore` | off |
| `alternateLanding` | `/home` | off |
| `landingV2` | `/landing-v2` | on |
| `legal` | `/legal/*` | off |

### Features

| Flag | Controls | Default |
|------|----------|---------|
| `cart` | `/cart`, cart drawer, add-to-cart buttons | off |
| `chatAssistant` | Floating ChatButton | off |
| `auth` | `/sign-in` | off |
| `onboarding` | `/onboarding/*` | off |
| `dashboard` | `/dashboard/*` | off |
| `butlerDemo` | `/butler-demo` | off |
| `contextSwitcher` | Prototype role switcher in navbar | off |

## Using Flags in Code

```typescript
import { featureFlags, getFirstEnabledRoute } from '@/lib/featureFlags';

if (featureFlags.isEnabled('marketplace')) {
  // show marketplace link
}
```

```tsx
import { FeatureFlagGuard } from '@/components/FeatureFlagGuard';

<FeatureFlagGuard feature="cart" redirectTo="/">
  <CartDrawer />
</FeatureFlagGuard>
```

## Development Admin Panel

In development (`npm run dev`), a purple settings button appears in the bottom-right corner. Use it to:

- **MVP Only** — reset to launch defaults
- **Enable All** — turn on every flag (reloads the page)
- **Reset** — same as MVP Only
- Toggle individual flags

## Contact Form API

The contact form posts to `/api/contact` (Vercel serverless). Configure these env vars:

```
MSGRAPH_TENANT_ID=
MSGRAPH_CLIENT_ID=
MSGRAPH_CLIENT_SECRET=
MSGRAPH_SENDER_UPN=
MSGRAPH_RECIPIENT_EMAIL=
```

See `.env.example` for the template.

## Re-enabling Features Post-MVP

1. Update `DEFAULT_FEATURE_FLAGS` in `src/lib/featureFlags.ts`, or
2. Use the dev admin panel during local testing, or
3. Call `featureFlags.enable('dashboard')` programmatically

Flags are in-memory only — they reset on page reload unless defaults are changed in source.
