import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layout/GuestLayout";
import Authentication from "./Page/Authentication";
import Homepage from "./Page/Homepage";
import SignUp from "./Component/Authentication/SignUp";
import Profile from "./Component/Authentication/Profile";

import ExperimentList from "./Page/ExperimentList";
import AboutUs from "./Page/AboutUs";
import Experiment from "./Page/Experiment";

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
      path: "Experiment/:experiment_id",
      element: <Experiment />,
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
]);

export default router;
