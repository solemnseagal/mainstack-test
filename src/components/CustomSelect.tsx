import React from "react";
import SvgArrowDown from "./svgComponents/SvgArrowDown";
import { Option, Select } from "@material-tailwind/react";

const CustomSelect = () => {
  return (
    // <div className="flex items-center justify-between w-full bg-gray-bg px-4 py-3.5 border rounded-xl">
    //   <input
    //     className="outline-none border-0 bg-transparent text-sm font-medium p-0 m-0 leading-4 tracking-sub-tight grow"
    //     type="text"
    //   />
    //   <SvgArrowDown className="cursor-pointer" />
    // </div>
    <Select
      radioGroup="multiselect"
      className="w-full bg-gray-bg px-4 h-12 text-primary font-medium leading-6 flex m-0 text-base border rounded-xl"
    >
      <Option>Material Tailwind HTML</Option>
      <Option>Material Tailwind React</Option>
      <Option>Material Tailwind Vue</Option>
      <Option>Material Tailwind Angular</Option>
      <Option>Material Tailwind Svelte</Option>
    </Select>
  );
};

export default CustomSelect;
