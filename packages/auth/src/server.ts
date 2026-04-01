import { passkey } from "@better-auth/passkey";
import { polar } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, magicLink } from "better-auth/plugins";
import { db } from "@repo/db";
import { polarOptions } from "@repo/payments/polar";
import "server-only";
import { secondaryStorage } from "./secondary-storage";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  secondaryStorage: secondaryStorage(),
  plugins: [
    admin(),
    magicLink({
      sendMagicLink: async () => {
        //TODO :: send magiclink email to user
      },
    }),
    passkey(),
    polar(polarOptions),
  ],

  baseURL: {
    allowedHosts: [
      "frontendpages.com", // Production
      "dev.frontendpages.com", // Preview / Dev
      "*.vercel.app", // All Vercel previews
      "localhost:3000", // Local development
    ],
  },
  advanced: {
    cookiePrefix: "frontendpages",
    useSecureCookies: true,
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
