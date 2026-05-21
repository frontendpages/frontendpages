export const RATE_LIMIT_PREFIX = "ratelimit";
export const AUTH_PREFIX = "auth";

export function prefixRedisKey(prefix: string, key: string) {
  return `${prefix}:${key}`;
}
