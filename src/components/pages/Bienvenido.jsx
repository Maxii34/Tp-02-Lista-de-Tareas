import { Footer, Menu } from "../index";
import { Link } from "react-router";
import { Button, Container, Row, Col } from "react-bootstrap";

export const Bienvenido = () => {
  return (
    <>
      <Menu />
      <main className="mt-5 mb-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold">
                Bienvenido a tu Gestor de Tareas
              </h1>
              <p className="lead mt-3">
                Una solución simple y poderosa para <b className="fw-bold">organizar tu día a día</b>.
                Captura ideas, establece prioridades y no vuelvas a olvidar una
                tarea importante.
              </p>
            </Col>
          </Row>

          <Row className="mt-5 text-center">
            <Col md={4}>
              <i className="bi bi-card-checklist fs-1 text-primary"></i>
              <h3 className="mt-3">Organiza</h3>
              <p>
                Crea y categoriza tus tareas por estado: Creado, Pendiente, En
                Proceso, Terminada o En Revisión.
              </p>
            </Col>
            <Col md={4}>
              <i className="bi bi-check2-square fs-1 text-success"></i>
              <h3 className="mt-3">Gestiona</h3>
              <p>
                Actualiza el estado de tus tareas con un solo clic y mantén un
                seguimiento visual de tu progreso.
              </p>
            </Col>

            <Col md={4}>
              <i className="bi bi-pencil-square fs-1 text-warning"></i>
              <h3 className="mt-3">Controla</h3>
              <p>
                Edita los detalles de tus tareas en cualquier momento o
                elimínalas cuando ya no las necesites.
              </p>
            </Col>
          </Row>

          <Row className="mt-5 text-center">
            <Col>
              <Link to="/inicio">
                <Button variant="primary" size="lg">
                  Empezar a Gestionar
                  <i className="bi bi-arrow-right-circle ms-2"></i>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};
