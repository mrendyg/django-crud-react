import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { TaskPage } from "./pages/TaskPage"
import { TaskFormPage } from "./pages/TaskFormPage"
import { Navegation } from "./components/Navigation"

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