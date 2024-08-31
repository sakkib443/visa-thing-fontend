import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
