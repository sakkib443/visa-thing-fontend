/* eslint-disable react/prop-types */

const StudentVisaProcessingManual = ({ processingManual }) => {
  const { introduction, steps, conclusion } = processingManual;

  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        Processing Manual
      </h3>
      <p className="mb-3">{introduction}</p>
      <h4 className="font-bold mb-2">Steps to Follow:</h4>
      <ul className="list-decimal list-inside text-gray-700 space-y-2">
        {Object.entries(steps).map(([step, description], index) => (
          <li key={index}>
            <span className="font-semibold capitalize">
              {step.replace(/([A-Z])/g, " $1")}:
            </span>{" "}
            {description}
          </li>
        ))}
      </ul>
      <p className="mt-3">{conclusion}</p>
    </div>
  );
};

export default StudentVisaProcessingManual;
