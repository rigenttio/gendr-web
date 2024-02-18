import React from "react";

const Button = (props) => {
  const { children, className, onClick = () => {}, type = "button" } = props;
  return (
    <button type={type} className={`py-4 px-8 rounded-full font-bold transition-colors text-white bg-primary hover:bg-[#ac1f86] ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
