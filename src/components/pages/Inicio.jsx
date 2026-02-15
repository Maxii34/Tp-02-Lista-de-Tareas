import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = ({
  setTareaSeleccionada,
  handleShow,
  handleShowEditar,
  userLogged
}) => {
  return (
    <>
      <Menu userLogged={userLogged} />
        <main className="container-fluid my-3">
          <GestorTareas
            setTareaSeleccionada={setTareaSeleccionada}
            handleShow={handleShow}
            handleShowEditar={handleShowEditar}
          />
        </main>
      <Footer />
    </>
  );
};
