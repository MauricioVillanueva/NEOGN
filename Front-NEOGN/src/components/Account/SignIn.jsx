import { useState } from "react";
import { useAuth } from "./Context/AuthContext";
import { useTheme } from "../ThemeContext";
import NEOGNDARK from "../../utils/images/Logo/NEOGNDARK.png";
import NEOGNLIGHT from "../../utils/images/Logo/NEOGNLIGHT.png";
import { Link } from "react-router-dom";
import SignInDesktop from "./SignInDesktop";

function SignIn({ modalOpenCart, closeCart }) {
  const auth = useAuth();
  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await auth.loginWithGoogle();
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <section className="w-full h-full min-h-screen">
      <SignInDesktop modalOpenCart={modalOpenCart} closeCart={closeCart} />
      <div className="flex flex-col w-full h-full min-h-screen pt-[63px] items-center font-general-sans  dark:bg-[#121212] overflow-y-auto lg:hidden">
        <div className="w-full h-auto flex flex-col items-center gap-6">
          {theme === "dark" ? (
            <img className="w-[80px] h-auto" src={NEOGNLIGHT} />
          ) : (
            <img className="w-[80px] h-auto" src={NEOGNDARK} />
          )}
          <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
            Log in to Your Account
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mx-0 py-2 h-auto lg:py-0 w-full">
          <div className="w-full bg-transparent">
            <div className="p-6 h-auto">
              <form className=" gap-4 flex flex-col justify-center" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="section-blue shipping address-level2"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="w-full h-auto pt-4 pb-4">
                  <button
                    type="submit"
                    onClick={(e) => handleLogin(e)}
                    className="w-full text-white bg-heroColor hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-full text-base px-5 py-[15px] text-center dark:bg-heroButton dark:hover:bg-red-800 dark:focus:ring-red-800"
                  >
                    Log In
                  </button>
                </div>
                <div className="w-full h-auto flex justify-center items-center">
                  <p className="text-zinc-400">Have an admin account?&nbsp;</p>
                  <Link
                    to="/Account/LogIn/Admin"
                    className="underline font-medium dark:text-white"
                  >
                    Log In
                  </Link>
                </div>
                <div className="w-full p-x-2 flex justify-center items-center gap-x-4">
                  <div className="w-20 h-[0px] border border-zinc-200"></div>
                  <p className="font-general-sans text-base font-normal text-zinc-400">
                    Or
                  </p>
                  <div className="w-20 h-[0px] border border-zinc-200"></div>
                </div>
                <div className="w-full h-auto py-6">
                  <button
                    onClick={(e) => handleGoogle(e)}
                    type="submit"
                    className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-2xl shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-h-[54px]"
                  >
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="800px"
                      height="800px"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      {" "}
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          {" "}
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            {" "}
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>
              </form>
              <div className="w-full h-auto flex justify-center items-center">
                <p className="text-zinc-400">Dont have an account?&nbsp;</p>
                <Link
                  to="/Account/SignUp"
                  className="underline font-medium dark:text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignIn;
