import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layout/GuestLayout";
import AdminLayout from "./Layout/AdminLayout";
import Authentication from "./Page/Authentication";
import Homepage from "./Page/Homepage";
import AdminLogin from "./Page/Admin/AdminLogin";
import ExperimentList from "./Page/User/ExperimentList";
import AboutUs from "./Page/User/AboutUs";
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
    children: [...BasicRoutes.children],
  },
  {
    path: "Admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminLogin />,
      },
    ],
  },
]);

export default router;
