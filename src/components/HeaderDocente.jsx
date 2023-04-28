import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";
const HeaderDocente = () => {
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
      <nav className="bg-gray-50 dark:bg-red-700 flex">
        <div className="max-w-screen-xl px-4 py-5 md:px-6">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <Link to="datosdocente">
                <li className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent">
                  <button type="button">Datos personales</button>
                </li>
              </Link>
            </li>
            <li>
              <Link to="horarioasesoria">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Horario asesoria
                </button>
              </Link>
            </li>

            <li>
              <button
                onClick={() => handleClick("menu2")}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
              >
                Solicitud de asesorias
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                </svg>
              </button>

              {openMenu === "menu2" && (
                <div className="absolute z-10 block font-normal bg-white divide-y divide-gray-100 rounded shadow  dark:divide-gray-600">
                  <ul
                    id="dropdownNavbar"
                    className="py-1 text-sm dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <Link to="solicitudasesoria">
                      <li className="block px-4 py-2  text-black hover:bg-red-300 dark:hover:text-black">
                        <button type="button">solicitudes para aprobar</button>
                      </li>
                    </Link>
                    <Link to="editarsolicitud">
                      <li className="block px-4 py-2  text-black hover:bg-red-300 dark:hover:text-black">
                        <button type="button">
                          cancelar solicitudes aprobadas
                        </button>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="historialasesoria">
                <button
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Historial de asesorias
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderDocente;
