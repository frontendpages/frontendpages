import * as motion from "motion/react-client";

export function Signature() {
  return (
    <svg
      width="121"
      height="29"
      viewBox="0 0 121 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Frontend Pages Keyboard Signature"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        d="M24.3428 0.342773L55.1999 14.0571H0.342773L120.343 0.342773L27.7713 14.0571L75.7713 27.7713L106.628 0.342773H38.0571L41.4856 14.0571M14.0571 14.0571L24.3428 0.342773H51.7713L75.7713 27.7713M75.7713 27.7713L24.3428 0.342773"
        stroke="black"
        strokeWidth="0.685714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
