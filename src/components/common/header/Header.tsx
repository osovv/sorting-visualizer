import React from "react";
import { HeaderBrandLink } from "./components/HeaderBrandLink";
import { HeaderLogo } from "./components/HeaderLogo";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <HeaderLogo />
      <HeaderBrandLink
        brand={"github"}
        link={"https://github.com/miet-students/sorting-visualizer/"}
      />
    </div>
  );
};
