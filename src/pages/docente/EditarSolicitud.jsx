import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const EditarSolicitud = () => {
  const [AsesoriaAprobada, setAsesoriaAprobada] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          `/consultation/accept/teacher/${localStorage.getItem("userId")}`
        );
        setAsesoriaAprobada(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const cancelarAsesoriaAprobada = async (id) => {
    try {
      await conexionAxios.put(`/consultation/cancel/${id}`);
      window.location.reload(); // Recargar la página actual
      // Realizar alguna acción adicional después de eliminar la asesoría, como actualizar la lista de asesorías
    } catch (error) {
      console.error("Error al eliminar la asesoria", error);
    }
  };

  return (
    <div>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Asesorias asignadas
          </h1>
        </div>
      </div>
      {AsesoriaAprobada && AsesoriaAprobada.length ? (
        <>
          <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto ">
            {AsesoriaAprobada.map((asesoriaItem) => (
              <div
                className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl "
                key={asesoriaItem.id}
              >
                <div className="grid grid-cols-2 gap-4 ">
                  <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase">
                      Estudiante:{" "}
                      <span className="font-normal normal-case">
                        {asesoriaItem.estudiante}
                      </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">
                      Asunto:{" "}
                      <span className="font-normal normal-case">
                        {asesoriaItem.description}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase">
                      Materia:{" "}
                      <span className="font-normal normal-case">
                        {asesoriaItem.materia}
                      </span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">
                      Horario:{" "}
                      <span className="font-normal normal-case">
                        {asesoriaItem.date} de {asesoriaItem.startTime} a{" "}
                        {asesoriaItem.endTime}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-3">
                  <button
                    onClick={() => cancelarAsesoriaAprobada(asesoriaItem.id)}
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg ml-4"
                  >
                   Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-xl mt-5 mb-10 text-center">
              No hay asesorias en este momento
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default EditarSolicitud;
