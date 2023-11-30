import * as React from "react";
const SvgIncomingIcon = (props: any) => (
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
        fill="#075132"
        d="M5.25 15.75v-7.5h.833v6.083L16.167 4.25l.583.583L6.667 14.917h6.083v.833h-7.5Z"
      />
    </g>
  </svg>
);
export default SvgIncomingIcon;
