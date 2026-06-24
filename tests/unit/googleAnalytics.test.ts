import { afterEach, describe, expect, it, vi } from "vitest";
import { GA_MEASUREMENT_ID, shouldLoadGoogleAnalytics } from "@/lib/analytics/googleAnalytics";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("googleAnalytics", () => {
  it("exposes the TMaaS measurement ID", () => {
    expect(GA_MEASUREMENT_ID).toBe("G-SWP6JJX3TP");
  });

  it("does not load in development", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("VERCEL_ENV", "production");

    expect(shouldLoadGoogleAnalytics()).toBe(false);
  });

  it("does not load on Vercel preview deployments", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "preview");

    expect(shouldLoadGoogleAnalytics()).toBe(false);
  });

  it("loads on Vercel production deployments", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "production");

    expect(shouldLoadGoogleAnalytics()).toBe(true);
  });

  it("loads on non-Vercel production when NEXT_PUBLIC_ENV is production", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "");
    vi.stubEnv("NEXT_PUBLIC_ENV", "production");

    expect(shouldLoadGoogleAnalytics()).toBe(true);
  });

  it("does not load on non-Vercel production when NEXT_PUBLIC_ENV is not production", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "");
    vi.stubEnv("NEXT_PUBLIC_ENV", "development");

    expect(shouldLoadGoogleAnalytics()).toBe(false);
  });
});
