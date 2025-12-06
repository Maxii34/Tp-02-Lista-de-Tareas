import { Button, Modal, Form } from "react-bootstrap";
import { useProps } from "../context/PropsContext";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { loginUserAPI } from "../../helpers/queries";

export const ModalLogin = ({ setUserLogged }) => {
  const { show, handleClose, handleShowRegister } = useProps();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const cerrarModal = () => {
    handleClose();
  };
  const abrirRegistro = () => {
    handleClose();
    handleShowRegister();
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!data.email.trim() || !data.password.trim()) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Email y contraseña son requeridos.",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    const respuesta = await loginUserAPI(data);
    if (respuesta && respuesta.status === 200) {
      const resultado = await respuesta.json();

      const usuarioData = {
        nombre: resultado.nombre,
        email: resultado.email,
        token: resultado.token,
        tipo: resultado.tipo,
      };
      setUserLogged(usuarioData);
      sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioData));

      Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      reset();
      handleClose();

      if (usuarioData.tipo === "Admin") {
        navigate("");
      } else {
        navigate("/tareas");
      }
    } else {
      Swal.fire({
        title: "Error al iniciar sesión",
        text: "Revisa tu email y contraseña e intenta nuevamente.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <Modal show={show} onHide={cerrarModal}>
      <Modal.Body>
        <div>
          <div className="d-flex flex-column align-items-center justify-content-center mb-4">
            <i className="bi bi-check2-circle Css-Modal-Icon"></i>
            <h1 className="display-6 fs-2">Bienvenido</h1>
            <span className="text-muted">
              Inicie sesión en su cuenta para continuar
            </span>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)} className="Css-Form-Modal">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="tu@email.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 5,
                    message: "El email debe tener al menos 5 caracteres",
                  },
                  maxLength: {
                    value: 25,
                    message: "El email no debe exceder los 25 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "El email no es válido",
                  },
                })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="••••••••••"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&#.]{8,}$/,
                    message:
                      "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números",
                  },
                })}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <Button type="submit" className="w-100 css-btn-primary">
              Iniciar Sesión
            </Button>
          </Form>

          <div className="d-flex flex-column align-items-center text-center mt-3">
            <span className="mb-2">
              ¿Aún no estás registrado?{" "}
              <Link onClick={abrirRegistro} className="text-decoration-none">
                Regístrate aquí
              </Link>
            </span>
            <a href="#" className="text-muted text-decoration-none">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="p-0 d-flex justify-content-center align-content-center">
        <Button variant="secondary" onClick={handleClose} className="shadow-lg">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
