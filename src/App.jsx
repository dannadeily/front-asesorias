import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import IniciarSesion from "./pages/IniciarSesion";
import RegistrarEstudiante from "./pages/RegistrarEstudiante";
import RecuperarPassword from "./pages/RecuperarPassword";
import HeaderAdministrador from "./components/HeaderAdministrador";
import HeaderEstudiante from "./components/HeaderEstudiante";
import HeaderDocente from "./components/HeaderDocente";
import CambiarPassword from "./pages/CambiarPassword";

// Administrador
import RegistrarDocente from "./pages/administrador/RegistrarDocente";
import ListaDocentes from "./pages/administrador/ListaDocentes";
import Reportes from "./pages/administrador/Reportes";
import HorarioAtencion from "./pages/HorarioAtencion";
//Estudiate
import DatosEstudiante from "./pages/estudiante/DatosEstudiante";
import AgendarAsesoria from "./pages/estudiante/AgendarAsesoria";
import CancelarAsesoria from "./pages/estudiante/CancelarAsesoria";
import CalificarAsesoria from "./pages/estudiante/CalificarAsesoria";
import EditarDatosEstudiante from "./pages/estudiante/EditarDatosEstudiante";

//Docente
import DatosDocente from "./pages/docente/DatosDocente";
import EditarDatosDocente from "./pages/docente/EditarDatosDocente";
import AsesoriaRegistrada from "./pages/docente/AsesoriaRegistrada";
import SolicitudAsesoria from "./pages/docente/SolicitudAsesoria";
import EditarSolicitud from "./pages/docente/EditarSolicitud";
import HistorialAsesoria from "./pages/docente/HistorialAsesoria";
import HorarioAsesoria from "./pages/docente/HorarioAsesoria";
import EditarHorarioAsesoria from "./pages/administrador/EditarHorarioAsesoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<IniciarSesion />} />
            <Route
              path="RegistrarEstudiante"
              element={<RegistrarEstudiante />}
            />
            <Route path="RecuperarPassword" element={<RecuperarPassword />} />
          </Route>

          <Route path="/administrador" element={<HeaderAdministrador />}>
            <Route index element={<HorarioAtencion />} />
            <Route path="registrardocente" element={<RegistrarDocente />} />
            <Route path="listadocentes" element={<ListaDocentes />} />
            <Route
              path="listadocentes/editardatosasesoria"
              element={<EditarHorarioAsesoria />}
            />
            <Route path="reportes" element={<Reportes />} />
          </Route>

          <Route path="/Estudiante" element={<HeaderEstudiante />}>
            <Route path="DatosEstudiante" element={<DatosEstudiante />} />
            <Route
              path="DatosEstudiante/EditarDatosEstudiante"
              element={<EditarDatosEstudiante />}
            />
            <Route path="AgendarAsesoria" element={<AgendarAsesoria />} />
            <Route path="CancelarAsesoria" element={<CancelarAsesoria />} />
            <Route path="CalificarAsesoria" element={<CalificarAsesoria />} />
            <Route path="cambiarpassword" element={<CambiarPassword/>} />
          </Route>

          <Route path="/docente" element={<HeaderDocente />}>
            <Route path="datosdocente" element={<DatosDocente />} />
            <Route
              path="datosdocente/editardatosdocente"
              element={<EditarDatosDocente />}
            />
            <Route path="horarioasesoria" element={<HorarioAsesoria />}>
              <Route index element={<AsesoriaRegistrada />} />
            </Route>

            <Route path="solicitudasesoria" element={<SolicitudAsesoria />} />
            <Route path="editarsolicitud" element={<EditarSolicitud />} />
            <Route path="historialasesoria" element={<HistorialAsesoria />} />
            <Route path="cambiarpassword" element={<CambiarPassword/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
