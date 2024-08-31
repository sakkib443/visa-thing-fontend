import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "/7bfeedd.png";
import LoginBanner from "../../../components/Banner/LoginBanner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    // handle form submission
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full h-full md:w-[28%] hidden md:block">
          <LoginBanner />
        </div>
        <div className="w-full md:w-[40%] p-8 rounded-xl shadow-md">
          <Link to={"/"}>
            <img className="mx-auto" src={logo} alt="logo" />
          </Link>

          <div className="space-y-3 text-center py-2">
            <h1 className="text-3xl md:text-4xl font-medium text-rose-600">
              Login
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="space-y-1 text-sm">
              <label className="block text-rose-700">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid"
                  }
                })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-rose-50"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-rose-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long"
                    }
                  })}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md bg-rose-50"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-rose-700" />
                  ) : (
                    <AiFillEye className="text-rose-700" />
                  )}
                </span>
              </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2 text-rose-700">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="rounded-md bg-rose-50"
                />
                <span>Remember Me</span>
              </label>
              <Link to="/send-reset-password-link" className="text-xs underline text-rose-700">
                Forgot Password?
              </Link>
            </div>
            <button className="block w-full p-3 text-center rounded bg-primary hover:bg-primary/95 text-white">
              Login
            </button>
          </form>
          <p className="text-md text-center pt-2 sm:px-6 text-rose-700">
            Don&apos;t have an account?
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
