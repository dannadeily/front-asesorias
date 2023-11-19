import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import conexionAxios from "../../axios/Axios";

const DatosDocente = () => {
  const [docente, setDocente] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/user/perfil/" + localStorage.getItem("userId")
        );
        const docenteData = response.data; // Obtener el estudiante de la respuesta
        setDocente(docenteData); // Asignar el estudiante al estado
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Datos personales
          </h1>
        </div>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <div key={docente.userId}>
          <label
            className="uppercase  block  font-bold"
            htmlFor="nombre"
            name="nombre"
            type="text"
          >
            Nombres
          </label>

          <label className="block text-gray-600 font-bold">
            {docente.name}
          </label>
        </div>
        <div className="my-5">
          <label
            className="uppercase block  font-bold"
            htmlFor="apellido"
            name="apellido"
            type="text"
          >
            Apellidos
          </label>

          <label className="block text-gray-600 font-bold">
            {docente.lastname}
          </label>
        </div>

        <div className="my-5">
          <label
            className="uppercase block  font-bold"
            htmlFor="email"
            name="email"
            type="email"
          >
            Email
          </label>

          <label className="block text-gray-600 font-bold">
            {docente.email}
          </label>
        </div>
        <Link
          to="/docente/cambiarpassword"
          className=" mb-5 w-full py-2  text-blue-600 text-center hover:cursor-pointer hover:text-blue-900 transition-colors"
        >
          Cambiar contraseña
        </Link>

        <div>
          <Link to="datosdocente/EditarDatosDocente">
            <button className="py-2 px-10 mt-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
              Editar datos
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DatosDocente;
