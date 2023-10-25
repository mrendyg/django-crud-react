import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api.js";
import { TaskCard } from "./TaskCard.jsx";

/**Este es un componente que envio a mis paginas (en este caso a 
 * TaskPage) para mostrarlo como link */

export function TasksList() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {  
    async function loadTasks() {
      const res = getAllTasks();
      console.log(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
