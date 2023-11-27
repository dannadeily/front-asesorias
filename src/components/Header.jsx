import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className="relative flex w-full items-center justify-between py-1  bg-red-800  md:flex-wrap md:justify-start"
          data-te-navbar-ref
        >
          <Link to="/">
            <img
              src="/logo_ingsistemas_vertical_invertido.png"
              width="100"
              height="100"
              alt="logo fablab"
            />
          </Link>
          <Link to="/">
            <button className="flex items-center px-4 py-2 rounded ml-auto">
              <span className="text-white">Inicio</span>
            </button>
          </Link>
          <Link to="horarioasesoria">
            <button className="flex items-center px-4 py-2 rounded ml-auto">
              <span className="text-white">Horario de asesorias</span>
            </button>
          </Link>
          <div className="ml-auto">
            <Link to="/RegistrarEstudiante">
              <button className="flex items-center px-4 py-2 rounded ml-auto">
                <span className="text-white">Registrar estudiante</span>
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="z-50 mt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
