import { useForm } from "@mantine/form";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "@mantine/notifications";
const SignUp = () => {
  const form = useForm({
    initialValues: {
      email: "",
      confirmEmail: "",
      password: "",
      userName: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "enter valid mail"),
      userName: (value) =>
        value.length < 2 ? "enter valid username must be greater than 2" : null,
      password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
          value
        )
          ? null
          : "Password must contain 8 to 15 characters with 1 capital, 1 small and 1 special character",
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SignUp = (values) => {
    dispatch({
      type: "SIGN_UP",
      payload: values,
    });
    showNotification({
      title: "Success",
      message: "Sign-Up Successfully",
      color: "green",
      autoClose: 5000,
    });
    navigate("/");
  };

  const users = useSelector((state) => state.users);
  console.log(users, "users");

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
          <h1 className="text-4xl font-extrabold mb-3">create new account</h1>
          <div className="mb-10">
            <span>Or</span>{" "}
            <span
              className="text-xl text-accentColor cursor-pointer"
              onClick={() => navigate("/")}
            >
              sign into your existing account
            </span>
          </div>
        </div>
        <div className="w-[32rem]">
          <form
            onSubmit={form.onSubmit((values) => SignUp(values))}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-xl"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your email"
                {...form.getInputProps("userName")}
              />
              <p className="text-errorColor">{form.errors.userName}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="appearance-none border rounded w-full p-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                {...form.getInputProps("password")}
              />
              <p className="text-errorColor">{form.errors.password}</p>
            </div>

            <div className="p-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-md text-gray-700">
                  I have read and accept Kiwify's terms of use , software
                  license terms , content policy
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-accentColor  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
