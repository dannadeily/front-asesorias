import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const ReporteAsesoria = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [materias, setMaterias] = useState([]);
  const [dataReporte, setDataReporte] = useState([]);

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
        "/consultation/getAllByUserIdAndDateBetween/" +
          localStorage.getItem("userId"),
        {
          startDate,
          endDate,
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        // Reiniciar los valores de los campos
        setDataReporte(res.data);
      }
    } catch (error) {
      // Manejar el error de la solicitud
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/consultation/getConsultationCourseByUserId/" +
            localStorage.getItem("userId")
        );
        setMaterias(response.data);
        setCourseId(response.data[0].id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="px-10 py-5">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Reportes
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
      {console.log(dataReporte)}
      {dataReporte && dataReporte.length ? (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
          <div className="flex flex-col">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-400 ">
                  <thead className="text-xs  uppercase bg-blue-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Materia
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Docente
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Tema
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Fecha
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-400">
                    {dataReporte.map((consultarItem) => (
                      <tr key={consultarItem.id}>
                        <td className="px-6 py-3">{consultarItem.materia}</td>
                        <td className="px-6 py-3">{consultarItem.docente}</td>
                        <td className="px-6 py-3">
                          {consultarItem.description}
                        </td>
                        <td className="px-6 py-3">{consultarItem.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="px-10 py-5">
            <div className="mb-4">
              <h1 className="text-3xl font-bold  text-center">
                No hay reportes de asesorías
              </h1>
            </div>
          </div>
          <p className="text-xl mt-5 mb-10 text-center">
            Seleccione una fecha de inicio y una fecha de fin para consultar las
            asesorías
          </p>
        </div>
      )}
    </div>
  );
};

export default ReporteAsesoria;
