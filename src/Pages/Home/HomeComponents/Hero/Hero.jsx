import { useForm } from "react-hook-form";
import heroImg from "../../../../../public/hero-img.jpg";
import { useGetAllCountryQuery } from "../../../../redux/features/cetagory/categoryApi";

const Hero = () => {
  const { data, isLoading } = useGetAllCountryQuery();
  const { register, handleSubmit } = useForm();

  if (isLoading) {
    return <>loading...</>;
  }
  const { data: infos } = data;
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="relative py-12  bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center lg:py-8">
          <div className="text-white mb-12">
            <h1 className="font-bold text-6xl">YOUR VISA PARTNER</h1>
            <h2 className="font-bold text-5xl">NEED A VISA?</h2>
          </div>
          <div className="bg-gray-100 py-6 lg:p-12  text-start text-[18px] rounded-lg w-9/12 lg:w-auto">
            <div className="lg:flex justify-between items-center px-12">
              <div className="from lg:pr-10">
                <p className="px-1 py-2 lg:py-3 font-semibold">Citizen Of</p>
                <div>
                  <select
                    {...register("banngladesh")}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option value="" disabled selected>
                      Select your country
                    </option>
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                </div>
              </div>
              <div className="to lg:pr-10">
                <p className="px-1 py-3 font-semibold">Traveling to</p>
                <div>
                  <select
                    {...register("filterCountry")}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option value="" disabled selected>
                      Select destination country
                    </option>

                    {infos.map((info) => (
                      <option key={info._id}>{info.country}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="category lg:pr-10">
                <p className="px-1 py-3 font-semibold">Visa Category</p>
                <div className="">
                  <select
                    {...register("visa")}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option value="" disabled selected>
                      Select visa category
                    </option>
                    {infos.map((info) => (
                      <option key={info._id}>{info.visaType}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="check flex justify-center items-center lg:pt-12 mt-4 lg:mt-0">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary px-12"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Hero;
