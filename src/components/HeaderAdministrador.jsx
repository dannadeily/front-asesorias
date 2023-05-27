import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const HeaderAdministrador = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (openMenu && !event.target.closest("#dropdownNavbar")) {
        setOpenMenu(true);
      }
    },
    [openMenu]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="bg-gray-50 dark:bg-red-700">
        <div className="max-w-screen-xl px-4 py-3 md:px-6">
          <button
            className="text-gray-900 dark:text-white md:hidden"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ul
                className={`${
                  openMenu ? "block" : "hidden"
                } md:block md:flex flex-col md:flex-row md:space-x-8 text-sm font-medium`}
              >
                <li>
                  <Link
                    to="/administrador/"
                    className="block py-2 px-3 rounded-md hover:bg-transparent hover:text-blue-700 text-gray-900 dark:text-white"
                  >
                    Horario de asesorias
                  </Link>
                </li>
                <li>
                  <Link
                    to="registrardocente"
                    className="block py-2 px-3 rounded-md hover:bg-transparent hover:text-blue-700 text-gray-900 dark:text-white"
                  >
                    Registrar docente
                  </Link>
                </li>
                <li>
                  <Link
                    to="horarioasesoria"
                    className="block py-2 px-3 rounded-md hover:bg-transparent hover:text-blue-700 text-gray-900 dark:text-white"
                  >
                    Horario asesoria
                  </Link>
                </li>
                <li>
                  <Link
                    to="listadocentes"
                    className="block py-2 px-3 rounded-md hover:bg-transparent hover:text-blue-700 text-gray-900 dark:text-white"
                  >
                    Listado de docentes
                  </Link>
                </li>
                <li>
                  <Link
                    to="reportes"
                    className="block py-2 px-3 rounded-md hover:bg-transparent hover:text-blue-700 text-gray-900 dark:text-white"
                  >
                    Reportes
                  </Link>
                </li>
              </ul>
            </div>
           
            <button
              className="flex items-center px-4 py-2 rounded ml-auto"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white mr-2 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              <span className="text-white">Salir</span>
            </button>
            
            
          </div>
        </div>
      </nav>

      <main className="z-40">
        <Outlet />
      </main>
    </>
  );
};

export default HeaderAdministrador;
