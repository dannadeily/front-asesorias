import React from "react";
import RegistrarMateria from "./RegistrarMateria";
import ListaMateria from "./ListaMateria";

const Materia = () => {
  return (
    <div className=" md:flex z-40 pt-3">
      <RegistrarMateria />

      <ListaMateria />
    </div>
  );
};

export default Materia;
