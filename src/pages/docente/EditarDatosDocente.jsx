import React from "react";

const EditarDatosDocente = () => {
  return (
    <>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Editar datos personales
          </h1>
        </div>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form>
          <div >
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

          <button className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default EditarDatosDocente;
