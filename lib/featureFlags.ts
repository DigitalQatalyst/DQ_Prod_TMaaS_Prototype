// Feature flags configuration
export interface FeatureFlags {
  // MVP pages
  homepage: boolean;
  marketplace: boolean;
  serviceDetail: boolean;
  contactUs: boolean;

  // Additional pages
  explore: boolean;
  alternateLanding: boolean;
  landingV1: boolean;
  legal: boolean;

  // Features
  supabaseCatalog: boolean;
  cart: boolean;
  chatAssistant: boolean;
  auth: boolean;
  onboarding: boolean;
  dashboard: boolean;
  butlerDemo: boolean;
  contextSwitcher: boolean;
}

const PAGE_FLAGS: (keyof FeatureFlags)[] = [
  "homepage",
  "marketplace",
  "serviceDetail",
  "contactUs",
  "explore",
  "alternateLanding",
  "landingV1",
  "legal",
];

const ROUTE_PRIORITY: { flag: keyof FeatureFlags; path: string }[] = [
  { flag: "homepage", path: "/" },
  { flag: "marketplace", path: "/marketplace" },
  { flag: "serviceDetail", path: "/marketplace" },
  { flag: "contactUs", path: "/contact" },
];

/** Runtime check — do not cache at module load (Next.js inlines env at build time). */
export function isDashboardEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_FEATURE_DASHBOARD === "false") return false;
  if (process.env.NEXT_PUBLIC_FEATURE_DASHBOARD === "true") return true;
  return process.env.NODE_ENV !== "production";
}

// MVP defaults, only the four launch features enabled
const DEFAULT_FEATURE_FLAGS: FeatureFlags = {
  homepage: true,
  marketplace: true,
  serviceDetail: true,
  contactUs: true,

  explore: false,
  alternateLanding: false,
  landingV1: false,
  legal: false,

  supabaseCatalog: true,
  cart: false,
  chatAssistant: false,
  auth: false,
  onboarding: false,
  dashboard: true,
  butlerDemo: false,
  contextSwitcher: false,
};

class FeatureFlagService {
  private flags: FeatureFlags = DEFAULT_FEATURE_FLAGS;

  getFlags(): FeatureFlags {
    return { ...this.flags };
  }

  isEnabled(feature: keyof FeatureFlags): boolean {
    if (feature === "dashboard") return isDashboardEnabled();
    if (feature === "auth") return isDashboardEnabled() || (this.flags.auth ?? false);
    return this.flags[feature] ?? false;
  }

  enable(feature: keyof FeatureFlags): void {
    this.flags[feature] = true;
  }

  disable(feature: keyof FeatureFlags): void {
    this.flags[feature] = false;
  }

  setFlags(flags: Partial<FeatureFlags>): void {
    this.flags = { ...this.flags, ...flags };
  }

  resetToDefaults(): void {
    this.flags = { ...DEFAULT_FEATURE_FLAGS };
  }
}

export const featureFlags = new FeatureFlagService();

/** Hub index and FAQ only — `/legal/privacy` and `/legal/terms` are always public for MVP. */
export function isLegalHubPath(pathname: string): boolean {
  return pathname === "/legal" || pathname === "/legal/faq";
}

export const isPageEnabled = (page: keyof FeatureFlags) => featureFlags.isEnabled(page);
export const isFeatureEnabled = (feature: keyof FeatureFlags) => featureFlags.isEnabled(feature);

export const getEnabledPages = () => {
  const flags = featureFlags.getFlags();
  return PAGE_FLAGS.filter((key) => flags[key]);
};

export const getFirstEnabledRoute = (exclude?: string): string => {
  for (const { flag, path } of ROUTE_PRIORITY) {
    if (path !== exclude && featureFlags.isEnabled(flag)) return path;
  }
  // All priority routes are disabled — return a safe fallback that has no
  // FeatureFlagGuard so it can always be reached without a redirect loop.
  return exclude === "/" ? "/marketplace" : "/";
};
