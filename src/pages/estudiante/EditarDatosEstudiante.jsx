import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";
import AlertaError from "../../components/AlertaError";
import AlertaExitoso from "../../components/AlertaExitoso";

const EditarDatosEstudiante = () => {
    const [estudiante, setEstudiante] = useState({
        name: "",
        lastname: "",
        code: "",
    });
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
            estudiante.code.trim() === "" ||
            estudiante.name.trim() === "" ||
            estudiante.lastname.trim() === ""
        ) {
            setAlertaError({
                error: true,
                message: "Todos los campos son obligatorios",
            });
            setTimeout(
                () => setAlertaError({ error: false, message: "" }),
                5000
            ); // limpiar la alerta después de 5 segundos
        }

        try {
            const res = await conexionAxios.put(
                "/user/edit/" + localStorage.getItem("userId"),
                estudiante
            );

            if (res.status === 200) {
                setAlertaExitoso({ error: true, message: res.data.message });
                setTimeout(
                    () => setAlertaExitoso({ error: false, message: "" }),
                    10000
                );
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
                <form onSubmit={handleSubmit}>
                    {alertaError.error && !alertaExitoso.error && (
                        <AlertaError message={alertaError.message} />
                    )}
                    {alertaExitoso.error && (
                        <AlertaExitoso message={alertaExitoso.message} />
                    )}
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
                    <button
                        type="submit"
                        className="bg-red-500 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditarDatosEstudiante;
