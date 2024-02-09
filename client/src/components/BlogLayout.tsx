import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BlogLayoutProps {
  children: ReactNode;
}
const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="fixed bottom-1 right-2">
        <Link
          to="/"
          className="font-medium cursor-pointer hover:font-bold transition-all ease-in-out duration-300 delay-100"
        >
          Documentation
        </Link>
      </div>
      <div className="grid grid-cols-5 pt-3 bg-primary min-h-screen">
        <div className=""></div>
        {/* main_Content */}
        <div className="col-span-4 px-2">{children}</div>
      </div>
    </>
  );
};

export default BlogLayout;
