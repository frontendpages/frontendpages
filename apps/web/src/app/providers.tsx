"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "@repo/ui";

export function Providers(props: { children: React.ReactNode }) {
  return (
    <RootProvider>
      <ThemeProvider>{props.children}</ThemeProvider>
    </RootProvider>
  );
}
