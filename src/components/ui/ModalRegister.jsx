import { Button, Modal, Form } from "react-bootstrap";
import { useProps } from "../context/PropsContext";
import { Link } from "react-router";

export const ModalRegister = () => {
  const { showRegister, handleCloseRegister, handleShow } = useProps();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseRegister();
  };
  const abrirLogin = (e) => {
    e.preventDefault();
    handleCloseRegister();
    handleShow();
  }

  return (
    <>
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Body>
          <div>
            <div className="d-flex flex-column align-items-center justify-content-center mb-4">
              <i className="bi bi-person-add Css-Modal-Icon"></i>
              <h1 className="display-6 fs-2">Crear Cuenta</h1>
              <span className="text-muted">
                Completa el formulario para registrarte
              </span>
            </div>

            <Form onSubmit={handleSubmit} className="Css-Form-Modal">
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••••"
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 css-btn-primary">
                Registrarse
              </Button>
            </Form>

            <div className="d-flex flex-column align-items-center text-center mt-3">
              <span className="mb-2">
                ¿Ya tienes una cuenta?{" "}
                <Link onClick={abrirLogin} className="text-decoration-none">
                  Inicia sesión aquí
                </Link>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="p-0 d-flex justify-content-center align-content-center">
          <Button variant="secondary" onClick={handleCloseRegister} className=" shadow-lg">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
