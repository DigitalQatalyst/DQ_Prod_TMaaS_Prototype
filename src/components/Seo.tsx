import { Helmet } from "react-helmet-async";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
  SEO_PUBLISHER,
  truncateMetaDescription,
} from "@/lib/seo";

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogType?: "website" | "article" | "product";
};

const Seo = ({
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
}: SeoProps) => {
  const canonical = absoluteUrl(path);
  const metaDescription = truncateMetaDescription(description);
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="TMaaS by DigitalQatalyst" />
      <meta property="og:site_name" content={SEO_PUBLISHER} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@digitalqatalyst" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@digitalqatalyst" />
    </Helmet>
  );
};

export default Seo;
