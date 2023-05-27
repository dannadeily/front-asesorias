import React from "react";
import AsesoriaRegistrada from "./AsesoriaRegistrada";
import RegistrarAsesoria from "./RegistrarAsesoria";

const HorarioAsesoria = () => {
  return (
    <div className=" md:flex z-40 pt-3">
      <RegistrarAsesoria />

      <AsesoriaRegistrada />
    </div>
  );
};

export default HorarioAsesoria;
