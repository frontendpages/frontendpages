import type { SVGProps } from "react";

export function ColorStripes({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="380"
      height="129"
      viewBox="0 0 380 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        className="w-100"
        height="62"
        transform="translate(-1 63.1328) rotate(-9)"
        fill="black"
      />
      <rect
        className="w-100"
        height="62"
        transform="translate(-1 66.0576) rotate(-6)"
        fill="#EE6A08"
      />
      <rect
        className="w-full"
        height="62"
        transform="translate(-1 67.8877) rotate(-3)"
        fill="#8870F3"
      />
    </svg>
  );
}
