import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layout/GuestLayout";
import AdminLayout from "./Layout/AdminLayout";

import Authentication from "./Page/Authentication";
import Homepage from "./Page/Homepage";
import SignUp from "./Component/Authentication/SignUp";
import Profile from "./Component/Authentication/Profile";

import ExperimentList from "./Page/User/ExperimentList";
import AboutUs from "./Page/User/AboutUs";
import Dashboard from "./Page/Admin/Dashboard";

const BasicRoutes = {
  children: [
    {
      path: "",
      element: <Homepage />,
    },
    {
      path: "Authentication",
      element: <Authentication />,
    },
    {
      path: "ExperimentList",
      element: <ExperimentList />,
    },
    {
      path: "AboutUs",
      element: <AboutUs />,
    },
  ],
};

const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      ...BasicRoutes.children,
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "Admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
