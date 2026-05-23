import type { MetadataRoute } from "next";

import { links } from "@repo/config/app";
import { source } from "@/lib/fuma/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages: MetadataRoute.Sitemap = [
    {
      url: links.base,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // "/learn/**" pages
  const learnPages: MetadataRoute.Sitemap = source.getPages().map((page) => {
    const lastModified = page.data.lastModified;
    return {
      url: `${links.base}${page.url}`,
      lastModified: lastModified ? new Date(lastModified) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...basePages, ...learnPages];
}
