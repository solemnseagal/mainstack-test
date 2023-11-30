import * as React from "react";
const SvgDownloadIcon = (props: any) => (
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
        fill="#131316"
        d="M10 12.688 7.042 9.75l.604-.604 1.937 1.937V3.875h.834v7.208l1.937-1.937.604.604L10 12.688Zm-4.48 3.145a1.314 1.314 0 0 1-1.354-1.354V12.5H5v1.98c0 .138.052.26.157.363A.498.498 0 0 0 5.52 15h8.958c.14 0 .26-.052.364-.157A.497.497 0 0 0 15 14.48V12.5h.833v1.98a1.315 1.315 0 0 1-1.354 1.353H5.521Z"
      />
    </g>
  </svg>
);
export default SvgDownloadIcon;
