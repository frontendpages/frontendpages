import type { RouterClient } from "@orpc/server";
import { protectedProcedure, publicProcedure } from "../orpc";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => "OK"),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.user,
    };
  }),
};

export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
