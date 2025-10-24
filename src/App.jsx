import { useEffect, useState } from "react";
import {
  Inicio,
  Bienvenido,
  ModalTarea,
  ModalEditar,
} from "./components/index";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { PropsProvider } from "./components/context/PropsContext";

function App() {
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  //Estados y funciones para el modal de ver
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditar, setShowEditar] = useState(false);
  const handleCloseEditar = () => setShowEditar(false);
  const handleShowEditar = () => setShowEditar(true);

  return (
    <>
      <PropsProvider>
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
          />
        </BrowserRouter>
      </PropsProvider>
    </>
  );
}

export default App;
