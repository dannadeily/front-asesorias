import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav
          className="relative flex w-full items-center justify-between py-6 shadow-lg  dark:bg-red-800  md:flex-wrap md:justify-start"
          data-te-navbar-ref
        ></nav>
      </header>
      <main  className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
