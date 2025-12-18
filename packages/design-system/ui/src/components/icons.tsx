type IconProps = React.SVGProps<SVGSVGElement>;
export const Icons = {
  Logo: (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        {...props}
      >
        <path
          d="M202.442 0H47.188L65.9838 121.421L47 256H104.327L85.1557 125.932L187.029 143.601L176.88 100.746L84.7797 113.903L100.568 12.0294L209.584 51.1248L202.442 0Z"
          fill="currentColor"
        />
      </svg>
    );
  },
};
