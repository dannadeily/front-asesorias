import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const HeaderEstudiante = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  // Add mobile menu state
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a navigation link is clicked
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token del almacenamiento local
    navigate("/"); // Redirigir a la página de inicio de sesión
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-red-700 ">
          <div className="flex items-center justify-between">
            <h1 className="px-2 text-white font-bold text-1xl">ESTUDIANTE</h1>
            <button
              className="flex items-center px-4 py-2 rounded ml-auto"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white mr-2 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              <span className="text-white">Salir</span>
            </button>
          </div>
          <div className="max-w-screen-xl px-4 py-3 md:px-6">
            <button
              className=" text-white md:hidden"
              onClick={handleMobileMenuToggle}
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
              <ul
                className={`${
                  openMenu || isMobileMenuOpen ? "block" : "hidden"
                }  md:flex flex-col md:flex-row md:space-x-8 text-sm font-medium`}
              >
                <li>
                  <Link to="/estudiante" onClick={handleMobileMenuClose}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded   md:border-0 md:hover:text-blue-700   text-white md:p-0 md:w-auto   md:hover:bg-transparent"
                    >
                      Horario de asesoria
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="DatosEstudiante" onClick={handleMobileMenuClose}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded   md:border-0 md:hover:text-blue-700   text-white md:p-0 md:w-auto   md:hover:bg-transparent"
                    >
                      Datos personales
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="AgendarAsesoria" onClick={handleMobileMenuClose}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded   md:border-0 md:hover:text-blue-700   text-white md:p-0 md:w-auto   md:hover:bg-transparent"
                    >
                      Agendar asesoria
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="CancelarAsesoria" onClick={handleMobileMenuClose}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded   md:border-0 md:hover:text-blue-700   text-white md:p-0 md:w-auto   md:hover:bg-transparent"
                    >
                      Cancelar asesoria
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="CalificarAsesoria" onClick={handleMobileMenuClose}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded   md:border-0 md:hover:text-blue-700   text-white md:p-0 md:w-auto   md:hover:bg-transparent"
                    >
                      Calificar asesoria
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="reporteAsesoria" onClick={handleMobileMenuClose}>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded   md:border-0 md:hover:text-blue-700   text-white md:p-0 md:w-auto   md:hover:bg-transparent"
                    >
                      Reportes
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="z-40 mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default HeaderEstudiante;
