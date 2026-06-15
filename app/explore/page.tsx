import type { Metadata } from "next";
import ExplorePageClient from "./_client";

export const metadata: Metadata = {
  title: "Explore | TMaaS",
  description:
    "Explore the TMaaS platform — discover services, bundles, and transformation journeys.",
};

export default function ExplorePage() {
  return <ExplorePageClient />;
}
