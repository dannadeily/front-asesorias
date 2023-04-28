import React from "react";
import { Link } from "react-router-dom";

const IniciarSesion = () => {
  return (
    <>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Portal de agendamiento de asesorias
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold text-center">
          Bienvenido <span className="text-red-600">comunidad UFPS</span>
        </h1>
        <h2 className="text-xl font-medium text-center mt-4">Sistema de información para la solicitud de asesorias usando la cuenta institucional (@ufps.edu.co)</h2>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form>
          <h1 className=" font-bold text-2xl text-center text-gray-900 dark:text-red-500 ">
            INICIAR SESIÓN{" "}
          </h1>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="email"
              name="email"
              type="email"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="password"
              name="password"
              type="password"
            >
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              placeholder="Contraseña "
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            className="block  my-3 text-slate-500 uppercase text-sm"
            to="/RecuperarPassword"
          >
            Olvide mi contraseña
          </Link>
        </nav>

        <nav className="lg:flex lg:justify-between">
          <span>¿No tiene cuenta? </span>
          <Link
            className=" text-black uppercase text-sm"
            to="/RegistrarEstudiante"
          >
            Registrarse
          </Link>
        </nav>
      </div>
    </>
  );
};

export default IniciarSesion;
