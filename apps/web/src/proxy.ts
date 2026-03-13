import { securityHeadersMiddleware, securityHeadersOptions } from "@repo/security/security-headers";

const securityHeaders = securityHeadersMiddleware(securityHeadersOptions);

export default function proxy() {
  return securityHeaders();
}
