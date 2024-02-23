import React from "react";
import ButtonSidebar from "../../Elements/ButtonSidebar";

const SIDEBAR_ITEM = [
  {
    image: "assets/icon/dashboard-icon.svg",
    to: "/dashboard",
    label: "Dashboard",
  },
  {
    image: "assets/icon/forum-icon2.svg",
    to: "/forum",
    label: "Forum Diskusi",
  },
  {
    image: "assets/icon/artikel-icon2.svg",
    to: "/artikel",
    label: "Kelola Artikel",
  },
  {
    image: "assets/icon/profil-icon.svg",
    to: "/profile",
    label: "Edit Profil",
  },
];

const SidebarItem = () => {
  return (
    <div className="mx-6 flex flex-col gap-3">
      {SIDEBAR_ITEM.map((item, index) => (
        <ButtonSidebar key={index} to={item.to} image={item.image}>
          {item.label}
        </ButtonSidebar>
      ))}
    </div>
  );
};

export default SidebarItem;
