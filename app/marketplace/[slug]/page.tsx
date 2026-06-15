import type { Metadata } from "next";
import { fetchServiceDetail } from "@/services/catalogService";
import { getDisplayTitle } from "@/components/features/service-detail/serviceDetailHelpers";
import ServiceDetailPageClient from "./_client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const id = parseInt(slug, 10);
  const detail = !isNaN(id) ? await fetchServiceDetail(id) : undefined;
  const title = detail?.service
    ? getDisplayTitle(detail.service)
    : slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return {
    title: `${title} | TMaaS`,
    description: detail?.service?.description
      ? detail.service.description.slice(0, 155)
      : `Learn about ${title} — a TMaaS service by Digital Qatalyst.`,
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
