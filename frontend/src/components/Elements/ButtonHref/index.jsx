import React from "react";
import { Link } from "react-router-dom";

const ButtonHref = (props) => {
  const { children, className = "text-white bg-primary  hover:bg-[#ac1f86]", to } = props;
  return (
    <Link to={to} className={`py-4 px-8 rounded-full font-bold ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonHref;
