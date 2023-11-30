import React from "react";
import SvgAppLogo from "../svgComponents/SvgAppLogo";
import SvgHomeIcon from "../svgComponents/SvgHomeIcon";
import SvgNotificationIcon from "../svgComponents/SvgNotificationIcon";
import SvgAnalyticsIcon from "../svgComponents/SvgAnalyticsIcon";
import SvgMoneyIcon from "../svgComponents/SvgMoneyIcon";
import SvgAppListIcon from "../svgComponents/SvgAppListIcon";
import SvgCRMIcon from "../svgComponents/SvgCRMIcon";
import SvgMessageIcon from "../svgComponents/SvgMessageIcon";
import { NavLink } from "react-router-dom";
import { useGetUserDetails } from "../../hooks/wallet";
import SvgHamburgerIcon from "../svgComponents/SvgHamburgerIcon";

const AppNavbar = () => {
  const { data } = useGetUserDetails();
  return (
    <div className="shadow-lg rounded-app-primary w-full min-h-[4rem] flex items-center justify-between p-5">
      <div className="p-1">
        <SvgAppLogo />
      </div>
      <div className="flex items-center gap-5 text-link tracking-md-tight leading-6 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) => {
            let linkClasses = [
              "flex",
              "items-center",
              "space-x-1",
              "py-2",
              "px-[1.125rem]",
            ];
            if (isActive) linkClasses.push("bg-black text-white");
            return linkClasses.join(" ");
          }}
        >
          <SvgHomeIcon />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => {
            let linkClasses = [
              "flex",
              "items-center",
              "space-x-1",
              "py-2",
              "px-[1.125rem]",
            ];
            if (isActive) linkClasses.push("bg-black text-white");
            return linkClasses.join(" ");
          }}
        >
          <SvgAnalyticsIcon />
          <p>Analytics</p>
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) => {
            let linkClasses = [
              "flex",
              "items-center",
              "space-x-1",
              "py-2",
              "px-[1.125rem]",
            ];
            if (isActive)
              linkClasses.push("bg-black text-white rounded-app-primary");
            return linkClasses.join(" ");
          }}
        >
          <SvgMoneyIcon />
          <p>Revenue</p>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => {
            let linkClasses = [
              "flex",
              "items-center",
              "space-x-1",
              "py-2",
              "px-[1.125rem]",
            ];
            if (isActive) linkClasses.push("bg-black text-white");
            return linkClasses.join(" ");
          }}
        >
          <SvgCRMIcon />
          <p>CRM</p>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => {
            let linkClasses = [
              "flex",
              "items-center",
              "space-x-1",
              "py-2",
              "px-[1.125rem]",
            ];
            if (isActive) linkClasses.push("bg-black text-white");
            return linkClasses.join(" ");
          }}
        >
          <SvgAppListIcon />
          <p>Apps</p>
        </NavLink>
      </div>
      <div className="flex items-center">
        <div className="px-3 py-2.5">
          <SvgNotificationIcon />
        </div>
        <div className="px-3 py-2.5">
          <SvgMessageIcon />
        </div>
        <div className="bg-[#EFF1F6 flex items-center px-3 py-2.5 bg-[#EFF1F6] p-1 rounded-app-primary space-x-2">
          <div className="rounded-full w-8 h-8 bg-gradient-to-r flex justify-center items-center from-[#5C6670] text-white font-semibold text-sm to-[#131316]">
            {data?.first_name?.toString()[0] + data?.last_name?.toString()[0]}
          </div>
          <div>
            <SvgHamburgerIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
