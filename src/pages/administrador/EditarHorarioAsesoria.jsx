import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RegistrarAsesoriaDocente from "./RegistrarAsesoriaDocente";
import ListaAsesoriaDocente from "./ListaAsesoriaDocente";

const EditarHorarioAsesoria = () => {
  const { docenteId } = useParams();

  return (
    <div className=" md:flex z-40 pt-3">
      <RegistrarAsesoriaDocente docenteId={docenteId} />
      <ListaAsesoriaDocente docenteId={docenteId} />
    </div>
  );
};

export default EditarHorarioAsesoria;
