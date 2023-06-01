import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";
import AlertaError from "../../components/AlertaError";
import AlertaExitoso from "../../components/AlertaExitoso";

const AgendarAsesoria = () => {
  const [teacher, setTeacher] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [horarioId, setHorarioId] = useState("");
  const [description, setDescripcion] = useState("");
  const [emails, setEmails] = useState("");
  const [alertaError, setAlertaError] = useState({ error: false, message: "" });
  const [alertaExitoso, setAlertaExitoso] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (description.trim() === "") {
      setAlertaError({
        error: true,
        message: "Todos los campos son obligatorios",
      });
      setTimeout(() => setAlertaError({ error: false, message: "" }), 5000); // limpiar la alerta después de 5 segundos
    }

    try {
      const res = await conexionAxios.post("/consultation/save", {
        userId: localStorage.getItem("userId"),
        courseId,
        teacherId,
        horarioId,
        description,
        emails,
      });

      if (res.status === 201) {
        setAlertaExitoso({ error: true, message: res.data.message });
        setTimeout(
          () => setAlertaExitoso({ error: false, message: "" }),
          10000
        );
        // Reiniciar los valores de los campos
        setCourseId("");
        setTeacherId("");
        setHorarioId("");
        setDescripcion("");
        setEmails("");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get("/user/teachers");
        setTeacher(response.data);
        handleChange(response.data[0].id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (teacherId) => {
    setTeacherId(teacherId);

    try {
      const response = await conexionAxios.get("/course/teacher/" + teacherId);
      const responseHorario = await conexionAxios.get(
        "/horario/user/" + teacherId
      );
      setMaterias(response.data);
      setCourseId(response.data[0].id);
      setHorarios(responseHorario.data);
      setHorarioId(responseHorario.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" px-10 pt-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Agendar asesoria
          </h1>
        </div>
      </div>
      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20 my-10 bg-white shadow rounded-lg p-10">
        {alertaError.error && !alertaExitoso.error && (
          <AlertaError message={alertaError.message} />
        )}
        {alertaExitoso.error && (
          <AlertaExitoso message={alertaExitoso.message} />
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="docente"
              name="docente"
              type="text"
            >
              Docente
            </label>

            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => handleChange(e.target.value)}
                value={teacherId}
                name="docente"
                label="docente"
              >
                {teacher.map((teachers) => (
                  <option key={teachers.id} value={teachers.id}>
                    {teachers.name} {teachers.lastname}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="docente"
              name="docente"
              type="text"
            >
              Materia
            </label>

            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => setCourseId(e.target.value)}
                value={courseId}
                name="materia"
                label="materia"
              >
                {materias.map((materia) => (
                  <option key={materia.id} value={materia.id}>
                    {materia.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="asunto"
              name="asunto"
              type="text"
            >
              asunto
            </label>

            <textarea
              id="asunto"
              type="text"
              name="asunto"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={description}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="asunto"
              name="asunto"
              type="text"
            >
              Ingrese los correos de los participantes
            </label>
            <span>para agregar mas correo realice un salto de linea</span>

            <textarea
              id="asunto"
              type="text"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />
          </div>

          <div>
            <label
              className="uppercase text-gray-600 block  font-bold"
              htmlFor="Horario"
              name="Horario"
              type="text"
            >
              Horario
            </label>

            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => setHorarioId(e.target.value)}
                value={horarioId}
                name="horario"
                label="horario"
              >
                {horarios.map((horario) => (
                  <option key={horario.id} value={horario.id}>
                    {horario.day} de {horario.startTime} a {horario.endTime}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                </svg>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Agendar Asesoria"
            className="bg-red-500 my-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default AgendarAsesoria;
