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

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left  border ">
            <thead class="text-xs  uppercase border  bg-blue-300 ">
              <tr className="border-b border-gray-400">
                <th scope="col" class="px-6 py-3">
                  Docente
                </th>
                <th scope="col" class="px-6 py-3">
                  Asunto
                </th>
                <th scope="col" class="px-6 py-3">
                  Materia
                </th>
                <th scope="col" class="px-6 py-3">
                  Horario
                </th>
                <th scope="col" class="px-6 py-3">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class=" border-b border-gray-400 bg-white ">
                <td scope="row" class="px-6 py-4 ">
                  Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
              <tr class=" border-b border-gray-400 bg-white ">
                <td scope="row" class="px-6 py-4 ">
                  Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
              <tr class=" border-b border-gray-400 bg-white ">
                <td scope="row" class="px-6 py-4 ">
                  Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
              <tr class=" border-b border-gray-400  bg-white">
                <td scope="row" class="px-6 py-4 ">
                  Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CancelarAsesoria;
