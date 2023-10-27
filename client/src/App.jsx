import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TaskPage } from "./pages/TaskPage";
import { Toaster } from "react-hot-toast";

/*en esta pagina puedo enviar mi aplicacion o lo que yo
quiera a la vista de mi aplicacion*/ 

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate  to="/task"/>} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/task/:id" element={<TaskFormPage />} />
          <Route path="/task-create" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;