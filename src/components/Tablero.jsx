import { Card, Button, Row, Col } from "react-bootstrap";
import { TareasCards } from "./TareasCards";
import Swal from "sweetalert2";
import { useProps } from "./context/PropsContext";


export const Tablero = ({ handleShow, handleShowEditar, setTareaSeleccionada }) => {

  const { tareas } = useProps();

  const eliminarTodas = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar todas las tareas?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarTodasLasTareas(); // Llama a la función para eliminar todas las tareas
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
    <>
      <Card className="shadow tarjeta">
        {/* Header */}
        <Card.Header className="text-white d-flex justify-content-between align-items-center css">
          <h3 className="mb-0">
            <i className="bi bi-card-checklist"></i> Tablero
          </h3>
          <Button
            variant="danger"
            size="sm"
            className="shadow fst-italic fs-6"
            onClick={eliminarTodas}
          >
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
              {tareas.map((itemTarea) => (
                <Col xs={12} md={6} lg={6} key={itemTarea._id}>
                  <TareasCards
                    itemTarea={itemTarea}
                    handleShow={handleShow}
                    handleShowEditar={handleShowEditar}
                    setTareaSeleccionada={setTareaSeleccionada}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center my-3">
              <p className="fs-5 d-flex justify-content-center align-items-center gap-2">
                <i className="bi bi-inbox-fill fs-4"></i>{" "}
                <b>No hay tareas pendientes</b>{" "}
                <i className="bi bi-inbox-fill fs-4"></i>
              </p>
              <p className="fs-6 text-muted">
                O puedes iniciar agregando una nueva tarea
                <i className="bi bi-plus-circle ms-1"></i>
              </p>
            </div>
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
