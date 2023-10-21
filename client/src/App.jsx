import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { TaskPage } from "./pages/TaskPage"
import { TaskFormPage } from "./pages/TaskFormPage"
import { Navegation } from "./components/Navigation"

/*en esta pagina puedo enviar mi aplicacion o lo que yo
quiera a la vista de mi aplicacion*/ 

function App() {
  return (
    <BrowserRouter>
      <Navegation/>
      <Routes>
        <Route path="/" element={<Navigate to="/task"/>}/>
        <Route path="/task" element={<TaskPage/>}/>
        <Route path="/task-create" element={<TaskFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App