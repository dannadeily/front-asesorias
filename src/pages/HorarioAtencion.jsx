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

      <table className="table-auto border border-black mx-auto">
        <thead>
          <tr>
            <th className="border border-black  px-4 py-2">
              Nombre del Docente
            </th>
            <th className="border  border-black px-4 py-2">Horario</th>
          </tr>
        </thead>
        <tbody>
          {horario.map((horarioItem) => (
            <tr>
              <td className="border border-black px-4 py-2">
                {horarioItem.docente}
              </td>
              <td className="border border-black px-4 py-2">
                {/* {horarioItem.horario} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorarioAtencion;
