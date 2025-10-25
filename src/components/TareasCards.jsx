import { Badge, Button, CardFooter } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { borrarTareaAPI } from "../helpers/queries";
import { useProps } from "./context/PropsContext";

export const TareasCards = ({
  itemTarea,
  handleShow,
  handleShowEditar,
  setTareaSeleccionada,
}) => {
  //inicia la logica
  const { obtenerTareas } = useProps();

  const openModal = () => {
    setTareaSeleccionada(itemTarea);
    handleShow();
  };
  const openModalEditar = () => {
    setTareaSeleccionada(itemTarea);
    handleShowEditar();
  };

  const eliminar = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaAPI(itemTarea._id);
        if (respuesta.status === 200) {
          await obtenerTareas();
          Swal.fire({
            title: "Eliminado!",
            text: "La tarea ha sido eliminada.",
            icon: "success",
            confirmButtonColor: "#28a745",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: "La tarea no pudo ser eliminada.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Card className="shadow w-100  tareasCard">
      <Card.Body>
        <Card.Title>
          <b>Titulo</b>: {itemTarea.titulo}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <b>Descripcion</b>: <br /> {itemTarea.descripcion}
        </Card.Subtitle>
        <Card.Text>
          <samp className="text-muted">
            <b>Creado</b>:{" "}
            {new Date(itemTarea.createdAt).toLocaleDateString("es-AR")} -{" "}
            {new Date(itemTarea.createdAt).toLocaleTimeString("es-AR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </samp>
          <br />
          <samp className="text-muted">
            <b>Editado</b>:{" "}
            {new Date(itemTarea.updatedAt).toLocaleDateString("es-AR")} -{" "}
            {new Date(itemTarea.updatedAt).toLocaleTimeString("es-AR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </samp>
        </Card.Text>
      </Card.Body>
      <CardFooter className="d-flex justify-content-between align-items-center">
        <div>
          <Button variant="info" size="sm" className="me-2" onClick={openModal}>
            <i className="bi bi-eye"></i>
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="me-2"
            onClick={openModalEditar}
          >
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" size="sm" onClick={eliminar}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
