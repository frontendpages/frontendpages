import { config } from "@repo/seo";
import { Icons } from "@repo/ui";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center justify-center gap-2">
          <div className="corner-squircle rounded-[50] bg-black p-1 text-white dark:bg-white dark:text-black">
            <Icons.Logo className="size-3" />
          </div>
          <p>{config.app}</p>
        </div>
      ),
    },
    githubUrl: config.url.platform.github,
  };
}
