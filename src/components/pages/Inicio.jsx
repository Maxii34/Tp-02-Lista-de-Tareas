import { PropsProvider } from "../context/PropsContext";
import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = ({
  tareas,
  setTareas,
  setTareaSeleccionada,
  handleShow,
  handleShowEditar,
  obtenerTareas,
}) => {
  return (
    <>
      <Menu />
      <PropsProvider>
        <main className="container-fluid my-3">
          <GestorTareas
            setTareaSeleccionada={setTareaSeleccionada}
            handleShow={handleShow}
            handleShowEditar={handleShowEditar}
          />
        </main>
      </PropsProvider>
      <Footer />
    </>
  );
};
