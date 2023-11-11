import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layout/GuestLayout";
import AdminLayout from "./Layout/AdminLayout";
import Authentication from "./Page/Authentication";
import Homepage from "./Page/Homepage";
import AdminLogin from "./Page/Admin/AdminLogin";

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
