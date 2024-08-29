/* eslint-disable react/prop-types */

const StudentVFS = ({ vfs }) => {
  const {
    address,
    helpline,
    email,
    web,
    applicationSubmitTiming,
    additionalDocumentSubmissionTiming,
  } = vfs;

  return (
    <div>
      <h3 className="text-2xl bg-slate-300 p-2 font-semibold mb-3">
        VFS Center
      </h3>
      <p>
        <span className="font-bold">Address:</span> {address}
      </p>
      <p>
        <span className="font-bold">Helpline:</span> {helpline}
      </p>
      <p>
        <span className="font-bold">Email:</span> {email}
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
        <span className="font-bold">Application Submit Timing:</span>{" "}
        {applicationSubmitTiming}
      </p>
      <p>
        <span className="font-bold">
          Additional Document Submission Timing:
        </span>{" "}
        {additionalDocumentSubmissionTiming}
      </p>
    </div>
  );
};

export default StudentVFS;
