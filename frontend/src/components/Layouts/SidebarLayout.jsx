import React from "react";
import BackgroundShortAuth from "./BackgroundShortAuth";
import Sidebar from "../Fragments/Sidebar";

const SidebarLayout = (props) => {
  const { children } = props;
  return (
    <BackgroundShortAuth>
      <div className="flex">
        <Sidebar />
        <main className="pt-16 flex-grow px-16 h-full">{children}</main>
      </div>
    </BackgroundShortAuth>
  );
};

export default SidebarLayout;
