import React, { useContext, useEffect, useState } from "react";
import SidebarLayout from "../components/Layouts/SidebarLayout";
import CardDashboard from "../components/Fragments/CardDashboard";
import moment from "moment-timezone";
import { AuthContext, useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const [greeting, setGreeting] = useState("");
  const { authUser, isLoggedIn } = useAuth();

  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = moment().tz("Asia/Jakarta");
      const hour = now.hour();
      let message = "";

      if (hour >= 3 && hour < 11) {
        message = "pagi";
      } else if (hour >= 11 && hour < 15) {
        message = "siang";
      } else if (hour >= 15 && hour < 19) {
        message = "sore";
      } else {
        message = "malam";
      }

      setGreeting(message);
    };

    updateTimeAndGreeting();

    const intervalId = setInterval(updateTimeAndGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SidebarLayout>
      <div className="">
        <div className="mb-28">
          <h3 className="font-bold text-2xl">
            Selamat {greeting}, {isLoggedIn && authUser.nama}
          </h3>
        </div>
        <div className="flex gap-6">
          <CardDashboard image="assets/icon/artikel-dashboard.svg" title="Artikel Mu">
            <p className="text-white">Total artikel yang dibuat : 0</p>
            <p className="text-white">Total pembaca : 0</p>
          </CardDashboard>
          <CardDashboard image="assets/icon/forum-dashboard.svg" title="Postingan Mu">
            <p className="text-white">Total postingan yang dibuat : 0</p>
            <p className="text-white">Total pembaca : 0</p>
          </CardDashboard>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default DashboardPage;
