import React from "react";
import Faq from "./Faq";
import VisaCategory from "./VisaCategory";
import PassportTypes from "./PassportTypes";
import { useParams } from "react-router-dom";

const CountryInfo = () => {
  const algeriaData = {
    id: 3,
    name: "Algeria",
    slug: "algeria",
    flag: "afghanistan(4).20220509110005.webp",
    basic_info: `
          <p><strong>For Algeria VISAThing provides</strong></p>
          <p><strong>&radic; Logistics support:</strong> Visa logistic service submits a visa application on behalf of the applicant.</p>
          <p><strong>&radic; Visa consultancy:</strong> VISAThing provides document preparation, assessment, preparing supporting documents, etc.</p>
          <p>There is no Embassy or Consulate of Algeria in Bangladesh. The nearest Embassy of Algeria is in New Delhi, India.</p>
          <p>If Bangladeshi citizens want Algeria visas from Bangladesh then they need to apply at the Embassy of Algeria, New Delhi, India to get an Algeria visa from Bangladesh.</p>
          <p>But, if you have the documents mentioned in the checklist, VISAThing will provide you the Processing / Logistics support/ Visa consultancy to have your visa stamped (Logistics charge applicable).</p>
          <p><strong>Embassy of Algeria, India</strong></p>
          <p>2/2, Shanti Niketan,</p>
          <p>110021- New Delhi,</p>
          <p>India.</p>
          <p><strong>Phone:</strong> +91 11 2411 7585, +91 11 2411 7586, +91 11 2411 7588, +91 11 2411 7589</p>
          <p><strong>Fax:</strong> +91 11 2411 7590</p>
          <p><strong>Email:</strong> contact@algerianembassy.co.in, (General), visa@algerianembassy.co.in (Visa Information)</p>
          <p><strong>Web:</strong> <a href="http://www.algerianembassy.co.in/">www.algerianembassy.co.in</a></p>
          <p><strong>Office Hours:</strong> Monday to Friday (9 AM to 4 PM),</p>
          <p><strong>Visa Submission:</strong> Monday to Friday (9 AM to 12 PM).</p>
          <p>Get Algerian visa from Bangladesh with visa processing services. Reach out to VISAThing Our Hotline: 01967777788 or Email us: cr@visathing.com Get Algerian visa requirements from Bangladesh along with visa processing services. Reach out to VISAThing @ 01967777788 or cr@visathing.com</p>
        `,
    process_time: `
          <p>The total approximate time is 14-17 working days. *Visa processing time entirely depends upon the time taken by the visa office while processing each visa application to its merit and may take longer than the tentative processing time.</p>
        `,
    passport_types: [
      { name: "Ordinary passport", id: 1 },
      { name: "Official/Service passport", id: 2 },
      { name: "Diplomatic passport", id: 3 },
    ],
    v_category: {
      name: "Family Visit Visa",
      id: 3,
      slug: "family-visa",
      short_details:
        "The family visit visa is a type of visa that allows citizens to visit and stay with their families in foreign countries.",
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div>
        <img
          className="w-48 h-auto mb-4"
          src={`https://example.com/flags/${algeriaData.flag}`}
          alt={`${algeriaData.name} Flag`}
        />
        <h1 className="text-3xl font-bold mb-6">{algeriaData.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: algeriaData.basic_info }} />
        <div dangerouslySetInnerHTML={{ __html: algeriaData.process_time }} />

        {/* Render new components */}
        <PassportTypes passportTypes={algeriaData.passport_types} />
        <VisaCategory vCategory={algeriaData?.v_category} />
        <Faq country={algeriaData.name} />
      </div>
    </div>
  );
};

export default CountryInfo;
