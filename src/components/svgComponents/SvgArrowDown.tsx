import * as React from "react";
const SvgArrowDown = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#31373D"
        d="M10 12.25 5.583 7.833l.584-.604L10 11.062l3.833-3.833.584.604L10 12.25Z"
      />
    </g>
  </svg>
);
export default SvgArrowDown;
