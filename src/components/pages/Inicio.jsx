import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = ({ tareas, setTareas, setTareaSeleccionada, handleShow }) => {
  return (
    <>
      <Menu />
      <main className="container-fluid my-3">
        <GestorTareas tareas={tareas} setTareas={setTareas} setTareaSeleccionada={setTareaSeleccionada} handleShow={handleShow}/>
      </main>
      <Footer />
    </>
  );
};

