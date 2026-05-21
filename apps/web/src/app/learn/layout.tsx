import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/fuma/layout.shared";
import { source } from "@/lib/fuma/source";

export default function Layout({ children }: LayoutProps<"/">) {
  const base = baseOptions();
  return (
    <DocsLayout
      sidebar={{ className: "rounded-none border-neutral-200 dark:border-neutral-800" }}
      tree={source.getPageTree()}
      {...base}
    >
      {children}
    </DocsLayout>
  );
}
