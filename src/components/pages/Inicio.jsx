import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = ({
  tareas,
  setTareas,
  setTareaSeleccionada,
  handleShow,
  handleShowEditar,
  eliminarTarea,
  eliminarTodasLasTareas,
}) => {
  return (
    <>
      <Menu />
      <main className="container-fluid my-3">
        <GestorTareas
          tareas={tareas}
          setTareas={setTareas}
          setTareaSeleccionada={setTareaSeleccionada}
          handleShow={handleShow}
          handleShowEditar={handleShowEditar}
          eliminarTarea={eliminarTarea}
          eliminarTodasLasTareas={eliminarTodasLasTareas}
        />
      </main>
      <Footer />
    </>
  );
};
