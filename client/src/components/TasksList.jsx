import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

/**Este es un componente que envio a mis paginas (en este caso a 
 * TaskPage) para mostrarlo como link */

export function TasksList() {
  const [task, setTask] = useState([]);

  useEffect(() => {  
    async function loadTasks() {
      const res = await getAllTasks();
      setTask(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
