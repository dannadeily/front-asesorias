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
      await conexionAxios.put(`/course/delete/${id}`);
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
              className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                  Materia:{" "}
                  <span className="font-normal normal-case">
                    {materiaItem.name}
                  </span>
                </p>

                <abbr title="Deshabilitar">
                  <button
                    type="button"
                    className="py-2 px-1 text-white font-bold uppercase rounded-lg"
                    onClick={() => eliminarMateria(materiaItem.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-red-600"
                    >
                      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path
                        fillRule="evenodd"
                        d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </abbr>
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
