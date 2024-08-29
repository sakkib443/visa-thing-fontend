/* eslint-disable react/prop-types */
import BusinessVisaRequirements from "./BusinessVisaRequirement";
import BusinessVisaEmbassy from "./BusinessVisaEmbassy";

const BusinessVisaInfo = ({ businessVisa }) => {
  const { embassy, importantInformation } = businessVisa;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Business Visa Information
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
        <BusinessVisaEmbassy embassy={embassy} />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <BusinessVisaRequirements requirements={importantInformation} />
      </div>
    </div>
  );
};

export default BusinessVisaInfo;
