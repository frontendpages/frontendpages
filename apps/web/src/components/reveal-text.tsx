"use client";

import * as React from "react";

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

type RevealTextProps<T extends React.ElementType = "p"> = React.PropsWithChildren<{
  as?: T;
  className?: string;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  once?: boolean;
  start?: string;
}>;

export function RevealText<T extends React.ElementType = "p">({
  as,
  children,
  className,
  duration = 0.9,
  stagger = 0.045,
  delay = 0,
  ease = "power4.out",
  once = true,
  start = "top 85%",
}: RevealTextProps<T>) {
  const Component = (as ?? "p") as React.ElementType;

  const ref = React.useRef<HTMLElement>(null);

  useGSAP(
    async () => {
      if (!ref.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      await document.fonts.ready;

      SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,

        onSplit(self) {
          gsap.set(self.lines, {
            yPercent: 110,
            autoAlpha: 0.25,
            force3D: true,
          });

          return gsap.to(self.lines, {
            yPercent: 0,
            autoAlpha: 1,
            duration,
            delay,
            stagger,
            ease,
            clearProps: "transform",
            scrollTrigger: {
              trigger: ref.current,
              start,
              once,
            },
          });
        },
      });
    },
    { scope: ref }
  );

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
