/* eslint-disable react/prop-types */

const StudentHighCommission = ({ highCommission }) => {
  const { address, phone, fax, email, web, officeHours } = highCommission;

  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        High Commission
      </h3>
      <p>
        <span className="font-bold">Address:</span> {address}
      </p>
      <p>
        <span className="font-bold">Phone:</span> {phone.join(", ")}
      </p>
      <p>
        <span className="font-bold">Fax:</span> {fax}
      </p>
      <p>
        <span className="font-bold">Email:</span> {email.join(", ")}
      </p>
      <p>
        <span className="font-bold">Website:</span>{" "}
        <a
          href={web}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {web}
        </a>
      </p>
      <p>
        <span className="font-bold">Office Hours:</span> {officeHours}
      </p>
    </div>
  );
};

export default StudentHighCommission;
