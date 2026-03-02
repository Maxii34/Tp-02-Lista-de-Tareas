import { Badge, Button, Card, Stack, Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import { useProps } from "./context/PropsContext";
import { borrarTareaAPI } from "../helpers/tareas.queries";

export const TareasCards = ({
  itemTarea,
  handleShow,
  handleShowEditar,
  setTareaSeleccionada,
}) => {
  const { obtenerTareas } = useProps();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  const openModal = () => {
    setTareaSeleccionada(itemTarea);
    handleShow();
  };

  const openModalEditar = () => {
    setTareaSeleccionada(itemTarea);
    handleShowEditar();
  };

  const colorPrioridad = {
    alta: "danger",
    media: "warning",
    baja: "success",
  };

  const borderColorPrioridad = {
    alta: "#dc3545",
    media: "#ffc107",
    baja: "#198754",
  };

  const borderColor = borderColorPrioridad[itemTarea.prioridad?.toLowerCase()] || "#dee2e6";

  const eliminarTarea = () => {
    Swal.fire({
      title: "¿Eliminar tarea?",
      text: `Vas a borrar "${itemTarea.titulo}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(itemTarea._id);
        if (respuesta.status === 200) {
          await obtenerTareas();
          Toast.fire({
            icon: "success",
            title: "¡Tarea eliminada correctamente!",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "No se pudo eliminar la tarea",
          });
        }
      }
    });
  };

  return (
    <Card
      className="h-100 rounded-3 tareasCard shadow"
      style={{
        borderLeft: `4px solid ${borderColor}`,
        transition: "transform 0.2s, shadow 0.2s",
      }}
    >
      <Card.Header className="bg-light border-bottom border-light pt-3 pb-2 d-flex justify-content-between align-items-start">
        <Badge
          bg={colorPrioridad[itemTarea.prioridad?.toLowerCase()] || "secondary"}
          className="text-uppercase shadow-sm"
          style={{ fontSize: "0.7rem" }}
        >
          {itemTarea.prioridad}
        </Badge>
        <small className="text-muted fw-bold" style={{ fontSize: "0.75rem" }}>
          {itemTarea.estado?.toUpperCase().replace("_", " ")}
        </small>
      </Card.Header>

      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold text-dark mb-2 fs-5">
          {itemTarea.titulo}
        </Card.Title>
        <Card.Text
          className="text-secondary small flex-grow-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "1.5",
          }}
        >
          {itemTarea.descripcion}
        </Card.Text>

        <div className="mt-4 pt-2 border-top d-flex justify-content-end gap-1">
          <Button
            variant="outline-info"
            size="sm"
            onClick={openModal}
            className="rounded-2 shadow-sm"
          >
            <i className="bi bi-eye"></i>
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={openModalEditar}
            className="rounded-2 shadow-sm"
          >
            <i className="bi bi-pencil"></i>
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={eliminarTarea}
            className="rounded-2 shadow-sm"
          >
            <i className="bi bi-trash"></i> Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};