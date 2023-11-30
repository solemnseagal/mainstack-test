import * as React from "react";
const SvgOutgoingIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={21}
      height={21}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#C4C4C4" d="M.5.5h20v20H.5z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#961100"
        d="M5 16.583 4.417 16 14.5 5.917H8.416v-.834h7.5v7.5h-.833V6.5L5 16.583Z"
      />
    </g>
  </svg>
);
export default SvgOutgoingIcon;
