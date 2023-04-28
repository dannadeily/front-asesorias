import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";

const HeaderAdministrador = () => {
  const [openMenu, setOpenMenu] = useState("");
  const handleClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (!openMenu) return;
      if (event.target.closest("#dropdownNavbar")) {
        setOpenMenu(false);
      }
    },
    [openMenu, setOpenMenu]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <>
      <nav className="bg-gray-50 py-5 dark:bg-red-700 fixed top-0 w-full z-50 ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <Link to="/administrador/">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Horario de asesorias
                </button>
              </Link>
            </li>
            <li>
              <Link to="registrardocente">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Registrar docente
                </button>
              </Link>
            </li>

            <li>
              <Link to="listadocentes">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Listado de docentes
                </button>
              </Link>
            </li>

            <li>
              <Link to="reportes">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Reportes
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="z-40 pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default HeaderAdministrador;
