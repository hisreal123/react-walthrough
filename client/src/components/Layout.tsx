import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";

const Layout: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <Sidebar toggle={toggle} />

      <div className="fixed bottom-1 right-2">
        <Link
          to="/blog"
          className="font-medium cursor-pointer hover:font-bold transition-all ease-in-out duration-300 delay-100"
        >
          Blog
        </Link>
        <HambergerMenu
          className=" text-secondary size-8 cursor-pointer block z-40"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>

      <div
        className=" dashboard-layout bg-primary"
        onClick={() => setToggle(false)}
      >
        <div className="px-5 py-4 lg:w-[60%] mx-auto ">
          <div className="wap " onClick={() => setToggle(true)}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
