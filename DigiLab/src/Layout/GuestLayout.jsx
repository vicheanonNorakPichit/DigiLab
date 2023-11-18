import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const GuestLayout = () => {
  return (
    <div className="font-poppins flex flex-col bg-light">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default GuestLayout;
