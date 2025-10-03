import { Badge, Button, CardFooter } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";

export const TareasCards = ({
  itemTarea,
  setTareaSeleccionada,
  handleShow,
  handleShowEditar,
  eliminarTarea,
}) => {
  const Estados = ({ estado }) => {
    switch (estado) {
      case "Creada":
        return (
          <Badge bg="secondary" className="shadow">
            Pendiente
          </Badge>
        );
      case "Pendiente":
        return (
          <Badge bg="warning" className="shadow">
            En curso
          </Badge>
        );
      case "En proceso":
        return (
          <Badge bg="success" className="shadow">
            Completada
          </Badge>
        );
      case "En revisión":
        return (
          <Badge bg="danger" className="shadow">
            Eliminada
          </Badge>
        );
      case "Terminada":
        return (
          <Badge bg="info" className="shadow">
            Finalizada
          </Badge>
        );
      default:
        return (
          <Badge bg="secondary" className="shadow">
            Pendiente
          </Badge>
        );
    }
  };

  const openModal = () => {
    setTareaSeleccionada(itemTarea);
    handleShow();
  };
  const openModalEditar = () => {
    setTareaSeleccionada(itemTarea);
    handleShowEditar();
  };

const eliminar = () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d33", 
    cancelButtonColor: "#3085d6", 
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarTarea(itemTarea.id);
      Swal.fire({
        title: "Eliminado!",
        text: "La tarea ha sido eliminada.",
        icon: "success",
        confirmButtonColor: "#28a745", 
      });
    }
  });
};



  return (
    <Card className="shadow w-100 my-1">
      <Card.Body>
        <Card.Title>
          <b>Titulo</b>: {itemTarea.titulo}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Descripcion</b>: <br /> {itemTarea.descripcion}
        </Card.Subtitle>
        <Card.Text>
          <samp className="text-muted">
            <b>Creado</b>: {itemTarea.fecha} {itemTarea.hora}
          </samp>
          <br />
          <samp className="text-muted">
            <b>Editado</b>: {itemTarea.fechaEdicion} {itemTarea.horaEdicion}
          </samp>
        </Card.Text>
      </Card.Body>
      <CardFooter className="d-flex justify-content-between align-items-center">
        <Badge bg="secondary" className="shadow">
          Pendiente
        </Badge>

        <div>
          <Button
            variant="success"
            size="sm"
            className="me-2"
            onClick={Estados}
          >
            <i className="bi bi-check-circle"></i>
          </Button>
          <Button variant="info" size="sm" className="me-2" onClick={openModal}>
            <i className="bi bi-eye"></i>
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="me-2"
            onClick={openModalEditar}
          >
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" size="sm" onClick={eliminar}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
