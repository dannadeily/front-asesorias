import React from "react";
import { Navigate } from "react-router-dom";
import HeaderAdministrador from "../components/HeaderAdministrador";

const RutaPrivadaAdmin = ({ component: Component, ...rest }) => {
  const checkAuthentication = () => {
    const token = localStorage.getItem("token");
    return token !== null; // Devuelve true si el token existe, de lo contrario, devuelve false
  };


  const isAuthenticated = checkAuthentication(); // Verificar si el token existe en el almacenamiento local

  return <>{isAuthenticated ? <HeaderAdministrador /> : <Navigate to="/" />}</>;
};

export default RutaPrivadaAdmin;
