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
  'homepage',
  'marketplace',
  'serviceDetail',
  'contactUs',
  'explore',
  'alternateLanding',
  'landingV1',
  'legal',
];

const ROUTE_PRIORITY: { flag: keyof FeatureFlags; path: string }[] = [
  { flag: 'homepage', path: '/' },
  { flag: 'marketplace', path: '/marketplace' },
  { flag: 'serviceDetail', path: '/marketplace' },
  { flag: 'contactUs', path: '/contact' },
];

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
  dashboard: false,
  butlerDemo: false,
  contextSwitcher: false,
};

class FeatureFlagService {
  private flags: FeatureFlags = DEFAULT_FEATURE_FLAGS;

  getFlags(): FeatureFlags {
    return { ...this.flags };
  }

  isEnabled(feature: keyof FeatureFlags): boolean {
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

export const isPageEnabled = (page: keyof FeatureFlags) => featureFlags.isEnabled(page);
export const isFeatureEnabled = (feature: keyof FeatureFlags) => featureFlags.isEnabled(feature);

export const getEnabledPages = () => {
  const flags = featureFlags.getFlags();
  return PAGE_FLAGS.filter((key) => flags[key]);
};

export const getFirstEnabledRoute = (): string => {
  for (const { flag, path } of ROUTE_PRIORITY) {
    if (featureFlags.isEnabled(flag)) return path;
  }
  return '/';
};
