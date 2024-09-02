import { useForm } from "react-hook-form";
import heroImg from "../../../../../public/hero-img.jpg";
import {} from "../../../../redux/features/cetagory/categoryApi";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getVisaInfo,
  VisasType,
} from "../../../../redux/features/cetagory/countrisSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetVisaCountryQuery,
  useSearchAllVisaCategoryQuery,
} from "../../../../redux/features/cetagory/Country/countryApi";

const Hero = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  // const { data: singleCountry, isLoading } = useGetSingleCountryQuery(
  //   selectedCountry,
  //   { skip: !selectedCountry }
  // );
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { data: visaSearchCategory, isLoading } = useSearchAllVisaCategoryQuery(
    selectedCountry,
    { skip: !selectedCountry }
  );
  // console.log("visa search", visaSearchCategory?.country.visacat);

  // get all country list
  const { data: countryLists } = useGetVisaCountryQuery(undefined);
  // console.log("country list", countryList?.country_list);

  const countryName = countryLists?.country_list;
  const countryList = countryName ? Object.entries(countryName) : [];

  const visaTypes = visaSearchCategory?.country?.visacat;
  // const countries = countriesData ? countriesData.data : [];
  // const uniqueCountries = Array.from(
  //   new Set(countries.map((item) => item.country))
  // );
  // console.log(uniqueCountries, countries);
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
    // console.log("form data", formData);
    const findCountry = formData.filterCountry;
    const selectedVisa = formData.visa;
    const [visaSlug, visaName] = selectedVisa.split(",");
    // console.log(visaName);
    dispatch(VisasType(selectedVisa));

    if (findCountry && selectedVisa) {
      // Dispatch action to get visa requirements

      // Navigate to the requirements page with selected country and visa type Tourist Visa

      switch (visaName) {
        case "Student Visa":
          navigate(`/requirements/${findCountry}/${visaSlug}`);
          break;
        case "Tourist Visa":
          navigate(`/requirements/${findCountry}/${visaSlug}`);
          break;
        case "Family Visit Visa":
          navigate(`/requirements/${findCountry}/${visaSlug}`);
          break;
        case "Business Visa":
          navigate(`/requirements/${findCountry}/${visaSlug}`);
          break;
        default:
          console.error("Unknown visa type selected");
          break;
      }
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
          <div className="bg-slate-300 py-6 lg:p-12 text-start text-[18px] rounded-lg w-9/12 lg:w-auto">
            <div className="lg:flex justify-between items-center px-12">
              <div className="fom lg:pr-10">
                <p className="px-1 py-2 lg:py-3 font-semibold">Citizen Of</p>
                <div>
                  <select
                    {...register("banngladesh")}
                    className="select select-primary w-full"
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
                    className="select select-primary w-full"
                    required
                    onChange={handleCountryChange} // Handle change to fetch data
                  >
                    <option value="" disabled selected>
                      Select destination country
                    </option>

                    {countryList.map(([key, value]) => (
                      <option key={key} value={key}>
                        {value}
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
                    className="select select-primary w-full"
                  >
                    <option value="" disabled selected>
                      Select visa category
                    </option>
                    {visaTypes?.map((visa) => (
                      <option key={visa.id} value={[visa.slug, visa.name]}>
                        {visa.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                {/* Check Requirements */}
                <div className="check flex justify-center items-center lg:pt-12 mt-4 lg:mt-0">
                  <input
                    type="submit"
                    value="Check Requirements"
                    className="btn btn-primary px-12"
                  />
                </div>
                {/* Apply Now */}
                <Link
                  to="/apply-now"
                  className="check flex justify-center items-center lg:pt-12 mt-4 lg:mt-0"
                >
                  <input
                    type="submit"
                    value="Apply Now"
                    className="btn btn-success px-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Hero;
