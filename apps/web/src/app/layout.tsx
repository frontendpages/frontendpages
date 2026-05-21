import type { Metadata, Viewport } from "next";
import "@/lib/orpc/server";
import "@/styles/globals.css";
import { cn } from "@repo/ui/lib/utils";
import { Providers } from "@/app/providers";
import { fontsVariable } from "@repo/ui/fonts";

export const metadata: Metadata = {
  title: "Frontend Pages",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", fontsVariable, "font-geist")} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
