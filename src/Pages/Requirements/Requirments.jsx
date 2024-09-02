import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Hero from "../Home/HomeComponents/Hero/Hero";
import VisaInfo from "./VisaInfo";
import CountryInfo from "./CountryInfo";
import { useCountryDetailsQuery } from "../../redux/features/cetagory/Country/countryApi";

const Requirements = () => {
  const { country, visaSlug } = useParams();
  // const visaInfo = useSelector((state) => state.countris?.visaInfo || []);
  // const visaTypeInfo = useSelector((state) => state.countris?.visa || []);

  // console.log("visaInfo:", visaInfo?.visaType);
  // console.log("visaTypeInfo:", visaTypeInfo);
  console.log("country:", { country, visaSlug });
  const { data, isLoading } = useCountryDetailsQuery(country);
  console.log("data", data);
  if (isLoading) {
    return <>hello world</>;
  }
  // Assuming you have parsed your JSON data into these structures:
  // const Visas = visaTypeInfo.find(
  //   (info) => info.country.toLowerCase() === country.toLowerCase()
  // )?.businessVisa;
  // // console.log("visa", Visas);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="col-span-1 ">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-0">
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
          <div className="col-span-3">
            {/* {visaTypeInfo && <VisaInfo visaTypeInfo={visaTypeInfo} />} */}
            <CountryInfo />
          </div>
          {/* Main Content Area */}
        </div>
      </div>
    </div>
  );
};

export default Requirements;
