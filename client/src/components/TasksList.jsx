import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api.js";
//import { TaskCard} from "./TaskCard";

/**Este es un componente que envio a mis paginas (en este caso a 
 * TaskPage) para mostrarlo como link */

export function TasksList() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    
    function loadTasks() {
      const res = getAllTasks();
      console.log(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div>TaksList</div>
  );
};
