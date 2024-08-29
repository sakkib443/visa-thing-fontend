/* eslint-disable react/prop-types */

const StudentVisaService = ({ visaService }) => {
  const { visaConsultancy, servicesProvided } = visaService;

  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        Visa Service
      </h3>
      <p>
        <span className="font-bold">Consultancy Available:</span>{" "}
        {visaConsultancy ? "Yes" : "No"}
      </p>
      <p className="mt-2 font-bold">Services Provided:</p>
      <ul className="list-disc list-inside text-gray-700">
        {servicesProvided.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentVisaService;
