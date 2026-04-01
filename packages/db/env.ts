import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { env as rateLimit } from "@repo/rate-limit/env";

export const env = () =>
  createEnv({
    extends: [rateLimit()],
    server: {
      DATABASE_URL: z.url(),
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  });
