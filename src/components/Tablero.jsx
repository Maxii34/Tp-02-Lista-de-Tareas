import { Card, Button, ListGroup } from "react-bootstrap";

export const Tablero = () => {
  return (
    <>
      <Card className="shadow tarjeta">
        {/* Header */}
        <Card.Header className="text-white d-flex justify-content-between align-items-center">
          <h3 className="mb-0">
            <i className="bi bi-card-checklist"></i> Mi tablero
          </h3>
          <Button variant="danger" size="sm" className="shadow">
            <i className="bi bi-trash"></i>
          </Button>
        </Card.Header>

        {/* Bienvenida */}
        <div className="text-center text-dark bg-dark-subtle border-bottom border-dark shadow py-2">
          <p className="m-0">Bienvenido a tu organizador de tareas ✨</p>
        </div>

        {/* Cuerpo con lista */}
        <Card.Body className="tablero-bajo">
          <ListGroup>{/* Aquí se añadirían tareas dinámicamente */}</ListGroup>

          {/* Mensaje vacío */}
          <ListGroup.Item className="text-center text-muted bg-light-subtle rounded-3 mt-2">
            <p className="my-1 d-flex justify-content-center">
              <i className="bi bi-arrow-down-short fs-5"></i> No hay tareas
              pendientes <i className="bi bi-arrow-down-short fs-5"></i>
            </p>
          </ListGroup.Item>
        </Card.Body>
      </Card>

      {/* Texto final */}
      <div className="texto-opaco text-center mt-1">
        <p>
          Este proyecto continúa creciendo con mejoras visuales, estructurales y
          funcionales.
        </p>
      </div>
    </>
  );
};
