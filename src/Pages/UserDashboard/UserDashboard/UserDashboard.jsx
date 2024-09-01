import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";

const UserDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-blue-800 text-white w-64 p-4 lg:relative lg:w-64 ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
                <ul className="space-y-4">
                    <li>
                        <Link to="user-pending-applications" className="block p-2 hover:bg-blue-600 rounded">Pending Applications</Link>
                    </li>
                    <li>
                        <Link to="user-approved-applications" className="block p-2 hover:bg-blue-600 rounded">Approved Applications</Link>
                    </li>
                    <li>
                        <Link to="user-declined-applications" className="block p-2 hover:bg-blue-600 rounded">Declined Applications</Link>
                    </li>
                    <li>
                       
                        <Link to="/" className="p-2 hover:bg-blue-600 rounded flex gap-2 items-center"> <FaHome /> Go to Home</Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {/* Mobile Navbar */}
                <div className="lg:hidden p-4 bg-blue-800 text-white flex justify-between">
                    <h1 className="text-xl">User Dashboard</h1>
                    <FaBars className="cursor-pointer" onClick={toggleSidebar} />
                </div>

                {/* Content Area */}
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
