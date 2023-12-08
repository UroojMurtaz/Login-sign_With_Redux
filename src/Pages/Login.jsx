import { useForm } from "@mantine/form";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { showNotification } from "@mantine/notifications";
const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value?.length < 1 ? "Enter password" : null),
    },
  });

  console.log(form.errors);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Users =
    localStorage?.getItem("persist:root") &&
    JSON?.parse(JSON?.parse(localStorage?.getItem("persist:root"))?.users);

  // useEffect(() => {
  //   let isLoggedIn = JSON?.parse(
  //     localStorage?.getItem("persist:root")
  //   )?.isLoggedIn;
  //   isLoggedIn === "true" && navigate("/home");
  // }, [JSON?.parse(localStorage?.getItem("persist:root"))?.isLoggedIn]);

  const Login = (values) => {
    const checkCredentials = Users?.find(
      (user) =>
        user?.email === values?.email && user?.password === values?.password
    );
    if (checkCredentials) {
      dispatch({
        type: "LOGIN",
        payload: checkCredentials,
      });
      showNotification({
        title: "Success",
        message: "Login Successfully",
        color: "green",
        autoClose: 5000,
      });
      setTimeout(() => navigate("/home"), 1000);
    } else {
      alert("Invalid");
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-slate-200"></div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
        <div className="flex items-center justify-center flex-col">
          <img
            src={Logo}
            alt="Logo"
            className=" hover:scale-150 transition-all duration-500 transform mx-auto mb-10"
          />
          <h1 className="text-4xl font-extrabold mb-3">
            Login to your account
          </h1>
          <div className="mb-10">
            <span>Or</span>{" "}
            <span
              className="text-xl text-accentColor cursor-pointer"
              onClick={() => navigate("/sign-up")}
            >
              Register
            </span>
          </div>
        </div>
        <div className="w-[32rem]">
          <form
            onSubmit={form.onSubmit((values) => Login(values))}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-xl"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your email"
                {...form.getInputProps("email")}
              />
              <p className="text-errorColor">{form.errors.email}</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none border rounded w-full p-2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                {...form.getInputProps("password")}
              />
              <p className="text-errorColor">{form.errors.password}</p>

              <span
                className="text-md text-accentColor"
                style={{ display: "flex", marginRight: "auto" }}
              >
                Forget Password?
              </span>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-accentColor  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                To enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
