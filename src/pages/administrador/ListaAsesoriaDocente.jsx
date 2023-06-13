import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const ListaAsesoriaDocente = ({ docenteId }) => {
  
  const [asesoria, setAsesoria] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(`horario/user/${docenteId}`);
        console.log(response.data); // Verificar la respuesta de la API
        setAsesoria(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [docenteId]);

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
              Asesorías registradas
            </h1>
          </div>

          {asesoria.map((asesoriaItem) => (
            <div
              key={asesoriaItem.id}
              className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"
            >
              <p className="font-bold mb-3 text-gray-700 uppercase">
                Día:{" "}
                <span className="font-normal normal-case">
                  {asesoriaItem.day}
                </span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">
                Hora de inicio:{" "}
                <span className="font-normal normal-case">
                  {asesoriaItem.startTime}
                </span>
              </p>
              <p className="font-bold mb-3 text-gray-700 uppercase">
                Hora de fin:{" "}
                <span className="font-normal normal-case">
                  {asesoriaItem.endTime}
                </span>
              </p>

              <div className="flex justify-between ">
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
              Asesorías registradas
            </h1>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando una asesoría{" "}
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

export default ListaAsesoriaDocente;
