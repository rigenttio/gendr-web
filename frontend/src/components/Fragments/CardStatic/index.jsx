import React from "react";

const CardStatic = (props) => {
  const { children, title, image } = props;
  return (
    <div className="hover:scale-105 duration-150 py-12 px-[20px] md:px-[91px] lg:px-[30px] bg-white bg-opacity-20 filter backdrop-blur-[140px] rounded-2xl shadow-card min-h-[510px]">
      <img src={image} alt="" className="mx-auto" />
      <h3 className="text-2xl font-bold my-3 lg:my-10">{title}</h3>
      <h2 className="text-2xl font-normal ">{children}</h2>
    </div>
  );
};

export default CardStatic;
