import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";

const HeaderEstudiante = () => {
  return (
    <>
      <nav className="bg-gray-50 py-5 dark:bg-red-700 flex">
        <div className="max-w-screen-xl px-4 py-3 md:px-6">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <Link to="DatosEstudiante">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Datos personales
                </button>
              </Link>
            </li>

            <li>
              <Link to="AgendarAsesoria">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Agendar asesoria
                </button>
              </Link>
            </li>

            <li>
              <Link to="CancelarAsesoria">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Cancelar asesoria
                </button>
              </Link>
            </li>
            <li>
              <Link to="CalificarAsesoria">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-gray-900 dark:text-white md:p-0 md:w-auto   md:dark:hover:bg-transparent"
                >
                  Calificar asesoria
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

export default HeaderEstudiante;
