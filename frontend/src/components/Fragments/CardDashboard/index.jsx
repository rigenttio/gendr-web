import React from "react";

const CardDashboard = (props) => {
  const { children, image, title, className = "grayscale-0" } = props;
  return (
    <div className={`p-16 bg-[#E8208E] w-full rounded-[50px] hover:shadow-card transition-all relative ${className}`}>
      <div className="absolute bg-[#FF9BD6] p-4 rounded-2xl -top-12 left-1/2 -translate-x-1/2">
        <img src={image} alt="icon" />
      </div>
      <h3 className="font-bold text-white text-2xl">{title}</h3>
      <div className="flex flex-col text-base font-semibol justify-start mt-3">{children}</div>
    </div>
  );
};

export default CardDashboard;
