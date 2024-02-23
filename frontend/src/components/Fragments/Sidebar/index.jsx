import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SidebarItem from "../SidebarItem";
import { useAuth } from "../../../context/AuthContext";
import { axiosInstance } from "../../../lib/axios";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { authUser, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const handleLogout = async () => {
    try {
      await axiosInstance.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies.get("access_token")}`,
          },
        }
      );
      cookies.remove("access_token");
      setIsLoggedIn(false);
      navigate("/login");
      toast.success("Berhasil Logout");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="w-[17vw] h-screen bg-[#FFD7F1]/50 filter backdrop-blur-[160px] overflow-y-scroll py-16">
      <div className="flex gap-3 items-center justify-start mx-6">
        <img src="assets/default-avatar.svg" alt="avatar" className="w-12 h-12 object-cover object-center rounded-full" />
        <p className="font-medium text-sm truncate">{authUser.username}</p>
      </div>
      <hr className="h-[1px] bg-primary my-4" />
      <div className="bg-white pt-6 px-4 pb-4 mx-6 rounded-[28px] text-center">
        <div className="flex flex-col gap-[6px] mb-5">
          <h4 className="font-semibold text-base">Ayo buat!</h4>
          <p className="font-medium text-xs opacity-60">Ekspresikan pemikiran dan pengalaman kamu sekarang </p>
        </div>
        <Link className="bg-primary py-3 flex gap-2 items-center justify-center w-full rounded-[20px] hover:bg-[#ac1f86] transition-colors">
          <i className="fa-solid fa-plus text-white"></i> <span className="text-sm font-semibold text-white">Buat Artikel</span>
        </Link>
      </div>
      <p className="uppercase text-[#242220]/40 font-medium text-xs me-6 ml-11 mt-6 mb-4">menu</p>
      <SidebarItem />
      <div className="mt-16 mx-6 mb-12">
        <img src="assets/logo/gendr-top.svg" alt="logo" className="mx-auto animate-bounce" />
        <img src="assets/logo/gendr-bot.svg" alt="logo" className="mx-auto" />
      </div>
      <button className="flex items-center justify-start gap-3 ms-11">
        <img src="assets/icon/logout-icon.svg" alt="icon" />
        <span onClick={handleLogout} className="text-primary font-semibold text-base">
          Keluar
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;
