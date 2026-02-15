const tareasBackend = import.meta.env.VITE_API_TAREAS;

// Función auxiliar para obtener el token de forma segura
const obtenerToken = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioKey"));
  return usuario ? usuario.token : null;
};

//funcion para crear tarea
export const crearTarea = async (tareas) => {
  try {
    const respuesta = await fetch(tareasBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${obtenerToken()}`,
      },
      body: JSON.stringify(tareas),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//funcion para solicitar para listar tareas
export const listarTareas = async () => {
  try {
    const respuesta = await fetch(tareasBackend);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//funcion para solicitar editar
export const editarTareaAPI = async (id, tareas) => {
  try {
    const respuesta = await fetch(`${tareasBackend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${obtenerToken()}`,
      },
      body: JSON.stringify(tareas),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//funcion para borar tareas por id
export const borrarTareaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${tareasBackend}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${obtenerToken()}`,
      },
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
