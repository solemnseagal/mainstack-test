import * as React from "react";
const SvgHamburgerIcon = (props: any) => (
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
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#56616B"
        d="M4 17.275c-.15 0-.27-.05-.362-.15a.5.5 0 0 1-.138-.35c0-.15.046-.27.138-.362A.487.487 0 0 1 4 16.275h16a.49.49 0 0 1 .363.138.49.49 0 0 1 .137.362c0 .133-.046.25-.137.35a.47.47 0 0 1-.363.15H4ZM4 12.5c-.15 0-.27-.05-.362-.15A.5.5 0 0 1 3.5 12a.49.49 0 0 1 .138-.363A.49.49 0 0 1 4 11.5h16c.15 0 .271.05.363.15.091.1.137.217.137.35 0 .15-.046.271-.137.363A.493.493 0 0 1 20 12.5H4Zm0-4.775a.487.487 0 0 1-.362-.138.487.487 0 0 1-.138-.362.5.5 0 0 1 .138-.35c.091-.1.212-.15.362-.15h16c.15 0 .271.05.363.15.091.1.137.217.137.35a.49.49 0 0 1-.137.362.49.49 0 0 1-.363.138H4Z"
      />
    </g>
  </svg>
);
export default SvgHamburgerIcon;