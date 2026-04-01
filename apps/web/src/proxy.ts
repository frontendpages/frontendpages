import { NextResponse } from "next/server";
import { createNEMO } from "@rescale/nemo";
import { getSessionCookie } from "better-auth/cookies";
import { securityHeadersMiddleware, securityHeadersOptions } from "@repo/security/security-headers";
import type { MiddlewareConfig } from "@rescale/nemo";
import type { NextRequest } from "next/server";

const middlewares = {
  "/:path*": [securityHeadersMiddleware(securityHeadersOptions)],
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
