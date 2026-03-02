import { Button, Modal, Badge, ListGroup, Stack } from "react-bootstrap";

export const ModalTarea = ({ show, handleClose, tareaSeleccionada }) => {
  if (!tareaSeleccionada) return null;
  console.log(tareaSeleccionada)
  // Función para formatear la fecha (opcional)
  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Colores para la prioridad
  const colorPrioridad = {
    alta: "danger",
    media: "warning",
    baja: "success",
  };
  

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>
          <i className="bi bi-info-circle me-2"></i>
          Detalles de la Tarea
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Stack gap={1}>
          <div>
            <h5 className="text-muted small text-uppercase fw-bold">Título</h5>
            <p className="fs-4 fw-semibold">{tareaSeleccionada.titulo}</p>
          </div>

          <hr />

          <div>
            <h5 className="text-muted small text-uppercase fw-bold">
              Descripción
            </h5>
            <p className="text-secondary" style={{ whiteSpace: "pre-wrap" }}>
              {tareaSeleccionada.descripcion ||
                "Sin descripción proporcionada."}
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            {/* Sección Prioridad */}
            <div>
              <h5 className="text-muted small text-uppercase fw-bold">
                Prioridad
              </h5>
              <Badge
                bg={
                  colorPrioridad[tareaSeleccionada.prioridad?.toLowerCase()] ||
                  "secondary"
                }
                className="text-uppercase px-3 py-2"
              >
                {tareaSeleccionada.prioridad || "No definida"}
              </Badge>
            </div>

            {/* Sección Estado */}
            <div className="text-end text-center">
              <h5 className="text-muted small text-uppercase fw-bold">
                Estado
              </h5>
              <Badge pill bg={[tareaSeleccionada.estado?.toLowerCase().trim()] || "secondary"}
                className="text-uppercase px-3 py-2"
              >
                {tareaSeleccionada.estado || "No definido"}
              </Badge>
            </div>
          </div>
        </Stack>
      </Modal.Body>

      <Modal.Footer className="bg-light d-flex justify-content-between">
        <div className="small text-muted">
          {/* Aquí es donde puedes colocar los datos de tiempo */}
          <div>
            <i className="bi bi-calendar-plus me-1"></i>
            Creada: {formatearFecha(tareaSeleccionada.createdAt)}
          </div>
          {tareaSeleccionada.updatedAt !== tareaSeleccionada.createdAt && (
            <div>
              <i className="bi bi-pencil-square me-1"></i>
              Última edición: {formatearFecha(tareaSeleccionada.updatedAt)}
            </div>
          )}
        </div>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
