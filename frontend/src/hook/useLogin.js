import { useContext, useState } from "react";
import { useRef } from "react";
import { axiosInstance } from "../lib/axios";
import Cookies from "universal-cookie";
import { AuthContext, useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
  // const { login: authLogin } = useContext(AuthContext);
  const { setUserAuth, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const [errorLogin, setErrorLogin] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [anyError, setAnyError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const login = inputLogin.current.value;
    const password = inputPassword.current.value;

    try {
      const response = await axiosInstance.post("/login", {
        login: login,
        password: password,
      });
      const token = response.data.token;
      cookies.set("access_token", token, { secure: true, sameSite: "strict" });

      setIsLoggedIn(true);
      setErrorLogin("");
      setErrorPassword("");
      setAnyError("");

      navigate("/dashboard");
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.errorType === "validation") {
        setErrorLogin(error.response.data.message.login);
        setErrorPassword(error.response.data.message.password);
      } else if (error.response && error.response.data.message) {
        setAnyError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.log(error);
        setAnyError("Something went wrong. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { inputLogin, inputPassword, errorLogin, errorPassword, anyError, handleLogin, isLoading };
};
