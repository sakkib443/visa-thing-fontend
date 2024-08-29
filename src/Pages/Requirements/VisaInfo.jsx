/* eslint-disable react/prop-types */
import BusinessVisaInfo from "./BusinessVisa/BusinessVisaInfo";
import Faq from "./Faq";
import StudentVisaInfo from "./StudentVisa/StudentVisaInfo";

const VisaInfo = ({ visaTypeInfo }) => {
  console.log("visaTypeInfo", visaTypeInfo);
  const { visaType, country, businessVisa, studentVisa } = visaTypeInfo[0];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="bg-slate-200 p-4 rounded-t-lg">
        <h1 className="text-3xl font-bold text-gray-800">Basic Information</h1>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">
          For <span className="font-semibold">{country}</span>, VISAThing
          provides the following information:
        </p>

        {visaType === "Business Visa" && businessVisa && (
          <BusinessVisaInfo businessVisa={businessVisa} />
        )}
        {visaType === "Student Visa" && studentVisa && (
          <StudentVisaInfo studentVisa={studentVisa} />
        )}
        <Faq country={country} />
        {/* Additional visa type components can be added here */}
      </div>
    </div>
  );
};

export default VisaInfo;
