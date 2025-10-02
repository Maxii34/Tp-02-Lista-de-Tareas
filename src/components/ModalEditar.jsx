import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

export const ModalEditar = ({
  show,
  handleClose,
  tareaSeleccionada,
  actualizarTarea,
}) => {
  //Estados locales para manejar la edición
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //useEffect para cargar los datos de la tarea seleccionada al abrir el modal
  useEffect(() => {
    if (tareaSeleccionada) {
      setTitulo(tareaSeleccionada.titulo);
      setDescripcion(tareaSeleccionada.descripcion);
    }
  }, [tareaSeleccionada]);

  const guardarTareaEditada = () => {
    const fechaActualizacion = new Date().toLocaleDateString();
    const horaActualizacion = new Date().toLocaleTimeString();

    const tareaActualizada = {
      id: tareaSeleccionada.id,
      titulo: titulo,
      descripcion: descripcion,
      fecha: tareaSeleccionada.fecha,
      hora: tareaSeleccionada.hora,
      fechaEdicion: fechaActualizacion,
      horaEdicion: horaActualizacion,
    };
    actualizarTarea(tareaActualizada);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Título:</label>
        <input
          type="text"
          className="form-control mb-2"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label>Descripción:</label>
        <textarea
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={guardarTareaEditada}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
