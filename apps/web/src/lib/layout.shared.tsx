import { config } from "@repo/seo";
import { Icons } from "@repo/ui";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center justify-center gap-2">
          <Icons.Logo className="size-5" />
          <p className="text-[18px]">{config.app}</p>
        </div>
      ),
    },
    githubUrl: config.url.platform.github,
  };
}
