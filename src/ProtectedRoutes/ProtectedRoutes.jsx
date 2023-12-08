import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children, user }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("persist:root"))?.isLoggedIn
  );

  useEffect(() => {
    //   let isLoggedIn = JSON.parse(localStorage.getItem("persist:root"))?.isLoggedIn;
    console.log("loggedIn", isLoggedIn);
    if (isLoggedIn === "false") {
      return navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return children;
};

export default ProtectedRoutes;
