import { initialServices } from "../src/data/services";

export const STATIC_PRERENDER_PATHS = ["/", "/marketplace", "/contact"] as const;

export function getServicePrerenderPaths(): string[] {
  return initialServices.map((service) => `/service/${service.id}`);
}

export function getAllPrerenderPaths(): string[] {
  return [...STATIC_PRERENDER_PATHS, ...getServicePrerenderPaths()];
}
