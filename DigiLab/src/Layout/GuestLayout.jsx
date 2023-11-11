import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const GuestLayout = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
      
    </div>
  );
};
export default GuestLayout;
