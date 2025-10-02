import { Footer, Menu, GestorTareas } from "../index";

export const Inicio = () => {
  return (
    <>
      <Menu />
      <main className="container-fluid my-3">
        <GestorTareas />
      </main>
      <Footer />
    </>
  );
};

