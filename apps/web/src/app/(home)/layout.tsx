import { Banner } from "@/components/landing/banner";
import { Header } from "@/components/landing/header";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Banner />
      <Header />
      <main>{children}</main>
    </>
  );
}
