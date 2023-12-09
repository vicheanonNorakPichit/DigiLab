import { Outlet } from "react-router";
import Sidebar from "../Component/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="font-poppins bg-light text-dark">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default AdminLayout;
