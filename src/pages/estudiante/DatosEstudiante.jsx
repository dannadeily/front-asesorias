import React from "react";
import { Link } from "react-router-dom";

const DatosEstudiante = () => {
  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Datos personales
          </h1>
        </div>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form>
          
          <div >
            <label
              className="uppercase  block  font-bold"
              htmlFor="nombre"
              name="nombre"
              type="text"
            >
              Nombres
            </label>

            <label className="block text-gray-600 font-bold">
              Carlos ivan Gomez
            </label>
          </div>
          <div className="my-5">
            <label
              className="uppercase  block  font-bold"
              htmlFor="apellido"
              name="apellido"
              type="text"
            >
              Apellido
            </label>

            <label className="block text-gray-600 font-bold">
              Carlos ivan Gomez
            </label>
          </div>
          <div className="my-5">
            <label
              className="uppercase block  font-bold"
              htmlFor="codigo"
              name="codigo"
              type="codigo"
            >
              codigo
            </label>

            <label className="block text-gray-600 font-bold">
              Carlos ivan{" "}
            </label>
          </div>

          <div className="my-5">
            <label
              className="uppercase block  font-bold"
              htmlFor="email"
              name="email"
              type="email"
            >
              Email
            </label>

            <label className="block text-gray-600 font-bold">
              Gomez@ufps.edu.co
            </label>
          </div>

          <Link to="EditarDatosEstudiante">
            <button className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
              Editar datos
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DatosEstudiante;
