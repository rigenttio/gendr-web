import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonHref from "../../Elements/ButtonHref";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="right-0 left-0 ">
      <div className={`container mx-auto py-8 flex justify-between items-center`}>
        <img src="/assets/logo/logogendr.svg" alt="logo" className={``} />
        <ul className="hidden lg:flex gap-16">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "opacity-50 text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/tentang" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "opacity-50 text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink to="/bantuan" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "opacity-50 text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
              bantuan
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontak" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "opacity-50 text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
              Kontak
            </NavLink>
          </li>
        </ul>
        <div className="hidden lg:flex gap-2">
          <ButtonHref className="bg-white hover:bg-[#fff4fd] text-dark">Masuk</ButtonHref>
          <ButtonHref>Daftar</ButtonHref>
        </div>
        {/* mobile screen */}
        <div onClick={toggleMenu} className={`lg:hidden cursor-pointer ${isMenuOpen ? "hidden" : ""}`}>
          <i className="fa-solid fa-bars text-2xl text-primary"></i>
        </div>

        {isMenuOpen && (
          <div className="h-screen bg-black bg-opacity-80 absolute inset-0 lg:hidden flex flex-col rounded-b-lg">
            <div className="mx-auto container py-8 flex justify-between items-center top-0 w-full">
              <img src="/assets/logo/logogendr.svg" alt="logo" />
              <div onClick={toggleMenu} className={`lg:hidden cursor-pointer}`}>
                <i className="fa-solid fa-xmark text-white text-2xl"></i>
              </div>
            </div>
            <ul className="h-full grid place-items-center">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "text-white text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink to="/tentang" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "text-white text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
                  Tentang
                </NavLink>
              </li>
              <li>
                <NavLink to="/bantuan" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "text-white text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
                  bantuan
                </NavLink>
              </li>
              <li>
                <NavLink to="/kontak" className={({ isActive }) => (isActive ? "text-sm font-medium opacity-100 text-primary transition-all" : "text-white text-sm font-medium hover:opacity-100 hover:text-primary transition-all")}>
                  Kontak
                </NavLink>
              </li>
              <div className="flex gap-1">
                <ButtonHref className="bg-white hover:bg-[#fff4fd] text-dark ">Masuk</ButtonHref>
                <ButtonHref>Daftar</ButtonHref>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
