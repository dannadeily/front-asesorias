import React from "react";
import { Link } from "react-router-dom";

const RegistrarEstudiante = () => {
  return (
    <>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form>
          <h1 className=" font-bold text-2xl text-center text-gray-900 dark:text-red-500 ">
            REGISTRAR ESTUDIANTE
          </h1>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="nombre"
              name="nombre"
              type="text"
            >
              Nombres
            </label>

            <input
              id="nombre"
              type="text"
              placeholder="nombres"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="apellido"
              name="apellido"
              type="text"
            >
              Apellidos
            </label>
            <input
              id="apellido"
              type="text"
              placeholder="apellidos"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="codigo"
              name="codigo"
              type="text"
            >
              Codigo
            </label>

            <input
              id="codigo"
              type="number"
              placeholder="codigo"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

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
              placeholder="Password "
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
              Repetir contraseña
            </label>

            <input
              id="Repetirpassword"
              type="Repetirpassword"
              placeholder="Repetir password "
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

          <input
            type="submit"
            value="registrar"
            className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>

        <nav className="lg:flex lg:justify-between">
          <span>¿Ya tiene cuenta? </span>
          <Link className=" text-black uppercase text-sm" to="/">
            Iniciar sesion
          </Link>
        </nav>
      </div>
    </>
  );
};

export default RegistrarEstudiante;
