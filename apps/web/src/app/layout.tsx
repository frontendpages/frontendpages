import type { Metadata, Viewport } from "next";
import "@/lib/orpc/server";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import "@/styles/globals.css";
import { cn } from "@repo/ui/lib/utils";
import { fontsVariable } from "@repo/ui/fonts";
import { links, site } from "@repo/config/app";
import { JsonLd } from "@repo/config/seo";
import { Providers } from "./providers";
import { organizationSchema, websiteSchema } from "./ld";

export const metadata: Metadata = {
  metadataBase: new URL(links.base),
  title: {
    default: "Frontend Pages :: The platform for modern frontend developers",
    template: "%s :: Frontend Pages",
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.png",
      },
    ],
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: links.base,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: links.og,
        width: 800,
        height: 600,
      },
      {
        url: links.og,
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [
      {
        url: links.og,
        width: 800,
        height: 600,
      },
      {
        url: links.og,
        width: 1800,
        height: 1600,
      },
    ],
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontsVariable, "font-geist")}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <head>
          <link rel="preconnect" href={links.cdn} />
          <link rel="dns-prefetch" href={links.cdn} />
          <JsonLd code={websiteSchema} />
          <JsonLd code={organizationSchema} />
        </head>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.23, ease: [0.455, 0.03, 0.515, 0.955] /** inOutQuad */ }}
          >
            <Providers>{children}</Providers>
          </m.div>
        </LazyMotion>
      </body>
    </html>
  );
}
