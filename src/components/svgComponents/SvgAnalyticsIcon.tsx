import * as React from "react";
const SvgAnalyticsIcon = (props: any) => (
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
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#56616B"
        d="M6.696 13.973a.434.434 0 0 0 .323-.133.454.454 0 0 0 .13-.331v-4.38a.43.43 0 0 0-.134-.316.437.437 0 0 0-.32-.134.44.44 0 0 0-.33.134.438.438 0 0 0-.13.316v4.38c0 .132.045.243.134.331.09.088.198.133.327.133Zm3.311 0a.434.434 0 0 0 .323-.133.454.454 0 0 0 .13-.331V6.477a.43.43 0 0 0-.135-.316.437.437 0 0 0-.318-.134.44.44 0 0 0-.33.134.438.438 0 0 0-.13.316v7.032c0 .132.044.243.133.331.09.088.198.133.327.133Zm3.305 0a.434.434 0 0 0 .323-.133.455.455 0 0 0 .13-.331v-1.787a.435.435 0 0 0-.135-.312.431.431 0 0 0-.319-.138.434.434 0 0 0-.33.138.442.442 0 0 0-.13.312v1.787c0 .132.045.243.134.331a.446.446 0 0 0 .327.133Zm-9.17 3.053c-.313 0-.586-.117-.819-.349a1.121 1.121 0 0 1-.348-.82V4.143c0-.314.116-.587.348-.82.233-.231.506-.348.82-.348h11.715c.314 0 .587.117.82.349.232.232.348.505.348.82v11.715c0 .314-.116.587-.349.819a1.121 1.121 0 0 1-.82.349H4.144Zm.002-.914h11.712a.245.245 0 0 0 .176-.08.245.245 0 0 0 .08-.176V4.144a.245.245 0 0 0-.08-.176.245.245 0 0 0-.176-.08H4.144a.245.245 0 0 0-.176.08.245.245 0 0 0-.08.176v11.712c0 .064.027.123.08.176.054.053.112.08.176.08Z"
      />
    </g>
  </svg>
);
export default SvgAnalyticsIcon;
