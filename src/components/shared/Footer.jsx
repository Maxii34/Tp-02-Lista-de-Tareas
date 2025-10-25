import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-3">
      <Container>
        <Row>
          {/* Columna 1 */}
          <Col md={4} className="mb-3 text-center text-md-start">
            <h5>Categorias</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none ftCss">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none ftCss">
                  Configuración
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none ftCss">
                  Tareas
                </a>
              </li>
            </ul>
          </Col>

          {/* Columna 2 */}
          <Col md={4} className="mb-3 text-center text-md-start">
            <h5>Contáctanos</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-light text-decoration-none ftCss">
                  <i className="bi bi-envelope-at-fill"></i>{" "}
                  soporte@gestortareas.com
                </a>
              </li>
              <li>
                <a className="text-light text-decoration-none ftCss">
                  <i className="bi bi-whatsapp"></i> +54 11 1234-5678
                </a>
              </li>
            </ul>
          </Col>

          {/* Columna 3 */}
          <Col md={4} className="mb-3 text-center text-md-start">
            <h5>Síguenos</h5>
            <p className="text-light">En nuestras redes.</p>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li className="px-2">
                <a href="#" className="text-light">
                  <i className="bi bi-instagram fs-4 social-icon-instagram"></i>
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-light">
                  <i className="bi bi-youtube fs-4 social-icon-youtube"></i>
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-light">
                  <i className="bi bi-twitter fs-4 social-icon-twitter"></i>
                </a>
              </li>
              <li className="px-2">
                <a href="#" className="text-light">
                  <i className="bi bi-facebook fs-4 social-icon-facebook"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center border-1 border-top">
            <p className="py-1">
              &copy; 2025 Gestor de Tareas - Todos los derechos
              reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
