import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
import { Tablero } from "./Tablero";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useProps } from "./context/PropsContext";
import { crearTarea } from "../helpers/tareas.queries";

export const GestorTareas = ({
  setTareaSeleccionada,
  handleShow,
  handleShowEditar,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const { obtenerTareas } = useProps();

  const onSubmit = async (data) => {
    // Validación
    if (!data.titulo.trim() || !data.descripcion.trim()) {
      Toast.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, rellena todos los datos.",
      });
      return;
    }

    const tareaCompleta = {
      titulo: data.titulo,
      descripcion: data.descripcion,
      estado: "pendiente",
    };

    const respuesta = await crearTarea(tareaCompleta);

    if (respuesta.status === 201) {
      Toast.fire({
        icon: "success",
        title: "¡Creaste una tarea!",
        html: `Has creado la tarea <b style="color: #28a745;">"${data.titulo}"</b> exitosamente.`,
      });
      obtenerTareas();
      reset();
    } else {
      Toast.fire({
        title: "Error al crear la tarea",
        text: respuesta.mensaje || "Por favor verifica los datos.",
        icon: "error",
      });
    }
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
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card p-1 bg-primary-subtle "
                >
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
                          value: 50,
                          message:
                            "El titulo no debe superar los 50 caracteres",
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
                          value: 10,
                          message:
                            "La descripción debe tener al menos 10 caracteres",
                        },
                        maxLength: {
                          value: 500,
                          message:
                            "La descripción no debe superar los 500 caracteres",
                        },
                      })}
                    />
                  </InputGroup>
                  {errors.descripcion && (
                    <Form.Text className="text-danger">
                      {errors.descripcion.message}
                    </Form.Text>
                  )}

                  {/* Select Prioridad */}
                  <InputGroup className="mt-2">
                    <InputGroup.Text>Prioridad</InputGroup.Text>
                    <Form.Select
                      defaultValue=""
                      {...register("prioridad", {
                        required: "Por favor, selecciona una prioridad",
                      })}
                    >
                      <option value="" disabled>
                        Selecciona prioridad
                      </option>
                      <option value="baja">Baja</option>
                      <option value="media">Media</option>
                      <option value="alta">Alta</option>
                    </Form.Select>
                  </InputGroup>
                  {errors.prioridad && (
                    <Form.Text className="text-danger">
                      {errors.prioridad.message}
                    </Form.Text>
                  )}
                </Form>
                <div className=" d-block justify-content-center align-content-center">
                  <Button
                    variant="info"
                    size="sm"
                    className="shadow mt-4 w-100"
                    type="submit"
                  >
                    <i className="bi bi-list-task"></i> Añadir nueva tarea..
                  </Button>
                </div>
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
          <Tablero
            setTareaSeleccionada={setTareaSeleccionada}
            handleShow={handleShow}
            handleShowEditar={handleShowEditar}
          />
        </Col>
      </Row>
    </section>
  );
};
