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
};

const NextApp = () => {
  const plugins = [withSentry, withMDX];
  return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};

export default NextApp;
