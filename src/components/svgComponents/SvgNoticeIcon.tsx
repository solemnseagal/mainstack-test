import * as React from "react";
const SvgNoticeIcon = (props: any) => (
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
        fill="#888F95"
        d="M10 13.958c.177 0 .326-.06.445-.18.12-.12.18-.268.18-.445V9.792a.604.604 0 0 0-.18-.446.605.605 0 0 0-.445-.18.604.604 0 0 0-.446.18.605.605 0 0 0-.18.446v3.541c0 .177.06.326.18.446s.269.18.446.18Zm0-6.218c.19 0 .35-.064.48-.193a.651.651 0 0 0 .193-.48c0-.19-.065-.35-.194-.48a.651.651 0 0 0-.48-.193c-.19 0-.35.065-.479.194a.651.651 0 0 0-.193.48c0 .19.064.35.193.479a.651.651 0 0 0 .48.193ZM10 17.917a7.713 7.713 0 0 1-3.087-.624A7.997 7.997 0 0 1 4.4 15.601a7.994 7.994 0 0 1-1.693-2.513 7.704 7.704 0 0 1-.624-3.087c0-1.095.208-2.124.624-3.087A7.997 7.997 0 0 1 4.398 4.4a7.993 7.993 0 0 1 2.514-1.693 7.704 7.704 0 0 1 3.087-.624c1.094 0 2.124.208 3.087.624.963.415 1.802.98 2.514 1.692a7.992 7.992 0 0 1 1.693 2.513c.416.963.623 1.992.623 3.087a7.71 7.71 0 0 1-.623 3.087 7.996 7.996 0 0 1-1.692 2.514 7.99 7.99 0 0 1-2.513 1.693 7.705 7.705 0 0 1-3.087.624ZM10 16.667c1.861 0 3.437-.646 4.73-1.938 1.29-1.291 1.937-2.868 1.937-4.729 0-1.861-.646-3.438-1.938-4.73-1.292-1.29-2.868-1.937-4.73-1.937-1.86 0-3.437.646-4.728 1.938C3.979 6.562 3.333 8.139 3.333 10c0 1.861.646 3.438 1.938 4.73 1.291 1.29 2.868 1.937 4.729 1.937Z"
      />
    </g>
  </svg>
);
export default SvgNoticeIcon;
