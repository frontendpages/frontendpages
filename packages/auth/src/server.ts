import { dash } from "@better-auth/infra";
import { db } from "@repo/db";
import { createRecordId } from "@repo/db/id";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth/minimal";
import { admin, magicLink } from "better-auth/plugins";
import "server-only";

import { env } from "#env";

import { secondaryStorage } from "./secondary-storage";

function isProduction() {
  return process.env.NODE_ENV === "production";
}

export const auth = betterAuth({
  appName: "frontendpages",
  baseURL: {
    allowedHosts: [
      "localhost:3000", // Local Host
      "local.web.frontendpages.id", // Local development (using portless)
      "*.vercel.app", // Preview (Vercel)
      "frontendpages.com", // Production
    ],
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schemaName: "auth",
    usePlural: true,
  }),

  secondaryStorage,

  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: env().GOOGLE_CLIENT_ID,
      clientSecret: env().GOOGLE_CLIENT_SECRET,
    },
  },

  session: {
    storeSessionInDatabase: true,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
      strategy: "jwe",
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },

  plugins: [
    dash(),
    admin(),
    magicLink({
      rateLimit: {
        window: 900,
        max: 3,
      },
      storeToken: "hashed",
      // oxlint-disable-next-line no-empty-function
      sendMagicLink: () => {},
    }),
  ],

  advanced: {
    cookiePrefix: "frontendpages",
    useSecureCookies: isProduction(),
    ipAddress: {
      ipAddressHeaders: ["cf-connecting-ip", "x-forwarded-for"],
    },
    database: {
      // Drizzle has no DB default; generate cuid2 in the client (Marble pattern).
      generateId: () => createRecordId(),
      joins: true,
    },
  },
  onAPIError: {
    throw: false,
    onError: (error) => {
      console.error(error);
    },
    errorURL: "/auth/error",
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
