import * as React from "react";
const SvgDropdownIcon = (props: any) => (
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
        d="M10 13.021a.828.828 0 0 1-.633-.256L4.873 8.271a.725.725 0 0 1-.213-.522.707.707 0 0 1 .213-.532A.717.717 0 0 1 5.399 7c.207 0 .382.072.527.217L10 11.29l4.073-4.073a.725.725 0 0 1 .523-.212.707.707 0 0 1 .531.212c.145.145.218.32.218.527a.717.717 0 0 1-.218.527l-4.494 4.494a.828.828 0 0 1-.633.256Z"
      />
    </g>
  </svg>
);
export default SvgDropdownIcon;
