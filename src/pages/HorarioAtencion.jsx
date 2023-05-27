import React from "react";

const HorarioAtencion = () => {
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
            <th className="border border-black  px-4 py-2">Nombre del Docente</th>
            <th className="border  border-black px-4 py-2">Horario</th>
            <th className="border  border-black px-4 py-2">Lugar (Virtual)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">Juan Pérez</td>
            <td className="border border-black px-4 py-2">Lunes a Viernes 9:00 a 11:00</td>
            <td className="border  border-black px-4 py-2">Zoom</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">María García</td>
            <td className="border border-black px-4 py-2">Martes y Jueves 14:00 a 16:00</td>
            <td className="border border-black px-4 py-2">Google Meet</td>
          </tr>
          <tr>
            <td className="border border-black  px-4 py-2">Pedro González</td>
            <td className="border border-black px-4 py-2">Lunes y Miércoles 18:00 a 20:00</td>
            <td className="border border-black px-4 py-2">Microsoft Teams</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorarioAtencion;
