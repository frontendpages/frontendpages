import localFont from "next/font/local";

export const neutralSans = localFont({
  src: [
    {
      path: "./NeutralSansVF.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neutral-sans",
  preload: true,
});
