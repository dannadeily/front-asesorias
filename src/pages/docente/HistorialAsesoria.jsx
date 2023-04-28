import React from "react";

const HistorialAsesoria = () => {
  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Historial de asesorias
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Materia
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Asunto
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Estudiante
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Modalidad
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Fecha y hora
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        sistemas operativos
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        semaforos
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        adrian rodriguez
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        virtual
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        7-04-2023 3:30 P.M
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorialAsesoria;
