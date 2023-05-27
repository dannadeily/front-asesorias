import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const ReporteAsesoria = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [teacher, setTeacher] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [materias, setMaterias] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [consultar, setConsultar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/consultation/student/" + localStorage.getItem("userId")
        );
        setTeacher(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="px-10">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Reportes
          </h1>
        </div>
      </div>

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

      <div className="md:w-1/2 lg:w-3/5 mx-auto my-5">
        <div>
          <label
            className="uppercase text-gray-600 block  font-bold"
            htmlFor="docente"
            name="docente"
            type="text"
          >
            Materia
          </label>

          <div className="relative">
            <select
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setCourseId(e.target.value)}
              value={courseId}
              name="materia"
              label="materia"
            >
              {materias.map((materia) => (
                <option key={materia.id} value={materia.id}>
                  {materia.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                </svg>
              </div>
          </div>
        </div>
      </div>

      {consultar && consultar.length ? (
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
                          Tema
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {consultar.map((consultarItem) => (
                        <tr
                          key={consultarItem.id}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            {consultarItem.name}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {consultarItem.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="px-10 py-5">
            <div className="mb-4">
              <h1 className="text-3xl font-bold border-b-4 border-red-500">
                No hay reportes de asesorías 
              </h1>
            </div>
          </div>
          <p className="text-xl mt-5 mb-10 text-center">
            Seleccione una materia  para consultar las asesorías
          </p>
        </div>
      )}
    </div>
  );
};

export default ReporteAsesoria;
