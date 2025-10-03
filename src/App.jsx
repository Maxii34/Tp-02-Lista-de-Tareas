import { useEffect, useState } from "react";
import {
  Inicio,
  Bienvenido,
  ModalTarea,
  ModalEditar,
} from "./components/index";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

function App() {
  //Guarda tareas en localStorage
  const tarea = JSON.parse(localStorage.getItem("tareasKey")) || [];
  // estado para tareas
  const [tareas, setTareas] = useState(tarea);
  console.log(tareas);
  // obserba tareas y actualiza el LocalStorage con nuevas, si es que se agrego mas
  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  }, [tareas]);
  //Se creo el estado para la tarea, se guarda en local estorage y useEffect actualiza el localstorage solo si ve cambios en el estado tareas. y tareas inicia con lo que tenga cargado tarea en el localstorage... fin => XD

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

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const eliminarTodasLasTareas = () => {
    setTareas([]);
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
                tareas={tareas}
                setTareas={setTareas}
                setTareaSeleccionada={setTareaSeleccionada}
                handleShow={handleShow}
                handleShowEditar={handleShowEditar}
                eliminarTarea={eliminarTarea}
                eliminarTodasLasTareas={eliminarTodasLasTareas}
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
