import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertaError from "../components/AlertaError";
import AlertaExitoso from "../components/AlertaExitoso";
import conexionAxios from "../axios/Axios";

const IniciarSesion = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertaError, setAlertaError] = useState({ error: false, message: "" });
  const [alertaExitoso, setAlertaExitoso] = useState({
    error: false,
    message: "",
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setAlertaError({
        error: true,
        message: "Todos los campos son obligatorios",
      });
      setTimeout(() => setAlertaError({ error: false, message: "" }), 5000); // limpiar la alerta después de 5 segundos
    }

    try {
      const res = await conexionAxios.post("/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        const token = res.data.token; // Obtener el token de la respuesta del servidor
        localStorage.setItem("token", res.data.token); // Guardar el token en el almacenamiento local
        localStorage.setItem("userId", res.data.userId);

        handleLogin(token);
        if (res.data.role === 1) {
          navigate("/administrador");
        } else if (res.data.role === 2) {
          navigate("/estudiante");
        } else if (res.data.role === 3) {
          navigate("/docente");
        }
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
    <>
      <div className=" px-10 py-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Portal de agendamiento de asesorias
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold text-center">
          Bienvenido <span className="text-red-600">comunidad UFPS</span>
        </h1>
        <h2 className="text-xl font-medium text-center mt-4">
          Sistema de información para la solicitud de asesorias usando la cuenta
          institucional (@ufps.edu.co)
        </h2>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        <form onSubmit={handleSubmit}>
          <h1 className=" font-bold text-2xl text-center text-gray-900 dark:text-red-500 ">
            INICIAR SESIÓN{" "}
          </h1>
          {alertaError.error && !alertaExitoso.error && (
            <AlertaError message={alertaError.message} />
          )}
          {alertaExitoso.error && (
            <AlertaExitoso message={alertaExitoso.message} />
          )}
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="email"
              name="email"
              type="email"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="password"
              name="password"
              type="password"
            >
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              placeholder="Contraseña "
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            className="block  my-3 text-slate-500 uppercase text-sm"
            to="/RecuperarPassword"
          >
            Olvide mi contraseña
          </Link>
        </nav>

        
      </div>
    </>
  );
};

export default IniciarSesion;
