import { Banner } from "@/components/banner";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Banner />
      {children}
    </>
  );
}
