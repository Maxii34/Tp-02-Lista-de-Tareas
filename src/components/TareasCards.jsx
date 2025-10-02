import { Badge, Button, CardFooter } from "react-bootstrap";
import Card from "react-bootstrap/Card";


export const TareasCards = ({ itemTarea, setTareaSeleccionada, handleShow }) => {
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


  return (
    <Card className="shadow w-100 my-1">
      <Card.Body>
        <Card.Title>Titulo: {itemTarea.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Descripcion: {itemTarea.descripcion}
        </Card.Subtitle>
        <Card.Text>
          <samp className="text-muted">
            Fecha: {itemTarea.fecha} {itemTarea.hora}
          </samp>
          <br />
          <span className="text-muted">Fecha de modificacion: Card Text</span>
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
          <Button variant="primary" size="sm" className="me-2"> 
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" size="sm">
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
