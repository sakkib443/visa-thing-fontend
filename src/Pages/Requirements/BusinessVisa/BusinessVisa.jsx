import React from "react";

const BusinessVisaInfoComponent = ({ visaInfo }) => {
  if (!visaInfo || visaInfo.visaType !== "Business Visa") return null;

  return (
    <>
      {/* Visa Service Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-700">
          {visaInfo.visaType} Service
        </h2>
      </div>
      <div className="mb-6 p-5">
        {/* Display business visa services if any */}
        {visaInfo.businessVisa.visaService ? (
          <>
            <p className="mb-2">
              Consultancy Available:{" "}
              {visaInfo.businessVisa.visaService.visaConsultancy ? "Yes" : "No"}
            </p>
            <p>Services Provided:</p>
            <ul className="list-disc list-inside mb-4">
              {visaInfo.businessVisa.visaService.servicesProvided.map(
                (service, index) => (
                  <li key={index}>{service}</li>
                )
              )}
            </ul>
          </>
        ) : (
          <p>No Visa Services Information Available</p>
        )}
      </div>

      {/* Processing Manual Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Processing Manual
        </h2>
      </div>
      <div className="mb-6 p-5">
        <p className="mb-4">
          {visaInfo.businessVisa.processingManual.introduction}
        </p>
        <h3 className="text-xl font-semibold mb-2">Steps to Follow:</h3>
        <ul className="list-decimal list-inside mb-4">
          {Object.entries(visaInfo.businessVisa.processingManual.steps).map(
            ([key, value], index) => (
              <li key={index} className="mb-1">
                <span className="font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                : {value}
              </li>
            )
          )}
        </ul>
        <p className="mb-2">
          {visaInfo.businessVisa.processingManual.conclusion}
        </p>
      </div>

      {/* Visa Availability Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Visa Availability
        </h2>
      </div>
      <div className="mb-6 p-5">
        <ul className="list-disc list-inside mb-4">
          {Object.entries(visaInfo.businessVisa.visaAvailability).map(
            ([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span>{" "}
                {value ? value : "Not Available"}
              </li>
            )
          )}
        </ul>
      </div>

      {/* File Submission Method Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          File Submission Method
        </h2>
      </div>
      <div className="mb-6 p-5">
        <ul className="list-disc list-inside mb-4">
          {Object.entries(visaInfo.businessVisa.fileSubmissionMethod).map(
            ([key, value]) => (
              <li key={key}>
                <span className="font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>{" "}
                {value ? "Yes" : "No"}
              </li>
            )
          )}
        </ul>
      </div>

      {/* High Commission Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          High Commission
        </h2>
      </div>
      <div className="mb-6 p-5">
        <p className="mb-1">
          <strong>Address:</strong>{" "}
          {visaInfo.businessVisa.highCommission.address}
        </p>
        <p className="mb-1">
          <strong>Phone:</strong>{" "}
          {visaInfo.businessVisa.highCommission.phone.join(", ")}
        </p>
        <p className="mb-1">
          <strong>Fax:</strong> {visaInfo.businessVisa.highCommission.fax}
        </p>
        <p className="mb-1">
          <strong>Email:</strong>{" "}
          {visaInfo.businessVisa.highCommission.email.join(", ")}
        </p>
        <p className="mb-1">
          <strong>Website:</strong>{" "}
          <a
            href={visaInfo.businessVisa.highCommission.web}
            target="_blank"
            rel="noopener noreferrer"
          >
            {visaInfo.businessVisa.highCommission.web}
          </a>
        </p>
        <p>
          <strong>Office Hours:</strong>{" "}
          {visaInfo.businessVisa.highCommission.officeHours}
        </p>
      </div>

      {/* VFS Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          VFS Center
        </h2>
      </div>
      <div className="mb-6 p-5">
        <p className="mb-1">
          <strong>Address:</strong> {visaInfo.businessVisa.vfs.address}
        </p>
        <p className="mb-1">
          <strong>Helpline:</strong> {visaInfo.businessVisa.vfs.helpline}
        </p>
        <p className="mb-1">
          <strong>Email:</strong> {visaInfo.businessVisa.vfs.email}
        </p>
        <p className="mb-1">
          <strong>Website:</strong>{" "}
          <a
            href={visaInfo.businessVisa.vfs.web}
            target="_blank"
            rel="noopener noreferrer"
          >
            {visaInfo.businessVisa.vfs.web}
          </a>
        </p>
        <p className="mb-1">
          <strong>Application Submit Timing:</strong>{" "}
          {visaInfo.businessVisa.vfs.applicationSubmitTiming}
        </p>
        <p>
          <strong>Additional Document Submission Timing:</strong>{" "}
          {visaInfo.businessVisa.vfs.additionalDocumentSubmissionTiming}
        </p>
      </div>

      {/* Additional Business Visa Information */}
      {visaInfo.businessVisa.additionalInformation && (
        <>
          <div className="bg-slate-300 p-2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Additional Information
            </h2>
          </div>
          <div className="mb-6 p-5">
            <p>{visaInfo.businessVisa.additionalInformation}</p>
          </div>
        </>
      )}

      {/* Total Section */}
      <div className="bg-slate-300 p-2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Total Information
        </h2>
      </div>
      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-gray-700">
          The total amount of information for business visa requirements,
          services, and processing steps provided for {visaInfo.country} is
          summarized below.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Visa Services:</strong> Detailed overview of visa
            consultancy and services provided.
          </li>
          <li>
            <strong>Processing Manual:</strong> Step-by-step guide including
            introduction and conclusion.
          </li>
          <li>
            <strong>Visa Availability:</strong> Information on the availability
            of different types of visas.
          </li>
          <li>
            <strong>File Submission Method:</strong> Details on how to submit
            files and additional documents.
          </li>
          <li>
            <strong>High Commission:</strong> Contact information and office
            hours.
          </li>
          <li>
            <strong>VFS Center:</strong> Address, helpline, email, and
            submission timings.
          </li>
        </ul>
      </div>
    </>
  );
};

export default BusinessVisaInfoComponent;
