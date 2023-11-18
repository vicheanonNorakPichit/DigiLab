import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layout/GuestLayout";
import AdminLayout from "./Layout/AdminLayout";
import Authentication from "./Page/Authentication";
import Homepage from "./Page/Homepage";
import AdminLogin from "./Page/Admin/AdminLogin";
import SignUp from "./Component/Authentication/SignUp";
import Profile from "./Component/Authentication/Profile";

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
        element: <AdminLogin />,
      },
    ],
  },
]);

export default router;
