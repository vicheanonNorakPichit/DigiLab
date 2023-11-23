import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="font-poppins bg-light text-dark">
      <Outlet />
    </div>
  );
};
export default AdminLayout;
