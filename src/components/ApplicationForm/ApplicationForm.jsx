import { GiNotebook } from "react-icons/gi";
import { useForm } from 'react-hook-form';

const ApplicationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle form submission here
    };

    return (
        <div className="mx-auto p-4 flex flex-col items-center justify-center gap-5 bg-slate-400">
            <div className="flex gap-2 items-center justify-center my-2">
                <h2 className="text-4xl font-semibold">Apply Now</h2>
                <GiNotebook className="text-4xl" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-[300px] md:w-[500px] flex flex-col items-center justify-center'>
                <div className="mb-4 w-full">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-lg border-blue-500 bg-slate-200"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters long"
                            }
                        })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div className="mb-4 w-full">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-lg border-blue-500 bg-slate-200"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="mb-4 w-full">
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="w-full px-3 py-2 border rounded-lg border-blue-500 bg-slate-200"
                        {...register("phoneNumber", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Phone number must contain only digits"
                            },
                            minLength: {
                                value: 10,
                                message: "Phone number must be at least 10 digits long"
                            },
                            maxLength: {
                                value: 15,
                                message: "Phone number must be no more than 15 digits long"
                            }
                        })}
                    />
                    {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
                </div>

                <div className="mb-4 w-full">
                    <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                        Gender
                    </label>
                    <select
                        id="gender"
                        className="w-full px-3 py-2 border rounded-lg border-blue-500 bg-slate-200"
                        {...register("gender", {
                            required: "Please select your gender"
                        })}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                </div>

                <div className="mb-4 w-full">
                    <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        className="w-full px-3 py-2 border rounded-lg border-blue-500 bg-slate-200"
                        {...register("location", {
                            required: "Location is required",
                            minLength: {
                                value: 2,
                                message: "Location must be at least 2 characters long"
                            }
                        })}
                    />
                    {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                </div>

                <button type="submit" className="btn btn-success px-10">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
