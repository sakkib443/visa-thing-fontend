import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "/7bfeedd.png";
import LoginBanner from "../../../components/Banner/LoginBanner";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/features/authentication/authSlice";
import { useSigninUserMutation } from "../../../redux/features/authentication/authApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()


  // redux related
  const dispatch = useDispatch()
  const [signinUser] = useSigninUserMutation()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "xordiboy@gmail.com",
      password: "123456"
    }
  });

  // form submission
  const onSubmit = async (formData) => {
    console.log(formData);



    // login
    try {
      const result = await signinUser(formData);
      console.log("Signin result:", result.data.data); // Log the entire result to inspect its structure
      const trimmedData = result?.data?.data

      if (result?.data) {
        const user = trimmedData.user; // User object
        const token = trimmedData.token; // Token

        if (user && token) {
          dispatch(setCredentials({ user, token }));
          console.log("User signed in successfully", user);
          //redirect to appropriate routes
          if (user.role === "admin") {
            navigate('/dashboard/admin/admin-profile')
          } else if (user.role === "user") {
            navigate('/dashboard/user/user-profile')
          }

        } else {
          console.error("User data or token is undefined");
        }
      } else if (result?.error) {
        console.error("Failed to signin: ", result.error);
      }
    } catch (error) {
      console.error("Failed to signin: ", error);
    }
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
