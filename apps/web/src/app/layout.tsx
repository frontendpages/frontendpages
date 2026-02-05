import { Providers } from "@/app/providers";
import "@/lib/orpc.server";
import { type Viewport } from "next";
import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { fontsVariable } from "@repo/fonts";
import { token } from "@repo/tokens/js";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Frontendpages",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
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
    <html lang="en" dir="ltr" className={fontsVariable} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <m.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.23, ease: token("ease.in-out-quad") }}
          className="font-geist antialiased"
        >
          <Providers>
            <Banner />
            {children}
          </Providers>
        </m.body>
      </LazyMotion>
    </html>
  );
}

function Banner() {
  return (
    <div className="sticky top-0 hidden flex-row items-center justify-center bg-black px-8 py-2 text-sm text-white md:flex dark:bg-white dark:text-black">
      <p>
        You can also access frontendpages.com via {""}
        <a href="https://frontend.page" className="font-bold hover:opacity-80">
          frontend.page
        </a>
      </p>
    </div>
  );
}
