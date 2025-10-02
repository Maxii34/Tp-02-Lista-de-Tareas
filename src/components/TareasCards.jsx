import { Button, CardFooter } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { EstadoBadge } from "./EstadoBadge"

export const TareasCards = ({ itemTarea }) => {
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
        {/* 👈 Badge a la izquierda */}
        <EstadoBadge />

        {/* 👉 Botones a la derecha */}
        <div>
          <Button variant="success" size="sm" className="me-2">
            <i className="bi bi-check-circle"></i>
          </Button>
          <Button variant="info" size="sm" className="me-2">
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
