const tareasBackend = import.meta.env.VITE_API_TAREAS

console.log(tareasBackend)


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
//funcion para solicitar obtener tarea por id, pero no se usa en el proyecto (Eliminar depues...)
export const obtenerTareasPorId = async (id)=>{
    try {
        const respuesta = await fetch(`${tareasBackend}/${id}`)
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
            'Content-Type':'application/json'
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
    })
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.error(error)
    return null
  }
}
