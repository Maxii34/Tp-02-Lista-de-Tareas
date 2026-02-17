import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useProps } from "../context/PropsContext";
import { Link, useNavigate, } from "react-router";


export const Menu = ({ userLogged, setUserLogged }) => {
  //Estado para modal de context
  const { handleShow, handleShowRegister } = useProps();

  const navegacion = useNavigate()
  const { setTareas } = useProps()

  //Funciones para abrir y cerrar el modal registro.
  const abrirModal = (e) => {
    e.preventDefault();
    handleShow();
  };
  const Register = (e) => {
    e.preventDefault();
    handleShowRegister();
  };

  //
  const isAuthenticated = !!userLogged?.token;
  //const isAdmin = userLogged && userLogged?.role === "admin";
  const isUser = userLogged && userLogged?.role === "usuario";

  const cerrarSesion = () => {
    setUserLogged({});
    setTareas({})
    navegacion("/inicio")
  };

  return (
    <Navbar expand="lg" className="css py-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white d-flex align-items-center">
          <i className="bi bi-check2-square me-2"></i> Lista de Tareas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center g-2">
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
            {!isAuthenticated ? (
              <>
                <Nav.Link
                  onClick={abrirModal}
                  className="text-white fs-6 mx-1 text-decoration-none"
                >
                  <i className="bi bi-box-arrow-in-right me-1"></i> Iniciar
                  Sesión
                </Nav.Link>
                <Nav.Link
                  onClick={Register}
                  className="text-white fs-6 mx-1 text-decoration-none"
                >
                  <i className="bi bi-person-add me-1"></i> Registrarse
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                onClick={cerrarSesion}
                className="text-white fs-6 mx-1 text-decoration-none"
              >
                <i className="bi bi-door-closed me-1"></i> Cerrar Sesión
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
