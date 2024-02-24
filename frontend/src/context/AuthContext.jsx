import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState([null]);
  const navigate = useNavigate();
  const token = cookies.get("access_token");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserMe = async (token) => {
      try {
        const response = await axiosInstance.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuthUser(response.data.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
        cookies.remove("access_token");
        setAuthUser(null);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      getUserMe(token);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, [token]);

  return <AuthContext.Provider value={{ isLoggedIn, setAuthUser, setIsLoggedIn, authUser, isLoading }}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
