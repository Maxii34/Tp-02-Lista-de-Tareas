import { useState, useEffect } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap"; // Importamos Form e InputGroup
import Swal from "sweetalert2";
import { useProps } from "./context/PropsContext";
import { editarTareaAPI } from "../helpers/tareas.queries";

export const ModalEditar = ({ show, handleClose, tareaSeleccionada }) => {
  const { obtenerTareas } = useProps();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("");

  useEffect(() => {
    if (tareaSeleccionada) {
      setTitulo(tareaSeleccionada.titulo);
      setDescripcion(tareaSeleccionada.descripcion);
      setPrioridad(tareaSeleccionada.prioridad);
    }
  }, [tareaSeleccionada]);

  const guardarTareaEditada = async () => {
    if (!titulo.trim() || !descripcion.trim() || !prioridad) {
      Toast.fire({
        title: "Campos incompletos",
        text: "Por favor completa todos los campos, incluyendo la prioridad",
        icon: "warning",
      });
      return;
    }

    const tareaActualizada = {
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      prioridad: prioridad,
    };

    const respuesta = await editarTareaAPI(
      tareaSeleccionada._id,
      tareaActualizada,
    );

    if (respuesta?.status === 200) {
      Toast.fire({
        title: "¡Éxito!",
        text: "Tarea actualizada correctamente",
        icon: "success",
      });
      obtenerTareas();
      handleClose();
    } else {
      Toast.fire({
        title: "Error",
        text: "No se pudo actualizar la tarea",
        icon: "error",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Editar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Campo Título */}
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Comprar materiales"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>

          {/* Campo Descripción */}
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          {/* Campo Prioridad con Select mejorado */}
          <Form.Group className="mb-3">
            <Form.Label>Prioridad</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-flag-fill"></i>
              </InputGroup.Text>
              <Form.Select
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
              >
                <option value="" disabled>
                  -- Selecciona --
                </option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" className=" shadow-lg" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" className=" shadow-lg" onClick={guardarTareaEditada}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
