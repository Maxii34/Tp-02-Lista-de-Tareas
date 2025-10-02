import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
import { Tablero } from "./Tablero";
import { useForm } from "react-hook-form";

export const GestorTareas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes agregar la lógica para crear una nueva tarea
    reset();
  };

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
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Input título */}
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Introduce el titulo..."
                      {...register("titulo", {
                        required: "El titulo es obligatorio",
                        minLength: {
                          value: 5,
                          message: "El titulo debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "El titulo no debe superar los 20 caracteres",
                        },
                      })}
                    />
                  </InputGroup>
                  {errors.titulo && (
                    <Form.Text className="text-danger">
                      {errors.titulo.message}
                    </Form.Text>
                  )}

                  {/* Textarea descripción */}
                  <InputGroup className="mt-2">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Añadí la Descripción..."
                      {...register("descripcion", {
                        required: "La descripción es obligatoria",
                        minLength: {
                          value: 5,
                          message:
                            "La descripción debe tener al menos 5 caracteres",
                        },
                        maxLength: {
                          value: 100,
                          message:
                            "La descripción no debe superar los 100 caracteres",
                        },
                      })}
                    />
                  </InputGroup>
                  {errors.descripcion && (
                    <Form.Text className="text-danger">
                      {errors.descripcion.message}
                    </Form.Text>
                  )}
                  <Button
                    variant="info"
                    size="sm"
                    className="shadow mt-2"
                    type="submit"
                  >
                    <i className="bi bi-list-task"></i> Añadir
                  </Button>
                </Form>
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
