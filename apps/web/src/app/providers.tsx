"use client";

import { ThemeProvider } from "@repo/ui";

export function Providers(props: { children: React.ReactNode }) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}
