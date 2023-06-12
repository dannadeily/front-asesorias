import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const HabilitarMateria = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedMateria, setSelectedMateria] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [materiasDeshabilitadas, setMateriasDeshabilitadas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          `course/teacher/disable/${localStorage.getItem("userId")}`
        );
        setMateriasDeshabilitadas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectMateria = (materia) => {
    setSelectedMateria(materia);
  };

  const searchMateria = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const habilitarMateria = async (id) => {
    try {
      await conexionAxios.put(`/course/enable/${id}`);
      window.location.reload(); // Recargar la página actual
      // Realizar alguna acción adicional después de habilitar la materia
    } catch (error) {
      console.error("Error al habilitar la materia", error);
    }
  };

  return (
    <div className="py-5">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Materias deshabilitadas
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {dropdownVisible && (
        <div className="bg-white rounded-lg shadow w-60">
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Buscar
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Buscar"
                onChange={searchMateria}
              />
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {materiasDeshabilitadas
              .filter((materia) =>
                materia.name.toLowerCase().includes(searchTerm)
              )
              .map((materia) => (
                <li
                onClick={() => selectMateria(materia)}
                  key={materia.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  <span
                    
                    className={
                      selectedMateria && selectedMateria.id === materia.id
                        ? "font-medium text-blue-600"
                        : "font-normal"
                    }
                  >
                    {materia.name}
                  </span>
                </li>
              ))}
          </ul>
          {selectedMateria && (
            <div className="p-3 text-right">
              <button
                className="text-red-500 hover:text-red-600 font-medium text-sm"
                type="button"
                onClick={() => habilitarMateria(selectedMateria.id)}
              >
                Habilitar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HabilitarMateria;
