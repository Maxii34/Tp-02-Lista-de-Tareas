import { useEffect, useState } from "react"
import { Inicio, Bienvenido } from "./components/index"


function App() {
const [tareas, setTareas] = useState([])



  return (
    <>
      <Inicio tareas={tareas} setTareas={setTareas}/>
      <Bienvenido />
    </>
  )
}

export default App
