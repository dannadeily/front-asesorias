import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertaError from "../../components/AlertaError";
import AlertaExitoso from "../../components/AlertaExitoso";
import conexionAxios from "../../axios/Axios";

const RegistrarDocente = () => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [identification, setIdentification] = useState("");
    const [alertaError, setAlertaError] = useState({
        error: false,
        message: "",
    });
    const [alertaExitoso, setAlertaExitoso] = useState({
        error: false,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            email.trim() === "" ||
            password.trim() === "" ||
            name.trim() === "" ||
            lastname.trim() === "" ||
            code.trim() === "" ||
            identification.trim() === ""
        ) {
            setAlertaError({
                error: true,
                message: "Todos los campos son obligatorios",
            });
            setTimeout(
                () => setAlertaError({ error: false, message: "" }),
                7000
            ); // limpiar la alerta después de 5 segundos
        }

        // Verificar que la contraseña tenga al menos 8 caracteres
        else if (password.length < 8) {
            setAlertaError({
                error: true,
                message: "La contraseña debe tener al menos 8 caracteres",
            });
            setTimeout(
                () => setAlertaError({ error: false, message: "" }),
                7000
            ); // limpiar la alerta después de 5 segundos
        }

        try {
            const res = await conexionAxios.post("/user/registerTeacher", {
                code,
                name,
                lastname,
                email,
                password,
                identification,
            });

            if (res.status === 201) {
                setAlertaExitoso({ error: true, message: res.data.message });
                setTimeout(
                    () => setAlertaExitoso({ error: false, message: "" }),
                    10000
                );
                // Reiniciar los valores de los campos
                setCode("");
                setName("");
                setLastname("");
                setEmail("");
                setPassword("");
                setIdentification("");
            }
        } catch (error) {
            // Manejar el error de la solicitud
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setAlertaError({
                    error: true,
                    message: error.response.data.message,
                });
            }
            setTimeout(
                () => setAlertaError({ error: false, message: "" }),
                10000
            );
        }
    };

    return (
        <div>
            <div className=" px-10 py-5 ">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold border-b-4 border-red-500">
                        Registro de docentes
                    </h1>
                </div>
            </div>
            <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20  bg-white shadow rounded-lg p-10">
                <form onSubmit={handleSubmit}>
                    <h1 className=" font-bold text-2xl text-center text-gray-900 dark:text-red-600 ">
                        Datos del docente
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
                            htmlFor="codigo"
                            name="codigo"
                            type="text"
                        >
                            Codigo
                        </label>

                        <input
                            id="codigo"
                            type="number"
                            placeholder="codigo"
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block  font-bold"
                            htmlFor="nombre"
                            name="nombre"
                            type="text"
                        >
                            Nombres
                        </label>

                        <input
                            id="nombre"
                            type="text"
                            placeholder="nombres"
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block  font-bold"
                            htmlFor="apellido"
                            name="apellido"
                            type="text"
                        >
                            Apellidos
                        </label>
                        <input
                            id="apellido"
                            type="text"
                            placeholder="apellidos"
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block  font-bold"
                            htmlFor="identification"
                            name="identification"
                            type="text"
                        >
                            Identificación
                        </label>
                        <input
                            id="identification"
                            type="number"
                            placeholder="identificacion"
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            value={identification}
                            onChange={(e) => setIdentification(e.target.value)}
                        />
                    </div>

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
                            onChange={(e) => setEmail(e.target.value)}
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
                            placeholder="Password "
                            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        value="registrar"
                        className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                    />
                </form>
            </div>
        </div>
    );
};

export default RegistrarDocente;
