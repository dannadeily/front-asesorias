import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";
import { useNavigate } from "react-router-dom";

const AsesoriaRegistrada = () => {
  const [asesoria, setAsesoria] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "horario/user/" + localStorage.getItem("userId")
        );
        setAsesoria(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const eliminarAsesoria = async (id) => {
    try {
      await conexionAxios.put(`horario/delete/${id}`);
      window.location.reload(); // Recargar la página actual
      // Realizar alguna acción adicional después de eliminar la asesoría, como actualizar la lista de asesorías
    } catch (error) {
      console.error("Error al eliminar la asesoría", error);
    }
  };

  return (
    
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      {asesoria && asesoria.length ? (
        <>
          <div className="mb-4">
            <h1 className="text-2xl font-bold border-b-4 border-red-500">
              Registrar horario de asesoria
            </h1>
          </div>

          {asesoria.map((asesoriaItem) => (
            <div
              key={asesoriaItem.id}
              className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"
            >
              <p className="font-bold mb-3 text-gray-700 uppercase">
                dia:{" "}
                <span className="font-normal normal-case">
                  {asesoriaItem.day}
                </span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">
                hora Inicio:{" "}
                <span className="font-normal normal-case">
                  {asesoriaItem.startTime}
                </span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">
                Hora fin:{" "}
                <span className="font-normal normal-case">
                  {asesoriaItem.endTime}
                </span>
              </p>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                  onClick={() => eliminarAsesoria(asesoriaItem.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="mb-4">
            <h1 className="text-2xl font-bold border-b-4 border-red-500">
              No hay horario de asesoria registrada
            </h1>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando una asesoria{" "}
              <span className="text-indigo-600 font-bold text-xl">
                y aparecerán en este lugar
              </span>
            </p>
          </div>
        </>
      )}
    </div>
    
  );
};

export default AsesoriaRegistrada;
