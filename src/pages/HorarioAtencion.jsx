import React, { useState, useEffect } from "react";
import conexionAxios from "../axios/Axios";

const HorarioAtencion = () => {
  const [horario, setHorario] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/horario/getAllHorariosAndTeachers"
        );
        setHorario(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Horario de atención a estudiantes
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-5 ">
        <h2 className="text-xl font-medium text-center mt-4">
          Aqui podra encontrar el horario de asesoria de cada profesor de la
          carrera ingenieria de sistemas
        </h2>
      </div>

      <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
        <div className="flex flex-col">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-400 ">
                <thead className="text-xs  uppercase bg-blue-400">
                  <tr >
                    <th
                      scope="col"
                      className="px-6 py-3"
                    >
                      Nombre del Docente
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3"
                    >
                      Horario
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-400">
                  {horario.map((horarioItem) => (
                    <tr key={horarioItem.name} >
                      <td className="px-6 py-3">
                        {horarioItem.name}
                      </td>
                      <td className="px-6 py-3">
                        {horarioItem.horarios.map((horarios) => (
                          <div key={horarios.id}>
                            <p className="text-sm text-gray-900">
                              {" "}
                              {horarios.day}
                              {" de "}
                              {horarios.startTime}
                              {" a "}
                              {horarios.endTime}{" "}
                            </p>
                          </div>
                        ))}
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
  );
};

export default HorarioAtencion;
