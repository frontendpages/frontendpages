import * as Sentry from "@sentry/nextjs";

export async function register() {
  // Conditionally import if facing runtime compatibility issues
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("@/lib/orpc/server");

    const { initSentry } = await import("@repo/telemetry/sentry/server");
    initSentry();
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    const { initSentry } = await import("@repo/telemetry/sentry/edge");
    initSentry();
  }
}

export const onRequestError = Sentry.captureRequestError;
