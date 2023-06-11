import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const CancelarAsesoria = () => {
  const [asesoria, setAsesoria] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/consultation/actives/" + localStorage.getItem("userId")
        );
        setAsesoria(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const cancelarAsesoria = async (id) => {
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
            Cancelar asesoria
          </h1>
        </div>
      </div>
      {asesoria && asesoria.length ? (
        <>
          <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left  border ">
                <thead class="text-xs  uppercase border  bg-gray-100 ">
                  <tr className="border-b border-gray-400">
                    <th scope="col" class="px-6 py-3">
                      Docente
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Asunto
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Materia
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Horario
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {asesoria.map((asesoriaItem) => (
                    <tr
                      class=" border-b border-gray-400 bg-white "
                      key={asesoriaItem.id}
                    >
                      <td class="px-6 py-4">{asesoriaItem.docente}</td>
                      <td class="px-6 py-4">{asesoriaItem.description}</td>
                      <td class="px-6 py-4">{asesoriaItem.materia}</td>
                      <td class="px-6 py-4">
                        {asesoriaItem.date} de {asesoriaItem.startTime} a{" "}
                        {asesoriaItem.endTime}
                      </td>
                      <td class="px-6 py-4">
                        <button
                          type="button"
                          onClick={() => cancelarAsesoria(asesoriaItem.id)}
                          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
                        >
                          Cancelar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-xl mt-5 mb-10 text-center">
              No hay asesorias registradas
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CancelarAsesoria;
