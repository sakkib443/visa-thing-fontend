import { useForm } from "react-hook-form";
import heroImg from "../../../../../public/hero-img.jpg";
import {
  useGetAllCountryQuery,
  useGetSingleCountryQuery,
} from "../../../../redux/features/cetagory/categoryApi";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getVisaInfo,
  VisasType,
} from "../../../../redux/features/cetagory/countrisSlice";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const { data: countriesData } = useGetAllCountryQuery();
  const { data: singleCountry, isLoading } = useGetSingleCountryQuery(
    selectedCountry,
    { skip: !selectedCountry }
  );
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const visaTypes = singleCountry?.data;
  const countries = countriesData ? countriesData.data : [];

  // Fetch visa information whenever visaTypes data changes
  useEffect(() => {
    if (visaTypes?.length > 0) {
      dispatch(getVisaInfo(visaTypes));
    }
  }, [visaTypes, dispatch]);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry); // Update selected country
  };

  const onSubmit = (formData) => {
    const findCountry = formData.filterCountry;
    const selectedVisa = formData.visa;
    dispatch(VisasType(selectedVisa));

    if (findCountry && selectedVisa) {
      // Dispatch action to get visa requirements

      // Navigate to the requirements page with selected country and visa type Tourist Visa

      switch (selectedVisa) {
        case "Student Visa":
          navigate(`/requirements/${findCountry}/student-visa`);
          break;
        case "Tourist Visa":
          navigate(`/requirements/${findCountry}/tourist-visa`);
          break;
        case "Family Visa":
          navigate(`/requirements/${findCountry}/family-visa`);
          break;
        case "Business Visa":
          navigate(`/requirements/${findCountry}/business-visa`);
          break;
        default:
          console.error("Unknown visa type selected");
          break;
      }

      // if (selectedVisa === "Student Visa") {
      //   navigate(`/requirements/${findCountry}/student-visa`);
      // } else if (selectedVisa === "Tourist Visa") {
      //   navigate(`/requirements/${findCountry}/tourist-visa`);
      // } else if (selectedVisa === "Family Visa") {
      //   navigate(`/requirements/${findCountry}/family-visa`);
      // } else if (selectedVisa === "Business Visa") {
      //   navigate(`/requirements/${findCountry}/business-visa`);
      // }
    }
  };

  return (
    <div
      className="relative py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center lg:py-8">
          <div className="text-white mb-12">
            <h1 className="font-bold text-6xl">YOUR VISA PARTNER</h1>
            <h2 className="font-bold text-5xl">NEED A VISA?</h2>
            {isLoading && (
              <div>
                <h1>Loading...</h1>
              </div>
            )}
          </div>
          <div className="bg-gray-100 py-6 lg:p-12 text-start text-[18px] rounded-lg w-9/12 lg:w-auto">
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
                    required
                    onChange={handleCountryChange} // Handle change to fetch data
                  >
                    <option value="" disabled selected>
                      Select destination country
                    </option>
                    {countries?.map((info) => (
                      <option key={info._id} value={info.country}>
                        {info.country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="category lg:pr-10">
                <p className="px-1 py-3 font-semibold">Visa Category</p>
                <div className="">
                  <select
                    {...register("visa")}
                    disabled={!selectedCountry || visaTypes?.length === 0}
                    required
                    className="select select-primary w-full max-w-xs"
                  >
                    <option value="" disabled selected>
                      Select visa category
                    </option>
                    {visaTypes?.map((info) => (
                      <option key={info._id} value={info.visaType}>
                        {info.visaType}
                      </option>
                    ))}
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
