import * as React from "react";
const SvgCancelIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#131316"
        d="m6.4 18.3-.7-.7 5.6-5.6-5.6-5.6.7-.7 5.6 5.6 5.6-5.6.7.7-5.6 5.6 5.6 5.6-.7.7-5.6-5.6-5.6 5.6Z"
      />
    </g>
  </svg>
);
export default SvgCancelIcon;
