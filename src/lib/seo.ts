import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const DEFAULT_TITLE = "Support Studio Technologies | SAP Consulting & Enterprise Solutions";
const DEFAULT_DESCRIPTION = "Leading provider of SAP solutions, digital transformation, and enterprise consulting services across the GCC.";
const DEFAULT_IMAGE = "https://www.supportstudio.tech/og-image.jpg"; // Placeholder required structurally
const DEFAULT_URL = "https://www.supportstudio.tech";

export function constructMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Support Studio Technologies",
        },
      ],
      type: "website",
      siteName: "Support Studio Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@SupportStudioTech",
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(DEFAULT_URL),
  };
}
