import React from "react";

const AgendarAsesoria = () => {
  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
          Agendar asesoria
          </h1>
        </div>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form>
        
          <div >
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="docente"
              name="docente"
              type="text"
            >
              Docente
            </label>

            <select
              id="docente"
              type="text"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            >
              <option>profesor 1</option>
              <option> profesor 2</option>
              <option>profesor 3</option>
            </select>
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="asunto"
              name="asunto"
              type="text"
            >
              asunto
            </label>

            <textarea
              id="asunto"
              type="text"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="materia"
              name="materia"
              type="text"
            >
              materia
            </label>

            <input
              id="materia"
              type="number"
              placeholder="materia"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="horario"
              name="horario"
              type="horario"
            >
              Horario
            </label>

            <input
              id="horario"
              type="date"
              placeholder="horario"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

          <input
            type="submit"
            value="Agendar Asesoria"
            className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default AgendarAsesoria;
