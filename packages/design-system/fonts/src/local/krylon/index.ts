import localFont from "next/font/local";

export const krylon = localFont({
  src: [
    {
      path: "./Krylon-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-krylon",
  preload: true,
});
