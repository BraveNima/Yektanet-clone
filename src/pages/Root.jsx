//import react-router-dom
import { Outlet } from "react-router-dom";
//import components
import { Navbar, Footer } from "../components";

const Root = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
