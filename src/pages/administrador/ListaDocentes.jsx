import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";
import { Link } from "react-router-dom";

const ListaDocentes = () => {
  const [docente, setDocente] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dataTotal, setDataTotal] = useState([]);

  const handleToggleEstado = async (docenteId, status) => {
    try {
      const res = await conexionAxios.put(`/user/enable/${docenteId}`, {
        status: !status,
      });

      if (res.status === 200) {
        setDocente((prevState) =>
          prevState.map((docenteItem) =>
            docenteItem.id === docenteId
              ? { ...docenteItem, isEnabled: !status }
              : docenteItem
          )
        );
      }
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get("/user/teachers/status");
        setDocente(
          response.data.map((docenteItem) => ({
            ...docenteItem,
            isEnabled: docenteItem.status,
          }))
        );
        setDataTotal(response.data); // Set the total data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const search = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = docente.filter((item) =>
      Object.values(item).some(
        (value) => value && value.toString().toLowerCase().includes(term)
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="px-10 py-5">
        <div className="">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Listado de docentes registrados
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto ">
        <div className="flex flex-col">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div>
              <div className="p-3">
                <label htmlFor="input-group-search" className="sr-only">
                  Buscar
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-search"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Buscar"
                    onChange={search}
                  />
                </div>
              </div>
            </div>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-400">
                <thead className="text-xs uppercase bg-blue-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Docente
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Correo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-400">
                  {(searchTerm !== "" ? filteredData : dataTotal).map(
                    (docenteItem) => (
                      <tr key={docenteItem.id}>
                        <td className="px-6 py-3">
                          {docenteItem.name} {docenteItem.lastname}
                        </td>
                        <td className="px-6 py-3">{docenteItem.email}</td>
                        <td className="px-6 py-3">
                          <button
                            className={`ml-2 text-white rounded-lg px-3 py-1 text-sm ${
                              docenteItem.status ? "bg-green-500" : "bg-red-500"
                            }`}
                            onClick={() =>
                              handleToggleEstado(
                                docenteItem.id,
                                docenteItem.status
                              )
                            }
                          >
                            {docenteItem.status
                              ? "Habilitado"
                              : "Deshabilitado"}
                          </button>
                        </td>
                        <td className="px-6 py-3">
                          <Link
                            to={`/administrador/listadocentes/editarhorarioasesoria/${docenteItem.id}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-blue-600"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaDocentes;
