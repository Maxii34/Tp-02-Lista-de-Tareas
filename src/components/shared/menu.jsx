import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useProps } from "../context/PropsContext";

export const Menu = () => {
  const { handleShow } = useProps();

  const abrirModal = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <Navbar expand="lg" className="css py-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white d-flex align-items-center">
          <i className="bi bi-check2-square me-2"></i> Lista de Tareas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-2">
            <Nav.Link
              to="/inicio"
              className="text-white fs-6 mx-1 text-decoration-none"
            >
              <i className="bi bi-house-door me-1"></i> Bienvenido
            </Nav.Link>
            <Nav.Link
              to="/tareas"
              className="text-white fs-6 mx-1 text-decoration-none"
            >
              <i className="bi bi-card-checklist me-1"></i> Tareas
            </Nav.Link>
            <Nav.Link
              onClick={abrirModal}
              className="text-white fs-6 mx-1 text-decoration-none"
            >
              <i className="bi bi-box-arrow-in-right me-1"></i> Iniciar Sesión
            </Nav.Link>
            <Nav.Link className="text-white fs-6 mx-1 text-decoration-none">
              <i className="bi bi-door-closed me-1"></i> Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
