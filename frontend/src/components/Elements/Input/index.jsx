import React, { useState } from "react";
import Input from "./Input";

const InputForm = (props) => {
  const { type, placeholder, name, image } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePass = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return type === "password" ? (
    <div className="w-full relative">
      <Input type={isPasswordVisible ? "text" : "password"} name={name} id={name} placeholder={placeholder} />
      <img src={image} alt="icon" className="absolute bottom-1/2 translate-y-1/2 left-6" />
      <div onClick={togglePass} className="py-[10px] w-10 text-center bg-white cursor-pointer shadow-button bottom-1/2 translate-y-1/2 rounded-xl right-6 absolute text-[10px] hover:text-primary transition-all duration-500">
        {isPasswordVisible ? "Hide" : "Show"}
      </div>
    </div>
  ) : (
    <div className="w-full relative">
      <Input type={type} name={name} id={name} placeholder={placeholder} />
      <img src={image} alt="icon" className="absolute bottom-1/2 translate-y-1/2 left-6" />
    </div>
  );
};

export default InputForm;
