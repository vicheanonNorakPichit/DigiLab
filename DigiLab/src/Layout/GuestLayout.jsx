import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";

const GuestLayout = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default GuestLayout;
