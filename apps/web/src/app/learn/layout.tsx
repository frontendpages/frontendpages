import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/">) {
  const base = baseOptions();
  return (
    <DocsLayout
      sidebar={{ className: "rounded-none border-neutral-800" }}
      tree={source.getPageTree()}
      {...base}
    >
      {children}
    </DocsLayout>
  );
}
