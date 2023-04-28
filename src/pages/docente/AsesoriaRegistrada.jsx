import React, { useState } from "react";

const AsesoriaRegistrada = () => {
  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Asesorias registradas
          </h1>
        </div>
      </div>
      <div>
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl   ">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Materia:{" "}
            <span className="font-normal normal-case">sistemas operativos</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Horario:{" "}
            <span className="font-normal normal-case">
              lunes 12 de abril a las 4:30 P.M
            </span>
          </p>

          <div className="flex justify-between mt-10">
            <button
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg "
            >
              Editar
            </button>
            <button
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsesoriaRegistrada;
