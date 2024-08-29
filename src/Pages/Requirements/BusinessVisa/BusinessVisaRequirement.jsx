/* eslint-disable react/prop-types */

const BusinessVisaRequirements = ({ requirements }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {Object.keys(requirements).map((key) => (
          <li key={key}>
            <span className="font-bold">{key.replace(/([A-Z])/g, " $1")}:</span>{" "}
            {requirements[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessVisaRequirements;
