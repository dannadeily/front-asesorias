import React from "react";

const CancelarAsesoria = () => {
  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Cancelar asesoria
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
       
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl   ">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Docente:{" "}
            <span className="font-normal normal-case">Carlos ivan Gomez</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Asunto: <span className="font-normal normal-case">semaforonos</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Materia:{" "}
            <span className="font-normal normal-case">sistemas operativos</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Modalidad: <span className="font-normal normal-case">virtual</span>
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
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelarAsesoria;
