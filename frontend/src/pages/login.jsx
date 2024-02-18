import React from "react";
import BackgroundShort from "../components/Layouts/BackgroundShort";
import NavBar from "../components/Fragments/NavBar/Index";
import Footer from "../components/Fragments/Footer";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";

const LoginPage = () => {
  return (
    <BackgroundShort>
      <NavBar />
      <div className="container mx-auto mb-[74px]">
        <div className="min-h-screen grid grid-cols-12">
          <div className="col-span-5 hidden lg:flex justify-center items-center">
            <img src="assets/img/roket-hero.png" alt="hero" />
          </div>
          <div className="lg:col-span-7 col-span-12 lg:min-h-[706px]">
            <FormLogin />
          </div>
        </div>
      </div>
      <Footer />
    </BackgroundShort>
  );
};

export default LoginPage;
