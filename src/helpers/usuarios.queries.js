const userBackend = import.meta.env.VITE_API_USER;

// Función auxiliar para obtener el token de forma segura
const obtenerToken = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioKey"));
  return usuario ? usuario.token : null;
};

//funcion para login de usuario
export const loginUserAPI = async (usuario) => {
  try {
    const respuesta = await fetch(`${userBackend}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
    return respuesta
  } catch (error) {
    console.error(error)
    return null
  }
};

//funcion para registrar usuario
export const registerUserAPI = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(userBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    })
    return respuesta
  } catch (error) {
    console.error(error)
    return null
  }
}