import type { MetadataRoute } from "next";
import { links } from "@repo/config/app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${links.base}/sitemap.xml`,
    host: links.base,
  };
}
