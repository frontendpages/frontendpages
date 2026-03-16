import withBundleAnalyzer from "@next/bundle-analyzer";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  serverExternalPackages: ["@takumi-rs/image-response"],
  poweredByHeader: false,
  reactCompiler: true,
  cacheComponents: false,
  typedRoutes: true,
  async redirects() {
    return [
      {
        source: "/learn/a11y/:path*",
        destination: "/learn/accessibility/:path*",
        permanent: true,
      },
      {
        source: "/learn/reactjs/:path*",
        destination: "/learn/react/:path*",
        permanent: true,
      },
      {
        source: "/learn/next/:path*",
        destination: "/learn/nextjs/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/learn/:path*.mdx",
        destination: "/llms.mdx/learn/:path*",
      },
    ];
  },
};

export default withMDX(bundleAnalyzer(nextConfig));
