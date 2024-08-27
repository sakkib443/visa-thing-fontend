import { useForm } from "react-hook-form";
import heroImg from "../../../../../public/hero-img.jpg";
import {
  useGetAllCountryQuery,
  useGetSingleCountryQuery,
} from "../../../../redux/features/cetagory/categoryApi";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVisaInfo,
  visainfoFromSlice,
} from "../../../../redux/features/cetagory/catergorySlice";

const Hero = () => {
  const [getCountry, setGetCountry] = useState(""); // State for selected country
  const { data } = useGetAllCountryQuery(); // Fetch all countries
  const { register, handleSubmit, watch } = useForm(); // Form hook

  const dispatch = useDispatch(); // Use dispatch
  const selectedCountry = watch("filterCountry"); // Watch for changes

  const {
    data: singleCountry,
    isLoading,
    error,
  } = useGetSingleCountryQuery(getCountry, { skip: !getCountry });

  const visaTypes = singleCountry?.data;
  const findVisaInfo = useSelector(visainfoFromSlice); // Access state
  console.log(findVisaInfo);
  const infos = data ? data.data : [];

  const onSubmit = (formData) => {
    const findCountry = formData.filterCountry;
    setGetCountry(findCountry); // Update state with selected country
    dispatch(getVisaInfo(visaTypes)); // Dispatch the visaTypes data
  };
  return (
    <div
      className="relative py-12  bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <form onChange={handleSubmit(onSubmit)}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center lg:py-8">
          <div className="text-white mb-12">
            <h1 className="font-bold text-6xl">YOUR VISA PARTNER</h1>
            <h2 className="font-bold text-5xl">NEED A VISA?</h2>
            <div>
              {isLoading &
              (
                <>
                  <h1>loading...</h1>
                </>
              )}
            </div>
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
                      Bangladesh
                    </option>
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
                    disabled={!getCountry || visaTypes?.length === 0}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option value="" disabled selected>
                      Select visa category
                    </option>
                    {visaTypes ? (
                      <>
                        {visaTypes?.map((info) => (
                          <option key={info._id}>{info.visaType}</option>
                        ))}
                      </>
                    ) : (
                      <>
                        <option value="" disabled selected>
                          Select visa category
                        </option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              <div className="check flex justify-center items-center lg:pt-12 mt-4 lg:mt-0">
                <input
                  type="submit"
                  value="Check Requirements"
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
