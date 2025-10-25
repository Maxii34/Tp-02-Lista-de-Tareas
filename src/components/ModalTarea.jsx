import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalTarea = ({ show, handleClose, tareaSeleccionada }) => {
  if (!tareaSeleccionada) {
    return null;
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Title className="py-2">Titulo: {tareaSeleccionada.titulo || ""}</Modal.Title>
          <b className="py-2">Descripcion:</b> <br /> {tareaSeleccionada.descripcion || ""} <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
