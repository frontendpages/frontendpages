import { AnnouncementBanner } from "@/components/layouts/announcement-banner";
import { Header } from "@/components/landing/header";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main>{children}</main>
    </>
  );
}
