const tareasBackend = import.meta.env.VITE_API_TAREAS
const userBackend = import.meta.env.VITE_API_USER


//funcion para solicitar para listar tareas
export const listarTareas = async ()=>{
    try {
        const respuesta = await fetch(tareasBackend)
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//funcion para crear tarea
export const crearTarea = async (tareas)=>{
    try {
        const respuesta = await fetch(tareasBackend,{
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
          },
          body:JSON.stringify(tareas)
        })
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//funcion para solicitar editar
export const editarTareaAPI = async (id, tareas) => {
  try {
    const respuesta = await fetch(`${tareasBackend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(tareas),
    })
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.error(error)
    return null
  }
}

//funcion para borar tareas por id
export const borrarTareaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${tareasBackend}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      }
    })
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.error(error)
    return null
  }
}

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