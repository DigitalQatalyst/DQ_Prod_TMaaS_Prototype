import type { Metadata } from "next";
import ServiceDetailPageClient from "./_client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Format slug to title: "ai-strategy-consulting" → "AI Strategy Consulting"
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | TMaaS`,
    description: `Learn about ${title} — a TMaaS service by Digital Qatalyst.`,
    openGraph: {
      title: `${title} | TMaaS`,
      images: ["/og-image.png"],
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServiceDetailPageClient params={params} />;
}
