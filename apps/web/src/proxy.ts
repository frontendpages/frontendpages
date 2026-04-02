import { NextResponse } from "next/server";
import { createNEMO } from "@rescale/nemo";
import { getSessionCookie } from "better-auth/cookies";
import {
  securityHeadersMiddleware,
  securityHeadersOptions,
  securityHeadersOptionsWithVercelToolbar,
} from "@repo/security/security-headers";
import type { MiddlewareConfig } from "@rescale/nemo";
import type { NextRequest } from "next/server";

const securityHeaders =
  process.env.VERCEL_ENV === "preview"
    ? securityHeadersMiddleware(securityHeadersOptionsWithVercelToolbar)
    : securityHeadersMiddleware(securityHeadersOptions);

const middlewares = {
  "/:path*": [securityHeaders],
  "/playground": [
    async (request: NextRequest) => {
      const { pathname } = request.nextUrl;
      const sessionCookie = getSessionCookie(request, { cookiePrefix: "frontendpages" });

      if (!sessionCookie && pathname.startsWith("/playground")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.next();
    },
  ],
} satisfies MiddlewareConfig;

export const proxy = createNEMO(middlewares);

export const config = {
  matcher: ["/((?!_next/|_static|[\\w-]+\\.\\w+).*)"],
};
