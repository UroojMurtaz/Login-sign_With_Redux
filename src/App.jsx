// import './App.css'

import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let setIsLoggedIn=(JSON.parse(localStorage.getItem("persist:root"))?.isLoggedIn);
    console.log(setIsLoggedIn,"Login")
  }, []);
  console.log("hello")
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
