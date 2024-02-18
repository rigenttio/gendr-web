import React from "react";
import Footer from "../components/Fragments/Footer";
import { useRouteError } from "react-router-dom";
import ButtonHref from "../components/Elements/ButtonHref";
import NavBar from "../components/Fragments/NavBar/Index";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <div className="min-h-[50vh] justify-center items-center flex flex-col">
        <h2 className="text-6xl font-bold text-primary">{error.statusText || error.message}</h2>
        <p className="mb-4">Halaman tidak ditemukan</p>
        <ButtonHref to="/">Kembali ke Beranda</ButtonHref>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
