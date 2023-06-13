import React, { useState } from "react";
import RegistrarAsesoriaDocente from "./RegistrarAsesoriaDocente";
import ListaAsesoriaDocente from "./ListaAsesoriaDocente";

const EditarHorarioAsesoria = () => {
  return (
    <div className=" md:flex z-40 pt-3">
      <RegistrarAsesoriaDocente />
      <ListaAsesoriaDocente />
    </div>
  );
};

export default EditarHorarioAsesoria;
