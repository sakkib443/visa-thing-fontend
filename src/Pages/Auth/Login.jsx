import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/7bfeedd.png";
import LoginBanner from "../../components/Banner/LoginBanner";

import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const [demologin, setLogin] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // add validation and log in
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "User Logged in Successfully!", "success");

        // navigate after login
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Oops!", "Your email or password is invalid!", "error");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn();
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-center   mb-20 ">
          <div className="w-[28%]  ">
            <LoginBanner />
          </div>
          <div className=" shadow-md  w-[28%] items-center p-8  rounded-r-xl ">
            <Link to={"/"}>
              {" "}
              <img className="  mx-auto" src={logo} alt="" />
            </Link>

            <div className=" space-y-3">
              <h1 className="text-3xl md:text-4xl  font-medium text-rose-600 ">
                Login
              </h1>
              <p>Welcome back! Please enter your details.</p>
              <div className="flex justify-center items-center">
                <button
                  onClick={handleGoogleLogin}
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm text-rose-500"
                >
                  <FaGoogle className="text-2xl"></FaGoogle>
                </button>
                {/* <button
              aria-label="Log in with Twitter"
              className="p-3 rounded-sm text-rose-500"
            >
              <FaTwitter className="text-2xl"></FaTwitter>
            </button> */}
                {/* <button
              aria-label="Log in with Facebook"
              className="p-3 rounded-sm text-rose-500"
            >
              <FaFacebook className="text-2xl"></FaFacebook>
            </button> */}
              </div>

              <div></div>
            </div>

            <div className="divider">Or continue with</div>

            <form onSubmit={handleLogin} action="" className="space-y-3">
              <div className="space-y-1 text-sm">
                <label className="block text-rose-700">User Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={demologin?.user}
                  id="email"
                  placeholder="User Email"
                  className="w-full px-4 py-3 rounded-md bg-rose-50"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block text-rose-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue={demologin?.pass}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md bg-rose-50"
                />
                <div className="flex justify-end text-xs text-rose-700">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="block w-full p-3 text-center rounded bg-primary hover:bg-primary/95 text-white">
                Log in
              </button>
            </form>

            <p className="text-md text-center pt-4 sm:px-6 text-rose-700">
              Don&apos;t have an account?
              <Link
                rel="noopener noreferrer"
                href="/register"
                className="underline "
              >
                Register
              </Link>
            </p>

            {/* <div className="mx-auto text-center pt-10">
            <h3 className="py-2 text-rose-600  text-xl font-bold"> Login as </h3>
            <button onClick={()=>setLogin({user:"admin@expoelite.com",pass: "123456@Aa"})} className="btn bg-rose-600 text-white hover:bg-rose-800 btn-sm">Admin</button>
            <button onClick={()=>setLogin({user:"seller@expoelite.com",pass: "123456@Aa"})} className="btn mx-5 bg-rose-600 text-white hover:bg-rose-800 btn-sm">Seller</button>
            <button onClick={()=>setLogin({user:"user@expoelite.com",pass: "123456@Aa"})} className="btn bg-rose-600 text-white hover:bg-rose-800 btn-sm">User</button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
