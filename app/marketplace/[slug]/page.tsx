import type { Metadata } from "next";
import { fetchServiceDetail } from "@/services/catalogService";
import { getDisplayTitle } from "@/components/features/service-detail/serviceDetailHelpers";
import { buildPageTitle } from "@/lib/brandLinks";
import ServiceDetailPageClient from "./_client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const numericId = parseInt(slug, 10);
  const idOrSlug = !isNaN(numericId) ? numericId : slug;
  const detail = await fetchServiceDetail(idOrSlug);
  const title = detail?.service
    ? getDisplayTitle(detail.service.standardName, detail.service.serviceType)
    : slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

  return {
    title,
    description: detail?.service?.description
      ? detail.service.description.slice(0, 155)
      : `Learn about ${title} — a TMaaS service by DigitalQatalyst.`,
    openGraph: {
      title: buildPageTitle(title),
      images: ["/og-image.png"],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ServiceDetailPageClient params={params} />;
}
