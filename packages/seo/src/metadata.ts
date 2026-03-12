import { merge } from "es-toolkit/object";
import type { Metadata } from "next";
import { config } from "./app.config";

type MetadataGenerator = Omit<Metadata, "description" | "title"> & {
  title: string;
  description: string;
};

export const constructMetadata = ({ title, description, ...properties }: MetadataGenerator): Metadata => {
  const base: Metadata = {
    metadataBase: new URL(config.url.base),
    title,
    description,
    openGraph: {
      type: "website",
      url: config.url.base,
      title,
      description,
      siteName: config.app,
      locale: "en_US",
      images: [
        {
          url: config.url.og,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: config.handle,
      images: [config.url.og],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  const metadata: Metadata = merge(base, properties);

  return metadata;
};
