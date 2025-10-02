import { useEffect, useState } from "react";
import {
  Inicio,
  Bienvenido,
  TareasCards,
  ModalTarea,
} from "./components/index";

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
  //Se creo el estado para la tarea, se guarda en local estorage y useEffect actualiza el localstorage solo si ve cambios en el estado tareas. y tareas inicia con lo que tenga tarea en el localstorage... fin => XD

  const [tareaSeleccionada, setTareaSeleccionada] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Inicio
        tareas={tareas}
        setTareas={setTareas}
        setTareaSeleccionada={setTareaSeleccionada}
        handleShow={handleShow}
      />
      <Bienvenido />
      <ModalTarea handleClose={handleClose} show={show} tareaSeleccionada={tareaSeleccionada} />
    </>
  );
}

export default App;
