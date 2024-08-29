/* eslint-disable react/prop-types */

import StudentFileSubmissionMethod from "./StudentFileSubmissionMethod";
import StudentHighCommission from "./StudentHighCommission";
import StudentVFS from "./StudentVFS";
import StudentVisaAvailability from "./StudentVisaAvailability";
import StudentVisaInformation from "./StudentVisaInformation";
import StudentVisaProcessingManual from "./StudentVisaProcessingManual";
import StudentVisaService from "./StudentVisaService";

const StudentVisaInfo = ({ studentVisa }) => {
  console.log(studentVisa);
  const {
    visaService,
    processingManual,
    visaAvailability,
    fileSubmissionMethod,
    highCommission,
    vfs,
    studentVisa: studentVisaDetails,
  } = studentVisa;

  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-2xl font-bold bg-slate-300 p-2 text-gray-800">
        Student Visa Information
      </h2>

      {/* Visa Service Section */}
      <div>
        <StudentVisaService visaService={visaService} />
      </div>

      {/* Processing Manual Section */}
      <div>
        <StudentVisaProcessingManual processingManual={processingManual} />
      </div>

      {/* Visa Availability Section */}
      <div>
        <StudentVisaAvailability visaAvailability={visaAvailability} />
      </div>

      {/* File Submission Method Section */}
      <div>
        <StudentFileSubmissionMethod
          fileSubmissionMethod={fileSubmissionMethod}
        />
      </div>

      {/* High Commission Section */}
      <div>
        <StudentHighCommission highCommission={highCommission} />
      </div>

      {/* VFS Center Section */}
      <div>
        <StudentVFS vfs={vfs} />
      </div>

      {/* Additional Student Visa Information Section */}
      <div>
        <StudentVisaInformation studentVisa={studentVisaDetails} />
      </div>
    </div>
  );
};

export default StudentVisaInfo;
