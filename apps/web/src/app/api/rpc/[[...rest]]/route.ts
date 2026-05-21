import { onError } from "@orpc/client";
import { RPCHandler } from "@orpc/server/fetch";
import { createContext } from "@repo/rpc/context";
import { appRouter } from "@repo/rpc/routers/index";

async function handleRequest(request: Request) {
  const handler = new RPCHandler(appRouter, {
    interceptors: [
      onError((error) => {
        console.error(error);
      }),
    ],
  });

  const { response } = await handler.handle(request, {
    prefix: "/api/rpc",
    context: await createContext({ headers: request.headers }),
  });

  return response ?? new Response("Not found", { status: 404 });
}

export const HEAD = handleRequest;
export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const PATCH = handleRequest;
export const DELETE = handleRequest;
export const OPTIONS = handleRequest;
