import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router"; 
export const Menu = () => {
  return (
    <Navbar expand="lg" className="css px-3 shadow">
      <Container>
        <Navbar.Brand href="/" className="text-white d-flex align-items-center">
          <i className="bi bi-check2-square me-2"></i> Lista de Tareas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-2">
            <Link
              to="/inicio"
              className="text-white fs-6 mx-1 text-decoration-none"
            >
              <i className="bi bi-house-door me-1"></i> Bienvenido
            </Link>
            <Link
              to="/tareas"
              className="text-white fs-6 mx-1 text-decoration-none"
            >
              <i className="bi bi-card-checklist me-1"></i> Tareas
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
