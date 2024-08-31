import { Link } from "react-router-dom";

const Appointment = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Get VISAThing! Free Appointment</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
                    Make your appointment with VISAThing through the appointment portal. Click on appointment, choose your visa type, and pick an available slot. Attend the VISAThing office on time with the required documents. Stay updated for smooth visa processing with VISAThing.
                </p>
                <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
                    You can start your visa application journey by contacting VISAThing. There is only one branch of VISAThing in Dhaka, Bangladesh. You can also apply to the VISAThing online portal to reduce your visa processing time.
                </p>
                <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
                    VISAThing Bangladesh&apos;s opening hour is 9:30 AM to 6:30 PM.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                    <div className="md:w-1/2 p-4">
                        <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Make an Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;