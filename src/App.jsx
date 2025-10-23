import { useEffect, useState } from "react";
import {
  Inicio,
  Bienvenido,
  ModalTarea,
  ModalEditar,
} from "./components/index";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { listarTareas } from "./helpers/queries";


function App() {  

  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  //Estados y funciones para el modal de ver
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    //Solicitar los datos al backend con la funcion de queries
    const respuesta = await listarTareas();
    //Verificar que los datos llegen correctamente
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      //Cargar las tareas en el estado
      setTareas(datos);
    }
  };



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />

          <Route path="/inicio" element={<Bienvenido />} />

          <Route path="/bienvenido" element={<Bienvenido />} />

          <Route
            path="/tareas"
            element={
              <Inicio
                handleShow={handleShow}
                handleShowEditar={handleShowEditar}
                setTareaSeleccionada={setTareaSeleccionada}
                tareas={tareas}
                obtenerTareas={obtenerTareas}
              />
            }
          />
          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>


        {/*Modales de ver y editar*/}
        <ModalTarea
          handleClose={handleClose}
          show={show}
          tareaSeleccionada={tareaSeleccionada}
        />
        <ModalEditar
          handleClose={handleCloseEditar}
          show={showEditar}
          tareaSeleccionada={tareaSeleccionada}
          obtenerTareas={obtenerTareas}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
