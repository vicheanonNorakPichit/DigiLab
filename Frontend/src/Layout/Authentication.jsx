import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className=" bg-light text-dark">
      
      <Outlet />
    </div>
  );
};
export default AdminLayout;
