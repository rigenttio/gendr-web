import React from "react";
import { Link } from "react-router-dom";

const HeaderUser = (props) => {
  const { children, image } = props;
  return (
    <Link className="flex items-center justify-end max-w-[200px] gap-2">
      <p className="font-semibold truncate hidden lg:block">{children}</p>
      <img src={image} alt="" className="w-10 object-center object-cover rounded-full" />
    </Link>
  );
};

export default HeaderUser;
