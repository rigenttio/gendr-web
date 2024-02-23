import React from "react";
import Footer from "../components/Fragments/Footer";
import ButtonHref from "../components/Elements/ButtonHref";
import NavBar from "../components/Fragments/NavBar/Index";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[70vh] justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold text-primary">404 Not Found</h2>
        <p className="mb-4">Halaman tidak ditemukan</p>
        <ButtonHref to="/">Kembali ke Beranda</ButtonHref>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
