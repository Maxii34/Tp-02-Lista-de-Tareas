import { createContext, useContext, useEffect, useState } from "react"; // ← Agregar useContext
import { listarTareas } from "../../helpers/queries";

const propsContext = createContext();

export const useProps = () => {
  const context = useContext(propsContext);
  if (!context) {
    throw new Error("useProps debe usarse dentro de un PropsProvider");
  }
  return context;
};

export const PropsProvider = ({ children }) => {
  // Aquí van todas las funciones y variables para compartir

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    //Solicitar los datos al backend con la funcion de queries
    const respuesta = await listarTareas();
    //Verificar que los datos llegen correctamente
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      //Cargar las tareas en el estado
      setTareas(datos);
    }
  };

  return (
    <propsContext.Provider
      value={{
        // Aquí van los valores/funciones para comprartir
        tareas,
        setTareas,
        obtenerTareas,
      }}
    >
      {children}
    </propsContext.Provider>
  );
};
