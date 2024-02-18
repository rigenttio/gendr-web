import React from "react";

const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      autoComplete="off"
      type={type}
      name={name}
      id={name}
      className="text-base font-normal appearance-none focus:outline-none input-inner-shadow rounded-full w-full py-4 px-6 text-slate-700 placeholder:opacity-50 pl-16"
      placeholder={placeholder}
    />
  );
};

export default Input;
