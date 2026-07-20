"use client";

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@repo/ui/components/context-menu";
import Link from "next/link";

export function LogoContextMenu({ logo }: { logo: React.ReactNode }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="cursor-pointer">{logo}</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="text-[12px] text-neutral-700">
          <Link href="#">Get Brand Assets</Link>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
