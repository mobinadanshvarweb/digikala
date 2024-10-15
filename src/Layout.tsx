import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col relative">
      <Header />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
      <div className="fixed p-3 bottom-8 right-12 flex bg-[#ef4056] h-12 rounded-full w-12 cursor-pointer"></div>
    </div>
  );
};

export default Layout;
