import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Requirements from "../Pages/Requirements/Requirments";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import ResetPassword from "../Pages/Auth/ResetPassword/ResetPassword";
import SetNewPasswordForm from "../Pages/Auth/SetNewPasswordForm/SetNewPasswordForm";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard/AdminDashboard";
import ApprovedApplications from "../Pages/AdminDashboard/ApprovedApplications/ApprovedApplications";
import UserApprovedApplications from "../Pages/UserDashboard/UserApprovedApplications/UserApprovedApplications";
import UserDashboard from "../Pages/UserDashboard/UserDashboard/UserDashboard";
import PendingApplications from "../Pages/AdminDashboard/PendingApplications/PendingApplications";
import DeclinedApplications from "../Pages/AdminDashboard/DeclinedApplications/DeclinedApplications";
import UserPendingApplications from "../Pages/UserDashboard/UserPendingApplications/UserPendingApplications";
import UserDeclinedApplications from "../Pages/UserDashboard/UserDeclinedApplications/UserDeclinedApplications";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile/AdminProfile";
import UserProfile from "../Pages/UserDashboard/UserProfile/UserProfile";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import ProtectedRoute from "../Pages/Shared/ProtectedRoute/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: `requirements/student-visa`,
        element: <Requirements />,
      },
      {
        path: `requirements/:country/business-visa`,
        element: <Requirements />,
      },
      {
        path: `requirements/:country/tourist-visa`,
        element: <Requirements />,
      },
      {
        path: `requirements/:country/family-visa`,
        element: <Requirements />,
      },
    ],
  },
  {
    path: "dashboard/admin",
    element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>,
    children: [
      {
        path: "admin-profile",
        element: <AdminProfile />
      },
      {
        path: "admin-pending-applications",
        element: <PendingApplications />
      },
      {
        path: "admin-approved-applications",
        element: <ApprovedApplications />
      },
      {
        path: "admin-declined-applications",
        element: <DeclinedApplications />
      },
    ]
  },
  {
    path: "dashboard/user",
    element: <UserDashboard />,
    children: [
      {
        path: "user-profile",
        element: <UserProfile />
      },
      {
        path: "user-pending-applications",
        element: <UserPendingApplications />
      },
      {
        path: "user-approved-applications",
        element: <UserApprovedApplications />
      },
      {
        path: "user-declined-applications",
        element: <UserDeclinedApplications />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/send-reset-password-link",
    element: <ResetPassword />,
  },
  {
    path: "/set-new-password-form",
    element: <SetNewPasswordForm />,
  },
  {
    path: "/apply-now",
    element: <ApplicationForm />,
  }, {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
