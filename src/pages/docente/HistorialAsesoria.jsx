import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const HistorialAsesoria = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dataReporte, setDataReporte] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dataTotal, setDataTotal] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (startDate.trim() === "" || endDate.trim() === "") {
      setAlertaError({
        error: true,
        message: "Todos los campos son obligatorios",
      });
      setTimeout(() => setAlertaError({ error: false, message: "" }), 5000); // limpiar la alerta después de 5 segundos
    }

    try {
      const res = await conexionAxios.post(
        "/consultation/getAllByTeacherIdAndDateBetween/" +
          localStorage.getItem("userId"),
        {
          startDate,
          endDate,
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        // Reiniciar los valores de los campos
        setDataTotal(res.data); // Actualizar los datos totales
        setDataReporte(res.data); // Actualizar los datos filtrados inicialmente
      }
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  const search = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = dataTotal.filter((item) =>
      Object.values(item).some(
        (value) => value && value.toString().toLowerCase().includes(term)
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="px-10 py-5">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Historial de asesorias
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <label className="block text-gray-700 font-bold mb-2">Inicio</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Fin</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="w-52  mx-auto my-5">
          <div>
            <input
              type="submit"
              value="Consultar"
              className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </div>
        </div>
      </form>
      {dataReporte && dataReporte.length ? (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
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
                <table className="min-w-full divide-y divide-gray-400 ">
                  <thead className="text-xs  uppercase bg-blue-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Materia
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Asunto
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Estudiante
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Fecha y hora
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-400">
                    {(searchTerm !== "" ? filteredData : dataTotal).map(
                      (consultarItem) => (
                        <tr key={consultarItem.id}>
                          <td className="px-6 py-3">{consultarItem.materia}</td>
                          <td className="px-6 py-3">
                            {consultarItem.description}
                          </td>
                          <td className="px-6 py-3">
                            {consultarItem.estudiante}
                          </td>
                          <td className="px-6 py-3">
                            {consultarItem.date} de {consultarItem.startTime} a{" "}
                            {consultarItem.endTime}
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
      ) : (
        <div className="mb-4">
          <div className="px-10 py-5"></div>
          <p className="text-xl mt-5 mb-10 text-center">
            Seleccione una fecha de inicio y una fecha de fin para consultar las
            asesorías realizadas
          </p>
        </div>
      )}
    </div>
  );
};

export default HistorialAsesoria;
