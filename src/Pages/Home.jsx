import { useDispatch, useSelector } from "react-redux";
import WelcomeImage from "../assets/wel.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { showNotification } from "@mantine/notifications";

const Home=()=> {
  const user = useSelector((state) => state.user);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("hello")
  //   let isLoggedIn = JSON?.parse(
  //     localStorage?.getItem("persist:root")
  //   )?.isLoggedIn;
  //   isLoggedIn === "false" && navigate("/");
  // }, [localStorage?.getItem("persist:root")]);

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center mt-20 bg-white">
        <h1 className="text-6xl">Welcome {user?.userName}</h1>
        <img src={WelcomeImage} alt="img" />

        <div className="flex items-center justify-between">
          <button
            className="bg-accentColor  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-23"
            onClick={() => {
              dispatch({
                type: "LOGOUT",
              });
              showNotification({
                title:"Success",
                message:"Logout Successfully",
                color:"green",
                autoClose: 5000,
              })
              navigate("/sign-up")
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
