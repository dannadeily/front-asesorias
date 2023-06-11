import React, { useState } from "react";
import conexionAxios from "../../axios/Axios";
import AlertaError from "../../components/AlertaError";
import AlertaExitoso from "../../components/AlertaExitoso";
import HabilitarMateria from "./HabilitarMateria";

const RegistrarMateria = () => {
  const [name, setName] = useState("");
  const [alertaError, setAlertaError] = useState({ error: false, message: "" });
  const [alertaExitoso, setAlertaExitoso] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await conexionAxios.post("/course/save", {
        name,
        userId: localStorage.getItem("userId"),
      });

      if (res.status === 201) {
        setAlertaExitoso({ error: true, message: res.data.message });
        setTimeout(
          () => setAlertaExitoso({ error: false, message: "" }),
          10000
        );

        window.location.reload(); // Recargar la página actual
      }
    } catch (error) {
      // Manejar el error de la solicitud
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setAlertaError({ error: true, message: error.response.data.message });
      }
      setTimeout(() => setAlertaError({ error: false, message: "" }), 10000);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
      <div className="mb-4">
        <h1 className="text-2xl font-bold border-b-4 border-red-500">
          Registrar materia
        </h1>
      </div>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {alertaError.error && !alertaExitoso.error && (
          <AlertaError message={alertaError.message} />
        )}
        {alertaExitoso.error && (
          <AlertaExitoso message={alertaExitoso.message} />
        )}
        <div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="materia"
              name="materia"
              type="text"
            >
              Materia:
            </label>

            <input
              id="materia"
              type="text"
              placeholder="materia"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-10">
            <input
              value="Registrar"
              type="submit"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            />
          </div>
        </div>
      </form>
      
      <HabilitarMateria />
    </div>
  );
};

export default RegistrarMateria;
