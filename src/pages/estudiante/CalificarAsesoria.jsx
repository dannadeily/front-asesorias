import React, { useState, useEffect } from "react";
import conexionAxios from "../../axios/Axios";

const CalificarAsesoria = () => {
  const [grade, setGrade] = useState(0);
  const [calificar, setCalificar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await conexionAxios.get(
          "/consultation/calificate/" + localStorage.getItem("userId")
        );
        setCalificar(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleRatingChange = (event) => {
    setGrade(parseInt(event.target.value));
  };

  const handleSubmit = async (event, id) => {
    event.preventDefault();

    try {
      // Send the rating to the API along with the consultation ID
      window.location.reload(); // Recargar la página actual
      await conexionAxios.post("/consultation/rate", {
        id,
        grade,
      });

      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  return (
    <div>
      {calificar && calificar.length ? (
        <>
          <div className="px-10 py-5">
            <div className="mb-4">
              <h1 className="text-3xl font-bold border-b-4 border-red-500">
                Calificar asesoría
              </h1>
            </div>
          </div>

          {calificar.map((calificarItem) => (
            <div
              className="md:w-1/2 lg:w-3/5 py-5 mx-auto"
              key={calificarItem.id}
            >
              <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                  Docente:{" "}
                  <span className="font-normal normal-case">
                    
                  </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                  Asunto:{" "}
                  <span className="font-normal normal-case">
                    {calificarItem.description}
                  </span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                  Materia:{" "}
                  <span className="font-normal normal-case">
                    
                  </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                  Horario:{" "}
                  <span className="font-normal normal-case">
                    
                  </span>
                </p>
                <p className="font-normal normal-case py-1">
                  Por favor califique de 1 a 5 estrellas la asesoría realizada:
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <label key={index} className="text-3xl">
                      <input
                        type="radio"
                        name="rating"
                        value={index}
                        checked={grade === index}
                        onChange={handleRatingChange}
                        className="sr-only"
                      />
                      <span
                        className={`${
                          index <= grade ? "text-yellow-400" : "text-black"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    type="submit"
                    onClick={(event) => handleSubmit(event, calificarItem.id)}
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                  >
                    Enviar calificación
                  </button>
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
                  Calificar asesoría
                </h1>
              </div>
            </div>
            <p className="text-xl mt-5 mb-10 text-center">
              No hay asesorías por calificar.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CalificarAsesoria;
