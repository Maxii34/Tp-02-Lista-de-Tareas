import { Footer, Menu } from "../index";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";

export const Bienvenido = () => {
  return (
    <>
      <Menu />
      <div className="text-center mt-5">
        <h1>Bienvenido a la Lista de Tareas</h1>
        <p className="mt-3">Organiza y gestiona tus tareas fácilmente.</p>

        {/* Botón para ir al inicio */}
        <Link to="/inicio">
          <Button variant="primary" size="lg" className="mt-3">
            Ir al gestor de tareas
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
