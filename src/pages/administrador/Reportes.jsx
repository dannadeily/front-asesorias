import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const ReportesPDF = ({ data }) => (
  <Document>
    <Page>
      <View>
        <Text>Reporte de Consultas</Text>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Docente</th>
              <th className="border px-4 py-2">Materia</th>
              <th className="border px-4 py-2">Asunto</th>
              <th className="border px-4 py-2">Estudiante</th>
              <th className="border px-4 py-2">Fecha y hora</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">
                  {/*item.teacher.name} {item.teacher.lastname*/}
                </td>
                <td className="border px-4 py-2">
                  {/*item.teacher.name} {item.teacher.lastname*/}
                </td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">
                  {/*item.teacher.name} {item.teacher.lastname*/}
                </td>
                <td className="border px-4 py-2">
                  {/*item.teacher.name} {item.teacher.lastname*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </View>
    </Page>
  </Document>
);

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

    fetchData(teacherId);
  }, [teacherId]);

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
      <div className="px-10">
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

      <div className="md:w-1/2 lg:w-3/5 mx-auto my-5">
        <div>
          <label
            className="uppercase text-gray-600 block font-bold"
            htmlFor="docente"
            name="docente"
            type="text"
          >
            Seleccione el docente:
          </label>

          <div className="relative">
            <select
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-white"
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
      </div>

      {consultar && consultar.length ? (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-auto my-5">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Docente
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Materia
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Asunto
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Estudiante
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Fecha y hora
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {consultar.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {/* {item.teacher.name} {item.teacher.lastname} */}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {/* {item.materia} */}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.description}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {/* {item.student.name} {item.student.lastname} */}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {/* {item.date} */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <PDFDownloadLink
                document={<ReportesPDF data={consultar} />}
                fileName="reporte.pdf"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Descargar Reporte
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Reportes;
