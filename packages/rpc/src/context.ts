import { auth } from "@repo/auth/server";
import { db } from "@repo/db";

export async function createContext(options: { headers: Headers }) {
  const session = await auth.api.getSession({ headers: options.headers });

  return {
    db,
    session: session?.session,
    user: session?.user,
    ...options,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
