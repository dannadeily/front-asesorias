import React from "react";
import { Link } from "react-router-dom";

const ListaDocentes = () => {


  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };


  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Listado de docentes registrados
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
                        Docente
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Correo electronico
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Horario asesoria
                      </th>

                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Estado
                      </th>

                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Opciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        Carlos ivan gomez
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        carlosgomes@ufps.edu.co
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        lunes,martes y miercoles
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      <div className="ml-4">
                          <button className="bg-red-500 hover:bg-red-600 active:bg-red-500 focus:outline-none rounded-md px-4 py-2 text-white active:outline-none">
                            Inactivo
                          </button>
                        </div>
                      </td>

                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        <Link to="editardatosasesoria">
                          <button >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-blue-600"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        Carlos ivan gomez
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        carlosgomes@ufps.edu.co
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        lunes,martes y miercoles
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        <div className="ml-4">
                          <button className="bg-green-500 hover:bg-green-600 active:bg-red-500 focus:outline-none rounded-md px-4 py-2 text-white active:outline-none">
                            activo
                          </button>
                        </div>
                      </td>

                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        <Link to="editardatosasesoria">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-blue-600"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                          </button>
                        </Link>
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

export default ListaDocentes;
