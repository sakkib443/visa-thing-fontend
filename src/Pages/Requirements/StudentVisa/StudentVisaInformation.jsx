/* eslint-disable react/prop-types */

const StudentVisaInformation = ({ studentVisa }) => {
  const { description, website } = studentVisa;

  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        Additional Information
      </h3>
      <p>{description}</p>
      <p className="mt-2">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Visit website for more details
        </a>
      </p>
    </div>
  );
};

export default StudentVisaInformation;
