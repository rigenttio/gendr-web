import React, { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext, useAuth } from "./context/AuthContext";
import Cookies from "universal-cookie";
import { axiosInstance } from "./lib/axios";
import Spinner from "./components/Fragments/Spinner";

const ProtectedRoute = () => {
  // const cookies = new Cookies();
  const { isLoggedIn, authUser, isLoading } = useAuth();
  // const token = cookies.get("access_token");
  // // console.log(authUser.username);
  // // console.log(authUser);

  // return token ? <Outlet /> : <Navigate to="/login" />;

  // const cookies = new Cookies();
  // const token = cookies.get("access_token");
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       if (token) {
  //         const response = await axiosInstance.get("/me", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setIsLoggedIn(true);
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //     } catch (error) {
  //       setIsLoggedIn(false);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, [token]);

  if (isLoading) {
    // Menampilkan loading spinner atau indikator
    return <Spinner />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
