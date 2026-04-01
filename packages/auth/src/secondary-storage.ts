import { redis as client } from "@repo/rate-limit";
import type { SecondaryStorage } from "better-auth";

export function secondaryStorage(): SecondaryStorage | undefined {
  if (!client) {
    return undefined;
  }

  return {
    get: async (key) => {
      const value = (await client.get<string | null>(key)) ?? null;

      if (typeof value === "string") {
        return value;
      }

      return value ? JSON.stringify(value) : null;
    },
    set: async (key, value, ttl) => {
      if (ttl) {
        await client.set(key, value, { ex: ttl });
      } else {
        await client.set(key, value);
      }
    },
    delete: async (key) => {
      await client.del(key);
    },
  };
}
