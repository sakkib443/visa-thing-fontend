import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Requirements from "../Pages/Requirements/Requirments";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import ResetPassword from "../Pages/Auth/ResetPassword/ResetPassword";
import SetNewPasswordForm from "../Pages/Auth/SetNewPasswordForm/SetNewPasswordForm";
import About from "../Pages/About/About/About";


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
]);

export default router;
