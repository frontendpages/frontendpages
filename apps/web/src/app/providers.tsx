"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createQueryClient } from "@/lib/query/client";

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>{props.children}</NuqsAdapter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
