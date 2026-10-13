import { initializeAnalytics as initPostHog } from "@repo/analytics/posthog";
import { initSentry } from "@repo/telemetry/sentry/client";
import * as Sentry from "@sentry/nextjs";

initPostHog();
initSentry();

// oxlint-disable-next-line import/namespace
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
