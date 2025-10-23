import { useEffect, useState } from "react";
import {
  Inicio,
  Bienvenido,
  ModalTarea,
  ModalEditar,
} from "./components/index";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

function App() {  

  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);

  const modificarTarea = (tareaEditada) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === tareaEditada.id) {
          return tareaEditada;
        }
        return tarea;
      })
    );
    setTareaSeleccionada(null);
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
          actualizarTarea={modificarTarea}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
