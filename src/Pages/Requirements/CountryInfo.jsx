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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{countryData.name}</h1>
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
        <Faq country={countryData.name} />
      </div>
    </div>
  );
};

export default CountryInfo;
