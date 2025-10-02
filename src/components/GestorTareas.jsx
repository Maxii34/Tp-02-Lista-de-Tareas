import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Tablero } from "./Tablero";

export const GestorTareas = () => {
  return (
    <section>
      <Row className="justify-content-center">
        {/* Columna izquierda */}
        <Col xs={12} md={4} lg={4} className="my-2">
          <Card className="shadow mb-4 rounded-2 columna1 tarjeta css p-2">
            {/* Card de entrada */}
            <Card className="mb-4 rounded-2 css">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="h5 text-light">
                    <i className="bi bi-inboxes"></i> Bandeja De Entrada
                  </span>
                </div>

                {/* Input título */}
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Introduce el titulo..."
                    minLength={3}
                    maxLength={50}
                    aria-label="Nueva tarea"
                  />
                  <Button variant="info" size="sm" className="shadow">
                    <i className="bi bi-list-task"></i> Añadir
                  </Button>
                </InputGroup>

                {/* Textarea descripción */}
                <InputGroup className="mt-2">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    minLength={5}
                    maxLength={200}
                    placeholder="Añadí la Descripción..."
                  />
                </InputGroup>
              </Card.Body>
            </Card>

            {/* Texto motivacional */}
            <div className="bg-dark-subtle shadow py-1">
              <h1 className="text-center my-4 fs-2">
                <b>¡Tomá las riendas!...</b>
              </h1>
              <p className="text-center text-muted mb-4">
                Tomá el control de tu tiempo: añadí tareas y <br /> cumplí tus
                objetivos..
              </p>
            </div>
          </Card>
        </Col>

        {/* Columna derecha */}
        <Col xs={12} md={8} lg={8} className="my-2">
          <Tablero />
        </Col>
      </Row>
    </section>
  );
};
