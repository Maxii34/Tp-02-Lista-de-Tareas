import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalTarea = ({ show, handleClose, tareaSeleccionada }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Titulo: {tareaSeleccionada.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Descripcion: {tareaSeleccionada.descripcion} <br />
          <samp className="text-muted">
            Fecha de creacion: {tareaSeleccionada.fecha}
            {tareaSeleccionada.hora}
          </samp>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
