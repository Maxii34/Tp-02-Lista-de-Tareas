import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = ({
  tareas,
  setTareaSeleccionada,
  handleShow,
  handleShowEditar,
}) => {
  return (
    <>
      <Menu />
      <main className="container-fluid my-3">
        <GestorTareas
          setTareaSeleccionada={setTareaSeleccionada}
          handleShow={handleShow}
          handleShowEditar={handleShowEditar}
          tareas={tareas}
        />
      </main>
      <Footer />
    </>
  );
};