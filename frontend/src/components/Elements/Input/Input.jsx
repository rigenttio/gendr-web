import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      ref={ref}
      autoComplete="off"
      type={type}
      name={name}
      id={name}
      className="text-base font-normal appearance-none focus:outline-none input-inner-shadow rounded-full w-full py-4 px-6 text-slate-700 placeholder:opacity-50 pl-16"
      placeholder={placeholder}
    />
  );
});

export default Input;
