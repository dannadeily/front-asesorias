import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const Reportes = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [teacher, setTeacher] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [consultar, setConsultar] = useState([]);

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

  useEffect(() => {
    const fetchData = async (teacherId) => {
      try {
        const response = await conexionAxios.get(
          "/consultation/teacher/" + teacherId
        );
        setConsultar(response.data);
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
      setHorarios(responseHorario.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" px-10  ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Reportes
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-4">
          <label className="block text-gray-700 font-bold mb-2">Inicio</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Fin</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="md:w-1/2 lg:w-3/5  mx-auto my-5">
        <div>
          <label
            className="uppercase text-gray-600 block  font-bold"
            htmlFor="docente"
            name="docente"
            type="text"
          >
            Seleccione el docente:
          </label>

          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-white"
              onChange={(e) => handleChange(e.target.value)}
              name="docente"
              label="docente"
            >
              {teacher.map((teachers) => (
                <option key={teachers.id} value={teachers.id}>
                  {teachers.name} {teachers.lastname}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {consultar && consultar.length ? (
        <>
          {consultar.map((consultarItem) => (
            <div>
              <div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500"
                              >
                                Docente
                              </th>
                              <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500"
                              >
                                tema
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                Carlos ivan gomez
                              </td>
                              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                carlosgomes@ufps.edu.co
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="mb-4">
            <div className="px-10 py-5">
              <div className="mb-4">
                <h1 className="text-3xl font-bold border-b-4 border-red-500">
                  No hay reportes de asesorias
                </h1>
              </div>
            </div>
            <p className="text-xl mt-5 mb-10 text-center">
              Seleccione un docente para consultar las asesorias
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Reportes;
