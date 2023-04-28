import React, { useState } from "react";
import { Checkbox, TimePicker } from "antd";
import moment from "moment";
import { Outlet } from "react-router-dom";

const EditarHorarioAsesoria = () => {
  const [dias, setDias] = useState([]);
  const [asesorias, setAsesorias] = useState([]);

  const handleDiasChange = (checkedValues) => {
    setDias(checkedValues);
    checkedValues.forEach((value) => {
      if (!asesorias.some((asesoria) => asesoria.dia === value)) {
        setAsesorias([...asesorias, { dia: value, inicio: "", fin: "" }]);
      }
    });
  };

  const handleInicioChange = (index, time) => {
    const newAsesorias = [...asesorias];
    newAsesorias[index].inicio = time.format("HH:mm");
    setAsesorias(newAsesorias);
  };

  const handleFinChange = (index, time) => {
    const newAsesorias = [...asesorias];
    newAsesorias[index].fin = time.format("HH:mm");
    setAsesorias(newAsesorias);
  };

  return (
    <div>
      <div className=" px-10 pt-5 ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold border-b-4 border-red-500">
            Actualizar horario de asesoria del docente
          </h1>
        </div>
      </div>

      <div className=" xl:mx-96 lg:mx-60 md:mx-40 sm:mx-20  bg-white shadow rounded-lg p-10">
        <div className="md:w-1/2 lg:w-2/5 mx-5">
          <div className="mx-5  bg-white shadow-md px-5  rounded-xl   ">
            <h2 className="font-bold mb-3 text-gray-700 uppercase">
              Selecciona los días y horas de tus asesorías:
            </h2>

            <div>
              <Checkbox.Group onChange={handleDiasChange}>
                <Checkbox value="lunes">Lunes</Checkbox>
                <Checkbox value="martes">Martes</Checkbox>
                <Checkbox value="miercoles">Miércoles</Checkbox>
                <Checkbox value="jueves">Jueves</Checkbox>
                <Checkbox value="viernes">Viernes</Checkbox>
              </Checkbox.Group>
              <br />
              {asesorias.map((asesoria, index) => (
                <div key={index}>
                  <h3>Asesoría para el día {asesoria.dia}</h3>
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
                    disabled={!dias.includes(asesoria.dia)}
                    value={
                      asesoria.inicio ? moment(asesoria.inicio, "HH:mm") : null
                    }
                    onChange={(time) => handleInicioChange(index, time)}
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
                    disabled={!dias.includes(asesoria.dia)}
                    value={asesoria.fin ? moment(asesoria.fin, "HH:mm") : null}
                    onChange={(time) => handleFinChange(index, time)}
                  />
                </div>
              ))}
              <br />
              <h4>Asesorías programadas:</h4>
              <ul>
                {asesorias.map((asesoria, index) => (
                  <li key={index}>
                    {asesoria.dia}: {asesoria.inicio} - {asesoria.fin}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-10">
              <input
                value="actualizar"
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarHorarioAsesoria;
