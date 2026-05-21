import { ORPCError, os } from "@orpc/server";
import type { Context } from "./context";

export const o = os.$context<Context>();

export const publicProcedure = o;

const authMiddleware = o.middleware(async ({ context, next }) => {
  if (!context.user) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({
    context: {
      session: context.session,
      user: context.user,
    },
  });
});

export const protectedProcedure = publicProcedure.use(authMiddleware);

export const adminProcedure = o.use(({ context, next }) => {
  if (!context.session || !context.user) {
    throw new ORPCError("UNAUTHORIZED");
  }

  if (context.user.role !== "admin") {
    throw new ORPCError("FORBIDDEN", { message: "You don't have right permission" });
  }

  return next({
    context: {
      session: context.session,
      user: context.user,
    },
  });
});
