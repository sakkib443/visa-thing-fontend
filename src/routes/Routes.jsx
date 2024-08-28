import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login";
import Requirements from "../Pages/Requirements/Requirments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: `requirements/:country/student-visa`,
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
    path: "/login",
    element: <Login />,
  },
]);

export default router;
