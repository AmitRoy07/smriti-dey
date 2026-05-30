const paths = {
  orbit:
    "M12 28C26 6 60 6 74 28C60 50 26 50 12 28ZM22 28C32 16 54 16 64 28C54 40 32 40 22 28Z",
  spark:
    "M43 4L51 30L78 38L51 46L43 72L35 46L8 38L35 30L43 4Z",
  wave:
    "M8 44C20 20 36 20 48 44C60 68 76 68 88 44",
};

const AnimatedSvgMark = ({ variant = "orbit", className = "" }) => {
  return (
    <svg
      viewBox="0 0 96 76"
      aria-hidden="true"
      className={`animated-svg-mark ${className}`}
      fill="none"
    >
      <path
        d={paths[variant]}
        className="animated-svg-mark__line"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        className="animated-svg-mark__dot"
        cx="48"
        cy="38"
        r="5"
        fill="currentColor"
      />
    </svg>
  );
};

export default AnimatedSvgMark;
