import { Button, Modal, Form } from "react-bootstrap";
import { useProps } from "../context/PropsContext";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { registerUserAPI } from "../../helpers/usuarios.queries";

export const ModalRegister = () => {
  const { showRegister, handleCloseRegister, handleShow } = useProps();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const CloseRegistro = () => {
    handleCloseRegister();
  };
  const abrirLogin = () => {
    handleCloseRegister();
    handleShow();
  };

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

  const onSubmit = async (data) => {
    try {
      const nuevoUsuario = {
        nombreCompleto: data.nombreCompleto,
        email: data.email,
        password: data.password,
      };

      const respuesta = await registerUserAPI(nuevoUsuario);
      const datos = await respuesta.json();

      // Validar si la respuesta falló
      if (!respuesta.ok) {
        return Toast.fire({
          icon: "error",
          title: "Ocurrió un error",
          text:
            datos?.mensaje ||
            datos?.error ||
            "No se pudo completar el registro.",
        });
      }

      // Si todo salió bien
      Toast.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: "Te registraste correctamente.",
      });

      reset();
      CloseRegistro()
      //navegacion("/");
    } catch (error) {
      console.error("Error en registro:", error);
      Toast.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor.",
      });
    }
  };

  return (
    <>
      <Modal show={showRegister} onHide={CloseRegistro}>
        <Modal.Body>
          <div>
            <div className="d-flex flex-column align-items-center justify-content-center mb-4">
              <i className="bi bi-person-add Css-Modal-Icon"></i>
              <h1 className="display-6 fs-2">Crear Cuenta</h1>
              <span className="text-muted">
                Completa el formulario para registrarte
              </span>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)} className="Css-Form-Modal">
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  {...register("nombreCompleto", {
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 5,
                      message: "El nombre debe tener al menos 3 caracteres",
                    },
                    maxLength: {
                      value: 25,
                      message: "El nombre no debe exceder los 50 caracteres",
                    },
                  })}
                />
                {errors.nombreCompleto && (
                  <Form.Text className="text-danger">
                    {errors.nombreCompleto.message}
                  </Form.Text>
                )}
              </Form.Group>

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
                Registrarse
              </Button>
            </Form>

            <div className="d-flex flex-column align-items-center text-center mt-3">
              <span className="mb-2">
                ¿Ya tienes una cuenta?{" "}
                <Link onClick={abrirLogin} className="text-decoration-none">
                  Inicia sesión aquí
                </Link>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="p-0 d-flex justify-content-center align-content-center">
          <Button
            variant="secondary"
            onClick={CloseRegistro}
            className=" shadow-lg"
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
