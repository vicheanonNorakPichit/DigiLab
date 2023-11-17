import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const GuestLayout = () => {
  return (
    <div className="font-koulen bg-light text-dark">
    <div className="font-poppins space-y-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default GuestLayout;
