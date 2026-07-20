import { cn } from "@repo/ui/lib/utils";
import React, { type PropsWithChildren } from "react";

type Props = PropsWithChildren & React.ComponentProps<"div">;

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-[1857px] px-3 px-4 md:px-3", className)}>
      {children}
    </div>
  );
}
