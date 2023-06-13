import React, { useState } from "react";
import { Radio, TimePicker } from "antd";
import moment from "moment";
import conexionAxios from "../../axios/Axios";
import AlertaError from "../../components/AlertaError";
import AlertaExitoso from "../../components/AlertaExitoso";
import { useNavigate, redirect } from "react-router-dom";

const RegistrarAsesoriaDocente = ({ docenteId }) => {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [alertaError, setAlertaError] = useState({ error: false, message: "" });
  const [alertaExitoso, setAlertaExitoso] = useState({
    error: false,
    message: "",
  });

  const handleDiaChange = (e) => {
    const selectedDia = e.target.value;
    setDay(selectedDia);
    setStartTime("");
    setEndTime("");
  };

  const handleInicioChange = (time) => {
    setStartTime(time.format("HH:mm"));
  };

  const handleFinChange = (time) => {
    setEndTime(time.format("HH:mm"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await conexionAxios.post("/horario/save", {
        day,
        startTime,
        endTime,
        userId: docenteId,
      });

      if (res.status === 201) {
        setAlertaExitoso({ error: true, message: res.data.message });
        setTimeout(
          () => setAlertaExitoso({ error: false, message: "" }),
          10000
        );
        setDay("");
        setStartTime("");
        setEndTime("");
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
          Registrar horario de asesoria
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
          <h2 className="font-bold mb-3 text-gray-700 uppercase">
            Selecciona el día y las horas de tu asesoría:
          </h2>

          <div>
            <Radio.Group onChange={handleDiaChange} value={day}>
              <Radio value="Lunes">Lunes</Radio>
              <Radio value="Martes">Martes</Radio>
              <Radio value="Miercoles">Miércoles</Radio>
              <Radio value="Jueves">Jueves</Radio>
              <Radio value="Viernes">Viernes</Radio>
            </Radio.Group>
            <br />

            {day && (
              <div>
                <h3>Asesoría para el día {day}</h3>
                <p>Hora de inicio:</p>
                <TimePicker
                  format="HH:mm"
                  minuteStep={15}
                  use12Hours={false}
                  allowClear={false}
                  inputReadOnly={true}
                  placeholder="Selecciona hora"
                  popupClassName="time-picker-popup"
                  showNow={false}
                  showSecond={false}
                  value={startTime ? moment(startTime, "HH:mm") : null}
                  onChange={handleInicioChange}
                />
                <p>Hora de fin:</p>
                <TimePicker
                  format="HH:mm"
                  minuteStep={15}
                  use12Hours={false}
                  allowClear={false}
                  inputReadOnly={true}
                  placeholder="Selecciona hora"
                  popupClassName="time-picker-popup"
                  showNow={false}
                  showSecond={false}
                  value={endTime ? moment(endTime, "HH:mm") : null}
                  onChange={handleFinChange}
                />
              </div>
            )}
            <br />
            <h4>Asesoría programada:</h4>
            {day && startTime && endTime ? (
              <p>
                {day}: {startTime} - {endTime}
              </p>
            ) : (
              <p>No has seleccionado un día o las horas de la asesoría.</p>
            )}
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
    </div>
  );
};

export default RegistrarAsesoriaDocente;
