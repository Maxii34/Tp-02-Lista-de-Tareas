import { Button, Modal, Form } from "react-bootstrap";
import { useProps } from "../context/PropsContext";
import { Link } from "react-router";

export const ModalLogin = () => {
  const { show, handleClose, handleShowRegister } = useProps();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  const abrirRegistro = (e) => {
    e.preventDefault();
    handleClose();
    handleShowRegister();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div>
          <div className="d-flex flex-column align-items-center justify-content-center mb-4">
            <i className="bi bi-check2-circle Css-Modal-Icon"></i>
            <h1 className="display-6 fs-2">Bienvenido</h1>
            <span className="text-muted">
              Inicie sesión en su cuenta para continuar
            </span>
          </div>

          <Form onSubmit={handleSubmit} className="Css-Form-Modal">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="tu@email.com" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="••••••••••" required />
            </Form.Group>

            <Button type="submit" className="w-100 css-btn-primary">
              Iniciar Sesión
            </Button>
          </Form>
          <div className="d-flex flex-column align-items-center text-center mt-3">
            <span className="mb-2">
              ¿Aún no estás registrado?{" "}
              <Link onClick={abrirRegistro} className="text-decoration-none">
                Regístrate aquí
              </Link>
            </span>
            <a href="#" className="text-muted text-decoration-none">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="p-0 d-flex justify-content-center align-content-center">
        <Button variant="secondary" onClick={handleClose} className=" shadow-lg">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
