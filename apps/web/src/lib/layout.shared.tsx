import { config } from "@repo/seo";
import { Icons } from "@repo/ui";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center justify-center gap-3">
          <div className="bg-black p-1.5 text-white dark:bg-white dark:text-black">
            <Icons.Logo className="size-3" />
          </div>
          <p className="font-neutral-sans">{config.app}</p>
        </div>
      ),
    },
    githubUrl: config.url.platform.github,
  };
}
