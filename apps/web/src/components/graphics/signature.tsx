import * as motion from "motion/react-client";

export function Signature() {
  return (
    <svg
      width="121"
      height="29"
      viewBox="0 0 121 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Frontend Pages Keyboard Signature"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          // Signature draw-on effect (intentionally slow, runs once on open)
          // oxlint-disable-next-line react-doctor/no-long-transition-duration
          duration: 2,
          ease: "easeInOut",
        }}
        d="M24.34 0.34L55.2 14.06H0.34L120.34 0.34L27.77 14.06L75.77 27.77L106.63 0.34H38.06L41.49 14.06M14.06 14.06L24.34 0.34H51.77L75.77 27.77M75.77 27.77L24.34 0.34"
        stroke="black"
        strokeWidth="0.685714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
