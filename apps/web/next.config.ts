import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
import { withSentry } from "@repo/telemetry/sentry/with-sentry";
const withMDX = createMDX({});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactCompiler: true,
  cacheComponents: true,
  typedRoutes: true,
  transpilePackages: ["@repo/ui"],
  serverExternalPackages: ["@takumi-rs/image-response"],
  allowedDevOrigins: ["local.web.frontendpages.id", "*.local.web.frontendpages.id"],
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    // Limit max image size to 1200px (displayed size is ~1248px)
    // Default: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    deviceSizes: [640, 750, 828, 1080, 1200],
    qualities: [50, 80],
  },
  async rewrites() {
    return [
      {
        source: "/learn/:path*.md",
        destination: "/llms.mdx/learn/:path*",
      },
    ];
  },
};

const NextApp = () => {
  const plugins = [withSentry, withMDX];
  return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};

export default NextApp;
