import React from "react";
import InputForm from "../../Elements/Input";
import Button from "../../Elements/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <form className="h-full py-16 lg:py-32 px-6 md:px-12 lg:px-[103px] rounded-[64px] bg-white bg-opacity-20 filter backdrop-blur-[140px] shadow-card max-w-[650px]">
      <div className="flex flex-col h-full justify-between ">
        <div className="h-full">
          <h4 className="font-bold text-2xl text-center text-primary">Log in</h4>
          <div className="flex flex-col gap-6 my-8">
            <InputForm type="text" image="assets/icon/mail-auth.svg" placeholder="Username atau Email" name="login" />
            <p className="-mt-4 font-normal text-xs text-red-500">Password tidak boleh kosong</p>
            <InputForm type="password" image="assets/icon/pass-auth.svg" placeholder="Password" name="password" />
            <p className="-mt-4 font-normal text-xs text-red-500">Password tidak boleh kosong</p>
          </div>
          <Link className="text-base font-semibold text-primary hover:text-[#ac1f86]">Lupa kata sandi?</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Button>Masuk</Button>
          <p className="font-normal text-base text-center">
            Belum mempunyai akun? <Link className="text-primary font-semibold">Register</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
