import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const ListaMateria = () => {
  const [materia, setMateria] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/course/teacher/" + localStorage.getItem("userId")
        );
        setMateria(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const eliminarMateria = async (id) => {
    try {
      await conexionAxios.delete(`/course/delete/${id}`);
      window.location.reload(); // Recargar la página actual
      // Realizar alguna acción adicional después de eliminar la asesoría, como actualizar la lista de asesorías
    } catch (error) {
      console.error("Error al eliminar la materia", error);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
      {materia && materia.length ? (
        <>
          <div className="mb-4">
            <h1 className="text-2xl font-bold border-b-4 border-red-500">
              Materia registrada
            </h1>
          </div>

          {materia.map((materiaItem) => (
            <div
              key={materiaItem.id}
              className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"
            >
              <p className="font-bold mb-3 text-gray-700 uppercase">
                Materia:{" "}
                <span className="font-normal normal-case">
                  {materiaItem.name}
                </span>
              </p>

              <div className="flex justify-between ">
                <button
                  type="button"
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                  onClick={() => eliminarMateria(materiaItem.id)}
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
              No hay materias registradas
            </h1>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando una materia{" "}
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

export default ListaMateria;
