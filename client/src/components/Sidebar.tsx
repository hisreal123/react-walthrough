// import { HambergerMenu } from "iconsax-react";
import { Link, useLocation } from "react-router-dom";
import { SideProps } from "../..";
import { SIDEBARLINKS } from "../utils/SideLinks";

const Sidebar: React.FC<SideProps> = ({ toggle }) => {
  const location = useLocation();

  return (
    <>
      <nav
        className={`${
          toggle ? "w-[200px] lg:w-[250px]" : "w-0 hidden"
        } min-h-screen bg-secondary fixed top-0 bottom-0 col-span-4 `}
      >
        <ul className="flex pt-3 flex-col items-center justify-center relative text-white">
          {SIDEBARLINKS.map(({ link, title }) => (
            <li
              key={link}
              className={`text  w-full flex items-center before:content-[''] before:absolute before:right-0
              before:h-[21px] before:w-[3px]  before:rounded-tl-md before:rounded-bl-md before:transition-all before:duration-300 mb-[8px] text-[#B7B0B0] dark:text-white ${
                location.pathname === link
                  ? "before:opacity-100"
                  : "before:opacity-0"
              } hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100`}
            >
              <Link
                to={link}
                className="flex items-start justify-start pl-4 h-10 w-full relative text-white"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
