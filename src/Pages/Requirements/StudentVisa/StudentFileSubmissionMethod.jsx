/* eslint-disable react/prop-types */

const StudentFileSubmissionMethod = ({ fileSubmissionMethod }) => {
  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        File Submission Method
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {Object.entries(fileSubmissionMethod).map(([method, isAvailable]) => (
          <li key={method}>
            <span className="font-bold capitalize">
              {method.replace(/([A-Z])/g, " $1")}:
            </span>{" "}
            {isAvailable ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentFileSubmissionMethod;
