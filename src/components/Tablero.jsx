import { Card, Button, Row, Col } from "react-bootstrap";
import { TareasCards } from "./TareasCards";

export const Tablero = ({ tareas, setTareaSeleccionada, handleShow, handleShowEditar }) => {
  return (
    <>
      <Card className="shadow tarjeta">
        {/* Header */}
        <Card.Header className="text-white d-flex justify-content-between align-items-center css">
          <h3 className="mb-0">
            <i className="bi bi-card-checklist"></i> Tablero
          </h3>
          <Button variant="danger" size="sm" className="shadow">
            <i className="bi bi-trash"></i>
          </Button>
        </Card.Header>

        {/* Bienvenida */}
        <div className="text-center text-dark bg-dark-subtle border-bottom border-dark shadow py-2">
          <p className="m-0">Bienvenido a tu organizador de tareas ✨</p>
        </div>

        <Card.Body className="tablero-bajo">
          {tareas.length > 0 ? (
            <Row>
              {tareas.map((itemTarea, index) => (
                <Col xs={12} md={6} lg={6} key={index}>
                  <TareasCards
                    itemTarea={itemTarea}
                    setTareaSeleccionada={setTareaSeleccionada}
                    handleShow={handleShow}
                    handleShowEditar={handleShowEditar}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            //Mensaje si no hay tareas
            <span className="my-1 d-flex justify-content-center">
              <i className="bi bi-arrow-down-short fs-5"></i> No hay tareas
              pendientes <i className="bi bi-arrow-down-short fs-5"></i>
            </span>
          )}
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
