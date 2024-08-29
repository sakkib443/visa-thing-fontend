/* eslint-disable react/prop-types */

const StudentVisaAvailability = ({ visaAvailability }) => {
  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        Visa Availability
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {Object.entries(visaAvailability).map(([type, availability]) => (
          <li key={type}>
            <span className="font-bold">
              {type.replace(/([A-Z])/g, " $1")}:
            </span>{" "}
            {availability || "Not Available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentVisaAvailability;
