import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editarTareaAPI } from "../helpers/queries";
import Swal from "sweetalert2";

export const ModalEditar = ({
  show,
  handleClose,
  tareaSeleccionada,
  obtenerTareas, // Nueva prop para refrescar la lista
}) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // useEffect para cargar los datos de la tarea seleccionada al abrir el modal
  useEffect(() => {
    if (tareaSeleccionada) {
      setTitulo(tareaSeleccionada.titulo);
      setDescripcion(tareaSeleccionada.descripcion);
    }
  }, [tareaSeleccionada]);

  const guardarTareaEditada = async () => {
    // Validación simple
    if (!titulo.trim() || !descripcion.trim()) {
      Swal.fire({
        title: "Campos vacíos",
        text: "Por favor completa todos los campos",
        icon: "warning",
        confirmButtonColor: "#f39c12",
      });
      return;
    }

    const tareaActualizada = {
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
    };

    // Llamar a la API para actualizar
    const respuesta = await editarTareaAPI(
      tareaSeleccionada._id,
      tareaActualizada
    );

    if (respuesta?.status === 200) {
      Swal.fire({
        title: "¡Éxito!",
        text: "Tarea actualizada correctamente",
        icon: "success",
        confirmButtonColor: "#28a745",
      });
      obtenerTareas(); // Refrescar la lista de tareas
      handleClose(); // Cerrar el modal
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la tarea",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
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
          rows="4"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={guardarTareaEditada}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
