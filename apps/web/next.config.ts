import { withSentry } from "@repo/telemetry/sentry/with-sentry";
import { varlockNextConfigPlugin } from "@varlock/nextjs-integration/plugin";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withVarlock = varlockNextConfigPlugin();

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactCompiler: true,
  cacheComponents: true,
  typedRoutes: true,
  transpilePackages: ["@repo/ui"],
  serverExternalPackages: ["@takumi-rs/image-response"],
  allowedDevOrigins: [
    "local.web.frontendpages.id",
    "*.local.web.frontendpages.id",
  ],
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    // Limit max image size to 1200px (displayed size is ~1248px)
    // Default: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    deviceSizes: [640, 750, 828, 1080, 1200],
    qualities: [50, 80],
  },
  rewrites() {
    return [
      {
        source: "/learn/:path*.md",
        destination: "/llms.mdx/learn/:path*",
      },
    ];
  },
};

export default withVarlock(withMDX(withSentry(nextConfig)));
