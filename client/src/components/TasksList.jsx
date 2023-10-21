import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api.js";

/**Este es un componente que envio a mis paginas (en este caso a 
 * TaskPage) para mostrarlo como link */

function TasksList() {
  useEffect(() => {
    
    function loadTasks() {
      const res = getAllTasks()
      console.log(res)
    }
  loadTasks()
  }, []);

  return <div>TaksList</div>;  
};

export default TasksList;