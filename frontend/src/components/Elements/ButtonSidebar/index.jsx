import React from "react";
import { NavLink } from "react-router-dom";

const ButtonSidebar = (props) => {
  const { children, image, to } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "py-4 px-5 rounded-[12px] bg-[#242220] bg-opacity-[4%] w-full flex gap-4 items-center justify-start grayscale-0"
          : "py-4 px-5 rounded-[12px] bg-[#242220] bg-opacity-0  w-full flex gap-4 items-center justify-start hover:grayscale-0 grayscale transition-all duration-500"
      }
    >
      <img src={image} alt="icon" className="" />
      <p className="text-primary font-medium text-base">{children}</p>
    </NavLink>
  );
};

export default ButtonSidebar;
