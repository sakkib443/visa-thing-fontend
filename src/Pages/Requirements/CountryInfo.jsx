/* eslint-disable react/prop-types */
import Faq from "./Faq";
import PassportTypes from "./PassportTypes";
import VisaCategory from "./VisaCategory";

const CountryInfo = ({ data }) => {
  // Extracting necessary fields from data
  const { data: countryData, passport_types, v_category } = data;

  if (!countryData) {
    return <p>Loading...</p>; // Display a loading message or spinner while data is being fetched
  }
  console.log("data faq", data.data.countries_faq);
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-5">
      <h1 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        {countryData.name}
      </h1>
      <div>
        <img
          className="w-48 h-auto mb-4"
          src={`https://example.com/flags/${countryData.flag}`} // Replace with your actual flag URL base
          alt={`${countryData.name} Flag`}
        />
        <div dangerouslySetInnerHTML={{ __html: countryData.basic_info }} />
        <div dangerouslySetInnerHTML={{ __html: countryData.process_time }} />

        {/* Render new components */}
        <PassportTypes passportTypes={passport_types} />
        <VisaCategory vCategory={v_category} />
        <Faq country={countryData.name} faqs={data?.data?.countries_faq} />
      </div>
    </div>
  );
};

export default CountryInfo;
