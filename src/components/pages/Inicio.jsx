import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = ({ tareas, setTareas }) => {
  return (
    <>
      <Menu />
      <main className="container-fluid my-3">
        <GestorTareas tareas={tareas} setTareas={setTareas}/>
      </main>
      <Footer />
    </>
  );
};

