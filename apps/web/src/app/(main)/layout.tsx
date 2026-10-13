import { AnnouncementBanner } from "@/components/layouts/announcement-banner";
import { Header } from "@/components/landing/header";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main>{children}</main>
    </>
  );
}
