import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const EditarDatosEstudiante = () => {
  const [estudiante, setEstudiante] = useState({
    name: "",
    lastname: "",
    code: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/user/perfil/" + localStorage.getItem("userId")
        );
        const estudianteData = response.data; // Obtener el estudiante de la respuesta
        setEstudiante(estudianteData); // Asignar el estudiante al estado
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEstudiante((prevDatosEstudiante) => ({
      ...prevDatosEstudiante,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="px-10 py-5">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Datos personales
          </h1>
        </div>
      </div>
      <div className="xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form>
          <div className="">
            <label
              className="uppercase text-gray-600 block font-bold"
              htmlFor="nombre"
            >
              Nombres
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="nombres"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="nombre"
              value={estudiante.name}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block font-bold"
              htmlFor="apellido"
            >
              Apellidos
            </label>
            <input
              id="apellido"
              type="text"
              placeholder="apellidos"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="apellido"
              value={estudiante.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block font-bold"
              htmlFor="codigo"
            >
              Código
            </label>
            <input
              id="codigo"
              type="number"
              placeholder="código"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="codigo"
              value={estudiante.code}
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="email"
              value={estudiante.email}
              onChange={handleChange}
            />
          </div>
          <button className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarDatosEstudiante;
