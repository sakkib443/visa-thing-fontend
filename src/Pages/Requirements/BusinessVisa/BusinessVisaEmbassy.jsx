/* eslint-disable react/prop-types */

const BusinessVisaEmbassy = ({ embassy }) => {
  const { address, phone, email, officeHours, fax } = embassy;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Embassy Information
      </h3>
      <div className="text-gray-700 space-y-2">
        <p>
          <span className="font-bold">Address:</span> {address}
        </p>
        <p>
          <span className="font-bold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-bold">Email:</span> {email.join(", ")}
        </p>
        <p>
          <span className="font-bold">Office Hours:</span> {officeHours}
        </p>
        <p>
          <span className="font-bold">Fax:</span> {fax}
        </p>
      </div>
    </div>
  );
};

export default BusinessVisaEmbassy;
