import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Hero from "../Home/HomeComponents/Hero/Hero";

const Requirements = () => {
  const { country } = useParams();
  const visaInfo = useSelector((state) => state.countris?.visaInfo || []);
  const visaTypeInfo = useSelector((state) => state.countris?.visa || []);

  // console.log("visaInfo:", visaInfo?.visaType);
  console.log("visaTypeInfo:", visaTypeInfo);
  console.log("country:", country);

  // Assuming you have parsed your JSON data into these structures:
  const studentVisaInfo = visaTypeInfo.find(
    (info) => info.country.toLowerCase() === country.toLowerCase()
  )?.studentVisa;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Menu</h2>
              <ul className="space-y-3">
                <li>
                  <button className="w-full text-left py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    Basic Information
                  </button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    Checklist
                  </button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    Visa Fee & Processing Time
                  </button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    Forms & Downloads
                  </button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-3 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Basic Information
              </h1>
              <p className="text-gray-700 mb-4">
                For <span className="font-semibold">{country}</span>, VISAThing
                provides the following information:
              </p>

              {studentVisaInfo ? (
                <>
                  {/* /* Visa Service Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      Visa Service
                    </h2>
                    <p className="mb-2">
                      Consultancy Available:{" "}
                      {studentVisaInfo.visaService.visaConsultancy
                        ? "Yes"
                        : "No"}
                    </p>
                    <p>Services Provided:</p>
                    <ul className="list-disc list-inside mb-4">
                      {studentVisaInfo.visaService.servicesProvided.map(
                        (service, index) => (
                          <li key={index}>{service}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Processing Manual Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      Processing Manual
                    </h2>
                    <p className="mb-4">
                      {studentVisaInfo.processingManual.introduction}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      Steps to Follow:
                    </h3>
                    <ul className="list-decimal list-inside mb-4">
                      {Object.entries(
                        studentVisaInfo.processingManual.steps
                      ).map(([key, value], index) => (
                        <li key={index} className="mb-1">
                          <span className="font-semibold capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          : {value}
                        </li>
                      ))}
                    </ul>
                    <p className="mb-2">
                      {studentVisaInfo.processingManual.conclusion}
                    </p>
                  </div>

                  {/* Visa Availability Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      Visa Availability
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                      {Object.entries(studentVisaInfo.visaAvailability).map(
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
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      File Submission Method
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                      {Object.entries(studentVisaInfo.fileSubmissionMethod).map(
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
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      High Commission
                    </h2>
                    <p className="mb-1">
                      <strong>Address:</strong>{" "}
                      {studentVisaInfo.highCommission.address}
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong>{" "}
                      {studentVisaInfo.highCommission.phone.join(", ")}
                    </p>
                    <p className="mb-1">
                      <strong>Fax:</strong> {studentVisaInfo.highCommission.fax}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong>{" "}
                      {studentVisaInfo.highCommission.email.join(", ")}
                    </p>
                    <p className="mb-1">
                      <strong>Website:</strong>{" "}
                      <a
                        href={studentVisaInfo.highCommission.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {studentVisaInfo.highCommission.web}
                      </a>
                    </p>
                    <p>
                      <strong>Office Hours:</strong>{" "}
                      {studentVisaInfo.highCommission.officeHours}
                    </p>
                  </div>

                  {/* VFS Section */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      VFS Center
                    </h2>
                    <p className="mb-1">
                      <strong>Address:</strong> {studentVisaInfo.vfs.address}
                    </p>
                    <p className="mb-1">
                      <strong>Helpline:</strong> {studentVisaInfo.vfs.helpline}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {studentVisaInfo.vfs.email}
                    </p>
                    <p className="mb-1">
                      <strong>Website:</strong>{" "}
                      <a
                        href={studentVisaInfo.vfs.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {studentVisaInfo.vfs.web}
                      </a>
                    </p>
                    <p className="mb-1">
                      <strong>Application Submit Timing:</strong>{" "}
                      {studentVisaInfo.vfs.applicationSubmitTiming}
                    </p>
                    <p>
                      <strong>Additional Document Submission Timing:</strong>{" "}
                      {studentVisaInfo.vfs.additionalDocumentSubmissionTiming}
                    </p>
                  </div>

                  {/* Additional Student Visa Information */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                      Additional Information
                    </h2>
                    <p>{studentVisaInfo.studentVisa.description}</p>
                    <p>
                      <a
                        href={studentVisaInfo.studentVisa.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Visit website for more details
                      </a>
                    </p>
                  </div>

                  {/* Total Section */}
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                      Total Information
                    </h2>
                    <p className="text-gray-700">
                      The total amount of information for student visa
                      requirements, services, and processing steps provided for{" "}
                      {country} is summarized below.
                    </p>
                    <ul className="list-disc list-inside mt-4">
                      <li>
                        <strong>Visa Services:</strong> Detailed overview of
                        visa consultancy and services provided.
                      </li>
                      <li>
                        <strong>Processing Manual:</strong> Step-by-step guide
                        including introduction and conclusion.
                      </li>
                      <li>
                        <strong>Visa Availability:</strong> Information on the
                        availability of different types of visas.
                      </li>
                      <li>
                        <strong>File Submission Method:</strong> Details on how
                        to submit files and additional documents.
                      </li>
                      <li>
                        <strong>High Commission:</strong> Contact information
                        and office hours.
                      </li>
                      <li>
                        <strong>VFS Center:</strong> Address, helpline, email,
                        and submission timings.
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <p className="text-gray-600">
                  No visa information available for the selected country.
                </p>
              )}

              {/* DaisyUI Collapse Section */}
              <div className="join join-vertical w-full mt-8">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
