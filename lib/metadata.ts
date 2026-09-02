import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({ title, description, path, image = "/og.png", noIndex }: MetadataInput): Metadata {
  const canonical = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [{ url: image, alt: `${title} — ${siteConfig.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
