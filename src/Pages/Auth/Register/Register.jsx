import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "/7bfeedd.png";
import LoginBanner from "../../../components/Banner/LoginBanner";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        // handle form submission
    };

    const password = watch("password");

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
                            Register
                        </h1>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="space-y-1 text-sm">
                            <label className="block text-rose-700">First Name</label>
                            <input
                                type="text"
                                {...register("firstName", { required: "First Name is required" })}
                                placeholder="First Name"
                                className="w-full px-4 py-3 rounded-md bg-rose-50"
                            />
                            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-rose-700">Last Name</label>
                            <input
                                type="text"
                                {...register("lastName", { required: "Last Name is required" })}
                                placeholder="Last Name"
                                className="w-full px-4 py-3 rounded-md bg-rose-50"
                            />
                            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block text-rose-700">User Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Email is not valid"
                                    }
                                })}
                                placeholder="User Email"
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
                        <div className="space-y-1 text-sm">
                            <label className="block text-rose-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: value =>
                                            value === password || "Passwords do not match"
                                    })}
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-3 rounded-md bg-rose-50"
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <AiFillEyeInvisible className="text-rose-700" />
                                    ) : (
                                        <AiFillEye className="text-rose-700" />
                                    )}
                                </span>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        </div>
                        <button className="block w-full p-3 text-center rounded bg-primary hover:bg-primary/95 text-white">
                            Create Account
                        </button>
                    </form>

                    <p className="text-md text-center pt-2 sm:px-6 text-rose-700">
                        Already have an account?
                        <Link to="/login" className="underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
